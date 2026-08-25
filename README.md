# SuccessFactors MCP — showcase

Landing page for the live Hugging Face Space
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

The Space itself cannot be iframed (it only allows frames from huggingface.co).
Use **Open live Space** to hit the running server.

## Run locally

```bash
npm install
npm run dev
```

The app listens on [http://127.0.0.1:43121](http://127.0.0.1:43121).

```bash
npm run build
npm run preview
```

## Links

| | |
| --- | --- |
| Live Space | https://heisenberglupenix-successfactors-mcp.hf.space/ |
| MCP endpoint | https://heisenberglupenix-successfactors-mcp.hf.space/mcp |
| Hugging Face | https://huggingface.co/spaces/HeisenbergLupenix/successfactors-mcp |
| Security post | https://community.sap.com/t5/artificial-intelligence-blogs-posts/your-ai-agent-wants-to-talk-to-successfactors-start-with-the-security/ba-p/14469334 |
