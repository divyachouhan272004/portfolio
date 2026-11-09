export default function Section({ id, eyebrow, title, children, className = '' }) {
  return (
    <section id={id} className={`scroll-mt-24 py-20 sm:py-28 ${className}`}>
      <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
        <header className="reveal mb-12">
          {eyebrow && (
            <p className="mb-3 font-mono text-xs tracking-[0.2em] text-accent-600 uppercase dark:text-accent-400">
              {eyebrow}
            </p>
          )}
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            {title}
          </h2>
          <div className="mt-5 h-px w-full bg-gradient-to-r from-accent-500/60 via-slate-200 to-transparent dark:via-slate-800" />
        </header>
        {children}
      </div>
    </section>
  )
}
