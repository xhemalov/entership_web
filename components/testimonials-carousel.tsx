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
		text: "Dříve jsem byl ve světě IT ztracen, ale od doby, co jsem na kurzech Entership, tak už nejsem! Kurz mi otevřel oči a ukázal, že AI není strašák, ale nástroj, který mi může ušetřit hodiny práce týdně. Lektoři jsou skvělí a vše vysvětlují lidsky.",
		author: "Jan Novák",
		role: "Marketing Manager",
	},
	{
		text: "Entership mi pomohl pochopit, jak efektivně využívat AI v mé každodenní práci. Dříve jsem trávila hodiny psaním e-mailů a reportů, teď mi s tím pomáhá AI a já se můžu věnovat kreativnějším úkolům. Doporučuji všem, kdo chtějí držet krok s dobou.",
		author: "Petra Svobodová",
		role: "HR Specialist",
	},
	{
		text: "Nejlepší investice do vzdělání za poslední roky. Kurz je praktický, žádná zbytečná teorie. Hned druhý den jsem začal používat naučené postupy v praxi a kolegové se nestačili divit, jak jsem zrychlil. Díky moc celému týmu!",
		author: "Tomáš Dvořák",
		role: "Project Manager",
	},
	{
		text: "Skvělý přístup lektorů, kteří opravdu vědí, o čem mluví. Kurz byl nabitý informacemi, ale zároveň podaný srozumitelnou formou. Líbilo se mi, že jsme si vše hned zkoušeli na reálných příkladech. Určitě doporučuji!",
		author: "Lucie Králová",
		role: "Copywriter",
	},
	{
		text: "Díky Entershipu jsem se přestal bát technologií. AI mi teď šetří spoustu času a já se můžu soustředit na to podstatné. Kurz byl skvěle strukturovaný a materiály jsou perfektní pro další studium.",
		author: "Martin Černý",
		role: "Freelancer",
	},
];

export default function TestimonialsCarousel() {
	return (
		<section className="py-16 bg-button-cream text-black px-6">
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
									<p className="text-lg md:text-xl font-inter leading-relaxed mb-8 italic max-w-2xl">
										"{testimonial.text}"
									</p>
									<div>
										<h4 className="font-nasalization font-bold text-xl mb-1">
											{testimonial.author}
										</h4>
										<p className="font-inter text-black/70 text-sm">
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
							className="h-16 w-16 rounded-none text-black hover:bg-transparent hover:text-black/70"
						>
							<ArrowLeft className="h-10 w-10" />
							<span className="sr-only">Previous slide</span>
						</CarouselPrevious>
						<CarouselNext
							variant="ghost"
							className="h-16 w-16 rounded-none text-black hover:bg-transparent hover:text-black/70"
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
