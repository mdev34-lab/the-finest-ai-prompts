# QA Checklists Reference

The grand finale. Before any delivery, every checkbox must pass. No exceptions.

---

## I. QA Philosophy

### The Gate

```
┌─────────────────────────────────────────────────────────────┐
│                     IMPLEMENTATION                           │
│                    (Code Complete)                           │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                      QA GATE                                 │
│                                                              │
│   ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐          │
│   │Functional│ │Testing  │ │Security │ │Delivery │          │
│   │ Checklist│ │Checklist│ │Checklist│ │Checklist│          │
│   └─────────┘ └─────────┘ └─────────┘ └─────────┘          │
│                                                              │
│              ALL CHECKBOXES MUST BE ✓                        │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                      DELIVERY                                │
│                   (Ready for User)                           │
└─────────────────────────────────────────────────────────────┘
```

### The Rule

> **If any checkbox is unchecked, delivery is blocked.**
>
> No "I'll fix it later."
> No "It's probably fine."
> No "That's a known issue."

---

## II. Functional Checklist

### Core Functionality

```
FEATURE VERIFICATION

[ ] Feature implements the stated requirement
[ ] Feature works end-to-end (complete user journey)
[ ] Feature handles the happy path correctly
[ ] Feature handles error paths correctly
[ ] Feature handles edge cases (empty, null, max, min)
[ ] Feature is accessible (if UI)
[ ] Feature is responsive (if UI)
[ ] Feature works in all required browsers/environments
```

### Integration Points

```
INTEGRATION VERIFICATION

[ ] Database operations work (CRUD)
[ ] API endpoints respond correctly
[ ] External service calls succeed (or fail gracefully)
[ ] Authentication flow works
[ ] Authorization checks work
[ ] File operations work (upload, download, read, write)
[ ] Email/notification sending works
[ ] Background jobs execute correctly
```

### Data Integrity

```
DATA VERIFICATION

[ ] Data persists correctly
[ ] Data retrieves correctly
[ ] Data updates correctly
[ ] Data deletes correctly
[ ] Relationships maintained correctly
[ ] Transactions rollback on failure
[ ] No data corruption under concurrent access
```

### Performance

```
PERFORMANCE VERIFICATION

[ ] Response time within acceptable limits (< 200ms for APIs)
[ ] No N+1 queries
[ ] No memory leaks (test with repeated operations)
[ ] Handles expected load
[ ] Large datasets handled gracefully
[ ] Pagination works for large result sets
```

---

## III. Testing Checklist

### Test Coverage

```
COVERAGE VERIFICATION

[ ] Unit tests written for all business logic
[ ] Unit tests written for utility functions
[ ] Integration tests written for API endpoints
[ ] Integration tests written for database operations
[ ] Edge case tests written
[ ] Error path tests written
[ ] E2E tests written for critical user journeys

COVERAGE METRICS

[ ] Business logic coverage ≥ 90%
[ ] API endpoint coverage = 100%
[ ] Error handler coverage = 100%
[ ] Overall coverage ≥ 80%
```

### Test Quality

```
TEST QUALITY VERIFICATION

[ ] Tests have clear, descriptive names
[ ] Tests follow AAA pattern (Arrange, Act, Assert)
[ ] Tests are isolated (no interdependencies)
[ ] Tests are deterministic (no flakiness)
[ ] Tests use appropriate mocks/stubs
[ ] Tests clean up after themselves
[ ] Tests run in reasonable time (< 5 minutes total)
```

### Test Execution

```
TEST EXECUTION VERIFICATION

[ ] All tests pass (0 failures)
[ ] No skipped tests without documented reason
[ ] No commented-out tests
[ ] Tests pass on clean environment
[ ] Tests pass after fresh dependency install
```

### Static Analysis

```
STATIC ANALYSIS VERIFICATION

Python:
[ ] ruff check passes (0 errors)
[ ] ruff format --check passes
[ ] mypy passes (if type checking)

JavaScript/TypeScript:
[ ] eslint passes (0 errors, 0 warnings)
[ ] prettier --check passes
[ ] tsc passes (TypeScript)

General:
[ ] No console.log/print statements in production code
[ ] No TODO/FIXME without tracking issue
[ ] No commented-out code
```

---

## IV. Security Checklist

### Input Handling

```
INPUT SECURITY

[ ] All user inputs validated
[ ] All user inputs sanitized
[ ] File uploads validated (type, size, content)
[ ] API responses validated
[ ] No SQL injection vulnerabilities
[ ] No XSS vulnerabilities
[ ] No command injection vulnerabilities
[ ] No path traversal vulnerabilities
```

### Authentication & Authorization

