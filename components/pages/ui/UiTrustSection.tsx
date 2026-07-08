type UiTrustSectionProps = {
  items: readonly string[]
  toneProps?: { 'data-tone'?: string }
}

export default function UiTrustSection({ items, toneProps }: UiTrustSectionProps) {
  return (
    <section
      className="uiHp__section uiHp__section--compact uiHp__trust"
      {...toneProps}
    >
      <div className="uiHp__container">
        <div className="uiHp__trustGrid">
          {items.map((item) => (
            <span key={item} className="uiHp__trustItem">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
