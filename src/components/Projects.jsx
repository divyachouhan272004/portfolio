import Section from './Section.jsx'
import { projects } from '../data/portfolio.js'
import { ExternalIcon, GitHubIcon } from './Icons.jsx'

function Tag({ children }) {
  return (
    <li className="rounded-md border border-slate-200 px-2 py-0.5 font-mono text-[11px] text-slate-600 dark:border-slate-700 dark:text-slate-400">
      {children}
    </li>
  )
}

const STATUS_STYLES = {
  Completed:
    'border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400',
  'In progress':
    'border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-400',
  Planned: 'border-slate-400/30 bg-slate-500/10 text-slate-600 dark:text-slate-400',
}

function Status({ status }) {
  if (!status) return null
  return (
    <span
      className={`rounded-full border px-2 py-0.5 text-[11px] font-medium ${
        STATUS_STYLES[status] ?? STATUS_STYLES.Planned
      }`}
    >
      {status}
    </span>
  )
}

function Links({ repo, demo, title }) {
  return (
    <div className="flex items-center gap-2">
      {repo && (
        <a
          href={repo}
          target="_blank"
          rel="noreferrer"
          aria-label={`${title} source code on GitHub`}
          className="grid size-9 place-items-center rounded-md text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
        >
          <GitHubIcon width={18} height={18} />
        </a>
      )}
      {demo && (
        <a
          href={demo}
          target="_blank"
          rel="noreferrer"
          aria-label={`${title} live demo`}
          className="grid size-9 place-items-center rounded-md text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
        >
          <ExternalIcon width={18} height={18} />
        </a>
      )}
    </div>
  )
}

function FeaturedCard({ p }) {
  return (
    <article className="reveal group grid gap-6 rounded-2xl border border-slate-200 p-6 transition-colors hover:border-accent-400/70 sm:p-7 dark:border-slate-800 dark:hover:border-accent-500/60">
      {p.image && (
        <img
          src={p.image}
          alt=""
          loading="lazy"
          className="aspect-[16/9] w-full rounded-xl border border-slate-200 object-cover dark:border-slate-800"
        />
      )}

      <div>
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2.5">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{p.title}</h3>
            <Status status={p.status} />
          </div>
          <Links repo={p.repo} demo={p.demo} title={p.title} />
        </div>

        <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{p.blurb}</p>

        {p.highlights?.length > 0 && (
          <ul className="mt-4 space-y-2">
            {p.highlights.map((h) => (
              <li
                key={h}
                className="flex gap-2.5 text-sm text-slate-600 dark:text-slate-400"
              >
                <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-accent-500" />
                {h}
              </li>
            ))}
          </ul>
        )}

        <ul className="mt-5 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </ul>
      </div>
    </article>
  )
}

function CompactCard({ p }) {
  return (
    <article className="reveal flex flex-col rounded-xl border border-slate-200 p-5 transition-colors hover:border-accent-400/70 dark:border-slate-800 dark:hover:border-accent-500/60">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-semibold text-slate-900 dark:text-white">{p.title}</h3>
        <Links repo={p.repo} demo={p.demo} title={p.title} />
      </div>
      <div className="mt-2">
        <Status status={p.status} />
      </div>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
        {p.blurb}
      </p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </ul>
    </article>
  )
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <Section id="projects" eyebrow="03 / Projects" title="Things I've built">
      {featured.length > 0 && (
        <div className="grid gap-6 md:grid-cols-2">
          {featured.map((p) => (
            <FeaturedCard key={p.title} p={p} />
          ))}
        </div>
      )}

      {rest.length > 0 && (
        <>
          <h3 className="reveal mt-14 mb-5 text-sm font-semibold tracking-wide text-slate-500 uppercase dark:text-slate-500">
            Other work
          </h3>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((p) => (
              <CompactCard key={p.title} p={p} />
            ))}
          </div>
        </>
      )}
    </Section>
  )
}
