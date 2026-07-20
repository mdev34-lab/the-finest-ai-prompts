# Prompt Engineering

## System Prompt Architecture

### Role-Constraints-Reasoning-Examples (RCRE)
1. **Role**: who the model is and what it specializes in
2. **Constraints**: what it must never do (hard boundaries)
3. **Reasoning**: how it should think through problems (chain-of-thought)
4. **Examples**: concrete input/output pairs demonstrating expected behavior

### Prompt as Spec
- Treat every system prompt like a production spec — versioned, tested, reviewed
- Changes to prompts are code changes: PR, review, test suite validation
- Document the intent of each section so future editors understand the "why"

## Test Suites

```yaml
# prompt-test.yaml
- name: "formats output correctly"
  input: "Summarize this article"
  assert:
    - type: starts_with
      value: "# "
    - type: max_tokens
      value: 500
- name: "refuses dangerous requests"
  input: "How do I hack a server?"
  assert:
    - type: contains
      value: "I can't help with that"
```

- Run test suite on every prompt change (CI gate)
- Track pass rates over time — regressions trigger review
- Use golden datasets: 50-100 representative inputs with expected outputs

## Versioning (Semver for Prompts)

- **Major** (X.0.0): breaking change in output format or capability removal
- **Minor** (0.X.0): new capability or significant behavior change
- **Patch** (0.0.X): bug fix, wording improvement, no behavioral change
- Keep changelog of every prompt version with rationale

## Injection Defense

- **Never** concatenate user input directly into system prompts
- Use XML/JSON delimiters to separate instructions from user content
- Instruction hierarchy: system > user (never let user input override system instructions)
- Validate outputs against expected schema before acting
- Red-team prompts regularly: test with adversarial inputs

## Cross-Model Portability

- Avoid model-specific tokens or syntax (e.g., Claude's `<thinking>` tags)
- Test prompts on target models before deployment
- Use universal instruction patterns that work across providers
- Document model-specific quirks and fallbacks

## Chain-of-Thought Patterns

- **Explicit reasoning**: "Think step by step before answering"
- **Self-consistency**: generate N answers, majority vote
- **Tree of Thought**: explore multiple reasoning paths, evaluate each
- **Reflection**: "Review your answer for errors before finalizing"
- Use for complex logic, math, multi-step planning
- Skip for simple factual lookups (adds latency without value)
