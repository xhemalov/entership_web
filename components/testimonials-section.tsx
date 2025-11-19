"use client"

import { Button } from "@/components/ui/button"

export default function TestimonialsSection() {
  return (
    <section className="px-6 py-16 lg:px-12 bg-purple-main">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Testimonial */}
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-nasalization font-bold text-foreground leading-normal-xl">
              DŘÍVE JSEM BYL VE SVĚTĚ<br />
              IT ZTRACEN, ALE OD DOBY,<br />
              CO JSEM NA KURZECH NMIT,<br />
              TAK UŽ NEJSEM!
            </h2>
            
            {/* Navigation and customer info */}
            <div className="flex items-center justify-between gap-8">
              <button className="w-12 h-12 bg-[#FFFBEB]/15 border border-purple-light/30 rounded-lg flex items-center justify-center text-cream hover:bg-purple-light/30 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-light/40 rounded-full flex items-center justify-center">
                    <span className="text-cream font-bold text-lg">👤</span>
                  </div>
                  <div>
                    <h4 className="text-cream font-inter font-semibold text-lg leading-relaxed-xl">
                      ŠŤASTNÝ ZÁKAZNÍK
                    </h4>
                  </div>
                </div>
              </div>
              
              <button className="w-12 h-12 bg-[#FFFBEB]/15 border border-purple-light/30 rounded-lg flex items-center justify-center text-cream hover:bg-purple-light/30 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Right side - Video placeholder */}
          <div className="relative">
            <div className="bg-purple-light/20 border border-purple-light/30 rounded-2xl aspect-video flex items-center justify-center">
              <div className="w-24 h-24 bg-button-cream rounded-full flex items-center justify-center">
                <div className="w-0 h-0 border-l-[24px] border-l-purple-main border-y-[16px] border-y-transparent ml-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}













