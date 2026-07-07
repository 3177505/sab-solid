import MobileUiPage from '@/components/pages/mobile/MobileUiPage'
import { getCopy } from '@/content/copy'

export default function Page() {
  return <MobileUiPage dict={getCopy()} />
}
