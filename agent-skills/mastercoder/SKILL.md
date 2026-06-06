---
name: mastercoder
description: >
  Use when an implementation plan already exists and the task is to write production code, tests, and validate the build.
  Executes a masterplanner-produced plan step by step. Each function gets a unit test. Each API endpoint gets an integration test.
  Runs full toolchain (lint, typecheck, test, audit) before delivery. Does NOT clarify requirements or create plans — use masterplanner for that.
  Covers Python (uv/ruff/mypy), Node.js (bun/eslint), Go (go toolchain).
  Refuses to deliver without passing tests, ≥90% coverage, zero high vulns, and actionable error handling.
license: CC BY 4.0
metadata:
    author: mdev34-lab
    works_with: Any LLM
    tldr: Production code implementation from a structured plan. Tests, validates, delivers.
---

## Phase 1: Implement

One change at a time. Per change:
1. Write code
2. Run it
3. Verify output matches expectation
4. Fix if broken
5. Proceed

## Phase 2: Test

- Every function → unit test
- Every API endpoint → integration test
- Cover happy path, error cases, edge cases (empty, max, invalid)
- Coverage: ≥90% on business logic

## Phase 3: Validate

- Lint: `ruff check` / `eslint`
- Types: `mypy` / `tsc --noEmit`
- Tests: `pytest` / `bun test`
- Audit: `uv audit` / `bun audit`
- App starts and handles real requests

## Phase 4: Deliver

Report: what was built, how to run it, what tests exist, decisions made.

## Blocking Conditions

### Stop Immediately If
- Build/compile fails
- Type errors exist
- Any test fails
- App doesn't start
- Lint errors
- Security vulnerabilities

### Don't Deliver If
- No tests written (write first)
- Coverage <90% (add tests)
- High/critical vulns (fix/downgrade)
- Missing error handling (add it)

## Standards

### Toolchain

**Python:**
```bash
uv sync && uv run pytest && uv run ruff check && uv audit
```

**Node.js:**
```bash
bun install && bun test && bun x eslint . && bun audit
```

**Go:**
```bash
go build ./... && go test ./... && go vet ./...
```

### Project Structure
```
project_root/
├── [pyproject.toml | package.json | go.mod]
├── .gitignore
├── src/
│   └── [package_name]/
├── tests/
└── .env.example
```

### Execution Model
1. One change at a time, run after each
2. Verify behavior, fix immediately if wrong
3. Move to next

### Defensive Programming
- Validate all input
- Handle errors explicitly — never swallow
- Use types and contracts
- Log with context (request ID, values)

### Security Essentials
- Environment variables for secrets — never hardcode
- Parameterized queries for DB
- Output-encode user input in responses
- Use established auth patterns, never custom
- Scan dependencies for vulns

## Quality Gates
- [ ] All edge cases have explicit tests
- [ ] Every test passes (100%)
- [ ] Coverage ≥90% on business logic
- [ ] Zero high/critical vulns
- [ ] App starts and handles requests
- [ ] No lint errors
- [ ] No type errors
- [ ] Error messages actionable (not stack traces)

## Anti-Patterns

| Instead Of | Do |
|---|---|
| "Should work" | Show actual test output |
| "Foundation is solid" | List what's implemented |
| "Pretty much done" | List remaining items with ETA |
| Generic error handling | Specific handling per error type |
| Assuming input is valid | Always validate |
| Delivering without testing | Test first, then deliver |
| "LGTM" | Actually run and verify |
