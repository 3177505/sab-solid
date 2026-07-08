'use client'

import { useLayoutEffect, useRef, useState, type CSSProperties } from 'react'
import { LANG_LABELS, UX_HOMEPAGE_CONTENT as C } from '@/content/ux/homepage'

type UiNavBarProps = {
  variant: 'classic' | 'premium'
}

type DropdownPanelPosition = {
  offset: number
}

const LOCALE_KEY = '__locale__'

export default function UiNavBar({ variant }: UiNavBarProps) {
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [panelPosition, setPanelPosition] = useState<DropdownPanelPosition | null>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const navShellRef = useRef<HTMLDivElement>(null)
  const localeTriggerRef = useRef<HTMLDivElement>(null)
  const triggerRefs = useRef<Record<string, HTMLDivElement | null>>({})

  const activeMenu = C.nav.menus.find(
    (menu) => menu.type === 'dropdown' && menu.label === openMenu,
  )

  const clearCloseTimer = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
  }

  const measurePanelPosition = (key: string) => {
    const shell = navShellRef.current
    if (!shell) return

    const trigger =
      key === LOCALE_KEY
        ? localeTriggerRef.current?.querySelector<HTMLElement>('.uiHp__dropdownTrigger')
        : triggerRefs.current[key]?.querySelector<HTMLElement>('.uiHp__navTrigger')

    if (!trigger) return

    const shellRect = shell.getBoundingClientRect()
    const triggerRect = trigger.getBoundingClientRect()

    setPanelPosition({
      offset: triggerRect.left - shellRect.left,
    })
  }

  const open = (label: string) => {
    clearCloseTimer()
    setOpenMenu(label)
    requestAnimationFrame(() => measurePanelPosition(label))
  }

  const scheduleClose = () => {
    clearCloseTimer()
    closeTimer.current = setTimeout(() => {
      setOpenMenu(null)
      setPanelPosition(null)
    }, 140)
  }

  useLayoutEffect(() => {
    if (!openMenu) {
      setPanelPosition(null)
      return
    }

    measurePanelPosition(openMenu)

    const handleResize = () => measurePanelPosition(openMenu)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [openMenu])

  return (
    <div
      ref={navShellRef}
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
                ref={(node) => {
                  triggerRefs.current[menu.label] = node
                }}
                className={`uiHp__navDropdown${openMenu === menu.label ? ' uiHp__navDropdown--open' : ''}`}
                onMouseEnter={() => open(menu.label)}
              >
                <span className="uiHp__navTrigger">
                  {menu.label}
                  <span className="uiHp__navCaret" aria-hidden="true" />
                </span>
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
          <div
            ref={localeTriggerRef}
            className={`uiHp__dropdown uiHp__dropdown--locale${openMenu === LOCALE_KEY ? ' uiHp__dropdown--open' : ''}`}
            onMouseEnter={() => open(LOCALE_KEY)}
          >
            <span className="uiHp__dropdownTrigger" aria-expanded={openMenu === LOCALE_KEY}>
              <span>{LANG_LABELS[C.nav.lang.current] ?? C.nav.lang.current}</span>
              <span className="uiHp__navCaret" aria-hidden="true" />
            </span>
          </div>
        </div>
      </div>

      {openMenu && panelPosition ? (
        <div
          className="uiHp__navDropdownPanel"
          role="region"
          aria-label={openMenu === LOCALE_KEY ? 'Jazyk' : activeMenu?.label}
          style={
            {
              '--nav-dropdown-offset': `${panelPosition.offset}px`,
            } as CSSProperties
          }
        >
          <div className="uiHp__navDropdownPanelInner">
            {openMenu === LOCALE_KEY
              ? C.nav.lang.options
                  .filter((code) => code !== C.nav.lang.current)
                  .map((code) => (
                    <button key={code} type="button" className="uiHp__navDropdownOption" disabled>
                      {LANG_LABELS[code] ?? code}
                    </button>
                  ))
              : activeMenu?.type === 'dropdown'
                ? activeMenu.items.map((item) => (
                    <a key={item.label} href={item.href} className="uiHp__navDropdownLink">
                      {item.label}
                    </a>
                  ))
                : null}
          </div>
        </div>
      ) : null}
    </div>
  )
}
