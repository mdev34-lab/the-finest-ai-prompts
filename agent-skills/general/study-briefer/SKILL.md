---
name: study-briefer
description: >
  Generate structured study summary PDFs via LaTeX/Tectonic with
  configurable fonts, language-adaptive headers, and subject-appropriate activities.
  Trigger on "study brief", "resumão", "study summary", "revision notes",
  "ficha de estudio", "study guide", or any request for condensed topic-based study material.
  Only generates practice tests when real exam style references are provided.
license: CC BY 4.0
metadata:
    author: mdev34-lab
    works_with: Any LLM
    tldr: LaTeX study brief PDF generator — configurable fonts/style, multilingual headers, subject activities. No simulado without reference materials.
---

# Study Briefer — LaTeX Study Summary PDF Generator

Generates structured study summary PDFs using LaTeX compiled with Tectonic. Clean layout, configurable fonts, numbered sections with study tips, and end-of-document activities. Adapts to the user's language.

## When to Use

- User asks for a **study brief**, resumão, study summary, revision notes, ficha de estudio, or condensed study material
- User provides module/topic content and wants a structured study PDF
- User says "same style as before" referencing a prior output

## When NOT to Use

- Practice tests without reference materials — only generate when the user provides real previous exams/tests to copy style from
- Generic document creation (reports, proposals, letters)

## Interaction Rules

- **If the user provides a language choice** (explicit or implicit via their message content), generate labels/headers in that language
- **If no language is clear**, infer from the subject/content or ask
- **If the user requests specific fonts, page size, margins, or style**, apply those over the defaults
- **If the user provides prior study briefs as reference**, copy their style choices (fonts, layout, header format)

## Default Style (Overridable)

These are defaults, not requirements. The user may request different fonts, layout, or styling.

| Property | Default | How to Override |
|----------|---------|-----------------|
| Body font | Liberation Sans (via `fontspec`) | Specify alternative in request |
| Math font | Computer Modern (LaTeX default) | Only change if explicitly requested |
| Page size | A4 | Request letter, legal, etc. |
| Margins | 20mm all sides | Specify desired margins |
| Document class | `article`, 11pt | Request `report`, `extarticle`, different pt |
| Study tip label | Language-appropriate (e.g., "Dica importante", "Study tip") | Auto-selected or user-specified |
| Header fields | Subject, Professor/Teacher, Author, Notes | Are adapted per language; user can customize |
| Language package | `babel` with auto-selected language | User specifies locale |
| Activity types | PT-BR set (Compreensão, MC, V/F, etc.) | Adapted per language or user preference |

### Shared Defaults (Apply Unless Overridden)

- **Math formulas**: Computer Modern via default LaTeX math — never put math in body font
- All math must be inside `$...$` (inline) or `\[...\]` (display) delimiters
- **Ordinal indicator**: NEVER use Unicode `º` (U+00BA) — renders as `ž` with Liberation Sans in XeLaTeX. Always use `\textsuperscript{o}` (for Portuguese) or language-appropriate equivalent
- **Sub/superscripts**: Never use ₁, ₂, ₀, ², ³ in text mode — they render as missing glyphs. Use math mode: `$x_1$`, `$x^2$`
- **File naming**: No spaces in filenames — use underscores: `study_brief_subject.tex`
- **Output PDF** inherits the same name

## Language Adaptation

When the user provides content in a language other than Brazilian Portuguese, adapt:

| Element | PT-BR (default) | English | Spanish | Other |
|---------|-----------------|---------|---------|-------|
| Header: Subject | Disciplina | Subject | Asignatura | Translate |
| Header: Teacher | Professor | Teacher | Profesor | Translate |
| Header: Author | Autor | Author | Autor | Translate |
| Header: Notes | Observação | Note | Nota | Translate |
| Title prefix | RESUMÃO | STUDY BRIEF | FICHA DE ESTUDIO | Translate |
| Study tip label | Dica importante | Study tip | Consejo importante | Translate |
| Activities title | ATIVIDADES | ACTIVITIES | ACTIVIDADES | Translate |
| Activity: Comprehension | Compreensão | Comprehension | Comprensión | Translate |
| Activity: Multiple choice | Marque a alternativa correta | Multiple choice | Seleccione la opción correcta | Translate |
| Activity: True/False | Verdadeiro ou Falso | True or False | Verdadero o Falso | Translate |
| Activity: Matching | Relacione | Matching | Relacione | Translate |
| Activity: Analysis | Análise | Analysis | Análisis | Translate |
| Activity: Practice | Prática | Practice | Práctica | Translate |
| Activity: Calculation | Cálculo | Calculation | Cálculo | Translate |
| Activity: Timeline | Linha do tempo | Timeline | Cronología | Translate |
| Language package | `\usepackage[brazil]{babel}` | `\usepackage[english]{babel}` | `\usepackage[spanish]{babel}` | Appropriate babel option |

When the language is not listed, translate labels naturally and use the appropriate `babel` language option.

## LaTeX Template

Read the bundled template at `assets/template.tex` for the full preamble and custom commands.

