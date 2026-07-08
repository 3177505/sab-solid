'use client'

import { useEffect } from 'react'

const BOTTOM_MARGIN = 160
const HERO_ASIDE_RELEASE_VIEWPORT_RATIO = 0.35

export default function UiDockScroll() {
  useEffect(() => {
    const ratesAside = document.querySelector<HTMLElement>('.uiHp__heroAside')
    const dock = document.querySelector<HTMLElement>('.uiHp__dock')
    const footer = document.querySelector<HTMLElement>('.uiHp__footer')
    const hero = document.querySelector<HTMLElement>('.uiHp__hero')
    if (!ratesAside && !dock) return

    let frame = 0

    const setRatesHidden = (hidden: boolean) => {
      ratesAside?.classList.toggle('uiHp__heroAside--hidden', hidden)
    }

    const setDockHidden = (hidden: boolean) => {
      dock?.classList.toggle('uiHp__dock--hidden', hidden)
    }

    const isInHeroSection = () => {
      if (!hero) return true
      const rect = hero.getBoundingClientRect()
      const viewH = window.innerHeight
      // Release the floating aside before hero fully leaves viewport.
      const releaseLine = viewH * HERO_ASIDE_RELEASE_VIEWPORT_RATIO
      return rect.bottom > releaseLine && rect.top < viewH
    }

    const update = () => {
      const y = window.scrollY
      const viewH = window.innerHeight
      const docH = document.documentElement.scrollHeight
      const nearPageEnd = y + viewH >= docH - BOTTOM_MARGIN
      const hasStartedScrolling = y > 0

      let footerVisible = false
      if (footer) {
        const rect = footer.getBoundingClientRect()
        footerVisible = rect.top < viewH - 80
      }

      const beforeFooter = nearPageEnd || footerVisible
      setDockHidden(beforeFooter)
      setRatesHidden(hasStartedScrolling || beforeFooter || !isInHeroSection())
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
