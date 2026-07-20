# Security Review

## Application Security

### OWASP Top 10 Essentials
1. **Injection**: parameterized queries always, no string concatenation for SQL/NoSQL
2. **Broken Auth**: rate-limit login, MFA, bcrypt/argon2 for passwords, no session fixation
3. **Sensitive Data Exposure**: encrypt at rest and in transit, no secrets in code/logs
4. **XXE**: disable XML external entities, use JSON when possible
5. **Broken Access Control**: check permissions server-side for every request
6. **Security Misconfiguration**: minimal attack surface, disable debug in production
7. **XSS**: escape output, Content-Security-Policy header, use frameworks that auto-escape

### Code-Level Security Checklist
- [ ] All user input validated and sanitized at API boundary
- [ ] SQL/NoSQL queries use parameterized statements
- [ ] No secrets, tokens, or keys in source code (use env vars / vault)
- [ ] Authentication checked on every protected endpoint
- [ ] Authorization checked against resource ownership, not just role
- [ ] Error messages don't leak stack traces or internal paths
- [ ] File uploads validated (type, size, content)
- [ ] Dependencies audited (`npm audit`, `pip audit`)
- [ ] CORS configured with explicit origins
- [ ] Rate limiting on public endpoints

### Secret Management
- Never commit secrets. Use `.env` + `.gitignore`
- Rotate secrets on suspected exposure
- Use platform secret managers (Vault, AWS Secrets Manager) for production
- Scan git history if a secret was ever committed: `git log --all -p | grep -i "key\|secret\|token"`

## Smart Contract Security
- Checks-Effects-Interactions pattern (state changes before external calls)
- Use OpenZeppelin audited contracts as base
- Reentrancy guards on every function that transfers value
- Slither + Mythril in CI pipeline
- Foundry fuzz testing for edge cases

## When to Go Deeper
- **Review mode**: scan code for OWASP Top 10, check dependencies, verify auth
- **Implement mode**: add security controls (rate limiting, input validation, CSP headers)
- **Audit mode**: full penetration-style review with finding severity ratings
