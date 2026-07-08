'use client'

import { useState } from 'react'
import { UX_HOMEPAGE_CONTENT as C } from '@/content/ux/homepage'

export default function UxMobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="uxBlock uxBlock--nav uxBlock--navMobile">
        <span className="uxBlock__logo">{C.nav.logo}</span>
        <button
          type="button"
          className="uxBlock__menuBtn"
          onClick={() => setOpen(true)}
          aria-expanded={open}
          aria-controls="ux-mobile-menu"
        >
          <span className="uxBlock__menuIcon" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          Menu
        </button>
        <span className="uxBlock__cta uxBlock__cta--nav">{C.nav.cta}</span>
      </div>

      {open ? (
        <>
          <button
            type="button"
            className="uxMobileMenu__backdrop"
            onClick={() => setOpen(false)}
            aria-label="Zavřít menu"
          />
          <nav id="ux-mobile-menu" className="uxMobileMenu" aria-label="Mobilní navigace">
            <div className="uxMobileMenu__header">
              <span className="uxBlock__logo">{C.nav.logo}</span>
              <button type="button" className="uxMobileMenu__close" onClick={() => setOpen(false)}>
                Zavřít
              </button>
            </div>

            <div className="uxMobileMenu__body">
              <span className="uxMobileMenu__link uxMobileMenu__link--tarf">
                <span className="uxBlock__badge">{C.nav.tarf.badge}</span>
                {C.nav.tarf.label}
              </span>

              {C.nav.menus.map((menu) =>
                menu.type === 'link' ? (
                  <span key={menu.label} className="uxMobileMenu__link">
                    {menu.label}
                  </span>
                ) : (
                  <div key={menu.label} className="uxMobileMenu__group">
                    <span className="uxMobileMenu__groupTitle">{menu.label}</span>
                    {menu.items.map((item) => (
                      <span key={item.label} className="uxMobileMenu__sublink">
                        {item.label}
                      </span>
                    ))}
                  </div>
                ),
              )}

              <div className="uxMobileMenu__footer">
                <span className="uxBlock__link">{C.nav.aside}</span>
                <span className="uxBlock__cta">{C.nav.cta}</span>
                <span className="uxBlock__cta uxBlock__cta--prostream">{C.nav.prostream.label}</span>
                <span className="uxBlock__lang" aria-label="Jazyk">
                  <span className="uxBlock__langCurrent">{C.nav.lang.current}</span>
                  {C.nav.lang.options
                    .filter((l) => l !== C.nav.lang.current)
                    .map((l) => (
                      <span key={l} className="uxBlock__langOption">
                        {l}
                      </span>
                    ))}
                </span>
              </div>
            </div>
          </nav>
        </>
      ) : null}
    </>
  )
}
