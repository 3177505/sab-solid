import Link from 'next/link'
import type { Dictionary } from '@/content/copy'
import { PRESENTATION_STEPS } from '@/lib/presentation'

type HubPageProps = {
  dict: Dictionary
}

const HUB_PHASE_LINKS = PRESENTATION_STEPS.slice(1)

export default function HubPage({ dict }: HubPageProps) {
  const { hub } = dict

  return (
    <article className="hubPage">
      <header className="hubPage__header">
        <h1 className="hubPage__title">{hub.title}</h1>
        <p className="hubPage__meta">{hub.meta}</p>
      </header>

      <ol className="hubPage__phases">
        {hub.phases.map((phase, index) => {
          const step = HUB_PHASE_LINKS[index]
          if (!step) {
            return (
              <li key={phase} className="hubPage__phase">
                {phase}
              </li>
            )
          }

          return (
            <li key={phase} className="hubPage__phase">
              <Link href={step.path} className="hubPage__phaseLink">
                {phase}
              </Link>
            </li>
          )
        })}
      </ol>
    </article>
  )
}
