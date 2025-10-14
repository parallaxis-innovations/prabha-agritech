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
            <div className="relative z-10 h-full flex items-center justify-center mt-14 lg:mt-0">
                <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                    >
                        {/* Subtitle */}
                        <motion.p
                            className="text-sunrise-gold text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] sm:tracking-[0.3em] font-medium mb-4 md:mb-6 xl:mb-2 xl:mt-10"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                        >
                            Rising Sun of Agriculture
                        </motion.p>

                        {/* Main Headline */}
                        <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.1] mb-6 sm:mb-8">
                            Empowering Farmers.
                            <br />
                            <span className="text-cream">Inspiring Futures.</span>
                        </h1>

                        {/* Description */}
                        <motion.p
                            className="text-white/90 text-base sm:text-lg md:text-xl max-w-lg sm:max-w-xl md:max-w-2xl mx-auto font-light leading-relaxed mb-8 sm:mb-10 md:mb-12"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            Blending modern technology with traditional Indian wisdom to create
                            sustainable, profitable farming systems.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.8 }}
                        >
                            <Link
                                href="/services"
                                className="px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 bg-earth-green text-white rounded-full font-medium hover:bg-sunrise-gold hover:text-dark transition-all duration-300 hover:scale-105 shadow-lg text-sm sm:text-base"
                            >
                                Explore Our Work
                            </Link>
                            <Link
                                href="/contact"
                                className="px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 bg-white/10 backdrop-blur-sm text-white border border-white/30 rounded-full font-medium hover:bg-white hover:text-dark transition-all duration-300 hover:scale-105 text-sm sm:text-base"
                            >
                                Join the Movement
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
            >
                <div className="flex flex-col items-center gap-1 sm:gap-2">
                    <span className="text-white/60 text-[10px] sm:text-xs uppercase tracking-wider">Scroll</span>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" className="text-white/60 sm:w-5 sm:h-5">
                        <path d="M10 4v12m0 0l-4-4m4 4l4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </div>
            </motion.div>
        </section>
    );
}