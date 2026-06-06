import { type Plugin, tool } from "@opencode-ai/plugin"
import { join } from "node:path"
import { homedir } from "node:os"
import {
  mkdirSync,
  readFileSync,
  writeFileSync,
  readdirSync,
  existsSync,
  renameSync,
} from "node:fs"

const GLOBAL_DIR = join(homedir(), ".config", "opencode", "memory")

type MemoryType = "fact" | "decision" | "preference" | "observation" | "task"

interface Memory {
  path: string
  scope: "local" | "global"
  type: MemoryType
  tags: string[]
  body: string
}

interface PluginOptions {
  autoInject?: boolean
  limit?: number
  maxChars?: number
  timeoutMs?: number
  scope?: "local" | "global" | "both"
}

function ensureStore(dir: string) {
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true })
}

function storeRoot(scope: "local" | "global", worktree: string): string {
  return scope === "local" ? join(worktree, ".memory") : GLOBAL_DIR
}

function fileName(): string {
  const ts = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19)
  const rand = Math.random().toString(36).slice(2, 8)
  return `${ts}-${rand}.md`
}

function frontmatter(data: Record<string, unknown>): string {
  const yaml = Object.entries(data)
    .map(([k, v]) => {
      if (Array.isArray(v)) return `${k}: [${v.join(", ")}]`
      if (typeof v === "string") return `${k}: ${v}`
      return `${k}: ${String(v)}`
    })
    .join("\n")
  return `---\n${yaml}\n---\n\n`
}

function loadMemories(scope: "local" | "global" | "both", worktree: string): Memory[] {
  const dirs: { scope: "local" | "global"; dir: string }[] = []
  if (scope !== "global") dirs.push({ scope: "local", dir: join(worktree, ".memory") })
  if (scope !== "local") dirs.push({ scope: "global", dir: GLOBAL_DIR })

  const out: Memory[] = []
  for (const { scope: s, dir } of dirs) {
    if (!existsSync(dir)) continue
    const files = readdirSync(dir).filter(
      (f) => f.endsWith(".md") && !f.startsWith("."),
    )
    for (const f of files) {
      const full = join(dir, f)
      const raw = readFileSync(full, "utf-8")
      const fmMatch = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/)
      if (!fmMatch) continue
      const fm = fmMatch[1]
      const body = fmMatch[2].trim()
      const typeMatch = fm.match(/type:\s*(\w+)/)
      const tagsMatch = fm.match(/tags:\s*\[([^\]]*)\]/)
      const type = (typeMatch?.[1] as MemoryType) ?? "fact"
      const tags = tagsMatch?.[1].split(",").map((t) => t.trim()).filter(Boolean) ?? []
      out.push({ path: full, scope: s, type, tags, body })
    }
  }
  return out
}

function scoreMemory(memory: Memory, query: string): number {
  const words = query.toLowerCase().split(/\s+/).filter((w) => w.length >= 2)
  if (words.length === 0) return 0
  const hay = `${memory.type} ${memory.tags.join(" ")} ${memory.body}`.toLowerCase()
  let score = 0
  for (const w of words) {
    if (hay.includes(w)) score++
    if (memory.type === w) score += 2
    if (memory.tags.some((t) => t.toLowerCase().includes(w))) score += 2
  }
  return score
}

function buildContext(
  memories: Memory[],
  query: string,
  limit: number,
  maxChars: number,
): string {
  if (!query.trim()) return ""
  const scored = memories
    .map((m) => ({ m, score: scoreMemory(m, query) }))
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
  if (scored.length === 0) return ""

  const lines: string[] = []
  let used = 0
  for (const { m } of scored) {
    const prefix = `- [${m.type}/${m.scope}] `
    const remaining = maxChars - used - prefix.length
    if (remaining <= 30) break
    const snippet = m.body.replace(/\s+/g, " ").trim()
    const cap = Math.min(remaining, 260)
    const truncated =
      snippet.length > cap ? snippet.slice(0, Math.max(0, cap - 1)).trimEnd() + "…" : snippet
    const line = prefix + truncated
    lines.push(line)
    used += line.length + 1
  }
  return lines.length ? lines.join("\n") : ""
}

