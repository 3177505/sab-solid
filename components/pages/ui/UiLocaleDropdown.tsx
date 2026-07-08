import { LANG_LABELS, UX_HOMEPAGE_CONTENT as C } from '@/content/ux/homepage'
import UiDropdown from '@/components/pages/ui/UiDropdown'

export default function UiLocaleDropdown() {
  return (
    <UiDropdown
      trigger={LANG_LABELS[C.nav.lang.current] ?? C.nav.lang.current}
      className="uiHp__dropdown--locale"
    >
      {C.nav.lang.options
        .filter((code) => code !== C.nav.lang.current)
        .map((code) => (
          <button key={code} type="button" className="uiHp__dropdownOption" disabled>
            {LANG_LABELS[code] ?? code}
          </button>
        ))}
    </UiDropdown>
  )
}
