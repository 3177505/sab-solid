import type { Metadata } from 'next'
import { Carlito, Hedvig_Letters_Sans } from 'next/font/google'
import PresentationBar from '@/components/layout/PresentationBar'
import { getCopy } from '@/content/copy'
import './globals.scss'

const carlito = Carlito({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '700'],
  variable: '--font-carlito',
  display: 'swap',
})

const hedvigLettersSans = Hedvig_Letters_Sans({
  subsets: ['latin', 'latin-ext'],
  weight: '400',
  variable: '--font-hedvig-sans',
  display: 'swap',
})

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
  return (
    <html lang="cs" data-scroll-behavior="smooth">
      <body className={`${carlito.variable} ${hedvigLettersSans.variable}`}>
        <PresentationBar />
        <main className="presentationMain">{children}</main>
      </body>
    </html>
  )
}
