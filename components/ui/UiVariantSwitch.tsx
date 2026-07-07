'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { Dictionary } from '@/content/copy'

type UiVariantSwitchProps = {
  dict: Dictionary['ui']
}

export default function UiVariantSwitch({ dict }: UiVariantSwitchProps) {
  const pathname = usePathname()
  const isClassic = pathname.includes('/ui/classic')
  const isPremium = pathname.includes('/ui/premium')

  return (
    <div className="uiVariantSwitch">
      <span className="uiVariantSwitch__label">{dict.switchLabel}</span>
      <Link
        href="/ui/classic"
        className={isClassic ? 'uiVariantSwitch__btn active' : 'uiVariantSwitch__btn'}
      >
        Classic
      </Link>
      <Link
        href="/ui/premium"
        className={isPremium ? 'uiVariantSwitch__btn active' : 'uiVariantSwitch__btn'}
      >
        Premium
      </Link>
    </div>
  )
}
