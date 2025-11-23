"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { subscribeToWaitlist } from "@/app/actions/ecomail";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const formSchema = z.object({
	email: z.string().email({ message: "Zadej platný e-mail." }),
});

interface DiscountCountdownSectionProps {
	discountEnd: Date;
}

export default function DiscountCountdownSection({
	discountEnd,
}: DiscountCountdownSectionProps) {
	const [timeLeft, setTimeLeft] = useState<{
		days: number;
		hours: number;
		minutes: number;
	} | null>(null);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
		},
	});

	useEffect(() => {
		const calculateTimeLeft = () => {
			const now = new Date();
			const difference = discountEnd.getTime() - now.getTime();

			if (difference > 0) {
				const days = Math.floor(difference / (1000 * 60 * 60 * 24));
				const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
				const minutes = Math.floor((difference / 1000 / 60) % 60);
				setTimeLeft({ days, hours, minutes });
			} else {
				setTimeLeft(null);
			}
		};

		calculateTimeLeft();
		const timer = setInterval(calculateTimeLeft, 60000); // Update every minute

		return () => clearInterval(timer);
	}, [discountEnd]);

	async function onSubmit(values: z.infer<typeof formSchema>) {
		const formData = new FormData();
		formData.append("email", values.email);

		const result = await subscribeToWaitlist(formData);

		if (result.success) {
			setIsSubmitted(true);
			toast.success(result.message);
		} else {
			toast.error(result.message);
		}
	}

	if (!timeLeft) return null;

	return (
		<div className="w-full bg-cream text-purple-main py-12 px-6 lg:px-12 mb-16">
			<div className="max-w-4xl mx-auto text-center">
				<h3 className="font-nasalization font-bold text-2xl lg:text-3xl mb-4">
					Zaváděcí cena jen do Vánoc.
				</h3>
				<p className="font-inter text-lg mb-6">
					Přihlas se do {discountEnd.toLocaleDateString("cs-CZ")}, nebo si aspoň
					nech poslat připomínku, ať ti to neuteče.
				</p>

				<div className="text-3xl lg:text-5xl font-nasalization font-bold text-[#701A75] mb-12">
					Zbývá: {timeLeft.days} dní{" "}
					{timeLeft.hours.toString().padStart(2, "0")} hodin{" "}
					{timeLeft.minutes.toString().padStart(2, "0")} minut
				</div>

				<div className="max-w-md mx-auto">
					{isSubmitted ? (
						<div className="bg-green-100 border border-green-300 text-green-800 px-6 py-4 rounded-xl font-inter">
							Máme tě v listu. Až budeme mít novinky k AI Základům, dáme ti
							vědět.
						</div>
					) : (
						<>
							<p className="font-inter font-bold mb-4">
								Ještě nejsi ready koupit?
								<br />
								<span className="font-normal text-sm">
									Nech nám e-mail a pošleme ti připomínku, ukázky z kurzu a
									bonusy pro první zájemce.
								</span>
							</p>
							<form
								onSubmit={form.handleSubmit(onSubmit)}
								className="flex flex-col sm:flex-row gap-3"
							>
								<Input
									placeholder="Tvůj e-mail"
									{...form.register("email")}
									className="bg-white border-purple-light/20 text-purple-main placeholder:text-purple-main/50"
								/>
								<Button
									type="submit"
									disabled={form.formState.isSubmitting}
									className="bg-purple-main text-cream hover:bg-purple-dark whitespace-nowrap"
								>
									{form.formState.isSubmitting
										? "Odesílám..."
										: "Chci zůstat v obraze"}
								</Button>
							</form>
							{form.formState.errors.email && (
								<p className="text-red-600 text-sm mt-2 text-left">
									{form.formState.errors.email.message}
								</p>
							)}
						</>
					)}
				</div>
			</div>
		</div>
	);
}
