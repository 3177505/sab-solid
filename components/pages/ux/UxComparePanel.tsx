'use client'

import { UX_COMPARE } from '@/content/ux/compare'

type UxComparePanelProps = {
  open: boolean
  onClose: () => void
}

export default function UxComparePanel({ open, onClose }: UxComparePanelProps) {
  const { content, navigation, clarity, journey } = UX_COMPARE

  if (!open) return null

  return (
    <aside className="uxComparePanel uxComparePanel--open" aria-hidden={false}>
      <div className="uxComparePanel__toolbar">
        <span className="uxComparePanel__toolbarTitle">Porovnání s předchozí verzí</span>
        <button type="button" className="uxComparePanel__close" onClick={onClose}>
          Zavřít
        </button>
      </div>
      <div className="uxComparePanel__inner">

        <section className="uxComparePanel__block">
          <h2 className="uxComparePanel__title">{content.title}</h2>
          <p className="uxComparePanel__stays">{content.stays}</p>
          <p className="uxComparePanel__label">Mění se:</p>
          <ul className="uxComparePanel__list">
            {content.changes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="uxComparePanel__block">
          <h2 className="uxComparePanel__title">{navigation.title}</h2>
          <table className="uxComparePanel__table">
            <thead>
              <tr>
                <th>Dnes sab.cz</th>
                <th>Návrh</th>
              </tr>
            </thead>
            <tbody>
              {navigation.rows.map((row, i) => (
                <tr key={i}>
                  <td>{row.today}</td>
                  <td>{row.proposed}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="uxComparePanel__block">
          <h2 className="uxComparePanel__title">{clarity.title}</h2>
          <div className="uxComparePanel__cols">
            <div>
              <p className="uxComparePanel__label">Jasné (skenovatelné)</p>
              <ul className="uxComparePanel__list">
                {clarity.clear.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="uxComparePanel__label">Vyniká (stand out)</p>
              <ul className="uxComparePanel__list">
                {clarity.standout.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="uxComparePanel__block">
          <h2 className="uxComparePanel__title">{journey.title}</h2>
          <ol className="uxComparePanel__steps">
            {journey.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <p className="uxComparePanel__note">{journey.note}</p>
        </section>
      </div>
    </aside>
  )
}
