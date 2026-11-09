import Section from './Section.jsx'
import { skills } from '../data/portfolio.js'

export default function Skills() {
  return (
    <Section id="skills" eyebrow="02 / Skills" title="What I work with">
      <div className="grid gap-5 sm:grid-cols-2">
        {skills.map((group) => (
          <div
            key={group.group}
            className="reveal rounded-xl border border-slate-200 p-5 transition-colors hover:border-slate-300 dark:border-slate-800 dark:hover:border-slate-700"
          >
            <h3 className="mb-4 text-sm font-semibold tracking-wide text-slate-900 dark:text-white">
              {group.group}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md bg-slate-100 px-2.5 py-1 font-mono text-xs text-slate-700 dark:bg-slate-800/80 dark:text-slate-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
