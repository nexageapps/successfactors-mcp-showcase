import { MCP_ENDPOINT } from '../data'
import { CopyButton } from './CopyButton'

export function Connect() {
  return (
    <section className="section" id="connect" style={{ borderBottom: 'none' }}>
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">bring your own client</span>
          <h2>Point any MCP client at this server</h2>
          <p>
            Works the same whether it&apos;s running on your laptop, this Hugging Face Space, or
            behind your own BTP destination.
          </p>
        </div>
        <div className="connect-panel">
          <div>
            <div className="step">
              <span className="n">1</span>
              <div className="t">
                <strong>Open connectors</strong>
                <span>Claude → Settings → Connectors → Add connector</span>
              </div>
            </div>
            <div className="step">
              <span className="n">2</span>
              <div className="t">
                <strong>Name it</strong>
                <span>SFSF, or whatever your team will recognize</span>
              </div>
            </div>
            <div className="step">
              <span className="n">3</span>
              <div className="t">
                <strong>Paste the endpoint</strong>
                <span>Streamable HTTP at /mcp — no stdio, no SSE, no OAuth dance inside the chat</span>
              </div>
            </div>
            <div className="step">
              <span className="n">4</span>
              <div className="t">
                <strong>Connect, then choose a tenant</strong>
                <span>Continue with DEMOCO for a demo, or sign in with a live key</span>
              </div>
            </div>
          </div>
          <div className="connect-field">
            <label htmlFor="endpoint">MCP endpoint</label>
            <div className="row">
              <input id="endpoint" type="text" value={MCP_ENDPOINT} readOnly />
              <CopyButton value={MCP_ENDPOINT} />
            </div>
            <label htmlFor="perms">Tool permissions</label>
            <div className="row">
              <input id="perms" type="text" value="Read-only tools · 20 · always allow" readOnly />
            </div>
            <div className="connect-note">
              <strong>Demo purpose only.</strong> The public Space is for evaluation. Point
              production traffic at your own tenant with OAuth 2.0 client credentials, not a
              shared sandbox key.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
