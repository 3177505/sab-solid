import UxWireframe from '@/components/pages/ux/UxWireframe'
import type { Dictionary } from '@/content/copy'

type MobilePageProps = {
  dict: Dictionary
}

export default function MobilePage({ dict }: MobilePageProps) {
  return (
    <article className="mobilePage presentationPage--full">
      <div className="mobilePage__viewport">
        <UxWireframe dict={dict} mobile showLabels={false} />
      </div>
    </article>
  )
}
