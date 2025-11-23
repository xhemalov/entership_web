"use client";

import { useState, useEffect } from "react";

interface DiscountCountdownProps {
	discountEnd: Date;
}

export default function DiscountCountdown({
	discountEnd,
}: DiscountCountdownProps) {
	const [timeLeft, setTimeLeft] = useState<{
		days: number;
		hours: number;
		minutes: number;
		seconds: number;
	} | null>(null);

	useEffect(() => {
		const calculateTimeLeft = () => {
			const now = new Date();
			const difference = discountEnd.getTime() - now.getTime();

			if (difference > 0) {
				const days = Math.floor(difference / (1000 * 60 * 60 * 24));
				const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
				const minutes = Math.floor((difference / 1000 / 60) % 60);
				const seconds = Math.floor((difference / 1000) % 60);
				setTimeLeft({ days, hours, minutes, seconds });
			} else {
				setTimeLeft(null);
			}
		};

		calculateTimeLeft();
		const timer = setInterval(calculateTimeLeft, 1000); // Update every second

		return () => clearInterval(timer);
	}, [discountEnd]);

	if (!timeLeft) return null;

	return (
		<div className="w-full bg-cream text-purple-main py-12 px-6 lg:px-12 mb-16">
			<div className="max-w-4xl mx-auto text-center">
				<h3 className="font-nasalization font-bold text-2xl lg:text-3xl mb-4">
					Zaváděcí cena jen do Vánoc.
				</h3>
				<p className="font-inter text-lg mb-6">
					Přihlas se do {discountEnd.toLocaleDateString("cs-CZ")} a využij
					zaváděcí cenu.
				</p>

				<div className="text-3xl lg:text-5xl font-nasalization font-bold text-[#701A75]">
					Zbývá: {timeLeft.days} dní a{" "}
					{timeLeft.hours.toString().padStart(2, "0")}:
					{timeLeft.minutes.toString().padStart(2, "0")}:
					{timeLeft.seconds.toString().padStart(2, "0")}
				</div>
			</div>
		</div>
	);
}
