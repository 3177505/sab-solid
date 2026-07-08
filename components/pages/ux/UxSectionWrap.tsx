'use client'

import { useCallback, useState, type ReactNode } from 'react'

type UxSectionWrapProps = {
  children: ReactNode
  num: string
  hint: string
  compareOpen: boolean
  className?: string
  as?: 'section' | 'header'
  dataSection?: string
}

export function UxSectionWrap({
  children,
  num,
  hint,
  compareOpen,
  className = '',
  as = 'section',
  dataSection,
}: UxSectionWrapProps) {
  const [cursor, setCursor] = useState<{ x: number; y: number } | null>(null)
  const Tag = as

  const onMove = useCallback(
    (e: React.MouseEvent) => {
      if (compareOpen) return
      setCursor({ x: e.clientX, y: e.clientY })
    },
    [compareOpen],
  )

  const onLeave = useCallback(() => setCursor(null), [])

  return (
    <Tag
      className={className}
      data-section={dataSection}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {compareOpen && (
        <div className="uxSection__info uxSection__info--pinned">
          <span className="uxSection__num">{num}</span>
          <span className="uxSection__hint">{hint}</span>
        </div>
      )}

      {!compareOpen && cursor && (
        <div
          className="uxSection__cursorHint"
          style={{ left: cursor.x + 14, top: cursor.y + 14 }}
          aria-hidden="true"
        >
          <span className="uxSection__num">{num}</span>
          <span className="uxSection__hint">{hint}</span>
        </div>
      )}

      {children}
    </Tag>
  )
}
