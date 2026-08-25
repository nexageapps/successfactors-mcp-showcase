import { useEffect, useState } from 'react'
import { BlogBanner } from './components/BlogBanner'
import { Connect } from './components/Connect'
import { Democo } from './components/Democo'
import { Footer } from './components/Footer'
import { Gap } from './components/Gap'
import { Hero } from './components/Hero'
import { Modes } from './components/Modes'
import { Pipeline } from './components/Pipeline'
import { Security } from './components/Security'
import { SpaceShowcase } from './components/SpaceShowcase'
import { Tools } from './components/Tools'
import { Topbar } from './components/Topbar'

const SECTION_IDS = ['how-it-works', 'tools', 'democo', 'security', 'connect']

export default function App() {
  const [active, setActive] = useState('how-it-works')

  useEffect(() => {
    const nodes = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => Boolean(el),
    )
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target.id) setActive(visible.target.id)
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0.1, 0.25, 0.5] },
    )
    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Topbar active={active} />
      <main id="main">
        <Hero />
        <BlogBanner />
        <SpaceShowcase />
        <Gap />
        <Pipeline />
        <Modes />
        <Tools />
        <Democo />
        <Security />
        <Connect />
      </main>
      <Footer />
    </>
  )
}
