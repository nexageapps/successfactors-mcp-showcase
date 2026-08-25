import { BLOG_URL, SPACE_URL } from '../data'

export function BlogBanner() {
  return (
    <section className="section" style={{ paddingTop: 56, paddingBottom: 56 }}>
      <div className="wrap">
        <aside className="blog-banner">
          <div>
            <span className="eyebrow">SAP Community</span>
            <h2>Your AI Agent Wants to Talk to SuccessFactors: Start with the Security</h2>
            <p>
              Why this server exists: tenant isolation, OAuth, and read-only tools before the
              Joule demo. Start with the security model, then point a client at the live Space.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <a className="btn btn-primary" href={BLOG_URL} target="_blank" rel="noopener noreferrer">
              Read the article
            </a>
            <a className="btn btn-ghost" href={SPACE_URL} target="_blank" rel="noopener noreferrer">
              Try DEMOCO
            </a>
          </div>
        </aside>
      </div>
    </section>
  )
}
