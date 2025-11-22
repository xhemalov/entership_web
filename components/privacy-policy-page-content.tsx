"use client";

import FooterSection from "@/components/footer-section";

export default function PrivacyPolicyPageContent() {
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
					<a href="/kontakt" className="hover:text-yellow-accent transition-colors">
						KONTAKT
					</a>
					<a
						href="/#available-dates"
						className="bg-button-cream text-[#701A75] px-6 py-2 rounded-xl font-medium hover:bg-yellow-100 transition-colors"
					>
						PŘIHLÁSIT SE
					</a>
				</div>
			</nav>

			{/* Header Section */}
			<section className="px-6 py-16 lg:px-12 lg:py-24 bg-purple-main">
				<div className="max-w-4xl mx-auto text-center">
					<h1 className="text-3xl lg:text-5xl font-nasalization font-bold text-foreground leading-relaxed-xl mb-6 uppercase">
						Zásady zpracování osobních údajů
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
						<p>Vážíme si vaší důvěry. Ochraně vašich osobních údajů věnujeme maximální pozornost. V těchto zásadách naleznete podrobné informace o tom, jaké údaje zpracováváme, z jakého důvodu, jakým způsobem, jak dlouho je uchováváme a jaká jsou vaše práva.</p>
						<p>Při zpracování se řídíme platnými právními předpisy, zejména nařízením Evropského parlamentu a Rady (EU) 2016/679 (dále jen „GDPR“).</p>
					</div>

					{/* 1. Kdo je správcem osobních údajů? */}
					<div>
						<h2 className="text-2xl font-nasalization font-bold text-[#FFFBEB] mb-4">
							1. Kdo je správcem osobních údajů?
						</h2>
						<div className="space-y-2">
							<p>Správcem, který určuje účely a prostředky zpracování vašich osobních údajů, je naše společnost:</p>
							<p className="font-bold text-yellow-accent">Entership s.r.o.</p>
							<p>se sídlem: Školní 174, Mosty, 735 62 Český Těšín</p>
							<p>IČO: 23198605</p>
							<p>Kontakt: <a href="mailto:info@entership.cz" className="text-yellow-accent hover:underline">info@entership.cz</a></p>
						</div>
					</div>

					{/* 2. Účely, právní základy a doba zpracování osobních údajů */}
					<div>
						<h2 className="text-2xl font-nasalization font-bold text-[#FFFBEB] mb-4">
							2. Účely, právní základy a doba zpracování osobních údajů
						</h2>
						<p className="mb-4">Vaše osobní údaje zpracováváme pouze v nezbytném rozsahu pro níže uvedené účely:</p>
						
						<div className="space-y-6">
							{/* (a) */}
							<div>
								<h3 className="text-xl font-bold text-yellow-accent mb-2">(a) Poskytování služeb a plnění smlouvy (realizace kurzu)</h3>
								<ul className="list-disc pl-6 space-y-2">
									<li><strong>Účel:</strong> Zajištění vaší registrace, účasti v kurzu, komunikace související s kurzem, poskytování studijních materiálů, fakturace a správa vašeho uživatelského účtu.</li>
									<li><strong>Zpracovávané údaje:</strong> Identifikační údaje (jméno, příjmení), kontaktní údaje (e-mail, telefon), fakturační údaje (adresa, IČO/DIČ).</li>
									<li><strong>Právní základ:</strong> Plnění smlouvy (čl. 6 odst. 1 písm. b) GDPR).</li>
									<li><strong>Doba uchování:</strong> Po dobu trvání smluvního vztahu a dále po dobu nezbytnou pro ochranu našich právních nároků (zpravidla 3 roky po skončení kurzu).</li>
								</ul>
							</div>

							{/* (b) */}
							<div>
								<h3 className="text-xl font-bold text-yellow-accent mb-2">(b) Poskytování obsahu kurzu prostřednictvím třetí strany</h3>
								<ul className="list-disc pl-6 space-y-2">
									<li><strong>Účel:</strong> Pro poskytnutí části obsahu Online kurzu (např. přístup do specializovaného e-learningového portálu nebo k video lekcím) můžeme využívat platformy třetích stran. Pro tento účel je nutné vytvořit vám na dané platformě uživatelský přístup.</li>
									<li><strong>Zpracovávané údaje:</strong> Jméno, příjmení, e-mailová adresa.</li>
									<li><strong>Právní základ:</strong> Plnění smlouvy (čl. 6 odst. 1 písm. b) GDPR), jelikož je toto zpracování nezbytné pro dodání objednané služby.</li>
									<li><strong>Doba uchování:</strong> Po dobu trvání vašeho přístupu k danému kurzu.</li>
								</ul>
							</div>

							{/* (c) */}
							<div>
								<h3 className="text-xl font-bold text-yellow-accent mb-2">(c) Plnění zákonných povinností</h3>
								<ul className="list-disc pl-6 space-y-2">
									<li><strong>Účel:</strong> Zejména vystavování a archivace daňových dokladů (faktur) a plnění dalších účetních a daňových povinností.</li>
									<li><strong>Zpracovávané údaje:</strong> Fakturační údaje.</li>
									<li><strong>Právní základ:</strong> Plnění právní povinnosti (čl. 6 odst. 1 písm. c) GDPR).</li>
									<li><strong>Doba uchování:</strong> Dle příslušných zákonů (např. 10 let u daňových dokladů).</li>
								</ul>
							</div>

							{/* (d) */}
							<div>
								<h3 className="text-xl font-bold text-yellow-accent mb-2">(d) Marketing, obchodní sdělení a zlepšování služeb</h3>
								<ul className="list-disc pl-6 space-y-2">
									<li><strong>Účel:</strong> Informování o našich novinkách, akcích a souvisejících kurzech (newsletter) a analýza dat pro zlepšení kvality našich služeb a webových stránek.</li>
									<li><strong>Zpracovávané údaje:</strong> E-mailová adresa, údaje o využívání našich služeb, cookies.</li>
									<li><strong>Právní základ:</strong>
										<ul className="list-disc pl-6 mt-1 space-y-1">
											<li>Náš oprávněný zájem (čl. 6 odst. 1 písm. f) GDPR) v případě zasílání relevantních nabídek našim stávajícím zákazníkům nebo při analýze dat za účelem zlepšení služeb. Proti tomuto zpracování můžete kdykoliv vznést námitku.</li>
											<li>Váš dobrovolný a odvolatelný souhlas (čl. 6 odst. 1 písm. a) GDPR), pokud se k odběru novinek přihlásíte, aniž byste byli naším zákazníkem.</li>
										</ul>
									</li>
									<li><strong>Doba uchování:</strong> Do odvolání souhlasu, vznesení námitky, nebo po dobu trvání našeho oprávněného zájmu.</li>
								</ul>
							</div>
						</div>
					</div>

					{/* 3. Vaše práva související se zpracováním osobních údajů */}
					<div>
						<h2 className="text-2xl font-nasalization font-bold text-[#FFFBEB] mb-4">
							3. Vaše práva související se zpracováním osobních údajů
						</h2>
						<p className="mb-4">Můžete uplatnit kterékoli z níže uvedených práv. Vaši žádost vyřídíme bez zbytečného odkladu, nejpozději do jednoho měsíce.</p>
						<ul className="list-disc pl-6 space-y-2">
							<li><strong>Právo na přístup:</strong> Můžete požádat o potvrzení, zda vaše údaje zpracováváme, a o kopii těchto údajů.</li>
							<li><strong>Právo na opravu:</strong> Máte právo na opravu nepřesných či doplnění neúplných údajů.</li>
							<li><strong>Právo na výmaz ("právo být zapomenut"):</strong> Vaše údaje vymažeme, pokud již nejsou potřebné, odvoláte souhlas, vznesete námitku proti zpracování z oprávněného zájmu a neexistují převažující důvody, nebo pokud bylo zpracování protiprávní.</li>
							<li><strong>Právo na omezení zpracování:</strong> Můžete požadovat dočasné omezení zpracování, např. pokud popíráte přesnost údajů.</li>
							<li><strong>Právo vznést námitku:</strong> Pokud zpracováváme údaje na základě oprávněného zájmu, můžete vznést námitku. Zpracování ukončíme, pokud neprokážeme závažné oprávněné důvody pro zpracování.</li>
							<li><strong>Právo na přenositelnost:</strong> Máte právo získat údaje, které jste nám poskytli, ve strojově čitelném formátu.</li>
							<li><strong>Právo odvolat souhlas:</strong> Pokud je zpracování založeno na vašem souhlasu, můžete jej kdykoli odvolat e-mailem na <a href="mailto:info@entership.cz" className="text-yellow-accent hover:underline">info@entership.cz</a>.</li>
							<li><strong>Právo podat stížnost:</strong> Máte právo podat stížnost u dozorového úřadu, kterým je Úřad pro ochranu osobních údajů (<a href="https://www.uoou.cz" target="_blank" rel="noopener noreferrer" className="text-yellow-accent hover:underline">www.uoou.cz</a>).</li>
						</ul>
					</div>

					{/* 4. Příjemci osobních údajů (třetí strany) */}
					<div>
						<h2 className="text-2xl font-nasalization font-bold text-[#FFFBEB] mb-4">
							4. Příjemci osobních údajů (třetí strany)
						</h2>
						<p className="mb-4">Vaše osobní údaje chráníme, ale pro zajištění našeho fungování je v nezbytných případech sdílíme s prověřenými partnery (zpracovateli), kteří jsou smluvně vázáni k jejich ochraně. Jedná se o tyto kategorie příjemců:</p>
						<ul className="list-disc pl-6 space-y-2">
							<li><strong>Poskytovatelé IT a hostingových služeb:</strong> zajišťují provoz našich webových stránek a interních systémů.</li>
							<li><strong>Poskytovatelé e-learningových platforem:</strong> pro zpřístupnění obsahu online kurzů.</li>
							<li><strong>Poskytovatelé účetních a daňových služeb:</strong> pro vedení účetnictví.</li>
							<li><strong>Poskytovatelé platebních bran:</strong> pro bezpečné zpracování online plateb.</li>
							<li><strong>Poskytovatelé analytických a marketingových nástrojů:</strong> pro analýzu návštěvnosti a správu marketingových kampaní (např. Google, Meta).</li>
							<li><strong>Orgány veřejné moci:</strong> v případech, kdy nám to ukládá zákon.</li>
						</ul>
					</div>

					{/* 5. Předávání údajů do třetích zemí */}
					<div>
						<h2 className="text-2xl font-nasalization font-bold text-[#FFFBEB] mb-4">
							5. Předávání údajů do třetích zemí
						</h2>
						<p>Při využívání některých našich partnerů, zejména poskytovatelů analytických a cloudových služeb (např. Google, Meta se sídlem v USA), může docházet k předávání osobních údajů mimo Evropský hospodářský prostor. V takových případech je ochrana dat zajištěna prostřednictvím standardních smluvních doložek schválených Evropskou komisí a dalších záruk v souladu s GDPR.</p>
					</div>

					{/* 6. Automatizované zpracování a cookies */}
					<div>
						<h2 className="text-2xl font-nasalization font-bold text-[#FFFBEB] mb-4">
							6. Automatizované zpracování a cookies
						</h2>
						<p>Při návštěvě našich webových stránek využíváme nástroje pro analýzu chování uživatelů (např. Google Analytics) a technologie cookies. Tyto nástroje zpracovávají údaje jako IP adresa, typ zařízení nebo provedené akce na webu. Toto zpracování nám pomáhá pochopit, jak jsou naše stránky používány, a optimalizovat je pro vás. Nejedná se o automatizované rozhodování s právními či obdobně významnými účinky. Více informací naleznete v našich Zásadách používání cookies.</p>
					</div>

					{/* Footer Date */}
					<div className="pt-8 border-t border-purple-light/20 text-sm text-cream/60">
						<p>Tyto Zásady zpracování osobních údajů jsou platné a účinné od 22. listopadu 2025.</p>
					</div>

				</div>
			</section>

			<FooterSection />
		</div>
	);
}
