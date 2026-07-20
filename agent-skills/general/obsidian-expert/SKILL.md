---
name: obsidian-expert
description: >
  Comprehensive Obsidian skill covering vault organization (PARA, Zettelkasten, MOCs, Johnny Decimal),
  Obsidian-flavored Markdown (wikilinks, embeds, callouts, block refs), linking & graph maintenance,
  Canvas/Excalidraw/Draw files, Dataview/DB Folder/Projects database queries, CLI tools (obsidian CLI,
  obsidian-export, Local REST API, obsidian-agent-cli), key plugins (Templater, QuickAdd, Tasks,
  Omnisearch, Style Settings, Obsidian Git), Templater scripting, vault maintenance, and YAML
  frontmatter/properties conventions. Use when the user asks about Obsidian, note-taking, vault
  management, PKM, or markdown knowledge management.
license: CC BY 4.0
metadata:
    author: mdev34-lab
    works_with: Any LLM
    tldr: Full Obsidian expertise — vault structure, Markdown syntax, plugins, CLI, Dataview, Templater, maintenance
---

# Obsidian Expert

You are an Obsidian expert. You cover everything about the Obsidian note-taking ecosystem: vault organization, Markdown syntax, linking and graph theory, drawings/canvas, databases, CLI tools, plugins, templates, and maintenance.

---

## Vault Organization

### PARA Method
Four top-level folders sorted by actionability:
- `10 Projects` — active work with deliverable+deadline
- `20 Areas` — ongoing responsibilities (health, finance)
- `30 Resources` — reference material (books, concepts)
- `40 Archive` — completed/dormant items

Rule: "Move, do not delete." Finished projects go to Archive.

### Zettelkasten
- Atomic notes: one concept per note, claim-titled
- Evergreen: durable knowledge in your own words
- Densely linked via `[[wikilinks]]` — notes discovered by traversing links, not folders
- Lives inside Resources; MOCs act as entry points

### Johnny Decimal
Strict numeric taxonomy with ACID notation: `SYS.AC.ID` (System.Area.Category).
```
VAULT/
├── LIFE/10-Area/11-Category/LIFE.11.01-Title.md
├── _SYS/00-JDEX/00.00.base
└── 00.00.md
```

### Maps of Content (MOCs)
Curated index notes for topics. Created at "mental squeeze points" (~8+ notes on a topic).
- Project MOC, Person MOC, Theme MOC, Decisions MOC
- Non-destructive: same note appears in many MOCs
- LYT convention: `+ MOCs/` at top level

### Folder vs Tags vs Properties
- **Folders**: broad areas of life (stable, small set)
- **Tags**: cross-cutting concerns (`#status/active`, `#type/reference`)
- **Properties**: structured queryable data (YAML frontmatter for Dataview)

---

## Obsidian-Flavored Markdown

### Link Syntax
| Feature | Syntax |
|---------|--------|
| Wikilink | `[[Note Title]]` |
| Aliased | `[[Note\|Display]]` |
| Heading link | `[[Note#Heading]]` |
| Block reference | `[[Note#^block-id]]` |
| Embed note | `![[Note]]` |
| Embed heading | `![[Note#Heading]]` |
| Embed block | `![[Note#^block-id]]` |
| Embed image | `![[image.png\|400]]` |
| Embed PDF | `![[doc.pdf]]` |

### Callouts
```
> [!note] / [!abstract] / [!info] / [!todo]
> [!tip] / [!success] / [!question]
> [!warning] / [!failure] / [!danger]
> [!bug] / [!example] / [!quote]
```
Collapsible: `> [!note]+` (expanded) / `> [!note]-` (collapsed). Custom title: `> [!tip] My Title`.

### Other Markdown
- Highlight: `==text==`
- Comment (source-only): `%%hidden%%`
- Block ID: `^my-id` at line end
- Task: `- [ ] task` / `- [x] done`
- Math: `$inline$` / `$$display$$`
- Horizontal rule: `---`

---

## Graph & Maintenance

### Backlinks
Every `[[wikilink]]` creates automatic reverse links. Backlinks panel shows:
- **Linked mentions**: notes with explicit `[[this note]]`
- **Unlinked mentions**: text matches without formal wikilink (one-click to convert)

### Graph View
- Global Graph (`Ctrl+G`)
- **Orphans filter**: notes with zero connections
- Filter by path: `-path:Daily/` to exclude dailies
- Local Graph (sidebar): configurable depth (2 = sweet spot)
- Forces tuning: increase Link Distance, adjust Repel Force for readability

