import InfoHint from '@/components/utils/infoHint/InfoHint'
import type { Dictionary } from '@/content/copy'

export type UxSectionVariant = 'wide' | 'split' | 'cards' | 'form' | 'mobile-nav' | 'mobile-stack'

export type UxSection = {
  id: string
  label: string
  hint: string
  variant?: UxSectionVariant
}

export function getUxSections(dict: Dictionary, mobile = false): UxSection[] {
  const s = dict.ux.sections

  if (mobile) {
    return [
      { id: 'nav', ...s.nav, variant: 'mobile-nav' },
      { id: 'hero', ...s.hero, variant: 'mobile-stack' },
      { id: 'trust', ...s.trust, variant: 'wide' },
      { id: 'problem', ...s.problem, variant: 'mobile-stack' },
      { id: 'services', ...s.services, variant: 'mobile-stack' },
      { id: 'forward', ...s.forward, variant: 'wide' },
      { id: 'process', ...s.process, variant: 'mobile-stack' },
      { id: 'proof', ...s.proof, variant: 'mobile-stack' },
      { id: 'lead', ...s.lead, variant: 'mobile-stack' },
      { id: 'footer', ...s.footer, variant: 'wide' },
    ]
  }

  return [
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
}

type UxWireframeProps = {
  dict: Dictionary
  mobile?: boolean
  showLabels?: boolean
}

export default function UxWireframe({
  dict,
  mobile = false,
  showLabels = true,
}: UxWireframeProps) {
  const sections = getUxSections(dict, mobile)

  return (
    <div className={`uxWireframe${mobile ? ' uxWireframe--mobile' : ''}`}>
      {sections.map((section, index) => (
        <section
          key={section.id}
          className={`uxSection uxSection--${section.variant ?? 'wide'}`}
          data-section={section.id}
        >
          {showLabels && (
            <div className="uxSection__label">
              <span className="uxSection__num">{String(index + 1).padStart(2, '0')}</span>
              <span className="uxSection__name">{section.label}</span>
              <InfoHint text={section.hint} />
            </div>
          )}
          <UxSectionContent variant={section.variant} id={section.id} mobile={mobile} />
        </section>
      ))}
    </div>
  )
}

function UxSectionContent({
  variant,
  id,
  mobile,
}: {
  variant?: UxSectionVariant
  id: string
  mobile?: boolean
}) {
  if (variant === 'mobile-nav') {
    return (
      <div className="uxSection__content uxSection__content--mobileNav">
        <div className="uxBox uxBox--logo" />
        <div className="uxBox uxBox--burger" />
        <div className="uxBox uxBox--ctaMobile" />
      </div>
    )
  }

  if (variant === 'mobile-stack' || (mobile && variant === 'split')) {
    return (
      <div className="uxSection__content uxSection__content--stack">
        <div className="uxBox uxBox--stack" />
        {id === 'hero' && <div className="uxBox uxBox--stack uxBox--short" />}
        {id === 'services' && (
          <>
            <div className="uxBox uxBox--stack uxBox--featured" />
            <div className="uxBox uxBox--stack uxBox--short" />
            <div className="uxBox uxBox--stack uxBox--short" />
          </>
        )}
        {id === 'lead' && <div className="uxBox uxBox--stack uxBox--short" />}
      </div>
    )
  }

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
