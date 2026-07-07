'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

type InfoHintProps = {
  text: string
  label?: string
}

export default function InfoHint({ text, label = 'Info' }: InfoHintProps) {
  const triggerRef = useRef<HTMLButtonElement>(null)
  const [open, setOpen] = useState(false)
  const [placement, setPlacement] = useState<'left' | 'right'>('right')

  const updatePlacement = useCallback(() => {
    const el = triggerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const popupWidth = 280
    const spaceRight = window.innerWidth - rect.right
    setPlacement(spaceRight < popupWidth + 24 ? 'left' : 'right')
  }, [])

  useEffect(() => {
    if (!open) return
    updatePlacement()
    window.addEventListener('resize', updatePlacement)
    return () => window.removeEventListener('resize', updatePlacement)
  }, [open, updatePlacement])

  return (
    <span
      className="infoHint"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
    >
      <button
        ref={triggerRef}
        type="button"
        className="infoHint__trigger"
        aria-label={label}
        aria-expanded={open}
      >
        i
      </button>
      {open && (
        <span
          className={`infoHint__popup infoHint__popup--${placement}`}
          role="tooltip"
        >
          {text}
        </span>
      )}
    </span>
  )
}