### Periodic Notes (Liam Cain)
| Type | Format | Example |
|------|--------|---------|
| Daily | `YYYY-MM-DD` | `2026-07-13` |
| Weekly | `gggg-[W]ww` | `2026-W28` |
| Monthly | `YYYY-MM` | `2026-07` |

### Vault Maintenance
- **Weekly** (30 min): Orphans → link or archive; check unlinked mentions; update MOCs; review stale notes
- **Monthly**: Run health scan; delete unused attachments; consolidate tags; archive projects
- **Tools**: Vault Doctor, Vault Inspector, Vault Plus, obsidian-agent-cli
- **Rule**: Every new note must have at least 1 `[[wikilink]]` before closing

**CLI checks**:
```
obsidian note orphans
obsidian note links --broken
obsidian tag list
obsidian tag rename "old" "new"
obsidian batch frontmatter --set status=active --where "status: draft"
```

---

## Canvas / Excalidraw

### Canvas (.canvas)
JSON Canvas spec v1.0. Node types: `text`, `file`, `link`, `group`. Embed: `![[file.canvas]]`.
```json
{ "nodes": [{ "id": "n1", "type": "text", "text": "Hello", "x": 0, "y": 0, "width": 200, "height": 100 }],
  "edges": [{ "id": "e1", "fromNode": "n1", "toNode": "n2", "fromSide": "bottom", "toSide": "top", "fromEnd": "none", "toEnd": "arrow" }] }
```

### Excalidraw
Three formats:
- `.excalidraw` — pure JSON (compat with excalidraw.com)
- `.excalidraw.md` — Markdown with embedded JSON, full Obsidian integration (default)
- `.md` — Markdown with JSON, Logseq compat

Structure: frontmatter → Markdown body (back of note) → fenced code block with compressed JSON (LZString base64, 256-char chunks for git-friendliness).

---

## Databases

### Dataview Query Language (DQL)
Four types: `LIST`, `TABLE`, `TASK`, `CALENDAR`

Pipelined commands: `TABLE ... FROM ... WHERE ... SORT ... GROUP BY ... FLATTEN ... LIMIT`
```
TABLE author, genre, rating AS "Rating"
FROM "Books"
WHERE status = "finished" AND rating >= 4
SORT rating DESC
```

**FROM sources**: folder `"Folder"`, tag `#tag`, link `[[Note]]`, combined with `AND`, exclude with `-`
**Common metadata**: `file.name`, `file.link`, `file.tags`, `file.day`, `file.cday`, `file.mtime`, `file.inlinks`, `file.outlinks`, `file.etags`
**DataviewJS**: `dv.pages("#tag").where(p => ...).groupBy(...)` — full JS API

### DB Folder Plugin
Notion-like tables from a folder of notes. Bidirectional: edit cell → updates YAML frontmatter.
Column types: text, number, checkbox, date, select, multi-select. Max ~500 files per folder.

### Projects Plugin
Visual dashboards from frontmatter: Table, Board (Kanban), Gallery, Calendar views.
Inline editing writes back to YAML. Dataview query source = read-only.

### Metadata Menu Plugin
Field-level validation, dropdowns, date pickers for structured data entry.

---

## CLI Tools

### Official Obsidian CLI
```
obsidian search query="status::active" vault="Notes" format=json
obsidian unresolved
obsidian daily:append content="- [ ] process inbox"
obsidian eval "app.vault.getFiles().length"
obsidian sync --vault "Notes"
obsidian plugin:reload my-plugin
```

### Local REST API Plugin
HTTP API at `http://127.0.0.1:27123` with auth key. Endpoints: GET/PUT/PATCH/DELETE on vault paths, search.

### obsidian-agent-cli (Python)
```
obsidian note create "Title" --content "..."
obsidian search "query"
obsidian periodic daily --read
obsidian canvas build --from-json spec.json
obsidian excalidraw create --from-json diagram.json
obsidian tasks list
obsidian git sync -m "feat: update"
```
Dual-transport: REST API first, falls back to filesystem. JSON output.

### obsidian-export (Rust)
Exports vault to CommonMark: resolves `[[wikilinks]]`, copies embedded images.
```
obsidian-export /path/to/vault /path/to/output
```

### Obsidian Git Plugin
Setup: `git init` in vault root, add `.gitignore` (workspace, cache, trash), connect remote.
Auto commit-and-sync at configurable interval (5-30 min). Pull on startup: enabled.
Multi-device: desktop (plugin), Android (GitSync), iOS (Working Copy).

---

## Key Plugins

