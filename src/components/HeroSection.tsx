"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HeroSection() {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-dark">
            {/* Background Video/Image Placeholder */}
            <div className="absolute inset-0 z-0">
                <div
                    className="w-full h-full bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.25)), url('https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=1920&q=80')`,
                    }}
                />
                {/* Optional: Replace with <video autoPlay muted loop playsInline> for video background */}
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 h-full flex items-center justify-center">
                <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                    >
                        {/* Subtitle */}
                        <motion.p
                            className="text-sunrise-gold text-sm md:text-base uppercase tracking-[0.3em] font-medium mb-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                        >
                            Rising Sun of Agriculture
                        </motion.p>

                        {/* Main Headline */}
                        <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] mb-8">
                            Empowering Farmers.
                            <br />
                            <span className="text-cream">Inspiring Futures.</span>
                        </h1>

                        {/* Description */}
                        <motion.p
                            className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed mb-12"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            Blending modern technology with traditional Indian wisdom to create
                            sustainable, profitable farming systems.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.8 }}
                        >
                            <Link
                                href="/services"
                                className="px-8 py-4 bg-earth-green text-white rounded-full font-medium hover:bg-sunrise-gold hover:text-dark transition-all duration-300 hover:scale-105 shadow-lg"
                            >
                                Explore Our Work
                            </Link>
                            <Link
                                href="/contact"
                                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/30 rounded-full font-medium hover:bg-white hover:text-dark transition-all duration-300 hover:scale-105"
                            >
                                Join the Movement
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
            >
                <div className="flex flex-col items-center gap-2">
                    <span className="text-white/60 text-xs uppercase tracking-wider">Scroll</span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-white/60">
                        <path d="M10 4v12m0 0l-4-4m4 4l4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </div>
            </motion.div>
        </section>
    );
}