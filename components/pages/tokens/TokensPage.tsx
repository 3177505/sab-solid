import type { Dictionary } from '@/content/copy'

type TokensPageProps = {
  dict: Dictionary
}

export default function TokensPage({ dict }: TokensPageProps) {
  const { tokens } = dict

  return (
    <article className="tokensPage presentationPage presentationPage--dark">
      <p className="presentationPage__lead">{tokens.intro}</p>

      <div className="tokensPage__grid">
        {tokens.groups.map((group) => (
          <section key={group} className="tokensPage__group">
            <h2>{group}</h2>
            <div className="tokensPage__placeholder">
              <span>—</span>
            </div>
          </section>
        ))}
      </div>

      <section className="tokensPage__css">
        <h2>Proměnné</h2>
        <pre className="tokensPage__code">{`:root {
  /* Classic */
  --color-primary: #0d6e6e;
  --color-surface: #ffffff;
  --color-text: #111111;

  /* Premium */
  --color-primary-premium: #14a3a3;
  --color-surface-premium: #1a1f26;
  --color-text-premium: #ffffff;

  /* Shared spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 20px;
  --space-5: 32px;
  --space-6: 48px;
}`}</pre>
      </section>
    </article>
  )
}
