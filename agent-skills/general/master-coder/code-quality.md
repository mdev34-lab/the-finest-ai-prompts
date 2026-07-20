# Code Quality

## Code Review

### Framework
- **Blockers**: bugs, security holes, data loss risks → must fix before merge
- **Suggestions**: readability, maintainability, minor improvements → address or explain why not
- **Nits**: style, naming, whitespace → optional

### Minimal Diffs
- Change only what's needed for the feature/fix
- Refactors in separate commits/PRs
- No drive-by formatting changes
- Delete code aggressively — dead code is the worst code

### 7-Dimension Deep Critique
1. **Architecture**: does the change respect existing boundaries?
2. **Correctness**: does it handle edge cases, nulls, errors?
3. **Performance**: any O(n²) hidden in loops? N+1 queries?
4. **Security**: input validation, SQL injection, XSS, secrets in code?
5. **Type safety**: proper typing, no `any`, no type assertions?
6. **Error handling**: are errors caught, logged, and propagated correctly?
7. **Concurrency**: race conditions, deadlocks, thread safety?

## Defensive Programming

- Validate inputs at boundaries (API endpoints, CLI args, file reads)
- Fail fast: throw early, catch specifically
- Use `Result<T, E>` or error unions instead of exceptions for expected failures
- Assertions for internal invariants (conditions that must always be true)
- Default values for optional parameters

## Naming Conventions

- Variables/functions: `camelCase` (JS/TS) or `snake_case` (Python)
- Classes/types: `PascalCase`
- Constants: `UPPER_SNAKE_CASE` for true constants, `camelCase` for config values
- Boolean variables: `isReady`, `hasPermission`, `shouldRetry`
- Functions: verb-first — `getUserById`, `processPayment`, `validateInput`
- Avoid abbreviations unless universally understood (`id`, `url`, `db` are fine)

## Git Hygiene

- Conventional commits: `feat:`, `fix:`, `refactor:`, `test:`, `docs:`
- One logical change per commit
- Commit message explains WHY, not WHAT (the diff shows what)
- Branch naming: `feat/{ticket}-{slug}`, `fix/{ticket}-{slug}`
