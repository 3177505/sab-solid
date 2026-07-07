import HubPage from '@/components/pages/hub/HubPage'
import { getCopy } from '@/content/copy'

export default function Page() {
  return <HubPage dict={getCopy()} />
}
