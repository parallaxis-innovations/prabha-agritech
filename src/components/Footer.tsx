import Link from 'next/link';

export default function Footer() {
    const footerLinks = {
        Company: [
            { label: 'About Us', href: '/about' },
            { label: 'Our Impact', href: '/impact' },
            { label: 'Blog', href: '/blog' },
            { label: 'Contact', href: '/contact' },
        ],
        Services: [
            { label: 'Prabha Shroom', href: '/services#shroom' },
            { label: 'Prabha Hive', href: '/services#hive' },
            { label: 'Prabha Fresh', href: '/services#fresh' },
            { label: 'Prabha Learn', href: '/services#learn' },
            { label: 'Prabha Technovation', href: '/services#technovation' },
        ],
    };

    return (
        <footer className="bg-dark text-white">
            <div className="lg:mx-20 mx-6 px-6 lg:px-12 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <h3 className="font-playfair text-3xl font-bold mb-3">PRABHA</h3>
                        <p className="text-white/70 text-sm leading-relaxed mb-6">
                            Empowering Farmers. Inspiring Futures.
                        </p>
                        <p className="text-white/60 text-sm">
                            📍 Ajmer & Bhilwara, Rajasthan
                        </p>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-sunrise-gold">Company</h4>
                        <ul className="space-y-2">
                            {footerLinks.Company.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-white/70 hover:text-white text-sm transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services Links */}
                    <div>
                        <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-sunrise-gold">Services</h4>
                        <ul className="space-y-2">
                            {footerLinks.Services.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-white/70 hover:text-white text-sm transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter / CTA */}
                    <div>
                        <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-sunrise-gold">Stay Connected</h4>
                        <p className="text-white/70 text-sm mb-4">
                            Join the movement towards sustainable farming.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block px-6 py-2.5 bg-earth-green text-white rounded-full text-sm font-medium hover:bg-sunrise-gold hover:text-dark transition-all duration-300"
                        >
                            Get in Touch
                        </Link>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/50 text-sm">
                        © {new Date().getFullYear()} PRABHA Agritech. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link href="#" className="text-white/50 hover:text-white transition-colors" aria-label="LinkedIn">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                        </Link>
                        <Link href="#" className="text-white/50 hover:text-white transition-colors" aria-label="Instagram">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}