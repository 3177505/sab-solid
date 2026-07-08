'use client'

import { useCallback } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export function useUxCompare() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const compareOpen = searchParams.get('compare') === '1'

  const setCompare = useCallback(
    (open: boolean) => {
      const params = new URLSearchParams(searchParams.toString())
      if (open) params.set('compare', '1')
      else params.delete('compare')
      const qs = params.toString()
      router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false })
    },
    [pathname, router, searchParams],
  )

  const toggleCompare = useCallback(() => {
    setCompare(!compareOpen)
  }, [compareOpen, setCompare])

  const closeCompare = useCallback(() => {
    setCompare(false)
  }, [setCompare])

  return { compareOpen, toggleCompare, closeCompare }
}

export function isUxPrototypePath(pathname: string) {
  return pathname === '/ux' || pathname.startsWith('/ux/') || pathname === '/mobile/ux'
}
