export type Dictionary = {
  meta: {
    siteName: string
    siteDescription: string
  }
  nav: {
    hub: string
    analysis: string
    ux: string
    ui: string
    uiClassic: string
    uiPremium: string
    tokens: string
    copy: string
    mobileUx: string
    mobileUi: string
    external: string
    ariaLabel: string
  }
  lang: {
    cz: string
    en: string
    switchAria: string
  }
  hub: {
    title: string
    meta: string
    phases: string[]
  }
  analysis: {
    title: string
    intro: string
    sections: Array<{
      title: string
      summary?: string
      layout?: 'full' | 'half' | 'row'
      itemsLayout?: 'stack' | 'grid-2' | 'cols-2'
      tone?: 'default' | 'note' | 'muted'
      aside?: string
      dividerBefore?: 'arrow' | 'line'
      items: Array<{ text: string; emphasis?: boolean }>
    }>
  }
  ux: {
    title: string
    intro: string
    sections: {
      nav: { label: string; hint: string }
      hero: { label: string; hint: string }
      trust: { label: string; hint: string }
      problem: { label: string; hint: string }
      paths: { label: string; hint: string }
      forward: { label: string; hint: string }
      services: { label: string; hint: string }
      why: { label: string; hint: string }
      process: { label: string; hint: string }
      proof: { label: string; hint: string }
      lead: { label: string; hint: string }
      newsletter: { label: string; hint: string }
      footer: { label: string; hint: string }
    }
  }
  ui: {
    classic: { title: string; desc: string }
    premium: { title: string; desc: string }
    switchLabel: string
  }
  tokens: {
    title: string
    intro: string
    groups: string[]
  }
  mobileUx: {
    title: string
    intro: string
    viewport: string
    notesTitle: string
    notes: string[]
  }
  mobileUi: {
    title: string
    intro: string
    viewport: string
  }
}
