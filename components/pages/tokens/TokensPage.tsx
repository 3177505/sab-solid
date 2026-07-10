import type { Dictionary } from '@/content/copy'
import {
  SCSS_UI_TOKENS,
  GREY_COLORS,
  IDENTITY_COLORS,
  LAYOUT_TOKENS,
  SCROLL_TONES,
  SPACE_TOKENS,
  TYPE_TOKENS,
  UI_FONT,
} from '@/content/tokens'

type TokensPageProps = {
  dict: Dictionary
}

function ColorSwatches({
  title,
  colors,
}: {
  title: string
  colors: { name: string; hex: string; usage?: string }[]
}) {
  return (
    <div className="tokensPage__swatchGroup">
      <h3 className="tokensPage__subheading">{title}</h3>
      <ul className="tokensPage__swatches">
        {colors.map((color) => (
          <li key={color.name} className="tokensPage__swatch">
            <span
              className="tokensPage__swatchColor"
              style={{ backgroundColor: color.hex }}
              aria-hidden="true"
            />
            <span className="tokensPage__swatchMeta">
              <strong>{color.name}</strong>
              <code>{color.hex}</code>
              {color.usage ? <span>{color.usage}</span> : null}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function TokensPage({ dict }: TokensPageProps) {
  const { tokens } = dict

  return (
    <article className="tokensPage presentationPage presentationPage--dark">
      <p className="presentationPage__lead">{tokens.intro}</p>

      <div className="tokensPage__grid">
        <section className="tokensPage__group">
          <h2>Barvy</h2>
          <div className="tokensPage__panel">
            <ColorSwatches title="Identita SAB" colors={IDENTITY_COLORS} />
            <ColorSwatches title="Neutrální škála" colors={GREY_COLORS} />
            <ColorSwatches title="Scroll tóny" colors={SCROLL_TONES} />
          </div>
        </section>

        <section className="tokensPage__group">
          <h2>Typografie</h2>
          <div className="tokensPage__panel tokensPage__panel--type">
            <p className="tokensPage__fontNote">
              UI homepage: <strong>{UI_FONT.family}</strong> · {UI_FONT.weights} · {UI_FONT.source}
            </p>
            <ul className="tokensPage__typeList">
              {TYPE_TOKENS.map((token) => (
                <li key={token.name} className="tokensPage__typeRow">
                  <span className="tokensPage__typeLabel">{token.name}</span>
                  <div className="tokensPage__typeSample">
                    <p
                      className={`tokensPage__typeText tokensPage__typeText--${token.name.toLowerCase()}`}
                    >
                      {token.sample}
                    </p>
                    <span className="tokensPage__typeMeta">
                      {token.size}
                      {token.weight ? ` · ${token.weight}` : ''}
                      {token.detail ? ` · ${token.detail}` : ''}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="tokensPage__group">
          <h2>Spacing</h2>
          <div className="tokensPage__panel">
            <ul className="tokensPage__spaceList">
              {SPACE_TOKENS.map((token) => (
                <li key={token.name} className="tokensPage__spaceRow">
                  <span className="tokensPage__spaceLabel">{token.name}</span>
                  <span
                    className="tokensPage__spaceBar"
                    style={{ width: token.value }}
                    aria-hidden="true"
                  />
                  <code>{token.value}</code>
                </li>
              ))}
            </ul>
            <h3 className="tokensPage__subheading">Layout</h3>
            <dl className="tokensPage__layoutList">
              {LAYOUT_TOKENS.map((token) => (
                <div key={token.name} className="tokensPage__layoutRow">
                  <dt>{token.name}</dt>
                  <dd>
                    <code>{token.value}</code>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="tokensPage__group">
          <h2>Komponenty</h2>
          <div className="tokensPage__panel tokensPage__panel--components">
            <div className="tokensPage__uiScope uiHp uiHp--classic">
              <h3 className="tokensPage__subheading">Tlačítka</h3>
              <p className="tokensPage__componentNote">
                Tři typy — ghost (outline), primary (fill), soft (sklo). Drop shadow pro kontrast,
                hover: jemný lift + frosted surface.
              </p>
              <div className="uiHp__btnRow tokensPage__btnRow">
                <button type="button" className="uiHp__btn uiHp__btn--ghost">
                  Ghost
                </button>
                <button type="button" className="uiHp__btn uiHp__btn--primary">
                  Primary
                </button>
                <button type="button" className="uiHp__btn uiHp__btn--soft">
                  Soft
                </button>
              </div>
              <div className="tokensPage__accentDemo">
                <button type="button" className="uiHp__btn uiHp__btn--onAccent">
                  On accent
                </button>
              </div>

              <h3 className="tokensPage__subheading">Karta — služba</h3>
              <p className="tokensPage__componentNote">
                Featured service karta — skleněný panel, řádkový layout, hover lift.
              </p>
              <article className="uiHp__card uiHp__card--service uiHp__card--featured tokensPage__cardSample">
                <h3 className="uiHp__h3">Fixní kurz na fakturu</h3>
                <span className="uiHp__label">Novinka</span>
                <p className="uiHp__body">Víte o budoucí platbě nebo inkasu</p>
                <a href="#" className="uiHp__link">
                  Více o forwardu
                </a>
              </article>

              <h3 className="tokensPage__subheading">Karta — glass</h3>
              <p className="tokensPage__componentNote">
                Classic varianta — skleněný panel s blur 20px, radius 4px, bez stínu.
              </p>
              <article className="uiHp__card tokensPage__cardSample">
                <span className="uiHp__tag">Importér</span>
                <h3 className="uiHp__h3">Platíte dodavateli v EUR</h3>
                <p className="uiHp__body">
                  Osobní dealing doplněný online platformou pro firmy v mezinárodním obchodu.
                </p>
                <a href="#" className="uiHp__link">
                  Váš scénář
                </a>
              </article>

              <h3 className="tokensPage__subheading">Tag, label & novinka</h3>
              <div className="tokensPage__tagRow">
                <span className="uiHp__tag">Importér</span>
                <span className="uiHp__label">Novinka</span>
                <span className="uiHp__novinka">TARF</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="tokensPage__css">
        <h2>SCSS tokeny</h2>
        <pre className="tokensPage__code">{SCSS_UI_TOKENS}</pre>
      </section>
    </article>
  )
}
