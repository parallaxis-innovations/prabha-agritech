"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const navLinks = [
        { href: '/about', label: 'About' },
        { href: '/services', label: 'Services' },
        { href: '/projects', label: 'Projects' },
        { href: '/impact', label: 'Impact' },
        { href: '/blog', label: 'Blog' },
    ];

    return (
        <motion.header
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? 'bg-white/95 backdrop-blur-md shadow-sm py-4'
                    : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className={`text-2xl font-playfair font-bold tracking-tight transition-colors ${scrolled ? 'text-earth-green' : 'text-white'
                        }`}>
                        PRABHA
                    </div>
                    <div className={`text-[10px] uppercase tracking-wider font-inter transition-colors ${scrolled ? 'text-slate-600' : 'text-white/80'
                        }`}>
                        Agritech
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`text-sm font-medium tracking-wide transition-colors hover:opacity-70 ${scrolled ? 'text-dark' : 'text-white'
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all hover:scale-105 ${scrolled
                                ? 'bg-earth-green text-white hover:bg-sunrise-gold hover:text-dark'
                                : 'bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white hover:text-dark'
                            }`}
                    >
                        Get in Touch
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className={`lg:hidden p-2 transition-colors ${scrolled ? 'text-dark' : 'text-white'}`}
                    aria-label="Menu"
                >
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </motion.header>
    );
}