# DevOps & SRE

## Infrastructure as Code

### Terraform
- State in remote backend (S3+DynamoDB or Terraform Cloud)
- One workspace per environment, modules for reusable components
- `terraform plan` before every apply, review diffs
- Pin provider versions, use `terraform fmt` and `tflint`

### Docker
- Multi-stage builds: builder stage + minimal runtime stage
- Non-root user in production images
- `.dockerignore` to exclude dev artifacts
- Health checks in Dockerfile

### Kubernetes
- Deployments for stateless, StatefulSets for stateful
- Resource requests/limits on every container
- Liveness/readiness probes
- Namespaces for environment isolation
- Helm or Kustomize for templating

## CI/CD Pipeline

```
lint → test → build → scan → deploy → verify
```

- **Gate**: failing any step blocks the pipeline
- **Scan**: SAST (semgrep), dependency audit (npm audit / pip audit)
- **Deploy**: blue-green or canary for production
- **Verify**: smoke tests post-deploy, automatic rollback on failure

## SRE Fundamentals

### SLOs & Error Budgets
- Define SLOs per service (e.g., 99.9% availability, p99 < 500ms)
- Error budget = 1 - SLO. When exhausted, freeze features, focus on reliability
- Multi-window burn-rate alerts: 1% budget consumed in 1h = WARNING, 10% in 6h = PAGE

### Monitoring Stack
- **Metrics**: Prometheus + Grafana (RED method: Rate, Errors, Duration)
- **Logs**: structured JSON, correlated by trace ID
- **Traces**: OpenTelemetry for distributed tracing
- **Dashboards**: USE method for infrastructure (Utilization, Saturation, Errors)

### Incident Response
- SEV1: customer-facing, all hands. SEV2: degraded. SEV3: minor. SEV4: cosmetic
- IC (Incident Commander) coordinates, Tech Lead investigates, Scribe documents
- 15-minute hypothesis cycles: form hypothesis → test → update status
- Blameless post-mortem: what happened, why, how to prevent, action items with owners

## GitOps
- Git as single source of truth for infrastructure
- ArgoCD or Flux syncs cluster state from Git
- Every change goes through PR → review → merge → auto-deploy
- Rollback = revert commit
