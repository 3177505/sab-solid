'use client'

import type { Dictionary } from '@/content/copy'

type LanguageSwitcherProps = {
  labels: Dictionary['lang']
}

/** Dekorativní přepínač — EN zatím neaktivní (design placeholder). */
export default function LanguageSwitcher({ labels }: LanguageSwitcherProps) {
  return (
    <nav className="languageSwitcher" aria-label={labels.switchAria}>
      <span className="languageSwitcher__btn active" aria-current="page">
        {labels.cz}
      </span>
      <span className="languageSwitcher__btn languageSwitcher__btn--disabled" title="Později">
        {labels.en}
      </span>
    </nav>
  )
}
