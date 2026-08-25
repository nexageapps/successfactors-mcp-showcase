import { useEffect, useState } from 'react'
import { NAV, SPACE_URL } from '../data'

export function Topbar({ active }: { active: string }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="topbar">
      <div className="wrap">
        <a className="brand" href="#top" onClick={() => setOpen(false)}>
          <span className="brand-mark">SF</span>
          <span>
            SuccessFactors MCP
            <small>read-only · tenant-scoped</small>
          </span>
        </a>
        <nav className="primary" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={active === item.href.slice(1) ? 'true' : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a className="nav-cta" href={SPACE_URL} target="_blank" rel="noopener noreferrer">
          Open live Space
        </a>
        <button
          className="menu-btn"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
        </button>
      </div>
      <div id="mobile-nav" className={`drawer${open ? ' open' : ''}`}>
        {NAV.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
        <a href={SPACE_URL} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
          Open live Space
        </a>
      </div>
    </header>
  )
}
