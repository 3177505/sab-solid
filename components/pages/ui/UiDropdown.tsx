'use client'

import { useId, useState, type ReactNode } from 'react'

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
  const panelId = useId()

  return (
    <div
      className={`uiHp__dropdown${className ? ` ${className}` : ''}${open ? ' uiHp__dropdown--open' : ''}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <span className="uiHp__dropdownTrigger" aria-controls={panelId}>
        <span>{trigger}</span>
        <span className="uiHp__navCaret" aria-hidden="true" />
      </span>
      <div
        id={panelId}
        className={`uiHp__dropdownPanel${align === 'left' ? ' uiHp__dropdownPanel--left' : ''}${open ? ' uiHp__dropdownPanel--open' : ''}`}
        aria-hidden={!open}
      >
        {children}
      </div>
    </div>
  )
}
