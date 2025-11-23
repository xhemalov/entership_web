"use client";

import FooterSection from "@/components/footer-section";
import Navbar from "@/components/navbar";
import TestimonialsCarousel from "@/components/testimonials-carousel";
import {
	Brain,
	Coffee,
	Cpu,
	Heart,
	Lightbulb,
	Rocket,
	Smile,
	Users,
	Zap,
} from "lucide-react";

export default function AboutPageContent() {
	return (
		<div className="min-h-screen bg-purple-main text-cream">
			{/* Navigation */}
			<Navbar />

			{/* Hero Section */}
			<section className="px-6 py-16 lg:px-12 lg:py-24 bg-purple-main relative overflow-hidden">
				<div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
					<div className="max-w-2xl z-10">
						<h1 className="text-4xl lg:text-6xl font-nasalization font-bold text-foreground leading-relaxed-xl mb-6 uppercase">
							Co všechno
							<br />o nás chceš
							<br />
							vědět je zde!
						</h1>
						<p className="font-inter text-lg mb-8 max-w-md text-cream/90">
							Jsme parta nadšenců, kteří věří, že IT není jen pro vyvolené.
							Děláme vzdělávání lidsky, prakticky a bez zbytečného balastu.
						</p>
						<a
							href="#pribeh"
							className="inline-block uppercase bg-button-cream text-[#701A75] px-8 py-4 rounded-xl font-inter font-semibold text-lg hover:bg-yellow-100 transition-colors"
						>
							Poznej Entership
						</a>
					</div>
					<div className="relative flex justify-center lg:justify-end">
						<div className="w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] bg-button-cream rounded-full flex items-center justify-center relative z-10">
							{/* Placeholder for hero image/graphic */}
							<div className="text-black font-nasalization text-2xl opacity-20">
								LOGO / IMAGE
							</div>
						</div>
						{/* Decorative elements matching design vibe */}
						<div className="absolute top-0 right-0 w-full h-full bg-purple-light/20 blur-3xl rounded-full -z-10" />
					</div>
				</div>
			</section>

			{/* Story Section */}
			<section
				id="pribeh"
				className="px-6 py-16 lg:px-12 bg-purple-main scroll-mt-24"
			>
				<div className="max-w-4xl mx-auto">
					<h2 className="text-3xl lg:text-5xl font-nasalization font-bold text-foreground mb-12 leading-normal-xl">
						Proč jsme vznikli + náš příběh
					</h2>

					<div className="space-y-8 font-inter text-lg leading-relaxed text-cream/90">
						<p>
							Před pár lety začal Petr pomáhat kamarádům s cestou do IT. Hledali
							zdroje, stáže, směr. Bylo jasné, že v tom nejsou sami - a že svět
							IT potřebuje lepší oporu než fórum z roku 2008.
						</p>
						<p>
							Po chvíli se k němu přidal Pavel (ano, skutečně díky náhodné
							spolujízdě přes BlaBlaCar) a Petrova partnerka Lýdie, tehdy
							čerstvý junior. Každý z nich viděl jiný kus problému, ale všichni
							stejnou příležitost:{" "}
							<strong className="text-yellow-accent">
								zpřístupnit vstup do IT a udělat ho lidský, přehledný a bez
								zbytečného balastu.
							</strong>
						</p>
						<p>
							Začínali jsme po večerech. Dělali jsme komunitní akce, streamy,
							psali materiály, hledali stáže a podporovali juniory, jak to jen
							šlo. Z obýváku se stal projekt, který rostl s každým člověkem,
							kterému jsme pomohli nakopnout kariéru.
						</p>
						<p>A jak šel čas, všimli jsme si něčeho zajímavého:</p>
						<strong className="text-yellow-accent">
							Kurzy a obsah, které jsme dělali pro juniory, začaly přitahovat i
							lidi mimo ten původní svět. Profíky z IT, kreativce, právníky,
							markeťáky, strojaře, učitele, stavaře - kohokoliv, kdo nechtěl
							zůstat stát, zatímco technologie běží dál.
						</strong>
						<p>
							Ne proto, že jsme změnili směr. Ale proto, že kvalitní vzdělávání
							je užitečné komukoli, kdo chce růst.
						</p>
						<p className="text-xl font-bold text-[#FFFBEB] border-l-4 border-yellow-accent pl-6 py-2 my-8">
							A tak vznikl Entership - místo, kde může růst kdokoliv, kdo chce
							držet krok s technologiemi.
						</p>
						<p>
							Jsme nerdi, máme slabost pro deskovky, sci-fi, fantasy i dobrý tip
							na nový tool.
						</p>
					</div>
				</div>
			</section>

			<section className="px-6 py-16 lg:px-12 bg-purple-main">
				<div className="max-w-[1400px] mx-auto">
					<h2 className="text-3xl lg:text-5xl font-nasalization font-bold text-foreground text-center mb-16 leading-normal-xl">
						Proč jsme ti praví na let technologickým vesmírem?
					</h2>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						<div className="bg-[#FFFBEB]/15 border border-purple-light/20 p-8 rounded-2xl hover:border-yellow-accent/50 transition-colors">
							<div className="w-12 h-12 bg-transparent border border-yellow-accent rounded-lg flex items-center justify-center mb-6">
								<Rocket className="w-6 h-6 text-yellow-accent" />
							</div>
							<h3 className="text-xl font-bold font-nasalization text-[#FFFBEB] mb-4">
								Učíme prakticky, ne akademicky
							</h3>
							<p className="font-inter text-cream/80">
								Všechno, co děláme, je postavené na reálných situacích z IT
								světa. Žádné učebnicové fráze, které v praxi nepoužiješ.
							</p>
						</div>

						<div className="bg-[#FFFBEB]/15 border border-purple-light/20 p-8 rounded-2xl hover:border-yellow-accent/50 transition-colors">
							<div className="w-12 h-12 bg-transparent border border-yellow-accent rounded-lg flex items-center justify-center mb-6">
								<Smile className="w-6 h-6 text-yellow-accent" />
							</div>
							<h3 className="text-xl font-bold font-nasalization text-[#FFFBEB] mb-4">
								Vysvětlujeme lidsky (a s humorem)
							</h3>
							<p className="font-inter text-cream/80">
								Žádný přehnaný formální tón. Mluvíme srozumitelně, přímo a s
								trochou geek humoru, který odlehčí i náročná témata.
							</p>
						</div>

						<div className="bg-[#FFFBEB]/15 border border-purple-light/20 p-8 rounded-2xl hover:border-yellow-accent/50 transition-colors">
							<div className="w-12 h-12 bg-transparent border border-yellow-accent rounded-lg flex items-center justify-center mb-6">
								<Zap className="w-6 h-6 text-yellow-accent" />
							</div>
							<h3 className="text-xl font-bold font-nasalization text-[#FFFBEB] mb-4">
								Pomáháme růst - nevedeme za ručičku
							</h3>
							<p className="font-inter text-cream/80">
								Student má od nás plnou podporu, ale očekáváme jeho aktivní
								přístup. Cílem je posunout tě dál, než čekáš, ne dělat věci za
								tebe.
							</p>
						</div>

						<div className="bg-[#FFFBEB]/15 border border-purple-light/20 p-8 rounded-2xl hover:border-yellow-accent/50 transition-colors">
							<div className="w-12 h-12 bg-transparent border border-yellow-accent rounded-lg flex items-center justify-center mb-6">
								<Cpu className="w-6 h-6 text-yellow-accent" />
							</div>
							<h3 className="text-xl font-bold font-nasalization text-[#FFFBEB] mb-4">
								Moderní technologie a žádný bullshit
							</h3>
							<p className="font-inter text-cream/80">
								AI, nové nástroje, vibecoding, automatizace - držíme krok s tím,
								co se děje. A když je něco úplná blbost, prostě to řekneme
								narovinu.
							</p>
						</div>

						<div className="bg-[#FFFBEB]/15 border border-purple-light/20 p-8 rounded-2xl hover:border-yellow-accent/50 transition-colors">
							<div className="w-12 h-12 bg-transparent border border-yellow-accent rounded-lg flex items-center justify-center mb-6">
								<Coffee className="w-6 h-6 text-yellow-accent" />
							</div>
							<h3 className="text-xl font-bold font-nasalization text-[#FFFBEB] mb-4">
								Jsme nerdi tělem i duší
							</h3>
							<p className="font-inter text-cream/80">
								Milujeme deskovky, sci-fi, fantasy, čaj i kávu a absurdní IT
								situace. Učíme tak, aby to bylo moderní, přístupné a lidské.
							</p>
						</div>

						<div className="bg-[#FFFBEB]/15 border border-purple-light/20 p-8 rounded-2xl hover:border-yellow-accent/50 transition-colors">
							<div className="w-12 h-12 bg-transparent border border-yellow-accent rounded-lg flex items-center justify-center mb-6">
								<Lightbulb className="w-6 h-6 text-yellow-accent" />
							</div>
							<h3 className="text-xl font-bold font-nasalization text-[#FFFBEB] mb-4">
								Žádné hloupé otázky
							</h3>
							<p className="font-inter text-cream/80">
								Bojíš se zeptat? U nás nemusíš. Kdo se neptá, nic se nedozví.
								Vysvětlíme ti to klidně pětkrát, dokud ti to nesepne.
							</p>
						</div>

						<div className="bg-[#FFFBEB]/15 border border-purple-light/20 p-8 rounded-2xl hover:border-yellow-accent/50 transition-colors">
							<div className="w-12 h-12 bg-transparent border border-yellow-accent rounded-lg flex items-center justify-center mb-6">
								<Brain className="w-6 h-6 text-yellow-accent" />
							</div>
							<h3 className="text-xl font-bold font-nasalization text-[#FFFBEB] mb-4">
								Zpětná vazba, co posouvá
							</h3>
							<p className="font-inter text-cream/80">
								Neplácáme tě jen po zádech. Řekneme ti narovinu, co zlepšit, ale
								taky ti ukážeme, jak na to. Konstruktivně a bez hejtu.
							</p>
						</div>

						<div className="bg-[#FFFBEB]/15 border border-purple-light/20 p-8 rounded-2xl hover:border-yellow-accent/50 transition-colors">
							<div className="w-12 h-12 bg-transparent border border-yellow-accent rounded-lg flex items-center justify-center mb-6">
								<Users className="w-6 h-6 text-yellow-accent" />
							</div>
							<h3 className="text-xl font-bold font-nasalization text-[#FFFBEB] mb-4">
								Učíme se navzájem
							</h3>
							<p className="font-inter text-cream/80">
								Nikdo neví všechno. Svět IT letí dopředu a my se učíme s ním.
								Jsme otevření diskuzi a často se učíme i my od tebe.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Emotional Statement Strip */}
			<section className="py-16 bg-button-cream text-[#701A75] text-center px-6">
				<div className="max-w-4xl mx-auto">
					<h3 className="text-2xl md:text-4xl font-nasalization font-bold leading-relaxed">
						„Jsme sehraný tým, který miluje technologie. A ty se můžeš stát jeho
						součástí.“
					</h3>
				</div>
			</section>

			<section className="px-6 py-16 lg:px-12 bg-purple-main">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-3xl lg:text-5xl font-nasalization font-bold text-foreground text-center mb-16 leading-normal-xl">
						Náš tým
					</h2>

					<div className="grid md:grid-cols-3 gap-8">
						<div className="group">
							<div className="aspect-square rounded-2xl overflow-hidden mb-6 border-2 border-transparent group-hover:border-yellow-accent transition-all">
								<img
									src="/petr.webp"
									alt="Petr Glaser"
									className="w-full h-full object-cover"
								/>
							</div>
							<h3 className="text-2xl font-bold font-inter text-[#FFFBEB] mb-1">
								Petr Glaser
							</h3>
							<p className="text-yellow-accent font-medium mb-4">
								Founder & Lektor
							</p>
							<p className="font-inter text-cream/80 text-sm leading-relaxed">
								Fanatik AI a produktivity. Učím lidi, jak nepracovat tvrdě, ale
								chytře. Miluju, když vidím ten "aha!" moment v očích studentů.
							</p>
						</div>

						{/* Lýdie */}
						<div className="group">
							<div className="aspect-square rounded-2xl overflow-hidden mb-6 border-2 border-transparent group-hover:border-yellow-accent transition-all">
								<img
									src="/lydie.jpg"
									alt="Lýdie"
									className="w-full h-full object-cover scale-[3]"
								/>
							</div>
							<h3 className="text-2xl font-bold font-inter text-[#FFFBEB] mb-1">
								Lýdie
							</h3>
							<p className="text-yellow-accent font-medium mb-4">
								Community & Support
							</p>
							<p className="font-inter text-cream/80 text-sm leading-relaxed">
								Duše komunity. Pomáhám nováčkům překonat první překážky a cítit
								se v IT světě jako doma. Bývalý junior, teď opora.
							</p>
						</div>

						<div className="group">
							<div className="aspect-square bg-purple-light/20 rounded-2xl overflow-hidden mb-6 border-2 border-transparent group-hover:border-yellow-accent transition-all flex items-center justify-center">
								<img
									src="/pavel.png"
									alt="Pavel Koudelka"
									className="w-full h-full object-cover"
								/>{" "}
							</div>
							<h3 className="text-2xl font-bold font-inter text-[#FFFBEB] mb-1">
								Pavel
							</h3>
							<p className="text-yellow-accent font-medium mb-4">
								Co-Founder & Operations
							</p>
							<p className="font-inter text-cream/80 text-sm leading-relaxed">
								Ten, kdo drží chaos na uzdě. Starám se o to, aby všechno běželo
								hladce a studenti měli vše, co potřebují. BlaBlaCar osud.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Testimonials (Reused) */}
			<TestimonialsCarousel />

			{/* CTA Block */}
			<section className="px-6 py-16 lg:px-12">
				<div className="max-w-4xl mx-auto">
					<div className="bg-[#FFFBEB]/15 border border-[#FFFBEB] rounded-lg p-12 md:p-16 text-center mb-8">
						<h2 className="text-2xl md:text-4xl font-nasalization font-bold text-[#4DEEEA] leading-relaxed uppercase tracking-wide">
							MÁŠ MOŘE ZKUŠENOSTÍ A<br className="hidden md:block" />
							CHCEŠ SE O KAPKU PODĚLIT?
							<br className="hidden md:block" />
							STAŇ SE NAŠÍM LEKTOREM!
						</h2>
					</div>

					<div className="text-center">
						<a
							href="mailto:petr.glaser@entership.cz"
							className="inline-block bg-button-cream text-[#701A75] px-12 py-4 rounded-lg font-inter font-bold text-lg hover:bg-yellow-100 transition-colors uppercase tracking-wide"
						>
							CHCI BÝT LEKTOREM
						</a>
					</div>
				</div>
			</section>

			{/* Contact CTA Section */}
			<section className="px-6 py-16 lg:px-12 bg-purple-main text-center">
				<div className="max-w-4xl mx-auto">
					<h2 className="text-3xl lg:text-5xl font-nasalization font-bold text-foreground mb-8 leading-normal-xl">
						Neváhej, ať ti neujede vlak!
					</h2>
					<p className="font-inter text-lg mb-8 text-cream/90">
						Máš dotaz nebo se chceš poradit? Jsme tu pro tebe.
					</p>
					<a
						href="/kontakt"
						className="inline-block uppercase bg-button-cream text-[#701A75] px-8 py-4 rounded-xl font-inter font-bold text-lg hover:bg-yellow-100 transition-colors"
					>
						Kontaktuj nás
					</a>
				</div>
			</section>

			<FooterSection />
		</div>
	);
}
