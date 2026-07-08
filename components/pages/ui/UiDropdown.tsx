'use client'

import { useId, useRef, useState, type ReactNode } from 'react'

type UiDropdownProps = {
  trigger: ReactNode
  children: ReactNode
  align?: 'left' | 'right'
  className?: string
}

export default function UiDropdown({
  trigger,
  children,
  align = 'right',
  className = '',
}: UiDropdownProps) {
  const [open, setOpen] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const panelId = useId()

  const clearCloseTimer = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
  }

  const handleEnter = () => {
    clearCloseTimer()
    setOpen(true)
  }

  const handleLeave = () => {
    clearCloseTimer()
    closeTimer.current = setTimeout(() => setOpen(false), 140)
  }

  return (
    <div
      className={`uiHp__dropdown${className ? ` ${className}` : ''}${open ? ' uiHp__dropdown--open' : ''}`}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <span className="uiHp__dropdownTrigger" aria-controls={panelId} aria-expanded={open}>
        <span>{trigger}</span>
        <span className="uiHp__navCaret" aria-hidden="true" />
      </span>
      {open ? (
        <div
          id={panelId}
          className={`uiHp__dropdownPanel${align === 'left' ? ' uiHp__dropdownPanel--left' : ''} uiHp__dropdownPanel--open`}
        >
          {children}
        </div>
      ) : null}
    </div>
  )
}
