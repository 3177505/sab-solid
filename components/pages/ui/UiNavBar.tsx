'use client'

import { useState } from 'react'
import { UX_HOMEPAGE_CONTENT as C } from '@/content/ux/homepage'
import UiLocaleDropdown from '@/components/pages/ui/UiLocaleDropdown'

type UiNavBarProps = {
  variant: 'classic' | 'premium'
}

export default function UiNavBar({ variant }: UiNavBarProps) {
  const [openMenu, setOpenMenu] = useState<string | null>(null)

  return (
    <div className={`uiHp__navShell${openMenu ? ' uiHp__navShell--open' : ''}`}>
      <div className="uiHp__navInner">
        <a href="/" className="uiHp__logo">
          <img src="/sab-logo.svg" alt={C.nav.logo} className="uiHp__logoImg" width={148} height={28} />
        </a>

        <nav className="uiHp__navLinks" aria-label="Hlavní navigace">
          <a href={C.nav.tarf.href} className="uiHp__navLink uiHp__navLink--tarf">
            {C.nav.tarf.label}
            <span className="uiHp__novinka">{C.nav.tarf.badge}</span>
          </a>
          {C.nav.menus.map((menu) =>
            menu.type === 'link' ? (
              <a key={menu.label} href={menu.href} className="uiHp__navLink">
                {menu.label}
              </a>
            ) : (
              <div
                key={menu.label}
                className={`uiHp__navDropdown${openMenu === menu.label ? ' uiHp__navDropdown--open' : ''}`}
                onMouseEnter={() => setOpenMenu(menu.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <span className="uiHp__navTrigger">
                  {menu.label}
                  <span className="uiHp__navCaret" aria-hidden="true" />
                </span>
                <div
                  className={`uiHp__navDropdownPanel${openMenu === menu.label ? ' uiHp__navDropdownPanel--open' : ''}`}
                  role="region"
                  aria-label={menu.label}
                  aria-hidden={openMenu !== menu.label}
                >
                  {menu.items.map((item) => (
                    <a key={item.label} href={item.href} className="uiHp__navDropdownLink">
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            ),
          )}
        </nav>

        <div className="uiHp__navEnd">
          {variant === 'premium' && (
            <>
              <a href="#" className="uiHp__navMuted">
                {C.nav.aside}
              </a>
              <a href="#" className="uiHp__btn uiHp__btn--primary uiHp__btn--sm">
                {C.nav.cta}
              </a>
              <a href={C.nav.prostream.href} className="uiHp__navMuted">
                {C.nav.prostream.label}
              </a>
            </>
          )}
          <UiLocaleDropdown />
        </div>
      </div>
    </div>
  )
}
