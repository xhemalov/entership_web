"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<nav className="sticky top-0 z-50 bg-purple-main border-b border-purple-light/10">
			<div className="flex items-center justify-between px-6 py-4 lg:px-12">
				<a href="/">
					<img
						src="https://assets.macaly-user-data.dev/cdn-cgi/image/format=webp,width=2000,height=2000,fit=scale-down,quality=90,anim=true/h78douel905nwuxnwh8o3ggu/fs3w9kis8argxhrbeysyrfjn/bHLqutq0N2XjQ9sEPOwDk/logo-entership-no-background-white.png"
						alt="Entership Logo"
						className="h-12 w-auto"
					/>
				</a>

				{/* Desktop Menu */}
				<div className="hidden md:flex items-center space-x-8 text-cream font-inter">
					<a
						href="/#available-dates"
						className="hover:text-yellow-accent transition-colors"
					>
						KURZY
					</a>
					<a
						href="/o-nas"
						className="hover:text-yellow-accent transition-colors"
					>
						O NÁS
					</a>
					<a
						href="/kontakt"
						className="hover:text-yellow-accent transition-colors"
					>
						KONTAKT
					</a>
					<a
						href="/#available-dates"
						className="bg-button-cream text-[#701A75] px-6 py-2 rounded-xl font-medium hover:bg-yellow-100 transition-colors"
					>
						PŘIHLÁSIT SE
					</a>
				</div>

				{/* Mobile Menu Button */}
				<button
					className="md:hidden text-cream hover:text-yellow-accent transition-colors"
					onClick={toggleMenu}
					aria-label="Toggle menu"
				>
					{isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
				</button>
			</div>

			{/* Mobile Menu Overlay */}
			{isMenuOpen && (
				<div className="md:hidden absolute top-full left-0 w-full bg-purple-main border-b border-purple-light/10 py-4 px-6 flex flex-col space-y-4 shadow-xl">
					<a
						href="/#available-dates"
						className="text-cream hover:text-yellow-accent transition-colors text-lg font-inter py-2"
						onClick={() => setIsMenuOpen(false)}
					>
						KURZY
					</a>
					<a
						href="/o-nas"
						className="text-cream hover:text-yellow-accent transition-colors text-lg font-inter py-2"
						onClick={() => setIsMenuOpen(false)}
					>
						O NÁS
					</a>
					<a
						href="/kontakt"
						className="text-cream hover:text-yellow-accent transition-colors text-lg font-inter py-2"
						onClick={() => setIsMenuOpen(false)}
					>
						KONTAKT
					</a>
					<a
						href="/#available-dates"
						className="bg-button-cream text-[#701A75] px-6 py-3 rounded-xl font-medium hover:bg-yellow-100 transition-colors text-center w-full"
						onClick={() => setIsMenuOpen(false)}
					>
						PŘIHLÁSIT SE
					</a>
				</div>
			)}
		</nav>
	);
}
