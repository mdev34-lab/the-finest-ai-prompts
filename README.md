# The Finest (-ish) AI Skills

A curated collection of LLM and AI agent directives for real work and usage that doesn't *suck*.
Each directive follows the OpenCode Agent Skills format: `agent-skills/<name>/SKILL.md`.

## Available Skills

- **[masterplanner](agent-skills/masterplanner/SKILL.md)** — Clarification, research, and planning. Produces a structured plan for mastercoder.
- **[mastercoder](agent-skills/mastercoder/SKILL.md)** — Production code implementation from a structured plan. Tests, validates, delivers.
- **[image-to-prompt](agent-skills/image-to-prompt/SKILL.md)** — Converts images into detailed text descriptions
- **[web-designer](agent-skills/web-designer/SKILL.md)** — Professional UI/UX design with narrative, atmosphere, and production-ready completeness

## Available Plugins

- **[memory](plugins/memory/plugin.ts)** — OpenCode plugin for persistent, session-independent memory. Registers tools to store and retrieve facts, decisions, and preferences across sessions (local `.memory/` and global `~/.config/opencode/memory/`).

## Repository Structure

```
├── README.md
├── LICENSE
├── AGENTS.md
├── agent-skills/
│   ├── masterplanner/SKILL.md
│   ├── mastercoder/SKILL.md
│   ├── image-to-prompt/SKILL.md
│   └── web-designer/SKILL.md
└── plugins/
    └── memory/plugin.ts
```

## License

CC BY 4.0 — Share, adapt, and use commercially with attribution.