import type { Dictionary } from '@/content/copy'

type AnalysisPageProps = {
  dict: Dictionary
}

export default function AnalysisPage({ dict }: AnalysisPageProps) {
  const { analysis: a } = dict

  return (
    <article className="analysisPage presentationPage">
      <p className="presentationPage__lead">{a.intro}</p>

      <section className="analysisBlock">
        <h2>{a.sections.who.title}</h2>
        <ul className="analysisList">
          {a.sections.who.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="analysisBlock analysisBlock--highlight">
        <h2>{a.sections.core.title}</h2>
        <ul className="analysisList">
          {a.sections.core.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="analysisInsight">{a.sections.core.insight}</p>
      </section>

      <section className="analysisBlock">
        <h2>{a.sections.audiences.title}</h2>
        <div className="analysisCards">
          {a.sections.audiences.groups.map((group) => (
            <div key={group.name} className="analysisCard">
              <h3>{group.name}</h3>
              <p>{group.need}</p>
            </div>
          ))}
        </div>
        <p className="analysisInsight">{a.sections.audiences.tension}</p>
      </section>

      <section className="analysisBlock">
        <h2>{a.sections.current.title}</h2>
        <ul className="analysisProblems">
          {a.sections.current.problems.map((p) => (
            <li key={p.title}>
              <strong>{p.title}</strong>
              <span>{p.desc}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="analysisBlock analysisBlock--split">
        <div>
          <h2>{a.sections.goals.title}</h2>
          <h3 className="analysisSub">{a.sections.goals.primaryLabel}</h3>
          <ul className="analysisList">
            {a.sections.goals.primary.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h3 className="analysisSub">{a.sections.goals.secondaryLabel}</h3>
          <ul className="analysisList">
            {a.sections.goals.secondary.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="analysisBlock analysisBlock--highlight">
        <h2>{a.sections.positioning.title}</h2>
        <p className="analysisHeadline">{a.sections.positioning.headline}</p>
        <div className="analysisCards">
          {a.sections.positioning.pillars.map((pillar) => (
            <div key={pillar.title} className="analysisCard">
              <h3>{pillar.title}</h3>
              <p>{pillar.desc}</p>
            </div>
          ))}
        </div>
        <div className="analysisCtaCompare">
          <div>
            <h3 className="analysisSub analysisSub--bad">× Slabé CTA</h3>
            <ul className="analysisTags analysisTags--bad">
              {a.sections.positioning.cta.bad.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="analysisSub analysisSub--good">→ Lepší CTA</h3>
            <ul className="analysisTags analysisTags--good">
              {a.sections.positioning.cta.good.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="analysisBlock">
        <h2>{a.sections.ia.title}</h2>
        <ul className="analysisList">
          {a.sections.ia.main.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="analysisInsight">{a.sections.ia.separated}</p>
        <p className="analysisInsight">{a.sections.ia.cta}</p>
      </section>

      <section className="analysisBlock">
        <h2>{a.sections.principles.title}</h2>
        <ol className="analysisOrdered">
          {a.sections.principles.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </section>
    </article>
  )
}
