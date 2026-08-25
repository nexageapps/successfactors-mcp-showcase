---
title: SuccessFactors MCP
emoji: 🐨
colorFrom: blue
colorTo: indigo
sdk: static
app_build_command: npm install && npm run build
app_file: dist/index.html
pinned: false
license: mit
short_description: MCP tools for SuccessFactors
---

# SuccessFactors MCP — showcase

Landing page for the live MCP server
[heisenberglupenix-successfactors-mcp](https://heisenberglupenix-successfactors-mcp.hf.space/).

Joule does not speak OData. SuccessFactors does not speak MCP. This is the
security boundary in the middle: **20 read-only tools**, a scope check on every
read, and a synthetic Employee Central tenant (`DEMOCO`) you can try without
credentials.

The visual language matches the live Space: navy header, cyan rule, SAP blue
primary, Inter on a light dotted canvas.

## What’s here

- Live status against the Space `/ready` endpoint
- The 20 named tools, filterable by category
- DEMOCO org wall, people directory, and copyable prompts
- MCP endpoint copy for Claude / Cursor / Joule
- The SAP Community article: [Your AI Agent Wants to Talk to SuccessFactors: Start with the Security](https://community.sap.com/t5/artificial-intelligence-blogs-posts/your-ai-agent-wants-to-talk-to-successfactors-start-with-the-security/ba-p/14469334)

The MCP server Space cannot be iframed here (it only allows frames from huggingface.co).
Use **Open live Space** to hit the running server.

## Run locally

```bash
npm install
npm run dev
```

```bash
npm run build
npm run preview
```

## Links

| | |
| --- | --- |
| This showcase Space | https://huggingface.co/spaces/HeisenbergLupenix/SuccessFactors_MCP |
| Live MCP server | https://heisenberglupenix-successfactors-mcp.hf.space/ |
| MCP endpoint | https://heisenberglupenix-successfactors-mcp.hf.space/mcp |
| Security post | https://community.sap.com/t5/artificial-intelligence-blogs-posts/your-ai-agent-wants-to-talk-to-successfactors-start-with-the-security/ba-p/14469334 |
