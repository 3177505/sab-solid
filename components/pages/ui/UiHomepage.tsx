import { UX_HOMEPAGE_CONTENT as C } from '@/content/ux/homepage'
import UiNavBar from '@/components/pages/ui/UiNavBar'
import UiWhySlider from '@/components/pages/ui/UiWhySlider'
import UiDockScroll from '@/components/pages/ui/UiDockScroll'
import UiScrollTones from '@/components/pages/ui/UiScrollTones'
import UiPathsColorSwap from '@/components/pages/ui/UiPathsColorSwap'
import UiScrollReveal from '@/components/pages/ui/UiScrollReveal'
import UiTrustSection from '@/components/pages/ui/UiTrustSection'
import LiquidGradient from '@/components/ui/LiquidGradient'

type UiHomepageProps = {
  variant?: 'classic' | 'premium'
}

function sectionTone(variant: UiHomepageProps['variant'], tone: string) {
  return variant === 'classic' ? { 'data-tone': tone } : {}
}

function scenarioPathClass(tag: string) {
  if (tag === 'Importér') return 'uiHp__card--pathImporter'
  if (tag === 'Exportér') return 'uiHp__card--pathExporter'
  return ''
}

const footerLinkColumns = C.footer.columns.slice(0, -1)
const footerContactColumn = C.footer.columns[C.footer.columns.length - 1]

