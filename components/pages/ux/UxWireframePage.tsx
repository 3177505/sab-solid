import UxWireframe from '@/components/pages/ux/UxWireframe'
import type { Dictionary } from '@/content/copy'

type UxWireframePageProps = {
  dict: Dictionary
}

export default function UxWireframePage({ dict }: UxWireframePageProps) {
  return (
    <article className="uxPage presentationPage--full">
      <UxWireframe dict={dict} />
    </article>
  )
}
