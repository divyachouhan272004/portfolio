import Section from './Section.jsx'
import { about } from '../data/portfolio.js'

export default function About() {
  return (
    <Section id="about" eyebrow="01 / About" title="A bit about me">
      <div className="grid gap-12 md:grid-cols-[1.6fr_1fr]">
        <div className="reveal space-y-5 text-base leading-relaxed text-slate-600 dark:text-slate-400">
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <dl className="reveal grid grid-cols-3 gap-4 md:grid-cols-1">
          {about.stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col rounded-xl border border-slate-200 bg-slate-50/60 p-4 dark:border-slate-800 dark:bg-slate-900/40"
            >
              <dd className="text-2xl font-bold text-slate-900 dark:text-white">{s.value}</dd>
              <dt className="mt-1 text-xs text-slate-500 dark:text-slate-500">{s.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  )
}
