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

  const textClasses = "relative text-base lg:text-lg font-medium transition-all";

  return (
    <>
      {/* NAVBAR WRAPPER (Fixed Height – Prevents Hiding Issues) */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 h-[78px] ${
          scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full">
          
          {/* FLEX CENTER LAYOUT */}
          <div className="flex items-center justify-between relative w-full h-full">
            
            {/* LEFT MENU (Desktop Only) */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-10">
              {navLinks.slice(0, 2).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${textClasses} ${
                    scrolled ? "text-dark" : "text-white"
                  } group`}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-earth-green transition-all group-hover:w-full group-hover:left-0"></span>
                </Link>
              ))}
            </nav>

            {/* LOGO (Perfectly Centered) */}
            <div className="flex justify-center flex-1 lg:flex-none">
              <Link href="/" className="flex-shrink-0">
                <Image
                  src={scrolled ? "/logo/logo_dark.png" : "/logo/logo_light.png"}
                  alt="Logo"
                  width={180}
                  height={60}
                  className="
                    h-auto
                    w-[110px]
                    sm:w-[130px]
                    lg:w-[150px]
                    xl:w-[190px]
                    transition-all
                  "
                />
              </Link>
            </div>

            {/* RIGHT MENU (Desktop Only) */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-10">
              {navLinks.slice(2).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${textClasses} ${
                    scrolled ? "text-dark" : "text-white"
                  } group`}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-earth-green transition-all group-hover:w-full group-hover:left-0"></span>
                </Link>
              ))}

              <Link
                href="/contact"
                className={`px-4 lg:px-5 py-2 rounded-full text-sm lg:text-base font-medium ${
                  scrolled
                    ? "bg-earth-green text-white hover:bg-sunrise-gold hover:text-dark"
                    : "bg-white/20 text-white border border-white/30 hover:bg-white hover:text-dark"
                }`}
              >
                Get in Touch
              </Link>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              className={`lg:hidden p-2 z-[60] ${
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
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* MOBILE SLIDE PANEL */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: menuOpen ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-0 right-0 h-full w-64 bg-white p-8 z-50 lg:hidden"
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
          className="mt-5 block text-center bg-earth-green text-white py-2.5 rounded-full"
          onClick={() => setMenuOpen(false)}
        >
          Get in Touch
        </Link>
      </motion.div>
    </>
  );
}
