import { profile, socials } from '../data/portfolio.js'
import { useTypewriter } from '../hooks.js'
import { ArrowDownIcon, DocIcon, MailIcon, PinIcon, SocialIcon } from './Icons.jsx'

export default function Hero() {
  const typed = useTypewriter(profile.roles)

  return (
    <section id="top" className="relative overflow-hidden">
      {/* Background wash */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 size-[36rem] -translate-x-1/2 rounded-full bg-accent-400/15 blur-3xl dark:bg-accent-600/20" />
        <div className="dot-grid absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white dark:to-slate-950" />
      </div>

      <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center px-5 pt-28 pb-20 sm:px-8">
        {profile.availability && (
          <p className="mb-7 inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1.5 text-xs font-medium text-slate-600 backdrop-blur dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-300">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            {profile.availability}
          </p>
        )}

        <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-12">
          <div className="min-w-0 flex-1">
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl dark:text-white">
              {profile.name}
            </h1>

            <p className="mt-4 font-mono text-lg text-accent-600 sm:text-2xl dark:text-accent-400">
              {typed}
              <span className="caret ml-0.5 inline-block w-0.5 bg-accent-500 align-middle" />
            </p>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-400">
              {profile.tagline}
            </p>

            {profile.location && (
              <p className="mt-5 inline-flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-500">
                <PinIcon width={16} height={16} />
                {profile.location}
              </p>
            )}

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg bg-accent-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-accent-600/25 transition-colors hover:bg-accent-700"
              >
                View my work
                <ArrowDownIcon width={16} height={16} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-400 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:border-slate-600 dark:hover:bg-slate-900"
              >
                <MailIcon width={16} height={16} />
                Get in touch
              </a>
              {profile.resumeUrl && (
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                >
                  <DocIcon width={16} height={16} />
                  Resume
                </a>
              )}
            </div>

            <ul className="mt-9 flex items-center gap-2">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.url}
                    target={s.url.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    aria-label={s.label}
                    title={s.label}
                    className="grid size-10 place-items-center rounded-lg border border-slate-200 text-slate-500 transition-colors hover:border-accent-400 hover:text-accent-600 dark:border-slate-800 dark:text-slate-400 dark:hover:border-accent-500 dark:hover:text-accent-400"
                  >
                    <SocialIcon name={s.icon} width={18} height={18} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {profile.avatar && (
            <div className="shrink-0">
              <img
                src={profile.avatar}
                alt={profile.name}
                width={224}
                height={224}
                className="size-40 rounded-2xl object-cover ring-1 ring-slate-200 sm:size-56 dark:ring-slate-800"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
