'use client'

import { useEffect } from 'react'

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value))
}

function swapAmount(progress: number, start: number, duration: number) {
  return clamp((progress - start) / duration, 0, 1)
}

export default function UiPathsColorSwap() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>('.uiHp--classic')
    const section = root?.querySelector<HTMLElement>('.uiHp__section--pathsScenarios')
    if (!root || !section) return

    let frame = 0

    const update = () => {
      const viewH = window.innerHeight
      const rect = section.getBoundingClientRect()
      const scrollY = window.scrollY

      const rangeStart = scrollY + rect.top - viewH * 0.88
      const rangeEnd = scrollY + rect.bottom - viewH * 0.22
      const progress = clamp((scrollY - rangeStart) / Math.max(rangeEnd - rangeStart, 1), 0, 1)

      const importerSwap = swapAmount(progress, 0, 0.52)
      const exporterSwap = swapAmount(progress, 0.48, 0.52)

      section.style.setProperty('--paths-swap-importer', importerSwap.toFixed(3))
      section.style.setProperty('--paths-swap-exporter', exporterSwap.toFixed(3))
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
      section.style.removeProperty('--paths-swap-importer')
      section.style.removeProperty('--paths-swap-exporter')
    }
  }, [])

  return null
}
