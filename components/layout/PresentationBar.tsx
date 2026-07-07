'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { getPresentationStep } from '@/lib/presentation'

export default function PresentationBar() {
  const pathname = usePathname()
  const current = getPresentationStep(pathname)

  if (!current) return null

  const { step, index, prev, next, total } = current

  return (
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
  )
}
