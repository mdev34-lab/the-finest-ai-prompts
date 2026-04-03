# Deep Thinking Reference

The phase where you think like a principal engineer. This is not a quick synthesis—it is an exhaustive exploration of the problem space, edge cases, and solution alternatives.

---

## I. Thinking Philosophy

### The Trap of Quick Solutions

> "The first solution you think of is usually wrong, or at least suboptimal."

Quick thinking leads to:
- Missing critical edge cases
- Choosing familiar but inappropriate patterns
- Ignoring security implications
- Building technical debt from day one
- Solving the wrong problem

Deep thinking leads to:
- Comprehensive edge case coverage
- Optimal pattern selection
- Security-first design
- Maintainable architecture
- Solving the actual problem

### Time Investment

| Task Complexity | Thinking Time |
|-----------------|---------------|
| Simple (single function) | 5-10 minutes |
| Moderate (feature/module) | 15-30 minutes |
| Complex (system/service) | 30-60 minutes |
| Critical (infrastructure) | 1+ hours |

**This is not wasted time.** One hour of thinking can save days of debugging.

---

## II. Problem Decomposition

### Step 1: Problem Statement

Write the problem in one sentence. Then write it three more ways.

```
Problem: {one sentence description}

Restatement 1: {same problem, different words}
Restatement 2: {same problem, focus on different aspect}
Restatement 3: {same problem, from user perspective}
```

**Example:**
```
Problem: Users need to upload large files

Restatement 1: The system must accept and store files larger than memory capacity
Restatement 2: File upload must not block the event loop or exhaust resources
Restatement 3: Users should see upload progress and get feedback on success/failure
```

### Step 2: Boundary Identification

Define what's in scope and out of scope.

```markdown
## Boundaries

### In Scope
- {what this solution must handle}

### Out of Scope
- {what this solution will NOT handle}

### Interface Boundaries
- Input: {what comes in}
- Output: {what goes out}
- Side Effects: {what else changes}

### Constraints
- Performance: {latency/throughput requirements}
- Resources: {memory/CPU/storage limits}
- Time: {deadline constraints}
- Technology: {required or prohibited technologies}
```

### Step 3: Stakeholder Analysis

Who cares about this and what do they need?

| Stakeholder | Interest | Success Criteria |
|-------------|----------|------------------|
| End User | {what they want} | {how they measure success} |
| Developer | {what they want} | {how they measure success} |
| Operator | {what they want} | {how they measure success} |
| Security | {what they want} | {how they measure success} |

---

## III. Edge Case Enumeration

### The Edge Case Matrix

For every input and state, enumerate edge cases:

```markdown
## Edge Case Analysis

### Input Edge Cases

| Input | Normal Case | Edge Cases |
|-------|-------------|------------|
| String | Non-empty, valid chars | Empty, null, unicode, emoji, SQL injection, XSS |
| Number | Positive integer | Zero, negative, float, MAX_INT, MIN_INT, NaN, Infinity |
| Array | Non-empty | Empty, single element, very large, nested, circular |
| Object | Valid keys | Empty, null keys, missing required, extra keys, deep nesting |
| File | Small, valid type | Empty, huge, invalid type, corrupted, malware |

### State Edge Cases

| State | Normal | Edge Cases |
|-------|--------|------------|
| Initialization | Clean start | Partial state, corrupted state, upgrade from old version |
| Operation | Happy path | Race conditions, concurrent access, partial failure |
| Termination | Clean shutdown | Force kill, crash, power loss |
| Error | Expected error | Cascading failure, resource exhaustion, timeout |

### Time Edge Cases

| Temporal Aspect | Normal | Edge Cases |
|-----------------|--------|------------|
| Duration | Reasonable time | Zero, very long, timeout boundary |
| Sequence | Correct order | Out of order, duplicate, missing |
| Frequency | Normal rate | Burst, sustained high, idle then spike |
| Timezone | Same zone | DST transition, timezone crossing, leap second |

### Scale Edge Cases

| Scale | Normal | Edge Cases |
|-------|--------|------------|
| Count | Normal volume | Zero, one, millions |
| Size | Typical size | Zero, minimum, maximum, beyond limits |
| Concurrency | Expected load | Single user, peak load, 10x peak |

### Network Edge Cases

| Network | Normal | Edge Cases |
|---------|--------|------------|
| Connection | Stable | Intermittent, slow, packet loss, DNS failure |
| Response | Success | Timeout, partial response, malformed, redirect loop |
| Security | Secure | MITM, certificate errors, protocol downgrade |
```

### Edge Case Generation Checklist

Run through this checklist for every function/module:

