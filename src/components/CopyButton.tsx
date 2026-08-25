import { useState } from 'react'
import { copyText } from '../lib/copy'

export function CopyButton({
  value,
  label = 'Copy',
  className = 'copy-btn',
  ariaLabel,
}: {
  value: string
  label?: string
  className?: string
  ariaLabel?: string
}) {
  const [copied, setCopied] = useState(false)

  async function onCopy() {
    try {
      await copyText(value)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1600)
    } catch {
      setCopied(false)
    }
  }

  return (
    <button
      type="button"
      className={`${className}${copied ? ' copied' : ''}`}
      onClick={onCopy}
      aria-label={ariaLabel ?? label}
    >
      {copied ? 'Copied' : label}
    </button>
  )
}
