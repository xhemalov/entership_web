"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { subscribeToNewsletter } from "@/app/actions/ecomail";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const formSchema = z.object({
	email: z.string().email({ message: "Zadej platný e-mail." }),
});

export default function NewsletterSection() {
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

		const result = await subscribeToNewsletter(formData);

		if (result.success) {
			setIsSubmitted(true);
			toast.success(result.message);
		} else {
			toast.error(result.message);
		}
	}

	return (
		<section className="w-full bg-cream text-purple-main py-16 px-6 lg:px-12">
			<div className="max-w-4xl mx-auto text-center">
				<h2 className="text-3xl lg:text-4xl font-nasalization font-bold mb-6 leading-normal-xl">
					Chceš od nás občas chytrej AI tip místo dalšího bullshitu v inboxu?
				</h2>
				<p className="font-inter text-lg mb-8 max-w-2xl mx-auto">
					Přihlas se a pošleme ti jen to, co sami používáme - novinky z
					Entership, tipy k AI a info o dalších bězích kurzů.
				</p>

				{isSubmitted ? (
					<div className="bg-green-100 border border-green-300 text-green-800 px-6 py-4 rounded-xl font-inter inline-block">
						Díky! Když budeme mít něco, co dává fakt smysl, pošleme ti to.
					</div>
				) : (
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
					>
						<Input
							placeholder="Tvůj e-mail"
							{...form.register("email")}
							className="bg-white border-purple-light/20 text-purple-main placeholder:text-purple-main/50 h-12"
						/>
						<Button
							type="submit"
							disabled={form.formState.isSubmitting}
							className="bg-purple-main text-cream hover:bg-purple-dark whitespace-nowrap h-12 px-8 font-bold"
						>
							{form.formState.isSubmitting
								? "Odesílám..."
								: "Chci chytré maily"}
						</Button>
					</form>
				)}
				{form.formState.errors.email && (
					<p className="text-red-600 text-sm mt-2">
						{form.formState.errors.email.message}
					</p>
				)}
			</div>
		</section>
	);
}
