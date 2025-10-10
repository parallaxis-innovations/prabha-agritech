"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Navbar() {

	const [scrolled, setScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 50);
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const navLinks = [
		{ href: "/about", label: "About" },
		{ href: "/services", label: "Services" },
		{ href: "/projects", label: "Projects" },
        { href: "/products", label: "Products" },
		{ href: "/impact", label: "Impact" },
		{ href: "/blog", label: "Blog" },
	];

    

		return (
			<motion.header
				initial={{ y: -20, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
				className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
					scrolled
						? "bg-white/95 backdrop-blur-md shadow-sm py-4"
						: "bg-transparent py-6"
				}`}
			>
				<div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
					{/* Logo */}
						<Image
							src={scrolled ? "/logo/logo_dark.png" : "/logo/logo_light.png"}
						alt="PRABHA Agritech Logo"
						width={140}
						height={40}
						className="transition-all duration-300"
					/>

					{/* Desktop Nav */}
					<nav className="hidden lg:flex items-center gap-8">
						{navLinks.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className={`text-lg font-medium tracking-wide transition-colors hover:opacity-70 ${
									scrolled ? "text-dark" : "text-white"
								}`}
							>
								{link.label}
							</Link>
						))}
						<Link
							href="/contact"
							className={`px-6 py-2.5 rounded-full text-lg font-medium transition-all hover:scale-105 ${
								scrolled
									? "bg-earth-green text-white hover:bg-sunrise-gold hover:text-dark"
									: "bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white hover:text-dark"
							}`}
						>
							Get in Touch
						</Link>
					</nav>

					{/* Mobile Menu Button */}
					<button
						className={`lg:hidden p-2 transition-colors ${
							scrolled ? "text-dark" : "text-white"
						}`}
						aria-label="Menu"
						onClick={() => setMenuOpen(!menuOpen)}
					>
						<svg
							width="24"
							height="24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
						>
							<path d="M4 6h16M4 12h16M4 18h16" />
						</svg>
					</button>
				</div>

				{/* Mobile Menu Overlay */}
				<motion.nav
					initial={{ x: 300 }}
					animate={{ x: menuOpen ? 0 : 300 }}
					transition={{ type: "spring", stiffness: 300, damping: 30 }}
					className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 p-8 flex flex-col gap-6 lg:hidden ${menuOpen ? "" : "pointer-events-none"}`}
					style={{ boxShadow: "-2px 0 8px rgba(0,0,0,0.08)" }}
				>
					<button
						className="self-end mb-8 text-2xl text-dark"
						aria-label="Close menu"
						onClick={() => setMenuOpen(false)}
					>
						&times;
					</button>
					{navLinks.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className="text-lg font-medium text-dark py-2 px-2 rounded hover:bg-earth-green hover:text-white transition-colors"
							onClick={() => setMenuOpen(false)}
						>
							{link.label}
						</Link>
					))}
					<Link
						href="/contact"
						className="mt-4 px-6 py-2.5 rounded-full text-lg font-medium bg-earth-green text-white hover:bg-sunrise-gold hover:text-dark transition-all"
						onClick={() => setMenuOpen(false)}
					>
						Get in Touch
					</Link>
				</motion.nav>
			</motion.header>
		);
}
