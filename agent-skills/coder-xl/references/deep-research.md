# Deep Research Reference

Comprehensive guide for acquiring knowledge before implementation. Research is not optional—it is the foundation of correct implementation.

---

## I. Research Philosophy

### Why Research First

> "Weeks of coding can save you hours of planning." — Unknown

Wrong implementations come from:
- Misunderstanding the API
- Missing edge cases documented in issues
- Using deprecated patterns
- Ignoring security advisories
- Reinventing solved problems poorly

Right implementations come from:
- Understanding the full API surface
- Learning from others' mistakes
- Following current best practices
- Avoiding known vulnerabilities
- Building on proven patterns

### Research Depth Levels

| Level | Time | When to Use |
|-------|------|-------------|
| Quick | 5 min | Simple API call, straightforward integration |
| Standard | 15-30 min | New framework, moderate complexity feature |
| Deep | 1+ hour | Critical systems, security-sensitive, novel architecture |
| Exhaustive | Multiple hours | Production infrastructure, security modules, core algorithms |

**Default to Standard depth. Escalate for complexity or risk.**

---

## II. Search Tiers (Execute in Order)

### Tier 1: Official Documentation

The source of truth. Start here.

```
Search Patterns:
"{technology}" official documentation
"{technology}" API reference {method}
"{technology}" getting started
"{technology}" migration guide {version}
"{technology}" changelog
"{technology}" deprecation notice
```

**What to Extract:**
- API signatures and return types
- Required vs optional parameters
- Version constraints and breaking changes
- Official recommended patterns
- Known limitations

**Official Sources:**
- Official websites (react.dev, python.org, etc.)
- GitHub repositories under official orgs
- Official blog posts
- Release notes and changelogs

### Tier 2: Community Implementations

Real working code is worth 1000 documentation pages.

```
Search Patterns:
site:github.com "{technology}" {feature} implementation
site:github.com "{technology}" boilerplate template
site:github.com "{technology}" example {use_case}
site:github.com "{technology}" stars:>500
site:github.com language:TypeScript "{technology}"
```

**GitHub Search Operators:**

| Operator | Example | Purpose |
|----------|---------|---------|
| `stars:>N` | `react hooks stars:>1000` | Popular repos |
| `forks:>N` | `nextjs forks:>100` | Widely used |
| `pushed:>DATE` | `graphql pushed:>2024-01-01` | Recently active |
| `language:LANG` | `language:TypeScript` | Specific language |
| `filename:NAME` | `filename:package.json` | Find specific files |
| `extension:EXT` | `extension:py` | Find by extension |

**What to Extract:**
- Project structure patterns
- Dependency choices and versions
- Common file organization
- How they handle edge cases
- Test patterns

**Evaluate Repositories:**
- [ ] Recently active (commits in last 6 months)
- [ ] Good documentation (README explains usage)
- [ ] Test coverage exists
- [ ] Issues are being addressed
- [ ] Not abandoned or archived

### Tier 3: Q&A and Problem Solving

Learn from others' pain.

```
Search Patterns:
site:stackoverflow.com "{technology}" {error_message}
site:stackoverflow.com "{technology}" {feature} "accepted answer"
site:stackoverflow.com "{technology}" {feature} score:>10
site:stackoverflow.com [{tag}] [{tag}] {query}

site:github.com/{org}/{repo}/issues {error}
site:github.com/{org}/{repo}/discussions {topic}

site:reddit.com/r/programming "{technology}"
site:reddit.com/r/{tech_subreddit} {query}
```

**Stack Overflow Operators:**

| Operator | Example | Purpose |
|----------|---------|---------|
| `is:answer` | `is:answer python` | Only answers |
| `is:question` | `is:question error` | Only questions |
| `score:>N` | `score:>10` | Highly voted |
| `accepted` | `python accepted` | Has accepted answer |
| `[tag]` | `[python] [django]` | Tagged questions |
| `created:DATE` | `created:2024-01-01..` | Recent questions |

**What to Extract:**
- Common error messages and fixes
- Gotchas and pitfalls
- Version-specific issues
- Alternative approaches
- "Why doesn't this work?" answers

### Tier 4: Deep Technical Resources

Understand the "why" not just the "how".

