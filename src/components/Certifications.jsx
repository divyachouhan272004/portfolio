import Section from './Section.jsx'
import { certifications } from '../data/portfolio.js'
import { ExternalIcon } from './Icons.jsx'

export default function Certifications() {
  if (!certifications.length) return null

  return (
    <Section id="certificates" eyebrow="05 / Certificates" title="Certifications & achievements">
      <ul className="grid gap-4 sm:grid-cols-2">
        {certifications.map((c) => {
          const Tag = c.url ? 'a' : 'div'
          return (
            <li key={c.title} className="reveal">
              <Tag
                {...(c.url
                  ? { href: c.url, target: '_blank', rel: 'noreferrer' }
                  : {})}
                className="group flex h-full items-start justify-between gap-4 rounded-xl border border-slate-200 p-5 transition-colors hover:border-accent-400/70 dark:border-slate-800 dark:hover:border-accent-500/60"
              >
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                    {c.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-400">{c.issuer}</p>
                  <p className="mt-2 font-mono text-xs text-slate-500 dark:text-slate-500">
                    {c.date}
                  </p>
                </div>

                {c.url && (
                  <ExternalIcon
                    width={16}
                    height={16}
                    className="mt-0.5 shrink-0 text-slate-400 transition-colors group-hover:text-accent-600 dark:group-hover:text-accent-400"
                  />
                )}
              </Tag>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
