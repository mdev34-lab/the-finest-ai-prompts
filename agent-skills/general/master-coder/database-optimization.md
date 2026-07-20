# Database Optimization

## PostgreSQL

### Index Design
- **B-tree**: default, good for equality and range
- **GIN**: arrays, JSONB, full-text search
- **GiST**: geometric, geographic, fuzzy search
- **BRIN**: large tables with natural ordering (time-series)
- **Partial indexes**: index only rows matching a condition (e.g., `WHERE active = true`)
- **Covering indexes**: include columns to avoid table lookups (`INCLUDE (col)`)

### Query Optimization
- `EXPLAIN (ANALYZE, BUFFERS)` — always analyze before optimizing
- Avoid `SELECT *` — fetch only what you need
- Use `JOIN ... ON` instead of `WHERE` for joins
- Push filters into CTEs/subqueries early
- Batch inserts: `INSERT INTO ... VALUES (...), (...), (...)` instead of row-by-row
- Use `COPY` for bulk loading

### Common Anti-Patterns
- **N+1 queries**: use `JOIN` or `IN` subquery, or eager loading
- **Missing foreign key indexes**: index every FK column
- **Over-indexing**: each index slows writes. Profile real query patterns
- **Large JSONB without GIN index**: add GIN index for key lookups

### Connection Pooling
- PgBouncer in front of PostgreSQL for high-connection workloads
- Transaction-level pooling for serverless (short-lived connections)

## Migrations

- **Expand and contract**: add new column → backfill → switch reads → drop old column
- Never drop a column in the same migration that adds its replacement
- Use `IF EXISTS` / `IF NOT EXISTS` for idempotency
- Test migrations against production-size data

## Schema Patterns

- **Soft deletes**: `deleted_at` timestamp instead of `DELETE`
- **Optimistic locking**: version column, check on update
- **Audit trail**: `created_at`, `updated_at`, `created_by` on every table
- **UUID vs serial**: UUID for distributed, serial for single-node
