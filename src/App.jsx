import { useEffect } from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Certifications from './components/Certifications.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import { profile } from './data/portfolio.js'
import { useActiveSection, useReveal, useTheme } from './hooks.js'

// 'top' is the hero — it matches no nav link, so nothing is highlighted up there.
const SECTION_IDS = [
  'top',
  'about',
  'skills',
  'projects',
  'experience',
  'certificates',
  'contact',
]

export default function App() {
  const [theme, toggleTheme] = useTheme()
  const active = useActiveSection(SECTION_IDS)
  useReveal()

  useEffect(() => {
    document.title = `${profile.name} — ${profile.roles[0] ?? 'Portfolio'}`
  }, [])

  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-md focus:bg-accent-600 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <Nav theme={theme} toggleTheme={toggleTheme} active={active} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
