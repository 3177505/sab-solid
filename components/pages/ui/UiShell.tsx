import UiVariantSwitch from '@/components/ui/UiVariantSwitch'
import type { Dictionary } from '@/content/copy'

type UiShellProps = {
  dict: Dictionary
  variant: 'classic' | 'premium'
}

export default function UiShell({ dict, variant }: UiShellProps) {
  const copy = variant === 'classic' ? dict.ui.classic : dict.ui.premium

  return (
    <article className={`uiShell uiShell--${variant}`}>
      <header className="uiShell__header">
        <UiVariantSwitch dict={dict.ui} />
        <h1 className="uiShell__title">{copy.title}</h1>
        <p className="uiShell__desc">{copy.desc}</p>
      </header>

      <div className="uiShell__placeholder">
        <p>Homepage UI — stejná UX kostra jako na /ux</p>
        <p className="uiShell__note">Vizuální design doplníme v dalším kroku.</p>
      </div>
    </article>
  )
}
