import { useMemo, useState } from 'react'
import { TOOL_CATEGORIES, TOOLS, TOOLS_URL, type ToolCategory } from '../data'

export function Tools() {
  const [category, setCategory] = useState<(typeof TOOL_CATEGORIES)[number]>('All')
  const [query, setQuery] = useState('')

  const rows = useMemo(() => {
    const q = query.trim().toLowerCase()
    return TOOLS.filter((tool) => {
      if (category !== 'All' && tool.category !== (category as ToolCategory)) return false
      if (!q) return true
      return `${tool.ask} ${tool.tool} ${tool.entity} ${tool.category}`.toLowerCase().includes(q)
    })
  }, [category, query])

  return (
    <section className="section" id="tools">
      <div className="wrap">
        <div className="section-head row">
          <div>
            <span className="eyebrow">named for the question, not the entity</span>
            <h2>The agent should never know it&apos;s calling User.manager</h2>
            <p>
              It should see <span className="mono" style={{ color: 'var(--allow)' }}>get_manager</span>.
              Every tool in this release is read-only. Write tools (
              <span className="mono">update_employee</span>,{' '}
              <span className="mono">create_time_off_request</span>) sit on the roadmap behind{' '}
              <span className="mono">confirm=true</span>.
            </p>
          </div>
          <a className="btn btn-ghost" href={TOOLS_URL} target="_blank" rel="noopener noreferrer">
            Open catalog on Space
          </a>
        </div>

        <div className="filters" role="tablist" aria-label="Filter tools by category">
          {TOOL_CATEGORIES.map((item) => (
            <button
              key={item}
              type="button"
              className={`filter${category === item ? ' active' : ''}`}
              onClick={() => setCategory(item)}
              aria-pressed={category === item}
            >
              {item}
            </button>
          ))}
        </div>
        <div style={{ margin: '16px 0 8px' }}>
          <label className="sr-only" htmlFor="tool-search">
            Search tools
          </label>
          <input
            id="tool-search"
            className="tool-search"
            type="search"
            placeholder="Search a question or tool name"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className="tools-groups">
          <div className="tool-row head">
            <div>The human asks</div>
            <div>The tool that runs</div>
            <div>What it reads</div>
          </div>
          {rows.length === 0 ? (
            <p className="tools-empty">No tools match that filter. Try another category or search.</p>
          ) : (
            rows.map((row) => (
              <div className="tool-row" key={row.tool}>
                <div className="ask">{row.ask}</div>
                <div className="tool">{row.tool}</div>
                <div className="entity">{row.entity}</div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  )
}
