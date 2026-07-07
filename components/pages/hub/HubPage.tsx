import type { Dictionary } from '@/content/copy'
import Image from 'next/image'

type HubPageProps = {
  dict: Dictionary
}

export default function HubPage({ dict }: HubPageProps) {
  const { hub } = dict

  return (
    <article className="hubPage">
      <header className="hubPage__header">
        <h1 className="hubPage__title">{hub.title}</h1>
        <p className="hubPage__meta">{hub.meta}</p>
      </header>

      <ol className="hubPage__phases">
        {hub.phases.map((phase) => (
          <li key={phase} className="hubPage__phase">
            {phase}
          </li>
        ))}
      </ol>
    </article>
  )
}
