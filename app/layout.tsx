import type { Metadata } from 'next'
import { Carlito } from 'next/font/google'
import PresentationBar from '@/components/layout/PresentationBar'
import { getCopy } from '@/content/copy'
import './globals.scss'

const carlito = Carlito({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '700'],
  variable: '--font-carlito',
  display: 'swap',
})

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
      <body className={carlito.variable}>
        <PresentationBar />
        <main className="presentationMain">{children}</main>
      </body>
    </html>
  )
}
