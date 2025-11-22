import PrivacyPolicyPageContent from "@/components/privacy-policy-page-content";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Zásady zpracování osobních údajů | Entership",
	description: "Zásady zpracování osobních údajů společnosti Entership s.r.o.",
};

export default function PrivacyPolicyPage() {
	return <PrivacyPolicyPageContent />;
}
