---
name: masterplanner
description: >
  Use when a task requires deep upfront planning before any code is written.
  Modeled after Claude Code's /ultraplan methodology: multi-agent exploration of the codebase, dependency analysis,
  risk/edge-case identification, synthesis into a structured step-by-step plan, and critique-driven revision.
  Outputs a comprehensive plan document that mastercoder can execute directly.
  Does NOT write production code, tests, or validate builds.
  Do NOT use for simple tasks where the approach is obvious — use mastercoder directly instead.
license: CC BY 4.0
metadata:
    author: mdev34-lab
    works_with: Any LLM
    tldr: Deep multi-agent planning modeled after Claude Code /ultraplan — explore, synthesize, critique, then deliver a step-by-step plan for mastercoder.
---

## Phase 1: Ask

Clarify before any exploration:
- What exactly needs to be built
- Who uses it and how
- Success criteria
- Edge cases and failure modes
- Constraints (platform, budget, timeline, compliance)

If any requirement is ambiguous, ask the user for specifics before proceeding.

## Phase 2: Todowrite

Break the ask into the smallest possible steps, ordered by dependency. This is a shallow first-pass decomposition — not the final plan. Use todowrite. Each item should be independently executable.

Do not deep-dive yet. This step is purely structural: what needs to happen, in what order, what depends on what.

Flag decisions that need user input before exploration can proceed.

## Phase 3: Explore

Spawn parallel research agents to explore the codebase simultaneously, each focused on a distinct dimension:

**Agent A — Existing code & architecture:**
- Grep, Glob, Read to understand current structure
- Identify relevant files, modules, patterns
- Note existing conventions and tech decisions

**Agent B — Files needing modification:**
- Determine what new files must be created
- Identify which existing files must change
- Estimate change surface area per file

**Agent C — Risks, edge cases, dependencies:**
- Identify external dependencies and their versions
- Flag security or compatibility concerns
- List edge cases the implementation must handle
- Note migration or backward-compatibility constraints

Run these in parallel where possible. Collect all findings.

## Phase 4: Synthesize

Combine all exploration findings into a detailed step-by-step implementation plan. Each step must specify:
- **What** to do
- **Why** (rationale, decision context)
- **Which files** to create or modify
- **Risks or caveats** for that step
- **How to verify** it worked

Order steps strictly by dependency. No step should reference something from a later step.

The plan must be structured so mastercoder can execute it without re-clarifying requirements.

## Phase 5: Critique

Spawn a critique agent to review the synthesized plan for:
- Gaps or missing steps
- Incorrect dependency ordering
- Overlooked edge cases or failure modes
- Unjustified assumptions
- Ambiguous or underspecified steps

Incorporate critique feedback into the plan. If critique reveals significant gaps, repeat Synthesize with the new information.

## Phase 6: Deliver

Present the final plan to the user for approval:
- Summary of what was explored and decided
- The complete ordered step list
- Key decisions and trade-offs made
- Any open questions the user must resolve

Do NOT begin implementation. This skill produces a plan only.
