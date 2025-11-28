"use client";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
	{
		text: "Spolupráci bych popsala slovy inovace, představení a interakce. Překvapilo mě množství různých nástrojů, které jsou k dispozici. Petrův kurz doporučuji všem, kdo chtějí toto AI šílenství stíhat a být trochu v obraze.",
		author: "Lenka S.",
		role: "",
	},
	{
		text: "Workshopy určitě doporučuji, aby si lidé udělali přehled o AI a zjistili, jak ji využívat ve své práci. Získal jsem spoustu odkazů na nové nástroje, které jsem předtím neznal.",
		author: "Petr K.",
		role: "",
	},
	{
		text: "Díky kurzu dnes AI používám efektivněji. Rozumím nástrojům, se kterými jsem už dřív pracoval, a dokážu si představit jejich využití jak v osobním, tak profesním životě.",
		author: "Filip L.",
		role: "",
	},
	{
		text: "Na workshop AI jsem šel s mírným obavami, jestli tempu vůbec dokážu stačit – nejsem programátor. Nakonec však bylo vše srozumitelné, praktické a překvapivě přínosné.",
		author: "Radek S.",
		role: "",
	},
	{
		text: "V praxi mě ale velmi překvapilo, jak srozumitelně a jasně Petr dokáže celý svět umělé inteligence vysvětlit, i když pro člověka z „jiného oboru“ může být na první pohled poměrně složitý.",
		author: "Míša H.",
		role: "",
	},
	{
		text: "Kurz doporučuji všem – zejména střední a starší generace ocení, jak AI nástroje ušetří monotónní práci a repetitivní úkoly. Pro IT profesionály se AI stává nutností.",
		author: "Petr H.",
		role: "",
	},
];

export default function TestimonialsCarousel() {
	return (
		<section className="py-16 bg-button-cream text-[#701A75] px-6">
			<div className="max-w-4xl mx-auto">
				<h2 className="text-3xl lg:text-5xl font-nasalization font-bold text-center mb-12 leading-normal-xl">
					Co o nás říkají absolventi
				</h2>

				<Carousel
					opts={{
						align: "start",
						loop: true,
					}}
					className="w-full"
				>
					<CarouselContent>
						{testimonials.map((testimonial) => (
							<CarouselItem key={testimonial.author}>
								<div className="flex flex-col items-center text-center px-4 md:px-12 select-none">
									<p className="text-lg md:text-xl font-inter leading-relaxed mb-8 italic max-w-2xl text-[#701A75]">
										"{testimonial.text}"
									</p>
									<div>
										<h4 className="font-nasalization font-bold text-xl mb-1 text-[#701A75]">
											{testimonial.author}
										</h4>
										<p className="font-inter text-[#701A75]/70 text-sm">
											{testimonial.role}
										</p>
									</div>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<div className="hidden md:block">
						<CarouselPrevious
							variant="ghost"
							className="h-16 w-16 rounded-none text-[#701A75] hover:bg-transparent hover:text-[#701A75]/70"
						>
							<ArrowLeft className="h-10 w-10" />
							<span className="sr-only">Previous slide</span>
						</CarouselPrevious>
						<CarouselNext
							variant="ghost"
							className="h-16 w-16 rounded-none text-[#701A75] hover:bg-transparent hover:text-[#701A75]/70"
						>
							<ArrowRight className="h-10 w-10" />
							<span className="sr-only">Next slide</span>
						</CarouselNext>
					</div>
				</Carousel>
			</div>
		</section>
	);
}
