"use client";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import CourseToggle from "@/components/course-toggle";

interface FAQSectionProps {
	title?: string;
	isToggled?: boolean;
	setIsToggled?: (value: boolean) => void;
	showToggle?: boolean;
	variant?: "course-details" | "general";
}

// SVG Icons with purple main color
const LightningIcon = () => (
	<svg
		className="w-6 h-6"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
	</svg>
);

const TargetIcon = () => (
	<svg
		className="w-6 h-6"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<circle cx="12" cy="12" r="1"></circle>
		<circle cx="12" cy="12" r="5"></circle>
		<circle cx="12" cy="12" r="9"></circle>
	</svg>
);

const ToolsIcon = () => (
	<svg
		className="w-6 h-6"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 1 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
	</svg>
);

const TrophyIcon = () => (
	<svg
		className="w-6 h-6"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<path d="M6 9H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2h-2"></path>
		<path d="M6 9c0-1 .895-2 2-2h8c1.105 0 2 1 2 2"></path>
		<path d="M9 5a3 3 0 0 1 6 0"></path>
		<line x1="9" y1="14" x2="9" y2="20"></line>
		<line x1="15" y1="14" x2="15" y2="20"></line>
	</svg>
);

const ChatIcon = () => (
	<svg
		className="w-6 h-6"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
	</svg>
);

const UsersIcon = () => (
	<svg
		className="w-6 h-6"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
		<circle cx="9" cy="7" r="4"></circle>
		<path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
		<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
	</svg>
);

const CalendarIcon = () => (
	<svg
		className="w-6 h-6"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
		<line x1="16" y1="2" x2="16" y2="6"></line>
		<line x1="8" y1="2" x2="8" y2="6"></line>
		<line x1="3" y1="10" x2="21" y2="10"></line>
	</svg>
);

