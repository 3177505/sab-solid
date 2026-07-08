import MobilePage from '@/components/pages/mobile/MobilePage'
import { getCopy } from '@/content/copy'

export default function Page() {
  return <MobilePage dict={getCopy()} />
}
