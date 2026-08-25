import { useMemo, useState } from 'react'
import { DEPARTMENTS, LOCATIONS, PEOPLE, PROMPTS, SPACE_URL } from '../data'
import { CopyButton } from './CopyButton'

export function Democo() {
  const [department, setDepartment] = useState('All')
  const depts = ['All', ...DEPARTMENTS.map((d) => d.name)]
  const people = useMemo(
    () => PEOPLE.filter((p) => department === 'All' || p.department === department),
    [department],
  )

  return (
    <section className="section" id="democo">
      <div className="wrap">
        <div className="democo-banner">
          <div>
            <span className="eyebrow">Mock Employee Central</span>
            <h2>DEMOCO · DEMOCO Global</h2>
            <p>
              Synthetic Employee Central tenant. Same READ tools as a live SuccessFactors system.
              Environment: <strong>Demo</strong>. Jane Smith is <code>100045</code>. No live SAP
              system.
            </p>
          </div>
          <dl className="democo-kpis">
            <div>
              <dt>Employees</dt>
              <dd>12</dd>
            </div>
            <div>
              <dt>Departments</dt>
              <dd>5</dd>
            </div>
            <div>
              <dt>Locations</dt>
              <dd>5</dd>
            </div>
            <div>
              <dt>Pending time off</dt>
              <dd>3</dd>
            </div>
          </dl>
        </div>
        <p style={{ marginBottom: 16 }}>
          <a className="btn btn-ghost" href={`${SPACE_URL}/#democo`} target="_blank" rel="noopener noreferrer">
            View on Space
          </a>
        </p>

        <div className="org-wall" role="list">
          {DEPARTMENTS.map((dept) => (
            <article className="org-col" role="listitem" key={dept.code}>
              <header>
                <strong>{dept.name}</strong>
                <span>
                  {dept.code} · {dept.people.length} {dept.people.length === 1 ? 'person' : 'people'}
                </span>
              </header>
              <p className="org-head">
                Lead: {dept.lead.name} <code>{dept.lead.id}</code>
              </p>
              <ul>
                {dept.people.map((person) => (
                  <li key={person.id}>
                    <span className="org-name">{person.name}</span>
                    <span className="org-meta">{person.title}</span>
                    <code>{person.id}</code>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <h3 style={{ margin: '40px 0 8px', fontSize: 20 }}>People directory</h3>
        <p style={{ color: 'var(--muted)', marginBottom: 16, fontSize: 14.5 }}>
          Ask an agent with a name or a user ID. Filter the table the way a manager would scan it.
        </p>
        <div className="filters" style={{ marginBottom: 14 }}>
          {depts.map((name) => (
            <button
              key={name}
              type="button"
              className={`filter${department === name ? ' active' : ''}`}
              onClick={() => setDepartment(name)}
              aria-pressed={department === name}
            >
              {name}
            </button>
          ))}
        </div>
        <div className="table-wrap">
          <table className="people-table">
            <thead>
              <tr>
                <th>User ID</th>
                <th>Name</th>
                <th>Title</th>
                <th>Department</th>
                <th>Location</th>
                <th>Manager</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {people.map((person) => (
                <tr key={person.id}>
                  <td>
                    <code>{person.id}</code>
                  </td>
                  <td>
                    <span className="people-name">{person.name}</span>
                    <span className="people-email">{person.email}</span>
                  </td>
                  <td>{person.title}</td>
                  <td>{person.department}</td>
                  <td>{person.location}</td>
                  <td>{person.manager}</td>
                  <td>
                    <span className="pill">Active</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="democo-split">
          <div>
            <h3 style={{ fontSize: 18, marginBottom: 12 }}>Locations</h3>
            <ul className="loc-list">
              {LOCATIONS.map((loc) => (
                <li key={loc.name}>
                  <strong>{loc.name}</strong>
                  <span>{loc.meta}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 style={{ fontSize: 18, marginBottom: 12 }}>Ask these on the mock tenant</h3>
            <ul className="prompt-list">
              {PROMPTS.map((prompt) => (
                <li key={prompt.tool}>
                  <span className="prompt-text">“{prompt.q}”</span>
                  <span className="prompt-meta">
                    <code>{prompt.tool}</code>
                    <CopyButton className="copy-btn" value={prompt.q} label="Copy" ariaLabel={`Copy prompt: ${prompt.q}`} />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
