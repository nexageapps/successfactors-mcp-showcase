import { PIPELINE_GROUPS } from '../data'

export function Pipeline() {
  return (
    <section className="section" id="how-it-works">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">how a question travels</span>
          <h2>Nine stops between a question and an answer</h2>
          <p>
            Every call passes through the same rail, in the same order. Nothing skips the scope
            check to save a round trip.
          </p>
        </div>

        <div className="pipeline-groups">
          {PIPELINE_GROUPS.map((group) => (
            <article key={group.title} className={`p-group ${group.tone}`}>
              <h3>{group.title}</h3>
              {group.steps.map((step) => (
                <div className="p-step" key={step.n}>
                  <span className="n">{step.n}</span>
                  <span className="l">{step.label}</span>
                </div>
              ))}
            </article>
          ))}
        </div>

        <div className="pipeline-out">
          <div className="card">
            <h4>What a trace should show</h4>
            <p className="body">
              search_employee(department=&quot;Finance&quot;)
              <br />
              &quot;ok&quot;: true
            </p>
          </div>
          <div className="card">
            <h4 className="fail">What it should never contain</h4>
            <p className="body" style={{ color: 'var(--err)' }}>
              access_token · apikey · password
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
