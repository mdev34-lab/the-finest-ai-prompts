# Plugins

OpenCode plugins. Each plugin is a single `.ts` file at the top level of this directory (no subdirectories — OpenCode's auto-discovery glob is `{plugin,plugins}/*.{ts,js}` and does not recurse).

## memory

Persistent, session-independent memory. Stores facts, decisions, preferences, observations, and tasks as markdown files in two scopes:

- **Local** (`.memory/` in project root) — per-project decisions, architecture, conventions
- **Global** (`~/.config/opencode/memory/`) — cross-project preferences, personal facts

### Tools Registered

| Tool | Purpose |
|---|---|
| `memory_write` | Store a memory (content, type, tags, scope) |
| `memory_read` | Read a specific memory file by path |
| `memory_search` | Search by keyword, type, or tag across one or both stores |
| `memory_forget` | Soft-delete a memory (moves to `.trash/`) |
| `memory_list` | List memory counts per scope |

### Install

1. Copy `memory.ts` to your project's plugin directory:
   ```
   .opencode/plugins/memory.ts
   ```
   The file must be at the **top level** of `plugins/` — not in a subdirectory.

2. OpenCode auto-creates `.opencode/package.json` with `@opencode-ai/plugin` on first start. If that fails, create it manually:
   ```json
   {
     "dependencies": {
       "@opencode-ai/plugin": "latest"
     }
   }
   ```

3. Restart OpenCode. It runs `bun install` automatically.

### File Format

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

### Filename Convention

`<ISO-timestamp>-<6-char-random>.md` (e.g. `2026-06-06T14-30-21-x7k2pq.md`)

### Verifying the Plugin Type-Checks

A `package.json` sample is included as `memory.package.sample.json` for local type-checking. To verify:

```bash
cd .opencode  # or your project root if you have package.json there
cp ../plugins/memory.package.sample.json package.json
bun install
bunx tsc --noEmit --target esnext --module esnext --moduleResolution bundler \
  --strict --skipLibCheck --types node plugins/memory.ts
```
