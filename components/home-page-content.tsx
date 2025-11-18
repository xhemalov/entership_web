




// Server component shell for the homepage content
// (interactive parts are isolated into client components)

import TestimonialsSection from '@/components/testimonials-section'
import FAQSection from '@/components/faq-section'
import FooterSection from '@/components/footer-section'
import AvailableDatesSection from '@/components/available-dates-section'

export default function HomePageContent() {
  return (
    <div className="min-h-screen bg-purple-main text-cream">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 lg:px-12 bg-purple-main">
        <img 
          src="https://assets.macaly-user-data.dev/cdn-cgi/image/format=webp,width=2000,height=2000,fit=scale-down,quality=90,anim=true/h78douel905nwuxnwh8o3ggu/fs3w9kis8argxhrbeysyrfjn/bHLqutq0N2XjQ9sEPOwDk/logo-entership-no-background-white.png"
          alt="Entership Logo"
          className="h-12 w-auto"
        />
        <div className="hidden md:flex items-center space-x-8 text-cream font-inter">
          <a href="#" className="hover:text-yellow-accent transition-colors">DOMŮ</a>
          <a href="#" className="hover:text-yellow-accent transition-colors">KURZY</a>
          <a href="#" className="hover:text-yellow-accent transition-colors">O NÁS</a>
          <a href="#" className="hover:text-yellow-accent transition-colors">KONTAKT</a>
          <button className="bg-button-cream text-purple-main px-6 py-2 rounded-xl font-medium hover:bg-yellow-100 transition-colors">
            PŘIHLÁSIT SE
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-16 lg:px-12 lg:py-24 bg-purple-main">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl lg:text-6xl font-nasalization font-bold text-cream leading-relaxed-xl mb-6">
              AI ZÁKLADY:
              <br />
              POCHOP AI
            </h1>
            <p className="text-purple-200 font-inter text-lg mb-8 max-w-md">
              Objevte sílu umělé inteligence a naučte se ji využívat ve svůj prospěch
            </p>
            <button className="bg-button-cream text-purple-main px-8 py-4 rounded-xl font-inter font-semibold text-lg hover:bg-yellow-100 transition-colors">
              ZAČÍT HNED
            </button>
          </div>
          <div className="relative flex justify-center lg:justify-end">
            {/* AI Illustration */}
            <div className="rounded-lg overflow-visible">
              <img 
                src="https://assets.macaly-user-data.dev/cdn-cgi/image/format=webp,width=2000,height=2000,fit=scale-down,quality=90,anim=true/h78douel905nwuxnwh8o3ggu/fs3w9kis8argxhrbeysyrfjn/0SslSjdqUNkwCOgRZ9me2/frame-6.png"
                alt="AI Illustration"
                className="w-[700px] md:w-[900px] lg:w-[1100px] xl:w-[1300px] h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="px-6 py-16 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-nasalization font-bold text-cream text-center mb-16 leading-normal-xl">
            Proč by tě to mělo zajímat?
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-yellow-accent rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-purple-100 font-inter">
                  Umělá inteligence revolucionizuje způsob, jakým pracujeme a žijeme
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-yellow-accent rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-purple-100 font-inter">
                  Firmy hledají odborníky, kteří rozumí AI technologiím
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-yellow-accent rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-purple-100 font-inter">
                  Možnost zvýšit produktivitu až o 300%
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-yellow-accent rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-purple-100 font-inter">
                  Budoucnost patří těm, kdo se naučí AI využívat
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-yellow-accent rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-purple-100 font-inter">
                  Automatizace rutinních úkolů vám ušetří hodiny času
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-yellow-accent rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-purple-100 font-inter">
                  Konkurenční výhoda na trhu práce
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interest Section */}
      <section className="px-6 py-16 lg:px-12 bg-purple-main">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-nasalization font-bold text-cream text-center mb-16 leading-normal-xl">
            Co budeš potřebovat?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "laptop", title: "Počítač nebo laptop", desc: "Windows, Mac nebo Linux s připojením k internetu" },
              { icon: "globe", title: "Stabilní internet", desc: "Pro přístup k online nástrojům a platformám AI" },
              { icon: "mail", title: "Email účet", desc: "Pro registraci do AI služeb a komunikaci" },
              { icon: "brain", title: "Zvědavost", desc: "Otevřená mysl a chuť se učit nové věci" },
              { icon: "clock", title: "2-3 hodiny týdně", desc: "Čas na studium a procvičování materiálů" },
              { icon: "note", title: "Poznámkový blok", desc: "Pro zapisování důležitých poznatků a nápadů" },
              { icon: "target", title: "Konkrétní cíl", desc: "Představa, jak chceš AI využívat ve své práci" },
              { icon: "card", title: "Platební karta", desc: "Pro případné placené AI nástroje (volitelné)" },
              { icon: "handshake", title: "Ochota sdílet", desc: "Aktivní účast v komunitě a diskuzích" }
            ].map((item, index) => {
              const getIcon = (iconName: string) => {
                switch (iconName) {
                  case "laptop":
                    return (
                      <svg className="w-6 h-6 text-yellow-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-4" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 21h6" />
                      </svg>
                    );
                  case "globe":
                    return (
                      <svg className="w-6 h-6 text-yellow-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <circle cx="12" cy="12" r="10" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2 12a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                      </svg>
                    );
                  case "mail":
                    return (
                      <svg className="w-6 h-6 text-yellow-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2 6l10 7.5L22 6" />
                      </svg>
                    );
                  case "brain":
                    return (
                      <svg className="w-6 h-6 text-yellow-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    );
                  case "clock":
                    return (
                      <svg className="w-6 h-6 text-yellow-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <circle cx="12" cy="12" r="9" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
                      </svg>
                    );
                  case "note":
                    return (
                      <svg className="w-6 h-6 text-yellow-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2-13H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2z" />
                      </svg>
                    );
                  case "target":
                    return (
                      <svg className="w-6 h-6 text-yellow-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <circle cx="12" cy="12" r="1" />
                        <circle cx="12" cy="12" r="5" />
                        <circle cx="12" cy="12" r="9" />
                      </svg>
                    );
                  case "card":
                    return (
                      <svg className="w-6 h-6 text-yellow-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M1 10h22" />
                      </svg>
                    );
                  case "handshake":
                    return (
                      <svg className="w-6 h-6 text-yellow-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c1.657 0 3-1.343 3 3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm0 0c-1.657 0-3 1.343-3 3v6m6-6v6m-6 0c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3zm6 0c0 1.657 1.343 3 3 3s3-1.343 3-3-1.343-3-3-3-3 1.343-3 3z" />
                      </svg>
                    );
                  default:
                    return null;
                }
              };

              return (
                <div key={index} className="group text-center">
                  <div className="w-16 h-16 border-2 border-yellow-accent rounded-lg mx-auto mb-4 flex items-center justify-center">
                    {getIcon(item.icon)}
                  </div>
                  <h3 className="text-cream font-inter font-bold text-lg mb-2 leading-relaxed-xl">{item.title}</h3>
                  <p className="text-purple-200 font-inter">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="px-6 py-16 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-nasalization font-bold text-cream mb-8 leading-normal-xl">
            VIDÍME, ŽE SE TI CHCE KOUKAT NA NĚJAKÉ...
          </h2>
          <div className="relative bg-purple-light/20 border border-purple-light/30 rounded-lg aspect-video flex items-center justify-center">
            <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
              <div className="w-0 h-0 border-l-[20px] border-l-black border-y-[12px] border-y-transparent ml-1"></div>
            </button>
          </div>
        </div>
      </section>

      {/* Process Section - 3 Steps */}
      <section className="px-6 py-16 lg:px-12 bg-purple-main">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-nasalization font-bold text-cream text-center mb-16 leading-normal-xl">
            Témata kurzu
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-purple-main font-nasalization font-bold text-2xl">1</span>
              </div>
              <h3 className="text-cream font-inter font-bold text-lg mb-2 leading-relaxed-xl">Základy AI promptování</h3>
              <p className="text-purple-200 font-inter">Naučte se efektivně komunikovat s AI modely</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-purple-main font-nasalization font-bold text-2xl">2</span>
              </div>
              <h3 className="text-cream font-inter font-bold text-lg mb-2 leading-relaxed">Pokročilé techniky promptování</h3>
              <p className="text-purple-200 font-inter">Zvládněte pokročilé strategie pro lepší výsledky</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-purple-main font-nasalization font-bold text-2xl">3</span>
              </div>
              <h3 className="text-cream font-inter font-bold text-lg mb-2 leading-relaxed">Custom GPT</h3>
              <p className="text-purple-200 font-inter">Vytvářejte vlastní AI asistenty na míru</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-purple-main font-nasalization font-bold text-2xl">4</span>
              </div>
              <h3 className="text-cream font-inter font-bold text-lg mb-2 leading-relaxed">Praktické využití Custom GPT actions</h3>
              <p className="text-purple-200 font-inter">Integrujte AI do svých pracovních procesů</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-purple-main font-nasalization font-bold text-2xl">5</span>
              </div>
              <h3 className="text-cream font-inter font-bold text-lg mb-2 leading-relaxed">AI studio na generování obrázků</h3>
              <p className="text-purple-200 font-inter">Vytvářejte profesionální vizuály pomocí AI</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-purple-main font-nasalization font-bold text-2xl">6</span>
              </div>
              <h3 className="text-cream font-inter font-bold text-lg mb-2 leading-relaxed">Deep research</h3>
              <p className="text-purple-200 font-inter">Hloubkové analýzy a výzkum s AI</p>
            </div>
            <div className="text-center md:col-start-2">
              <div className="w-16 h-16 bg-yellow-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-purple-main font-nasalization font-bold text-2xl">7</span>
              </div>
              <h3 className="text-cream font-inter font-bold text-lg mb-2 leading-relaxed">GDPR, autorská práva, bezpečnost</h3>
              <p className="text-purple-200 font-inter">Právní a bezpečnostní aspekty AI (okrajově)</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <button className="bg-button-cream text-purple-main px-8 py-4 rounded-xl font-inter font-semibold text-lg hover:bg-yellow-100 transition-colors">
              ZAČÍT HNED
            </button>
          </div>
        </div>
      </section>

      {/* Course Content Section */}
      <section className="bg-purple-main px-6 py-16 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-nasalization font-bold text-cream text-center mb-16 leading-normal-xl">
            Co je součástí kurzu
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-light/20 border-2 border-yellow-accent rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-yellow-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-cream font-inter font-bold text-lg mb-2 leading-relaxed-xl">Kompletní materiály</h3>
              <p className="text-purple-200 font-inter">Všechny potřebné materiály pro studium AI</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-light/20 border-2 border-yellow-accent rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-yellow-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                </svg>
              </div>
              <h3 className="text-cream font-inter font-bold text-lg mb-2 leading-relaxed">Video lekce</h3>
              <p className="text-purple-200 font-inter">Praktické ukázky a vysvětlení</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-light/20 border-2 border-yellow-accent rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-yellow-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-cream font-inter font-bold text-lg mb-2 leading-relaxed">Podpora komunity</h3>
              <p className="text-purple-200 font-inter">Přístup do exkluzivní skupiny</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-light/20 border-2 border-yellow-accent rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-yellow-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
                </svg>
              </div>
              <h3 className="text-cream font-inter font-bold text-lg mb-2 leading-relaxed">Certifikát</h3>
              <p className="text-purple-200 font-inter">Oficiální potvrzení o absolvování</p>
            </div>
          </div>
        </div>
      </section>

      {/* Available Dates Section - extracted into client component for interactivity */}
      <AvailableDatesSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Final CTA Section */}
      <section className="px-6 py-16 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-nasalization font-bold text-cream mb-6 leading-normal-xl">
            Chceš být připraven na svět?
          </h2>
          <p className="text-purple-200 font-inter text-lg mb-8 max-w-2xl mx-auto">
            Nezůstávejte pozadu. Začněte svou cestu k mistrovství v AI ještě dnes.
          </p>
          <div className="relative bg-purple-light/20 border border-purple-light/30 rounded-lg aspect-video flex items-center justify-center mb-8">
            <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
              <div className="w-0 h-0 border-l-[20px] border-l-black border-y-[12px] border-y-transparent ml-1"></div>
            </button>
          </div>
          <button className="bg-button-cream text-purple-main px-12 py-6 rounded-xl font-inter font-bold text-xl hover:bg-yellow-100 transition-colors">
            ZAČÍT HNED
          </button>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection />

      {/* Instructors Section - O LEKTORECH AI */}
      <section className="px-6 py-16 lg:px-12 bg-purple-main">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-nasalization font-bold text-cream text-center mb-16 leading-normal-xl">
            O lektorovi AI
          </h2>
          <div className="flex justify-center max-w-4xl mx-auto">
            {/* Instructor 1 */}
            <div className="bg-purple-light/20 border border-purple-light/30 rounded-lg overflow-hidden w-full md:w-96">
              <div className="aspect-square bg-purple-light/30 flex items-center justify-center">
                <div className="w-32 h-32 bg-purple-light/50 rounded-full"></div>
              </div>
              <div className="p-6">
                <h3 className="text-cream font-inter font-bold text-xl mb-2 leading-relaxed-xl">
                  Petr Glaser
                </h3>
                <p className="text-yellow-accent font-inter text-sm mb-4">
                  AI Specialist, Staff Software Engineer
                </p>
                <p className="text-purple-200 font-inter text-sm leading-relaxed">
                  Expert na umělou inteligenci s více než 7 lety zkušeností v oboru. 
                  Pomohl desítkám studentů zorientovat se ve světě AI a využít její potenciál.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional FAQ Section */}
      <FAQSection title="FAQ" />

      {/* Footer */}
      <FooterSection />
    </div>
  )
}










