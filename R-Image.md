---
name: R-Image
description: Use when generating or editing images to ensure high-quality outputs through structured intent analysis, technical planning, and iterative refinement.
license: CC BY 4.0
metadata:
    author: mdev34-lab
    works_with: LLMs capable of image generation
    tldr: High-quality image generation and editing through structured intent analysis, technical planning, and iterative refinement with completion markers.
---

For any image generation or editing tasks, you **must** **explicitly think out loud in text** what steps you'll take before writing any images; this is mandatory for better quality.

**CRITICAL: You cannot proceed to image generation until ALL thinking steps are completed. Each step must be visibly completed with explicit markers before moving to the next step.**

For any user prompts: follow the below workflow in first person:

1.  **Intent Decoupling:** Determine what the user actually desires by their prompt. (3 paragraphs min, prose)
    *   **EXPLICIT SPECIFICATION REQUIRED:** NEVER use implicit references, celebrity names, or "vibe-based" descriptions. All visual elements must be specified with concrete, observable characteristics. For people: describe facial features, clothing, hair color, body type, posture. For environments: describe architectural elements, lighting conditions, materials, spatial relationships.
    *   **COMPLETION MARKER: [INTENT_DECOUPLING_COMPLETE]**

2.  **Technical Blueprint:** Outline and detail what steps are necessary to reach the desired output. (very dense bullet points, any parent point must have at least 5 children, nesting is allowed)
    *   **NEGATIVE PROMPT EFFICIENCY:** Keep negative prompts concise (max 75 words) and targeted - focus on 10-15 critical terms only. Group similar concepts: "blurry, low resolution, cartoon, painting" instead of exhaustive lists. Handle meta-constraints in positive prompt construction, not negative prompts.
    *   **ANTI-AI-LOOK PROTOCOL:** Prevent artificial appearance by requiring: authentic skin texture with visible pores and micro-imperfections, natural lighting falloff, genuine film grain (not digital filters), realistic material reflections, avoid plastic-smooth surfaces, ban watermarks/signatures/text overlays, ensure anatomical accuracy especially hands and fingers.
    *   **MULTI-LANGUAGE HANDLING:** When multiple languages are required, specify exact text for each language. For non-Latin scripts, provide exact characters and text direction (RTL for Arabic, LTR for others). Add negative prompts: "pseudo-characters, fake kanji, hallucinated text, mixed language characters, wrong alphabet"
    *   **STRUCTURAL INTEGRITY:** For structural elements, ensure physical realism. Cracks must appear as genuine damage, not surface patterns. Elements must have proper depth, shadows, and integration. Add negative prompts: "floating patterns, surface cracks, distorted geometry, unrealistic breaks, fake damage"
    *   **COMPLETION MARKER: [TECHNICAL_BLUEPRINT_COMPLETE]**

3.  **Pre-Flight Check:** Revise/review any final considerations by self-doubting and self-checking. (3 paragraphs min, prose)
    *   **VALIDATION GATE:** You MUST see all three completion markers above before proceeding to Step 4. If any marker is missing, STOP and complete the missing step.
    *   **ANTI-SKIP VERIFICATION:** Before any image generation, verify: [INTENT_DECOUPLING_COMPLETE], [TECHNICAL_BLUEPRINT_COMPLETE], [PREFLIGHT_CHECK_COMPLETE] are all present
    *   **COMPLETION MARKER: [PREFLIGHT_CHECK_COMPLETE]**

4.  **Initial Generation:** Create the first iteration of the image.
    *   **COMPLETION MARKER: [INITIAL_GENERATION_COMPLETE]**

5.  **Recursive Refinement Cycle (The Loop):**
    *   **COMPLETION MARKER: [RECURSIVE_CYCLE_START]**
    *   **Critique:** Analyze the most recent image against the Intent (Step 1). Be harsh. Look for artifacts, composition errors, or prompt bleed.
        *   **COMPLETION MARKER: [CRITIQUE_COMPLETE]**
    *   **Decision Gate:**
        *   **IF** the image is not yet perfect (Score < 95/100):
            *   **TARGETED EDIT PROTOCOL:** Specify ONLY the exact changes needed - do not restate entire previous prompts. Use diff-style specifications: "Change X to Y", "Remove Z", "Add A in location B". Focus on specific elements that need modification, not comprehensive re-descriptions.
            *   Explicitly state what parameters (seed, weights, negative prompt) must change. Correction should be through specifying what you want, not what you don't want.
            *   **COMPLETION MARKER: [PARAMETER_ADJUSTMENT_COMPLETE]**
            *   **GENERATE** the next version of the image.
            *   **ANTI-ABRUPT-END PROTOCOL:** NEVER end your response immediately after generating an image. After any image generation, you MUST continue with the next required step. Explicitly state which step you are moving to after each image generation.
            *   **COMPLETION MARKER: [NEXT_GENERATION_COMPLETE]**
            *   **REPEAT** Step 5 (Critique) with the new image.
        *   **ELSE** (Image is satisfactory):
            *   **COMPLETION MARKER: [DECISION_GATE_SATISFIED]**
            *   Proceed to Step 6.

6.  **Final Report:** Write any user-facing comments about the result **after** the final image is approved, summarizing the iterations taken.
    *   **COMPLETION MARKER: [FINAL_REPORT_COMPLETE]**

**WORKFLOW ENFORCEMENT:**
- Before any refinement iteration, verify: [CRITIQUE_COMPLETE] is present
- Before parameter adjustment, verify: [CRITIQUE_COMPLETE] is present  
- Before final report, verify: [DECISION_GATE_SATISFIED] is present
- If any required marker is missing, you MUST STOP and complete the missing step
- Images are NOT the final step - they are always followed by analysis or reporting

Reasoning should always be made before initial image generation per user request, not after.