```
Search Patterns:
"{technology}" architecture deep dive
"{technology}" internal implementation
"{technology}" how it works internally
"{technology}" performance benchmarks
"{technology}" memory profiling
"{technology}" design decisions

site:medium.com "{technology}" architecture
site:dev.to "{technology}" tutorial
site:blog.logrocket.com "{technology}"
site:engineering.atspotify.com "{technology}"
site:netflixtechblog.com "{technology}"
```

**Engineering Blogs:**
- Netflix Tech Blog
- Spotify Engineering
- Uber Engineering
- Airbnb Tech
- Cloudflare Blog
- Vercel Blog
- Meta Engineering

**What to Extract:**
- Performance characteristics
- Scaling limitations
- Internal architecture
- Trade-offs in design
- Real-world usage patterns

### Tier 5: Security and Vulnerabilities

Non-negotiable for production code.

```
Search Patterns:
"{technology}" CVE
"{technology}" security advisory
"{technology}" vulnerability
"{technology}" security best practices
"{technology}" OWASP
site:cve.mitre.org "{technology}"
site:nvd.nist.gov "{technology}"
```

**Security Sources:**
- CVE Database (cve.mitre.org)
- NIST National Vulnerability Database
- GitHub Security Advisories
- Snyk Vulnerability DB
- npm audit / pip-audit

**What to Extract:**
- Known vulnerabilities
- Affected versions
- Patches and workarounds
- Secure configuration
- Common attack vectors

### Tier 6: Leaked and Insider Knowledge

The frontier of what's publicly known.

```
Search Patterns:
"{technology}" leaked architecture
"{technology}" internal design document
"{technology}" engineering presentation
"{technology}" roadmap leak
"{technology}" upcoming features

site:news.ycombinator.com "{technology}"
site:docs.google.com "{technology}" presentation
site:slideshare.net "{technology}" architecture
```

**Sources:**
- Hacker News discussions (real engineering experiences)
- Conference talks (PyCon, JSConf, etc.)
- Engineering presentations (often on Google Docs/SlideShare)
- Twitter/X threads from maintainers
- Discord/Slack community discussions

**What to Extract:**
- Unofficial best practices
- Upcoming deprecations
- Internal architecture insights
- Maintainer opinions and preferences
- "We learned the hard way" stories

**Note:** Unofficial information requires verification. Cross-reference with official sources.

---

## III. Research Execution Protocol

### Step 1: Query Formulation

For any implementation, craft 3-5 distinct search queries:

```
Query 1: Official docs - "{tech} {feature} documentation"
Query 2: Implementation - site:github.com "{tech}" {feature}
Query 3: Problems - site:stackoverflow.com "{tech}" {feature} error
Query 4: Deep dive - "{tech}" {feature} architecture
Query 5: Security - "{tech}" {feature} vulnerability CVE
```

### Step 2: Source Diversity

Never rely on a single source. Always cross-reference:

| If Source Says | Verify Against |
|----------------|----------------|
| Blog tutorial | Official docs |
| Stack Overflow | GitHub issues |
| Implementation | Changelog for version changes |
| Memory | Current documentation |

### Step 3: Conflict Resolution

When sources disagree, prefer in order:

1. **Official documentation** (current version)
2. **Official examples** (from maintainer org)
3. **Popular community implementations** (high stars, active)
4. **Stack Overflow accepted answers** (recent, high score)
5. **Blog posts and tutorials** (verify against other sources)
6. **Unofficial sources** (requires extra verification)

### Step 4: Knowledge Synthesis

Document findings before implementation:

```markdown
## Research Summary: {Topic}

### Official Documentation
- **Key APIs**: {list relevant APIs}
- **Recommended Patterns**: {patterns from docs}
- **Version Constraints**: {version requirements}
- **Deprecations**: {deprecated features to avoid}

### Community Implementations Found
| Repository | Stars | What It Demonstrates |
|------------|-------|---------------------|
| owner/repo | 1.2k  | {approach}          |

### Known Issues & Solutions
| Issue | Source | Solution |
|-------|--------|----------|
| {problem} | {link} | {fix}   |

### Security Considerations
- CVE-{id}: {description} (affects versions X-Y)

### Decision: {Approach Chosen}
**Rationale**: {why this approach}
**Alternatives Rejected**: {why not those}
```

---

## IV. Technology-Specific Research Paths

### New Framework/Library

```
1. Official Quick Start Guide
2. Official Core Concepts Documentation
3. API Reference for relevant features
4. Official example repositories
5. GitHub: "{framework} starter template"
6. GitHub: "{framework} boilerplate"
7. Stack Overflow: "{framework}" common mistakes
8. Blog: "{framework}" best practices
9. Security: "{framework}" vulnerabilities
```

