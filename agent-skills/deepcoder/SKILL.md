---
name: deepcoder
description: Protocol for thorough technical analysis and implementation. Use for complex implementations from scratch or major reworks.
license: CC BY 4.0
metadata:
    author: mdev34-lab
    works_with: Vibe coding agents
    tldr: Technical analysis protocol with research, codebase auditing, and structured reasoning for system implementations.
---

# DeepCoder Protocol

**Core Directive:** Do not propose a solution until you have done thorough research—identify variables, risks, and architectural alternatives.

---

### I. Research Phase

1. **Web Research:**
   - Perform at least **15 web searches** for any implementation request.
   - **Search 1:** Official documentation and API signatures.
   - **Search 2:** Common issues, GitHub issues, and StackOverflow edge cases.
   - **Search 3:** Comparative analysis (e.g., "Library A vs Library B for [Task]").
   - **Search 4:** Performance benchmarks and known issues for the proposed pattern.
2. **Synthesis:**
   - Compare findings. If one source suggests Pattern X, but another shows Pattern X fails in production, resolve this conflict before proceeding.

---

### II. Workspace Audit

1. **Multi-Pass File Analysis:**
   - **Pass 1 (Structure):** Map the directory tree and identify who owns the logic you're touching.
   - **Pass 2 (Context):** Read the target file and all files that import it or are imported by it.
   - **Pass 3 (Logic):** Identify unused code or code that lacks error handling that your change might interact with.
2. **Recursive Search:**
   - Use `grep` to find every string, variable, or pattern related to the task.
   - If you find a pattern used elsewhere, investigate why that pattern was chosen.

---

### III. Reasoning Phase

1. **Thesis, Antithesis, Synthesis:**
   - Propose a logical path (Thesis).
   - Critique it. Find 3 ways it could fail or 3 reasons it is sub-optimal (Antithesis).
   - Formulate a refined path that addresses all critiques (Synthesis).
2. **Mental Step-Through:**
   - Simulate the execution of the logic, line-by-line.
   - Identify the critical path—the code that carries the most risk.
3. **Mathematical & Logical Proofs:**
   - If the task involves algorithms or data transformation, derive the logic from first principles.

---

### IV. Technical Specification (SPEC.md)

Generate a `SPEC.md` file with:

#### 1. Research Summary
- Results of the web searches.
- Summary of best practices vs current project state.

#### 2. Findings
- **Data Flow Map:** Where data originates and where it ends.
- **Dependency Audit:** Version checks and compatibility confirmations.

#### 3. Implementation Plan
- **Component Breakdown:** Detail on every class, function, and variable to be created/modified.
- **Data Schemas:** TypeScript interfaces or JSON structures.
- **Logic Flowcharts (Mermaid):** Visual representation of the new logic.

#### 4. Failure Scenarios
- A list of at least 10 "What-If" scenarios (e.g., "What if the user disconnects mid-save?", "What if the API returns a 429?").
- Mitigation strategy for each.

#### 5. Verification Plan
- Plan for unit, integration, and E2E testing.
- Specific success criteria (e.g., "Render time must remain below 16ms").

---

### V. Gate (HALT)

**Do not write code until:**
1. The `SPEC.md` is committed and reviewed.
2. You ask the user: *"The specification is ready. Do you want to proceed with implementation or should I investigate further?"*

---

### VI. Summary

| Feature | Approach |
| :--- | :--- |
| **Thinking Budget** | Thorough / Exhaustive |
| **Web Research** | Searches required |
| **Self-Correction** | Thesis → Antithesis → Synthesis |
| **Investigation** | System-wide audit |
| **Success Metric** | Risk reduction |
| **Deliverable** | Technical Specification (SPEC.md) |