```
INPUT VALIDATION
[ ] What if input is null/undefined?
[ ] What if input is wrong type?
[ ] What if input is empty?
[ ] What if input is at max size?
[ ] What if input contains special characters?
[ ] What if input is malformed?

STATE HANDLING
[ ] What if called before initialization?
[ ] What if called after shutdown?
[ ] What if called during error state?
[ ] What if state is corrupted?
[ ] What if state is locked by another process?

CONCURRENCY
[ ] What if called simultaneously?
[ ] What if called while previous call pending?
[ ] What if state changes mid-operation?
[ ] What if lock acquisition fails?

ERROR PROPAGATION
[ ] What if dependency returns error?
[ ] What if dependency times out?
[ ] What if dependency returns unexpected format?
[ ] What if dependency is unavailable?

RESOURCE LIMITS
[ ] What if memory exhausted?
[ ] What if disk full?
[ ] What if CPU at 100%?
[ ] What if network bandwidth saturated?
```

---

## IV. Solution Exploration

### Generate Multiple Approaches

For any non-trivial problem, generate at least 3 approaches:

```markdown
## Solution Alternatives

### Approach 1: {Name}

**Description**: {how it works}

**Pros**:
- {advantage 1}
- {advantage 2}

**Cons**:
- {disadvantage 1}
- {disadvantage 2}

**Complexity**: Low / Medium / High
**Risk Level**: Low / Medium / High
**Time to Implement**: estimate

---

### Approach 2: {Name}

**Description**: {how it works}

**Pros**:
- {advantage 1}

**Cons**:
- {disadvantage 1}

**Complexity**: ...
**Risk Level**: ...
**Time to Implement**: ...

---

### Approach 3: {Name}

{same structure}

---

### Approach 4: {Name} (if needed)

{same structure}
```

### Evaluation Matrix

Compare approaches systematically:

| Criterion | Weight | Approach 1 | Approach 2 | Approach 3 |
|-----------|--------|------------|------------|------------|
| Performance | 3 | 8/10 | 6/10 | 9/10 |
| Maintainability | 3 | 7/10 | 9/10 | 5/10 |
| Security | 4 | 6/10 | 8/10 | 7/10 |
| Complexity | 2 | 9/10 | 7/10 | 4/10 |
| Time to Implement | 2 | 8/10 | 5/10 | 3/10 |
| **Weighted Score** | | **7.3** | **7.1** | **5.9** |

### Decision Documentation

```markdown
## Decision: {Chosen Approach}

**Selected**: Approach {N} - {Name}

**Primary Rationale**:
{Why this approach was chosen}

**Trade-offs Accepted**:
- {What we're giving up}
- {Why it's acceptable}

**Risks and Mitigations**:
| Risk | Mitigation |
|------|------------|
| {risk} | {how we'll handle it} |

**Rejected Alternatives**:
- Approach 2: {why not}
- Approach 3: {why not}
```

---

## V. Self-Doubt and Adversarial Review

### The "What Could Go Wrong" Session

After choosing an approach, actively try to break it:

```markdown
## Adversarial Review

### Attack Surface Analysis

1. **How would this fail?**
   - Scenario: {failure mode}
   - Likelihood: High/Medium/Low
   - Impact: High/Medium/Low
   - Detection: How would we know?
   - Recovery: How would we fix?

2. **How would a malicious actor exploit this?**
   - Attack vector: {how}
   - Prerequisites: {what attacker needs}
   - Impact: {what they could do}
   - Defense: {how to prevent}

3. **How would this behave under extreme load?**
   - Scenario: {load condition}
   - Failure mode: {what breaks}
   - Graceful degradation: {what should happen}

4. **How would this behave with bad data?**
   - Input: {malformed data}
   - Expected: {proper handling}
   - Actual risk: {what might happen}
```

### The "Devil's Advocate" Questions

Answer these honestly:

```
1. "This is over-engineered. What's the simplest thing that could work?"
   Answer: {honest assessment}

2. "You're solving the wrong problem. What's the REAL problem?"
   Answer: {re-examine problem statement}

3. "This will never scale. Where are the bottlenecks?"
   Answer: {identify scaling limits}

4. "This is insecure. Where are the vulnerabilities?"
   Answer: {security audit}

5. "This is unmaintainable. Who will understand this in 6 months?"
   Answer: {complexity assessment}

6. "This doesn't handle {obvious case}. What happens then?"
   Answer: {edge case check}

7. "You're reinventing the wheel. What existing solution have you missed?"
   Answer: {research check}

8. "The requirements are wrong. What do users ACTUALLY need?"
   Answer: {requirements validation}
```

### The "Future Self" Test

```markdown
## Future Self Review

Imagine it's 6 months from now. A critical bug was found in this code.

1. **How hard will it be to diagnose?**
   - Time to understand code: ____
   - Time to identify root cause: ____

2. **How hard will it be to fix?**
   - Risk of breaking something else: High/Medium/Low
   - Test coverage for this area: Good/Poor/None

3. **What would make you curse your past self?**
   - {thing that would be frustrating}

4. **What documentation would you wish existed?**
   - {documentation that would help}
```

