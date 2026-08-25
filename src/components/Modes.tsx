import { SPACE_URL } from '../data'

export function Modes() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">three backends, one contract</span>
          <h2>Same tools, different distance from a real tenant</h2>
          <p>Point the same 20 tools at whichever mode matches where you are in the rollout.</p>
        </div>
        <div className="modes-grid">
          <article className="mode-card demo">
            <span className="tag">Demo</span>
            <h3>No credentials</h3>
            <p className="desc">
              The Hugging Face Space boots on DEMOCO — a synthetic Employee Central company.
              Nothing to configure before the first call.
            </p>
            <div className="talks">talks to: synthetic company DEMOCO</div>
          </article>
          <article className="mode-card sandbox">
            <span className="tag">API Hub sandbox</span>
            <h3>Live EC APIs, no company id</h3>
            <p className="desc">
              A Hub API key, not a SuccessFactors password. Real Employee Central responses, no
              customer tenant attached.
            </p>
            <div className="talks">talks to: sandbox.api.sap.com/successfactorsfoundation</div>
          </article>
          <article className="mode-card prod">
            <span className="tag">Production</span>
            <h3>Real company</h3>
            <p className="desc">
              OAuth 2.0 client credentials against your own tenant. HTTP Basic is not on the
              connect form. It is not coming back.
            </p>
            <div className="talks">talks to: your SFSF_BASE_URL / TOKEN_URL / COMPANY_ID</div>
          </article>
        </div>
        <p style={{ marginTop: 20 }}>
          <a className="btn btn-ghost" href={`${SPACE_URL}/connect`} target="_blank" rel="noopener noreferrer">
            Manage connection on the Space
          </a>
        </p>
      </div>
    </section>
  )
}
