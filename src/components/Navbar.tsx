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
    { href: "/blog", label: "Blog" },
  ];

  const textClasses =
    "relative text-base lg:text-lg font-medium transition-all";

  return (
    <>
      {/* NAVBAR */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 inset-x-0 z-50 h-[78px] w-full overflow-x-hidden transition-all duration-500 ${
          scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : ""
        }`}
      >
        <div className="mx-auto max-w-7xl h-full px-4 sm:px-6 overflow-hidden">
          <div className="flex h-full w-full items-center justify-between min-w-0">
            {/* LOGO — LEFT (ALL SCREENS) */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src={scrolled ? "/logo/logo_dark.png" : "/logo/logo_light.png"}
                alt="Logo"
                width={180}
                height={60}
                className="h-auto w-[120px] sm:w-[140px] lg:w-[160px] xl:w-[180px]"
              />
            </Link>

            {/* NAV LINKS — RIGHT (DESKTOP ONLY) */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-10">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${textClasses} ${
                    scrolled ? "text-dark" : "text-white"
                  } group`}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-earth-green transition-all group-hover:left-0 group-hover:w-full" />
                </Link>
              ))}

              <Link
                href="/contact"
                className={`rounded-full px-4 py-2 text-sm font-medium lg:px-5 lg:text-base ${
                  scrolled
                    ? "bg-earth-green text-white hover:bg-sunrise-gold hover:text-dark"
                    : "border border-white/30 bg-white/20 text-white hover:bg-white hover:text-dark"
                }`}
              >
                Get in Touch
              </Link>
            </nav>

            {/* MOBILE MENU BUTTON — RIGHT */}
            <button
              className={`lg:hidden shrink-0 p-2 z-[60] ${
                scrolled ? "text-dark" : "text-white"
              }`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <svg width="26" height="26" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg width="26" height="26" stroke="currentColor" strokeWidth="2">
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* MOBILE BACKDROP */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* MOBILE SLIDE PANEL */}
      <motion.div
        initial={{ x: "120%" }}
        animate={{ x: menuOpen ? 0 : "120%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-0 right-0 z-50 h-full w-64 max-w-[85vw] overflow-x-hidden bg-white p-8 lg:hidden"
      >
        {navLinks.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block py-3 text-lg font-medium text-dark"
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </Link>
        ))}

        <Link
          href="/contact"
          className="mt-5 block rounded-full bg-earth-green py-2.5 text-center text-white"
          onClick={() => setMenuOpen(false)}
        >
          Get in Touch
        </Link>
      </motion.div>
    </>
  );
}
