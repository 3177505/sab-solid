'use client'

import { useEffect } from 'react'

function isSectionInView(section: HTMLElement) {
  const rect = section.getBoundingClientRect()
  return rect.top < window.innerHeight * 0.88 && rect.bottom > 0
}

export default function UiScrollReveal() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>('.uiHp')
    if (!root) return

    const sections = Array.from(root.querySelectorAll<HTMLElement>('.uiHp__section'))
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      sections.forEach((section) => section.classList.add('uiHp__section--revealed'))
      return
    }

    root.classList.add('uiHp--motion-ready')

    const reveal = (section: HTMLElement) => {
      section.classList.add('uiHp__section--revealed')
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          reveal(entry.target as HTMLElement)
          observer.unobserve(entry.target)
        })
      },
      {
        root: null,
        rootMargin: '0px 0px -8% 0px',
        threshold: 0.08,
      },
    )

    sections.forEach((section) => {
      if (section.classList.contains('uiHp__hero') || isSectionInView(section)) {
        reveal(section)
        return
      }

      observer.observe(section)
    })

    return () => {
      observer.disconnect()
      root.classList.remove('uiHp--motion-ready')
    }
  }, [])

  return null
}
