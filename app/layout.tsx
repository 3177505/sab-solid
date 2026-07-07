import type { Metadata } from 'next'
import ProjectNav from '@/components/layout/ProjectNav'
import { getCopy } from '@/content/copy'
import './globals.scss'

const copy = getCopy()

export const metadata: Metadata = {
  title: copy.meta.siteName,
  description: copy.meta.siteDescription,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const dict = getCopy()

  return (
    <html lang="cs">
      <body>
        <ProjectNav nav={dict.nav} lang={dict.lang} />
        <main>{children}</main>
      </body>
    </html>
  )
}