```
AUTH SECURITY

[ ] Passwords hashed (not encrypted or plain)
[ ] Session tokens cryptographically random
[ ] Sessions expire appropriately
[ ] Rate limiting on auth endpoints
[ ] Account lockout after failed attempts
[ ] Every protected endpoint checks authorization
[ ] No IDOR vulnerabilities
[ ] No privilege escalation paths
```

### Data Protection

```
DATA SECURITY

[ ] Sensitive data encrypted at rest
[ ] All connections use HTTPS
[ ] PII masked in logs
[ ] PII not exposed in API responses
[ ] Secrets in environment variables (not code)
[ ] .gitignore protects sensitive files
[ ] No secrets in git history
```

### Dependency Security

```
DEPENDENCY SECURITY

[ ] Dependency audit run (npm audit / uv audit)
[ ] No high/critical vulnerabilities
[ ] All dependencies pinned with lock files
[ ] No unnecessary dependencies
[ ] All dependencies actively maintained
```

### Security Headers (Web Apps)

```
SECURITY HEADERS

[ ] X-Frame-Options set
[ ] X-Content-Type-Options set
[ ] Strict-Transport-Security set
[ ] Content-Security-Policy set
[ ] Referrer-Policy set
[ ] Permissions-Policy set
```

---

## V. Code Quality Checklist

### Code Structure

```
STRUCTURE VERIFICATION

[ ] Follows canonical project structure
[ ] Files organized logically
[ ] Functions have single responsibility
[ ] No deeply nested code (> 3 levels)
[ ] No duplicated code
[ ] No dead code
[ ] No overly long files (> 500 lines)
[ ] No overly long functions (> 50 lines)
```

### Code Documentation

```
DOCUMENTATION VERIFICATION

[ ] README exists and is current
[ ] README has setup instructions
[ ] README has usage examples
[ ] Public functions have docstrings/JSDoc
[ ] Complex logic has inline comments
[ ] API documented (if applicable)
[ ] Environment variables documented
```

### Error Handling

```
ERROR HANDLING VERIFICATION

[ ] All external calls have error handling
[ ] All error states have user-friendly messages
[ ] Errors are logged with context
[ ] No silent failures
[ ] No empty catch blocks
[ ] Errors don't expose sensitive information
```

### Type Safety

```
TYPE SAFETY VERIFICATION

Python:
[ ] All function parameters have type hints
[ ] All return types have type hints
[ ] Optional types explicitly marked
[ ] mypy passes with strict settings

TypeScript:
[ ] strict mode enabled
[ ] No 'any' types (use 'unknown' if needed)
[ ] All function parameters typed
[ ] All return types explicit
```

---

## VI. Environment Checklist

### Local Environment

```
LOCAL VERIFICATION

[ ] Application starts without errors
[ ] All dependencies install correctly
[ ] Database migrations run successfully
[ ] Seed data loads correctly (if applicable)
[ ] Hot reload works (if applicable)
[ ] Debug mode works
```

### Configuration

```
CONFIGURATION VERIFICATION

[ ] Environment variables documented
[ ] .env.example exists with all required vars
[ ] Default values sensible for development
[ ] Production values different from development
[ ] Configuration validated on startup
[ ] Missing configuration fails fast with clear error
```

### Git Hygiene

```
GIT VERIFICATION

[ ] Working directory clean (all changes committed)
[ ] Commit messages descriptive
[ ] No secrets in commits
[ ] No large binary files committed
[ ] No IDE-specific files committed
[ ] .gitignore properly configured
```

---

## VII. Documentation Checklist

### Technical Documentation

```
TECHNICAL DOCS VERIFICATION

[ ] README has project description
[ ] README has prerequisites
[ ] README has installation steps
[ ] README has usage instructions
[ ] README has configuration guide
[ ] Architecture documented (for complex systems)
[ ] API documented (for services)
[ ] Database schema documented (if applicable)
```

### User Documentation

```
USER DOCS VERIFICATION (if applicable)

[ ] User guide exists
[ ] Screenshots/visuals current
[ ] Error messages reference documentation
[ ] FAQ addresses common issues
```

### Changelog

```
CHANGELOG VERIFICATION

[ ] CHANGELOG.md exists
[ ] All changes documented
[ ] Breaking changes highlighted
[ ] Version number appropriate
```

---

## VIII. Pre-Delivery Checklist

### Final Verification

```
FINAL VERIFICATION

[ ] All previous checklists passed
[ ] Manual testing completed
[ ] Tested on clean environment
[ ] Tested with realistic data
[ ] Tested with edge case data
[ ] Performance acceptable
[ ] No console errors (browser)
[ ] No warnings in logs
```

### Delivery Package

```
DELIVERY PACKAGE VERIFICATION

[ ] All files included
[ ] No temporary files included
[ ] No development-only files included
[ ] Dependencies locked
[ ] Version tagged (if applicable)
[ ] Release notes prepared (if applicable)
```

### Sign-Off

