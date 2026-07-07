import UxWireframePage from '@/components/pages/ux/UxWireframePage'
import { getCopy } from '@/content/copy'

export default function Page() {
  return <UxWireframePage dict={getCopy()} />
}
