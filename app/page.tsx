import type { Metadata } from 'next'
import HomePageShell from '@/components/home-page-shell'

export const metadata: Metadata = {
  title: 'AI Základy: Pochop AI | Entership',
  description:
    'Úvodní kurz, který ti srozumitelně vysvětlí základy umělé inteligence a ukáže praktické použití.',
  openGraph: {
    images: [
      {
        url: 'https://assets.macaly-user-data.dev/cdn-cgi/image/format=webp,width=1200,quality=90/fs3w9kis8argxhrbeysyrfjn/bHLqutq0N2XjQ9sEPOwDk/logo-entership-no-background-white.png',
      },
    ],
  },
}

export default function Home() {
  return <HomePageShell />
}

