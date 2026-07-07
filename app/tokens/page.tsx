import TokensPage from '@/components/pages/tokens/TokensPage'
import { getCopy } from '@/content/copy'

export default function Page() {
  return <TokensPage dict={getCopy()} />
}
