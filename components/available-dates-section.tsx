

"use client"

import { useState } from 'react'
import FAQSection from '@/components/faq-section'

export default function AvailableDatesSection() {
  const [isToggled, setIsToggled] = useState(false)

  return (
    <section className="bg-purple-main px-6 py-16 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl lg:text-5xl font-nasalization font-bold text-cream text-center mb-16 leading-normal-xl">
          VOLNÉ TERMÍNY
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-12">
          {/* Left Card - KOHORTA (fixed) */}
          <button
            type="button"
            aria-label="Vybrat: Self kurz Kohorta"
            className="relative bg-gradient-to-b from-button-cream via-button-cream to-button-cream/90 border-2 border-yellow-accent rounded-2xl overflow-hidden shadow-2xl shadow-purple-light/20 hover:shadow-3xl hover:shadow-purple-light/30 transition-all duration-300 hover:-translate-y-2 group w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-accent/80 cursor-pointer"
          >
            {/* Premium Badge */}
            <div className="absolute top-4 right-4 bg-yellow-accent text-purple-main px-4 py-1 rounded-full font-inter font-bold text-xs uppercase tracking-wide shadow-lg">
              Doporučujeme
            </div>

            {/* Icon section */}
            <div className="pt-12 pb-8 px-8 text-center">
              <div className="w-24 h-24 bg-purple-main rounded-2xl mx-auto flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform duration-300">
                <svg className="w-12 h-12 text-yellow-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>

            {/* Content section */}
            <div className="bg-purple-main px-8 pt-8 pb-10 text-center rounded-t-3xl -mt-4">
              <h3 className="text-cream font-inter font-bold text-xl mb-3 leading-tight">
                SELF KURZ
              </h3>
              <span className="text-yellow-accent font-inter font-bold text-xl mb-6 block">
                KOHORTA
              </span>

              {/* Sales highlight */}
              <div className="mb-6 pb-6 border-b border-purple-light/30">
                <p className="text-cream/90 font-inter text-sm leading-relaxed px-2">
                  Osobní podpora lektora a individuální<br />
                  konzultace pro maximální výsledky
                </p>
              </div>

              {/* Feature list with checkmarks */}
              <div className="text-cream font-inter text-sm space-y-3 mb-8">
                <div className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 text-yellow-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Start 12. 1. 2026</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 text-yellow-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Všechny lekce</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 text-yellow-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Osobní konzultace</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 text-yellow-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Doba trvání 4–5 týdnů</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 text-yellow-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>1x týdně nahrávaný Q&A</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 text-yellow-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Vlastní skupina na diskordu</span>
                </div>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="text-yellow-accent font-nasalization font-bold text-4xl mb-1">
                  2.500 CZK
                </div>
                <p className="text-cream/60 font-inter text-xs">Jednorázová platba</p>
              </div>

              {/* CTA Button */}
              <div className="w-full bg-button-cream text-purple-main px-8 py-4 rounded-xl font-inter font-bold text-base group-hover:bg-yellow-accent group-hover:scale-105 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                ZAČÍT NYNÍ
              </div>
            </div>
          </button>

          {/* Right Card - FLEX (unchanged) */}
          <button
            type="button"
            aria-label="Vybrat: Jen videa bez lektora"
            className="relative bg-gradient-to-b from-purple-light/20 via-purple-light/15 to-purple-light/10 border border-purple-light/40 rounded-2xl overflow-hidden hover:border-purple-light/60 hover:shadow-xl hover:shadow-purple-light/10 transition-all duration-300 group w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-accent/80 cursor-pointer"
          >
            {/* Icon section */}
            <div className="pt-12 pb-8 px-8 text-center">
              <div className="w-24 h-24 bg-purple-light/30 rounded-2xl mx-auto flex items-center justify-center border-2 border-purple-light/50 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                <svg className="w-12 h-12 text-purple-light" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>

            {/* Content section */}
            <div className="bg-purple-main px-8 pt-8 pb-10 text-center rounded-t-3xl -mt-4">
              <h3 className="text-cream font-inter font-bold text-xl mb-3 leading-tight">
                JEN VIDEA
              </h3>
              <span className="text-yellow-accent font-inter font-bold text-xl mb-6 block">
                FLEX
              </span>

              {/* Sales highlight */}
              <div className="mb-6 pb-6 border-b border-purple-light/30">
                <p className="text-cream/90 font-inter text-sm leading-relaxed px-2">
                  Učte se vlastním tempem kdykoli<br />
                  a kdekoli bez časových omezení
                </p>
              </div>

              {/* Feature list with checkmarks */}
              <div className="text-cream font-inter text-sm space-y-3 mb-8">
                <div className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 text-purple-light flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Start kdykoliv</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 text-purple-light flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Všechna videa</span>
                </div>
                <div className="flex items-center justify-center gap-2 opacity-40">
                  <svg className="w-5 h-5 text-purple-light flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>Bez konzultací</span>
                </div>
                <div className="flex items-center justify-center gap-2 opacity-0 pointer-events-none">
                  <svg className="w-5 h-5 text-purple-light flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Placeholder</span>
                </div>
                <div className="flex items-center justify-center gap-2 opacity-0 pointer-events-none">
                  <svg className="w-5 h-5 text-purple-light flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Placeholder</span>
                </div>
                <div className="flex items-center justify-center gap-2 opacity-0 pointer-events-none">
                  <svg className="w-5 h-5 text-purple-light flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Placeholder</span>
                </div>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="text-cream font-nasalization font-bold text-4xl mb-1">
                  2.500 CZK
                </div>
                <p className="text-cream/60 font-inter text-xs">Jednorázová platba</p>
              </div>

              {/* CTA Button */}
              <div className="w-full bg-purple-light/40 text-cream px-8 py-4 rounded-xl font-inter font-bold text-base border-2 border-purple-light/50 group-hover:bg-purple-light/60 group-hover:border-purple-light group-hover:scale-105 transition-all duration-300">
                ZAČÍT NYNÍ
              </div>
            </div>
          </button>
        </div>

        {/* First FAQ Section with toggle inside */}
        <FAQSection isToggled={isToggled} setIsToggled={setIsToggled} showToggle={true} />
      </div>
    </section>
  )
}

