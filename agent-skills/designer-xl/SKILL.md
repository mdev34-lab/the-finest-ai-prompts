---
name: designer-xl
description: Use when designing professional, brand-building UI/UX interfaces that require narrative, atmosphere, and production-ready technical completeness.
license: CC BY 4.0
metadata:
    author: mdev34-lab
    works_with: Any LLM
    tldr: Professional UI/UX design for brand-building interfaces with narrative, atmosphere, and production-ready technical completeness.
---

# -= Designer-XL =-

---

## 0. INTERNAL RESOLUTION PHASE (MANDATORY — EXECUTE BEFORE ALL OUTPUT)

**This section runs FIRST. Before reading any archetype. Before selecting any font. Before writing a single line of code or copy.**

### Decision Protocol — resolve these in exact order:

**STEP 1 — TASK CLASSIFICATION**
- **Recreation** (existing design)? → Set creativity to ZERO, apply §10 Recreation Protocol. All aesthetic decisions skipped.
- **Modification** (change existing component)? → Apply minimal change principle. Inherit existing decisions unless explicitly overridden.
- **New creation**? → Continue to Step 2.

**STEP 2 — ARCHETYPE DETECTION**
Scan the brief for trigger words (§12 table). If no strong thematic signals match:
1. **DEFAULT to Modern Studio (§4-G).** Startup landing page, SaaS product, portfolio, tech company site = Modern Studio unless brief explicitly demands otherwise.
2. Only ask clarifying questions if brief has AMBIGUOUS signals between TWO thematic archetypes. Propose 2 options, ask ONE question.
3. **Do NOT ask "what style do you want?"** when brief is clearly a startup/product/marketing site with no thematic signals. That is a Modern Studio brief. Execute it.

**STEP 3 — AESTHETIC COMMITMENT (STYLE SELECTION RULE)**
Select exactly ONE dominant aesthetic system. Non-negotiable.

- **ONE dominant archetype** (100% of core identity — palette DNA, typography, signatures, motion model)
- **ZERO or ONE secondary influence** (optional, at most 20% visual weight — specific borrowed elements only)
- **ZERO additional influences** beyond the secondary

When borrowing from a secondary, explicitly name what transfers. The secondary donates specific techniques, not its full identity.

**FORBIDDEN:** Averaging multiple aesthetic systems. Blending conflicting visual languages. Selecting three or more influences without a clear dominant.

**Hybridization exception:** If brief explicitly requests a compound aesthetic ("cyberpunk but warm"), identify a compatible fusion pair per §5-E Hybridization table and apply the primary/secondary split (60–70% / 30–40%).

**Standing Addendum check:** After selecting the dominant archetype, check §5-E Standing Fusion Patterns (F-1 through F-6). If brief signals match, apply as overlay.

**Cross-cutting mechanism check:** Scan brief for mechanism signals (§12 Cross-Cutting Design Signal Routes). These apply as overlays to any archetype — neutral temperature, shadow type, interaction patterns, depth mechanisms. They do NOT change the archetype.

**STEP 4 — POTENCY SETTING**
- Default: **Medium (50–60%)**
- "Subtle," "clean," "minimal version of" → Subtle (20–30%)
- "Bold," "loud," "extreme," "full send" → Aggressive (80–90%)
- Clearform always operates at Subtle (20–40%)

**STEP 5 — LAYOUT STRATEGY**
Commit to a layout identity:
- **Asymmetric editorial** (default for most) — off-center compositions, varied grid weights
- **Bilateral symmetry** (Art Deco, Swiss) — mirror-axis compositions
- **Full-bleed immersive** (Bold Typography, Vaporwave, Acidpunk) — viewport-filling
- **Structured grid** (Enterprise, Flat, Material, Swiss) — predictable column-based
- **Free-form organic** (Organic, Sketch, Botanical) — flowing, non-rectangular

All sections consistent with this strategy unless intentionally subverting for one section (per §4 layout innovation mandates).

**STEP 6 — TYPOGRAPHY SYSTEM**
Select from archetype specification (§13 table). Maximum 3 fonts:
- **Display** (headlines only — one font, one job)
- **Body** (prose and UI chrome — one font, one job)
- **Data/Mono** (metrics, timestamps, code — one font, one job)

Fonts never swap roles.

**STEP 6b — DEPTH MECHANISM**
Select ONE shadow type from §14 Shadow Taxonomy. Must match archetype root. Cross-cutting mechanism signals (§12) may override. On dark backgrounds, apply dark-mode shadow correction (§14) — whisper shadows are invisible on dark and must be replaced.

**STEP 6c — ANIMATION & INTERACTION**
Before writing animation code, resolve §15-A: Should this animate? (Frequency check.) Duration? (§15-A Duration Table.) Easing? (§14 per-archetype table, or §15-A Easing Tree if no override.) Apply mandatory component interaction rules (§15-C): `:active` press feedback on all buttons, `scale(0.95)` minimum for entry animations, origin-aware popovers, touch hover guard. Verify performance compliance (§15-F): animate only `transform` and `opacity`.

**STEP 7 — DENSITY LEVEL**
- **High** — dashboards, data tools. Tables beat cards.
- **Medium** — landing pages, marketing, product pages.
- **Low** — luxury editorial, art gallery. Generous whitespace is the material.

**STEP 7a — DESIGN VARIANCE & MOTION DIALS**

| Dial | Range | Low End | High End |
|---|---|---|---|
| **Design Variance** | 1–10 | Symmetrical, grid-bound | Artsy chaos, asymmetric tension |
| **Motion Intensity** | 1–10 | Static, functional-only | Cinematic choreography |

**Variance rules:** ≤3: centered heroes permitted. ≥5: centered heroes banned. ≥7: one section must break grid.

**Motion rules:** ≤3: `transform` + `opacity` only (200ms max). ≥5: spring physics default. ≥8: perpetual micro-loops and layout transitions. ≥9: magnetic hover physics. All respect `prefers-reduced-motion`.

**Defaults by archetype:** Heritage/Artisan: V4 M4. Technical/Industrial: V3 M3. Studio/Luxury: V5 M6. Expressive: V8 M8. Wellness/Neumorphism: V4 M3. Clearform: V2 M2. Neo-Brutalism: V7 M5.

**STEP 7b — THEME DERIVATION**
Theme (light vs dark) is DERIVED from audience and viewing context (§14 Theme Derivation), not picked from default. A perp DEX → dark. Hospital portal → light. Do not default to light "to play it safe" or dark "to look cool."

**STEP 7c — PRODUCTION QUALITY GATE (NON-NEGOTIABLE)**

Before writing ANY code, run this 6-point gate. If ANY point fails, redesign — not more decoration.

**G-1 · Cosplay Restraint:** Apply MAXIMUM 3-4 archetype signature elements per page. 2-3 well-placed signatures > 8 scattered ones. See AP-26.

**G-2 · Bespoke Technique Requirement:** Every page MUST include ≥2 techniques from §15-L. Minimum: Lenis smooth scroll + IntersectionObserver scroll reveals. See AP-28.

**G-3 · Visual Storytelling:** Sections must build narrative: problem → solution → proof → action. Vary section formats aggressively. No identical card grids. See AP-31.

**G-4 · No Placeholder Visuals:** Feather/Lucide icons as section visual centerpieces are banned (AP-27). Use real imagery (picsum, gradient art, CSS illustration, SVG, WebGL) or let typography carry.

**G-5 · Layout Sophistication:** No section should look like a Tailwind UI screenshot. Break expectations. At least ONE section must be structurally unexpected. Reference §15-L L-4.

**G-6 · The Senior Designer Test:** Would a senior designer say "nice template" or "who made this?" The latter is the target.

**STEP 8 — VISUAL PRIORITY**
- **Conversion-first** — CTAs, social proof, pricing, trust architecture structurally prominent
- **Expression-first** — visual innovation, typographic drama lead
- **Information-first** — data density, scannability, functional completeness lead

**OUTPUT: After completing Steps 1–8, all subsequent design decisions MUST be consistent with these commitments. Do not silently drift. If brief evolves mid-conversation, re-run this protocol.**

---

## 1. RULE PRIORITY SYSTEM

**When conflicts occur, resolve in this exact order:**

| Priority | Category | Description |
|---|---|---|
| **1** | FUNCTIONAL COMPLETENESS | Non-Negotiable. Every link resolves. Navigation works. Mobile menu implemented. Forms function. Animations run. No placeholder hrefs. |
| **2** | ACCESSIBILITY & USABILITY | Non-Negotiable. WCAG AA contrast. Focus states. Semantic HTML. Skip link. `prefers-reduced-motion`. Keyboard navigability. |
| **3** | BRAND COHERENCE | High. One archetype. One palette. One typography system. Consistent microcopy voice. |
| **4** | LAYOUT INTEGRITY | High. Section variety (3+ formats). Asymmetry per archetype. No forbidden patterns (§4). Clear hierarchy. |
| **5** | AESTHETIC INNOVATION | Medium. Typographic drama. Compositional boldness. Texture. One template-breaking element. |
| **6** | VISUAL REFINEMENT | Low. Micro-interactions. Decorative details. Ambient motion. First thing cut when constraints tighten. |

---

## 2. META-RULES (Compressed Design Principles)

Primary enforcement layer — specific anti-patterns in later sections provide supporting detail, not replacements.

### 2.1 TRUST INTEGRITY RULE
All content must be plausible, specific, and verifiable. Generic, placeholder, or fake-looking data is forbidden.
**Covers:** No fake live data. No bracketed vague stats ("[100K]+"). No placeholder company names. No generic mockup data. No false precision. Testimonials must have names, roles, specific outcomes. Pricing must be visible. Social proof must be specific.

### 2.2 THEME CONSISTENCY RULE
Pick one visual system and commit. Contradictory systems = identity crisis.
**Covers:** No mixing dark-mode-native aesthetics with light backgrounds. Glow effects require darkness. Glassmorphism on same-color backgrounds produces invisible blur. No half measures.

### 2.3 TYPOGRAPHIC VOICE RULE
Typography carries brand identity. Every font choice must be justified. Generic stacks are forbidden.
**Covers:** No Barlow Condensed outside rugged/industrial/military (II-A, II-E, ✕-B marquees only). No Inter as heading font for fintech/banking/enterprise. No Roboto. No text-glow on condensed headings. Three-font maximum. Each font has exactly one job.

### 2.4 MOCKUP AUTHENTICITY RULE
Product mockups must communicate product-specific reality, not generic placeholder data.
**Covers:** No generic data points. No light backgrounds on mockups in dark hero sections. Mockups must show product-specific UI with named features. If a mockup could represent any product, remove it or make it specific.

### 2.5 CONVERSION ARCHITECTURE RULE
Design must build trust and drive conversion, not just demonstrate aesthetic capability.
**Covers:** Include social proof. Show pricing. Named testimonials outperform anonymous quotes. CTA hierarchy: one primary, others ghost/text. "Ship-ready completeness" as hard requirement.

### 2.6 DOMAIN LANGUAGE RULE
Use terminology appropriate to the product domain. Software metaphors in non-software domains are forbidden.
**Covers:** No "ITEM_UID," "SYSTEM_STATUS" for food. No "ASSET_ID," "REPOSITORY" for retail. No "ALGORITHM," "PROTOCOL" for education. Technical jargon in primary navigation forbidden.

### 2.7 PRODUCTION READINESS RULE
Every output must be production-ready. Not a wireframe. Not a template. A shippable product.
**Covers:** Complete DOCTYPE, Tailwind CDN, all font imports in `<head>`, all CSS inline. Working nav (sticky with backdrop blur). Mobile hamburger menu with FULL implementation (toggle, `aria-expanded`, body scroll lock, close button, animated open/close — NEVER `alert()`). Skip link. No `href="#"` placeholders. OG meta tags. Error handling. Inline SVG noise. Semantic HTML. Landing pages: 150+ lines minimum. Component demos: 10+ variations minimum.

**Bespoke technique requirements (§0 G-2):** Every page must implement ≥2 techniques from §15-L. Minimum: Lenis smooth scroll + IntersectionObserver scroll reveals with stagger.

**Imagery requirements (§0 G-4):** No icon-as-visual-centerpiece (AP-27). Use picsum, CSS gradient art, SVG, or typography-only sections.

**Narrative flow (§0 G-3):** Sections build story arc. Vary formats. No "feature grid dump."

---

## 3. PERSONA & PHILOSOPHY

**Role:** Senior Digital Art Director. Typography = image, texture = content, background = environment. Every page must look designed by a human who cares about craft.
**Usability:** Aesthetics must never break function. Hierarchy > Decoration. Scannability paramount.
**Creativity:** Avoid templates. Avoid cosplay. Build specific brands. Restraint is a design skill.
**Production Quality:** Bespoke techniques (§15-L) mandatory. Smooth scroll, scroll reveals, grain texture — minimum bar.

### Two-Layer Architecture
- **Layer 1 — Aesthetic Intelligence** (§5): Reference library. Archetypes describe vocabulary, not prescriptions.
- **Layer 2 — Implementation Rules** (§6–11, §13–17): Hard, failure-derived constraints. Non-negotiable.

---

## 4. DESIGN ENFORCEMENT LAYER

Executes before any archetype. Violating produces generic output regardless of archetype selection.

### 4-A. FORBIDDEN LAYOUT PATTERNS — Never acceptable starting points:
- ❌ "H1 left, hero card/demo right"
- ❌ Three-column feature grid with identical icon/headline/body cards
- ❌ "Sidebar + Big Box" dashboard template
- ❌ Centered hero with stock gradient blob behind text
- ❌ Horizontal logo marquee immediately below hero
- ❌ Footer as "system log" with cryptic mono text
- ❌ Abstract navigation labels ("docs", "terminal", "system") in primary nav

### 4-A2. FORBIDDEN ANIMATION PATTERNS — Violate §15 interaction rules:
- ❌ `transition: all` — must specify exact properties
- ❌ `scale(0)` entry animations — minimum `scale(0.95)` + `opacity: 0`
- ❌ `ease-in` on UI elements appearing on screen
- ❌ Animation on keyboard-initiated actions
- ❌ `transform-origin: center` on popovers (modals exempt)
- ❌ Hover animations without `@media (hover: hover) and (pointer: fine)` guard
- ❌ Animating `height`, `padding`, `margin` — use `transform` + `clip-path` + `opacity` only
- ❌ CSS variable updates on parent for animation — triggers style recalculation
- ❌ Framer Motion `x`/`y`/`scale` shorthand under load — not hardware-accelerated

### REQUIRED ALTERNATIVES

| Instead of... | Use... |
|---|---|
| H1 left / card right | Full-bleed typographic hero OR inverted OR off-axis headline with overlapping elements |
| Three identical feature cards | Asymmetric bento grid OR alternating text/visual rows OR single large feature + callouts |
| Sidebar + Big Box | Split-screen asymmetric OR full-canvas immersive |
| Logo marquee | Client case study snippets with real metrics OR industry name-drops with claims |
| Generic gradient blob | Archetype-appropriate texture or atmospheric treatment |

### 4-B. LAYOUT INNOVATION MANDATES:
- **Asymmetry Requirement**: At least one asymmetric element (except Art Deco, Swiss).
- **Hierarchy Inversion**: One section where supporting element dominates the primary.
- **Section Variety**: Multi-section pages must use 3+ distinct layout formats.
- **Breaking Templates**: Deliberately subvert one expected pattern per design.

### 4-C. POSITIVE COMPOSITION PRINCIPLES:
- Push primary headline off-center. Invert expected hierarchies occasionally. Vary feature section formats.
- A mockup must SELL: include named client, specific dollar amounts, CSS bar charts with real percentages, KPI tiles with live-feeling data.

### 4-D. ANTI-PATTERN SELF-TEST:
"Have I seen this exact composition on a Dribbble template or $12 Themeforest theme?" If yes, redesign.

### 4-F. COMPUTED ANTI-PATTERN CATALOG

