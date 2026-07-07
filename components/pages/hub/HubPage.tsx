import Link from 'next/link'
import type { Dictionary } from '@/content/copy'

type HubPageProps = {
  dict: Dictionary
}

export default function HubPage({ dict }: HubPageProps) {
  const { hub } = dict

  return (
    <article className="hubPage">
      <header className="hubPage__hero">
        <p className="hubPage__eyebrow">{hub.eyebrow}</p>
        <h1 className="hubPage__title">{hub.title}</h1>
        <p className="hubPage__subtitle">{hub.subtitle}</p>
        <p className="hubPage__note">{hub.note}</p>
      </header>

      <ol className="hubPage__phases">
        {hub.phases.map((phase) => (
          <li key={phase.href} className="hubPage__phase">
            <Link href={`/${phase.href}`} className="hubPage__phaseLink">
              <span className="hubPage__phaseLabel">{phase.label}</span>
              <span className="hubPage__phaseDesc">{phase.desc}</span>
            </Link>
          </li>
        ))}
      </ol>
    </article>
  )
}
