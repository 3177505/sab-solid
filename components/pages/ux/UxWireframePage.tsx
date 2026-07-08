'use client'

import { Suspense } from 'react'
import UxWireframe from '@/components/pages/ux/UxWireframe'
import { useUxCompare } from '@/components/pages/ux/useUxCompare'

function UxWireframePageInner({ mobile = false }: { mobile?: boolean }) {
  const { compareOpen } = useUxCompare()

  return (
    <article
      className={`uxPage uxPage--prototype presentationPage--full${compareOpen ? ' uxPage--compare' : ''}`}
    >
      <UxWireframe mobile={mobile} compareOpen={compareOpen} />
    </article>
  )
}

export default function UxWireframePage({ mobile = false }: { mobile?: boolean }) {
  return (
    <Suspense fallback={<article className="uxPage uxPage--prototype presentationPage--full" />}>
      <UxWireframePageInner mobile={mobile} />
    </Suspense>
  )
}
