interface CountdownBarProps {
	discountEnd: Date;
}

export default function CountdownBar({ discountEnd }: CountdownBarProps) {
	const targetDate = discountEnd;

	const now = new Date();
	const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

	const diffTime = targetDate.getTime() - today.getTime();
	const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

	if (diffDays <= 0) {
		return null;
	}

	const text =
		diffDays === 1
			? "Zaváděcí cena platí ještě 1 den."
			: `Zaváděcí cena platí ještě ${diffDays} dní.`;

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
