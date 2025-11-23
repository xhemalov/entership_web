import CookiesPolicyPageContent from "@/components/cookies-policy-page-content";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Zásady používání cookies | Entership",
	description: "Zásady používání cookies společnosti Entership s.r.o.",
};

export default function CookiesPolicyPage() {
	return <CookiesPolicyPageContent />;
}