---

## VI. Architecture Decision Record (ADR)

For significant decisions, document:

```markdown
# ADR-{number}: {Title}

## Status
Proposed / Accepted / Deprecated / Superseded

## Context
{What is the issue that we're seeing that is motivating this decision?}

## Decision
{What is the change that we're proposing and/or doing?}

## Consequences

### Positive
- {benefit}

### Negative
- {drawback}

### Neutral
- {side effect that's neither good nor bad}

## Alternatives Considered
| Alternative | Why Not Chosen |
|-------------|----------------|
| {option} | {reason} |

## References
- {link to relevant research}
- {link to discussion}
```

---

## VII. Pre-Implementation Checklist

Before writing any code, verify:

```markdown
## Thinking Complete Checklist

### Problem Understanding
[ ] Problem stated clearly in multiple ways
[ ] Boundaries defined (in scope, out of scope)
[ ] Stakeholders identified
[ ] Success criteria defined

### Edge Cases
[ ] Input edge cases enumerated
[ ] State edge cases enumerated
[ ] Time/temporal edge cases considered
[ ] Scale edge cases considered
[ ] Network edge cases considered (if applicable)

### Solution Exploration
[ ] At least 3 approaches generated
[ ] Approaches evaluated against criteria
[ ] Decision documented with rationale
[ ] Trade-offs explicitly accepted

### Adversarial Review
[ ] "What could go wrong" analysis done
[ ] Devil's advocate questions answered
[ ] Future self test passed
[ ] Security attack surface analyzed

### Documentation
[ ] ADR written (for significant decisions)
[ ] Implementation notes documented
[ ] Open questions identified

### Ready to Proceed
[ ] All above checked
[ ] Plan can now be registered with todo tool
```

---

## VIII. Common Thinking Traps

### Cognitive Biases to Avoid

| Bias | Description | Mitigation |
|------|-------------|------------|
| **Anchoring** | Over-relying on first piece of information | Generate multiple options before choosing |
| **Confirmation** | Seeking only supporting evidence | Actively search for disconfirming evidence |
| **Sunk Cost** | Continuing because of past investment | Evaluate from current state forward only |
| **Availability** | Over-weighting recent or memorable examples | Use systematic search, not just memory |
| **Optimism** | Underestimating risks and time | Add explicit pessimism: "What if everything goes wrong?" |
| **Not Invented Here** | Rejecting external solutions | Research before designing |
| **Golden Hammer** | Overusing familiar tools | Consider unfamiliar but appropriate alternatives |
| **Complexity Bias** | Preferring complex solutions | Start with simplest thing that could work |

### Anti-Patterns

| Anti-Pattern | Warning Sign | Correction |
|--------------|--------------|------------|
| Premature Optimization | "This might be slow" without measurement | Measure first, optimize if needed |
| Speculative Generality | "We might need this later" | YAGNI - You Ain't Gonna Need It |
| Analysis Paralysis | Endless planning without progress | Time-box analysis, iterate |
| Bike Shedding | Excessive focus on trivial details | Prioritize by impact |
| Resume Driven Development | Choosing tech for resume, not fit | Evaluate against actual requirements |

---

## IX. Thinking Output Template

Complete this before proceeding to planning:

```markdown
# Thinking Output: {Feature/Component}

**Date**: {date}
**Time Spent**: {thinking duration}

---

## Problem Statement

**Primary**: {one sentence}

**Restatements**:
1. {alternative phrasing}
2. {alternative phrasing}
3. {alternative phrasing}

---

## Boundaries

**In Scope**:
- {item}

**Out of Scope**:
- {item}

**Constraints**:
- {constraint}

---

## Edge Cases Identified

| Category | Edge Case | Handling Strategy |
|----------|-----------|-------------------|
| Input | {case} | {how to handle} |
| State | {case} | {how to handle} |
| Concurrency | {case} | {how to handle} |
| Scale | {case} | {how to handle} |

---

## Solutions Evaluated

### Approach 1: {Name}
- Pros: ...
- Cons: ...
- Score: X/10

### Approach 2: {Name}
- Pros: ...
- Cons: ...
- Score: X/10

### Approach 3: {Name}
- Pros: ...
- Cons: ...
- Score: X/10

---

## Decision

**Chosen**: Approach {N}

**Rationale**: {why}

**Trade-offs**: {what we're accepting}

---

## Adversarial Review Results

**Biggest Risk**: {risk}
**Mitigation**: {plan}

**Most Likely Failure Mode**: {failure}
**Detection**: {how we'll know}

---

## Open Questions

1. {question} - {how to resolve}
2. {question} - {how to resolve}

---

## Ready for Planning: YES / NO

If NO, what's needed: {missing items}
```