### Debugging Persistent Errors

```
1. Exact error message in quotes
2. Error code only (if applicable)
3. Error + framework name
4. Error + version number
5. GitHub issues in relevant repos
6. Stack Overflow with multiple keywords
7. Alternative: "{framework}" {task} without error
```

### Architecture Decisions

```
1. "{pattern}" architecture
2. "{pattern}" pros cons
3. "{pattern}" vs {alternative}
4. "{pattern}" {technology} implementation
5. "{pattern}" production experience
6. "{pattern}" scaling
7. "{pattern}" failure modes
```

### Performance Optimization

```
1. "{technology}" performance benchmarks
2. "{technology}" profiling
3. "{technology}" optimization
4. "{technology}" memory leak
5. "{technology}" CPU bottleneck
6. "{technology}" production performance
7. GitHub: "{technology}" benchmark
```

### Security Implementation

```
1. "{feature}" security best practices
2. "{feature}" OWASP
3. "{feature}" common vulnerabilities
4. "{feature}" penetration testing
5. "{feature}" CVE
6. "{feature}" security audit
7. "{technology}" security configuration
```

---

## V. Search URL Reference

| Source | URL Pattern |
|--------|-------------|
| GitHub Code | `https://github.com/search?q={query}&type=code` |
| GitHub Repos | `https://github.com/search?q={query}&type=repositories` |
| Stack Overflow | `https://stackoverflow.com/search?q={query}` |
| Google Site | `https://google.com/search?q=site:{domain}+{query}` |
| Hacker News | `https://hn.algolia.com/?q={query}` |
| Dev.to | `https://dev.to/search?q={query}` |
| Reddit | `https://reddit.com/search?q={query}` |
| CVE Database | `https://cve.mitre.org/cgi-bin/cvekey.cgi?keyword={query}` |
| NVD | `https://nvd.nist.gov/vuln/search/results?query={query}` |

---

## VI. Research Red Flags

Stop and investigate if you find:

| Red Flag | Meaning | Action |
|----------|---------|--------|
| No official documentation | Immature project | Find alternative or document risk |
| No recent commits (1+ year) | Abandoned | Find maintained fork or alternative |
| Many open issues, few closed | Unresolved problems | Read issues, assess severity |
| Breaking changes in recent changelog | Migration needed | Plan upgrade path |
| Security advisories | Vulnerabilities | Check severity, update version |
| Few Stack Overflow answers | Niche/untested | Budget extra testing time |
| Conflicting answers | No consensus | Test multiple approaches |
| Deprecated in docs | End of life | Find replacement |

---

## VII. Research Output Template

Complete this template for significant implementations:

```markdown
# Research Output: {Feature/Component}

**Date**: {date}
**Depth Level**: Quick / Standard / Deep / Exhaustive
**Technologies**: {list}

---

## 1. Official Documentation Summary

### Primary APIs
| API | Purpose | Version Added |
|-----|---------|---------------|
| {api} | {what it does} | {version} |

### Official Patterns
1. {pattern} - {when to use}

### Constraints
- {constraint}

---

## 2. Community Implementations

### Primary Reference
**Repo**: owner/name
**Stars**: X
**Why Relevant**: {what we learn from it}

### Code Pattern Observed
```
{code snippet}
```

### Other Notable Implementations
- repo/name - {what's different}

---

## 3. Known Issues

### Issue 1: {title}
**Source**: {link}
**Symptoms**: {what happens}
**Fix**: {solution}
**Affected Versions**: X.Y - Z.W

### Issue 2: {title}
...

---

## 4. Security

### Vulnerabilities
| CVE | Severity | Affected | Fix |
|-----|----------|----------|-----|
| CVE-XXXX-XXXX | High/Med/Low | vX-Y | Upgrade to vZ |

### Security Best Practices
1. {practice}

---

## 5. Decision

### Approach
{describe chosen approach}

### Rationale
{why this approach}

### Alternatives Considered
| Approach | Pros | Cons | Why Not Chosen |
|----------|------|------|----------------|
| {name} | ... | ... | ... |

### Implementation Notes
1. {key insight}
2. {gotcha to avoid}
3. {performance consideration}

---

## 6. Open Questions
- {unresolved question}
```
