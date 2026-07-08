'use client'

import { useUxCompare } from '@/components/pages/ux/useUxCompare'
import UxMobileNav from '@/components/pages/ux/UxMobileNav'
import { UxSectionWrap } from '@/components/pages/ux/UxSectionWrap'
import {
  UX_HOMEPAGE_CONTENT as C,
  UX_HOMEPAGE_SECTIONS,
  type UxHomeSection,
} from '@/content/ux/homepage'

type UxWireframeProps = {
  mobile?: boolean
  compareOpen?: boolean
}

export default function UxWireframe({ mobile = false, compareOpen: compareOpenProp }: UxWireframeProps) {
  const { compareOpen: compareOpenHook } = useUxCompare()
  const compareOpen = compareOpenProp ?? compareOpenHook

  return (
    <div className={`uxWireframe${mobile ? ' uxWireframe--mobile' : ''}`}>
      {UX_HOMEPAGE_SECTIONS.map((section, index) => (
        <UxSection
          key={section.id}
          section={section}
          index={index}
          mobile={mobile}
          compareOpen={compareOpen}
        />
      ))}
    </div>
  )
}

function UxSection({
  section,
  index,
  mobile,
  compareOpen,
}: {
  section: UxHomeSection
  index: number
  mobile?: boolean
  compareOpen: boolean
}) {
  const num = String(index + 1).padStart(2, '0')
  const isNav = section.id === 'nav'

  if (isNav) {
    return (
      <UxSectionWrap
        as="header"
        className={`uxNav${compareOpen ? ' uxNav--compare' : ''}`}
        dataSection={section.id}
        num={num}
        hint={section.hint}
        compareOpen={compareOpen}
      >
        <UxSectionBody section={section} mobile={mobile} />
      </UxSectionWrap>
    )
  }

  return (
    <UxSectionWrap
      className={[
        'uxSection',
        compareOpen ? 'uxSection--compare' : '',
      ]
        .filter(Boolean)
        .join(' ')}
      dataSection={section.id}
      num={num}
      hint={section.hint}
      compareOpen={compareOpen}
    >
      <UxSectionBody section={section} mobile={mobile} />
    </UxSectionWrap>
  )
}

