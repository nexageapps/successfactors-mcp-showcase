import { useEffect, useState } from 'react'
import { NAV, SPACE_URL } from '../data'

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
        <rect width="32" height="32" rx="8" fill="#0B1220" />
        <path
          d="M16 8.5L8.5 22.5h15L16 8.5z"
          fill="none"
          stroke="#0A6ED1"
          strokeWidth="1.25"
          strokeLinejoin="round"
        />
        <path
          d="M16 8.5V16M8.5 22.5L16 16M23.5 22.5L16 16"
          stroke="#00B8D9"
          strokeWidth="1.1"
          strokeLinecap="round"
          opacity="0.85"
        />
        <circle cx="16" cy="8.5" r="2.35" fill="#00B8D9" />
        <circle cx="8.5" cy="22.5" r="2.1" fill="#0A6ED1" />
        <circle cx="23.5" cy="22.5" r="2.1" fill="#EAF4FF" />
        <circle cx="16" cy="16" r="1.55" fill="#FFFFFF" />
      </svg>
    </span>
  )
}

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
          <BrandMark />
          <span>
            <small>intiwse</small>
            <strong>SuccessFactors MCP</strong>
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
        <span className="mode-pill" title="Server mode">
          Demo mode
        </span>
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