### Preample (Default)
```
\documentclass[11pt,a4paper]{article}
\usepackage{fontspec}
\setmainfont{Liberation Sans}[
  BoldFont = Liberation Sans Bold,
  ItalicFont = Liberation Sans Italic,
  BoldItalicFont = Liberation Sans Bold Italic,
]
\usepackage[{language}]{babel}
\usepackage{amsmath,amssymb}
\usepackage{geometry}
\usepackage{enumitem}
\usepackage{xcolor}
\usepackage{hyperref}
```

Replace `{language}` with the appropriate babel key. Override any line when the user requests different styling.

### Custom Commands

| Command | Purpose | Example (PT-BR) | Example (EN) |
|---------|---------|-----------------|--------------|
| `\secao{title}` | Numbered section heading (bold, large) | `\secao{1. A REVOLUÇÃO DE 1930}` | `\secao{1. THE INDUSTRIAL REVOLUTION}` |
| `\subsecao{title}` | Subsection heading (bold, normal) | `\subsecao{Concavidade}` | `\subsecao{Supply and Demand}` |
| `\dica{text}` | Study tip box (bold prefix + text) | `\dica{Se $a=0$, não é quadrática.}` | `\dica{If $a=0$, it's not quadratic.}` |
| `\ativtitulo{title}` | Activity section heading | `\ativtitulo{1 -- Compreensão}` | `\ativtitulo{1 -- Comprehension}` |

### Header Block (Default Format)

Template — adapt labels per language, adjust fields as appropriate:
```
{\small {subject_label}: [SUBJECT]}\\
{\small {teacher_label}: ---}\\
{\small {author_label}: [Author]}\\[2pt]
{\small\itshape {notes_label}: {notes_text}.}\\[6pt]

{\bfseries\Large {TITLE_PREFIX}}\\
{\bfseries\Large [TITLE]}\\[6pt]
```

## Content Structure

Every study brief has three parts: **content sections**, **study tips**, and **activities**.

### Content Sections
- Each major topic gets a `\secao{N. TITLE}` with sequential numbering
- Sub-topics use `\subsecao{}`
- Bullet lists use `\begin{itemize}[nosep,leftmargin=14pt]`
- Numbered lists use `\begin{enumerate}[nosep,leftmargin=14pt]`
- Paragraphs should be substantial (minimum 3–5 sentences, never single-sentence paragraphs)
- Include specific examples, dates, names, and data points

### Study Tips (`\dica`)
- Insert after sections where students commonly make mistakes
- Tips should be practical and exam-oriented
- Labels adapt to language (see Language Adaptation table)

### Activities (End of Document)

Select activity types appropriate to the subject. Default set (PT-BR), adapt labels per language:

1. **Compreensão / Comprehension** — Open-ended questions
2. **Marque a alternativa correta / Multiple choice** — Options a–e with contextual stimuli
3. **Verdadeiro ou Falso / True or False** — Statement evaluations
4. **Relacione / Matching** — Columns matching
5. **Identificação / Identification** — Define terms, siglas, concepts
6. **Análise / Analysis** — Essay-style argumentation
7. **Linha do tempo / Timeline** — Chronological ordering (History)
8. **Cálculo / Calculation** — Numerical problems (Math/Science)
9. **Situação-problema / Problem situation** — Word problems with real-world context
10. **Prática / Practice** — Short-answer questions

Not all types are needed every time — select those appropriate to the subject and language.

## Practice Tests (Conditional — Reference Required)

Only generate when the user provides **real previous exams or tests** as style references:

- Same question format (number of options, stimulus types, marking scheme)
- Same point distribution and difficulty profile
- Same language register and terminology
- Apply the same LaTeX visual style (fonts, margins, commands) as the study brief

Save as a separate file: `practice_test_[subject].tex` / `.pdf`.

## Compilation

Compile with Tectonic (handles all dependencies automatically):
```bash
cd /home/z/my-project/download && tectonic filename.tex
```

Output PDF is written alongside the .tex file. Verify with:
```bash
pdfinfo filename.pdf
```

## Content Depth Standards

- Every section must have at least 150–200 words of body content
- No single-sentence paragraphs (except transitions)
- Include specific names, dates, and examples — never vague generalities
- For historical events: causes, consequences, and contradictions
- For math/science: worked examples with step-by-step solutions
- Study tips should reference what exams typically test

## Complete Workflow

1. **Detect language** — From user input or explicit request
2. **Plan structure** — Determine sections, numbering, activity types per language/subject
3. **Apply style** — Defaults unless user specifies otherwise
4. **Write LaTeX** — Following template and style rules
5. **Save .tex** — To `/home/z/my-project/download/` with underscores, no spaces
6. **Compile** — `tectonic filename.tex`
7. **Verify** — Check PDF was generated and page count is reasonable
8. **Deliver** — Report file path and summary to user

## Common Pitfalls to Avoid

| Pitfall | Solution |
|---------|----------|
| Using `º` directly | Use `\textsuperscript{o}` (PT) or equivalent |
| Unicode subscripts in text (₁, ₂) | Use math mode: `$x_1$` |
| Forgetting ordinal fix | Double-check all ordinals |
| Math outside delimiters | Wrap all math in `$...$` or `\[...\]` |
| Shallow paragraphs | Each paragraph needs 3+ sentences |
| Missing activities | Always include at least 5 activity types |
| Spaces in filename | Use underscores only |
| Wrong babel language | Match to user's language from table above |
| Mixing body and math fonts | Default: Liberation Sans body, Computer Modern math
