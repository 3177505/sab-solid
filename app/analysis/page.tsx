import AnalysisPage from '@/components/pages/analysis/AnalysisPage'
import { getCopy } from '@/content/copy'

export default function Page() {
  return <AnalysisPage dict={getCopy()} />
}
