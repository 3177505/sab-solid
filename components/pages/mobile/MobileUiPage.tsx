import UiHomepage from '@/components/pages/ui/UiHomepage'
import type { Dictionary } from '@/content/copy'

type MobileUiPageProps = {
  dict: Dictionary
}

export default function MobileUiPage({ dict: _dict }: MobileUiPageProps) {
  return (
    <article className="mobilePage mobilePage--ui presentationPage--full">
      <div className="mobilePage__viewport">
        <UiHomepage variant="classic" mobile />
      </div>
    </article>
  )
}
