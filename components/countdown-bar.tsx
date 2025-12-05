"use client";

import { useEffect, useState } from "react";

interface CountdownBarProps {
	discountEnd: Date;
}

export default function CountdownBar({ discountEnd }: CountdownBarProps) {
	const [daysLeft, setDaysLeft] = useState<number | null>(null);

	useEffect(() => {
		const targetDate = discountEnd;

		const calculateDaysLeft = () => {
			const now = new Date();
			const difference = targetDate.getTime() - now.getTime();

			if (difference > 0) {
				const days = Math.floor(difference / (1000 * 60 * 60 * 24));
				setDaysLeft(days);
			} else {
				setDaysLeft(null);
			}
		};

		calculateDaysLeft();
		const timer = setInterval(calculateDaysLeft, 60000);
		return () => clearInterval(timer);
	}, [discountEnd]);

	if (daysLeft === null) {
		return null;
	}

	let text = "";
	if (daysLeft === 0) {
		text = "Zaváděcí cena končí dnes.";
	} else if (daysLeft === 1) {
		text = "Zaváděcí cena platí ještě 1 den.";
	} else if (daysLeft >= 2 && daysLeft <= 4) {
		text = `Zaváděcí cena platí ještě ${daysLeft} dny.`;
	} else {
		text = `Zaváděcí cena platí ještě ${daysLeft} dní.`;
	}

	return (
		<div
			className="w-full bg-cream text-purple-main text-center font-inter font-medium text-sm border-b border-purple-light/10 countdown-bar-scroll px-6 lg:px-12 overflow-hidden"
			style={
				{
					animationName: "countdown-bg-change, hide-bar",
					animationTimeline: "scroll(), --available-dates",
					animationRange: "0px 200px, entry 0% entry 20%",
					animationFillMode: "forwards, forwards",
				} as React.CSSProperties
			}
		>
			{text}
		</div>
	);
}
