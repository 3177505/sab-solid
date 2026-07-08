'use client'

import { useEffect } from 'react'

export default function UiScrollReveal() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>('.uiHp--classic')
    if (!root) return

    const sections = Array.from(root.querySelectorAll<HTMLElement>('.uiHp__section'))
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      sections.forEach((section) => section.classList.add('uiHp__section--revealed'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('uiHp__section--revealed')
          observer.unobserve(entry.target)
        })
      },
      {
        root: null,
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.1,
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return null
}