export default function FAQSection({
	title = "Co tě čeká?",
	isToggled = false,
	setIsToggled,
	showToggle = false,
	variant = "course-details",
}: FAQSectionProps) {
	// KOHORTA content (isToggled = false)
	const kohortaFaqs = [
		{
			icon: <LightningIcon />,
			question: "Jak bude probíhat celý program",
			answer:
				"Kohorta jede 5 týdnů v jasném rytmu. Každý týden nový obsah, úkoly a společný progres. Žádné bloudění, žádné “co mám dělat dál?”. Máš jasný plán a crew, která letí s tebou.",
		},
		{
			icon: <TargetIcon />,
			question: "Bez předchozích zkušeností",
			answer:
				"Všechno vysvětlujeme tak, že to pochopí i člověk, který AI viděl poprvé včera. Zero background? V pohodě. Kohorta tě podrží.",
		},
		{
			icon: <ToolsIcon />,
			question: "Co všechno dostaneš",
			answer:
				"Praktická videa, úkoly, doporučené AI nástroje a bonusové věci, které dostávají jen členové Kohorty. Nic suchého - všechno rovnou použitelné.",
		},
		{
			icon: <ChatIcon />,
			question: "Podpora lektora a Q&A",
			answer:
				"Jednou týdně Q&A, kde se můžeš zeptat na cokoliv. Lektor ti dá feedback, nasměruje tě a ušetří ti hodiny googlení. Jsi v dobrých rukou.",
		},
		{
			icon: <UsersIcon />,
			question: "Podpora komunity",
			answer:
				"Máš přístup do společné skupiny na Discordu - sdílíme tam výsledky, ptáme se, podporujeme se a držíme si tempo. Je to malý, bezpečný vesmír, kde tě to prostě nakopne.",
		},
		{
			icon: <CalendarIcon />,
			question: "Rituály a tempo",
			answer:
				"Rituály jsou malé akce, které ti pomůžou držet krok - týdenní start, minichallenge, malá připomenutí. Nic násilného, ale sakra to funguje.",
		},
	];

	const flexFaqs = [
		{
			icon: <LightningIcon />,
			question: "Studuj vlastním tempem",
			answer:
				"Jedeš si absolutně svoje tempo. Ráno? Večer? O víkendu? Je to tvoje. Žádné termíny, žádný tlak, jen čistý self-pace.",
		},
		{
			icon: <TargetIcon />,
			question: "Bez předchozích zkušeností",
			answer:
				"Všechno je krok-za-krokem a pochopitelné i pro úplné AI nováčky. Všechno ukazujeme tak, aby to zvládl každý.",
		},
		{
			icon: <ToolsIcon />,
			question: "Co získáš za materiály",
			answer:
				"Všechna videa a praktické postupy, které si můžeš pouštět furt dokola. Kdykoliv, odkudkoliv. Flex = svoboda.",
		},
		{
			icon: <UsersIcon />,
			question: "Pro koho je to ideální",
			answer:
				"Pro lidi, kteří nepotřebují komunitu a jen chtějí kvalitní obsah bez interakcí. Introvert? Plný kalendář? Rychlý samostudium? Sem s tebou.",
		},
		{
			icon: <ChatIcon />,
			question: "Absolutní klid - žádný tlak",
			answer:
				"Maximální klid, minimum rušení. Žádné Q&A, žádné konzultace. Tohle je čistý solo run. Když cokoliv potřebuješ, ptej se ve veřejné sekci Discordu.",
		},
		{
			icon: <CalendarIcon />,
			question: "Jak dlouho máš přístup",
			answer:
				"Můžeš se kdykoliv vracet k videím a jet to znovu. Flex je maraton, ne sprint.",
		},
	];

	const generalFaqs = [
		{
			icon: <TargetIcon />,
			question: "Musím mít zkušenosti s AI, abych to zvládl?",
			answer:
				"Ne. Začínáme od úplného základu. Když umíš zapnout počítač, jsi ready.",
		},
		{
			icon: <LightningIcon />,
			question: "Jaký je rozdíl mezi Kohortou a Flexem?",
			answer:
				"Kohorta = vedená cesta, podpora lektora, Q&A a komunita. Flex = jedeš solo, svým tempem, bez termínů a bez interakcí.",
		},
		{
			icon: <CalendarIcon />,
			question: "Kolik času mi kurz zabere?",
			answer:
				"Stačí 2–3 hodiny týdně. Víc pomůže, míň taky jde - hlavní je pravidelnost.",
		},
		{
			icon: <ChatIcon />,
			question: "Co když nestihnu lekci v Kohortě?",
			answer: "Všechny Q&A i materiály jsou nahrávané. Nic ti neuteče.",
		},
		{
			icon: <ToolsIcon />,
			question: "Budu umět AI používat v práci?",
			answer:
				"Jo. Kurz je praktický. Dostaneš konkrétní postupy, které využiješ hned první týden v práci.",
		},
		{
			icon: <TrophyIcon />,
			question: "Co když jsem senior/profík - nebude to pro mě moc basic?",
			answer:
				"Pro profíky máme pokročilejší tipy, hlubší postupy a smart techniky práce s AI. Na hlouposti tady čas neztrácíme.",
		},
		{
			icon: <UsersIcon />,
			question: "Můžu kombinovat oba balíčky?",
			answer:
				"Jasně - můžeš začít Flexem a kdykoliv přejít do další Kohorty, pokud zjistíš, že chceš/potřebuješ podporu a tempo.",
		},
		{
			icon: <LightningIcon />,
			question: "Jak dlouho mám přístup k materiálům?",
			answer: "Po celou dobu kurzu a ještě dál. Ke všemu se můžeš vracet.",
		},
		{
			icon: <ToolsIcon />,
			question: "Jsou v kurzu placené nástroje?",
			answer:
				"Většinu stavíme na nástrojích zdarma. Premium věci jsou volitelné, ale fakt bodnou. Přesto některé zdarma nástroje chtějí kartu.",
		},
	];

	const faqs =
		variant === "general" ? generalFaqs : isToggled ? flexFaqs : kohortaFaqs;

	return (
		<section className="px-6 py-16 lg:px-12 bg-purple-main">
			<div className="max-w-4xl mx-auto">
				<h2 className="text-3xl lg:text-4xl font-nasalization font-bold text-foreground text-center mb-16 leading-normal-xl">
					{title}
				</h2>
				{showToggle && setIsToggled && (
					<div className="mb-12">
						<CourseToggle isToggled={isToggled} setIsToggled={setIsToggled} />
					</div>
				)}
				<Accordion type="multiple" className="space-y-4">
					{faqs.map((faq, index) => (
						<AccordionItem
							key={index}
							value={`item-${index}`}
							className="bg-button-cream border-0 rounded-lg px-6 hover:bg-button-cream-hover"
						>
							<AccordionTrigger className="text-[#701A75] font-inter font-semibold text-left">
								<div className="flex items-center gap-3">
									{faq.icon}
									<span>{faq.question}</span>
								</div>
							</AccordionTrigger>
							<AccordionContent className="text-[#701A75] font-inter leading-relaxed">
								{faq.answer}
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</section>
	);
}
