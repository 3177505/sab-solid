export type PresentationStep = {
  path: string
  title: string
}

export const PRESENTATION_STEPS: PresentationStep[] = [
  { path: '/', title: 'Přehled' },
  { path: '/analysis', title: 'Audit webu' },
  { path: '/copy', title: 'UX Copywriting' },
  { path: '/ux', title: 'UX Návrh' },
  { path: '/tokens', title: 'Style guide' },
  { path: '/ui', title: 'UI' },
  { path: '/mobile/ux', title: 'UX Mobil' },
]

export function getPresentationStep(pathname: string) {
  const index = PRESENTATION_STEPS.findIndex((step) => {
    if (step.path === '/') return pathname === '/'
    return pathname === step.path || pathname.startsWith(`${step.path}/`)
  })
  if (index === -1) return null
  return {
    step: PRESENTATION_STEPS[index],
    index,
    prev: index > 0 ? PRESENTATION_STEPS[index - 1] : null,
    next: index < PRESENTATION_STEPS.length - 1 ? PRESENTATION_STEPS[index + 1] : null,
    total: PRESENTATION_STEPS.length,
  }
}
