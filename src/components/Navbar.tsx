// "use client";
// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";

// export default function Navbar() {
// 	const [scrolled, setScrolled] = useState(false);
// 	const [menuOpen, setMenuOpen] = useState(false);

// 	useEffect(() => {
// 		const onScroll = () => setScrolled(window.scrollY > 50);
// 		window.addEventListener("scroll", onScroll);
// 		return () => window.removeEventListener("scroll", onScroll);
// 	}, []);

// 	// Prevent body scroll when menu is open
// 	useEffect(() => {
// 		if (menuOpen) {
// 			document.body.style.overflow = 'hidden';
// 		} else {
// 			document.body.style.overflow = 'unset';
// 		}
// 		return () => {
// 			document.body.style.overflow = 'unset';
// 		};
// 	}, [menuOpen]);

// 	const navLinks = [
// 		{ href: "/about", label: "About" },
// 		{ href: "/services", label: "Services" },
// 		// { href: "/projects", label: "Projects" },
// 		{ href: "/products", label: "Products" },
// 		// { href: "/impact", label: "Impact" },
// 		{ href: "/blog", label: "Blog" },
// 	];

// 	return (
// 		<>
// 			<motion.header
// 				initial={{ y: -20, opacity: 0 }}
// 				animate={{ y: 0, opacity: 1 }}
// 				transition={{ duration: 0.6, ease: "easeOut" }}
// 				className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
//   scrolled || menuOpen
//     ? "bg-white/95 backdrop-blur-md shadow-sm py-2"  // smaller when scrolled
//     : "bg-transparent py-3"  // smaller default height
// }`}
// 			>
// 				<div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
// 					{/* Logo */}
// 					<Link href="/" className="flex items-center">
// 						<Image
// 							src={scrolled || menuOpen ? "/logo/logo_dark.png" : "/logo/logo_light.png"}
// 							alt="PRABHA Agritech Logo"
// 							width={100}
// 							height={30}
// 							className="transition-all duration-300 cursor-pointer"
// 						/>
// 					</Link>

// 					{/* Desktop Nav */}
// 					<nav className="hidden lg:flex items-center gap-8">
// 						{navLinks.map((link) => (
// 							<Link
// 								key={link.href}
// 								href={link.href}
// 								className={`text-lg font-medium tracking-wide transition-colors hover:opacity-70 ${
// 									scrolled ? "text-dark" : "text-white"
// 								}`}
// 							>
// 								{link.label}
// 							</Link>
// 						))}
// 						<Link
// 							href="/contact"
// 							className={`px-6 py-2.5 rounded-full text-lg font-medium transition-all hover:scale-105 ${
// 								scrolled
// 									? "bg-earth-green text-white hover:bg-sunrise-gold hover:text-dark"
// 									: "bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white hover:text-dark"
// 							}`}
// 						>
// 							Get in Touch
// 						</Link>
// 					</nav>

// 					{/* Mobile Menu Button */}
// 					<button
// 						className={`lg:hidden p-2 transition-colors z-[60] ${
// 							scrolled || menuOpen ? "text-dark" : "text-white"
// 						}`}
// 						aria-label="Menu"
// 						onClick={() => setMenuOpen(!menuOpen)}
// 					>
// 						{menuOpen ? (
// 							<svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
// 								<path d="M18 6L6 18M6 6l12 12" />
// 							</svg>
// 						) : (
// 							<svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
// 								<path d="M4 6h16M4 12h16M4 18h16" />
// 							</svg>
// 						)}
// 					</button>
// 				</div>
// 			</motion.header>

// 			{/* Mobile Menu Overlay Background */}
// 			{menuOpen && (
// 				<motion.div
// 					initial={{ opacity: 0 }}
// 					animate={{ opacity: 1 }}
// 					exit={{ opacity: 0 }}
// 					className="fixed inset-0 bg-black/50 z-40 lg:hidden"
// 					onClick={() => setMenuOpen(false)}
// 				/>
// 			)}

