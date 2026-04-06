import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import '../styles/globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata: Metadata = {
  title: {
    default: 'NNF HUB — Builds & Estratégias Competitivas',
    template: '%s | NNF HUB',
  },
  description:
    'Hub profissional de builds, composições e estratégias para EA FC Pro Clubs e Teamfight Tactics. Guias atualizados, tier lists e dicas de meta.',
  keywords: ['EA FC 26', 'Pro Clubs', 'TFT', 'Teamfight Tactics', 'builds', 'composições', 'guia', 'meta', 'tier list'],
  authors: [{ name: 'NNF HUB Team' }],
  openGraph: {
    title: 'NNF HUB — Builds & Estratégias Competitivas',
    description: 'Hub profissional de builds e estratégias para jogos competitivos.',
    type: 'website',
    locale: 'pt_BR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
