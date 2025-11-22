"use client";

import FooterSection from "@/components/footer-section";
import Navbar from "@/components/navbar";

export default function CookiesPolicyPageContent() {
	return (
		<div className="min-h-screen bg-purple-main text-cream">
			{/* Navigation */}
			<Navbar />

			{/* Header Section */}
			<section className="px-6 py-16 lg:px-12 lg:py-24 bg-purple-main">
				<div className="max-w-4xl mx-auto text-center">
					<h1 className="text-3xl lg:text-5xl font-nasalization font-bold text-foreground leading-relaxed-xl mb-6 uppercase">
						Zásady používání cookies
					</h1>
					<p className="font-inter text-lg lg:text-xl text-cream/90 max-w-2xl mx-auto leading-relaxed">
						společnosti Entership s.r.o.
					</p>
				</div>
			</section>

			{/* Content Section */}
			<section className="px-6 pb-16 lg:px-12 bg-purple-main">
				<div className="max-w-4xl mx-auto font-inter text-cream/90 space-y-8 leading-relaxed">
					
					{/* Intro */}
					<div className="space-y-4">
						<p>V Entership s.r.o. si zakládáme na transparentnosti. Tyto zásady vysvětlují náš přístup k používání souborů cookies na našich webových stránkách www.entership.cz.</p>
					</div>

					{/* 1. Co jsou cookies? */}
					<div>
						<h2 className="text-2xl font-nasalization font-bold text-[#FFFBEB] mb-4">
							1. Co jsou cookies?
						</h2>
						<p>Cookies jsou malé textové soubory, které si webová stránka ukládá do vašeho počítače, tabletu nebo mobilního telefonu při její návštěvě. Slouží k zapamatování vašich preferencí, zajištění funkčnosti stránek nebo ke sběru analytických dat.</p>
					</div>

					{/* 2. Náš současný přístup k cookies */}
					<div>
						<h2 className="text-2xl font-nasalization font-bold text-[#FFFBEB] mb-4">
							2. Náš současný přístup k cookies
						</h2>
						<div className="space-y-4">
							<p>K datu platnosti těchto zásad naše webové stránky aktivně nevyužívají cookies, které by vyžadovaly váš souhlas.</p>
							<p>To znamená, že záměrně neshromažďujeme žádná data pro analytické, preferenční ani marketingové účely prostřednictvím cookies.</p>
							<p>Jedinou výjimkou mohou být nezbytně nutné (technické) cookies, které jsou klíčové pro základní technický provoz a bezpečnost webu (například pro rozložení zátěže na serverech nebo ochranu proti útokům). Pro použití těchto cookies zákon nevyžaduje váš souhlas, protože bez nich by stránky nemohly fungovat.</p>
							
							<div className="bg-purple-light/10 p-6 rounded-xl border border-purple-light/20">
								<p className="font-bold mb-2">Stručně řečeno:</p>
								<ul className="list-disc pl-6 space-y-2">
									<li><strong>NEPOUŽÍVÁME</strong> žádné statistické cookies (např. Google Analytics).</li>
									<li><strong>NEPOUŽÍVÁME</strong> žádné marketingové cookies (např. Meta Pixel, reklamní cookies).</li>
									<li><strong>NEPOUŽÍVÁME</strong> žádné preferenční cookies.</li>
								</ul>
							</div>
						</div>
					</div>

					{/* 3. Budoucí použití cookies */}
					<div>
						<h2 className="text-2xl font-nasalization font-bold text-[#FFFBEB] mb-4">
							3. Budoucí použití cookies
						</h2>
						<p className="mb-4">V budoucnu plánujeme naše služby a webové stránky rozvíjet. Je pravděpodobné, že pro zlepšení našich služeb začneme využívat například analytické nebo marketingové cookies.</p>
						<p className="mb-4">Zavazujeme se, že před zavedením jakýchkoliv cookies, které vyžadují souhlas, provedeme následující kroky:</p>
						<ul className="list-disc pl-6 space-y-2">
							<li>Implementujeme transparentní cookie lištu (banner), kde budete mít jasnou a jednoduchou možnost udělit, odmítnout nebo detailně nastavit svůj souhlas.</li>
							<li>Aktualizujeme tyto Zásady používání cookies tak, aby přesně a srozumitelně popisovaly všechny používané nástroje, jejich účel a poskytovatele.</li>
							<li>Váš souhlas budeme vždy vyžadovat předem a nezačneme žádné volitelné cookies používat bez vašeho aktivního svolení.</li>
						</ul>
					</div>

					{/* 4. Správa cookies ve vašem prohlížeči */}
					<div>
						<h2 className="text-2xl font-nasalization font-bold text-[#FFFBEB] mb-4">
							4. Správa cookies ve vašem prohlížeči
						</h2>
						<p>I když v současnosti volitelné cookies nevyužíváme, máte vždy možnost spravovat a mazat soubory cookies přímo v nastavení vašeho webového prohlížeče. Můžete si nastavit blokování všech cookies, nicméně upozorňujeme, že i blokace nezbytných cookies může vést k nesprávné funkčnosti některých webových stránek.</p>
					</div>

					{/* 5. Závěrečná ustanovení */}
					<div>
						<h2 className="text-2xl font-nasalization font-bold text-[#FFFBEB] mb-4">
							5. Závěrečná ustanovení
						</h2>
						<p>Další informace o tom, jak zpracováváme vaše osobní údaje, naleznete v našich <a href="/zasady-zpracovani-osobnich-udaju" className="text-yellow-accent hover:underline">Zásadách zpracování osobních údajů</a>.</p>
					</div>

					{/* Footer Date */}
					<div className="pt-8 border-t border-purple-light/20 text-sm text-cream/60">
						<p>Tyto zásady jsou platné a účinné od 22. listopadu 2025.</p>
					</div>

				</div>
			</section>

			<FooterSection />
		</div>
	);
}
