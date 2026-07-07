import InfoHint from '@/components/utils/infoHint/InfoHint'
import type { Dictionary } from '@/content/copy'

type UxSection = {
  id: string
  label: string
  hint: string
  variant?: 'wide' | 'split' | 'cards' | 'form'
}

type UxWireframePageProps = {
  dict: Dictionary
}

export default function UxWireframePage({ dict }: UxWireframePageProps) {
  const { ux } = dict
  const s = ux.sections

  const sections: UxSection[] = [
    { id: 'nav', ...s.nav, variant: 'wide' },
    { id: 'hero', ...s.hero, variant: 'split' },
    { id: 'trust', ...s.trust, variant: 'wide' },
    { id: 'problem', ...s.problem, variant: 'split' },
    { id: 'services', ...s.services, variant: 'cards' },
    { id: 'forward', ...s.forward, variant: 'wide' },
    { id: 'process', ...s.process, variant: 'cards' },
    { id: 'proof', ...s.proof, variant: 'split' },
    { id: 'lead', ...s.lead, variant: 'form' },
    { id: 'footer', ...s.footer, variant: 'wide' },
  ]

  return (
    <article className="uxPage">
      <header className="uxPage__header">
        <h1 className="uxPage__title">{ux.title}</h1>
        <p className="uxPage__intro">{ux.intro}</p>
      </header>

      <div className="uxPage__wireframe">
        {sections.map((section, index) => (
          <section
            key={section.id}
            className={`uxSection uxSection--${section.variant ?? 'wide'}`}
            data-section={section.id}
          >
            <div className="uxSection__label">
              <span className="uxSection__num">{String(index + 1).padStart(2, '0')}</span>
              <span className="uxSection__name">{section.label}</span>
              <InfoHint text={section.hint} />
            </div>
            <UxSectionContent variant={section.variant} id={section.id} />
          </section>
        ))}
      </div>
    </article>
  )
}

function UxSectionContent({
  variant,
  id,
}: {
  variant?: UxSection['variant']
  id: string
}) {
  if (variant === 'split') {
    return (
      <div className="uxSection__content uxSection__content--split">
        <div className="uxBox uxBox--tall" />
        <div className="uxBox uxBox--tall" />
      </div>
    )
  }

  if (variant === 'cards') {
    const count = id === 'services' ? 4 : 3
    const featured = id === 'services'
    return (
      <div className="uxSection__content uxSection__content--cards">
        {Array.from({ length: count }).map((_, i) => (
          <div
            key={i}
            className={
              featured && i === 2 ? 'uxBox uxBox--card uxBox--featured' : 'uxBox uxBox--card'
            }
          />
        ))}
      </div>
    )
  }

  if (variant === 'form') {
    return (
      <div className="uxSection__content uxSection__content--form">
        <div className="uxBox uxBox--formFields" />
        <div className="uxBox uxBox--formAside" />
      </div>
    )
  }

  return (
    <div className="uxSection__content">
      <div className="uxBox uxBox--wide" />
    </div>
  )
}
