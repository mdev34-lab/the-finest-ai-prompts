import type { Plugin } from "@opencode-ai/plugin"
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

const LOCAL_DIR = ".memory"
const GLOBAL_DIR = join(homedir(), ".config", "opencode", "memory")

function ensureStore(dir: string) {
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true })
}

function storePath(scope: "local" | "global"): string {
  return scope === "local" ? LOCAL_DIR : GLOBAL_DIR
}

function fileName(): string {
  const ts = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19)
  return `${ts}-${crypto.randomUUID().slice(0, 8)}.md`
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

export default (async ({ client, project, directory, $ }) => {
  ensureStore(LOCAL_DIR)
  ensureStore(GLOBAL_DIR)

  return {
    tool: {
      memory_write: {
        name: "memory_write",
        description:
          "Store a persistent memory (fact, decision, preference, observation, or task). " +
          "Scoped to the current project (local) or your global user config (cross-project). " +
          "Use local for project-specific decisions, global for personal preferences.",
        parameters: {
          type: "object",
          properties: {
            content: {
              type: "string",
              description: "The full text of the memory",
            },
            type: {
              type: "string",
              enum: ["fact", "decision", "preference", "observation", "task"],
              description: "Category of the memory",
            },
            tags: {
              type: "array",
              items: { type: "string" },
              description:
                "Tags for retrieval (e.g. user/tooling, project/auth, meta/pattern)",
            },
            scope: {
              type: "string",
              enum: ["local", "global"],
              default: "local",
              description:
                "local = project-scoped (.memory/), global = cross-project (~/.config/opencode/memory/)",
            },
          },
          required: ["content", "type"],
        },
        handler: async (input) => {
          const scope = (input.scope ?? "local") as "local" | "global"
          const dir = storePath(scope)
          ensureStore(dir)
          const file = join(dir, fileName())
          const meta = {
            id: file,
            type: input.type,
            tags: input.tags ?? [],
            scope,
            created: new Date().toISOString(),
            source: "memory_write tool",
          }
          writeFileSync(file, frontmatter(meta) + input.content, "utf-8")
          return `Stored ${scope} memory: ${input.type}`
        },
      },

      memory_read: {
        name: "memory_read",
        description:
          "Read the full content of a specific memory by its file path.",
        parameters: {
          type: "object",
          properties: {
            path: {
              type: "string",
              description:
                "Full path to the memory file (e.g. .memory/2026-06-06T14-30-21-something.md)",
            },
          },
          required: ["path"],
        },
        handler: async (input) => {
          if (!existsSync(input.path)) return `File not found: ${input.path}`
          const content = readFileSync(input.path, "utf-8")
          return content
        },
      },

      memory_search: {
        name: "memory_search",
        description:
          "Search memories by keyword, type, or tags across both local and global stores.",
        parameters: {
          type: "object",
          properties: {
            keyword: {
              type: "string",
              description: "Search term to match in memory body or frontmatter",
            },
            type: {
              type: "string",
              enum: ["fact", "decision", "preference", "observation", "task"],
              description: "Filter by memory type",
            },
            tag: {
              type: "string",
              description: "Filter by tag (e.g. user/tooling)",
            },
            scope: {
              type: "string",
              enum: ["local", "global", "both"],
              default: "both",
              description: "Which store to search",
            },
          },
        },
        handler: async (input) => {
          const dirs: string[] = []
          if (input.scope !== "global") dirs.push(LOCAL_DIR)
          if (input.scope !== "local") dirs.push(GLOBAL_DIR)

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
              if (input.keyword && !raw.toLowerCase().includes(input.keyword.toLowerCase())) match = false
              if (input.type && !raw.includes(`type: ${input.type}`)) match = false
              if (input.tag && !raw.includes(`tags:`)) match = false
              if (input.tag && raw.includes("tags:")) {
                const tagMatch = raw.match(/tags:\s*\[([^\]]*)\]/)
                if (!tagMatch || !tagMatch[1].includes(input.tag)) match = false
              }

              if (match) {
                results.push({
                  path: full,
                  summary: body.slice(0, 120).replace(/\n/g, " "),
                })
              }
            }
          }

          if (results.length === 0) return "No memories found."
          return results
            .map(
              (r, i) =>
                `${i + 1}. ${r.path} — ${r.summary}${r.summary.length >= 120 ? "..." : ""}`,
            )
            .join("\n")
        },
      },

      memory_forget: {
        name: "memory_forget",
        description:
          "Soft-delete a memory by moving it to a .trash folder within its store.",
        parameters: {
          type: "object",
          properties: {
            path: {
              type: "string",
              description:
                "Full path to the memory file to delete",
            },
          },
          required: ["path"],
        },
        handler: async (input) => {
          if (!existsSync(input.path))
            return `File not found: ${input.path}`
          const trash = join(input.path, "..", ".trash")
          ensureStore(trash)
          const dest = join(trash, input.path.split(/[/\\]/).pop()!)
          renameSync(input.path, dest)
          return `Moved to trash: ${dest}`
        },
      },

      memory_list: {
        name: "memory_list",
        description:
          "List all memories, optionally filtered by scope.",
        parameters: {
          type: "object",
          properties: {
            scope: {
              type: "string",
              enum: ["local", "global", "both"],
              default: "both",
              description:
                "Which store to list from",
            },
          },
        },
        handler: async (input) => {
          const dirs: string[] = []
          if (input.scope !== "global") dirs.push(LOCAL_DIR)
          if (input.scope !== "local") dirs.push(GLOBAL_DIR)

          const entries: { scope: string; count: number }[] = []

          for (const dir of dirs) {
            if (!existsSync(dir)) {
              entries.push({ scope: dir, count: 0 })
              continue
            }
            const files = readdirSync(dir).filter(
              (f) => f.endsWith(".md") && !f.startsWith("."),
            )
            entries.push({ scope: dir, count: files.length })
          }

          return entries
            .map((e) => `${e.scope}: ${e.count} memories`)
            .join("\n")
        },
      },
    },
  }
}) satisfies Plugin
