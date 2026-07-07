import type { Metadata } from 'next'
import Image from 'next/image'
import PresentationBar from '@/components/layout/PresentationBar'
import { getCopy } from '@/content/copy'
import './globals.scss'

const copy = getCopy()

export const metadata: Metadata = {
  title: copy.meta.siteName,
  description: copy.meta.siteDescription,
  icons: {
    icon: '/pictogram.png',
    apple: '/pictogram.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs" data-scroll-behavior="smooth">
      <body>
        <PresentationBar />
        <main className="presentationMain">{children}</main>
      </body>
    </html>
  )
}
