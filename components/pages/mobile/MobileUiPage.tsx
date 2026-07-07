import type { Dictionary } from '@/content/copy'

type MobileUiPageProps = {
  dict: Dictionary
}

export default function MobileUiPage({ dict }: MobileUiPageProps) {
  const { ui } = dict

  return (
    <article className="mobilePage mobilePage--ui presentationPage--full">
      <div className="mobilePage__viewport">
        <div className="uiShell uiShell--classic mobilePage__uiCanvas">
          <p className="uiShell__placeholder">
            {ui.classic.title} — vizuální design doplníme v dalším kroku.
          </p>
        </div>
      </div>
    </article>
  )
}
