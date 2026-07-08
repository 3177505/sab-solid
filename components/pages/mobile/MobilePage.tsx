import type { Dictionary } from '@/content/copy'
import UxWireframePage from '@/components/pages/ux/UxWireframePage'

type MobilePageProps = {
  dict: Dictionary
}

export default function MobilePage({ dict }: MobilePageProps) {
  const { mobileUx } = dict

  return (
    <div className="mobilePage presentationPage--full">
      <aside className="mobilePage__aside">
        <p className="mobilePage__lead">{mobileUx.intro}</p>
        <p className="mobilePage__viewportLabel">{mobileUx.viewport}</p>
        <h2 className="mobilePage__notesTitle">{mobileUx.notesTitle}</h2>
        <ul className="mobilePage__notes">
          {mobileUx.notes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </aside>
      <div className="mobilePage__viewport">
        <UxWireframePage mobile />
      </div>
    </div>
  )
}
