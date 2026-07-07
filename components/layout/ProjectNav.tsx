'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { Dictionary } from '@/content/copy'
import LanguageSwitcher from '@/components/languageSwitcher/LanguageSwitcher'

type ProjectNavProps = {
  nav: Dictionary['nav']
  lang: Dictionary['lang']
}

const links = [
  { key: 'hub', path: '/' },
  { key: 'analysis', path: '/analysis' },
  { key: 'ux', path: '/ux' },
  { key: 'uiClassic', path: '/ui/classic' },
  { key: 'uiPremium', path: '/ui/premium' },
  { key: 'tokens', path: '/tokens' },
  { key: 'copy', path: '/copy' },
] as const

export default function ProjectNav({ nav, lang }: ProjectNavProps) {
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/'
    return pathname.startsWith(path)
  }

  return (
    <header className="projectNav">
      <div className="projectNav__inner">
        <Link href="/" className="projectNav__brand">
          SAB <span>Solid</span>
        </Link>

        <nav className="projectNav__links" aria-label={nav.ariaLabel}>
          {links.map(({ key, path }) => (
            <Link
              key={key}
              href={path}
              className={isActive(path) ? 'projectNav__link active' : 'projectNav__link'}
            >
              {nav[key]}
            </Link>
          ))}
          <a
            href="https://www.sab.cz/"
            target="_blank"
            rel="noopener noreferrer"
            className="projectNav__link projectNav__link--external"
          >
            {nav.external} ↗
          </a>
        </nav>

        <LanguageSwitcher labels={lang} />
      </div>
    </header>
  )
}