const withTimeout = async <T>(promise: Promise<T>, ms: number): Promise<T | undefined> => {
  let timer: ReturnType<typeof setTimeout> | undefined
  try {
    return await Promise.race([
      promise,
      new Promise<undefined>((resolve) => {
        timer = setTimeout(() => resolve(undefined), ms)
      }),
    ])
  } finally {
    if (timer) clearTimeout(timer)
  }
}

const textFromParts = (parts: unknown): string => {
  if (!Array.isArray(parts)) return ""
  return parts
    .map((p) => {
      if (typeof p !== "object" || !p) return ""
      if (!("type" in p) || (p as { type: unknown }).type !== "text") return ""
      if (!("text" in p) || typeof (p as { text: unknown }).text !== "string") return ""
      return (p as { text: string }).text
    })
    .filter(Boolean)
    .join("\n")
    .trim()
}

export const MemoryPlugin: Plugin = async (ctx, options?: PluginOptions) => {
  const autoInject = options?.autoInject ?? true
  const limit = options?.limit ?? 5
  const maxChars = options?.maxChars ?? 1200
  const timeoutMs = options?.timeoutMs && options.timeoutMs > 0 ? options.timeoutMs : 100
  const scope = options?.scope ?? "both"

  let latestPrompt = ""

  return {
    tool: {
      memory_write: tool({
        description:
          "Store a persistent memory (fact, decision, preference, observation, or task). " +
          "Local scope stores under .memory/ in the project root. " +
          "Global scope stores under ~/.config/opencode/memory/ (cross-project).",
        args: {
          content: tool.schema.string().describe("The full text of the memory"),
          type: tool
            .schema
            .enum(["fact", "decision", "preference", "observation", "task"])
            .describe("Category of the memory"),
          tags: tool
            .schema
            .array(tool.schema.string())
            .optional()
            .describe("Tags for retrieval, e.g. user/tooling, project/auth"),
          scope: tool
            .schema
            .enum(["local", "global"])
            .optional()
            .default("local")
            .describe("local = project-scoped, global = cross-project"),
        },
        async execute(args, ctx) {
          const scope = args.scope ?? "local"
          const dir = storeRoot(scope, ctx.worktree)
          ensureStore(dir)
          const file = join(dir, fileName())
          const meta = {
            id: file,
            type: args.type,
            tags: args.tags ?? [],
            scope,
            created: new Date().toISOString(),
            source: "memory_write tool",
          }
          writeFileSync(file, frontmatter(meta) + args.content, "utf-8")
          return `Stored ${scope} memory: ${args.type}`
        },
      }),

      memory_read: tool({
        description:
          "Read the full content of a specific memory by its relative or absolute path.",
        args: {
          path: tool
            .schema
            .string()
            .describe("Path to the memory file (relative to project dir or absolute)"),
        },
        async execute(args, ctx) {
          const resolved = join(ctx.directory, args.path)
          if (!existsSync(resolved)) {
            return { output: `File not found: ${args.path}`, title: "Not found" }
          }
          const content = readFileSync(resolved, "utf-8")
          return content
        },
      }),

      memory_search: tool({
        description:
          "Search memories by keyword, type, or tag across local and/or global stores.",
        args: {
          keyword: tool
            .schema
            .string()
            .optional()
            .describe("Search term to match in memory body or frontmatter"),
          type: tool
            .schema
            .enum(["fact", "decision", "preference", "observation", "task"])
            .optional()
            .describe("Filter by memory type"),
          tag: tool
            .schema
            .string()
            .optional()
            .describe("Filter by tag, e.g. user/tooling"),
          scope: tool
            .schema
            .enum(["local", "global", "both"])
            .optional()
            .default("both")
            .describe("Which store(s) to search"),
        },
        async execute(args, ctx) {
          const dirs: string[] = []
          if (args.scope !== "global") dirs.push(join(ctx.worktree, ".memory"))
          if (args.scope !== "local") dirs.push(GLOBAL_DIR)

          const results: { path: string; summary: string }[] = []
          for (const dir of dirs) {
            if (!existsSync(dir)) continue
            const files = readdirSync(dir).filter(
              (f) => f.endsWith(".md") && !f.startsWith("."),
            )
            for (const f of files) {
              const full = join(dir, f)
              const raw = readFileSync(full, "utf-8")
              const body = raw.replace(/---[\s\S]*?---\n?/, "").trim()

              let match = true
              if (args.keyword && !raw.toLowerCase().includes(args.keyword.toLowerCase())) match = false
              if (args.type && !raw.includes(`type: ${args.type}`)) match = false
              if (args.tag) {
                const tagMatch = raw.match(/tags:\s*\[([^\]]*)\]/)
                if (!tagMatch || !tagMatch[1].includes(args.tag)) match = false
              }
              if (match) {
                results.push({
                  path: full,
                  summary: body.slice(0, 200).replace(/\n/g, " "),
                })
              }
            }
          }

          if (results.length === 0) return "No memories found."
          return results
            .map(
              (r, i) =>
                `${i + 1}. ${r.path} — ${r.summary}${r.summary.length >= 200 ? "..." : ""}`,
            )
            .join("\n\n")
        },
      }),

      memory_forget: tool({
        description:
          "Soft-delete a memory by moving it to a .trash folder within its store.",
        args: {
          path: tool
            .schema
            .string()
            .describe("Path to the memory file to delete (relative or absolute)"),
        },
        async execute(args, ctx) {
          const resolved = join(ctx.directory, args.path)
          if (!existsSync(resolved)) {
            return { output: `File not found: ${args.path}`, title: "Not found" }
          }
          const trash = join(resolved, "..", ".trash")
          ensureStore(trash)
          const dest = join(trash, resolved.split(/[/\\]/).pop()!)
          renameSync(resolved, dest)
          return `Moved to trash: ${dest}`
        },
      }),

      memory_list: tool({
        description:
          "List all memories, optionally filtered by scope.",
        args: {
          scope: tool
            .schema
            .enum(["local", "global", "both"])
            .optional()
            .default("both")
            .describe("Which store(s) to list"),
        },
        async execute(args, ctx) {
          const dirs: { scope: string; dir: string }[] = []
          if (args.scope !== "global") dirs.push({ scope: "local", dir: join(ctx.worktree, ".memory") })
          if (args.scope !== "local") dirs.push({ scope: "global", dir: GLOBAL_DIR })

          const entries: { scope: string; count: number }[] = []
          for (const { scope, dir } of dirs) {
            if (!existsSync(dir)) {
              entries.push({ scope, count: 0 })
              continue
            }
            const files = readdirSync(dir).filter(
              (f) => f.endsWith(".md") && !f.startsWith("."),
            )
            entries.push({ scope, count: files.length })
          }

          return entries.map((e) => `${e.scope}: ${e.count} memories`).join("\n")
        },
      }),
    },

    "chat.message": async (_input, output) => {
      const text = textFromParts(output.parts)
      if (!text) return
      latestPrompt = text
    },

    "experimental.chat.system.transform": async (_input, output) => {
      if (!autoInject) return
      if (!latestPrompt) return

      const pack = await withTimeout(
        Promise.resolve().then(() => {
          const memories = loadMemories(scope, ctx.worktree)
          return buildContext(memories, latestPrompt, limit, maxChars)
        }),
        timeoutMs,
      )

      if (!pack) return
      output.system.push(
        `## Relevant Memory\n\n${pack}\n\nUse these memories only when relevant. Do not mention this block unless asked.`,
      )
    },
  }
}

export default MemoryPlugin
