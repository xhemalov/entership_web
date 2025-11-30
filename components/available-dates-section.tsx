"use client";

import { useState, useEffect } from "react";
import FAQSection from "@/components/faq-section";
import DiscountCountdown from "@/components/discount-countdown";
import WaitlistSection from "@/components/waitlist-section";

const DISCOUNT_END = new Date(2025, 11, 24); // Month is 0-indexed (11 = December)

// Configuration for introductory pricing
const ENABLE_INTRO_PRICE = true;
const INTRO_PRICE_DATE = `${DISCOUNT_END.getDate()}. ${DISCOUNT_END.getMonth() + 1}. ${DISCOUNT_END.getFullYear()}`;

const KOHORTA_PRICE_STANDARD = "4 990 Kč";
const KOHORTA_PRICE_INTRO = "3 990 Kč";

const FLEX_PRICE_STANDARD = "1 990 Kč";
const FLEX_PRICE_INTRO = "1 490 Kč";

export default function AvailableDatesSection() {
	const [isToggled, setIsToggled] = useState(false);
	const [isExpired, setIsExpired] = useState(false);

	useEffect(() => {
		// Check if the discount has expired
		const checkExpiration = () => {
			const now = new Date();
			setIsExpired(now > DISCOUNT_END);
		};

		checkExpiration();
		// Optional: interval to check periodically if the user stays on the page
		const timer = setInterval(checkExpiration, 1000);
		return () => clearInterval(timer);
	}, []);

	const showIntroPrice = ENABLE_INTRO_PRICE && !isExpired;

	return (
		<section
			id="available-dates"
			className="bg-purple-main px-6 py-16 lg:px-12 scroll-mt-24"
			style={{ viewTimelineName: "--available-dates" } as React.CSSProperties}
		>
			<div className="max-w-full mx-auto">
				<h2 className="text-3xl uppercase lg:text-5xl font-nasalization font-bold text-foreground text-center mb-16 leading-normal-xl">
					Volné termíny
				</h2>

				<div className="-mx-6 lg:-mx-12 mb-16">
					<DiscountCountdown discountEnd={DISCOUNT_END} />
				</div>

				<div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-12">
					{/* Left Card - KOHORTA (fixed) */}
					<a
						href="https://entership-s-school.teachable.com/purchase?product_id=6555469&coupon_code=POCHOP-AI-XMAS-KOHORTA"
						aria-label="Vybrat: Self kurz Kohorta"
						className="relative bg-gradient-to-b from-button-cream via-button-cream to-button-cream/90 border-2 border-yellow-accent rounded-2xl overflow-hidden shadow-2xl shadow-purple-light/20 hover:shadow-3xl hover:shadow-purple-light/30 transition-all duration-300 hover:-translate-y-2 group w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-accent/80 cursor-pointer flex flex-col"
					>
						{/* Premium Badge */}
						<div className="absolute top-4 right-4 bg-yellow-accent text-black px-4 py-1 rounded-full font-inter font-bold text-xs uppercase tracking-wide shadow-lg">
							Doporučujeme
						</div>

						{/* Icon section */}
						<div className="pt-12 pb-8 px-8 text-center flex-shrink-0">
							<div className="w-24 h-24 bg-purple-main rounded-2xl mx-auto flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform duration-300">
								<svg
									className="w-12 h-12 text-yellow-accent"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									strokeWidth={2}
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
									/>
								</svg>
							</div>
						</div>

						{/* Content section */}
						<div className="bg-purple-main px-8 pt-8 pb-10 text-center rounded-t-3xl -mt-4 flex-grow flex flex-col">
							<h3 className="text-yellow-accent uppercase font-inter font-bold text-xl mb-3 leading-tight">
								Kohorta
							</h3>

							{/* Sales highlight */}
							<div className="mb-6 pb-6 border-b border-purple-light/30 min-h-[80px] flex items-center justify-center">
								<p className="text-cream/90 font-inter text-sm leading-relaxed px-2">
									Skupinová jízda s lektorem pro maximální výsledky
								</p>
							</div>

							{/* Feature list with checkmarks */}
							<div className="text-cream font-inter text-sm mb-8 flex-grow flex flex-col items-center">
								<div className="inline-block text-left space-y-3">
									<div className="flex items-start gap-3">
										<svg
											className="w-5 h-5 text-yellow-accent flex-shrink-0"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											strokeWidth={2.5}
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M5 13l4 4L19 7"
											/>
										</svg>
										<span className="text-balance">Start 12. 1. 2026</span>
									</div>
									<div className="flex items-start gap-3">
										<svg
											className="w-5 h-5 text-yellow-accent flex-shrink-0"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											strokeWidth={2.5}
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M5 13l4 4L19 7"
											/>
										</svg>
										<span className="text-balance">
											Přístup ke všem lekcím a videím
										</span>
									</div>
									<div className="flex items-start gap-3">
										<svg
											className="w-5 h-5 text-yellow-accent flex-shrink-0"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											strokeWidth={2.5}
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M5 13l4 4L19 7"
											/>
										</svg>
										<span className="text-balance">Online podpora lektora</span>
									</div>
									<div className="flex items-start gap-3">
										<svg
											className="w-5 h-5 text-yellow-accent flex-shrink-0"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											strokeWidth={2.5}
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M5 13l4 4L19 7"
											/>
										</svg>
										<span className="text-balance">
											1× týdně Q&A (nahrávané)
										</span>
									</div>
									<div className="flex items-start gap-3">
										<svg
											className="w-5 h-5 text-yellow-accent flex-shrink-0"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											strokeWidth={2.5}
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M5 13l4 4L19 7"
											/>
										</svg>
										<span className="text-balance">
											5 týdnů praktického vedení
										</span>
									</div>
									<div className="flex items-start gap-3">
										<svg
											className="w-5 h-5 text-yellow-accent flex-shrink-0"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											strokeWidth={2.5}
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M5 13l4 4L19 7"
											/>
										</svg>
										<span className="text-balance">
											Vlastní Discord skupina
										</span>
									</div>
									<div className="flex items-start gap-3">
										<svg
											className="w-5 h-5 text-yellow-accent flex-shrink-0"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											strokeWidth={2.5}
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M5 13l4 4L19 7"
											/>
										</svg>
										<span className="text-balance">
											Rituály & týdenní úkoly
										</span>
									</div>
									<div className="flex items-start gap-3">
										<svg
											className="w-5 h-5 text-yellow-accent flex-shrink-0"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											strokeWidth={2.5}
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M5 13l4 4L19 7"
											/>
										</svg>
										<span className="text-balance">Aktuality a AI novinky</span>
									</div>
									<div className="flex items-start gap-3">
										<svg
											className="w-5 h-5 text-yellow-accent flex-shrink-0"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											strokeWidth={2.5}
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M5 13l4 4L19 7"
											/>
										</svg>
										<span className="text-balance">Online networking</span>
									</div>
								</div>
							</div>

							{/* Price */}
							<div className="mb-6">
								{showIntroPrice ? (
									<>
										<div className="text-yellow-accent font-nasalization font-bold text-4xl mb-1">
											{KOHORTA_PRICE_INTRO}
										</div>
										<div className="text-cream/60 font-inter text-lg line-through mb-2">
											{KOHORTA_PRICE_STANDARD} standardní cena
										</div>
										<p className="text-cream/80 font-inter text-xs">
											Zaváděcí cena platí do {INTRO_PRICE_DATE}.
										</p>
									</>
								) : (
									<>
										<div className="text-yellow-accent font-nasalization font-bold text-4xl mb-1">
											{KOHORTA_PRICE_STANDARD}
										</div>
										<p className="text-cream/60 font-inter text-xs">
											Jednorázová platba
										</p>
									</>
								)}
							</div>

							{/* CTA Button */}
							<div className="w-full bg-button-cream text-black px-8 py-4 rounded-xl font-inter font-bold text-base group-hover:bg-yellow-accent group-hover:scale-105 transition-all duration-300 shadow-lg group-hover:shadow-xl">
								ZAČÍT S KOHORTOU
							</div>
						</div>
					</a>

					{/* Right Card - FLEX (unchanged) */}
					<a
						href="https://checkout.teachable.com/secure/2643637/checkout/order_x12ql380?coupon_code=POCHOP-AI-XMAS-FLEX"
						aria-label="Vybrat: Plán flex - jen videa bez lektora"
						className="relative bg-[#FFFBEB]/15 border border-[#FFFBEB]/30 rounded-2xl overflow-hidden hover:border-yellow-accent hover:shadow-xl hover:shadow-purple-light/10 transition-all duration-300 group w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-accent/80 cursor-pointer flex flex-col"
					>
						{/* Icon section */}
						<div className="pt-12 pb-8 px-8 text-center flex-shrink-0">
							<div className="w-24 h-24 bg-[#FFFBEB]/15 rounded-2xl mx-auto flex items-center justify-center border-2 border-[#FFFBEB]/30 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
								<svg
									className="w-12 h-12 text-yellow-accent"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									strokeWidth={2}
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
									/>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
							</div>
						</div>

						{/* Content section */}
						<div className="bg-purple-main px-8 pt-8 pb-10 text-center rounded-t-3xl -mt-4 flex-grow flex flex-col">
							<h3 className="text-yellow-accent uppercase font-inter font-bold text-xl mb-3 leading-tight">
								Flex
							</h3>

							{/* Sales highlight */}
							<div className="mb-6 pb-6 border-b border-purple-light/30 min-h-[80px] flex items-center justify-center">
								<p className="text-cream/90 font-inter text-sm leading-relaxed px-2">
									Pro ty, co chtějí jet sami a kdykoliv
								</p>
							</div>

							{/* Feature list with checkmarks */}
							<div className="text-cream font-inter text-sm mb-8 flex-grow flex flex-col items-center">
								<div className="inline-block text-left space-y-3">
									<div className="flex items-start gap-3">
										<svg
											className="w-5 h-5 text-yellow-accent flex-shrink-0"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											strokeWidth={2.5}
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M5 13l4 4L19 7"
											/>
										</svg>
										<span className="text-balance">Start kdykoliv</span>
									</div>
									<div className="flex items-start gap-3">
										<svg
											className="w-5 h-5 text-yellow-accent flex-shrink-0"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											strokeWidth={2.5}
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M5 13l4 4L19 7"
											/>
										</svg>
										<span className="text-balance">
											Přístup ke všem lekcím a videím
										</span>
									</div>
									<div className="flex items-start gap-3">
										<svg
											className="w-5 h-5 text-yellow-accent flex-shrink-0"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											strokeWidth={2.5}
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M5 13l4 4L19 7"
											/>
										</svg>
										<span className="text-balance">
											Studuj dle sebe - bez stresu, bez termínů
										</span>
									</div>
									<div className="flex items-start gap-3">
										<svg
											className="w-5 h-5 text-yellow-accent flex-shrink-0"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											strokeWidth={2.5}
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M5 13l4 4L19 7"
											/>
										</svg>
										<span className="text-balance">
											Perfektní pro úplné začátečníky i introvertní samouky
										</span>
									</div>
									<div className="flex items-start gap-3 opacity-40">
										<svg
											className="w-5 h-5 text-yellow-accent flex-shrink-0"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											strokeWidth={2.5}
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M6 18L18 6M6 6l12 12"
											/>
										</svg>
										<span className="text-balance">
											Bez konzultací a skupinových aktivit
										</span>
									</div>
								</div>
							</div>

							{/* Price */}
							<div className="mb-6">
								{showIntroPrice ? (
									<>
										<div className="text-cream font-nasalization font-bold text-4xl mb-1">
											{FLEX_PRICE_INTRO}
										</div>
										<div className="text-cream/60 font-inter text-lg line-through mb-2">
											{FLEX_PRICE_STANDARD} standardní cena
										</div>
										<p className="text-cream/80 font-inter text-xs">
											Zaváděcí cena platí do {INTRO_PRICE_DATE}.
										</p>
									</>
								) : (
									<>
										<div className="text-cream font-nasalization font-bold text-4xl mb-1">
											{FLEX_PRICE_STANDARD}
										</div>
										<p className="text-cream/60 font-inter text-xs">
											Jednorázová platba
										</p>
									</>
								)}
							</div>

							{/* CTA Button */}
							<div className="w-full bg-[#FFFBEB]/15 text-cream px-8 py-4 rounded-xl font-inter font-bold text-base border-2 border-[#FFFBEB]/30 group-hover:bg-[#FFFBEB]/25 group-hover:border-[#FFFBEB]/50 group-hover:scale-105 transition-all duration-300">
								SPUSTIT STUDIUM
							</div>
						</div>
					</a>
				</div>

				<div className="-mx-6 lg:-mx-12 mb-16">
					<WaitlistSection />
				</div>

				{/* First FAQ Section with toggle inside */}
				<FAQSection
					title="Co v balíčku najdeš?"
					isToggled={isToggled}
					setIsToggled={setIsToggled}
					showToggle={true}
				/>
			</div>
		</section>
	);
}
