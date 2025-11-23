"use client";

import FooterSection from "@/components/footer-section";
import Navbar from "@/components/navbar";

export default function TermsPageContent() {
	return (
		<div className="min-h-screen bg-purple-main text-cream">
			{/* Navigation */}
			<Navbar />

			{/* Header Section */}
			<section className="px-6 py-16 lg:px-12 lg:py-24 bg-purple-main">
				<div className="max-w-4xl mx-auto text-center">
					<h1 className="text-3xl lg:text-5xl font-nasalization font-bold text-foreground leading-relaxed-xl mb-6 uppercase">
						Všeobecné obchodní podmínky
					</h1>
					<p className="font-inter text-lg lg:text-xl text-cream/90 max-w-2xl mx-auto leading-relaxed">
						společnosti Entership s.r.o.
					</p>
				</div>
			</section>

			{/* Content Section */}
			<section className="px-6 pb-16 lg:px-12 bg-purple-main">
				<div className="max-w-4xl mx-auto font-inter text-cream/90 space-y-8 leading-relaxed">
					{/* 1. Úvodní ustanovení */}
					<div>
						<h2 className="text-2xl font-nasalization font-bold text-[#FFFBEB] mb-4">
							1. Úvodní ustanovení
						</h2>
						<div className="space-y-4">
							<p>
								(a) Entership s.r.o., se sídlem Školní 174, Mosty, 735 62 Český
								Těšín, IČO: 23198605 (dále jen „Společnost“), poskytuje
								vzdělávací služby, zejména formou online kurzů (dále jen „Online
								kurz“). Společnost nabízí tyto služby zákazníkům (dále jen
								„Objednatel“).
							</p>
							<p>
								(b) Tyto všeobecné obchodní podmínky (dále jen „VOP“) upravují
								práva a povinnosti mezi Společností a Objednatelem vyplývající z
								poskytování služeb Společností.
							</p>
							<p>
								(c) Objednatel bere na vědomí, že Společnost zpracovává jeho
								osobní údaje za účelem poskytování služeb v souladu s právními
								předpisy, zejména GDPR. Podrobnosti o zpracování osobních údajů
								jsou uvedeny v zásadách ochrany osobních údajů dostupných na
								webu Společnosti.
							</p>
							<p>
								(d) Objednatel se zavazuje udržovat své osobní údaje uvedené v
								uživatelském účtu aktuální. Jakékoliv změny údajů relevantních
								pro poskytování služeb nebo fakturaci oznámí bez zbytečného
								odkladu Společnosti.
							</p>
							<p>
								(e) Společnost se nezavazuje zajistit Objednateli pracovní
								pozici ani neposkytuje záruky týkající se pracovního uplatnění.
							</p>
						</div>
					</div>

					{/* 2. Online kurz */}
					<div>
						<h2 className="text-2xl font-nasalization font-bold text-[#FFFBEB] mb-4">
							2. Online kurz
						</h2>

						{/* 2.1 Podmínky online kurzu */}
						<div className="mb-6">
							<h3 className="text-xl font-bold text-yellow-accent mb-3">
								2.1 Podmínky online kurzu
							</h3>
							<div className="space-y-4">
								<p>
									(a) Odesláním vyplněného registračního formuláře se Objednatel
									registruje jako účastník Online kurzu. Tímto okamžikem vzniká
									smluvní vztah mezi Objednatelem a Společností, který se řídí
									těmito VOP.
								</p>
								<p>
									(b) V případě naplněné kapacity kurzu je Společnost oprávněna
									registraci odmítnout nebo zrušit. Objednateli bude v takovém
									případě vrácena plná již uhrazená částka.
								</p>
								<p>
									(c) Termíny, harmonogram a forma výuky jsou zveřejněny na
									webových stránkách Společnosti. Společnost si vyhrazuje právo
									na přiměřenou změnu harmonogramu kurzu z důležitých provozních
									důvodů. O takové změně bude Objednatel informován bez
									zbytečného odkladu. Pokud by se jednalo o zásadní změnu (např.
									posunutí začátku kurzu o více než 14 dní), má Objednatel právo
									od smlouvy odstoupit s nárokem na vrácení plné uhrazené ceny
									kurzu.
								</p>
								<p>
									(d) V případě, že Společnost zruší kurz před jeho zahájením z
									jiných důvodů, než je uvedeno v bodě 2.1 (b), bude Objednateli
									vrácena plná uhrazená cena. V případě zrušení kurzu po jeho
									zahájení bude Objednateli vrácena poměrná část ceny
									odpovídající neuskutečněné části výuky.
								</p>
								<p>
									(e) Společnost se zavazuje zajistit odbornou výuku a
									poskytnout všechny studijní materiály potřebné pro absolvování
									kurzu. Součástí služby je také přístup do e-learningového
									portálu.
								</p>
								<p>
									(f) Objednatel není oprávněn účastnit se kurzu prostřednictvím
									náhradníka ani poskytovat materiály či obsah kurzu třetím
									osobám. Porušení této povinnosti zakládá odpovědnost za
									vzniklou škodu.
								</p>
								<p>
									(g) V případě, že se jednotlivá lekce Online kurzu nebude moci
									uskutečnit ze závažných důvodů na straně Společnosti nebo v
									důsledku okolností vyšší moci (např. náhlé onemocnění
									lektora), Společnost o této skutečnosti informuje Objednatele
									bez zbytečného odkladu poté, co se o překážce dozví, a zároveň
									sdělí náhradní řešení. Náhradním řešením se rozumí především
									stanovení nového termínu lekce, zajištění náhradního lektora
									či poskytnutí plnohodnotného záznamu lekce.
								</p>
								<p>
									(h) Individuální konzultací se rozumí individuální lekce s
									lektorem pověřeným Společností. Lekce trvá 30 minut. Téma a
									rozsah lekce určuje předem Objednatel. Společnost si vyhrazuje
									právo změnit nebo zrušit termín individuální konzultace z
									organizačních či provozních důvodů. Objednatel je oprávněn
									konzultaci zrušit bez udání důvodu nejpozději 24 hodin před
									jejím konáním.
								</p>
							</div>
						</div>

						{/* 2.2 Cena kurzu */}
						<div className="mb-6">
							<h3 className="text-xl font-bold text-yellow-accent mb-3">
								2.2 Cena kurzu
							</h3>
							<div className="space-y-4">
								<p>
									(a) Objednatel je povinen se před odesláním registrace
									seznámit s cenou kurzu. V případě změny ceny je rozhodná cena
									platná v okamžiku odeslání registračního formuláře.
								</p>
								<p>
									(b) Objednatel je povinen uhradit cenu kurzu nejpozději do
									data splatnosti uvedeného na faktuře. Pokud nebude částka
									uhrazena včas, může Společnost od smlouvy odstoupit a
									Objednatel ztrácí nárok na účast na kurzu.
								</p>
								<p>
									(c) Objednatel se zavazuje účastnit se lekcí. Za zameškané
									lekce nevzniká nárok na finanční či jinou náhradu.
								</p>
								<p>
									(d) V případě chybného uplatnění slevy má Objednatel povinnost
									do 14 dnů písemně upozornit Společnost. Společnost chybu
									bezodkladně napraví.
								</p>
							</div>
						</div>

						{/* 2.3 Storno podmínky a reklamační řád */}
						<div className="mb-6">
							<h3 className="text-xl font-bold text-yellow-accent mb-3">
								2.3 Storno podmínky a reklamační řád
							</h3>
							<div className="space-y-4">
								<p>
									(a) Objednatel - spotřebitel má právo odstoupit od smlouvy do
									14 dnů od jejího uzavření bez udání důvodu. Odstoupení provede
									prokazatelnou formou (např. e-mailem zaslaným na adresu
									Společnosti). Lhůta je dodržena, pokud je odstoupení v této
									lhůtě odesláno.
								</p>
								<p>
									(b) Pokud Objednatel - spotřebitel výslovně požádá o zahájení
									poskytování služby před uplynutím lhůty pro odstoupení od
									smlouvy, má Společnost nárok na úhradu poměrné části ceny za
									plnění poskytnuté do okamžiku odstoupení. Tento výslovný
									souhlas musí Objednatel učinit jako aktivní krok v rámci
									objednávkového formuláře.
								</p>
								<p>
									(c) Nedokončí-li Objednatel kurz z důvodů na své straně,
									nevzniká mu nárok na vrácení kurzovného. Povinnost uhradit
									sjednanou cenu trvá.
								</p>
								<p>(d) Objednatel může podat reklamaci z důvodu:</p>
								<ul className="list-disc pl-8 space-y-2">
									<li>(i) kvality a způsobu výuky,</li>
									<li>(ii) odborného a metodického obsahu,</li>
									<li>(iii) organizace kurzu.</li>
								</ul>
								<p>
									(e) Reklamace se podává e-mailem a musí obsahovat
									identifikační údaje Objednatele, číslo objednávky, popis
									reklamované skutečnosti a čeho se Objednatel domáhá.
								</p>
								<p>
									(f) Společnost reklamaci prověří, mimo jiné porovnáním s
									hodnocením ostatních účastníků nebo konzultací s dotčeným
									lektorem.
								</p>
								<p>
									(g) V případě oprávněné reklamace bude vada služby napravena,
									a to primárně formou:
								</p>
								<ul className="list-disc pl-8 space-y-2">
									<li>(i) poskytnutí náhradního plnění či opravy,</li>
									<li>
										(ii) přiměřené slevy z ceny kurzu nebo vrácení části či celé
										uhrazené ceny, v závislosti na povaze vady,
									</li>
									<li>
										(iii) dohody o jiném řešení, například účasti v jiném kurzu.
									</li>
								</ul>
								<p>
									(h) Společnost vyřídí reklamaci bez zbytečného odkladu,
									nejpozději však do 30 dnů ode dne jejího uplatnění, pokud se s
									Objednatelem nedohodne jinak.
								</p>
							</div>
						</div>

						{/* 2.4 Vyšší moc */}
						<div className="mb-6">
							<h3 className="text-xl font-bold text-yellow-accent mb-3">
								2.4 Vyšší moc
							</h3>
							<p>
								Společnost si vyhrazuje právo v případě vyšší moci změnit způsob
								realizace výuky (např. přechod z prezenční na online formu).
								Objednatel bude informován bez zbytečného odkladu. V takovém
								případě nevzniká nárok na vrácení kurzovného, pokud je zachována
								srovnatelná kvalita a obsah výuky. Za vyšší moc se považují
								zejména omezení stanovená právními předpisy, nepříznivá
								epidemiologická situace, živelní pohromy, válka či jiné
								mimořádné a neodvratitelné události mimo kontrolu Společnosti.
							</p>
						</div>
					</div>

					{/* 3. Závěrečná ustanovení */}
					<div>
						<h2 className="text-2xl font-nasalization font-bold text-[#FFFBEB] mb-4">
							3. Závěrečná ustanovení
						</h2>
						<div className="space-y-4">
							<p>
								(a) Společnost je oprávněna VOP v přiměřeném rozsahu měnit. Nové
								znění bude zveřejněno na webových stránkách Společnosti a na
								jeho vydání bude Objednatel s aktivní smlouvou upozorněn
								e-mailem. Pokud Objednatel se změnou nesouhlasí, má právo
								smlouvu vypovědět. Pro smluvní vztahy uzavřené před datem
								účinnosti nových VOP se uplatní znění VOP platné v době uzavření
								smlouvy, pokud se strany nedohodnou jinak.
							</p>
							<p>
								(b) Tyto VOP a veškeré právní vztahy z nich vyplývající se řídí
								českým právem.
							</p>
							<p>
								(c) Ze zvyklostí nebo zavedené praxe mezi stranami nelze
								odvozovat žádná práva nebo povinnosti nad rámec těchto VOP.
							</p>
							<p>
								(d) V případě vzniku spotřebitelského sporu, který se nepodaří
								vyřešit vzájemnou dohodou, může Objednatel - spotřebitel podat
								návrh na mimosoudní řešení takového sporu určenému subjektu,
								kterým je Česká obchodní inspekce, Ústřední inspektorát -
								oddělení ADR, se sídlem Štěpánská 15, 120 00 Praha 2.
							</p>
						</div>
					</div>
				</div>
			</section>

			<FooterSection />
		</div>
	);
}
