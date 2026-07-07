import UiShell from '@/components/pages/ui/UiShell'
import { getCopy } from '@/content/copy'

export default function Page() {
  return <UiShell dict={getCopy()} variant="classic" />
}