```
DELIVERY SIGN-OFF

Feature: {feature name}
Date: {date}
Developer: {name}

Checklists Completed:
[ ] Functional Checklist
[ ] Testing Checklist
[ ] Security Checklist
[ ] Code Quality Checklist
[ ] Environment Checklist
[ ] Documentation Checklist

Issues Found: {list or "None"}
Known Limitations: {list or "None"}

Ready for Delivery: YES / NO
```

---

## IX. QA Report Template

Complete this for every delivery:

```markdown
# QA Report: {Feature/Component}

**Date**: {YYYY-MM-DD}
**Version/Branch**: {version or branch name}
**Developer**: {name}

---

## Summary

{1-2 sentence summary of what was implemented and its status}

---

## Checklist Results

### Functional Checklist
- Status: ✅ PASS / ❌ FAIL
- Issues: {list or "None"}

### Testing Checklist
- Status: ✅ PASS / ❌ FAIL
- Coverage: {X}%
- Issues: {list or "None"}

### Security Checklist
- Status: ✅ PASS / ❌ FAIL
- Issues: {list or "None"}

### Code Quality Checklist
- Status: ✅ PASS / ❌ FAIL
- Issues: {list or "None"}

### Environment Checklist
- Status: ✅ PASS / ❌ FAIL
- Issues: {list or "None"}

### Documentation Checklist
- Status: ✅ PASS / ❌ FAIL
- Issues: {list or "None"}

---

## Test Results

| Suite | Tests | Passed | Failed | Skipped |
|-------|-------|--------|--------|---------|
| Unit  | {n}   | {n}    | {n}    | {n}     |
| Integration | {n} | {n}  | {n}    | {n}     |
| E2E   | {n}   | {n}    | {n}    | {n}     |

**Coverage**: {X}%

---

## Manual Testing Performed

| Test Case | Result | Notes |
|-----------|--------|-------|
| {case 1} | ✅ Pass | {notes} |
| {case 2} | ✅ Pass | {notes} |

---

## Issues Found

| Issue | Severity | Status |
|-------|----------|--------|
| {issue} | High/Med/Low | Fixed / Open |

---

## Known Limitations

1. {limitation}
2. {limitation}

---

## Files Changed

```
{list of files modified/added/deleted}
```

---

## Delivery Decision

[ ] **APPROVED FOR DELIVERY** - All checklists pass, no blocking issues
[ ] **CONDITIONAL APPROVAL** - Minor issues acceptable, documented above
[ ] **BLOCKED** - Blocking issues must be resolved

**Reviewer Signature**: {name}
**Date**: {date}
```

---

## X. Quick Reference Cards

### Pre-Commit Quick Check

```
□ Tests pass
□ Linter passes
□ No secrets in code
□ Commit message descriptive
```

### Pre-Push Quick Check

```
□ All tests pass (full suite)
□ Coverage meets threshold
□ No new warnings
□ Documentation updated
```

### Pre-Delivery Quick Check

```
□ All checklists complete
□ Manual testing done
□ QA report written
□ Known issues documented
```

---

## XI. Common Blockers

### Issues That Block Delivery

| Blocker | Required Action |
|---------|-----------------|
| Failing tests | Fix tests before delivery |
| Low coverage | Write additional tests |
| Security vulnerability | Fix or document accepted risk |
| Missing documentation | Write documentation |
| Broken functionality | Fix before delivery |
| Performance issue | Fix or document accepted limitation |
| Secrets in code | Remove and rotate secrets |

### Issues That Don't Block Delivery

| Non-Blocker | Documentation Required |
|-------------|------------------------|
| Known minor bug | Document in known issues |
| Missing nice-to-have feature | Document in backlog |
| Non-critical tech debt | Document for future refactoring |
| Minor performance optimization | Document for future optimization |

---

## XII. The Final Gate

Before you say "I'm done":

```
┌─────────────────────────────────────────────────────────────┐
│                                                              │
│   STOP. READ EVERY CHECKBOX BELOW. VERIFY EACH ONE.         │
│                                                              │
│   [ ] Did I research thoroughly?                             │
│   [ ] Did I think through all edge cases?                   │
│   [ ] Did I implement the complete solution?                │
│   [ ] Did I test until I proved it works?                   │
│   [ ] Did I secure against all known attacks?               │
│   [ ] Did I document for future developers?                 │
│   [ ] Did I verify manually, not just automated?            │
│                                                              │
│   If ANY checkbox is unchecked, you are NOT done.           │
│                                                              │
│   ─────────────────────────────────────────────────────────  │
│                                                              │
│   "It works on my machine" is not delivery.                 │
│   "The tests pass" is not delivery.                         │
│   "It's mostly done" is not delivery.                       │
│                                                              │
│   DELIVERY = Working + Tested + Secure + Documented          │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```
