'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Suspense } from 'react'
import UxComparePanel from '@/components/pages/ux/UxComparePanel'
import { isUxPrototypePath, useUxCompare } from '@/components/pages/ux/useUxCompare'
import { getPresentationStep } from '@/lib/presentation'

function PresentationBarInner() {
  const pathname = usePathname()
  const current = getPresentationStep(pathname)
  const { compareOpen, toggleCompare } = useUxCompare()
  const showCompare = isUxPrototypePath(pathname)

  if (!current) return null

  const { step, index, prev, next, total } = current

  return (
    <>
      <header className="presentationBar">
        <div className="presentationBar__inner">
          {prev ? (
            <Link href={prev.path} className="presentationBar__arrow" aria-label={`Předchozí: ${prev.title}`}>
              ←
            </Link>
          ) : (
            <span className="presentationBar__arrow presentationBar__arrow--disabled" aria-hidden="true">
              ←
            </span>
          )}

          <div className="presentationBar__title">
            <span className="presentationBar__name">{step.title}</span>
            <span className="presentationBar__step">
              {index + 1} / {total}
            </span>
            {showCompare && (
              <button
                type="button"
                className={`presentationBar__compare${compareOpen ? ' presentationBar__compare--active' : ''}`}
                onClick={toggleCompare}
                aria-pressed={compareOpen}
              >
                Porovnání s předchozí verzí sab.cz ↗
              </button>
            )}
          </div>

          {next ? (
            <Link href={next.path} className="presentationBar__arrow" aria-label={`Další: ${next.title}`}>
              →
            </Link>
          ) : (
            <span className="presentationBar__arrow presentationBar__arrow--disabled" aria-hidden="true">
              →
            </span>
          )}
        </div>
      </header>
      {showCompare && <UxComparePanel open={compareOpen} onClose={toggleCompare} />}
    </>
  )
}

function PresentationBarFallback() {
  return (
    <header className="presentationBar">
      <div className="presentationBar__inner">
        <span className="presentationBar__arrow presentationBar__arrow--disabled" aria-hidden="true">
          ←
        </span>
        <div className="presentationBar__title">
          <span className="presentationBar__name">…</span>
        </div>
        <span className="presentationBar__arrow presentationBar__arrow--disabled" aria-hidden="true">
          →
        </span>
      </div>
    </header>
  )
}

export default function PresentationBar() {
  return (
    <Suspense fallback={<PresentationBarFallback />}>
      <PresentationBarInner />
    </Suspense>
  )
}
