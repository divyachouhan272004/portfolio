import { profile } from '../data/portfolio.js'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8 dark:border-slate-800">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-3 px-5 text-xs text-slate-500 sm:flex-row sm:px-8 dark:text-slate-500">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}
        </p>
        <p className="font-mono">Built with React, Vite &amp; Tailwind CSS</p>
      </div>
    </footer>
  )
}
