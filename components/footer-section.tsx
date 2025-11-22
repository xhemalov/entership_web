"use client";

import { Facebook, Linkedin, Instagram } from "lucide-react";

const DiscordLogo = ({ className }: { className?: string }) => (
	<svg
		className={className}
		viewBox="0 0 24 24"
		fill="currentColor"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.699.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419z" />
	</svg>
);

export default function FooterSection() {
	return (
		<footer className="px-6 py-16 lg:px-12 bg-purple-main border-t border-purple-light/20">
			<div className="max-w-6xl mx-auto">
				<div className="grid md:grid-cols-3 gap-8 mb-12">
					<div>
						<img
							src="https://assets.macaly-user-data.dev/cdn-cgi/image/format=webp,width=2000,height=2000,fit=scale-down,quality=90,anim=true/h78douel905nwuxnwh8o3ggu/fs3w9kis8argxhrbeysyrfjn/bHLqutq0N2XjQ9sEPOwDk/logo-entership-no-background-white.png"
							alt="Entership Logo"
							className="h-12 w-auto mb-6"
						/>
						<p className="font-inter text-sm leading-relaxed">
							Mise pro všechny, kdo chtějí letět rychleji než tech svět.
						</p>
					</div>
					<div>
						<h4 className="text-foreground font-inter font-semibold mb-4 leading-relaxed-xl">
							Rychlé odkazy
						</h4>
						<ul className="space-y-2 font-inter text-sm">
							<li>
								<a
									href="/o-nas"
									className="hover:text-yellow-accent transition-colors"
								>
									O nás
								</a>
							</li>
							<li>
								<a
									href="/#available-dates"
									className="hover:text-yellow-accent transition-colors"
								>
									Kurzy
								</a>
							</li>
							<li>
								<a
									href="/kontakt"
									className="hover:text-yellow-accent transition-colors"
								>
									Kontakt
								</a>
							</li>
							<li>
								<a
									href="/obchodni-podminky"
									className="hover:text-yellow-accent transition-colors"
								>
									Obchodní podmínky
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h4 className="text-foreground font-inter font-semibold mb-4 leading-relaxed-xl">
							Kontakt
						</h4>
						<div className="space-y-2 font-inter text-sm">
							<p>hello@entership.cz</p>
							<div className="flex space-x-4 mt-4">
								<a
									href="https://www.facebook.com/NaucMeIT/"
									target="_blank"
									rel="noopener noreferrer"
									className="w-10 h-10 bg-transparent border border-yellow-accent rounded-lg flex items-center justify-center text-yellow-accent hover:bg-yellow-accent/10 hover:shadow-lg hover:scale-110 transition-all duration-300 text-sm font-bold shadow-md"
								>
									<Facebook className="w-5 h-5" />
								</a>
								<a
									href="https://www.linkedin.com/company/nauc-me-it"
									target="_blank"
									rel="noopener noreferrer"
									className="w-10 h-10 bg-transparent border border-yellow-accent rounded-lg flex items-center justify-center text-yellow-accent hover:bg-yellow-accent/10 hover:shadow-lg hover:scale-110 transition-all duration-300 text-sm font-bold shadow-md"
								>
									<Linkedin className="w-5 h-5" />
								</a>
								<a
									href="https://www.instagram.com/naucmeit/"
									target="_blank"
									rel="noopener noreferrer"
									className="w-10 h-10 bg-transparent border border-yellow-accent rounded-lg flex items-center justify-center text-yellow-accent hover:bg-yellow-accent/10 hover:shadow-lg hover:scale-110 transition-all duration-300 text-sm font-bold shadow-md"
								>
									<Instagram className="w-5 h-5" />
								</a>
								<a
									href="https://naucme.it/discord"
									target="_blank"
									rel="noopener noreferrer"
									className="w-10 h-10 bg-transparent border border-yellow-accent rounded-lg flex items-center justify-center text-yellow-accent hover:bg-yellow-accent/10 hover:shadow-lg hover:scale-110 transition-all duration-300 text-sm font-bold shadow-md"
								>
									<DiscordLogo className="w-5 h-5" />
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="border-t border-purple-light/20 pt-8 text-center">
					<p className="font-inter text-sm">
						© 2025 Entership. Všechna práva vyhrazena.
					</p>
					<p className="font-inter text-sm mt-2 text-cream/60">
						IČO: 23198605
					</p>
				</div>
			</div>
		</footer>
	);
}
