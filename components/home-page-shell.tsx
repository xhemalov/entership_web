"use client"

import dynamic from 'next/dynamic'

const HomeClient = dynamic(() => import('@/components/home-page-content'), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen bg-purple-main text-cream flex items-center justify-center">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-yellow-accent border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="font-inter">Načítání…</p>
      </div>
    </div>
  ),
})

export default function HomePageShell() {
  return <HomeClient />
}
