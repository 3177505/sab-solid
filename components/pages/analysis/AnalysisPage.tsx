import type { Dictionary } from '@/content/copy'

type AnalysisPageProps = {
  dict: Dictionary
}

function parsePoint(text: string) {
  const dash = text.indexOf(' — ')
  if (dash === -1) return { label: null, body: text }
  return {
    label: text.slice(0, dash),
    body: text.slice(dash + 3),
  }
}

export default function AnalysisPage({ dict }: AnalysisPageProps) {
  const { analysis: a } = dict

  return (
    <article className="analysisPage presentationPage presentationPage--dark">
      <p className="presentationPage__lead analysisPage__intro">{a.intro}</p>

      <div className="analysisPage__grid">
        {a.sections.map((section) => {
          const layout = section.layout ?? 'full'
          const tone = section.tone ?? 'default'
          const itemsLayout = section.itemsLayout ?? 'stack'

          return (
            <div key={section.title} className="analysisSectionWrap">
              {section.dividerBefore && (
                <div
                  className={`analysisDivider analysisDivider--${section.dividerBefore}`}
                  aria-hidden="true"
                >
                  {section.dividerBefore === 'arrow' && (
                    <span className="analysisDivider__arrow">↓</span>
                  )}
                </div>
              )}

              <section
                className={`analysisSection analysisSection--${layout} analysisSection--${tone}`}
              >
                <h2 className="analysisSection__title">{section.title}</h2>
                {section.summary && (
                  <p className="analysisSection__summary">{section.summary}</p>
                )}
                <ul
                  className={`analysisSection__list${
                    itemsLayout === 'grid-2'
                      ? ' analysisSection__list--grid2'
                      : itemsLayout === 'cols-2'
                        ? ' analysisSection__list--cols2'
                        : ''
                  }`}
                >
                  {section.items.map((item) => {
                    const { label, body } = parsePoint(item.text)
                    return (
                      <li
                        key={item.text}
                        className={`analysisPoint${item.emphasis ? ' analysisPoint--emphasis' : ''}`}
                      >
                        {label ? (
                          <>
                            <strong className="analysisPoint__label">{label}</strong>
                            <span className="analysisPoint__body">{body}</span>
                          </>
                        ) : (
                          <span className="analysisPoint__body">{body}</span>
                        )}
                      </li>
                    )
                  })}
                </ul>
                {section.aside && (
                  <p className="analysisSection__aside">{section.aside}</p>
                )}
              </section>
            </div>
          )
        })}
      </div>
    </article>
  )
}