export default function UiHomepage({ variant = 'classic' }: UiHomepageProps) {
  return (
    <div className={`uiHp uiHp--${variant}${variant === 'classic' ? ' uiHp--tone-0' : ''}`}>
      {variant === 'classic' && <div className="uiHp__scrollBg" aria-hidden="true" />}
      <UiScrollReveal />
      {variant === 'classic' && (
        <>
          <UiScrollTones />
          <UiPathsColorSwap />
          <UiDockScroll />
        </>
      )}
      <header className="uiHp__nav">
        <UiNavBar variant={variant} />
      </header>

      {variant === 'classic' && (
        <nav className="uiHp__dock" aria-label="Rychlé akce">
          <div className="uiHp__dockShell">
            <div className="uiHp__dockInner">
              <a href="#" className="uiHp__btn uiHp__btn--ghost uiHp__btn--sm">
                {C.nav.aside}
              </a>
              <a href="#" className="uiHp__btn uiHp__btn--primary uiHp__btn--sm">
                {C.nav.cta}
              </a>
              <a href={C.nav.prostream.href} className="uiHp__btn uiHp__btn--soft uiHp__btn--sm">
                {C.nav.prostream.label}
              </a>
            </div>
          </div>
        </nav>
      )}

      <section
        className={`uiHp__section uiHp__hero${variant !== 'classic' ? ' uiHp__hero--gradient' : ''}`}
        {...sectionTone(variant, '0')}
      >
        {variant === 'classic' && <LiquidGradient className="uiHp__heroLiquid" />}
        <div className="uiHp__container uiHp__heroGrid">
          <div className="uiHp__heroCopy">
            <h1 className="uiHp__h1">{C.hero.headline}</h1>
            <p className="uiHp__lead">{C.hero.subheadline}</p>
            <div className="uiHp__btnRow">
              <a href="#" className="uiHp__btn uiHp__btn--primary">
                {C.hero.primaryCta}
              </a>
              <a href="#" className="uiHp__btn uiHp__btn--ghost">
                {C.hero.secondaryCta}
              </a>
            </div>
          </div>
          <div className="uiHp__heroAside">
            <div className="uiHp__rates">
              <p className="uiHp__h3">Aktuální kurzy</p>
              {C.hero.rates.map((r) => (
                <div key={r.pair} className="uiHp__rateRow">
                  <span>{r.pair}</span>
                  <strong>{r.value}</strong>
                </div>
              ))}
              <a href="#" className="uiHp__link">
                {C.hero.ratesNote}
              </a>
            </div>
            {variant !== 'classic' && <div className="uiHp__visual" aria-hidden="true" />}
          </div>
        </div>
      </section>

      <UiTrustSection items={C.trust} toneProps={sectionTone(variant, '1')} />

      <section
        className="uiHp__section uiHp__section--paths uiHp__section--pathsScenarios"
        {...sectionTone(variant, '2')}
      >
        <div className="uiHp__pathsIntro">
          <h2 className="uiHp__h2">{C.problem.headline}</h2>
        </div>
        <div className="uiHp__pathsGrid uiHp__pathsGrid--scenarios">
          {C.problem.scenarios.map((s) => (
            <article
              key={s.tag}
              className={`uiHp__card uiHp__card--path ${scenarioPathClass(s.tag)}`}
            >
              <div className="uiHp__pathsCell">
                <span className="uiHp__tag">{s.tag}</span>
                <p className="uiHp__body">{s.text}</p>
                <a href="#" className="uiHp__btn uiHp__btn--ghost">
                  {s.cta}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="uiHp__section uiHp__section--paths" {...sectionTone(variant, '3')}>
        <div className="uiHp__pathsGrid">
          {C.paths.map((p) => (
            <article key={p.title} className="uiHp__card uiHp__card--path">
              <div className="uiHp__pathsCell">
                <h3 className="uiHp__h3">{p.title}</h3>
                <p className="uiHp__body">{p.body}</p>
                <a href="#" className="uiHp__btn uiHp__btn--ghost">
                  {p.cta}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        className="uiHp__section uiHp__section--accent uiHp__forwardFlow"
        {...sectionTone(variant, 'accent')}
      >
        <div className="uiHp__container">
          <h2 className="uiHp__h2">{C.forwardFlow.headline}</h2>
          <p className="uiHp__body">{C.forwardFlow.lead}</p>
          <div className="uiHp__flow">
            {C.forwardFlow.steps.map((s) => (
              <div key={s.num} className="uiHp__flowStep">
                <span className="uiHp__flowNum">{s.num}</span>
                <p className="uiHp__body uiHp__body--emphasis">{s.label}</p>
                {'note' in s && s.note ? <p className="uiHp__muted">{s.note}</p> : null}
              </div>
            ))}
          </div>
          <ul className="uiHp__bullets">
            {C.forwardFlow.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          <a href="#" className="uiHp__btn uiHp__btn--onAccent">
            {C.forwardFlow.cta}
          </a>
        </div>
      </section>

      <section className="uiHp__section uiHp__forward" {...sectionTone(variant, '4')}>
        <div className="uiHp__container uiHp__forwardGrid">
          <div>
            <p className="uiHp__eyebrow">{C.forward.anchor}</p>
            <h2 className="uiHp__h2">{C.forward.headline}</h2>
            <p className="uiHp__body">{C.forward.lead}</p>
            <a href="#" className="uiHp__btn uiHp__btn--primary">
              {C.forward.cta}
            </a>
          </div>
          <article className="uiHp__card uiHp__card--example">
            <p className="uiHp__h3">Příklad: importér</p>
            <ol className="uiHp__steps">
              {C.forward.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            <p className="uiHp__body uiHp__body--emphasis">{C.forward.contrast}</p>
          </article>
        </div>
      </section>

      <section className="uiHp__section" {...sectionTone(variant, '0')}>
        <div className="uiHp__container">
          <h2 className="uiHp__h2 uiHp__h2--center">{C.why.headline}</h2>
          <UiWhySlider items={C.why.items} />
          <div className="uiHp__sectionCta">
            <a href="#" className="uiHp__btn uiHp__btn--primary">
              {C.why.cta}
            </a>
          </div>
        </div>
      </section>

      <section className="uiHp__section uiHp__section--surface" {...sectionTone(variant, '1')}>
        <div className="uiHp__container">
          <h2 className="uiHp__h2 uiHp__h2--center">{C.services.headline}</h2>
          <div className="uiHp__grid uiHp__grid--services">
            {C.services.items.map((s) => (
              <article
                key={s.title}
                className={`uiHp__card uiHp__card--service${'featured' in s && s.featured ? ' uiHp__card--featured' : ''}`}
              >
                {'badge' in s && s.badge ? (
                  <span className="uiHp__label">{s.badge}</span>
                ) : null}
                <h3 className="uiHp__h3">{s.title}</h3>
                {'for' in s && s.for ? <p className="uiHp__body">{s.for}</p> : null}
                {'cta' in s && s.cta ? (
                  <a href="#" className="uiHp__link">
                    {s.cta}
                  </a>
                ) : null}
              </article>
            ))}
          </div>
          <div className="uiHp__sectionCta">
            <a href="#" className="uiHp__btn uiHp__btn--primary">
              {C.services.cta}
            </a>
          </div>
        </div>
      </section>

      <section className="uiHp__section uiHp__section--surface" {...sectionTone(variant, '2')}>
        <div className="uiHp__container">
          <h2 className="uiHp__h2 uiHp__h2--center">{C.process.headline}</h2>
          <div className="uiHp__grid uiHp__grid--3">
            {C.process.steps.map((p) => (
              <article key={p.step} className="uiHp__card uiHp__card--step">
                <span className="uiHp__step">{p.step}</span>
                <h3 className="uiHp__h3">{p.title}</h3>
                <p className="uiHp__body">{p.body}</p>
              </article>
            ))}
          </div>
          <div className="uiHp__sectionCta">
            <a href="#" className="uiHp__btn uiHp__btn--ghost">
              {C.process.cta}
            </a>
          </div>
        </div>
      </section>

      <section className="uiHp__section" {...sectionTone(variant, '3')}>
        <div className="uiHp__container">
          <h2 className="uiHp__h2">{C.proof.headline}</h2>
          <div className="uiHp__grid uiHp__grid--3">
            {C.proof.quotes.map((q) => (
              <figure key={q.company} className="uiHp__card uiHp__card--quote">
                <span className="uiHp__tag">{q.tag}</span>
                <blockquote className="uiHp__quote">
                  <p>„{q.text}"</p>
                </blockquote>
                <figcaption className="uiHp__muted">
                  {q.author}
                  {q.role ? `, ${q.role}` : ''} — {q.company}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="uiHp__section uiHp__section--lead" {...sectionTone(variant, '4')}>
        <div className="uiHp__container">
          <div className="uiHp__leadWideImage" aria-hidden="true">
            <img src="/ui/trust-wide.png" alt="" decoding="async" />
          </div>
          <div className="uiHp__leadGrid">
            <div className="uiHp__leadIntro">
              <h2 className="uiHp__h2">{C.lead.headline}</h2>
              <p className="uiHp__body">{C.lead.sub}</p>
            </div>
            <div className="uiHp__leadCard">
              <form className="uiHp__form">
                {C.lead.fields.map((field) => (
                  <label key={field} className="uiHp__field">
                    <span>{field}</span>
                    <input type="text" placeholder={field} readOnly />
                  </label>
                ))}
                <button type="button" className="uiHp__btn uiHp__btn--primary uiHp__formSubmit">
                  {C.lead.cta}
                </button>
              </form>
              {/* <aside className="uiHp__card uiHp__card--phone">
                <p className="uiHp__phone">{C.lead.phone}</p>
                <p className="uiHp__muted">{C.lead.phoneLabel}</p>
              </aside> */}
            </div>
          </div>
        </div>
      </section>

      <section className="uiHp__section uiHp__section--compact" {...sectionTone(variant, '0')}>
        <div className="uiHp__container uiHp__newsletter">
          <div>
            <h3 className="uiHp__h3">{C.newsletter.headline}</h3>
            <p className="uiHp__body">{C.newsletter.body}</p>
          </div>
          <a href="#" className="uiHp__btn uiHp__btn--ghost">
            {C.newsletter.cta}
          </a>
        </div>
      </section>

      <footer className="uiHp__footer">
        <div className="uiHp__container">
          <div className="uiHp__footerGrid">
            {footerLinkColumns.map((col) => (
              <div key={col.title} className="uiHp__footerCol">
                <h3 className="uiHp__footerTitle">{col.title}</h3>
                <ul className="uiHp__footerList">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="uiHp__footerContact">
            <h2 className="uiHp__footerContactTitle">{footerContactColumn.title}</h2>
            <ul className="uiHp__footerContactList">
              {footerContactColumn.links.map((link) => (
                <li key={link}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="uiHp__footerBottom">
            <div className="uiHp__footerSocial">
              {C.footer.social.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">
                  {s.label}
                </a>
              ))}
            </div>
            <div className="uiHp__footerLegal">
              {C.footer.legal.map((l) => (
                <a key={l} href="#">
                  {l}
                </a>
              ))}
            </div>
            <p className="uiHp__footerAside">{C.footer.aside}</p>
          </div>
        </div>
      </footer>

      <div className="uiHp__pageLogo" aria-hidden="true">
        <span className="uiHp__pageLogoMark" />
      </div>
    </div>
  )
}
