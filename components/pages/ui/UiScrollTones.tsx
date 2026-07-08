'use client'

import { useEffect } from 'react'

const TONE_CLASS = /^uiHp--tone-/

export default function UiScrollTones() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>('.uiHp--classic')
    if (!root) return

    const sections = Array.from(
      root.querySelectorAll<HTMLElement>('.uiHp__section[data-tone]'),
    )

    let frame = 0

    const update = () => {
      const marker = window.scrollY + window.innerHeight * 0.42
      let activeTone: string | null = '0'

      for (const section of sections) {
        const rect = section.getBoundingClientRect()
        const top = rect.top + window.scrollY
        const bottom = top + rect.height

        if (top <= marker && bottom > marker) {
          activeTone = section.dataset.tone ?? '0'
          break
        }
      }

      Array.from(root.classList).forEach((cls) => {
        if (TONE_CLASS.test(cls)) root.classList.remove(cls)
      })

      root.classList.add(`uiHp--tone-${activeTone}`)
    }

    const onScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(() => {
        frame = 0
        update()
      })
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', update)

    return () => {
      if (frame) window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', update)
    }
  }, [])

  return null
}
