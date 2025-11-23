"use client";

import { useState } from "react";
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

export default function WaitlistSection() {
	const [isSubmitted, setIsSubmitted] = useState(false);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
		},
	});

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

	return (
		<div className="w-full bg-cream text-purple-main py-12 px-6 lg:px-12 mb-16">
			<div className="max-w-md mx-auto text-center">
				{isSubmitted ? (
					<div className="bg-green-100 border border-green-300 text-green-800 px-6 py-4 rounded-xl font-inter">
						Máme tě v listu. Až budeme mít novinky k AI Základům, dáme ti vědět.
					</div>
				) : (
					<>
						<p className="font-inter font-bold mb-4 text-lg">
							Ještě nejsi ready koupit?
							<br />
							<span className="font-normal text-sm">
								Nech nám e-mail a pošleme ti připomínku, ukázky z kurzu a bonusy
								pro první zájemce.
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
	);
}
