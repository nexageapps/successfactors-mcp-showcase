import { MCP_ENDPOINT, SPACE_URL } from '../data'
import { CopyButton } from './CopyButton'

export function SpaceShowcase() {
  return (
    <section className="section" id="live" style={{ paddingTop: 64 }}>
      <div className="wrap">
        <div className="section-head row">
          <div>
            <span className="eyebrow">live Hugging Face Space</span>
            <h2>The same contract, running on DEMOCO right now</h2>
            <p>
              heisenberglupenix-successfactors-mcp.hf.space is the hosted server. This page is
              the showcase for that display — same security-boundary language, same 20 read
              tools, same mock tenant you can ask an agent about today.
            </p>
          </div>
          <a className="btn btn-primary" href={SPACE_URL} target="_blank" rel="noopener noreferrer">
            Launch Space
          </a>
        </div>

        <div className="space-frame">
          <div className="space-chrome">
            <div className="space-url">
              <span className="live-pill">
                <span className="status-dot ok" aria-hidden="true" />
                Live
              </span>
              <code>{SPACE_URL.replace('https://', '')}</code>
            </div>
            <CopyButton value={MCP_ENDPOINT} label="Copy /mcp" />
          </div>
          <div className="space-body">
            <dl className="kpi-row">
              <div className="kpi">
                <dt>Read tools</dt>
                <dd>20</dd>
              </div>
              <div className="kpi">
                <dt>Employees</dt>
                <dd>12</dd>
              </div>
              <div className="kpi">
                <dt>Departments</dt>
                <dd>5</dd>
              </div>
              <div className="kpi">
                <dt>Locations</dt>
                <dd>5</dd>
              </div>
            </dl>
            <p style={{ color: 'var(--muted)', fontSize: 15, maxWidth: '68ch', lineHeight: 1.6 }}>
              Hugging Face Spaces cannot be embedded here (the live app only allows frames from
              huggingface.co). Open the Space to connect a tenant, browse the tool catalog, or
              copy client configs. Everything below is the same DEMOCO data, restyled for this
              showcase.
            </p>
            <div className="hero-actions" style={{ marginTop: 18 }}>
              <a className="btn btn-ghost" href={`${SPACE_URL}/tools`} target="_blank" rel="noopener noreferrer">
                Tool catalog
              </a>
              <a className="btn btn-ghost" href={`${SPACE_URL}/docs`} target="_blank" rel="noopener noreferrer">
                Documentation
              </a>
              <a className="btn btn-ghost" href={`${SPACE_URL}/connect`} target="_blank" rel="noopener noreferrer">
                Connect tenant
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
