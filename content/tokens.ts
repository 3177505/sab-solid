export type ColorToken = {
  name: string
  hex: string
  usage?: string
}

export type TypeToken = {
  name: string
  sample: string
  size: string
  weight?: string
  detail?: string
}

export type SpaceToken = {
  name: string
  value: string
}

export const IDENTITY_COLORS: ColorToken[] = [
  { name: 'Primary', hex: '#6DC4DE', usage: 'Akcent, gradient, scroll tone 1' },
  { name: 'Secondary', hex: '#C8E7F8', usage: 'Jemné pozadí, accent-soft' },
  { name: 'Tertiary', hex: '#285865', usage: 'Primární CTA, accent barva UI' },
]

export const GREY_COLORS: ColorToken[] = [
  { name: 'Grey dark blue', hex: '#1E3941', usage: 'Hlavní text UI' },
  { name: 'Grey dark', hex: '#3D5560', usage: 'Sekundární text' },
  { name: 'Grey mid', hex: '#7A9199', usage: 'Muted text' },
  { name: 'Grey light', hex: '#C8D8DE', usage: 'Border, scroll tone 3' },
  { name: 'Grey lighter', hex: '#EEF3F6', usage: 'Surface karet' },
  { name: 'White', hex: '#FFFFFF', usage: 'Pozadí, scroll tone 0' },
]

export const SCROLL_TONES: ColorToken[] = [
  { name: 'Tone 0', hex: '#FFFFFF' },
  { name: 'Tone 1', hex: '#C8E7F8' },
  { name: 'Tone 2', hex: '#EEF3F6' },
  { name: 'Tone 3', hex: '#C8D8DE' },
  { name: 'Tone 4', hex: '#A8BEC6' },
  { name: 'Tone accent', hex: '#285865' },
]

export const TYPE_TOKENS: TypeToken[] = [
  {
    name: 'H1',
    sample: 'Kurz na míru pro vaši firmu',
    size: 'clamp(36px, 5.5vw, 58px)',
    weight: '700',
    detail: 'letter-spacing: −0.035em · line-height: 1.1',
  },
  {
    name: 'H2',
    sample: 'Služby pro firemní klienty',
    size: 'clamp(28px, 3.5vw, 40px)',
    weight: '700',
    detail: 'letter-spacing: −0.03em',
  },
  {
    name: 'H3',
    sample: 'Forward — jistota kurzu',
    size: '22px',
    weight: '600',
  },
  {
    name: 'Lead',
    sample: 'Devizové obchody, platby a zajištění kurzového rizika pod jednou střechou.',
    size: '21px',
    detail: 'line-height: 1.55 · max-width: 44ch',
  },
  {
    name: 'Body',
    sample: 'Licencovaná platební instituce s 20 lety praxe a 20 000 firemních klientů.',
    size: '17px',
    detail: 'line-height: 1.65',
  },
  {
    name: 'Button',
    sample: 'Domluvit konzultaci',
    size: '14px',
    weight: '600',
  },
  {
    name: 'Caption',
    sample: 'Aktuální kurzy · EUR/CZK',
    size: '13px',
    detail: 'Eyebrow, muted, label',
  },
]

export const SPACE_TOKENS: SpaceToken[] = [
  { name: 'xxs', value: '4px' },
  { name: 'xs', value: '8px' },
  { name: 'sm', value: '12px' },
  { name: 'md', value: '20px' },
  { name: 'lg', value: '32px' },
  { name: 'xl', value: '48px' },
  { name: 'xxl', value: '72px' },
]

export const LAYOUT_TOKENS = [
  { name: 'UI max-width', value: '1080px' },
  { name: 'Content max-width', value: '1200px' },
  { name: 'Section padding', value: 'clamp(96px, 14vh, 160px)' },
  { name: 'Container padding', value: 'clamp(24px, 4vw, 40px)' },
  { name: 'Button radius', value: '8px' },
  { name: 'Card radius', value: '4px' },
]

export const SCSS_UI_TOKENS = `// components/_setup/uiTokens.scss
$ui-bg:           $color-white;
$ui-surface:      $color-identity-grey-lighter;
$ui-text:         $color-identity-grey-dark-blue;
$ui-muted:        $color-identity-grey-mid;
$ui-accent:       $color-identity-tertiary;
$ui-accent-soft:  $color-identity-secondary;
$ui-accent-bright:$color-identity-primary;
$ui-border:       $color-identity-grey-light;
`
