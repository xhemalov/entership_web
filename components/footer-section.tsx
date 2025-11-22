"use client";

import { Facebook, Linkedin, MessageCircle } from "lucide-react";

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
									className="w-10 h-10 bg-yellow-accent rounded-lg flex items-center justify-center text-[#701A75] hover:bg-yellow-300 hover:shadow-lg hover:scale-110 transition-all duration-300 text-sm font-bold shadow-md"
								>
									<Facebook className="w-5 h-5" />
								</a>
								<a
									href="https://www.linkedin.com/company/nauc-me-it"
									target="_blank"
									rel="noopener noreferrer"
									className="w-10 h-10 bg-yellow-accent rounded-lg flex items-center justify-center text-[#701A75] hover:bg-yellow-300 hover:shadow-lg hover:scale-110 transition-all duration-300 text-sm font-bold shadow-md"
								>
									<Linkedin className="w-5 h-5" />
								</a>
								<a
									href="https://naucme.it/discord"
									target="_blank"
									rel="noopener noreferrer"
									className="w-10 h-10 bg-yellow-accent rounded-lg flex items-center justify-center text-[#701A75] hover:bg-yellow-300 hover:shadow-lg hover:scale-110 transition-all duration-300 text-sm font-bold shadow-md"
								>
									<MessageCircle className="w-5 h-5" />
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="border-t border-purple-light/20 pt-8 text-center">
					<p className="font-inter text-sm">
						© 2025 Entership. Všechna práva vyhrazena.
					</p>
				</div>
			</div>
		</footer>
	);
}
