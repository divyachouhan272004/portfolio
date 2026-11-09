import Section from './Section.jsx'
import { contact, profile, socials } from '../data/portfolio.js'
import { MailIcon, PhoneIcon, PinIcon, SocialIcon } from './Icons.jsx'

export default function Contact() {
  return (
    <Section id="contact" eyebrow="06 / Contact" title={contact.heading}>
      <div className="reveal rounded-2xl border border-slate-200 bg-slate-50/60 p-7 sm:p-10 dark:border-slate-800 dark:bg-slate-900/40">
        <p className="max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-400">
          {contact.body}
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2.5 rounded-lg bg-accent-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-accent-600/25 transition-colors hover:bg-accent-700"
          >
            <MailIcon width={18} height={18} />
            {profile.email}
          </a>

          {profile.phone && (
            <a
              href={`tel:${profile.phone.replace(/[^+\d]/g, '')}`}
              className="inline-flex items-center gap-2.5 rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-400 hover:bg-white dark:border-slate-700 dark:text-slate-200 dark:hover:border-slate-600 dark:hover:bg-slate-900"
            >
              <PhoneIcon width={18} height={18} />
              {profile.phone}
            </a>
          )}
        </div>

        {profile.location && (
          <p className="mt-5 inline-flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-500">
            <PinIcon width={16} height={16} />
            {profile.location}
          </p>
        )}

        <ul className="mt-8 flex flex-wrap items-center gap-2">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.url}
                target={s.url.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:border-accent-400 hover:text-accent-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-accent-500 dark:hover:text-accent-400"
              >
                <SocialIcon name={s.icon} width={16} height={16} />
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
