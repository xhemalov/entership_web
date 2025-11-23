import { Email } from "@convex-dev/auth/providers/Email";
import { generateRandomString } from "@oslojs/crypto/random";
import type { RandomReader } from "@oslojs/crypto/random";

const random: RandomReader = {
	read(bytes) {
		crypto.getRandomValues(bytes);
	},
};

export const ResendOTP = Email({
	id: "resend-otp",
	maxAge: 60 * 15,
	async generateVerificationToken() {
		return generateRandomString(random, "0123456789", 6);
	},
	async sendVerificationRequest({ identifier: email, token }) {
		const response = await fetch(`${process.env.OTP_ENDPOINT}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email,
				token,
				chatId: process.env.CHAT_ID,
				appName: `${process.env.APP_NAME}` || "My App",
				secretKey: process.env.SECRET_KEY,
			}),
		});

		if (!response.ok) {
			const errorData = await response.json().catch(() => ({}));
			throw new Error(errorData.error || "Failed to send verification email");
		}
	},
});
