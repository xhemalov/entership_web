"use client";

import FooterSection from "@/components/footer-section";
import Navbar from "@/components/navbar";
import {
	Facebook,
	Instagram,
	Linkedin,
	Mail,
	MessageCircle,
	Users,
} from "lucide-react";

const DiscordLogo = ({ className }: { className?: string }) => (
	<svg
		className={className}
		viewBox="0 0 24 24"
		fill="currentColor"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.699.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419z" />
	</svg>
);

export default function ContactPageContent() {
	return (
		<div className="min-h-screen bg-purple-main text-cream">
			{/* Navigation */}
			<Navbar />

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
					<a
						href="https://naucme.it/discord"
						target="_blank"
						rel="noopener noreferrer"
						className="bg-[#FFFBEB]/15 border border-purple-light/20 p-8 rounded-2xl hover:border-yellow-accent/50 transition-colors group block"
					>
						<div className="w-12 h-12 bg-transparent border border-yellow-accent rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
							<DiscordLogo className="w-6 h-6 text-yellow-accent" />
						</div>
						<h3 className="text-2xl font-bold font-nasalization text-[#FFFBEB] mb-2">
							Discord – naše hlavní základna
						</h3>
						<p className="font-inter text-cream/80 mb-6">
							Nejrychlejší cesta k nám. Komunita, podpora, novinky a lidé, co
							řeší podobné věci jako ty.
						</p>
						<span className="inline-flex items-center gap-2 text-yellow-accent font-bold group-hover:text-[#FFFBEB] transition-colors">
							Přidat se na Discord <span className="text-xl">→</span>
						</span>
					</a>

					{/* Facebook */}
					<a
						href="https://www.facebook.com/NaucMeIT/"
						target="_blank"
						rel="noopener noreferrer"
						className="bg-[#FFFBEB]/15 border border-purple-light/20 p-8 rounded-2xl hover:border-yellow-accent/50 transition-colors group block"
					>
						<div className="w-12 h-12 bg-transparent border border-yellow-accent rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
							<Facebook className="w-6 h-6 text-yellow-accent" />
						</div>
						<h3 className="text-2xl font-bold font-nasalization text-[#FFFBEB] mb-2">
							Facebook – novinky & akce
						</h3>
						<p className="font-inter text-cream/80 mb-6">
							Streamy, komunitní eventy a užitečný obsah, který ti pomůže držet
							krok.
						</p>
						<span className="inline-flex items-center gap-2 text-yellow-accent font-bold group-hover:text-[#FFFBEB] transition-colors">
							Sledovat Facebook <span className="text-xl">→</span>
						</span>
					</a>

					{/* LinkedIn */}
					<a
						href="https://www.linkedin.com/company/nauc-me-it"
						target="_blank"
						rel="noopener noreferrer"
						className="bg-[#FFFBEB]/15 border border-purple-light/20 p-8 rounded-2xl hover:border-yellow-accent/50 transition-colors group block"
					>
						<div className="w-12 h-12 bg-transparent border border-yellow-accent rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
							<Linkedin className="w-6 h-6 text-yellow-accent" />
						</div>
						<h3 className="text-2xl font-bold font-nasalization text-[#FFFBEB] mb-2">
							LinkedIn – pro kariérní růst
						</h3>
						<p className="font-inter text-cream/80 mb-6">
							Profesionální tipy, zákulisí, příležitosti a vhledy ze světa
							technologií.
						</p>
						<span className="inline-flex items-center gap-2 text-yellow-accent font-bold group-hover:text-[#FFFBEB] transition-colors">
							Sledovat LinkedIn <span className="text-xl">→</span>
						</span>
					</a>

					{/* Instagram */}
					<a
						href="https://www.instagram.com/naucmeit/"
						target="_blank"
						rel="noopener noreferrer"
						className="bg-[#FFFBEB]/15 border border-purple-light/20 p-8 rounded-2xl hover:border-yellow-accent/50 transition-colors group block"
					>
						<div className="w-12 h-12 bg-transparent border border-yellow-accent rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
							<Instagram className="w-6 h-6 text-yellow-accent" />
						</div>
						<h3 className="text-2xl font-bold font-nasalization text-[#FFFBEB] mb-2">
							Instagram – Entership vibe
						</h3>
						<p className="font-inter text-cream/80 mb-6">
							Backstage, memy, rychlé tipy a kousek našeho nerdího světa.
						</p>
						<span className="inline-flex items-center gap-2 text-yellow-accent font-bold group-hover:text-[#FFFBEB] transition-colors">
							Sledovat Instagram <span className="text-xl">→</span>
						</span>
					</a>
				</div>
			</section>

			<section className="px-6 pb-16 lg:px-12 bg-purple-main">
				<div className="max-w-4xl mx-auto">
					<div className="bg-[#FFFBEB]/15 border border-[#FFFBEB] rounded-lg p-12 text-center flex flex-col gap-4">
						<div className="w-16 h-16 bg-yellow-accent rounded-full flex items-center justify-center mx-auto">
							<Mail className="w-8 h-8 text-black" />
						</div>
						<h2 className="text-3xl font-nasalization font-bold text-[#FFFBEB]">
							Email
						</h2>
						<p className="font-inter text-cream/80">
							Na dotazy, spolupráce i partnerships:
						</p>
						<a
							href="mailto:hello@entership.cz"
							className="text-2xl md:text-4xl font-bold text-[#4DEEEA] hover:text-[#FFFBEB] transition-colors"
						>
							hello@entership.cz
						</a>
						<p className="font-inter text-cream/80">
							PS: Na Discordu odpovídáme rychleji!
						</p>
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
