'use client'

import { useRef, useState } from 'react'
import { UX_HOMEPAGE_CONTENT as C } from '@/content/ux/homepage'
import UiLocaleDropdown from '@/components/pages/ui/UiLocaleDropdown'

type UiNavBarProps = {
  variant: 'classic' | 'premium'
}

export default function UiNavBar({ variant }: UiNavBarProps) {
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const clearCloseTimer = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
  }

  const open = (label: string) => {
    clearCloseTimer()
    setOpenMenu(label)
  }

  const scheduleClose = () => {
    clearCloseTimer()
    closeTimer.current = setTimeout(() => setOpenMenu(null), 140)
  }

  return (
    <div
      className={`uiHp__navShell${openMenu ? ' uiHp__navShell--open' : ''}`}
      onMouseLeave={scheduleClose}
      onMouseEnter={clearCloseTimer}
    >
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
                onMouseEnter={() => open(menu.label)}
              >
                <span className="uiHp__navTrigger">
                  {menu.label}
                  <span className="uiHp__navCaret" aria-hidden="true" />
                </span>
                {openMenu === menu.label ? (
                  <div className="uiHp__navDropdownPanel" role="region" aria-label={menu.label}>
                    {menu.items.map((item) => (
                      <a key={item.label} href={item.href} className="uiHp__navDropdownLink">
                        {item.label}
                      </a>
                    ))}
                  </div>
                ) : null}
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
