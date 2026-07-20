# Architecture Patterns

## Decision Framework

Use ADRs (Architecture Decision Records) for every significant choice. Template:

```markdown
# ADR-{N}: {Title}
- **Status**: Accepted
- **Context**: What forces are at play?
- **Decision**: What did we decide?
- **Consequences**: What tradeoffs did we accept?
```

## Core Patterns

### Domain-Driven Design
- **Bounded Contexts**: each service owns its data and logic, no shared databases
- **Aggregate Roots**: enforce invariants at the boundary, one transaction per aggregate
- **Ubiquitous Language**: domain terms in code match domain terms in conversation
- **Anti-corruption Layer**: translate between bounded contexts, never leak internal models

### Hexagonal (Ports & Adapters)
- Business logic in the center, completely framework-agnostic
- **Ports**: interfaces the core exposes (driving) and requires (driven)
- **Adapters**: implementations that plug into ports (HTTP, DB, CLI, message queue)
- Test the core without any infrastructure by mocking adapters

### C4 Model (Architecture Documentation)
1. **Context**: system boundary, actors, external systems
2. **Containers**: deployable units (app, DB, message broker)
3. **Components**: major modules within a container
4. **Code**: class/sequence diagrams (only for complex algorithms)

### Event-Driven
- **Event Sourcing**: store state as sequence of events, reconstruct by replaying
- **CQRS**: separate read and write models when read patterns differ from write patterns
- **Event Storming**: collaborative workshop to discover domain events, commands, aggregates

## Anti-Patterns to Avoid

| Anti-Pattern | Signal | Fix |
|---|---|---|
| Big Ball of Mud | No clear boundaries, everything depends on everything | Extract bounded contexts |
| Leaky Abstraction | Internal details leak through API contracts | Enforce boundary at the interface |
| God Object | One class/service does everything | Split by responsibility |
| Golden Hammer | Using one tool for every problem | Evaluate alternatives per context |
| Distributed Monolith | Services coupled at deploy time | Decouple data, async communication |

## When to Choose What

- **Monolith first**: <5 engineers, early product, unknown domain
- **Modular monolith**: growing team, need modularity without operational overhead
- **Microservices**: >10 engineers, independent deployability required, clear bounded contexts
- **Serverless**: event-driven, sporadic traffic, minimal ops budget