// 			{/* Mobile Menu Panel */}
// 			<motion.nav
// 				initial={{ x: "100%" }}
// 				animate={{ x: menuOpen ? 0 : "100%" }}
// 				transition={{ type: "spring", stiffness: 300, damping: 30 }}
// 				className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 p-8 flex flex-col gap-6 lg:hidden"
// 			>
// 				<div className="flex justify-end mb-8">
// 					<button
// 						className="text-2xl text-dark"
// 						aria-label="Close menu"
// 						onClick={() => setMenuOpen(false)}
// 					>
// 						&times;
// 					</button>
// 				</div>
// 				{navLinks.map((link) => (
// 					<Link
// 						key={link.href}
// 						href={link.href}
// 						className="text-base sm:text-lg font-medium text-dark py-2 px-2 rounded hover:bg-earth-green hover:text-white transition-colors"
// 						onClick={() => setMenuOpen(false)}
// 					>
// 						{link.label}
// 					</Link>
// 				))}
// 				<Link
// 					href="/contact"
// 					className="mt-4 px-6 py-2.5 rounded-full text-lg font-medium bg-earth-green text-white hover:bg-sunrise-gold hover:text-dark transition-all text-center"
// 					onClick={() => setMenuOpen(false)}
// 				>
// 					Get in Touch
// 				</Link>
// 			</motion.nav>
// 		</>
// 	);
// }


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

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
	{ href: "/projects", label: "Projects" },
    { href: "/products", label: "Products" },
    { href: "/blog", label: "Blog" },
  ];

  const commonLinkClasses =
    "relative text-lg font-medium tracking-wide transition-colors";

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || menuOpen
            ? "bg-white/95 backdrop-blur-md shadow-sm py-2"
            : "bg-transparent py-3"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between lg:justify-center">
          
          {/* Desktop Layout */}
          <nav className="hidden lg:flex items-center gap-8 absolute left-12">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${commonLinkClasses} group ${
                  scrolled ? "text-dark" : "text-white"
                }`}
              >
                {link.label}
                <span
                  className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-earth-green group-hover:w-full group-hover:left-0 transition-all duration-300"
                />
              </Link>
            ))}
          </nav>

          {/* Logo Center */}
          <Link href="/" className="flex items-center">
            <Image
              src={
                scrolled || menuOpen
                  ? "/logo/logo.png"
                  : "/logo/logo.png"
              }
              alt="PRABHA Agritech Logo"
              width={110}
              height={35}
              className="transition-all duration-300 cursor-pointer"
            />
          </Link>

          {/* Right Nav */}
          <div className="hidden lg:flex items-center gap-8 absolute right-12">
            {navLinks.slice(2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${commonLinkClasses} group ${
                  scrolled ? "text-dark" : "text-white"
                }`}
              >
                {link.label}
                <span
                  className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-earth-green group-hover:w-full group-hover:left-0 transition-all duration-300"
                />
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
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 transition-colors z-[60] ${
              scrolled || menuOpen ? "text-dark" : "text-white"
            }`}
            aria-label="Menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Panel */}
      <motion.nav
        initial={{ x: "100%" }}
        animate={{ x: menuOpen ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 p-8 flex flex-col gap-6 lg:hidden"
      >
        <div className="flex justify-end mb-8">
          <button
            className="text-2xl text-dark"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            &times;
          </button>
        </div>

        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-base sm:text-lg font-medium text-dark py-2 px-2 rounded hover:bg-earth-green hover:text-white transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}

        <Link
          href="/contact"
          className="mt-4 px-6 py-2.5 rounded-full text-lg font-medium bg-earth-green text-white hover:bg-sunrise-gold hover:text-dark transition-all text-center"
          onClick={() => setMenuOpen(false)}
        >
          Get in Touch
        </Link>
      </motion.nav>
    </>
  );
}
