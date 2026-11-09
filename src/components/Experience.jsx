import Section from './Section.jsx'
import { education, experience } from '../data/portfolio.js'

function Entry({ item }) {
  return (
    <li className="reveal relative pb-10 pl-7 last:pb-0">
      <span
        aria-hidden
        className="absolute -left-[5px] top-1.5 size-2.5 rounded-full bg-accent-500 ring-4 ring-white dark:ring-slate-950"
      />

      <p className="font-mono text-xs text-slate-500 dark:text-slate-500">
        {item.period}
        {item.location && <span className="ml-2">&middot; {item.location}</span>}
      </p>

      <h4 className="mt-1.5 text-lg font-semibold text-slate-900 dark:text-white">
        {item.role}
        {item.company && (
          <>
            <span className="text-slate-400 dark:text-slate-600"> @ </span>
            {item.url ? (
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="text-accent-600 underline decoration-accent-500/30 underline-offset-4 transition-colors hover:decoration-accent-500 dark:text-accent-400"
              >
                {item.company}
              </a>
            ) : (
              <span className="text-accent-600 dark:text-accent-400">{item.company}</span>
            )}
          </>
        )}
      </h4>

      {item.bullets?.length > 0 && (
        <ul className="mt-3 space-y-2">
          {item.bullets.map((b) => (
            <li
              key={b}
              className="flex gap-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400"
            >
              <span
                aria-hidden
                className="mt-2 size-1.5 shrink-0 rounded-full bg-slate-300 dark:bg-slate-700"
              />
              {b}
            </li>
          ))}
        </ul>
      )}

      {item.tags?.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-2">
          {item.tags.map((t) => (
            <li
              key={t}
              className="rounded-md border border-slate-200 px-2 py-0.5 font-mono text-[11px] text-slate-600 dark:border-slate-700 dark:text-slate-400"
            >
              {t}
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

function Timeline({ items }) {
  return (
    <ol className="relative border-l border-slate-200 dark:border-slate-800">
      {items.map((item) => (
        <Entry key={`${item.role}-${item.company}-${item.period}`} item={item} />
      ))}
    </ol>
  )
}

export default function Experience() {
  return (
    <Section id="experience" eyebrow="04 / Experience" title="Where I've been">
      <Timeline items={experience} />

      {education.length > 0 && (
        <>
          <h3 className="reveal mt-14 mb-6 text-sm font-semibold tracking-wide text-slate-500 uppercase dark:text-slate-500">
            Education
          </h3>
          <Timeline items={education} />
        </>
      )}
    </Section>
  )
}
