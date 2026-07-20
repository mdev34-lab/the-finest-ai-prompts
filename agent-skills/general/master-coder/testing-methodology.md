# Testing Methodology

## API Testing

- Cover 95%+ of endpoints including error paths
- Test every status code the API can return (200, 201, 400, 401, 403, 404, 409, 422, 500)
- Validate response schemas (JSON Schema or contract tests)
- Test authentication and authorization separately
- SLA validation: p95 latency < 200ms, error rate < 0.1%, 10x peak load sustained

## Performance Testing (k6)

```javascript
export const options = {
  stages: [
    { duration: '2m', target: 100 },  // ramp up
    { duration: '5m', target: 100 },  // sustained load
    { duration: '2m', target: 200 },  // spike
    { duration: '5m', target: 200 },  // sustained spike
    { duration: '2m', target: 0 },    // ramp down
  ],
  thresholds: {
    http_req_duration: ['p(95)<500'],
    http_req_failed: ['rate<0.01'],
  },
};
```

## Accessibility (WCAG 2.2 AA)

- Every interactive element keyboard-navigable
- Color contrast ratio ≥ 4.5:1 text, ≥ 3:1 large text
- ARIA labels on all non-text content
- Form inputs have associated labels
- Skip navigation links
- Screen reader testing: VoiceOver (Mac), NVDA (Windows)

## Evidence Collection

- Screenshot every significant UI state (not just happy path)
- Test across viewport sizes (320px, 768px, 1024px, 1440px)
- Document with "zero issues is a red flag" mentality
- Rate honestly: Basic / Good / Excellent with specific justifications

## Reality Checking

- Cross-reference claims against actual evidence
- Default verdict: "NEEDS WORK" until proven otherwise
- Expect 2-3 revision cycles for any deliverable
- Flag when tests only cover happy path
- Check that error messages are user-friendly, not developer dumps

## Test Pyramid

```
        /  E2E  \        ← few, slow, high confidence
       / Integration \   ← moderate, test component boundaries
      /   Unit Tests   \  ← many, fast, isolated
```

- **Unit**: test business logic in isolation, mock external dependencies
- **Integration**: test component interactions (API → DB, service → service)
- **E2E**: test critical user journeys only (login, checkout, core flow)
- Target: ≥90% unit coverage, critical paths covered by integration + E2E
