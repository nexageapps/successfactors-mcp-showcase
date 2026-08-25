import { useEffect, useState } from 'react'
import {
  BLOG_URL,
  CONNECT_URL,
  MCP_ENDPOINT,
  READY_URL,
  SPACE_URL,
  TRACE_STEPS,
} from '../data'

type Ready = { status: string; mode: string; tenant_count: number; mcp: string }

export function Hero() {
  const [ready, setReady] = useState<Ready | null>(null)
  const [failed, setFailed] = useState(false)
  const [step, setStep] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ? TRACE_STEPS.length - 1
      : 0,
  )

  useEffect(() => {
    let cancelled = false
    fetch(READY_URL)
      .then((res) => res.json())
      .then((data: Ready) => {
        if (!cancelled) setReady(data)
      })
      .catch(() => {
        if (!cancelled) setFailed(true)
      })
    return () => {
      cancelled = true
    }
  }, [])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = window.setInterval(() => {
      setStep((s) => (s + 1) % TRACE_STEPS.length)
    }, 1400)
    return () => window.clearInterval(id)
  }, [])

  const statusClass = ready?.status === 'ready' ? 'ok' : failed ? 'err' : 'warn'
  const statusText = ready
    ? `Server ready · ${ready.mode} · ${ready.tenant_count} tenant configured`
    : failed
      ? 'Live Space is up — status probe blocked from this origin'
      : 'Checking Hugging Face Space…'

  return (
    <section className="hero" id="top">
      <div className="wrap">
        <div>
          <span className="eyebrow">intiwse · Model Context Protocol</span>
          <h1>
            Joule doesn&apos;t speak OData.
            <br />
            SuccessFactors doesn&apos;t speak MCP.
            <br />
            <span className="hl">This sits in the middle.</span>
          </h1>
          <p className="lead">Give your AI agent secure access to SAP SuccessFactors.</p>
          <p className="sub">
            A question like “who&apos;s on Jane&apos;s team” still has to become a typed OData
            call, survive a 401, and come back as a sentence someone can use in a 1:1. This is
            the last mile that does that — with a scope check in front of every read.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={SPACE_URL} target="_blank" rel="noopener noreferrer">
              Open the live Space
            </a>
            <a className="btn btn-ghost" href="#tools">
              See the 20 tools
            </a>
            <a className="btn btn-scope" href={BLOG_URL} target="_blank" rel="noopener noreferrer">
              Read the security post
            </a>
          </div>
          <div className="status-row" role="status">
            <span className={`status-dot ${statusClass}`} aria-hidden="true" />
            <span>{statusText}</span>
          </div>
          <div className="trace-endpoint">
            MCP endpoint · <code>{MCP_ENDPOINT}</code>
          </div>
        </div>

        <div className="hero-trace" aria-hidden="true">
          <div className="hero-trace-head">
            <span>request trace</span>
            <div className="dots">
              <i />
              <i />
              <i />
            </div>
          </div>
          <div>
            {TRACE_STEPS.map((label, i) => (
              <div key={label} className={`mini-node${i === step ? ' active' : ''}`}>
                <span className="pip" />
                {label}
              </div>
            ))}
          </div>
          <div className="mini-json">
            <span className="s">// what the agent gets back</span>
            {`
{ `}
            <span className="k">&quot;ok&quot;</span>
            {`: true, `}
            <span className="k">&quot;count&quot;</span>
            {`: 3,
  `}
            <span className="k">&quot;scope&quot;</span>
            {`: "manager" }`}
          </div>
        </div>
      </div>
      <p className="sr-only">
        Connect a client at {CONNECT_URL}. The live Space is {SPACE_URL}.
      </p>
    </section>
  )
}
