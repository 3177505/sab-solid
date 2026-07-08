import { UX_HOMEPAGE_CONTENT as C } from '@/content/ux/homepage'

type UiHomepageProps = {
  variant?: 'classic' | 'premium'
  mobile?: boolean
}

export default function UiHomepage({ variant = 'classic', mobile = false }: UiHomepageProps) {
  return (
    <div className={`uiHp uiHp--${variant}${mobile ? ' uiHp--mobile' : ''}`}>
      <header className="uiHp__nav">
        <div className="uiHp__container uiHp__navInner">
          <span className="uiHp__logo">{C.nav.logo}</span>
          <nav className="uiHp__navLinks" aria-label="Hlavní navigace">
            <a href={C.nav.tarf.href} className="uiHp__navLink uiHp__navLink--tarf">
              <span className="uiHp__badge">{C.nav.tarf.badge}</span>
              {C.nav.tarf.label}
            </a>
            {C.nav.links.map((link) => (
              <a key={link} href="#" className="uiHp__navLink">
                {link}
              </a>
            ))}
          </nav>
          <div className="uiHp__navEnd">
            <a href="#" className="uiHp__navMuted">
              {C.nav.aside}
            </a>
            <a href="#" className="uiHp__btn uiHp__btn--primary">
              {C.nav.cta}
            </a>
            <a href={C.nav.prostream.href} className="uiHp__btn uiHp__btn--prostream">
              {C.nav.prostream.label}
            </a>
            <nav className="uiHp__lang" aria-label="Jazyk">
              <span className="uiHp__langCurrent">{C.nav.lang.current}</span>
              {C.nav.lang.options
                .filter((l) => l !== C.nav.lang.current)
                .map((l) => (
                  <button key={l} type="button" className="uiHp__langOption" disabled>
                    {l}
                  </button>
                ))}
            </nav>
          </div>
        </div>
      </header>

      <section className="uiHp__section uiHp__hero">
        <div className={`uiHp__container uiHp__heroGrid${mobile ? ' uiHp__heroGrid--stack' : ''}`}>
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
            {!mobile && <div className="uiHp__visual" aria-hidden="true" />}
          </div>
        </div>
      </section>

      <section className="uiHp__section uiHp__section--compact uiHp__trust">
        <div className="uiHp__container uiHp__trustRow">
          {C.trust.map((item) => (
            <span key={item} className="uiHp__trustItem">
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="uiHp__section uiHp__section--surface">
        <div className="uiHp__container">
          <h2 className="uiHp__h2">{C.problem.headline}</h2>
          <div className={`uiHp__grid uiHp__grid--2${mobile ? ' uiHp__grid--stack' : ''}`}>
            {C.problem.scenarios.map((s) => (
              <article key={s.tag} className="uiHp__card">
                <span className="uiHp__tag">{s.tag}</span>
                <p className="uiHp__body">{s.text}</p>
                <a href="#" className="uiHp__link">
                  {s.cta}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="uiHp__section">
        <div className="uiHp__container">
          <div className={`uiHp__grid uiHp__grid--2${mobile ? ' uiHp__grid--stack' : ''}`}>
            {C.paths.map((p) => (
              <article key={p.title} className="uiHp__card uiHp__card--path">
                <h3 className="uiHp__h3">
                  {p.title}
                </h3>
                <p className="uiHp__body">{p.body}</p>
                <a href="#" className="uiHp__btn uiHp__btn--ghost">
                  {p.cta}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="uiHp__section uiHp__section--accent uiHp__forwardFlow">
        <div className="uiHp__container">
          <h2 className="uiHp__h2">{C.forwardFlow.headline}</h2>
          <p className="uiHp__body">{C.forwardFlow.lead}</p>
          <div className={`uiHp__flow${mobile ? ' uiHp__flow--stack' : ''}`}>
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
          <a href="#" className="uiHp__btn uiHp__btn--primary uiHp__btn--onAccent">
            {C.forwardFlow.cta}
          </a>
        </div>
      </section>

      <section className="uiHp__section uiHp__forward">
        <div className={`uiHp__container uiHp__forwardGrid${mobile ? ' uiHp__forwardGrid--stack' : ''}`}>
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

      <section className="uiHp__section">
        <div className="uiHp__container">
          <h2 className="uiHp__h2 uiHp__h2--center">{C.why.headline}</h2>
          <div className={`uiHp__grid uiHp__grid--3${mobile ? ' uiHp__grid--stack' : ''}`}>
            {C.why.items.map((w) => (
              <article key={w.title} className="uiHp__card uiHp__card--flat">
                <h3 className="uiHp__h3">{w.title}</h3>
                {'body' in w && w.body ? <p className="uiHp__body">{w.body}</p> : null}
              </article>
            ))}
          </div>
          <div className="uiHp__sectionCta">
            <a href="#" className="uiHp__btn uiHp__btn--primary">
              {C.why.cta}
            </a>
          </div>
        </div>
      </section>

      <section className="uiHp__section uiHp__section--surface">
        <div className="uiHp__container">
          <h2 className="uiHp__h2 uiHp__h2--center">{C.services.headline}</h2>
          <div className={`uiHp__grid uiHp__grid--services${mobile ? ' uiHp__grid--stack' : ''}`}>
            {C.services.items.map((s) => (
              <article
                key={s.title}
                className={`uiHp__card uiHp__card--service${'featured' in s && s.featured ? ' uiHp__card--featured' : ''}`}
              >
                {'badge' in s && s.badge ? (
                  <span className="uiHp__badge">{s.badge}</span>
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

      <section className="uiHp__section uiHp__section--surface">
        <div className="uiHp__container">
          <h2 className="uiHp__h2 uiHp__h2--center">{C.process.headline}</h2>
          <div className={`uiHp__grid uiHp__grid--3${mobile ? ' uiHp__grid--stack' : ''}`}>
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

      <section className="uiHp__section">
        <div className="uiHp__container">
          <h2 className="uiHp__h2">{C.proof.headline}</h2>
          <div className={`uiHp__grid uiHp__grid--3${mobile ? ' uiHp__grid--stack' : ''}`}>
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

      <section className="uiHp__section uiHp__section--lead">
        <div className={`uiHp__container uiHp__leadGrid${mobile ? ' uiHp__leadGrid--stack' : ''}`}>
          <div>
            <h2 className="uiHp__h2">{C.lead.headline}</h2>
            <p className="uiHp__body">{C.lead.sub}</p>
            <form className="uiHp__form">
              {C.lead.fields.map((field) => (
                <label key={field} className="uiHp__field">
                  <span>{field}</span>
                  <input type="text" placeholder={field} readOnly />
                </label>
              ))}
              <button type="button" className="uiHp__btn uiHp__btn--primary">
                {C.lead.cta}
              </button>
            </form>
          </div>
          <aside className="uiHp__card uiHp__card--phone">
            <p className="uiHp__phone">{C.lead.phone}</p>
            <p className="uiHp__muted">{C.lead.phoneLabel}</p>
          </aside>
        </div>
      </section>

      <section className="uiHp__section uiHp__section--compact">
        <div className={`uiHp__container uiHp__newsletter${mobile ? ' uiHp__newsletter--stack' : ''}`}>
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
          <div className={`uiHp__footerGrid${mobile ? ' uiHp__footerGrid--stack' : ''}`}>
            {C.footer.columns.map((col) => (
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
    </div>
  )
}
