'use client'

import { useEffect } from 'react'

const SCROLL_DELTA = 10
const TOP_REVEAL = 48
const BOTTOM_MARGIN = 160

export default function UiDockScroll() {
  useEffect(() => {
    const dock = document.querySelector<HTMLElement>('.uiHp__dock')
    const footer = document.querySelector<HTMLElement>('.uiHp__footer')
    if (!dock) return

    let lastY = window.scrollY
    let frame = 0

    const setHidden = (hidden: boolean) => {
      dock.classList.toggle('uiHp__dock--hidden', hidden)
    }

    const update = () => {
      const y = window.scrollY
      const viewH = window.innerHeight
      const docH = document.documentElement.scrollHeight
      const nearPageEnd = y + viewH >= docH - BOTTOM_MARGIN

      let footerVisible = false
      if (footer) {
        const rect = footer.getBoundingClientRect()
        footerVisible = rect.top < viewH - 80
      }

      if (y <= TOP_REVEAL) {
        setHidden(false)
      } else if (nearPageEnd || footerVisible) {
        setHidden(true)
      } else if (y > lastY + SCROLL_DELTA) {
        setHidden(true)
      } else if (y < lastY - SCROLL_DELTA) {
        setHidden(false)
      }

      lastY = y
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