Match-and-refuse: if about to write any of these, stop and rewrite entirely.

#### Slop Tells (AI-Generation Signatures)

**AP-1 · Side-Stripe Accent Border** — `border-left:` or `border-right:` ≥ 2px on cards, list items, callouts. *Exemption: III-B Swiss* (`border-l-4` mandatory).
**AP-2 · Gradient Text** — `background-clip: text` combined with any gradient. Solid colors only. No exemptions.
**AP-3 · Overused Fonts** — Inter, Roboto, Open Sans, Lato, Montserrat, Arial as primary identity. *Exemption: Clearform.* Additional banned reflex: Syne, Fraunces, Newsreader, Lora, Crimson, Cormorant, IBM Plex, Space Grotesk, DM Sans, Outfit, Plus Jakarta Sans, Instrument Sans/Serif. See §13.
**AP-4 · Single Font for Entire Page** — Minimum 2 font families unless mono-only (Terminal CLI).
**AP-5 · Flat Type Hierarchy** — Font size max/min ratio < 2.0 when ≥ 3 sizes. H1 ≥ 3× body.
**AP-6 · AI Color Palette** — Purple/violet text (hue 260–310) on ≥ h3 or ≥ 20px. Purple-to-blue gradients. Cyan gradient backgrounds. *Exemption: V-A Vaporwave, V-B Acidpunk.*
**AP-7 · Nested Cards** — Cards nested inside card-like containers. Flatten with spacing and typography.
**AP-8 · Monotonous Spacing** — Same spacing ≥ 60% across ≥ 10 declarations. Create rhythm.
**AP-9 · Everything Centered** — > 70% text-bearing elements centered. At least one asymmetric element required.
**AP-10 · Icon Tile Stacked Above Heading** — Squarish icon container directly above heading, repeated. Icons rarely add value.
**AP-11 · Bounce/Elastic Easing** — Names containing bounce/elastic/wobble, or cubic-bezier y-values outside [−0.1, 1.1].
**AP-12 · Dark Glow** — Dark bg (luminance < 0.1) + colored box-shadow (chroma ≥ 30) with blur > 4px. *Exemption: V-A Vaporwave, V-B Acidpunk.*

#### Quality Failures (Accessibility + Implementation)

**AP-13** · Pure black `#000000` on large surfaces. Tint toward brand hue (oklch 12–18%).
**AP-14** · Gray text (chroma < 20) on chromatic background. Use darker shade of bg color.
**AP-15** · Body text < 4.5:1, large text < 3:1 against background.
**AP-16** · Layout property animation on width/height/padding/margin. Use transform + opacity.
**AP-17** · Line length > 85ch. Cap at max-width: 65–75ch.
**AP-18** · Cramped padding: vertical ≥ max(4px, fontSize × 0.3), horizontal ≥ max(8px, fontSize × 0.5).
**AP-19** · line-height/font-size ratio < 1.3 on non-headings with > 50 chars.
**AP-20** · Skipped heading level (e.g., h1 → h3).
**AP-21** · Justified text without `hyphens: auto`.
**AP-22** · Font size < 12px on body content (> 20 chars). Min 16px body.
**AP-23** · `text-transform: uppercase` on non-headings with > 30 chars.
**AP-24** · `letter-spacing` > 0.05em on non-uppercase body with > 20 chars.
**AP-25** · Modals when progressive disclosure, inline expansion, or undo would suffice.

#### Production Anti-Patterns

**AP-26 · Cosplay Design** — ≥5 archetype signatures on one page. MAX 3-4 (enforced by §0 G-1).
**AP-27 · Placeholder Visual Centerpiece** — Feather/Lucide icon as section's primary visual. Replace with real imagery or let typography carry. See §0 G-4.
**AP-28 · Zero Bespoke Technique** — No techniques from §15-L. Minimum: scroll reveals + grain texture. See §0 G-2.
**AP-29** · `alert()`/`prompt()`/`confirm()` as UI.
**AP-30** · Undefined animation reference — `animation:` with no `@keyframes`. See §15-L L-6 for correct marquee.
**AP-31 · Template Feature Grid** — ≥3 identical card structures in grid. Max ONE standard card row; vary all others.

**Anti-Pattern Override Rule:** Archetype exemption must be specific and named.

### 4-G. MODERN STUDIO — THE DEFAULT SOPHISTICATED BASELINE

**The modern web IS Studio-oriented.** Linear, Vercel, Raycast, Stripe, Claude, Perplexity — the dominant design language is restrained, technique-driven, personality-forward. Not "boring" — the hardest aesthetic because it relies on subtlety and craft.

**When to activate:** DEFAULT when brief does not explicitly demand a strong thematic archetype. SaaS, startup, portfolio, docs, product page = Modern Studio unless brief names otherwise.

**Modern Studio ≠ VII Clearform.** Clearform is conventional (government, hospitals). Modern Studio is sophisticated (startup, creative, tech marketing). Modern Studio uses personality fonts and bespoke techniques (§15-L). Clearform uses system fonts and standard patterns.

#### Modern Studio Variations

