export function Gap() {
  return (
    <section className="section" style={{ paddingTop: 0, borderBottom: '1px solid var(--line)' }}>
      <div className="wrap">
        <div className="gap-grid">
          <div className="gap-card">
            <span className="who">the agent side</span>
            <h3>No one types a $filter</h3>
            <p>
              A manager asks in plain language. The agent has to choose a tool, pass typed
              arguments, survive a failed call, and recover — without inventing an employee ID
              or asking for a password.
            </p>
          </div>
          <div className="gap-card">
            <span className="who">the tenant side</span>
            <h3>The data was never the problem</h3>
            <p>
              Employee Central already knows the org chart, the department, the manager line. It
              speaks <code>User</code>, <code>EmpJob</code>, <code>EmpEmployment</code> — entities
              built for a browser session, not a process calling on an agent&apos;s behalf.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
