# MCP Development

## Model Context Protocol (MCP)

### Server Architecture
- **Transport**: stdio (CLI tools), SSE (web), Streamable HTTP (new standard)
- **Resources**: read-only data the server exposes (files, DB schemas, API docs)
- **Tools**: functions the server can execute (with JSON Schema args)
- **Prompts**: reusable prompt templates with arguments

### TypeScript MCP Server Template

```typescript
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

const server = new McpServer({ name: "my-server", version: "1.0.0" });

// Resource
server.resource("config", "config://app", async (uri) => ({
  contents: [{ uri: uri.href, mimeType: "application/json", text: JSON.stringify(config) }],
}));

// Tool
server.tool("search", { query: z.string() }, async ({ query }) => ({
  content: [{ type: "text", text: await search(query) }],
}));

const transport = new StdioServerTransport();
await server.connect(transport);
```

### Python MCP Server Template

```python
from mcp.server.fastmcp import FastMCP

mcp = FastMCP("my-server")

@mcp.resource("config://app")
def get_config() -> str:
    return json.dumps(config)

@mcp.tool()
def search(query: str) -> str:
    return do_search(query)

mcp.run(transport="stdio")
```

### Security Patterns
- Validate all tool inputs with Zod (TypeScript) or Pydantic (Python)
- Never expose raw filesystem access — scope to project directory
- Rate-limit expensive operations
- Log tool invocations for audit trail
- Never pass secrets as arguments — use environment variables

### Testing MCP Servers
- Use `@modelcontextprotocol/sdk` client for integration tests
- Mock transport layer for unit tests
- Test resource URI resolution and tool argument validation
- Verify error responses for invalid inputs

## LSP Orchestration

- **Language Server Protocol**: standard protocol for editor intelligence
- Use LSP for code intelligence in custom tools (autocomplete, diagnostics, go-to-definition)
- Launch LSP servers as child processes, communicate via JSON-RPC
- Cache diagnostics and completions for performance
