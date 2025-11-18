"use client"

export default function FooterSection() {
  return (
    <footer className="px-6 py-16 lg:px-12 bg-purple-main border-t border-purple-light/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-foreground font-nasalization font-bold text-xl mb-6 leading-normal-xl">ENTERSHIP</h3>
            <p className="font-inter text-sm leading-relaxed">
              Staňte se expertem na umělou inteligenci a získejte konkurenční výhodu v digitálním světě.
            </p>
          </div>
          <div>
            <h4 className="text-foreground font-inter font-semibold mb-4 leading-relaxed-xl">Rychlé odkazy</h4>
            <ul className="space-y-2 font-inter text-sm">
              <li><a href="#" className="hover:text-yellow-accent transition-colors">O nás</a></li>
              <li><a href="#" className="hover:text-yellow-accent transition-colors">Kurzy</a></li>
              <li><a href="#" className="hover:text-yellow-accent transition-colors">Kontakt</a></li>
              <li><a href="#" className="hover:text-yellow-accent transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-foreground font-inter font-semibold mb-4 leading-relaxed-xl">Kontakt</h4>
            <div className="space-y-2 font-inter text-sm">
              <p>info@aikurzy.cz</p>
              <p>+420 123 456 789</p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="w-10 h-10 bg-yellow-accent rounded-lg flex items-center justify-center text-black hover:bg-yellow-300 hover:shadow-lg hover:scale-110 transition-all duration-300 text-sm font-bold shadow-md">
                  f
                </a>
                <a href="#" className="w-10 h-10 bg-yellow-accent rounded-lg flex items-center justify-center text-black hover:bg-yellow-300 hover:shadow-lg hover:scale-110 transition-all duration-300 text-sm font-bold shadow-md">
                  in
                </a>
                <a href="#" className="w-10 h-10 bg-yellow-accent rounded-lg flex items-center justify-center text-black hover:bg-yellow-300 hover:shadow-lg hover:scale-110 transition-all duration-300 text-sm font-bold shadow-md">
                  @
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-purple-light/20 pt-8 text-center">
          <p className="font-inter text-sm">
            © 2025 Entership. Všechna práva vyhrazena.
          </p>
        </div>
      </div>
    </footer>
  )
}














