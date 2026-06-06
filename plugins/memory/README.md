# memory

Persistent, session-independent memory for OpenCode. Stores facts, decisions, preferences, observations, and tasks as markdown files in two scopes:

- **Local** (`.memory/` in project root) — per-project decisions, architecture, conventions
- **Global** (`~/.config/opencode/memory/`) — cross-project preferences, personal facts

## Tools Registered

| Tool | Purpose |
|---|---|
| `memory_write` | Store a memory (content, type, tags, scope) |
| `memory_read` | Read a specific memory file by path |
| `memory_search` | Search by keyword, type, or tag across one or both stores |
| `memory_forget` | Soft-delete a memory (moves to `.trash/`) |
| `memory_list` | List memory counts per scope |

## Install

This plugin uses `@opencode-ai/plugin`, which OpenCode resolves from a `package.json` in your config directory.

1. Copy `plugin.ts` to your project's plugin directory:
   ```
   .opencode/plugins/memory.ts
   ```

2. Create `.opencode/package.json` in your project with the dependency:
   ```json
   {
     "dependencies": {
       "@opencode-ai/plugin": "latest"
     }
   }
   ```

3. Restart OpenCode. It runs `bun install` automatically to install the dependency.

## File Format

Each memory is a `.md` file with YAML frontmatter:

```markdown
---
id: .memory/2026-06-06T14-30-21-abc123.md
type: decision
tags: [project/framework, project/api]
scope: local
created: 2026-06-06T14:30:21.000Z
source: memory_write tool
---

User chose FastAPI over Flask for this project.
Reason: native async support and automatic OpenAPI docs.
```

## Filename Convention

`<ISO-timestamp>-<6-char-random>.md` (e.g. `2026-06-06T14-30-21-x7k2pq.md`)
