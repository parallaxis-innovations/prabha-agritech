"use client";

import Image from 'next/image';
import { useEffect, useState } from 'react';

const partners = [
    { name: 'Adani', logo: '/partners/adani.png' },
    { name: 'Cadila', logo: '/partners/cadila.png' },
    { name: 'Zydex', logo: '/partners/zydex.png' },
    { name: 'Kitchen Express', logo: '/partners/kitchen-express.png' },
    { name: 'Gobbles', logo: '/partners/gobbles.png' },
    { name: 'BIS', logo: '/partners/bis.png' },
    { name: 'Ananta', logo: '/partners/ananta.png' },
    { name: 'Koyo', logo: '/partners/koyo.png' },
    { name: 'Rise', logo: '/partners/rise.png' },
    { name: 'Eeki Foods', logo: '/partners/eeki-foods.png' },
];

const collaborationTypes = [
    "NGOs and CSR foundations",
    "Landowners & institutions",
    "Farmers & agri-startups",
    "Research and policy organizations"
];

export default function Partners() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return null;

    return (
        <section className="py-16 sm:py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Trusted by the world&apos;s leading companies
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-600 mb-8">
                        We collaborate with:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
                        {collaborationTypes.map((type, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <svg
                                    className="w-5 h-5 text-emerald-500 flex-shrink-0"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="text-gray-700">{type}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Partners Logo Marquee */}
                <div className="relative">
                    <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10" />
                    <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10" />
                    <div className="flex gap-8 animate-marquee whitespace-nowrap py-8">
                        {[...partners, ...partners].map((partner, idx) => (
                            <div
                                key={`${partner.name}-${idx}`}
                                className="flex items-center justify-center w-32 h-20 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                            >
                                <Image
                                    src={partner.logo}
                                    alt={partner.name}
                                    width={100}
                                    height={60}
                                    className="object-contain max-w-[80%] max-h-[80%] grayscale hover:grayscale-0 transition-all"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-center mt-12">
                    <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                        Together, we can build India&apos;s most resilient and sustainable farming ecosystem.
                    </p>
                </div>
            </div>
        </section>
    );
}