| Plugin | Purpose | Install Rate |
|--------|---------|------------|
| Dataview | Query vault like a DB | ~70% |
| Templater | JS-powered dynamic templates | ~60% |
| QuickAdd | Quick capture + macros | ~50% |
| Tasks | Advanced task management | ~40% |
| Calendar | Visual calendar navigation | ~50% |
| Excalidraw | Hand-drawn diagrams | ~30% |
| Kanban | Kanban boards as markdown | ~30% |
| Obsidian Git | Git version control | ~40% |
| Omnisearch | Fuzzy full-text + OCR | ~30% |
| Style Settings | CSS variable editor | ~35% |
| Periodic Notes | Daily/weekly/monthly/yearly | ~35% |
| DB Folder | Notion-like tables | ~15% |
| Projects | Visual dashboards | ~20% |
| Metadata Menu | Field validation | ~15% |

### QuickAdd
Three choice types: **Template** (new note), **Capture** (append to note), **Macro** (multi-step script).
Format syntax: `{{VALUE}}`, `{{DATE:HH:mm}}`, `{{VALUE:varName}}`, `{{MACRO:MacroName}}`.

### Tasks Plugin
Format: `- [ ] #task Description [due:: 2026-07-20] [priority:: high] [repeat:: every week]`
Fields: created, scheduled, start, due, completion, cancelled, priority, repeat, id, dependsOn, onCompletion.

### Omnisearch
BM25 relevance scoring. Fuzzy matching, PDF indexing, OCR (via Text Extractor).
Filters: `path:"Folder"`, `ext:pdf`, `"exact phrase"`, `-exclude`. URL scheme: `obsidian://omnisearch?query=foo`

---

## Templater

### Tag Types
- `<% tp.date.now() %>` — interpolation (outputs value)
- `<%* code %>` — execution (runs JS, outputs nothing)
- `<%+ expr %>` — dynamic (re-evaluates in Reading mode)

### Core Modules
**tp.date**: `tp.date.now(format?, offset?)`, `tp.date.tomorrow()`, `tp.date.yesterday()`, `tp.date.weekday(format, weekday)`
**tp.file**: `tp.file.title`, `tp.file.folder()`, `tp.file.path()`, `tp.file.include("[[Note]]")`, `tp.file.create_new(template, filename, open_new?, folder?)`, `tp.file.move(path)`, `tp.file.rename(title)`, `tp.file.cursor(order?)`, `tp.file.exists(path)`
**tp.system** (async): `tp.system.prompt()`, `tp.system.suggester()`, `tp.system.clipboard()`
**tp.web**: `tp.web.daily_quote()`
**tp.config**: `tp.config.target_file`, `tp.config.run_mode`

### Common Pattern
```
---
date: <% tp.date.now() %>
type: daily
---
<< [[<% tp.date.yesterday() %>]] | [[<% tp.date.tomorrow() %>]] >>

# <% tp.file.title %>

<% tp.web.daily_quote() %>
<% tp.file.cursor() %>
```

### Folder Templates
Maps template → folder. New notes in that folder auto-apply the template.
tp.user: `.js` files in User Script Functions folder, called as `tp.user.functionName()`. Not available on mobile.

---

## YAML Frontmatter / Properties

### Basics
```yaml
---
title: "Note Title"
tags: [project, status/active]
aliases: [alt-name]
created: 2026-07-13
updated: 2026-07-13
status: draft
type: reference
---
```
Must start on line 1. `---` delimiters. String keys only.

### Property Types
Text, Number, Date (`YYYY-MM-DD`), Checkbox (`true`/`false`), List (inline `[a, b]` or multi-line).

### Conventions
- Singular keys for single values, plural for lists
- No spaces in keys (`dueDate` not `due date`)
- Lowercase keys
- ISO 8601 dates
- Nested tags in frontmatter: `tags: [project/mobile, status/active]`

### Status Taxonomy
`draft → active → review → completed → archived`

### Type Taxonomy
`project`, `meeting`, `daily-note`, `reference`, `person`, `book-note`, `idea`, `moc`

### Search
Core Search: `[status:active]` finds all notes with `status: active`.
Dataview: `WHERE status = "active"`

### Advanced
Nested metadata: `metadata: { source: "Book", author: "Name" }` (flat in Properties panel, nested in Dataview).
Links in frontmatter: `project: "[[Project Name]]"` — queryable via Dataview.

---

## Anti-Patterns
- **Replicating folder structure in tags** — double bookkeeping, pick one
- **Orphan notes** — every note needs at least one `[[wikilink]]`
- **Over-nesting folders** — 3 levels max, beyond that use links
- **Frontmatter drift** — missing keys or type mismatches across vault; use Metadata Menu for validation
- **Tag inconsistency** — `#projet` vs `#Projet` vs `#projets`; run `obsidian tag list` to audit
