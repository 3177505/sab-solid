import UiVariantSwitch from '@/components/ui/UiVariantSwitch'
import LanguageSwitcher from '@/components/languageSwitcher/LanguageSwitcher'
import type { Dictionary } from '@/content/copy'

type UiShellProps = {
  dict: Dictionary
  variant: 'classic' | 'premium'
}

export default function UiShell({ dict, variant }: UiShellProps) {
  return (
    <article className={`uiShell uiShell--${variant} presentationPage--full`}>
      <div className="uiShell__toolbar">
        <UiVariantSwitch dict={dict.ui} />
        <LanguageSwitcher labels={dict.lang} />
      </div>
      <div className="uiShell__canvas">
        <p className="uiShell__placeholder">Homepage UI — vizuální design doplníme v dalším kroku.</p>
      </div>
    </article>
  )
}
