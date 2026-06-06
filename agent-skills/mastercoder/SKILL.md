---
name: mastercoder
description: >
  Use when an implementation plan already exists and the task is to write production code, tests, and validate the build.
  Executes a masterplanner-produced plan step by step. Every implementation is delivered with: clean Git history on a feature branch,
  complete production-grade project structure (CI/CD, Dockerfile, Makefile, docs, lint/type/test tooling),
  unit + integration tests at ≥90% coverage, and zero high-severity vulnerabilities.
  Covers Python (uv/ruff/mypy), Node.js (bun/eslint), Go (go toolchain).
  NEVER works on master/main — always creates a feature branch. Initializes Git repo if none exists.
  Refuses to deliver without passing tests, full toolchain validation, and professional structure.
  Does NOT clarify requirements or create plans — use masterplanner for that.
license: CC BY 4.0
metadata:
    author: mdev34-lab
    works_with: Any LLM
    tldr: Production implementation on a feature branch with complete project structure, CI/CD, tests, and toolchain validation.
---

## Phase 1: Git Setup

Before any code:

1. If no `.git` directory exists, run `git init` and make an initial commit with `.gitignore`, `README.md`, and `LICENSE`.
2. Determine the default branch name (`master` or `main`).
3. Create a feature branch from the default branch. Branch name must describe the work (e.g. `feat/user-auth`, `fix/payment-timeout`, `refactor/api-routes`).
4. Never commit directly to `master` or `main`. Every commit goes on the feature branch.

## Phase 2: Scaffold

Lay out the complete project structure before writing any business logic. Every project gets:

**All projects:**
- `.gitignore` — comprehensive for the stack (include OS files, IDE dirs, secrets, build artifacts)
- `README.md` — project name, description, prerequisites, quick start, test command, project structure overview
- `LICENSE` — MIT unless otherwise specified
- `.env.example` — all env vars with dummy values and documentation
- `Makefile` or `Taskfile.yml` — common commands: `setup`, `test`, `lint`, `typecheck`, `clean`, `build`
- `.github/workflows/ci.yml` — GitHub Actions: runs on push/PR to all branches, installs deps, lints, typechecks, tests, builds
- `.github/dependabot.yml` — weekly dependency updates
- `.editorconfig` — indent style, charset, end-of-line normalization

**Python:**
```
project_root/
├── pyproject.toml          # deps, tool config (ruff, mypy, pytest)
├── src/
│   └── [package_name]/
│       ├── __init__.py
│       ├── main.py
│       ├── config.py
│       ├── models/
│       ├── routes/
│       ├── services/
│       └── middleware/
├── tests/
│   ├── __init__.py
│   ├── conftest.py
│   ├── unit/
│   └── integration/
├── scripts/
│   └── seed.py
├── Dockerfile
├── docker-compose.yml      # app + db + cache if applicable
└── docs/
    └── api.md
```

**Node.js:**
```
project_root/
├── package.json
├── tsconfig.json
├── .eslintrc.cjs
├── .prettierrc
├── src/
│   ├── index.ts
│   ├── config/
│   ├── routes/
│   ├── middleware/
│   ├── services/
│   ├── models/
│   └── types/
├── tests/
│   ├── unit/
│   └── integration/
├── scripts/
├── Dockerfile
├── docker-compose.yml
└── docs/
    └── api.md
```

**Go:**
```
project_root/
├── go.mod
├── go.sum
├── cmd/
│   └── server/
│       └── main.go
├── internal/
│   ├── config/
│   ├── handler/
│   ├── middleware/
│   ├── model/
│   ├── repository/
│   └── service/
├── pkg/
│   └── [shared_lib]/
├── tests/
│   ├── integration/
│   └── e2e/
├── Dockerfile
├── docker-compose.yml
├── .golangci.yml
└── docs/
    └── api.md
```

## Phase 3: Implement

One change at a time. Per change:
1. Write code
2. Run it
3. Verify output matches expectation
4. Fix if broken
5. Commit to feature branch with a conventional commit message (`feat:`, `fix:`, `refactor:`, `test:`, `docs:`, `chore:`)
6. Proceed

## Phase 4: Test

- Every function → unit test
- Every API endpoint → integration test
- Cover happy path, error cases, edge cases (empty, max, invalid, auth failures)
- Tests must be independent (no shared state, no order dependencies)
- Use factories or fixtures, never bare mocks
- Coverage: ≥90% on business logic

## Phase 5: Validate

- Lint: `ruff check` / `eslint` / `golangci-lint`
- Types: `mypy` / `tsc --noEmit` / `go vet`
- Tests: `pytest` / `bun test` / `go test`
- Audit: `uv audit` / `bun audit` / `go mod verify`
- Build: `pip install -e .` / `bun run build` / `go build`
- Docker build: `docker build .` succeeds
- App starts and handles real requests

## Phase 6: Deliver

1. Push feature branch to origin.
2. Report to user:
   - What was built and how the project is organized
   - How to run it (setup → start → test)
   - Branch name and CI status
   - Key decisions and trade-offs made
   - Any open questions
3. Ask: "Approve this branch for merge?"

## Blocking Conditions

### Stop Immediately If
- Build/compile fails
- Type errors exist
- Any test fails
- App doesn't start
- Lint errors
- Security vulnerabilities
- Commit on master/main (revert and branch)

### Don't Deliver If
- No `.git` or no feature branch
- No tests written (write first)
- Coverage <90% (add tests)
- High/critical vulns (fix/downgrade)
- Missing error handling (add it)
- No CI config committed
- No `.env.example` committed

## Standards

### Execution Model
1. One change at a time, run after each
2. Verify behavior, fix immediately if wrong
3. Conventional commit after each working step
4. Never commit broken or untested code

### Defensive Programming
- Validate all input — shape, type, bounds, format
- Handle errors explicitly — never swallow
- Use types and contracts everywhere
- Log with context (request ID, values, decision) — never log "error"
- Return structured error responses, not bare status codes

### Security Essentials
- Environment variables for secrets — never hardcode
- Parameterized queries for all DB operations
- Output-encode user input in HTML/JSON responses
- Use established auth patterns, never custom crypto
- Scan dependencies for vulns on every change
- No secrets in commit history (use `.env` + `.gitignore`)

### Git Hygiene
- Feature branch per task
- Conventional commits: `feat:`, `fix:`, `refactor:`, `test:`, `docs:`, `chore:`
- Small, focused commits — not monolithic dumps
- Never amend or force-push shared branches
- Never commit generated files, lockfiles (except package lockfiles), or secrets

## Quality Gates
- [ ] Git repo initialized with feature branch (not master/main)
- [ ] Complete project structure including CI/CD, Docker, docs
- [ ] `.env.example` with all documented env vars
- [ ] All edge cases have explicit tests
- [ ] Every test passes (100%)
- [ ] Coverage ≥90% on business logic
- [ ] Zero high/critical vulns
- [ ] App starts and handles requests
- [ ] No lint errors
- [ ] No type errors
- [ ] Error messages actionable (not stack traces)
- [ ] Conventional commit history on feature branch
- [ ] CI config validates on push

## Anti-Patterns

| Instead Of | Do |
|---|---|
| "Should work" | Show actual test output |
| "Foundation is solid" | Show the project tree |
| "Pretty much done" | List remaining items with ETA |
| Generic error handling | Specific handling per error type |
| Assuming input is valid | Always validate |
| Delivering without testing | Test first, then deliver |
| "LGTM" | Actually run and verify |
| Working on master/main | Create a feature branch |
| No .gitignore | Add one before first commit |
| Monolithic commit | Small conventional commits |
