import { useEffect, useRef, useState } from 'react'

const STORAGE_KEY = 'portfolio-theme'

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved === 'light' || saved === 'dark') return saved
    } catch {
      /* storage unavailable — fall through */
    }
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
    }
    return 'dark'
  })

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', theme === 'dark')
    root.style.colorScheme = theme
    try {
      localStorage.setItem(STORAGE_KEY, theme)
    } catch {
      /* ignore */
    }
  }, [theme])

  return [theme, () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))]
}

/** Adds `is-visible` to elements with the `reveal` class as they scroll in. */
export function useReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll('.reveal')
    if (!('IntersectionObserver' in window)) {
      nodes.forEach((n) => n.classList.add('is-visible'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            io.unobserve(e.target)
          }
        })
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.08 },
    )
    nodes.forEach((n) => io.observe(n))
    return () => io.disconnect()
  }, [])
}

/** Which section id is currently in view. */
export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [ids])
  return active
}

/** Types out each word in `words`, one character at a time, then deletes it. */
export function useTypewriter(words, { type = 85, erase = 40, hold = 1600 } = {}) {
  const [text, setText] = useState('')
  const state = useRef({ i: 0, len: 0, erasing: false })

  useEffect(() => {
    if (!words.length) return
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setText(words[0])
      return
    }
    let timer
    const tick = () => {
      const s = state.current
      const word = words[s.i % words.length]
      if (!s.erasing) {
        s.len += 1
        setText(word.slice(0, s.len))
        if (s.len === word.length) {
          // A single role types out once and stays put — nothing to rotate to.
          if (words.length === 1) return
          s.erasing = true
          timer = setTimeout(tick, hold)
          return
        }
      } else {
        s.len -= 1
        setText(word.slice(0, s.len))
        if (s.len === 0) {
          s.erasing = false
          s.i += 1
        }
      }
      timer = setTimeout(tick, s.erasing ? erase : type)
    }
    timer = setTimeout(tick, type)
    return () => clearTimeout(timer)
  }, [words, type, erase, hold])

  return text
}