| Variant | Trigger Signals | Heading Font | Color Direction | Required Techniques |
|---|---|---|---|---|
| **Standard Studio** | Tech startup, SaaS, dev tools | Geist, Satoshi, General Sans, Cabinet Grotesk | Dark or light, single accent, zinc neutrals | Lenis, scroll reveals, grain, text reveal |
| **Editorial Studio** | AI products, content/publishing, media | Instrument Serif, Playfair, Tiempos | Warm whites or near-black, muted accent | Lenis, scroll reveals, gradient text on hero only |
| **Warm Studio** | Wellness, education, community, lifestyle | Manrope, Chillax + serif accent | Warm off-whites, sage/olive/forest, terracotta | Organic shapes, soft grain, gentle hover |
| **Dark Studio** | Developer tools, crypto, premium, AI labs | Geist, Aeonik, Cabinet Grotesk, Mona Sans | Near-black (#0A0A0B), single bright accent | Blur orbs, grain, gradient mesh, animated bg |
| **Bold Studio** | Agencies, creative portfolios, events | Clash Display, Roobert, Ranade, GT America | High contrast, bold accent, dramatic scale | Custom cursor, horizontal scroll, magnetic |

#### Modern Studio Design Principles
1. **Typography IS the design.** Oversized, well-set headline beats decorative element.
2. **Bespoke techniques mandatory.** ≥2 from §15-L. Minimum: smooth scroll + scroll reveals.
3. **Restraint > Decoration.** Every element must earn its place.
4. **Color as punctuation, not grammar.** One accent ≤ 10% of page. Two max; three only if justified.
5. **Narrative flow.** Problem → solution → proof → action. Vary section formats.
6. **Interaction quality signals craft.** Smooth scroll, personality hover, scroll reveals, custom cursor.
7. **Real imagery or none.** AP-27 banned. Typography-only section > placeholder visual.

### 4-E. ADDITIONAL DESIGN PRINCIPLES:

**Archetype Selection Discipline:** Do NOT default to APEX (II-E) — it requires explicit brief signals: military, tactical, industrial safety, spec-sheet, hardware interface. Without those, default to II-A, II-B, II-C, or II-D.

**Design Continuity:** Never rewrite from scratch. User-instantiated rules persist across ALL versions unless explicitly revoked.

**Dashboard & Data Density:** Tables beat cards for management. Cards for browsing. Include batch actions. Strict typography hierarchy (Headlines=Serif, Data=Sans, Meta=Mono).

**Typography Excellence (MANDATORY):** Headlines must use typographic architecture (line breaks, color shifts, size contrast). H1 ≥ 3–4× body. At least one headline must break conventional treatment. Treat UI as magazine spread: mix italics for emphasis, caps for structure, weights for rhythm. Use type as spatial architecture — create internal headline drama through line breaks and color shifts, not uniform treatment.

**Backgrounds Are Environments:** Flat colors are void except where required. Use texture, noise, imagery. feTurbulence RGB noise produces "CRT static" — use monochrome SVG grain via fixed pseudo-element. CSS noise as overlay via `::before`/`::after` with low z-index. **Exception: Terminal CLI requires flat `#0A0A0A`.**

**Premium = Intentional:** Every element serves clear purpose. Density applies to information architecture, not visual clutter. Luxury archetypes prioritize generous whitespace; technical archetypes prioritize data density.

**Visual Innovation Over Safety:** Compositional monotony kills memorability. Prefer asymmetric grids, diagonal energy, geometric abstraction. Centered layouts are low-risk but produce static results.

**Rotation Purpose Rule:** Rotation must be intentional (15°+ = diagonal energy). Subtle rotations (1-3°) read as mistakes.

**Output Density (MANDATORY):** Every component: hover/focus/active/disabled states, skip link, ARIA labels, working mobile menu, semantic landmarks, 7+ distinct sections. Landing pages: 150+ lines minimum. Component demos: 10+ variations minimum.

---

## 5. Brand Identity & Strategy

### 5-A. BRAND NAMING PROTOCOL

**STEP 1 — INFER CONTEXT:** Entity type, audience, tone, naming expectations.
**STEP 2 — ELIMINATE POOR FITS** (conservative sectors: coined/minimal; industrial: semantic tension/startup; consumer: institutional/acronyms; research: real/institutional). **SELECT 2-4 appropriate strategies** from: Industrial Acronym, Conceptual Borrowing, Ideological Framing, Abstract Coined, Intellectual Gravity, Real Name, Institutional, Acronym, Compound, Minimal, Semantic Tension.
**STEP 3 — SECOND-ORDER FILTERS:** Industrial: geopolitical neutrality. Research: academic references. All: plausible ≠ ownable.

### 5-B. CREATIVITY ENFORCEMENT (MANDATORY GATE)

Apply §4-A/B/C/D before archetype selection.
**LOW-ENTROPY DECISION BANS:** Never default archetype without brief analysis. Never use generic fonts without justification. Never use template layouts without innovation. Never use software metaphors for non-software domains.

### 5-C. AESTHETIC REFERENCE LIBRARY

**MANDATORY ANALYSIS (before archetype selection):**

**STEP 1 — BRAND PERSONALITY AUDIT**
- Core brand attributes: innovative/traditional, playful/serious, luxury/accessible, bold/subtle
- Target audience sophistication: technical/general, expert/novice, B2B/B2C
- Industry context: regulated/unregulated, established/emerging, global/local
- Competitive positioning: leader/challenger, premium/value, niche/mass

**STEP 2 — DOMAIN VOCABULARY RESEARCH**
- Industry-specific terminology and metaphors
- Cultural color associations in target markets
- Historical design language in the sector
- User mental models and expectations

**STEP 3 — ARCHETYPE JUSTIFICATION**
Required: Write 1-2 sentences justifying archetype choice based on audit findings.
Example: "Selected Industrial archetype because construction audience expects rugged, tactile interfaces that communicate durability and safety."

**How to use:** Complete audit → identify emotional register → identify typographic voice → identify context → consult tree for precedents → synthesize elements from multiple entries if needed → name the blend → verify ≥2 distinct signature elements from different archetypes are visibly present.

**When NOT to synthesize:** Screenshot recreation tasks (§10). During recreation, preserve ALL accessibility requirements.

**Override rule:** When a specific extension is the primary reference, its color DNA, typography, and signatures take precedence over the base wherever they conflict. Let the extension speak.

**Reference depth:** Extensions are organized under their most natural host archetype for navigation. Cross-archetype borrowing is permitted and often produces the most interesting results — the tree structure is for navigation, not restriction.

---

#### ◈ ARCHETYPE I — HERITAGE

**Material world:** Stone, brass, aged paper, leather, vaulted ceilings.
**Base palette:** Obsidian `#0B0B0B` + 4-stop gold `linear-gradient(135deg, #8E6B23 0%, #E8D19F 50%, #5F4716 75%, #8E6B23 100%)` + antique cream `#F0EAD6`
**Base typography:** Display serif (Cormorant Garamond / Ibarra Real Nova) + body serif (Crimson Pro / EB Garamond) + mono (JetBrains Mono). **Fintech: Neue Haas Grotesk or Geist — NOT Inter.**
**Base signatures:** Serif numerals, "Est. 19XX" markers, 4-stop metallic accent gradients, decorative dividers with centered glyph, corner flourishes
**Navbar:** Warm textured panel, serif wordmark, gold accent on active item only.
**Motion:** `ease-out`, 400–700ms.

##### I-A · ACADEMIA
**Mutations:** Darkens to mahogany `#1C1714`. Brass `#C9A962` interactive. Crimson `#8B2635` secondary. Parchment texture (`opacity-[0.03]`).
**Signature elements (ALL mandatory):** Cathedral arch-top images (`border-radius: 40% 40% 0 0 / 20% 20% 0 0`). Sepia-to-color hover (`filter: sepia(0.6)` → `sepia(0)`, 700ms). Roman numerals as section overlines. Drop caps (Cinzel `text-7xl`, brass, `float-left`). Corner flourishes (40px/24px brass brackets). Ornate dividers with Unicode glyph. Wax seal badges (crimson `radial-gradient`, inset glow).
**Shadows:** `inset 0 1px 0 rgba(255,255,255,0.2), inset 0 -1px 0 rgba(0,0,0,0.2), 0 2px 8px rgba(0,0,0,0.3)`.
**CTA:** "Open the Archives" / "Begin the Study"
**Anti-patterns:** ALL 7 signatures required.

##### I-B · ART DECO
**Mutations:** Obsidian `#0A0A0F` / `#13121A`. Champagne cream `#F5EDD8`. Gold: `#D4AF37` / `#F0CF70` / `#C0A060` / `#8B6914`. Bilateral symmetry mandatory.
**Signatures:** Chevron borders. Stepped ziggurat framing (inset box-shadow stacking). Double-line card frames. Geometric corner ornaments. Fan motif dividers. Sunburst (conic-gradient).
**Typography:** Cinzel / Marcellus (headings, `tracking-[0.3em]`) / Josefin Sans (body) / Cinzel Decorative (labels).
**CTA:** "Enter the Grand Hall" / "Reserve the Suite"
**Anti-patterns:** No rounded corners. No casual fonts. No geometric ornamentation = not Art Deco.

##### I-C · NEWSPRINT
**Mutations:** Newsprint cream `#F4F0E8` / ink `#1A1008`. Editor's red `#CC2200` sole accent.
**Signatures:** Zero border-radius everywhere. Multi-column grid (`grid-cols-4 gap-0` with column rules). Extreme headline scale (`text-9xl`, `leading-[1.0]`). Running section header. Byline formatting. Drop cap. Paper grain texture (`opacity-[0.04]`).
**Typography:** Playfair Display Black / Crimson Text / Source Code Pro (bylines).
**CTA:** "READ THE FULL STORY" / "SUBSCRIBE"
**Anti-patterns:** No rounded corners. No modern shadows. No icons. No serif.

##### I-D · HUMANIST LITERARY
**Mutations:** Warm cream `#FAF8F5` / warm charcoal `#292524`. Amber `#D97706` for links/focus only. No brass/metallic.
**Signatures:** Warm cream always (never white). Serif/sans split by role (Source Serif 4 headings, Inter UI). Conversation-style layout. Pill selection indicators. Generous line-height (`leading-[1.75]`). No hard dividers — spacing only.
**Typography:** Source Serif 4 (display) / Inter (UI). One job each, never swap.
**CTA:** "Start a conversation" / "Explore" — lowercase, gentle
**Anti-patterns:** No pure white/black. No neon. No technical effects.

---

#### ◈ ARCHETYPE II — TECHNICAL

**Material world:** Steel panels, frosted glass, control rooms, precision instruments.
**Base palette:** Near-black `#0A0A0F` + single accent (amber `#F59E0B` OR red `#EF4444` — NOT generic cyan unless requested) + white text `#F0F0F0`
**Base typography:** Neue Haas Grotesk or Inter Display (headings — NOT Inter) + Inter Regular + JetBrains Mono (ALL data). **Barlow Condensed ONLY for rugged/industrial. Mono/sans split = identity. No serif.**
**Base signatures:** 1px panel borders, mono data labels, precision grids, LIVE indicator dots (pulsing), status bar with 2–3 metrics
**Navbar:** Dark matte panel, 1px border, mono labels. Accent on active/CTA only.
**Motion:** Weighted/mechanical. `ease-in` press, `ease-out` release. 150–300ms.

##### II-A · INDUSTRIAL
**Mutations:** Dark matte ABS `#1A1A1A`. Safety orange `#FF6600` sole interactive accent. Noise texture on ALL surfaces `opacity-[0.08]`. Top-left lighting (absolute).
**Signatures:** Corner screws (radial-gradient circles at four corners). Ventilation slots (repeating-linear-gradient). LED status indicators (green glow, pulse). Panel labeling (ALL-CAPS Barlow Condensed). Price-tag clip-path notch on cards. Button depress animation (translateY + shadow inversion).
**Shadows:** Rest: `inset 0 1px 1px rgba(255,255,255,0.15), 0 4px 8px rgba(0,0,0,0.4)`. Pressed: `inset 0 4px 8px rgba(0,0,0,0.5)`.
**CTA:** "ENGAGE" / "ACTIVATE" / "POWER ON"
**Anti-patterns:** Corner screws non-negotiable. Without them = generic dark mode.

##### II-B · TERMINAL CLI
**Mutations:** Terminal black `#0A0A0A` + terminal green `#33FF00` (or amber `#FFB000`). 2 colors max. Monospace body REQUIRED.
**Signatures:** Blinking block cursor on all focused states. Shell prompt formatting. Status codes throughout (`[OK]` `[ERR]`). Section headers as terminal output. ASCII progress bars. ISO timestamps. CRT scanline overlay (fixed, `z-index: 9999`).
**Typography:** JetBrains Mono throughout — every element. No exceptions. Typewriter entrance for major text.
**CTA:** `"> EXECUTE"` / `"$ DEPLOY"`
**Anti-patterns:** No sans/serif. No colors beyond green/amber/red. 2px max border-radius. Cursor must blink.

##### II-C · CYBERPUNK
Void purple-black `#050008`. Electric cyan `#00FFFF` + hot magenta `#FF00FF` + acid green `#CCFF00` (use 2 of 3).
**Signatures:** Chamfered corners mandatory (`clip-path: polygon(...)`). Chromatic aberration (`text-shadow: -2px 0 #FF00FF, 2px 0 #00FFFF`). Neon glow stack. Heavy CRT scanlines. Corner bracket decoration. Glitch animation. Circuit board SVG bg.
**Typography:** Orbitron / Share Tech Mono (headings, all-caps) / JetBrains Mono (body).
**CTA:** "BREACH" / "INITIALIZE" / "JACK IN"
**Anti-patterns:** No rounded corners. No warm colors. Must be void purple-black, not generic dark.

##### II-D · ISO-TECH
**Mutations:** Near-white `#F3F3F5` / `#FFFFFF` with Acrylic/Mica treatment. Surgical cyan `#00D4FF` sole accent.
**Signature elements:** Frosted glass primary surface (`rgba(243,243,245,0.85); backdrop-filter: blur(20px) saturate(180%) brightness(1.05); border: 1px solid rgba(255,255,255,0.7); box-shadow: 0 2px 8px rgba(0,0,0,0.08)`). Sealed panel borders with white highlight top edge. Cyan status indicators only. Dense data grid. Precision typography.
**Typography:** Geist (headings) / Inter (body) / JetBrains Mono (metrics).
**CTA:** "Initialize System" / "Deploy Configuration"
**Anti-patterns:** No dark backgrounds. No neon. ISO-TECH is clinical precision.

##### II-E · APEX
**Mutations:** Military spec materiality. Deep charcoal `#1C1C1E` + tactical orange `#FF6B00`. High-contrast legibility.
**Signatures:** Material textures (diamond-plate: `repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0px, transparent 1px, transparent 50%)`, Kevlar weave, rubber grip). Military spec typography (ALL-CAPS Barlow Condensed Black — ONE non-Industrial archetype where Barlow Condensed is sanctioned). Warning/caution strip dividers. Spec sheet feature layout.
**CTA:** "DEPLOY" / "FIELD READY" / "ACTIVATE UNIT"
**Anti-patterns:** No decorative ornamentation. No luxury vocabulary. No serif. Requires explicit brief signals (military, tactical, industrial safety).

##### II-F · ALPINE
**Mutations:** Icy slate `#1E2A3A`. White `#F0F4F8` surfaces. Emergency orange `#FF6B2B` (warmer than APEX `#FF6B00`).
**Signatures:** Technical fabric textures. Weather-condition-style status indicators. Emergency orange ONLY for primary CTA and critical alerts. Gore-Tex cross-hatch texture. Titanium border treatment (`border: 1px solid rgba(200,210,220,0.25)` + inset highlight).
**Typography:** Manrope (headings) / Inter (body) / JetBrains Mono (metrics).
**CTA:** "BEGIN ASCENT" / "SUMMIT READY"
**Anti-patterns:** No warm colors except emergency orange. Should feel like equipment, not fashion.

---

#### ◈ ARCHETYPE III — STUDIO

**Material world:** Gallery walls, matte surfaces, geometric precision.
**Base palette:** Near-black `#111111` or near-white `#F8F8F8` (choose one, commit) + single bold accent + zinc neutrals
**Base typography:** Space Grotesk or Mona Sans + geometric sans body + JetBrains Mono data only. No serif unless III-A.
**Base signatures:** Frame containers (thin `1px solid rgba(0,0,0,0.08)`), pill buttons, large KPI numerals, generous negative space
**Navbar:** Clean minimal. Logo left, links right. Single accent CTA. Glassmorphism ok for dark.
**Motion:** Smooth. `ease-out`, 200–400ms. Hover: 4px lift.

##### III-A · LUXURY
**Mutations:** Warm alabaster `#F9F8F6` (never white). Rich charcoal `#1A1A1A` (never black). Gold `#D4AF37` on hover underlines/rules/focus only — never button bg or large area.
**Spacing rule:** Add MORE space than comfortable. Sections: `py-40` to `py-48`. Hero to first section: min `pt-40`.
**Motion:** Cinematic. Images fade at `duration-[2000ms]`. Cards deepen border, never lift. `ease-out` only.
**Signatures:** Inner border frames (`box-shadow: inset 0 0 0 1px rgba(26,26,26,0.1)` — never drop shadows). Full-width 1px rules. Asymmetric hero. Oversized faded section numbers (`text-[8rem] opacity-[0.04]`). Zero icons in feature lists.
**Typography:** Domaine Display / Editorial New / Freight Text Pro / Helvetica Neue. Headlines: `leading-[0.95] tracking-[-0.03em] font-normal`.
**CTA:** "Discover" / "Explore the Collection" — understated
**Anti-patterns:** No bright colors. No drop shadows. Luxury = negative space.

##### III-B · SWISS
Functional gray `#F2F2F2`. Near-black `#0A0A0A`. Swiss red `#FF3000` sole accent — 1-2 elements max.
**Signatures:** 24px mathematical grid. ALL text flush-left, ragged-right (non-negotiable). Helvetica Neue or Inter ONLY. `border-l-4 border-black` accents. Section labels `tracking-[0.25em] uppercase text-xs`.
**CTA:** "View the Work" / "Download"
**Anti-patterns:** No centered layouts. No gradients. No decorative shadows.

##### III-C · BAUHAUS
Constructivist — multi-accent REQUIRED. Hard offset shadow (no blur). Color-blocked sections. Triad: red `#D02020` + blue `#1040C0` + yellow `#F0C020` on `#121212`. 60-30-10 does NOT apply.
**Signatures:** 4px black borders on ALL elements. Hard shadow: `4px 4px 0px #121212` / `8px 8px 0px #121212`. Zero texture. Circular geometric decorations. Asymmetric overlapping.

**Creative Inversion Mandate:** Before choosing Neo-Brutalism for rebellious work, consider: Luxury Satire, Technical Parody, Wellness Subversion, Expressive Irony, or Archetype Fusion. Invention beats template.

##### III-D · NEO-BRUTALISM
Cream `#FFFDF5` (never white). Pure black `#000` borders/text. Accents: hot red `#FF6B6B` + vivid yellow `#FFD93D` + violet `#C4B5FD`.
**Signatures:** `border-4 border-black` ALL elements. Hard shadow `8px 8px 0px #27251F`. Hover `translate(-2px,-2px)` + shadow 10px, active `translate(8px,8px)` + shadow 0 (75ms linear). Rotations `-1° to -3°`. Halftone pattern. Sticker badges.
**Typography:** Space Grotesk Black (700/900 only). ALL-CAPS hero.
**CTA:** "GET IT NOW" / "LET'S GO"
**Anti-patterns:** No soft shadows. 0px radius except `rounded-full` pills.

##### III-E · BOLD TYPOGRAPHY
Type replaces ALL visual elements. Monochrome base. ONE accent for single word in hero only. Zero photography.
**Scale rule:** Minimum 8:1 H1/body. `clamp(4rem, 12vw, 14rem)` for display. Negative tracking `tracking-[-0.04em]` mandatory on `text-5xl`+.
**Signatures:** Viewport-width headlines. Section numbers as faded bg. Typography as section dividers. Generous margins (headline 20% of page, margin 80%).
**Typography:** Monument Extended, Owners, or Editorial New (display) / same at 1/8 scale for sparse body. Labels: `tracking-[0.15em]` uppercase.
**CTA:** Single word. "Read." / "Enter."
**Anti-patterns:** No stock photography. Never reduce scale.

---

#### ◈ ARCHETYPE IV — ARTISAN

**Material world:** Kraft paper, ceramic, hand-made textures, warm natural light.
**Base palette:** Warm cream `#F5F0E8` + terracotta `#D4715A` + earth tones. Never pure white/black.
**Base typography:** Fraunces / DM Serif Display + Nunito Sans + DM Sans. No monospace unless data-displaying.
**Base signatures:** Organic/tactile containers, warm motion, grain texture overlay `opacity-[0.04] mix-blend-mode: multiply` (non-negotiable ALL variants), "Batch No." labeling
**Navbar:** Warm linen, borderless or hairline. Serif wordmark.
**Motion:** Gentle. `ease-out`, 400–700ms. Hover: `scale-[1.02]` + warm lift.

##### IV-A · BOTANICAL
**Mutations:** Biophilic greens. Deep leaf `#4A7C59` + terracotta `#D4A574` + sage `#8BAF7C`.
**Signatures:** Arch-top images (`border-radius: 200px 200px 0 0`). Staggered grid (every 2nd card: `translate-y-4`, every 3rd image: slight rotation). Paper grain overlay (non-negotiable). Leaf SVG flourishes. Earth-toned badges.
**Typography:** Playfair Display / Lora / DM Sans. Tinted shadows `0 8px 32px rgba(74,124,89,0.12)`.
**CTA:** "Cultivate Your Practice" / "Discover the Collection"
**Anti-patterns:** No angular geometry. Never pure white background.

##### IV-B · ORGANIC
Softest variant. Moss `#7C9A6E` + sand `#D4A373`. Wabi-sabi principle.
**Signatures:** Organic border-radius (VARY per element: `60% 40% 30% 70% / 60% 30% 70% 40%`). Atmospheric blur blobs. Grain overlay `opacity-[0.05]`. Image rotation `-rotate-1` to `rotate-2`. Extreme whitespace.
**CTA:** "Begin Your Journey" — always gentle
**Anti-patterns:** Grain overlay NOT optional.

##### IV-C · SKETCH
Deliberate imperfection. Warm paper `#FDFBF7`. Pencil `#2D2D2D`. Correction red `#E84040`. Post-It yellow `#FFD600`.
**Signatures:** Wobbly border-radius (VARY per element: `255px 15px 225px 15px / 15px 225px 15px 255px`). EVERY card: slight rotation (−2° to 3°). Tape effect on card tops (pseudo-element, 48px×16px, `rgba(255,214,0,0.6)`). Handwritten typography (Kalam / Patrick Hand — non-negotiable). Hard offset shadow `4px 4px 0px rgba(45,45,45,0.7)`.
**CTA:** "Let's Sketch It!" / "Start Doodling"
**Anti-patterns:** No smooth shapes. No modern sans. Without wobbly borders + handwritten fonts = plain layout.

##### IV-D · CLAYMORPHISM
Soft 3D physicality. Candy accents: violet `#8B5CF6` / pink `#EC4899` / sky `#3B82F6` / emerald `#10B981` / amber `#F59E0B`. ALL `rounded-[20px]` minimum.
**Signatures:** 4-layer clay shadow on EVERY surface: `0 1px 0 rgba(255,255,255,0.7), -2px 6px rgba(0,0,0,0.08) inset, 0 8px 24px rgba(var(--clay-rgb),0.3), 0 2px 4px rgba(0,0,0,0.12)`. Active: `scale(0.92)` (squish). Hover: `translateY(-4px)` (float). `rounded-full` pills.
**Typography:** Nunito ExtraBold / Nunito Regular / Fredoka One. No serif.
**CTA:** "Let's Play" / "Start for Free"
**Anti-patterns:** No flat shadows. No sharp corners. No dark mode.

---

#### ◈ ARCHETYPE V — EXPRESSIVE

**Material world:** Screens, neon, synthetic, digital-only.
**Base palette:** Deep void `#0D0021` + multi-accent permitted (only class where multi-accent is default)
**Base typography:** Varies freely per extension. Base: Orbitron/Audiowide (synthetic/retro), Unbounded/Bangers (loud/kinetic).
**Base signatures:** Atmospheric backgrounds mandatory (never flat hex). Ambient motion expected. High potency default (70%). Visually dense.
**Navbar:** Extension-specific. Dark backgrounds, neon accent on CTA.
**Motion:** More than other archetypes. Ambient animations expected. Respect `prefers-reduced-motion`.

##### V-A · VAPORWAVE
Void purple-black `#0D0021`. Magenta `#FF00FF` + cyan `#01CDFE` + sunset orange `#FF9900`.
**Signatures:** Perspective grid floor (`perspective(400px) rotateX(45deg)`). Sunset gradient hero. Neon glow. CRT scanlines (`rgba(0,0,0,0.25)`). Terminal chrome. VHS labels. Retrowave horizon line.
**Typography:** Audiowide / Orbitron. Gradient-fill headlines.
**CTA:** "ENTER THE GRID" / "JACK IN"
**Anti-patterns:** Without grid floor + neon glow = generic purple dark mode.

##### V-B · ACIDPUNK
True black `#050008`. Neon green `#00FF41` + electric blue `#0050FF` or hot pink `#FF0099`. 80-90% density. Persistent glitch.
**Signatures:** All Cyberpunk + persistent ambient glitch (15% opacity, hue-rotate + translate). Stronger chromatic aberration (`-3px / +3px`). Phosphor scanlines. Corrupted data aesthetic.
**Typography:** Share Tech Mono / Orbitron / JetBrains Mono.
**CTA:** "BREACH SYSTEM" / "INJECT PAYLOAD"
**Anti-patterns:** Static Acidpunk is broken. Persistent glitch mandatory.

##### V-C · MAXIMALISM
Cosmic `#0D0D1A`. ALL accents: magenta `#FF3AF2` + mint `#3AFFB4` + gold `#FFD700` + orange `#FF6B00` + cyan `#00C8FF`. MORE IS MORE.
**Signatures (ALL required):** Animated star SVGs. ≥2 marquees. Neon gradient borders cycling. Noise + radial gradient bg (3+ colors). Sticker badges. Multi-accent rotation. Mix 2-4 display fonts.
**CTA:** "LET'S GO ✦"
**Anti-patterns:** ALL 5 ambient mandates required.

##### V-D · RETRO
Warm nostalgia `#2D1B4E`. Coral `#FF6B6B` + yellow `#FFD93D`. 70s/80s warmth.
**Signatures:** Color blocking. Retro fonts (Righteous, Bungee, VT323). Warm sepia scanlines. Win95 beveled borders. Marquee text. "Under Construction" badge.
**Typography:** Righteous / Bungee / VT323.
**CTA:** "CLICK HERE" / "PLAY NOW" — all-caps with underline
**Anti-patterns:** Retro is WARM. If it looks like Cyberpunk, warm the palette.

---

#### ◈ ARCHETYPE VI — WELLNESS

**Material world:** Porcelain, water, natural light, breathable fabric.
**Base palette:** Soft white `#FAFAF8` + eucalyptus `#5C8C6E` OR lavender `#9B8EC4` OR coral `#E8806A` — ONE secondary, 30% presence
**Base typography:** Fraunces / Instrument Serif + Source Sans 3 / Nunito. No monospace ever.
**Base signatures:** Squircle containers (`border-radius: 30px`), soft pastel gradients, "Begin Journey" CTA family
**Navbar:** Soft white, thin border, serif wordmark, rounded CTA pill.
**Motion:** Fluid. `ease-in-out`, 300–500ms.

##### VI-A · PLAYFUL GEOMETRIC
Electric purple `#6C63FF` + coral `#FF6B6B` + yellow `#FFD93D` + mint `#4ECDC4`. Background `#FAFBFF`.
**Signatures:** Hard offset shadow `4px 4px 0px #1A1A2E`. Hover: `translate(-2px,-2px)` + `6px 6px`, 150ms bouncy (`cubic-bezier(0.34, 1.56, 0.64, 1)`). Mixed radius (`rounded-full` + `rounded-none`). Pattern fill backgrounds (`radial-gradient` dots). Colorful section blocks.
**Typography:** Fredoka One / Nunito ExtraBold / Nunito Regular.
**CTA:** "Let's Go!" / "Start Playing"
**Anti-patterns:** No dark backgrounds. Pattern fills NOT optional.

##### VI-B · NEUMORPHISM
Strict monochromatic. Cool grey `#E0E5EC` ONE base color. Indigo `#6366F1` for focus/CTA only. No color fills.
**Signatures:** Dual-shadow on EVERY surface (never single-shadow). Raised: `6px 6px 12px rgba(163,177,198,0.6), -6px -6px 12px rgba(255,255,255,0.8)`. Inset for pressed/wells. `rounded-[16px]` min, `rounded-[32px]` large, `rounded-full` pills. Toggle switches inset. 3s floating on accent elements.
**Typography:** Nunito SemiBold / Regular. No mono, no serif.
**CTA:** "Get Started" / "Try It"
**Anti-patterns:** NEVER dark bg. NEVER colored shadows. NEVER gradients on surfaces. No border strokes — shadows are the borders.

**Skeuomorphic Components:** Buttons use physical object analogs (lift, depress, glow). Controls use physical analogies (rotary dials, sliders, toggles) over browser defaults.

---

#### ◈ ARCHETYPE VII — CLEARFORM ⚑ GATED

**What it is:** Intentional conventionality for clarity, universality, institutional trust. NOT a fallback.
**Activation gate — permitted ONLY when one condition met:**
1. Brief requests conventional/institutional/neutral/accessibility-first design
2. Brief describes a product category where distinctive aesthetics reduce trust
3. Screenshot recreation where source exhibits no archetype signature
4. Brief names a Clearform reference (Google, Microsoft, BBC, Wikipedia)

**If none met, Clearform is prohibited.** Fintech → Heritage/Technical. SaaS → Studio.

**Base palette:** White `#FFFFFF` or near-white `#F8F9FA` + system blue `#1A73E8` or charcoal `#202124` accent + zinc neutrals.
**Base typography:** Inter, system sans, or Noto Sans — **Inter explicitly permitted here.** Roboto / Source Sans 3 body. JetBrains Mono data only.
**Base signatures:** Predictable card grid, clear top nav, prominent search, AAA contrast, system-standard patterns.
**Navbar:** Standard `bg-white border-b border-gray-200`. Wordmark left, links right. No glassmorphism.
**Motion:** Minimal functional. `ease-out`, 150–200ms. Background color shift only.
**The one obligation:** Information architecture and copy must do ALL design work.

##### VII-A · ENTERPRISE
White `#FFFFFF` + indigo `#4F46E5` + zinc `#F4F4F5`. Colored CTA shadow. Gradient headline (ONE element). Bento grid. Dashboard hero mockup (follow §2.4).
##### VII-B · MATERIAL / GOOGLE DESIGN
Dynamic color from seed (M3 tonal palette). Pill buttons. State layers (`rgba(primary, 0.08)` overlay, not shadow). Navigation Rail desktop, Bottom Navigation mobile — no sidebar. `rounded-[28px]` large, `rounded-lg` small.
##### VII-C · FLAT DESIGN
Zero-depth, 2D, icon-heavy. Bold solid colors. Zero shadows, zero blur. Color as sole depth signal. Hover: `bg-color` shift only, `duration-100 linear`.
##### VII-D · FLUENT 2 (MICROSOFT)
Off-white `#FAFAFA` / `#F3F2F1`. Microsoft blue `#0078D4`. Segoe UI Variable (non-negotiable) + Cascadia Code. Mica (`blur(30px) saturate(110%)`), Acrylic (`blur(60px) saturate(180%)`). State layers. Command bar nav.
##### VII-E · EDITORIAL WEB
White/near-white. Brand accent (BBC red, Guardian blue, etc.). Large serif headlines. Byline formatting ("By [Author] · [Date]"). Category labels above headlines. Clear article card structure. Full-width solid navbar (NO glassmorphism).

---

#### ✕ CROSS-TREE MODIFIERS

##### ✕-A · MONOCHROME FILTER
Strips host to single hue + value range. Removes all accent color. Typography, spacing, signatures, composition remain. *Exception:* Swiss already functions as Monochrome.
##### ✕-B · KINETIC LAYER
Adds motion as primary dimension. Perpetual marquees (min 2). Viewport-responsive headline scale. Scroll-linked parallax. Dramatic hover (scale 1.05–1.08, instant inversions). Overrides timing to `duration-150` snap. **Must include comprehensive `prefers-reduced-motion` guard.**

---

### 5-D. POTENCY (Intensity)

- **Subtle (20–30%):** Muted signatures, minimal texture. B2B, legal, finance, healthcare, all Clearform.
- **Medium (50–60%):** Standard. **DEFAULT.**
- **Aggressive (80–90%):** Maximum signature density. Creative, cultural, youth, entertainment.

Clearform always Subtle (20–40%). Potency independent of reference choices.

---

### 5-E. SYNTHESIS DEPTH: HYBRIDIZATION & INVENTION

#### Hybridization

Requires: primary host (60–70%), secondary donor (30–40%), fusion name, explicit element transfer list.

**Compatible hybridizations:**

| Primary | Donor | Fusion Name | What transfers |
|---|---|---|---|
| Heritage/Academia | Technical/Industrial | Brass Circuit | Corner screws, LED indicators, mono panels |
| Heritage/Academia | Expressive/Vaporwave | Digital Manuscript | Neon glow on brass, grid floor background |
| Technical/Industrial | Artisan/Sketch | Field Notes | Wobbly borders, hand-drawn annotations |
| Studio/Luxury | Studio/Swiss | Editorial Grid | Flush-left law on luxury spacing |
| Studio/Neo-Brutalism | Expressive/Kinetic | Loud Press | Marquees on neo-brutalism composition |
| Artisan/Botanical | Heritage/Newsprint | Botanical Press | Column grid on botanical layout |
| Expressive/Vaporwave | Technical/Terminal | System Drift | Shell prompts on vaporwave visual layer |
| Wellness/Neumorphism | Studio/Bold Typography | Soft Type | Extreme scale on neumorphic surfaces |
| Heritage/Humanist Lit | Studio/Swiss | Warm Precision | Literary serif + Swiss headings on warm canvas |
| Technical/Terminal | Artisan/Organic | Lifestyle Terminal | Warm dark, nature photography, weight-400 typography |
| Studio/Luxury (dark) | Heritage/Humanist Lit | Dark Editorial | Pure black void, three-font editorial, frost borders |
| Technical/Terminal | Expressive/Neo-Brutalism | Dark Brutalist | Dark void, zero color, opacity-only depth, reverse hover |
| Studio/Swiss | Expressive/Maximalism | Chromatic Precision | Swiss 0–4px radius + vivid aurora gradient hero |
| Artisan/Botanical | Technical/Industrial | Field Iron | Olive/sage + zero-radius + hand-drawn overlays |
| Studio base (warm) | Artisan/Claymorphism | Warm Studio | Cream `#f7f4ed`, opacity-driven monochrome, inset-only depth |

**Incompatible hybridizations:**

| Combination | Reason |
|---|---|
| Neumorphism + Cyberpunk | Monochromatic soft-extrusion vs. void neon |
| Claymorphism + Monochrome | Candy color vs. zero-color |
| Luxury + Maximalism | Restraint vs. excess |
| Retro/90s + Luxury | Nostalgia vs. refined editorial |
| Organic + Industrial | Nature vs. machine |
| Swiss + Sketch | Grid law vs. imperfection |
| Terminal CLI + Luxury | Font system contradiction |
| Frost Border + Whisper Shadow | Depth language conflict |
| Opacity-Only Depth + Golden Cascading | Opposite depth philosophies |
| Binary Radius + Claymorphism | Constraint system conflict |

#### Invention

When no archetype/hybridization fits: 1. Name (two-word evocative). 2. Material definition. 3. Four-property color system (bg, fg, accent, surface with hex+label). 4. Three signature elements (specific, implementable, unique). Must obey accessibility. Must have ≥3 unambiguous signatures.

#### Standing Fusion Patterns (F-1 through F-6)

**F-1: Warm Mono-Climate** — Paper-quality surface, exclusively warm neutrals. `#f5f4ed` bg, `#26251e` fg, `#c96442` terracotta accent. Ring-shadow-as-border ONLY depth mechanism. Dark/light chapter alternation. Warm-tinted shadows. Single-weight serif display (500).

**F-2: Dark Brutalist Minimal** — Void `#1f2228`. Zero color. Opacity-only depth (5 steps: `rgba(255,255,255,0.03)` → `0.2`). Reverse hover (dims to 50%). Sparse spacing (4px, 8px, 24px, 48px only). GeistMono at 320px weight 300 as display. Single ghost button at 50% opacity.

**F-3: Golden Cascading Warm** — Golden-hour CSS. `#fffaeb` bg, `#1a1207` fg, gradient spectrum yellow→amber→orange accent. 5-layer golden cascading shadow (16px–400px offset). Near-zero border-radius vs. soft palette = deliberate contradiction. Block-gradient identity. Single font weight 400.

**F-4: Cinematic Dark Editorial** — Invisible UI. `#000000` or `#1a1a1a`. Full-bleed photography as 80%+ of visual weight. Zero shadows, zero gradients, zero decorative elements. Single typeface 400–450, line-height 1.0 on display. Editorial magazine image grid (varied ratios, no uniform heights).

**F-5: Interaction-Revealed Brand** — Brand accent at 0% at rest — appears ONLY on hover/focus/active. Creates "hidden personality." Neutral palette does all atmospheric work.

**F-6: Confident Flat (Editorial Scale)** — Billboard-scale display (100px+, weight 500). Universal pill geometry (9999px on EVERYTHING). Zero shadows philosophy. Binary light/dark. Single accent on CTA text only.

---

### 5-F. REFERENCE LIBRARY QUICK-NAVIGATION

```
HERITAGE (I)           TECHNICAL (II)          STUDIO (III)
├─ I-A  Academia       ├─ II-A  Industrial      ├─ III-A  Luxury
├─ I-B  Art Deco       ├─ II-B  Terminal CLI    ├─ III-B  Swiss
├─ I-C  Newsprint      ├─ II-C  Cyberpunk       ├─ III-C  Bauhaus
└─ I-D  Humanist Lit   ├─ II-E  Apex            ├─ III-D  Neo-Brutalism
                       └─ II-F  Alpine          └─ III-E  Bold Typography

ARTISAN (IV)           EXPRESSIVE (V)           WELLNESS (VI)
├─ IV-A  Botanical     ├─ V-A  Vaporwave        ├─ VI-A  Playful Geometric
├─ IV-B  Organic       ├─ V-B  Acidpunk         └─ VI-B  Neumorphism
├─ IV-C  Sketch        ├─ V-C  Maximalism
└─ IV-D  Claymorphism  └─ V-D  Retro

CLEARFORM (VII) ⚑ GATED              CROSS-TREE (✕)
├─ VII-A  Enterprise                  ├─ ✕-A  Monochrome Filter
├─ VII-B  Material / Google           └─ ✕-B  Kinetic Layer
├─ VII-C  Flat Design
├─ VII-D  Fluent 2 / Microsoft
└─ VII-E  Editorial Web
```

| Domain | Start in library |
|---|---|
| Finance / Legal / Institutional | **I** Heritage or **II** Technical |
| Health / Wellness / Food / Lifestyle | **IV** Artisan or **VI** Wellness |
| Creative / Agency / Art / Culture | **III** Studio or **V** Expressive |
| Developer tools / SaaS / Precision software | **II** Technical |
| Luxury / Fashion / Editorial / Premium | **I-D** or **III-A**, then surrounding |
| Youth / Consumer / Social / Entertainment | **IV-D**, **VI-A**, **V-C**, **V-D** |
| Crypto / Blockchain / DeFi | **II-C** Cyberpunk or **II-B** Terminal |
| Conventional / Institutional / Recreation | **VII** Clearform (confirm gate) |

---

### 5-G. TEXTURE & MATERIAL

**Hero Section (MANDATORY):** Every hero must have archetype-appropriate texture OR imagery. Flat hex = void. A void is not an environment. An environment is not optional.

**Vertical Rhythm & Spacing (CRITICAL):**
- Navbar must NOT directly touch hero text content. Minimum `pt-24` or `pt-32`.
- Add minimum `pb-16` or `pb-20` before any horizontal divider after CTA.
- Hero content internal spacing: `gap-6` or `gap-8` between elements.

| Archetype Class | Background Treatment |
|---|---|
| Heritage | Fixed grain (`opacity-[0.03]`, `overlay`) + radial vignette |
| Technical | Multi-layer dark gradient + grid overlay + noise `opacity-[0.04]` |
| Studio | Subtle mesh gradient (radial, 8% opacity max) OR stark flat |
| Artisan | Fixed grain (`opacity-[0.04]`, `multiply`) — non-negotiable |
| Expressive | Neon glow blobs + noise + pattern overlay |
| Wellness | Soft pastel radial gradients, no grain/noise |

**Premium Accent Gradients:** Gold/bronze/copper → 4-stop: `linear-gradient(135deg, #8E6B23 0%, #E8D19F 50%, #5F4716 75%, #8E6B23 100%)`. **FORBIDDEN:** Near-white `#FCF6BA` values.

**Material Precision:** Grain 0.05–0.08 opacity (felt, not seen). Shadow systems simulate printing mechanics, not skeuomorphic light. **Material transitions** between sections create spatial narrative.

---

### 5-H. TYPOGRAPHY CANONICAL RULES

- **Three-font system:** Display (headings), Body (prose), Mono (data only). One job each, never swap.
- **Fintech/banking headings:** Neue Haas Grotesk, Geist, or Aeonik. **NOT Inter.**
- **Technical/studio headings:** Space Grotesk or Mona Sans.
- **Heritage/editorial headings:** Cormorant Garamond, Ibarra Real Nova, or Domaine Display.
- **Mono for data only. FORBIDDEN for body text.**
- **Negative leading:** `leading-[0.92]` on `text-7xl`+.
- **Tracking:** `tracking-tight` headings / `tracking-wider` labels / `tracking-[0.2em]` caps.
- **Font import always in `<head>`.** Every declared font must be loaded.
- **Font Language Coverage (MANDATORY):** Verify Unicode coverage. Latin-only fonts on Cyrillic/Greek/Arabic = fallback to system. Use Anton, Noto Sans, Barlow Condensed for wide coverage.

### C. Mechanical Feedback

Hover: `hover:scale-[1.02]` or `hover:-translate-y-[1px]`. Active: `active:scale-[0.98]`. Focus: See §9.

### E. Theatrical Navigation

Per-archetype navbar specifications (32 entries covering all tree nodes):
- **I-A:** Warm mahogany, brass border, serif wordmark. **I-B:** Dark obsidian, centered bilateral, gold rule. **I-C:** Full-width rule, centered masthead serif. **I-D:** Minimal warm cream, serif wordmark, no CTA. **II-A:** Dark matte, 1px steel border, orange CTA. **II-B:** Terminal title bar, green mono, status bar. **II-C:** Void panel, cyan border, corner brackets. **II-D:** Frosted acrylic `blur(20px)`, white border. **II-E:** Dark tactical, diamond-plate strip, Barlow Condensed. **II-F:** Icy slate, white/20 border, orange CTA. **III-A:** Text-only borderless, serif wordmark, no CTA. **III-B:** Flat `border-b border-black`, flush left logo. **III-C:** Flat `border-b-4 border-black`, primary color fill. **III-D:** Cream `border-b-4 border-black`, Space Grotesk. **III-E:** Wordmark only, borderless. **IV-A:** Warm cream, hairline, centered ok. **IV-B:** Warm linen, borderless. **IV-C:** Sticky note yellow, Kalam font. **IV-D:** Floating clay panel, rounded-2xl. **V-A:** Terminal chrome (magenta/cyan/yellow dots). **V-B:** Void black, neon green border, mono, glitch hover. **V-C:** Multi-accent borders, pattern bg, gradient logo. **V-D:** Table-style, beveled OS borders. **VI-A:** White `border-b-2 border-black`, geometric accent. **VI-B:** Raised neumorphic panel, same grey bg. **✕ Mono:** Host nav, greyscale. **✕ Kinetic:** Host nav + marquee strip below. **VII base:** `bg-white border-b border-gray-200`. **VII-A:** White, indigo CTA. **VII-B:** Google-style app bar, elevation shadow. **VII-C:** Flat white, no blur/shadow, instant color shift. **VII-D:** Acrylic command bar, Microsoft blue CTA. **VII-E:** Full-width masthead, category nav row, solid (NO glassmorphism).

**Centered masthead:** Consider collapsing to minimalist "stamp"/"orb" on scroll for editorial styles.
**Mobile hamburger menu (MANDATORY):** Toggle, ARIA `aria-expanded`, close button, body scroll lock (`overflow: hidden`), animated open/close — NEVER `alert()`.

### G. Subtle Ambient Animation (per-archetype personality)
- Academia: Slow sepia 700ms. Cyberpunk/Terminal: Glitch pulses, cursor blink, fast snap. Kinetic: Perpetual marquees. Maximalism/Vaporwave: Ambient glow pulses, color cycling. Organic/Botanical: Slow plant-like sway. Industrial: Physical clicks, weighted mechanical. Luxury: Slow cinematic 2000ms. Neumorphism: Shadow depth transitions, floating.

### H. Status Elements & Marquee
Metrics, system status, timestamps. Mono, 2–3 metrics per bar. Only for Terminal, Cyberpunk, Industrial, Modern Dark, Web3.

---

## 7. Component Architecture

### A. Atomic Components

**Buttons — Semantic Choice (CRITICAL):** `<a>` for navigation, `<button>` for form/state changes. Default: bg + text (≥ 4.5:1). Hover: shade shift. Active: `scale-[0.98]`. Focus: §9. Disabled: `opacity-50 cursor-not-allowed`.

**Archetype Button Personalities (with key CSS hints):**
- **Academia:** Brass gradient, Cinzel font, uppercase, `text-shadow` engraved effect
- **Art Deco:** Gold gradient, geometric chamfered ends, symmetrical
- **Bauhaus:** Solid primary fill, `border-4 border-black`, hard offset shadow `4px 4px 0 #121212`
- **Bold Typography:** No background — bold underline only, or full-bleed accent
- **Claymorphism:** `rounded-full`, multi-layer clay shadow (`0 1px 0 rgba(255,255,255,0.7), -2px 6px rgba(0,0,0,0.08) inset, 0 8px 24px rgba(clay-rgb,0.3), 0 2px 4px rgba(0,0,0,0.12)`), squish on press
- **Cyberpunk:** Chamfered corners, cyan glow border, uppercase mono font
- **Enterprise:** Indigo gradient `from-indigo-600 to-blue-600`, `rounded-lg`, colored shadow `0 4px 12px rgba(79,70,229,0.25)`
- **Flat Design:** Solid color, no shadow, instant `background-color` shift on hover `duration-100 linear`
- **Industrial:** Matte ABS surface, safety orange, top-left lighting, `translateY(2px)` depress on press
- **Kinetic:** Full-width, uppercase, accent inversion on hover (instant)
- **Luxury:** No fill — text + thin underline only. OR thin-outline with gold hover
- **Material You:** Pill-shaped filled, tonal outlined (`border ring`), or text variant. State layer `bg-white/8` on hover
- **Neo-Brutalism:** `border-4 border-black`, hard `8px 8px 0px #000` shadow, press-down mechanical (`translate(4px,4px)`)
- **Newsprint:** Sharp corners, no border-radius, black text on cream or inverted
- **Neumorphism:** Raised convex surface (dual shadow), inset on press
- **Organic:** Organic border radius, earth-tone fill, gentle `translateY(-2px)` lift
- **Terminal:** Bracketed text `[EXECUTE]`, green on black, cursor indicator, no shadow
- **Vaporwave:** Neon glow border (`box-shadow: 0 0 8px #FF00FF`), gradient text fill, hover: bg reveal

**Form Inputs:** Default: border + bg + text color. Focus: ring/border + label animation. Error/Success: red/green border + message. Floating labels with `peer`. Validation with `aria-invalid` + `aria-describedby`.

**Cards:** Per archetype spec. Background, radius, shadow, hover lift.

### A2. Premium Surface Patterns

**Double-Bezel (Doppelrand):** Premium/studio/luxury. Outer: `bg-black/5 ring-1 rounded-[2rem]`. Inner: `shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]` at `rounded-[1.5rem]`. Button-in-button variant: icon in `w-8 h-8 rounded-full bg-black/5` inside larger button.
**Liquid Glass Refraction:** OLED/dark premium. `bg-white/5 backdrop-blur-2xl` + `border border-white/10` + `shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]`.
**Eyebrow Tags:** Editorial/studio. `text-[10px] uppercase tracking-[0.2em]` muted accent, 16–24px above heading.

### A3. Bento 2.0 Card Archetypes

| Card Type | Visual Treatment | Content |
|---|---|---|
| Intelligent List | Row items with hover highlight | Feature checklists, spec comparisons |
| Command Input | Inline search/command bar | Search, filtering, quick actions |
| Live Status | Real-time indicator (pulse/progress) | System health, deployment status |
| Wide Data Stream | Full-width bento span | Activity feed, timeline |
| Contextual UI | Appears on interaction | Settings, details, inline editing |

**Rule:** Bento with ≥3 cards must contain ≥2 different archetypes. Three identical "icon+heading+description" cards forbidden.

### B. Responsive Design

Breakpoints: sm:640, md:768, lg:1024, xl:1280, 2xl:1536. Mobile first. Touch targets ≥ 44×44px.

---

## 8. Output Structure

**Auto-determine sections by task type.**

Landing Pages: (1) Sticky Blurred Nav, (2) Hero Section, (3) Social Proof, (4) Core Offering, (5) Detailed Features (3–4 with visuals), (6) Product Visualization, (7) Testimonials (with attribution), (8) Pricing (2–3 tiers), (9) Final CTA, (10) Footer.

**CREATIVITY ENFORCEMENT (MANDATORY):** Every hero MUST break the generic template. Forbidden: "H1 on left, card/demo on right", "Sidebar + Big Box", "three identical feature cards with icons."

**Advanced Pricing Strategy:** Tiered pricing increases perceived value. Single price point is weaker. Decoy effect. "Cancel anytime" prominently visible.

**CRITICAL: Product Sections for Commerce:**
- Storytelling (process, heritage) comes BEFORE products — not instead of them.
- Product cards: series badge, gradient overlay, attributes with icons, price display, entire card clickable.

**Placeholder Treatment:** Intentional placeholder = deliberate design choice. Textured box, rotated label, minimal brand-colored frame. NOT wireframe artifact.

**Data Visualization Requirements:** Charts must include axes, labels, and values — not decoration. Unlabeled bars communicate nothing. Data viz requires context to be functional.

**If non-landing-page:** Adapt accordingly. Never "homepage" a functional UI.

**HTML/Tailwind Block:** DOCTYPE mandatory. Tailwind CDN in `<head>`. Tailwind config for fonts. NO markdown in HTML (`<strong>` not `**text**`). Semantic HTML landmarks. Direct hex codes in Tailwind brackets. Feather Icons (`data-feather`, `feather.replace()` in try/catch). All interactive states. Mobile-responsive. Performance: lazy-load images (`loading="lazy"`), `font-display: swap`, `prefers-reduced-motion`, IntersectionObserver with `unobserve()`, `DOMContentLoaded`, custom scrollbar. CSS variables: define only what you use. Metadata: `<meta description>`, OG tags.

---

## 9. Layer 2 — IMPLEMENTATION RULES (Mandatory Constraints)

**Failure-derived, prescriptive, non-negotiable. Aesthetic intent does not override.**

### A. Accessibility (WCAG AA — Non-Negotiable)

**Contrast:** Normal text ≥ 4.5:1. Large text ≥ 3:1. Focus outlines ≥ 3:1 against bg.
**Focus (MANDATORY ALL archetypes):** `focus:outline-2 focus:outline-offset-2 focus:outline-[color]`. Use `outline` NOT box-shadow (Windows High Contrast). ≥ 3:1 against button bg.
**Semantic HTML:** Proper H1→H2→H3 (never skip). Form labels linked (`for`/`id`). Images: `alt` required, decorative: `alt=""`. Keyboard navigable. `aria-label` on icon-only buttons. `role="navigation"` on `<nav>`.
**Skip Navigation Link (MANDATORY):** `<a href="#main-content" class="sr-only focus:not-sr-only fixed top-4 left-4 ...">Skip to main content</a>`.
**Motion Safety:** `prefers-reduced-motion` on ALL animations/marquees/floats. Staggered entrances need fallback. Scanlines vestibular trigger.
**Contrast Verification:** Light bg → dark fg (<40% luminance). Dark bg → light fg (>60% luminance). Mid-tone grays on dark bg often fail 4.5:1 — verify.

### Master Prohibition Index

**Contrast:** WCAG AA 4.5:1 text / 3:1 large. Pure cyan #00CFFF banned. Carbon black #1C1C1E text on dark banned. Muted grays on dark banned. Opacity <60% text banned.
**Aesthetics:** Template look banned. Broken nav links banned. CTA color bug banned. CTA dead-ends banned. Login form mid-marketing banned. Floating pill + telemetry bar combo banned. Monotonous headlines banned. Cliché symbols banned. High-saturation accent full opacity banned. Logo rotation on hover banned. Neon scrollbar banned.
**Animation:** `animate-bounce` banned. Generic `animate-reveal` on massive blocks banned. Rotating logos banned. Repetitive floating banned. Parallax banned (vestibular). Stagger without reduced-motion fallback banned.
**Code:** `contentEditable` for data grids banned. `zinc` scale override banned. Mono for body text banned. Missing focus states banned.
**Copy:** Vague claims banned. Hostile copy banned. False precision banned. Abstract nav labels banned. Technical jargon in nav banned. Cryptic footer banned.

### Animation Decision Tree (Quick Reference)
- **Hero Entrance:** Staggered fade-up (0s→0.4s, CSS-only, `motion-safe:`).
- **Scroll Reveal:** IntersectionObserver, `opacity:0→1`, `translateY(20px)→0`, `unobserve()`.
- **Hover:** `translateY(-2px)` + shadow + border, 300ms. Guard: `@media (hover: hover) and (pointer: fine)`.
- **Never:** Logo rotation, `animate-bounce` on numbers, repetitive floating. Always disable on `prefers-reduced-motion: reduce`.
- **Marquee:** Duplicate content, `translateX(-50%)`, MUST define `@keyframes`.

### F. Spacing & Layout Rules

**4pt scale:** 4, 8, 12, 16, 24, 32, 48, 64, 96px. Semantic tokens (`--space-sm`), not pixel values.
**Gap over margin.** **Container queries for components**, viewport for page layout. **Line length:** max-width 65–75ch.
**Touch targets:** ≥ 44×44px. **Viewport:** NEVER `h-screen`/`100vh` — use `min-h-[100dvh]`.
**Grid over Flex** for page layout. Flex for single-axis within grid cells.

### Color Strategy (60-30-10 Rule)

Primary (60%) dominant atmosphere. Secondary (30%) support. Accent (10%) CTAs.
**Semantic system:** Surface scale (bg progression). Brand accent variants: bright/mid/deep/dark/glow/subtle. `brand/10` icon bg, `brand/15` hover, `brand/20` borders. Near-white max brightness in dark. Glow only on primary CTAs.
**Discipline:** Match archetype. Limit to ONE accent (authoritative/premium). Chromatic restraint (3-4 max). Each color earns presence. #00CFFF banned as general accent.

### D. Trust & Conversion Psychology

**Social Proof Specificity:**
- Use specific, verifiable numbers: "3,420 Students • Zero BS"
- **FORBIDDEN:** Rounded, vague claims like "thousands of students"
- Include real testimonials with names, roles, and specific outcomes

**Model A Trust Architecture:**
- **Three Trust Moments:** Hero (scale proof), After hero (logo marquee), Final CTA (trust badges)
- **Demographically Targeted Testimonials:** Each speaks to different user segment
- **Pricing Transparency:** Never hide price. Include "cancel anytime" prominently.
- **Direct Checkout Links:** CTAs must link directly to working checkout.
- **Sample Content Preview:** Include one free lesson, project preview, or trial.

**Risk Reversal Framing:**
- "We're serious about your success" beats "No refunds (we're serious about commitment)"
- **FORBIDDEN:** Hostile copy like "cut the fluff," "no gui," "system failure"

**Inclusive Persona:**
- Avoid jargon that signals "if you don't understand DevOps slang, leave"
- **CTA Language:** Human action verbs — "Open Your Account" not "Initialize Account"

### E. UX Writing & Microcopy

**Buttons:** NEVER "OK", "Submit", "Yes", "No", "Click here", "Cancel". Use verb+object: "Save changes", "Create account", "Delete 5 messages". Destructive: name explicitly.
**Error Messages:** Answer: (1) What happened? (2) Why? (3) How to fix? Never blame user. Never use humor. Never vague.
**Empty States:** (1) Acknowledge, (2) Explain value, (3) Provide action.
**Loading:** Be specific ("Saving draft..." not "Loading..."). Set expectations for long waits.
**Terminology:** One term per concept. Build mental glossary.
**Translation:** +30% space German/Finnish, +20% French. Numbers separate from text. Full sentences as translation strings. Avoid abbreviations.
**Accessibility Writing:** Link text has standalone meaning. Alt text describes info, not image. Icon buttons need `aria-label`.

**Banned Copywriting Words (AI Slop):**
- **Hype verbs:** Elevate, Seamless, Unleash, Empower, Supercharge, Revolutionize, Transform, Accelerate, Unlock
- **Empty modifiers:** Next-Gen, Cutting-Edge, State-of-the-Art, Industry-Leading, World-Class, Innovative, Powerful, Robust
- **Generic filler:** All-in-one, Comprehensive, End-to-end, Out-of-the-box, Turnkey, Effortless, Streamlined
- **Fake specificity:** 99.99%, 10x, 1000+, "trusted by thousands"
- **Generic brands:** Acme, Nexus, SmartFlow, TechCorp, DataVerse, CloudSync
- **Generic personas:** John Doe, Jane Smith, Alex Johnson
- **Lazy prefixes:** "Discover our...", "Explore our...", "Learn more about..."
- **Random caps:** Title Case on every heading

---

## 10. Brand Identity & Recreation

### B2. Generational Weight & Materiality
Material intelligence creates physical object sensations. Material shifts within viewport create spatial narrative. Aged/muted tones over fresh/saturated. Tactile color: how it looks after 50 years.

### B4. Cultural Intelligence
Name real products ("Wooting 60HE" not "Mechanical Keyboard"). Personality details add life.

### Design Recreation from Images

**OVERRIDE ALL CREATIVE RULES.** Set creativity to ZERO.

**A. Measurement Extraction:** Exact pixels, spacing, border-radius, shadows, positioning.
**B. Color Extraction:** Exact HEX, RGBA with alpha, reconstructed gradients.
**C. Typography:** Exact font stack (no substitutions), pixel values, weights.
**D. Layout:** Full-width header/sidebar. Component integrity. Only visible elements.
**E. FORBIDDEN:** Text gradients unless visible. `<br>` for unnatural breaks. Creative liberties.
**F. Verification:** Measurements, Colors, Typography, Layout, Components, Alignment, Fidelity — all per pixel.

---

## 11. Quality Assurance Checklist

### Self-Audit Checklist (MANDATORY)

- Contrast 4.5:1 WCAG AA on ALL text/bg pairs
- Archetype signatures present per §11 matrix
- No forbidden layouts (§4-A), no three-column identical grids
- ALL links resolve, mobile menu implemented, animations working
- No markdown in HTML output
- H1 ≥ 3–4× body, visual weight distribution clear
- Asymmetry present, section variety (3+ formats), template-breaking element
- Focus states on ALL interactive elements
- Semantic HTML landmarks
- Direct hex codes in Tailwind, no undefined variables
- Mobile responsive with hamburger toggle + `aria-expanded`
- All fonts imported in `<head>` with fallbacks
- `prefers-reduced-motion` on ALL animations
- Icon `aria-labels` on icon-only buttons
- No vague claims, hostile copy, false precision, wrong-domain jargon

### Archetype Signature Verification Matrix

| Node | Non-Negotiable Signatures |
|---|---|
| **I-A Academia** | Arch-top images, sepia reveal, Roman numerals, brass drop caps, corner flourishes, ornate dividers |
| **I-B Art Deco** | Chevron borders, bilateral symmetry, double-line frames, sunburst, geometric ornaments |
| **I-C Newsprint** | Zero border-radius, multi-column grid with rules, extreme headline scale, editor's red |
| **I-D Humanist Lit** | Warm cream (never white), serif/sans split by role, pill indicators, generous leading |
| **II-A Industrial** | Corner screws at 4 corners, safety orange, top-left lighting, LED indicators, button depress |
| **II-B Terminal** | Blinking cursor, shell prompts, CRT scanlines, mono everything, status codes |
| **II-C Cyberpunk** | Chamfered corners (clip-path), chromatic aberration, heavy CRT, corner brackets, neon glow |
| **II-D ISO-Tech** | Frosted acrylic surface, sealed borders, cyan status only, dense data grid, clinical type |
| **II-E Apex** | Material textures, military ALL-CAPS, tactical orange CTA, spec sheet layout |
| **II-F Alpine** | Fabric textures, emergency orange CTA/alerts only, icy palette, instrument aesthetic |
| **III-A Luxury** | Extreme negative space (`py-40`+), inner border frames, off-axis hero, faded section numbers, zero icons |
| **III-B Swiss** | Flush-left (absolute), visible 24px grid, Swiss Red sole signal (1–2 max), `border-l-4` |
| **III-C Bauhaus** | 4px black borders, hard offset shadow, color-block sections, zero gradients |
| **III-D Neo-Brutalism** | `border-4 border-black`, `8px 8px 0px #000`, rotations, cream bg (never white) |
| **III-E Bold Typography** | Viewport-filling display (8:1 ratio), single accent word, zero photography, negative tracking |
| **IV-A Botanical** | Arch-top images, grain overlay (non-negotiable), staggered cards, earth-toned badges |
| **IV-B Organic** | Organic blob radius (varies), grain overlay, blur blobs, no parallel straight lines |
| **IV-C Sketch** | Wobbly radius (irregular), handwritten font (Kalam/Patrick Hand), card rotations, tape effect |
| **IV-D Claymorphism** | 4-layer clay shadow, squish on press (`scale-0.92`), zero sharp corners, candy fills |
| **V-A Vaporwave** | Perspective grid floor, sunset gradient, heavy CRT scanlines, terminal chrome |
| **V-B Acidpunk** | Persistent ambient glitch, strong chromatic aberration, phosphor scanlines, noise texture |
| **V-C Maximalism** | ALL 5 accents active, perpetual animations (stars, marquees, gradient borders), sticker badges |
| **V-D Retro** | Warm color blocking, retro display font, beveled borders, warm scanlines |
| **VI-A Playful Geo** | Hard offset shadows, pattern fills, mixed radius (full + none), bright section blocks |
| **VI-B Neumorphism** | Dual opposing shadows ALL surfaces, single grey base, zero solid borders, indigo CTA only |
| **✕ Monochrome** | Zero color, scale contrast only, host signatures preserved in greyscale |
| **✕ Kinetic** | Min 2 marquees, scroll parallax on hero, dramatic hover (1.05+), reduced-motion guard |
| **VII base** | Gate confirmed, white surface, Inter permitted, predictable grid, AAA contrast |
| **VII-A Enterprise** | Colored CTA shadow, single gradient headline, dashboard mockup, bento grid |
| **VII-B Material** | Tonal surfaces, pills throughout, state layer hover, Roboto/Google Sans |
| **VII-C Flat** | Zero shadows, bold solid colors, instant linear hover, icon-dominant |
| **VII-D Fluent 2** | Mica/Acrylic, state layers, Segoe UI Variable, command bar |
| **VII-E Editorial** | Category labels, bylines, article card structure, no decoration, full-width solid navbar |

**Synthesis verification:** ≥2 distinct signature elements from different archetype families visibly present.

### C. Usability Verification

#### C-1. Cognitive Load Assessment

Evaluate against these 8 checkpoints. 0–1 failures = low (good), 2–3 = moderate (address soon), 4+ = high (critical fix needed).

- [ ] **Single focus:** Can the user complete primary task without distraction?
- [ ] **Chunking:** Information in digestible groups (≤ 4 items per group)?
- [ ] **Grouping:** Related items visually grouped (proximity, borders, shared bg)?
- [ ] **Visual hierarchy:** Immediately clear what's most important?
- [ ] **One thing at a time:** Single decision before moving to next?
- [ ] **Minimal choices:** ≤ 4 visible options at any decision point?
- [ ] **Working memory:** No info from previous screen needed to act?
- [ ] **Progressive disclosure:** Complexity revealed only when needed?

**Working memory rule:** Humans hold ≤4 items in working memory (Cowan, 2001). Navigation: ≤5 top-level items. Form sections: ≤4 fields visible per group. Action buttons: 1 primary + 1–2 secondary. Dashboard widgets: ≤4 key metrics without scrolling. Pricing: ≤3 options.

---

## 12. Archetype Trigger Recognition

| Signal Words / Context | Route To |
|---|---|
| "library," "scholarly," "parchment," "university," "classical" | **I-A Academia** |
| "1920s," "gatsby," "art deco," "geometric gold," "jazz age" | **I-B Art Deco** |
| "newspaper," "editorial press," "journalism," "broadsheet" | **I-C Newsprint** |
| "ai assistant," "warm paper," "literary," "bookish," "conversation" | **I-D Humanist Lit** |
| "industrial," "braun," "machine," "hardware," "teenage engineering" | **II-A Industrial** |
| "terminal," "CLI," "command line," "shell," "hacker green" | **II-B Terminal CLI** |
| "cyberpunk," "hacker," "neon," "dystopia," "glitch," "blade runner" | **II-C Cyberpunk** |
| "microsoft," "fluent," "windows," "frosted glass UI," "acrylic" | **II-D ISO-Tech** |
| "military," "tactical," "diamond plate," "kevlar," "field ready" | **II-E Apex** |
| "gore-tex," "titanium," "alpine," "expedition," "glacial" | **II-F Alpine** |
| "luxury brand," "high fashion," "aesop," "hermès," "cinematic" | **III-A Luxury** |
| "swiss design," "helvetica," "international style," "grid is law" | **III-B Swiss** |
| "bauhaus," "form follows function," "constructivist," "primary colors" | **III-C Bauhaus** |
| "neo-brutalism," "sticker shadows," "zine web," "rebellious" | **III-D Neo-Brutalism** |
| "editorial typography," "type as hero," "typographic art" | **III-E Bold Typography** |
| "botanical," "nature," "biophilic," "plant-based," "forest" | **IV-A Botanical** |
| "organic," "natural," "wabi-sabi," "hand-crafted," "imperfect" | **IV-B Organic** |
| "sketch," "hand-drawn," "whiteboard," "sticky note," "napkin" | **IV-C Sketch** |
| "clay," "3D soft," "toy-like," "claymorphism," "playful 3D" | **IV-D Claymorphism** |
| "vaporwave," "outrun," "synthwave," "retrowave," "VHS" | **V-A Vaporwave** |
| "acidpunk," "dark glitch," "corrupted data," "signal interference" | **V-B Acidpunk** |
| "maximalist," "dopamine," "Y2K," "hyperpop," "sensory overload" | **V-C Maximalism** |
| "retro," "90s," "geocities," "windows 95," "warm nostalgia" | **V-D Retro** |
| "playful," "memphis," "geometric fun," "kid-friendly," "stickers" | **VI-A Playful Geo** |
| "neumorphism," "soft UI," "clay extrusion," "embossed" | **VI-B Neumorphism** |
| "black and white only," "fashion magazine," "zero color" | + **✕ Monochrome** |
| "kinetic," "marquee," "motion text," "everything moves" | + **✕ Kinetic** |
| "enterprise software," "SaaS trust," "startup product" | **III base** (Studio, low potency) |
| "SaaS landing page," "tech startup," "product hunt" | **III base** + **III-B** or **III-D** medium |
| "crypto," "bitcoin," "DeFi," "blockchain," "web3" | **II-C Cyberpunk** + orange, or **II-B Terminal** |
| "enterprise software," "B2B SaaS," "corporate dashboard" | **VII-A** (if gate passes) |
| "google," "material design," "MD3" | **VII-B** (if gate passes) |
| "flat," "no shadows," "zero depth" | **VII-C** (if gate passes) |
| "microsoft," "fluent design," "windows," "azure" | **VII-D** (if gate passes) |
| "news site," "publisher," "editorial web," "BBC" | **VII-E** (if gate passes) |
| "government portal," "civic," "university platform" | **VII base** (if gate passes) |

#### Cross-Cutting Design Signal Routes

| Signal | Route |
|---|---|
| "warm," "parchment," "cream," "earthy" | Neutral Temp: Warm (`#f5f4ed`/`#f7f4ed` bg) — doesn't change archetype |
| "cool gray," "clinical," "blue-tint" | Neutral Temp: Cool (`#f0f0f3`/`#f5f5f7` bg) |
| "frost," "ice," "crystalline," "glass panel" | Frost Border: `border: 1px solid rgba(214,235,253,0.19)` on dark |
| "ring," "outline-only," "no visible shadow" | Ring Shadow: `box-shadow: 0 0 0 1px` — Studio, Swiss, Flat |
| "mono at extreme scale," "320px mono" | II-B Terminal + ✕ Monochrome |
| "cinematic dark," "photography-first" | III base (Studio dark) + editorial photography |
| "hidden accent," "accent on hover only" | Interaction-Revealed Brand pattern |
| "border-depth," "thickness progression" | Border-Weight Depth — Terminal, Industrial, ISO-Tech |
| "luminance step," "opacity surface" | Luminance Stepping (bg opacity as elevation) — any dark |
| "warm studio," "warm SaaS" | III base + Warm Neutral Temp |
| "brutalist dark," "opacity-only" | II-B × III-D fusion — dark void, zero color, reverse hover |
| "lifestyle developer" | IV-B × II-B fusion |
| "editorial scale flat" | VII-E × VII-C — massive display, zero shadows, pill geometry |

**When ambiguous:** Ask ONE question — "Closer to [X] or [Y]?" Never present full list. Never default silently. For Clearform ambiguity: ask explicitly.

---

## 13. Typography Deep Reference

### Font Selection Procedure (MANDATORY)

**Step 1 — Brand Voice Words:** 3 concrete words. NOT "modern/elegant" — "warm and mechanical and opinionated."
**Step 2 — Reject Reflex Fonts:** List 3 natural picks. Reject all on Reflex Ban List (AP-3). Syne is the most overused "distinctive" pick.
**Step 3 — Browse with Physical Metaphor:** Imagine font as physical object (typewriter ribbon, shop sign, terminal manual, fabric label, museum caption, children's book on cheap newsprint). Browse font catalogs (Google Fonts, Pangram Pangram, Future Fonts, ABC Dinamo, Klim Type Foundry, Velvetyne) with that physical object in mind. Reject the first thing that "looks designy" — that's the trained reflex. Keep looking.
**Step 4 — Cross-Check Stereotypes:** The right font for an "elegant" brief is NOT necessarily a serif. The right font for a "technical" brief is NOT necessarily a sans-serif. The right font for a "warm" brief is NOT Fraunces. A children's product does NOT need a rounded display font. A "modern" brief does NOT need a geometric sans. If the final pick lines up with a reflex pattern, go back to Step 3.

**Anti-stereotypes worth defending against:** A technical brief does NOT need a serif "for warmth." An editorial brief does NOT need the same expressive serif everyone uses — premium can be Swiss-modern or monospace. The most modern thing is not using the font everyone else uses.

### XL Type Systems — Archetype Font Specifications

| Archetype | Display / Heading | Body / Prose | Data / Mono |
|---|---|---|---|
| **I-A Academia** | Cormorant Garamond | Crimson Pro | Cinzel (labels) |
| **I-B Art Deco** | Cinzel / Marcellus | Josefin Sans | Cinzel Decorative |
| **I-C Newsprint** | Playfair Display Black | Crimson Text | Source Code Pro |
| **I-D Humanist Lit** | Source Serif 4 / Tiempos | Inter | Inter Mono (metadata) |
| **II-A Industrial** | Barlow Condensed Bold | Barlow Regular | JetBrains Mono |
| **II-B Terminal** | JetBrains Mono Bold | JetBrains Mono Regular | JetBrains Mono (all) |
| **II-C Cyberpunk** | Orbitron / Share Tech Mono | JetBrains Mono | JetBrains Mono |
| **II-D ISO-Tech** | Geist | Inter | JetBrains Mono |
| **II-E Apex** | Barlow Condensed Black | Barlow Regular | JetBrains Mono |
| **II-F Alpine** | Manrope | Inter | JetBrains Mono |
| **III-A Luxury** | Domaine Display / Editorial New | Freight Text Pro | Helvetica Neue |
| **III-B Swiss** | Helvetica Neue Black | Helvetica Neue Regular | Helvetica Neue Medium |
| **III-C Bauhaus** | Impact / Clash Display | General Sans | N/A |
| **III-D Neo-Brutalism** | Space Grotesk Black | Space Grotesk Bold | Space Grotesk Medium |
| **III-E Bold Typography** | Monument Extended / Owners / Editorial New | Same at small scale | N/A |
| **IV-A Botanical** | Playfair Display | Lora / EB Garamond | DM Sans |
| **IV-B Organic** | Fraunces | Nunito Regular | DM Sans |
| **IV-C Sketch** | Kalam / Patrick Hand | Kalam | Kalam |
| **IV-D Claymorphism** | Nunito ExtraBold / Fredoka One | Nunito Regular | Nunito SemiBold |
| **V-A Vaporwave** | Audiowide / Orbitron | Rajdhani | Orbitron |
| **V-B Acidpunk** | Share Tech Mono / Orbitron | JetBrains Mono | JetBrains Mono |
| **V-C Maximalism** | Mix 2–4 intentionally | Any readable | Any |
| **V-D Retro** | Righteous / Bungee | VT323 | Courier New |
| **VI-A Playful Geo** | Fredoka One / Nunito ExtraBold | Nunito Regular | Nunito Medium |
| **VI-B Neumorphism** | Nunito SemiBold | Nunito Regular | N/A |
| **✕ Monochrome** | Inherits host | Inherits host | N/A |
| **✕ Kinetic** | Bebas Neue / Barlow Condensed (marquees) | Inherits host | Inherits host |
| **VII base** | Inter SemiBold or system sans | Inter Regular | JetBrains Mono |
| **VII-A Enterprise** | Inter SemiBold | Inter Regular | JetBrains Mono |
| **VII-B Material** | Google Sans, Inter | Inter | N/A |
| **VII-C Flat** | Inter ExtraBold | Inter Regular | Inter Medium |
| **VII-D Fluent 2** | Segoe UI Variable Display | Segoe UI Variable Text | Cascadia Code |
| **VII-E Editorial** | Georgia / Playfair Display | Georgia / Source Serif 4 | Small caps sans |

**Inter NEVER heading for fintech/banking/enterprise — Neue Haas Grotesk, Geist, Aeonik. Barlow Condensed restricted to II-A, II-E, ✕-B marquees only.**

### Typographic Scale & Discipline

**Display Scale (Responsive using clamp):**
- Kinetic/Bold Typography: `clamp(3rem, 12vw, 14rem)`
- Academia/Art Deco/Luxury: `clamp(2.5rem, 6vw, 7rem)`
- Standard Landing H1: `clamp(2rem, 5vw, 5rem)`
- Standard H2: `clamp(1.5rem, 3.5vw, 3rem)`

**Line-Height by Category:**
- Kinetic/Bold display: `0.88–0.92`
- Luxury/Editorial display: `1.0–1.1`
- Standard heading: `1.15–1.25`
- Standard body: `1.6–1.75`
- Newsprint body: `1.45` | Academia body: `1.7`

**Tracking Reference:**
- `tracking-[-0.05em]` — Kinetic/Bold massive display
- `tracking-[-0.03em]` — Luxury/Editorial large headings
- `tracking-tight` (Tailwind -0.025em) — Standard headings
- `tracking-[0.08em]` — Professional small caps
- `tracking-[0.15em]` — Art Deco/Academia uppercase labels
- `tracking-[0.2em]` — Premium caps metadata
- `tracking-[0.3em]` — Art Deco section overlines

### Typographic Scale & Discipline

**Display Scale (Responsive using clamp):**
- Kinetic/Bold Typography: `clamp(3rem, 12vw, 14rem)`
- Academia/Art Deco/Luxury: `clamp(2.5rem, 6vw, 7rem)`
- Standard Landing H1: `clamp(2rem, 5vw, 5rem)`
- Standard H2: `clamp(1.5rem, 3.5vw, 3rem)`

**Line-Height by Category:**
- Kinetic/Bold display: `0.88–0.92`
- Luxury/Editorial display: `1.0–1.1`
- Standard heading: `1.15–1.25`
- Standard body: `1.6–1.75`
- Newsprint body: `1.45` | Academia body: `1.7`

**Tracking Reference:**
- `tracking-[-0.05em]` — Kinetic/Bold massive display
- `tracking-[-0.03em]` — Luxury/Editorial large headings
- `tracking-tight` (Tailwind -0.025em) — Standard headings
- `tracking-[0.08em]` — Professional small caps
- `tracking-[0.15em]` — Art Deco/Academia uppercase labels
- `tracking-[0.2em]` — Premium caps metadata
- `tracking-[0.3em]` — Art Deco section overlines

**Pairing Principles:** Contrast on multiple axes: Serif+Sans (structure), Geometric+Humanist (personality), Condensed display+Wide body (proportion). Never pair similar-but-not-identical fonts — they create tension without hierarchy. Often one font family in multiple weights > two competing typefaces.

**Web Font Loading:** `font-display: swap` always. Match fallback metrics with `size-adjust`, `ascent-override`, `descent-override`. Max 2–3 font families per project.
**OpenType Polish:** `font-variant-numeric: tabular-nums` for data tables. `diagonal-fractions` for recipes. `all-small-caps` for abbreviations. `font-kerning: normal` explicitly.
**Dark Mode Typography:** Add 0.05–0.1 to line-height for dark bg. Consider reducing font weight by 50 (400→350) for body to compensate perceived weight increase.

### Master Font Index

#### Display / Heading Fonts

| Font | Source | Archetype Affinity |
|---|---|---|
| Clash Display | Fontshare (free) | III-D, III-C, V-B |
| Aeonik | CoType | II-D, III-B, VII-A |
| Migra | Pangram Pangram | I-A, I-D, III-A |
| Satoshi | Fontshare (free) | III, VII-A, VII-B |
| Roobert | Hoefler&Co | III, VI-A, VII-C |
| General Sans | Fontshare (free) | III-C, VII-C, VII-A |
| Cabinet Grotesk | Fontshare (free) | II-D, III-B, VII-D |
| Switzer | Fontshare (free) | III-B, II-D, VII |
| Ranade | Fontshare (free) | III-C, III-D, V-A |
| GT America | Grilli Type | II-A, III, VII-A |
| Canicule Display | Lift Type | V-C, V-D, V-B |
| Geist | Vercel (free) | II-D, VII, VII-A |
| Manrope | Google Fonts (free) | II-F, IV-B, VII-C |
| Mona Sans | Vercel/Mona | III, III-A, III-B |
| Bricolage Grotesque | Google Fonts (free) | III-D, VI-A, IV-C |
| Plus Jakarta Sans | Google Fonts (free) | VII, VII-A (**ON WATCH — new monoculture**) |

#### Body / Prose Fonts

| Font | Source | Archetype Affinity |
|---|---|---|
| Chillax | Fontshare (free) | VII, VII-B, VII-D |
| Switzer | Fontshare (free) | III-B, III, II-D |
| Geist | Vercel (free) | II-D, VII, VII-A |
| Manrope | Google Fonts (free) | II-F, IV-B, VII-C |
| Satoshi | Fontshare (free) | III, VII-A |
| General Sans | Fontshare (free) | III-C, VII, VII-C |
| Source Serif 4 | Google Fonts (free) | I-D, VII-E |

#### Monospace / Data Fonts

| Font | Source | Archetype Affinity |
|---|---|---|
| JetBrains Mono | JetBrains (free) | All Technical, Studio, VII |
| Geist Mono | Vercel (free) | VII, II-D, VII-A |
| Fira Code | Mozilla (free) | II-B, II-C |
| Space Mono | Google Fonts (free) | II-B, II-C, V-A |

#### Condensed / Impact (Use Sparingly)

| Font | Source | Restriction |
|---|---|---|
| Barlow Condensed | Google Fonts (free) | **II-A, II-E ONLY** — see §2.3 |
| Bebas Neue | Google Fonts (free) | Latin-only |
| Impact | System font | Latin-only |
| Monument Extended | Pangram Pangram | Hero headlines only |

#### Reflex Font Ban List

**Google Fonts reflex:** Inter, Roboto, Open Sans, Lato, Montserrat, Poppins, Raleway, Nunito, Rubik, Ubuntu
**Reflex "distinctive":** Syne, Fraunces, Newsreader, Lora, Crimson/Crimson Pro, Cormorant, DM Sans, DM Serif Display, Outfit, Plus Jakarta Sans, Instrument Sans/Serif
**System defaults:** Arial, Helvetica (Helvetica Neue exempt for Swiss), system-ui
**Developer defaults:** IBM Plex Sans/Mono, Space Grotesk (widely overused as "distinctive"), Space Mono

**Space Grotesk:** Assigned to III-D and III-E where architecturally correct. On watch list.

### CSS Animation Keyframe Reference

The model knows CSS. These keyframe names correspond to archetype signatures. Include definitions only when used:

**Universal:** `fade-up` (opacity 0→1, translateY 20px→0), `fade-in`, `scale-in` (0.95→1)
**Academia:** `sepia-reveal` (sepia 0.6→0, contrast 0.95→1)
**Kinetic:** `marquee` (translateX 0→-50%), `marquee-reverse`
**Cyberpunk/Vaporwave:** `glitch` (translate jitter + clip-path), `chromatic` (text-shadow swap)
**Terminal:** `cursor-blink` (opacity 1→0→1 step-end), `typewriter` (width 0→100%)
**Maximalism/Vaporwave:** `neon-pulse` (opacity + box-shadow oscillation)
**Organic/Botanical:** `gentle-float` (translateY oscillation + rotation)
**Industrial:** `led-pulse` (box-shadow green glow oscillation)
**Modern Dark:** `blob-drift-1` / `blob-drift-2` (translate + scale at different phases)
**Claymorphism:** `squish` (scale 1→0.92→1.05→1)
**Art Deco:** `gold-shimmer` (background-position -200%→200%)
**Newsprint:** No animations needed — print doesn't move

**Reduced motion override (MANDATORY in all outputs):**
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## 14. Color Science Reference

### Shadow Taxonomy — Depth Language Reference

| Shadow Type | Mechanism | CSS Pattern | Archetype Territory |
|---|---|---|---|
| **Ring Shadow** | Shadow-as-border | `box-shadow: 0 0 0 1px rgba(0,0,0,0.08)` | Studio, Swiss, Flat |
| **Whisper Shadow** | Near-invisible on light | `box-shadow: 0 1px 3px rgba(0,0,0,0.04)` | Enterprise, Flat, Studio |
| **Frost Border** | Temp-tinted translucent on void | `border: 1px solid rgba(214,235,253,0.19)` on `#000` | Luxury (dark), Studio (dark) |
| **Warm-Tinted Shadow** | Warm base, not neutral | `box-shadow: 0 4px 24px rgba(78,50,23,0.06)` | Heritage, Luxury, Humanist |
| **Luminance Stepping** | Surface bg opacity as elevation | `rgba(255,255,255,0.02)` → `0.04` → `0.05` | Studio (dark), ISO-Tech |
| **Opacity-Only Depth** | All via white-on-dark opacity | `rgba(255,255,255,0.03/0.05/0.08/0.1/0.2)` | Terminal, Neo-Brutalism (dark) |
| **Border-Weight Depth** | Border thickness, not shadow | `1px` → `2px` → `3px` | Terminal, Industrial |
| **Inset Press** | Pressed into surface | `box-shadow: inset 0 0.5px 0 rgba(255,255,255,0.2), inset 0 0 0 0.5px rgba(0,0,0,0.2)` | Claymorphism, Artisan |
| **Multi-Layer Simulation** | Named-role shadow stacks | `0 0 0 1px [border], 0 1px 3px [elev], 0 12px 24px [ambient]` | Studio, Luxury, Enterprise |
| **Hard-Offset Brutalist** | No blur, hard offset | `4px 4px 0 #000` | Neo-Brutalism, Maximalism |
| **Golden Cascading** | Warm-tinted at large offset | 5 cascading layers, 16px–400px | Retro, Luxury (warm) |
| **Dark-Mode Heavy** | High-opacity for visibility | `box-shadow: 0 8px 24px rgba(0,0,0,0.5)` | Studio (dark), Expressive (dark) |

**Selection rule:** Choose ONE per output. Must match archetype root.
**Dark-mode correction:** Shadow opacity 0.3–0.5 minimum on dark. Whisper shadows invisible on dark — replace with luminance-stepping, border-weight, or frost borders.

### Border Radius as Archetype Gate

| Radius | Archetype Territory |
|---|---|
| 0px | Industrial, Bauhaus, Enterprise |
| 2–4px | Enterprise, ISO-Tech, Swiss, Terminal |
| 6–8px | Studio base, Neo-Brutalism (border-weight) |
| 12–16px | Studio (consumer), Flat, Organic |
| 20–28px | Claymorphism, Artisan, consumer Studio |
| 32–56px | Premium consumer, Material |
| 999px (pill) | Flat, Monochrome, consumer apps |

**Binary radius systems** (exactly 2 values) signal engineering discipline.

### Neutral Temperature Axis

| Temperature | Signal | Values | Affinity |
|---|---|---|---|
| **Warm parchment** | Paper, aged, literary | `#f5f4ed`/`#26251e` | Heritage, Humanist Lit, Artisan |
| **Warm cream** | Soft, tactile | `#f7f4ed`/`#faf9f7` | Claymorphism, Organic |
| **Warm olive/sage** | Botanical, editorial | `#fdfdf8`/`#4d4f46` | Botanical, Artisan |
| **Cool gray** | Technical, clinical | `#f0f0f3`/`#171717` | Swiss, Studio, Enterprise |
| **Cool blue-tint** | Trust, fintech | `#f5f5f7` | Enterprise, Material |

**Rule:** Do not mix warm and cool neutrals unless brief calls for "tension."

### OKLCH Color Space

Use OKLCH instead of HSL. Perceptually uniform. `oklch(lightness chroma hue)`. Lightness 0–100%, chroma ~0–0.4, hue 0–360.
**Chroma reduction:** As you move toward white/black, REDUCE chroma. 85% lightness wants ~0.08 chroma.
**Hue:** Brand decision, not default. Don't reflexively pick blue (250) or orange (60).
**Tinted Neutrals:** Add 0.005–0.01 chroma to ALL neutrals tinted toward brand hue. Direction from brand, not formula.
**Alpha smell:** Heavy transparency usually means incomplete palette. Define explicit overlay colors. Exception: frost/glassmorphism signatures.

### Dark Mode Surface Scale

Dark mode ≠ inverted light. Depth from surface lightness, not shadows.
- Base: `oklch(15% [chroma] [hue])`
- Elevated: `oklch(20% ...)`  
- Modal: `oklch(25% ...)`
Same hue/chroma — only vary lightness. Reduce body text weight slightly (350 vs 400).

### Theme Derivation from Context

Light vs dark DERIVED from audience/context. Perp DEX → dark. Hospital portal → light. Wedding checklist → light. Vintage forum at night → dark. No reflexive defaults.

### Per-Archetype Easing Functions

| Node | Easing | Duration | Personality |
|---|---|---|---|
| **I-A Academia** | ease-out | 500–700ms | Dignified, weighty |
| **I-B Art Deco** | ease-out | 400–600ms | Ceremonial |
| **I-C Newsprint** | ease-out | 150ms | Minimal — print doesn't move |
| **I-D Humanist Lit** | ease-in-out | 150–250ms | Gentle |
| **II-A Industrial** | ease-in | 100–200ms | Physical, weighted |
| **II-B Terminal** | steps(1) | Instant | Typewriter |
| **II-C Cyberpunk** | linear / instant | 50–150ms | Glitch-snap |
| **II-D ISO-Tech** | ease-out | 150–200ms | Clinical precision |
| **II-E Apex** | ease-in | 75–150ms | Tactical snap |
| **II-F Alpine** | ease-out | 200–300ms | Controlled |
| **III-A Luxury** | ease-out | 1500–2000ms | Cinematic |
| **III-B Swiss** | ease-out | 100–150ms | Function only |
| **III-C Bauhaus** | linear / instant | 0–100ms | Snaps |
| **III-D Neo-Brutalism** | linear | 50–100ms | Arcade press |
| **III-E Bold Typography** | ease-out | 600–1000ms | Stately paint-in |
| **IV-A Botanical** | ease-out | 500–700ms | Fluid |
| **IV-B Organic** | ease-out | 500–700ms | Breeze |
| **IV-C Sketch** | ease-out | 150–200ms | Light lift |
| **IV-D Claymorphism** | cubic-bezier(0.34, 1.56, 0.64, 1) | 200–300ms | Bouncy squish |
| **V-A Vaporwave** | ease-in-out | 2000–3000ms | Ambient glow |
| **V-B Acidpunk** | linear | 50ms + loop | Persistent glitch |
| **V-C Maximalism** | Various | Fast + slow pulses | Chaotic |
| **V-D Retro** | steps(4) / instant | Jerky | Old CSS/GIF |
| **VI-A Playful Geo** | cubic-bezier(0.34, 1.56, 0.64, 1) | 150–200ms | Bouncy |
| **VI-B Neumorphism** | ease-in-out | 300ms | Shadow depth |
| **✕ Monochrome** | Inherits host | Inherits host | Same, no color |
| **✕ Kinetic** | linear (marquees) + host | 150ms interactions | Motion = material |
| **VII base** | ease-out | 150–200ms | Minimal |
| **VII-A Enterprise** | ease-out | 200–300ms | Professional |
| **VII-B Material** | cubic-bezier(0.2, 0, 0, 1) | 200–300ms | M3 Emphasized |
| **VII-C Flat** | linear | 100–150ms | Instant |
| **VII-D Fluent 2** | cubic-bezier(0.1, 0.9, 0.2, 1) | 200–300ms | Connected |
| **VII-E Editorial** | ease-out | 100–150ms | Minimal |

---

## 15. DESIGN ENGINEERING — Interaction, Animation & Performance

HOW components behave (not WHAT they look like). Applies to ALL archetypes unless overridden in §14.

### 15-A. ANIMATION DECISION FRAMEWORK

#### 1. Should this animate?

| Frequency | Decision |
|---|---|
| 100+ times/day (keyboard, command palette) | **No animation. Ever.** |
| Tens/day (hover, list nav, dropdowns) | **Remove or drastically reduce** (<150ms) |
| Occasional (modals, drawers, toasts) | **Standard** per duration table |
| Rare / first-time (onboarding, explanatory) | **Can add delight** |

**Never animate keyboard-initiated actions.**

#### 2. Duration Reference

| Element | Duration |
|---|---|
| Button press (`:active`) | 100–160ms |
| Tooltips, popovers | 125–200ms |
| Dropdowns, selects, toggles | 150–250ms |
| Modals, drawers | 200–500ms |
| Marketing / explanatory | 500ms–2s |

**Rule: UI animations stay under 300ms.** Perceived performance = actual performance.

#### 3. Easing Decision Tree

```
Entering/exiting? → ease-out
Moving/morphing? → ease-in-out
Hover/color change? → ease
Constant (marquee/progress)? → linear
Default → ease-out
```

**Never `ease-in` for UI appearing on screen.** Archetype easings in §14 take precedence; this is fallback.

#### 4. Custom Easing Curves

```css
--ease-out: cubic-bezier(0.23, 1, 0.32, 1);       /* Universal UI default */
--ease-in-out: cubic-bezier(0.77, 0, 0.175, 1);     /* On-screen movement */
--ease-drawer: cubic-bezier(0.32, 0.72, 0, 1);      /* iOS drawer */
--ease-press: cubic-bezier(0.2, 0, 0, 1);            /* Snap feedback */
```

### 15-B. Spring Animations
Use for drag with momentum, "alive" elements, interruptible gestures. **Apple approach:** `{ type: "spring", duration: 0.5, bounce: 0.2 }`. **Physics:** `{ type: "spring", mass: 1, stiffness: 100, damping: 10 }`. Keep bounce 0.1–0.3. Springs maintain velocity when interrupted.

### 15-C. COMPONENT INTERACTION RULES

These rules apply to ALL interactive components across ALL archetypes.

**Button Press Feedback (MANDATORY):**
Every pressable element MUST have `transform: scale(0.97)` on `:active`. Scale range: 0.95–0.98. Below 0.95 exaggerated, above 0.98 imperceptible.
```css
.button { transition: transform 160ms var(--ease-out); }
.button:active { transform: scale(0.97); }
```

**Never animate from scale(0):** Elements don't materialize from nothing. Start from `scale(0.95)` + `opacity: 0`.
```css
/* FORBIDDEN */ .entering { transform: scale(0); }
/* REQUIRED */  .entering { transform: scale(0.95); opacity: 0; }
```

**Origin-Aware Popovers:** Popovers MUST scale from trigger, not center. Default `transform-origin: center` is wrong for popovers.
```css
.popover { transform-origin: var(--radix-popover-content-transform-origin); }
```
**Exception: Modals** keep `transform-origin: center` (centered in viewport, not anchored to trigger).

**Tooltip Skip-Delay on Subsequent Hovers:** Once one tooltip is open, hovering adjacent tooltips opens them instantly with no animation. Makes whole toolbar feel faster.

**Blur to Mask Imperfect Transitions:** When crossfade feels off despite correct easing, add `filter: blur(2px)` during transition. Bridges visual gap. Keep <20px (expensive in Safari).

**Animate Enter States with @starting-style:**
```css
.toast { opacity: 1; transform: translateY(0); transition: opacity 400ms ease, transform 400ms ease;
  @starting-style { opacity: 0; transform: translateY(100%); } }
```
Replaces `useEffect(() => setMounted(true))` pattern. Fall back to `data-mounted` attribute if needed.

**CSS Transitions Over Keyframes for Interruptible UI:** Transitions can be interrupted and retargeted mid-animation. Keyframes restart from zero. Use transitions for toasts, toggles, panels. Use keyframes for predetermined choreography.

**Touch Hover State Guard:** Touch devices trigger hover on tap. Gate all hover animations:
```css
@media (hover: hover) and (pointer: fine) { .element:hover { transform: scale(1.05); } }
```

**Stagger Animations:** 30–80ms between items. Short = fast interface. Long stagger = slow. Stagger is decorative; never block interaction while stagger plays.

### 15-D. Clip-Path Techniques
`clip-path: inset(top right bottom left)` — powerful rectangular clipping. Core: inset reveal (`inset(0 100% 0 0)` → `inset(0 0 0 0)`). Tabs: duplicate list, clip visible active. Hold-to-destroy: 2s linear press, 200ms release. Image reveals: `inset(0 0 100% 0)` + IntersectionObserver.

### 15-E. Gesture & Drag
**Momentum dismissal:** Calculate velocity (`distance/time`). If >0.11, dismiss regardless. **Damping at boundaries:** More drag = less movement. **Pointer capture:** Once dragging, capture all events. **Multi-touch protection:** Ignore additional touches after initial.

### 15-F. PERFORMANCE RULES

**Only animate transform and opacity** — these skip layout and paint, running on the GPU. Animating `padding`, `margin`, `height`, `width`, `top`, `left` triggers all three rendering steps and causes jank.

**CSS Variables Are Inheritable (Performance Trap):**
Changing a CSS variable on a parent recalculates styles for ALL children. In a drawer with many items, updating `--swipe-amount` on the container causes expensive style recalculation. Update `transform` directly on the element instead.
```js
// FORBIDDEN: triggers recalc on all children
element.style.setProperty('--swipe-amount', `${distance}px`);
// REQUIRED: only affects this element
element.style.transform = `translateY(${distance}px)`;
```

**Framer Motion Hardware Acceleration Caveat:**
Framer Motion shorthand (`x`, `y`, `scale`) NOT hardware-accelerated — uses `requestAnimationFrame` on main thread. Use full `transform` string:
```jsx
// NOT hardware accelerated
<motion.div animate={{ x: 100 }} />
// Hardware accelerated
<motion.div animate={{ transform: "translateX(100px)" }} />
```

**CSS Animations Beat JS Under Load:** CSS animations run off main thread. Under browser load, JS animations (Framer Motion, GSAP) drop frames. CSS remains smooth. Use CSS for predetermined; JS for dynamic/interruptible.

**Use WAAPI for Programmatic CSS Animations:** Web Animations API gives JS control with CSS performance — hardware-accelerated, interruptible, no library:
```js
element.animate(
  [{ clipPath: 'inset(0 0 100% 0)' }, { clipPath: 'inset(0 0 0 0)' }],
  { duration: 1000, fill: 'forwards', easing: 'cubic-bezier(0.77, 0, 0.175, 1)' }
);
```

### 15-I. Eight Interactive States

Every interactive element needs ALL eight states designed:
| State | When | Visual Treatment |
|---|---|---|
| **Default** | At rest | Base styling |
| **Hover** | Pointer over (not touch) | Subtle lift, color shift |
| **Focus** | Keyboard/programmatic | Visible ring (§9-A rules) |
| **Active** | Being pressed | Pressed in, darker — `scale(0.97)` mandatory |
| **Disabled** | Not interactive | Reduced opacity (≤ 0.5), no pointer |
| **Loading** | Processing | Spinner or skeleton — never freeze without feedback |
| **Error** | Invalid state | Red border, icon, message below field with `aria-describedby` |
| **Success** | Completed | Green check, confirmation — brief, not celebratory |

**The common miss:** Designing hover without focus, or vice versa. They're different. Keyboard users never see hover states. Touch users never see either. Every state must work independently.

### 15-J. Input Method Detection
Screen size ≠ input method. Use `@media (pointer: fine)` for mouse, `(pointer: coarse)` for touch, `(hover: hover)` / `(hover: none)` for hover support. **Never rely on hover for functionality.**

### 15-K. Undo > Confirm
Undo better than confirmation. Remove immediately, show undo toast, delete after timeout. Confirmation only for truly irreversible (account deletion), high-cost (payments), or batch.

### 15-L. BESPOKE TECHNIQUES REFERENCE

Every page MUST implement ≥2 techniques (enforced by §0 G-2).

#### L-1. Scroll Experience
- **Lenis smooth scroll** — HIGHEST IMPACT. `lerp:0.08, smoothWheel:true`. CDN: `unpkg.com/lenis@1/dist/lenis.min.js`. Pair with reduced-motion guard.
- **Scroll-triggered reveals** — IntersectionObserver. `opacity:0; translateY(30px)` → `opacity:1; translateY(0)`, `0.8s cubic-bezier(0.16, 1, 0.3, 1)`. `unobserve()` after trigger.
- **Stagger groups** — `transition-delay: calc(var(--i) * 80ms)`.
- **Text reveal on scroll** — Split headline to chars, `display:inline-block`, `translateY(100%) → 0` with sequential delay.
- **GSAP ScrollTrigger** — For parallax, pinning, scrub. CDN: `cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5`.

#### L-2. Background Techniques
- **CSS grain** — Fixed `::after`, monochrome SVG noise (`feTurbulence baseFrequency:0.85 numOctaves:4`), `opacity:0.035`, `pointer-events:none`, `z-index:9999`. Dark: 0.02 or `filter: invert(1)`.
- **Blur orbs / gradient blobs** — `border-radius:50%; filter:blur(80px); opacity:0.15-0.2`. 2-3 at 300-600px behind hero.
- **Gradient mesh** — Multiple overlapping `radial-gradient`. Superior to single linear.
- **Animated gradient** — `@property --a` + `conic-gradient(from var(--a), ...)` + `animation: 8s linear infinite`.

#### L-3. Micro-Interactions
- **Custom cursor** — `mix-blend-mode: difference`, 20px circle. Desktop only. Expand on link hover.
- **Magnetic buttons** — `mousemove` tracking, `translate()` follows within radius, 0.2 multiplier. Spring return.
- **Text scramble** — Chars randomize before resolving. 30ms interval, 1/3 char per tick.

#### L-4. Layout Sophistication
- **Horizontal scroll section** — `overflow-x: auto; scroll-snap-type: x mandatory` + `scroll-snap-align: start`.
- **Sticky sidebar + scroll content** — `grid-template-columns:1fr 1fr; min-height:100vh`. Sticky: `position:sticky; top:100px; height:fit-content`.
- **Overflow compositions** — Negative margins, oversized type bleeding off-screen.
- **Full-bleed typography** — `font-size:clamp(4rem,15vw,14rem); line-height:0.85; margin-left:-2vw; margin-right:-2vw`.

#### L-5. Image & Visual Treatment
- **Image reveal** — Color overlay `::after`, `clip-path:inset(0 0 100% 0)` → `scaleX(0)` on scroll.
- **Parallax layers** — `[data-speed]`, `transform: translateY(scrollY * el.dataset.speed)`. Prefer `transform`.
- **Grayscale to color** — `filter:grayscale(100%); transition:filter .6s ease`. Gains color on hover/scroll.

#### L-6. Page-Level Polish
- **Preloader** — Fixed overlay `z-index:100000`. Exit: `clip-path:inset(0 0 100% 0)` 0.8s. Remove on `window.load` + 600ms timeout.
- **Animated counters** — Count from 0 to `data-target` on viewport entry. 60fps `setInterval`, `toLocaleString()`.
- **Marquee (CORRECT)** — MUST define `@keyframes`. Duplicate content for loop. `translateX(-50%)`.

#### L-7. Motion Design Principles
- **Go-to easing:** `cubic-bezier(0.16, 1, 0.3, 1)` — 80% of animations.
- **Entrance:** `cubic-bezier(0.33, 1, 0.68, 1)` (ease-out-quint)
- **Exit:** `cubic-bezier(0.32, 0, 0.67, 0)` (ease-in-quat)
- **Spring-back:** `cubic-bezier(0.34, 1.56, 0.64, 1)`
- **Linear:** ONLY continuous/looping (marquees, gradients)
- **Stagger:** Sequential `calc(var(--i)*80ms)`. Center-radiate `calc(abs(var(--i)-var(--mid))*60ms)`.
- **Directional logic:** Consistent per page. Mixed = chaos.
- **Performance:** Only `transform` + `opacity`. `clip-path`/`scale` for size. See §15-F.

---

## 16. Component Recipes — Per Archetype

### Bento 2.0 Card Archetypes (from §7)
See §7 A3 for the 5 canonical card archetypes: Intelligent List, Command Input, Live Status, Wide Data Stream, Contextual UI. Rule: ≥3 cards → ≥2 different archetypes.

### Premium Surface Patterns (from §7)
See §7 A2: Double-Bezel (Doppelrand), Liquid Glass Refraction, Eyebrow Tags.

---

## 17. Section Architecture Patterns

### Hero Section Variants

| Category | Archetypes | Key Characteristics |
|---|---|---|
| **Editorial** | Luxury, Professional, Monochrome, Humanist Lit | Full-bleed typography hero, minimal visuals, asymmetric 60/40, no visible CTA in first viewport |
| **Technical Dark** | Cyberpunk, Terminal, Modern Dark, Web3 | Dark void, luminescent elements, data strip, dashboard mockup, multi-layer gradients |
| **Organic/Natural** | Botanical, Organic, Sketch | Earth-tone/cream bg with grain, large serif headline, organic image container, generous whitespace |
| **Retro/Nostalgic** | Retro, Vaporwave, Maximalism | High visual density, Retro: Win95 title bar, Vaporwave: sunset+grid, Maximalism: overlapping elements |
| **Systematic** | Bauhaus, Swiss, Flat, Fluent | Grid-first, typography=decoration, Bauhaus: color blocks, Swiss: flush-left red, Flat: zero depth |
| **Playful/Social** | Claymorphism, Playful Geo, Neo-Brutalism, Sketch | Immediately joyful, character/mascot illustration, prominent CTA, light/cream/pastel bg |

---

## 19. Legal & Technical Deliverable Notes

**Web Font Loading:** All archetype fonts available via Google Fonts unless noted. Use `font-display: swap`.
**Tailwind Config:** Include `tailwind.config` block after CDN with fontFamily (display/body/mono/label) and animation keyframes per archetype. See archetype specs for font names and §14 easing for motion parameters.

---

*Designer XL Preview — Built on Designer by mdev34-lab. 32 art styles. Maximum intent. No compromise.*