function UxSectionBody({ section, mobile }: { section: UxHomeSection; mobile?: boolean }) {
  switch (section.id) {
    case 'nav':
      if (mobile) {
        return <UxMobileNav />
      }

      return (
        <div className="uxBlock uxBlock--nav">
          <span className="uxBlock__logo">{C.nav.logo}</span>
          <nav className="uxBlock__navLinks" aria-label="Hlavní navigace">
            <span className="uxBlock__navItem uxBlock__navItem--tarf">
              <span className="uxBlock__badge">{C.nav.tarf.badge}</span>
              {C.nav.tarf.label}
            </span>
            {C.nav.links.map((link) => (
              <span key={link} className="uxBlock__navItem">
                {link}
              </span>
            ))}
          </nav>
          <div className="uxBlock__navEnd">
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
      )

    case 'hero':
      return (
        <div className={`uxBlock uxBlock--hero${mobile ? ' uxBlock--stack' : ''}`}>
          <div className="uxBlock__heroCopy">
            <h1 className="uxBlock__headline">{C.hero.headline}</h1>
            <p className="uxBlock__sub">{C.hero.subheadline}</p>
            <div className="uxBlock__ctaRow">
              <span className="uxBlock__cta">{C.hero.primaryCta}</span>
              <span className="uxBlock__cta">{C.hero.secondaryCta}</span>
            </div>
          </div>
          <div className="uxBlock__heroAside">
            <div className="uxBlock__rates">
              <p className="uxBlock__cardTitle">Aktuální kurzy</p>
              {C.hero.rates.map((r) => (
                <div key={r.pair} className="uxBlock__rateRow">
                  <span>{r.pair}</span>
                  <span>{r.value}</span>
                </div>
              ))}
              <span className="uxBlock__cta">{C.hero.ratesNote}</span>
            </div>
            {!mobile && (
              <div className="uxBlock__visual">
                <span className="uxBlock__muted">{C.hero.visualNote}</span>
              </div>
            )}
          </div>
        </div>
      )

    case 'trust':
      return (
        <div className="uxBlock uxBlock--strip">
          {C.trust.map((item) => (
            <span key={item} className="uxBlock__stripItem">
              {item}
            </span>
          ))}
        </div>
      )

    case 'problem':
      return (
        <div className="uxBlock">
          <h2 className="uxBlock__sectionTitle">{C.problem.headline}</h2>
          <div className={`uxBlock__grid${mobile ? ' uxBlock__grid--stack' : ''}`}>
            {C.problem.scenarios.map((s) => (
              <div key={s.tag} className="uxBlock__card">
                <span className="uxBlock__tag">{s.tag}</span>
                <p className="uxBlock__body">{s.text}</p>
                <span className="uxBlock__cta">{s.cta}</span>
              </div>
            ))}
          </div>
        </div>
      )

    case 'paths':
      return (
        <div className={`uxBlock__grid${mobile ? ' uxBlock__grid--stack' : ''}`}>
          {C.paths.map((p) => (
            <div key={p.title} className="uxBlock__card">
              <h3 className="uxBlock__cardTitle">{p.title}</h3>
              <p className="uxBlock__body">{p.body}</p>
              <span className="uxBlock__cta">{p.cta}</span>
            </div>
          ))}
        </div>
      )

    case 'forwardFlow':
      return (
        <div className="uxBlock">
          <h2 className="uxBlock__sectionTitle">{C.forwardFlow.headline}</h2>
          <p className="uxBlock__body">{C.forwardFlow.lead}</p>
          <div className={`uxBlock__flow${mobile ? ' uxBlock__flow--stack' : ''}`}>
            {C.forwardFlow.steps.map((s) => (
              <div key={s.num} className="uxBlock__flowStep">
                <span className="uxBlock__flowNum">{s.num}</span>
                <span className="uxBlock__body">{s.label}</span>
                {'note' in s && s.note ? (
                  <span className="uxBlock__muted">{s.note}</span>
                ) : null}
              </div>
            ))}
          </div>
          <ul className="uxBlock__bullets">
            {C.forwardFlow.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          <span className="uxBlock__cta">{C.forwardFlow.cta}</span>
        </div>
      )

    case 'forward':
      return (
        <div className={`uxBlock uxBlock--forward${mobile ? '' : ' uxBlock--split'}`}>
          <div>
            <p className="uxBlock__muted">{C.forward.anchor}</p>
            <h2 className="uxBlock__sectionTitle">{C.forward.headline}</h2>
            <p className="uxBlock__body">{C.forward.lead}</p>
            <span className="uxBlock__cta">{C.forward.cta}</span>
          </div>
          <div className="uxBlock__card">
            <p className="uxBlock__cardTitle">Příklad: importér</p>
            <ol className="uxBlock__steps">
              {C.forward.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            <p className="uxBlock__body">{C.forward.contrast}</p>
          </div>
        </div>
      )

    case 'services':
      return (
        <div className="uxBlock">
          <h2 className="uxBlock__sectionTitle">{C.services.headline}</h2>
          <div
            className={`uxBlock__grid uxBlock__grid--services${mobile ? ' uxBlock__grid--stack' : ''}`}
          >
            {C.services.items.map((s) => (
              <div
                key={s.title}
                className={`uxBlock__card${'featured' in s && s.featured ? ' uxBlock__card--featured' : ''}`}
              >
                {'badge' in s && s.badge ? (
                  <span className="uxBlock__badge">{s.badge}</span>
                ) : null}
                <h3 className="uxBlock__cardTitle">{s.title}</h3>
                {'for' in s && s.for ? <p className="uxBlock__body">{s.for}</p> : null}
                {'cta' in s && s.cta ? <span className="uxBlock__cta">{s.cta}</span> : null}
              </div>
            ))}
          </div>
          <span className="uxBlock__cta">{C.services.cta}</span>
        </div>
      )

    case 'why':
      return (
        <div className="uxBlock">
          <h2 className="uxBlock__sectionTitle">{C.why.headline}</h2>
          <div className={`uxBlock__grid uxBlock__grid--3${mobile ? ' uxBlock__grid--stack' : ''}`}>
            {C.why.items.map((w) => (
              <div key={w.title} className="uxBlock__card">
                <h3 className="uxBlock__cardTitle">{w.title}</h3>
                {'body' in w && w.body ? <p className="uxBlock__body">{w.body}</p> : null}
              </div>
            ))}
          </div>
          <span className="uxBlock__cta">{C.why.cta}</span>
        </div>
      )

    case 'process':
      return (
        <div className="uxBlock">
          <h2 className="uxBlock__sectionTitle">{C.process.headline}</h2>
          <div className={`uxBlock__grid uxBlock__grid--3${mobile ? ' uxBlock__grid--stack' : ''}`}>
            {C.process.steps.map((p) => (
              <div key={p.step} className="uxBlock__card">
                <span className="uxBlock__muted">{p.step}</span>
                <h3 className="uxBlock__cardTitle">{p.title}</h3>
                <p className="uxBlock__body">{p.body}</p>
              </div>
            ))}
          </div>
          <span className="uxBlock__cta">{C.process.cta}</span>
        </div>
      )

    case 'proof':
      return (
        <div className="uxBlock">
          <h2 className="uxBlock__sectionTitle">{C.proof.headline}</h2>
          <div className={`uxBlock__grid${mobile ? ' uxBlock__grid--stack' : ''}`}>
            {C.proof.quotes.map((q) => (
              <figure key={q.company} className="uxBlock__card">
                <span className="uxBlock__tag">{q.tag}</span>
                <blockquote className="uxBlock__quoteText">
                  <p>„{q.text}"</p>
                </blockquote>
                <figcaption className="uxBlock__muted">
                  {q.author}
                  {q.role ? `, ${q.role}` : ''} — {q.company}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      )

    case 'lead':
      return (
        <div className={`uxBlock uxBlock--form${mobile ? ' uxBlock--stack' : ''}`}>
          <div>
            <h2 className="uxBlock__sectionTitle">{C.lead.headline}</h2>
            <p className="uxBlock__body">{C.lead.sub}</p>
            <div className="uxBlock__fields">
              {C.lead.fields.map((field) => (
                <span key={field} className="uxBlock__field">
                  {field}
                </span>
              ))}
            </div>
            <span className="uxBlock__cta">{C.lead.cta}</span>
          </div>
          <aside className="uxBlock__card">
            <p className="uxBlock__cardTitle">{C.lead.phone}</p>
            <p className="uxBlock__muted">{C.lead.phoneLabel}</p>
          </aside>
        </div>
      )

    case 'newsletter':
      return (
        <div className={`uxBlock uxBlock--row${mobile ? ' uxBlock--rowStack' : ''}`}>
          <div>
            <h3 className="uxBlock__cardTitle">{C.newsletter.headline}</h3>
            <p className="uxBlock__body">{C.newsletter.body}</p>
          </div>
          <span className="uxBlock__cta">{C.newsletter.cta}</span>
        </div>
      )

    case 'footer':
      return (
        <footer className="uxBlock uxBlock--footer">
          <div className={`uxBlock__footerGrid${mobile ? ' uxBlock__footerGrid--stack' : ''}`}>
            {C.footer.columns.map((col) => (
              <div key={col.title} className="uxBlock__footerCol">
                <h3 className="uxBlock__footerTitle">{col.title}</h3>
                <ul className="uxBlock__footerList">
                  {col.links.map((link) => (
                    <li key={link}>
                      <span>{link}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="uxBlock__footerBottom">
            <div className="uxBlock__footerSocial">
              {C.footer.social.map((s) => (
                <span key={s.label}>{s.label}</span>
              ))}
            </div>
            <div className="uxBlock__footerLegal">
              {C.footer.legal.map((l) => (
                <span key={l}>{l}</span>
              ))}
            </div>
            <p className="uxBlock__muted">{C.footer.aside}</p>
          </div>
        </footer>
      )

    default:
      return null
  }
}
