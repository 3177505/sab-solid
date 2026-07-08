'use client'

import { useUxCompare } from '@/components/pages/ux/useUxCompare'
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
      return (
        <div className="uxBlock uxBlock--nav">
          <span className="uxBlock__logo">{C.nav.logo}</span>
          <nav className="uxBlock__navLinks" aria-label="Hlavní navigace">
            {C.nav.links.map((link) => (
              <span key={link} className="uxBlock__navItem">
                {link}
              </span>
            ))}
          </nav>
          <div className="uxBlock__navEnd">
            <span className="uxBlock__muted">{C.nav.aside}</span>
            <span className="uxBlock__cta">{C.nav.cta}</span>
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
            <p className="uxBlock__muted">{C.hero.supporting}</p>
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
        <div
          className={`uxBlock__grid uxBlock__grid--services${mobile ? ' uxBlock__grid--stack' : ''}`}
        >
          {C.services.map((s) => (
            <div key={s.title} className="uxBlock__card">
              <h3 className="uxBlock__cardTitle">{s.title}</h3>
              <p className="uxBlock__body">{s.for}</p>
              <span className="uxBlock__cta">{s.cta}</span>
            </div>
          ))}
        </div>
      )

    case 'why':
      return (
        <div className={`uxBlock__grid uxBlock__grid--4${mobile ? ' uxBlock__grid--stack' : ''}`}>
          {C.why.map((w) => (
            <div key={w.title} className="uxBlock__card">
              <h3 className="uxBlock__cardTitle">{w.title}</h3>
              <p className="uxBlock__body">{w.body}</p>
            </div>
          ))}
        </div>
      )

    case 'process':
      return (
        <div className={`uxBlock__grid uxBlock__grid--3${mobile ? ' uxBlock__grid--stack' : ''}`}>
          {C.process.map((p) => (
            <div key={p.step} className="uxBlock__card">
              <span className="uxBlock__muted">{p.step}</span>
              <h3 className="uxBlock__cardTitle">{p.title}</h3>
              <p className="uxBlock__body">{p.body}</p>
            </div>
          ))}
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
        <div className="uxBlock uxBlock--row">
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
