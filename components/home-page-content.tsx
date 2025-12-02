import TestimonialsCarousel from "@/components/testimonials-carousel";
import NewsletterSection from "@/components/newsletter-section";
import FAQSection from "@/components/faq-section";
import FooterSection from "@/components/footer-section";
import AvailableDatesSection from "@/components/available-dates-section";
import Navbar from "@/components/navbar";
import CountdownBar from "@/components/countdown-bar";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const DISCOUNT_END = new Date(2025, 11, 24); // Month is 0-indexed (11 = December)

export default function HomePageContent() {
	return (
		<div
			className="min-h-screen bg-purple-main text-cream"
			style={{ timelineScope: "--available-dates" } as React.CSSProperties}
		>
			<header className="sticky top-0 z-50">
				<Navbar />
				<CountdownBar discountEnd={DISCOUNT_END} />
			</header>

			{/* Hero Section */}
			<section className="px-6 py-16 lg:px-12 lg:py-24 bg-purple-main">
				<div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
					<div className="max-w-2xl">
						<h1 className="text-4xl lg:text-6xl font-nasalization font-bold text-foreground leading-relaxed-xl mb-6">
							AI ZÁKLADY:
							<br />
							POCHOP AI
						</h1>
						<p className="font-inter text-lg mb-8 max-w-md">
							AI už není nice-to-have. Nauč se ji používat tak, aby ti každý den
							šetřila čas i energii.
						</p>
						<a
							href="#available-dates"
							className="inline-block bg-button-cream text-[#701A75] px-8 py-4 rounded-xl font-inter font-semibold text-lg hover:bg-yellow-100 transition-colors"
						>
							Jdu do toho
						</a>
					</div>
					<div className="relative flex justify-center lg:justify-end">
						<div className="rounded-lg overflow-visible">
							<img
								src="/Frame 6.svg"
								alt="Laptop with illustration of our courses"
								className="w-[700px] md:w-[900px] lg:w-[1100px] xl:w-[1300px] h-auto object-contain drop-shadow-2xl"
							/>
						</div>
					</div>
				</div>
			</section>

			<section className="px-6 py-16 lg:px-12">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-3xl lg:text-5xl font-nasalization font-bold text-foreground text-center mb-16 leading-normal-xl">
						Proč by tě to mělo zajímat?
					</h2>
					<div className="grid lg:grid-cols-2 gap-12">
						<div className="space-y-6">
							<div className="flex items-start space-x-4">
								<div className="w-2 h-2 bg-yellow-accent rounded-full mt-3 flex-shrink-0" />
								<p className="font-inter">
									AI už není sci-fi. Je to běžný pracovní nástroj - a kdo ji
									neumí, maká zbytečně rukama.
								</p>
							</div>
							<div className="flex items-start space-x-4">
								<div className="w-2 h-2 bg-yellow-accent rounded-full mt-3 flex-shrink-0" />
								<p className="font-inter">
									Naučíme tě AI používat chytře - ne jen otevřít ChatGPT a
									doufat v zázrak.
								</p>
							</div>
							<div className="flex items-start space-x-4">
								<div className="w-2 h-2 bg-yellow-accent rounded-full mt-3 flex-shrink-0" />
								<p className="font-inter">
									Není to jen hračka pro ajťáky - používají ji markeťáci,
									projekťáci, designéři i mámy na mateřský.
								</p>
							</div>
						</div>
						<div className="space-y-6">
							<div className="flex items-start space-x-4">
								<div className="w-2 h-2 bg-yellow-accent rounded-full mt-3 flex-shrink-0" />
								<p className="font-inter">
									Ušetříš si rutinu a nudnou opakovačku. Místo toho budeš dělat
									práci, která má smysl.
								</p>
							</div>
							<div className="flex items-start space-x-4">
								<div className="w-2 h-2 bg-yellow-accent rounded-full mt-3 flex-shrink-0" />
								<p className="font-inter">
									Nebudeš lovit deset nejoblíbenějších promptů - naučíš se
									vytvářet vlastní, které fakt fungují.
								</p>
							</div>
							<div className="flex items-start space-x-4">
								<div className="w-2 h-2 bg-yellow-accent rounded-full mt-3 flex-shrink-0" />
								<p className="font-inter">
									A jo… AI je prostě zábava. Jakmile pochopíš, jak na ni, už ji
									neodložíš.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="px-6 py-16 lg:px-12 bg-purple-main">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-3xl lg:text-5xl font-nasalization font-bold text-foreground text-center mb-16 leading-normal-xl">
						Co budeš potřebovat?
					</h2>
					<div className="grid md:grid-cols-3 gap-8">
						{[
							{
								icon: "laptop",
								title: "Počítač nebo laptop",
								desc: "Notebook nebo PC. Mac, Windows, Linux… Entership nediskriminuje.",
							},
							{
								icon: "globe",
								title: "Stabilní připojení",
								desc: "AI bez internetu je jako programátor bez kávy → nikam to nevede.",
							},
							{
								icon: "mail",
								title: "Google účet",
								desc: "Budeš ho potřebovat pro některé nástroje a sdílené materiály.",
							},
							{
								icon: "brain",
								title: "Otevřenou hlavu",
								desc: "Budeš zkoušet nové postupy a bourat staré návyky.",
							},
							{
								icon: "clock",
								title: "2-3 hodiny týdně",
								desc: "Stačí málo, ale pravidelně. AI je hlavně o vybudování mindsetu.",
							},
							{
								icon: "note",
								title: "Chuť se učit",
								desc: "AI ti toho hodně dá - ale nejdřív ji potřebuješ zkrotit.",
							},
							{
								icon: "target",
								title: "Konkrétní cíl",
								desc: "Ať víš, proč to děláš: zrychlení práce, nový skill, rekvalifikace… cokoliv.",
							},
							{
								icon: "card",
								title: "Platební kartu (volitelně)",
								desc: "Některé nástroje mají premium verze. Ne, netlačíme tě do nich.",
							},
							{
								icon: "handshake",
								title: "Odvahu zapojit se",
								desc: "Komunita ti pomůže víc než deset tutoriálů - stačí se ozvat.",
							},
						].map((item, index) => {
							const getIcon = (iconName: string) => {
								switch (iconName) {
									case "laptop":
										return (
											<svg
												className="w-6 h-6 text-yellow-accent"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
												strokeWidth={2}
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M9 17H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-4"
												/>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M9 21h6"
												/>
											</svg>
										);
									case "globe":
										return (
											<svg
												className="w-6 h-6 text-yellow-accent"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
												strokeWidth={2}
											>
												<circle cx="12" cy="12" r="10" />
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M2 12a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
												/>
											</svg>
										);
									case "mail":
										return (
											<svg
												className="w-6 h-6 text-yellow-accent"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
												strokeWidth={2}
											>
												<rect x="2" y="4" width="20" height="16" rx="2" />
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M2 6l10 7.5L22 6"
												/>
											</svg>
										);
									case "brain":
										return (
											<svg
												className="w-6 h-6 text-yellow-accent"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
												strokeWidth={2}
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
												/>
											</svg>
										);
									case "clock":
										return (
											<svg
												className="w-6 h-6 text-yellow-accent"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
												strokeWidth={2}
											>
												<circle cx="12" cy="12" r="9" />
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M12 6v6l4 2"
												/>
											</svg>
										);
									case "note":
										return (
											<svg
												className="w-6 h-6 text-yellow-accent"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
												strokeWidth={2}
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M9 12h6m-6 4h6m2-13H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2z"
												/>
											</svg>
										);
									case "target":
										return (
											<svg
												className="w-6 h-6 text-yellow-accent"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
												strokeWidth={2}
											>
												<circle cx="12" cy="12" r="1" />
												<circle cx="12" cy="12" r="5" />
												<circle cx="12" cy="12" r="9" />
											</svg>
										);
									case "card":
										return (
											<svg
												className="w-6 h-6 text-yellow-accent"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
												strokeWidth={2}
											>
												<rect
													x="1"
													y="4"
													width="22"
													height="16"
													rx="2"
													ry="2"
												/>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M1 10h22"
												/>
											</svg>
										);
									case "handshake":
										return (
											<svg
												className="w-6 h-6 text-yellow-accent"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
												strokeWidth={2}
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M12 8c1.657 0 3-1.343 3 3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm0 0c-1.657 0-3 1.343-3 3v6m6-6v6m-6 0c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3zm6 0c0 1.657 1.343 3 3 3s3-1.343 3-3-1.343-3-3-3-3 1.343-3 3z"
												/>
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
									<h3 className="text-cream font-inter font-bold text-lg mb-2 leading-relaxed-xl">
										{item.title}
									</h3>
									<p className="font-inter">{item.desc}</p>
								</div>
							);
						})}
					</div>
				</div>
			</section>

			{/* <section className="px-6 py-16 lg:px-12">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-3xl lg:text-5xl font-nasalization font-bold text-foreground mb-8 leading-normal-xl">
						Pojď se potkat s lektorem Petrem
					</h2>
					<div className="relative bg-purple-light/20 border border-purple-light/30 rounded-lg aspect-video flex items-center justify-center">
						<button
							type="button"
							className="w-20 h-20 bg-[#FFFBEB] rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
						>
							<div className="w-0 h-0 border-l-[20px] border-l-black border-y-[12px] border-y-transparent ml-1" />
						</button>
					</div>
				</div>
			</section> */}

			<section className="px-6 py-16 lg:px-12 bg-purple-main">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-3xl lg:text-5xl font-nasalization font-bold text-foreground text-center mb-16 leading-normal-xl">
						Témata kurzu
					</h2>
					<div className="grid md:grid-cols-3 gap-8">
						{/* Topic 1: Techniky promptování */}
						<div className="text-center">
							<div className="w-16 h-16 bg-yellow-accent rounded-full mx-auto mb-4 flex items-center justify-center">
								<span className="text-black font-nasalization font-bold text-2xl">
									1
								</span>
							</div>
							<h3 className="text-cream font-inter font-bold text-lg mb-2 leading-relaxed min-h-[60px] flex items-center justify-center">
								Techniky promptování
							</h3>
							<p className="font-inter mb-4 text-balance">
								Od základů až po pokročilé techniky promptování
							</p>
							<Dialog>
								<DialogTrigger asChild>
									<Button
										variant="outline"
										size="sm"
										className="border-yellow-accent text-yellow-accent hover:bg-yellow-accent hover:text-black bg-transparent font-inter"
									>
										Detail
									</Button>
								</DialogTrigger>
								<DialogContent className="bg-[#2D0A31] border-yellow-accent/20 text-cream sm:max-w-[425px]">
									<DialogHeader>
										<DialogTitle className="font-nasalization text-yellow-accent">
											Techniky promptování
										</DialogTitle>
										<DialogDescription className="text-cream/80 font-inter">
											Co se v tomto modulu naučíš?
										</DialogDescription>
									</DialogHeader>
									<ul className="py-4 font-inter text-left list-disc list-inside space-y-2">
										<li>Pochopíš principy dobrého promptu a kontextu.</li>
										<li>
											Naučíš se iterativně vylepšovat prompty pro použitelné
											výstupy.
										</li>
										<li>
											Vytvoříš si vlastní knihovnu promptů pro opakované úkoly.
										</li>
									</ul>
								</DialogContent>
							</Dialog>
						</div>

						{/* Topic 2: Vychytávky v chatovém rozhraní */}
						<div className="text-center">
							<div className="w-16 h-16 bg-yellow-accent rounded-full mx-auto mb-4 flex items-center justify-center">
								<span className="text-black font-nasalization font-bold text-2xl">
									2
								</span>
							</div>
							<h3 className="text-cream font-inter font-bold text-lg mb-2 leading-relaxed min-h-[60px] flex items-center justify-center">
								Vychytávky v chat rozhraní
							</h3>
							<p className="font-inter mb-4 text-balance">
								Uspořádej si práci a neztrácej se v konverzacích
							</p>
							<Dialog>
								<DialogTrigger asChild>
									<Button
										variant="outline"
										size="sm"
										className="border-yellow-accent text-yellow-accent hover:bg-yellow-accent hover:text-black bg-transparent font-inter"
									>
										Detail
									</Button>
								</DialogTrigger>
								<DialogContent className="bg-[#2D0A31] border-yellow-accent/20 text-cream sm:max-w-[425px]">
									<DialogHeader>
										<DialogTitle className="font-nasalization text-yellow-accent">
											Vychytávky v chatovém rozhraní
										</DialogTitle>
										<DialogDescription className="text-cream/80 font-inter">
											Co se v tomto modulu naučíš?
										</DialogDescription>
									</DialogHeader>
									<ul className="py-4 font-inter text-left list-disc list-inside space-y-2">
										<li>
											Uspořádáš si práci v chatu a ovládneš práci s dlouhými
											texty.
										</li>
										<li>
											Vytvoříš si vlastní AI workflow pro psaní, plánování či
											analýzy.
										</li>
										<li>
											Naučíš se vést vlákno od nápadu až po finální výstup.
										</li>
									</ul>
								</DialogContent>
							</Dialog>
						</div>

						{/* Topic 3: Deep Research */}
						<div className="text-center">
							<div className="w-16 h-16 bg-yellow-accent rounded-full mx-auto mb-4 flex items-center justify-center">
								<span className="text-black font-nasalization font-bold text-2xl">
									3
								</span>
							</div>
							<h3 className="text-cream font-inter font-bold text-lg mb-2 leading-relaxed min-h-[60px] flex items-center justify-center">
								Deep Research
							</h3>
							<p className="font-inter mb-4 text-balance">
								Nauč se kombinovat AI a Google pro perfektní rešerše
							</p>
							<Dialog>
								<DialogTrigger asChild>
									<Button
										variant="outline"
										size="sm"
										className="border-yellow-accent text-yellow-accent hover:bg-yellow-accent hover:text-black bg-transparent font-inter"
									>
										Detail
									</Button>
								</DialogTrigger>
								<DialogContent className="bg-[#2D0A31] border-yellow-accent/20 text-cream sm:max-w-[425px]">
									<DialogHeader>
										<DialogTitle className="font-nasalization text-yellow-accent">
											Deep Research
										</DialogTitle>
										<DialogDescription className="text-cream/80 font-inter">
											Co se v tomto modulu naučíš?
										</DialogDescription>
									</DialogHeader>
									<ul className="py-4 font-inter text-left list-disc list-inside space-y-2">
										<li>
											Naučíš se kombinovat AI a Google pro efektivní rešerše.
										</li>
										<li>
											Osvojíš si research pipeline pro mapování libovolného
											tématu.
										</li>
										<li>
											Dokážeš kriticky porovnávat zdroje a syntetizovat
											informace.
										</li>
									</ul>
								</DialogContent>
							</Dialog>
						</div>

						{/* Topic 4: CustomGPTs & Actions */}
						<div className="text-center">
							<div className="w-16 h-16 bg-yellow-accent rounded-full mx-auto mb-4 flex items-center justify-center">
								<span className="text-black font-nasalization font-bold text-2xl">
									4
								</span>
							</div>
							<h3 className="text-cream font-inter font-bold text-lg mb-2 leading-relaxed min-h-[60px] flex items-center justify-center">
								CustomGPTs & Actions
							</h3>
							<p className="font-inter mb-4 text-balance">
								Postav si vlastního asistenta na míru svým úkolům
							</p>
							<Dialog>
								<DialogTrigger asChild>
									<Button
										variant="outline"
										size="sm"
										className="border-yellow-accent text-yellow-accent hover:bg-yellow-accent hover:text-black bg-transparent font-inter"
									>
										Detail
									</Button>
								</DialogTrigger>
								<DialogContent className="bg-[#2D0A31] border-yellow-accent/20 text-cream sm:max-w-[425px]">
									<DialogHeader>
										<DialogTitle className="font-nasalization text-yellow-accent">
											CustomGPTs & Actions
										</DialogTitle>
										<DialogDescription className="text-cream/80 font-inter">
											Co se v tomto modulu naučíš?
										</DialogDescription>
									</DialogHeader>
									<ul className="py-4 font-inter text-left list-disc list-inside space-y-2">
										<li>
											Navrhneš a postavíš vlastního AI asistenta pro konkrétní
											úkoly.
										</li>
										<li>
											Pochopíš, kdy se CustomGPT vyplatí oproti běžnému chatu.
										</li>
										<li>
											Napojíš AI na externí nástroje (Actions) pro reálnou
											práci.
										</li>
									</ul>
								</DialogContent>
							</Dialog>
						</div>

						{/* Topic 5: Model Context Protocol (MCP) */}
						<div className="text-center">
							<div className="w-16 h-16 bg-yellow-accent rounded-full mx-auto mb-4 flex items-center justify-center">
								<span className="text-black font-nasalization font-bold text-2xl">
									5
								</span>
							</div>
							<h3 className="text-cream font-inter font-bold text-lg mb-2 leading-relaxed min-h-[60px] flex items-center justify-center">
								Model Context Protocol (MCP)
							</h3>
							<p className="font-inter mb-4 text-balance">
								Propoj AI s externími daty a systémy mimo chat
							</p>
							<Dialog>
								<DialogTrigger asChild>
									<Button
										variant="outline"
										size="sm"
										className="border-yellow-accent text-yellow-accent hover:bg-yellow-accent hover:text-black bg-transparent font-inter"
									>
										Detail
									</Button>
								</DialogTrigger>
								<DialogContent className="bg-[#2D0A31] border-yellow-accent/20 text-cream sm:max-w-[425px]">
									<DialogHeader>
										<DialogTitle className="font-nasalization text-yellow-accent">
											Model Context Protocol (MCP)
										</DialogTitle>
										<DialogDescription className="text-cream/80 font-inter">
											Co se v tomto modulu naučíš?
										</DialogDescription>
									</DialogHeader>
									<ul className="py-4 font-inter text-left list-disc list-inside space-y-2">
										<li>
											Propojíš AI s dalším softwarem, daty a externími systémy.
										</li>
										<li>
											Identifikuješ místa ve svém workflow vhodná pro MCP
											integraci.
										</li>
										<li>
											Navrhneš scénáře a blueprint vlastního AI asistenta s
											napojením.
										</li>
									</ul>
								</DialogContent>
							</Dialog>
						</div>

						{/* Topic 6: GDPR, autorská práva, bezpečnost */}
						<div className="text-center">
							<div className="w-16 h-16 bg-yellow-accent rounded-full mx-auto mb-4 flex items-center justify-center">
								<span className="text-black font-nasalization font-bold text-2xl">
									6
								</span>
							</div>
							<h3 className="text-cream font-inter font-bold text-lg mb-2 leading-relaxed min-h-[60px] flex items-center justify-center">
								Bezpečnost, GDPR, autorská práva
							</h3>
							<p className="font-inter mb-4 text-balance">
								Používej AI bezpečně a v souladu s pravidly firmy i zákony
							</p>
							<Dialog>
								<DialogTrigger asChild>
									<Button
										variant="outline"
										size="sm"
										className="border-yellow-accent text-yellow-accent hover:bg-yellow-accent hover:text-black bg-transparent font-inter"
									>
										Detail
									</Button>
								</DialogTrigger>
								<DialogContent className="bg-[#2D0A31] border-yellow-accent/20 text-cream sm:max-w-[425px]">
									<DialogHeader>
										<DialogTitle className="font-nasalization text-yellow-accent">
											GDPR, autorská práva, bezpečnost
										</DialogTitle>
										<DialogDescription className="text-cream/80 font-inter">
											Co se v tomto modulu naučíš?
										</DialogDescription>
									</DialogHeader>
									<ul className="py-4 font-inter text-left list-disc list-inside space-y-2">
										<li>
											Zorientuješ se v právních a bezpečnostních aspektech
											používání AI.
										</li>
										<li>
											Zjistíš, jak je to s autorskými právy u výstupů z AI.
										</li>
										<li>Naučíš se bezpečně pracovat s citlivými daty.</li>
									</ul>
								</DialogContent>
							</Dialog>
						</div>
					</div>
					<div className="text-center mt-12">
						<a
							href="#available-dates"
							className="inline-block bg-button-cream text-[#701A75] px-8 py-4 rounded-xl font-inter font-semibold text-lg hover:bg-yellow-100 transition-colors"
						>
							Rozjeď to s AI
						</a>
					</div>
				</div>
			</section>

			<AvailableDatesSection />

			<TestimonialsCarousel />

			<section className="px-6 py-16 lg:px-12">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-3xl lg:text-5xl font-nasalization font-bold text-foreground mb-6 leading-normal-xl">
						Chceš být připraven na svět?
					</h2>
					<p className="font-inter text-lg mb-8 max-w-2xl mx-auto">
						Nezůstávej pozadu. Začni svou cestu k mistrovství v AI ještě dnes.
					</p>
					{/* <div className="relative bg-purple-light/20 border border-purple-light/30 rounded-lg aspect-video flex items-center justify-center mb-8">
						<button
							type="button"
							className="w-20 h-20 bg-[#FFFBEB] rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
						>
							<div className="w-0 h-0 border-l-[20px] border-l-black border-y-[12px] border-y-transparent ml-1" />
						</button>
					</div> */}
					<a
						href="#available-dates"
						className="inline-block uppercase bg-button-cream text-[#701A75] px-12 py-6 rounded-xl font-inter font-bold text-xl hover:bg-yellow-100 transition-colors"
					>
						Jdu do toho!
					</a>
				</div>
			</section>

			<section className="px-6 py-16 lg:px-12 bg-purple-main">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-3xl lg:text-5xl font-nasalization font-bold text-foreground text-center mb-16 leading-normal-xl">
						Kurzem tě provede
					</h2>
					<div className="flex justify-center max-w-5xl mx-auto">
						<div className="bg-button-cream border-0 rounded-lg overflow-hidden w-full flex flex-col md:flex-row">
							<div className="w-full md:w-1/2 aspect-square md:aspect-auto relative">
								<img
									src="/petr.webp"
									alt="Lektor Petr"
									className="w-full h-full object-cover"
								/>
							</div>
							<div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
								<h3 className="text-[#701A75] font-inter font-bold text-2xl mb-2 leading-relaxed-xl">
									Petr Glaser
								</h3>
								<p className="text-purple-main font-inter font-bold text-sm mb-2">
									Fanatik AI, Staff Software Engineer
								</p>
								<div className="font-inter text-sm leading-relaxed space-y-4 text-[#701A75]/90">
									<p>
										Fanatik AI a produktivity vývojářů. I tak je Petr označován
										(nejen) sám sebou, ale i jeho kolegy a přáteli. Jeho nadšení
										se probudilo dávno před hypem způsobeným ChatGPT. Prvního AI
										asistenta kódu používal už před covidem. Od té doby se mnohé
										změnilo.
									</p>
									<p>
										Petr bedlivě sleduje nástroje, které jsou k dispozici.
										Nepatří k těm, kteří ti nacpou do chřtánu 50 nástrojů, které
										ti změní život. Naopak doporučuje přesně to, co on sám
										používá. Méně je někdy více a s AI to platí dvojnásob.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<FAQSection title="FAQ" variant="general" />

			<NewsletterSection />

			<FooterSection />
		</div>
	);
}
