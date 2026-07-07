type CopySection = {
  id: string
  label: string
  current?: unknown
  proposed?: unknown
  why?: string
}

type CopyData = {
  title: string
  audience: {
    primary: Array<{ id: string; label: string; motivace: string }>
    princip: string
  }
  principles: string[]
  sections: CopySection[]
  tone: { avoid: string[]; prefer: string[] }
}

export default function CopyPage({
  data,
  presentation = false,
}: {
  data: CopyData
  presentation?: boolean
}) {
  return (
    <article
      className={`copyPage${presentation ? ' presentationPage presentationPage--dark' : ''}`}
    >
      {!presentation && (
        <header className="copyPage__header">
          <h1 className="copyPage__title">{data.title}</h1>
        </header>
      )}
      <p className="copyPage__princip">{data.audience.princip}</p>

      <section className="copyPage__block">
        <h2>Cílové skupiny</h2>
        <div className="copyPage__cards">
          {data.audience.primary.map((a) => (
            <div key={a.id} className="copyPage__card">
              <h3>{a.label}</h3>
              <p>{a.motivace}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="copyPage__block">
        <h2>Principy copy</h2>
        <ul className="copyPage__list">
          {data.principles.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </section>

      {data.sections.map((section) => (
        <section key={section.id} className="copyPage__section">
          <h2>{section.label}</h2>
          <div className="copyPage__compare">
            <div className="copyPage__col copyPage__col--old">
              <h3>Dnes</h3>
              <pre>{formatBlock(section.current)}</pre>
            </div>
            <div className="copyPage__col copyPage__col--new">
              <h3>Návrh</h3>
              <pre>{formatBlock(section.proposed)}</pre>
            </div>
          </div>
          {section.why && <p className="copyPage__why">{section.why}</p>}
        </section>
      ))}

      <section className="copyPage__block">
        <h2>Tón — vyhnout se / preferovat</h2>
        <div className="copyPage__compare">
          <ul className="copyPage__tags copyPage__tags--bad">
            {data.tone.avoid.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <ul className="copyPage__tags copyPage__tags--good">
            {data.tone.prefer.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  )
}

function formatBlock(value: unknown): string {
  if (value == null) return '—'
  if (typeof value === 'string') return value
  return JSON.stringify(value, null, 2)
}
