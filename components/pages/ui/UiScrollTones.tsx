'use client'

import { useEffect } from 'react'

const TONE_CLASS = /^uiHp--tone-/

const TONE_COLORS: Record<string, string> = {
  '0': '#ffffff',
  '1': '#c8e7f8',
  '2': '#eef3f6',
  '3': '#c8d8de',
  '4': '#b0c4cc',
  accent: '#285865',
}
const END_SECTION_COLOR = '#ffffff'

function parseHex(hex: string) {
  const normalized = hex.replace('#', '')
  return {
    r: parseInt(normalized.slice(0, 2), 16),
    g: parseInt(normalized.slice(2, 4), 16),
    b: parseInt(normalized.slice(4, 6), 16),
  }
}

function mixHex(from: string, to: string, amount: number) {
  const a = parseHex(from)
  const b = parseHex(to)
  const t = Math.min(1, Math.max(0, amount))
  const r = Math.round(a.r + (b.r - a.r) * t)
  const g = Math.round(a.g + (b.g - a.g) * t)
  const bl = Math.round(a.b + (b.b - a.b) * t)
  return `rgb(${r} ${g} ${bl})`
}

function toneColor(tone: string | undefined) {
  return TONE_COLORS[tone ?? '0'] ?? TONE_COLORS['0']
}

export default function UiScrollTones() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>('.uiHp--classic')
    const scrollBgEl = document.querySelector<HTMLElement>('.uiHp__scrollBg')
    if (!root || !scrollBgEl) return

    const sections = Array.from(
      root.querySelectorAll<HTMLElement>('.uiHp__section[data-tone]'),
    )

    let frame = 0

    const update = () => {
      const viewH = window.innerHeight
      const docH = document.documentElement.scrollHeight
      const nearPageEnd = window.scrollY + viewH >= docH - 160

      if (nearPageEnd) {
        scrollBgEl.style.backgroundColor = END_SECTION_COLOR
        Array.from(root.classList).forEach((cls) => {
          if (TONE_CLASS.test(cls)) root.classList.remove(cls)
        })
        return
      }

      const focal = window.scrollY + window.innerHeight * 0.38
      let activeTone: string | null = '0'
      let scrollBgColor = TONE_COLORS['0']

      for (let index = 0; index < sections.length; index += 1) {
        const section = sections[index]
        const rect = section.getBoundingClientRect()
        const top = rect.top + window.scrollY
        const bottom = top + rect.height
        const tone = section.dataset.tone ?? '0'

        if (focal < top || focal >= bottom) continue

        activeTone = tone
        const progress = (focal - top) / Math.max(rect.height, 1)
        const blendSpan = 0.38
        const nextSection = sections[index + 1]
        const prevSection = sections[index - 1]

        if (progress > 1 - blendSpan && nextSection) {
          const nextTone = nextSection.dataset.tone ?? '0'
          const blend = (progress - (1 - blendSpan)) / blendSpan
          scrollBgColor = mixHex(toneColor(tone), toneColor(nextTone), blend)
        } else if (progress < blendSpan && prevSection) {
          const prevTone = prevSection.dataset.tone ?? '0'
          const blend = (blendSpan - progress) / blendSpan
          scrollBgColor = mixHex(toneColor(tone), toneColor(prevTone), blend)
        } else {
          scrollBgColor = toneColor(tone)
        }

        break
      }

      scrollBgEl.style.backgroundColor = scrollBgColor

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
