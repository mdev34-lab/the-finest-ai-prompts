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

const MAX_MATCHERS = 10
const MAX_MATCHER_LENGTH = 200

type MemoryType = "fact" | "decision" | "preference" | "observation" | "task"

interface Memory {
  path: string
  scope: "local" | "global"
  type: MemoryType
  tags: string[]
  matchers: string[]
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
  return `---\n${JSON.stringify(data, null, 2)}\n---\n\n`
}

function parseFrontmatter(raw: string): Record<string, unknown> | null {
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/)
  if (!m) return null
  try {
    const parsed = JSON.parse(m[1])
    return typeof parsed === "object" && parsed !== null
      ? (parsed as Record<string, unknown>)
      : null
  } catch {
    return null
  }
}

function asStringArray(v: unknown): string[] {
  if (!Array.isArray(v)) return []
  return v.filter((x): x is string => typeof x === "string")
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
      const fm = parseFrontmatter(raw)
      const body = raw.replace(/^---[\s\S]*?---\n?/, "").trim()
      const type = (fm?.type as MemoryType) ?? "fact"
      out.push({
        path: full,
        scope: s,
        type,
        tags: asStringArray(fm?.tags),
        matchers: asStringArray(fm?.matchers).slice(0, MAX_MATCHERS),
        body,
      })
    }
  }
  return out
}

function scoreMemory(memory: Memory, query: string): number {
  if (!query.trim()) return 0
  const words = query.toLowerCase().split(/\s+/).filter((w) => w.length >= 2)
  let score = 0

  if (words.length > 0) {
    const hay = `${memory.type} ${memory.tags.join(" ")} ${memory.body}`.toLowerCase()
    for (const w of words) {
      if (hay.includes(w)) score += 1
      if (memory.type === w) score += 2
      if (memory.tags.some((t) => t.toLowerCase().includes(w))) score += 2
    }
  }

  for (const pattern of memory.matchers) {
    if (pattern.length === 0 || pattern.length > MAX_MATCHER_LENGTH) continue
    try {
      if (new RegExp(pattern, "i").test(query)) score += 5
    } catch {
      // skip invalid regex silently
    }
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

const extractLatestUserText = (input: unknown): string => {
  const messages: unknown[] =
    typeof input === "object" && input !== null && "messages" in input
      ? ((input as { messages?: unknown[] }).messages ?? [])
      : []
  for (let i = messages.length - 1; i >= 0; i--) {
    const m = messages[i] as Record<string, unknown> | null
    if (!m) continue
    const info = (m.info as Record<string, unknown> | undefined) ?? undefined
    const role = (info?.role as string | undefined) ?? (m.role as string | undefined)
    if (role !== "user") continue
    if (Array.isArray(m.parts)) {
      const text = textFromParts(m.parts)
      if (text) return text
    }
    if (typeof m.content === "string" && m.content.trim()) return m.content.trim()
    if (Array.isArray(m.content)) {
      const text = m.content
        .map((c) => {
          if (typeof c !== "object" || !c) return ""
          if ((c as { type?: unknown }).type !== "text") return ""
          const t = (c as { text?: unknown }).text
          return typeof t === "string" ? t : ""
        })
        .filter(Boolean)
        .join("\n")
        .trim()
      if (text) return text
    }
  }
  return ""
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
          "Tags are simple keywords for filtering. Matchers are JavaScript regex patterns " +
          "(no slashes) that, if they match the user's current prompt, make this memory much " +
          "more likely to surface via auto-injection. Local scope stores under .memory/ in the " +
          "project root. Global scope stores under ~/.config/opencode/memory/ (cross-project).",
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
            .describe("List of keyword tags for filtering, e.g. ['user/tooling', 'project/auth']"),
          matchers: tool
            .schema
            .array(tool.schema.string())
            .optional()
            .describe(
              "List of JavaScript regex patterns (no slashes, no flags). " +
                "If a pattern matches the user's prompt, the memory scores higher in auto-injection. " +
                "Examples: ['fastapi', 'fast.?api', 'python.*async']",
            ),
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
            matchers: (args.matchers ?? []).slice(0, MAX_MATCHERS),
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
          const memories = loadMemories(args.scope ?? "both", ctx.worktree)
          const results = memories.filter((m) => {
            if (args.keyword) {
              const kw = args.keyword.toLowerCase()
              const hay = `${m.type} ${m.tags.join(" ")} ${m.body}`.toLowerCase()
              if (!hay.includes(kw)) return false
            }
            if (args.type && m.type !== args.type) return false
            if (args.tag && !m.tags.some((t) => t.includes(args.tag!))) return false
            return true
          })

          if (results.length === 0) return "No memories found."
          return results
            .map(
              (m, i) =>
                `${i + 1}. ${m.path} — ${m.body.slice(0, 200).replace(/\n/g, " ")}${m.body.length >= 200 ? "..." : ""}`,
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
          const memories = loadMemories(args.scope ?? "both", ctx.worktree)
          const counts: Record<string, number> = { local: 0, global: 0 }
          for (const m of memories) counts[m.scope]++
          return `local: ${counts.local} memories\nglobal: ${counts.global} memories`
        },
      }),
    },

    "chat.message": async (_input, output) => {
      const text = textFromParts(output.parts)
      if (!text) return
      latestPrompt = text
    },

    "experimental.chat.system.transform": async (input, output) => {
      if (!autoInject) return

      const fresh = extractLatestUserText(input)
      const query = (fresh || latestPrompt).trim()
      if (!query) return

      const pack = await withTimeout(
        Promise.resolve().then(() => {
          const memories = loadMemories(scope, ctx.worktree)
          return buildContext(memories, query, limit, maxChars)
        }),
        timeoutMs,
      )

      if (!pack) return
      const stamp = new Date().toISOString().slice(11, 19)
      output.system.push(
        `## Relevant Memory (auto-injected @${stamp})\n\n${pack}\n\n` +
          `Use these memories only when relevant. Do not mention this block unless asked.`,
      )
    },
  }
}

export default MemoryPlugin
