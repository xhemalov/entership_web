"use server";

import { z } from "zod";

const SubscribeSchema = z.object({
	email: z.string().email({ message: "Neplatný e-mail" }),
});

export async function subscribeToWaitlist(formData: FormData) {
	const email = formData.get("email");

	const result = SubscribeSchema.safeParse({ email });

	if (!result.success) {
		return { success: false, message: result.error.errors[0].message };
	}

	const API_KEY = process.env.ECOMAIL_API_KEY;
	const LIST_ID = process.env.ECOMAIL_LIST_ID;

	if (!API_KEY || !LIST_ID) {
		console.error("Missing Ecomail configuration");
		return { success: false, message: "Chyba serveru: Chybí konfigurace." };
	}

	try {
		const response = await fetch(
			`https://api2.ecomailapp.cz/lists/${LIST_ID}/subscribe`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					key: API_KEY,
				},
				body: JSON.stringify({
					email: result.data.email,
					tags: ["ai-zaklady-waitlist"],
					resubscribe: true, // Update existing subscriber
				}),
			},
		);

		if (!response.ok) {
			const errorData = await response.json();
			console.error("Ecomail API error:", errorData);
			return { success: false, message: "Nepodařilo se přihlásit k odběru." };
		}

		return {
			success: true,
			message:
				"Máme tě v listu. Až budeme mít novinky k AI Základům, dáme ti vědět.",
		};
	} catch (error) {
		console.error("Subscription error:", error);
		return { success: false, message: "Došlo k neočekávané chybě." };
	}
}

export async function subscribeToNewsletter(formData: FormData) {
	const email = formData.get("email");

	const result = SubscribeSchema.safeParse({ email });

	if (!result.success) {
		return { success: false, message: result.error.errors[0].message };
	}

	const API_KEY = process.env.ECOMAIL_API_KEY;
	const LIST_ID = process.env.ECOMAIL_LIST_ID;

	if (!API_KEY || !LIST_ID) {
		console.error("Missing Ecomail configuration");
		return { success: false, message: "Chyba serveru: Chybí konfigurace." };
	}

	try {
		const response = await fetch(
			`https://api2.ecomailapp.cz/lists/${LIST_ID}/subscribe`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					key: API_KEY,
				},
				body: JSON.stringify({
					email: result.data.email,
					tags: ["newsletter-general"],
					resubscribe: true, // Update existing subscriber
				}),
			},
		);

		if (!response.ok) {
			const errorData = await response.json();
			console.error("Ecomail API error:", errorData);
			return { success: false, message: "Nepodařilo se přihlásit k odběru." };
		}

		return {
			success: true,
			message: "Díky! Když budeme mít něco, co dává fakt smysl, pošleme ti to.",
		};
	} catch (error) {
		console.error("Subscription error:", error);
		return { success: false, message: "Došlo k neočekávané chybě." };
	}
}
