"use client";

import FooterSection from "@/components/footer-section";
import {
	Facebook,
	Instagram,
	Linkedin,
	Mail,
	MessageCircle,
	Users,
} from "lucide-react";

export default function ContactPageContent() {
	return (
		<div className="min-h-screen bg-purple-main text-cream">
			{/* Navigation */}
			<nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 lg:px-12 bg-purple-main border-b border-purple-light/10">
				<a href="/">
					<img
						src="https://assets.macaly-user-data.dev/cdn-cgi/image/format=webp,width=2000,height=2000,fit=scale-down,quality=90,anim=true/h78douel905nwuxnwh8o3ggu/fs3w9kis8argxhrbeysyrfjn/bHLqutq0N2XjQ9sEPOwDk/logo-entership-no-background-white.png"
						alt="Entership Logo"
						className="h-12 w-auto"
					/>
				</a>
				<div className="hidden md:flex items-center space-x-8 text-cream font-inter">
					<a
						href="/#available-dates"
						className="hover:text-yellow-accent transition-colors"
					>
						KURZY
					</a>
					<a
						href="/o-nas"
						className="hover:text-yellow-accent transition-colors"
					>
						O NÁS
					</a>
					<a href="/kontakt" className="text-yellow-accent transition-colors">
						KONTAKT
					</a>
					<a
						href="/#available-dates"
						className="bg-button-cream text-black px-6 py-2 rounded-xl font-medium hover:bg-yellow-100 transition-colors"
					>
						PŘIHLÁSIT SE
					</a>
				</div>
			</nav>

			{/* Header Section */}
			<section className="px-6 py-16 lg:px-12 lg:py-24 bg-purple-main">
				<div className="max-w-4xl mx-auto text-center">
					<h1 className="text-4xl lg:text-6xl font-nasalization font-bold text-foreground leading-relaxed-xl mb-6 uppercase">
						Ozvi se nám
					</h1>
					<p className="font-inter text-lg lg:text-xl text-cream/90 max-w-2xl mx-auto leading-relaxed">
						Potřebuješ směr, radu nebo jen nakopnout do IT?
						<br />
						Napiš, pingni, přidej se - jsme tu.
					</p>
				</div>
			</section>

			{/* Social Links Grid */}
			<section className="px-6 pb-16 lg:px-12 bg-purple-main">
				<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
					{/* Discord */}
					<div className="bg-[#FFFBEB]/15 border border-purple-light/20 p-8 rounded-2xl hover:border-yellow-accent/50 transition-colors group">
						<div className="w-12 h-12 bg-yellow-accent rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
							<MessageCircle className="w-6 h-6 text-black" />
						</div>
						<h3 className="text-2xl font-bold font-nasalization text-white mb-2">
							Discord – naše hlavní základna
						</h3>
						<p className="font-inter text-cream/80 mb-6">
							Nejrychlejší cesta k nám. Komunita, podpora, novinky a lidé, co
							řeší podobné věci jako ty.
						</p>
						<a
							href="https://naucme.it/discord"
							className="inline-flex items-center gap-2 text-yellow-accent font-bold hover:text-white transition-colors"
						>
							Přidat se na Discord <span className="text-xl">→</span>
						</a>
					</div>

					{/* Facebook */}
					<div className="bg-[#FFFBEB]/15 border border-purple-light/20 p-8 rounded-2xl hover:border-yellow-accent/50 transition-colors group">
						<div className="w-12 h-12 bg-yellow-accent rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
							<Facebook className="w-6 h-6 text-black" />
						</div>
						<h3 className="text-2xl font-bold font-nasalization text-white mb-2">
							Facebook – novinky & akce
						</h3>
						<p className="font-inter text-cream/80 mb-6">
							Streamy, komunitní eventy a užitečný obsah, který ti pomůže držet
							krok.
						</p>
						<a
							href="https://www.facebook.com/NaucMeIT/"
							className="inline-flex items-center gap-2 text-yellow-accent font-bold hover:text-white transition-colors"
						>
							Sledovat Facebook <span className="text-xl">→</span>
						</a>
					</div>

					{/* LinkedIn */}
					<div className="bg-[#FFFBEB]/15 border border-purple-light/20 p-8 rounded-2xl hover:border-yellow-accent/50 transition-colors group">
						<div className="w-12 h-12 bg-yellow-accent rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
							<Linkedin className="w-6 h-6 text-black" />
						</div>
						<h3 className="text-2xl font-bold font-nasalization text-white mb-2">
							LinkedIn – pro kariérní růst
						</h3>
						<p className="font-inter text-cream/80 mb-6">
							Profesionální tipy, zákulisí, příležitosti a vhledy ze světa
							technologií.
						</p>
						<a
							href="https://www.linkedin.com/company/nauc-me-it"
							className="inline-flex items-center gap-2 text-yellow-accent font-bold hover:text-white transition-colors"
						>
							Sledovat LinkedIn <span className="text-xl">→</span>
						</a>
					</div>

					{/* Instagram */}
					<div className="bg-[#FFFBEB]/15 border border-purple-light/20 p-8 rounded-2xl hover:border-yellow-accent/50 transition-colors group">
						<div className="w-12 h-12 bg-yellow-accent rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
							<Instagram className="w-6 h-6 text-black" />
						</div>
						<h3 className="text-2xl font-bold font-nasalization text-white mb-2">
							Instagram – Entership vibe
						</h3>
						<p className="font-inter text-cream/80 mb-6">
							Backstage, memy, rychlé tipy a kousek našeho nerdího světa.
						</p>
						<a
							href="https://www.instagram.com/naucmeit/"
							className="inline-flex items-center gap-2 text-yellow-accent font-bold hover:text-white transition-colors"
						>
							Sledovat Instagram <span className="text-xl">→</span>
						</a>
					</div>
				</div>
			</section>

			{/* Email Section */}
			<section className="px-6 pb-16 lg:px-12 bg-purple-main">
				<div className="max-w-4xl mx-auto">
					<div className="bg-[#FFFBEB]/15 border border-white rounded-lg p-12 text-center">
						<div className="w-16 h-16 bg-yellow-accent rounded-full flex items-center justify-center mx-auto mb-6">
							<Mail className="w-8 h-8 text-black" />
						</div>
						<h2 className="text-3xl font-nasalization font-bold text-white mb-4">
							Email
						</h2>
						<p className="font-inter text-cream/80 mb-6">
							Na dotazy, spolupráce i partnerships:
						</p>
						<a
							href="mailto:hello@entership.cz"
							className="text-2xl md:text-4xl font-bold text-[#4DEEEA] hover:text-white transition-colors"
						>
							hello@entership.cz
						</a>
					</div>
				</div>
			</section>

			{/* Footer Note */}
			<section className="px-6 pb-24 lg:px-12 bg-purple-main text-center">
				<div className="max-w-2xl mx-auto">
					<h3 className="text-xl font-nasalization font-bold text-yellow-accent mb-4">
						Malý dovětek
					</h3>
					<p className="font-inter text-cream/80 leading-relaxed">
						Neboj se nám napsat.
						<br />
						Zvykáme si na AI, ale ve zprávách odpovídají pořád reální lidi.
					</p>
				</div>
			</section>

			<FooterSection />
		</div>
	);
}
