export function Security() {
  return (
    <section className="section" id="security">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">isolation is not a slide</span>
          <h2>One admin key can read a whole company. That&apos;s correct for one person.</h2>
          <p>
            For a real OAuth tenant, the server issues caller-scoped keys instead of handing the
            admin key to every people manager.
          </p>
        </div>
        <div className="scope-ladder">
          <article className="scope-card self">
            <span className="role">Self</span>
            <p>
              Own <span className="mono">userId</span> only. Nothing about anyone else, even a
              direct report.
            </p>
          </article>
          <article className="scope-card manager">
            <span className="role">Manager</span>
            <p>Own record plus direct reports. Not the full subtree. Not a skip-level fishing expedition.</p>
          </article>
          <article className="scope-card admin">
            <span className="role">Admin key</span>
            <p>Required for anyone else&apos;s compensation — even someone who reports to you.</p>
          </article>
        </div>
        <div className="refusal">
          “Employee 100999 was not found. If you only have a name, call search_employee first.”
          <span>
            An error the agent can recover from, not a bare HTTP 404. Architects design the happy
            path — agents live on the unhappy one.
          </span>
        </div>
      </div>
    </section>
  )
}
