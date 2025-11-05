// "use client";

// import { useRef } from "react";
// import useEmblaCarousel from "embla-carousel-react";
// import Autoplay from "embla-carousel-autoplay";
// import ServiceCard from "./ServiceCard";

// interface Division {
// 	title: string;
// 	tagline: string;
// 	description: string;
// 	icon: React.ReactNode;
// 	image: string;
// 	href: string;
// 	delay?: number;
// }

// export default function ServicesCarousel({
// 	divisions,
// }: {
// 	divisions: Division[];
// }) {
// 	const autoplay = useRef(
// 		Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })
// 	);

// 	const [emblaRef, emblaApi] = useEmblaCarousel(
// 		{
// 			loop: true,
// 			align: "start",
// 			skipSnaps: false,
// 			containScroll: "trimSnaps",
// 		},
// 		[autoplay.current]
// 	);

// 	return (
// 		<div className="relative px-4 sm:px-6">
// 			{/* Carousel Container */}
// 			<div className="overflow-visible -mx-4 sm:-mx-6" ref={emblaRef}>
// 				<div className="flex gap-4 sm:gap-6 px-4 sm:px-6">
// 					{divisions.map((division, idx) => (
// 						<div
// 							key={division.title}
// 							className="flex-[0_0_85%] min-w-0 sm:flex-[0_0_45%] lg:flex-[0_0_30%]"
// 						>
// 							<ServiceCard {...division} delay={idx * 0.1} />
// 						</div>
// 					))}
// 				</div>
// 			</div>

// 			{/* Navigation Buttons */}
// 			<button
// 				onClick={() => emblaApi?.scrollPrev()}
// 				className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-md rounded-full p-2 transition z-10"
// 			>
// 				<svg
// 					className="w-5 h-5 text-dark"
// 					fill="none"
// 					stroke="currentColor"
// 					strokeWidth="2"
// 					viewBox="0 0 24 24"
// 				>
// 					<path d="M15 19l-7-7 7-7" />
// 				</svg>
// 			</button>

// 			<button
// 				onClick={() => emblaApi?.scrollNext()}
// 				className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-md rounded-full p-2 transition z-10"
// 			>
// 				<svg
// 					className="w-5 h-5 text-dark"
// 					fill="none"
// 					stroke="currentColor"
// 					strokeWidth="2"
// 					viewBox="0 0 24 24"
// 				>
// 					<path d="M9 5l7 7-7 7" />
// 				</svg>
// 			</button>
// 		</div>
// 	);
// }



"use client";

import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface Division {
  title: string;
  tagline: string;
  description: string;
  image: string;
  href: string;
  gradient: string;
  color: string;
}

interface PillarStackedCardsProps {
  divisions: Division[];
}

export default function PillarStackedCards({ divisions }: PillarStackedCardsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % divisions.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + divisions.length) % divisions.length);
  };

  const handleDotClick = (index: number) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  return (
    <div className="py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-sunrise-gold  text-xs sm:text-sm uppercase tracking-widest font-semibold">Our Ecosystem</p>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-dark leading-tight">
            Five Pillars of Innovation
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto px-4 sm:px-0">
            Discover our integrated approach to sustainable agriculture
          </p>
        </div>

        {/* Desktop: Stacked Cards */}
        <div className="hidden lg:block relative h-[600px] perspective-1000">
          <div className="relative w-full h-full flex items-center justify-center">
            {divisions.map((division, index) => {
              const offset = index - activeIndex;
              const absOffset = Math.abs(offset);
              const isActive = index === activeIndex;
              
              // Calculate transforms
              const translateX = offset * 20;
              const translateY = absOffset * 15;
              const scale = 1 - absOffset * 0.08;
              const opacity = 1 - absOffset * 0.3;
              const zIndex = divisions.length - absOffset;
              const rotateY = offset * -5;

              return (
                <div
                  key={division.title}
                  className="absolute w-full max-w-4xl transition-all duration-700 ease-out cursor-pointer"
                  style={{
                    transform: `translateX(${translateX}px) translateY(${translateY}px) scale(${scale}) rotateY(${rotateY}deg)`,
                    opacity: absOffset > 2 ? 0 : opacity,
                    zIndex,
                    pointerEvents: isActive ? 'auto' : 'none',
                  }}
                  onClick={isActive ? undefined : () => setActiveIndex(index)}
                >
                  <div className={`bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 transition-all duration-500 ${
                    isActive ? 'shadow-earth-green/20' : ''
                  }`}>
                    <div className="grid md:grid-cols-2 gap-0">
                      {/* Image Side */}
                      <div className="relative h-[600px] overflow-hidden">
                        <div 
                          className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
                          style={{
                            backgroundImage: `url(${division.image})`,
                            transform: isActive ? 'scale(1)' : 'scale(1.1)',
                          }}
                        />
                        <div className={`absolute inset-0 bg-gradient-to-br ${division.gradient} opacity-40`} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      </div>

                      {/* Content Side */}
                      <div className="p-12 flex flex-col justify-center">
                        <div className="space-y-6">
                          <div className="space-y-3">
                            <h3 className="font-playfair text-4xl font-bold text-dark">
                              {division.title}
                            </h3>
                            <p className="text-sunrise-gold text-lg font-semibold italic">
                              {division.tagline}
                            </p>
                          </div>
                          
                          <p className="text-slate-600 text-lg leading-relaxed">
                            {division.description}
                          </p>

                          {isActive && (
                            <Link 
                              href={division.href}
                              className="mt-6 inline-flex items-center gap-2 px-8 py-4 bg-earth-green text-white rounded-full font-semibold hover:bg-dark transition-all duration-300 shadow-lg hover:shadow-xl group"
                            >
                              Learn More
                              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile: Single Card with Swipe */}
        <div className="lg:hidden">
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {divisions.map((division) => {
                  return (
                    <div key={division.title} className="w-full flex-shrink-0 px-2">
                      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
                        {/* Image */}
                        <div className="relative h-64 overflow-hidden">
                          <div 
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${division.image})` }}
                          />
                          <div className={`absolute inset-0 bg-gradient-to-br ${division.gradient} opacity-40`} />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                        </div>

                        {/* Content */}
                        <div className="p-8 space-y-4">
                          <div className="space-y-2">
                            <h3 className="font-playfair text-2xl font-bold text-dark">
                              {division.title}
                            </h3>
                            <p className="text-sunrise-gold text-base font-semibold italic">
                              {division.tagline}
                            </p>
                          </div>
                          
                          <p className="text-slate-600 leading-relaxed">
                            {division.description}
                          </p>

                          <Link 
                            href={division.href}
                            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-earth-green text-white rounded-full font-semibold hover:bg-dark transition-all duration-300 shadow-lg"
                          >
                            Learn More
                            <ChevronRight className="w-5 h-5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="mt-12 flex items-center justify-center gap-8">
          {/* Prev Button */}
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full bg-white border-2 border-slate-300 hover:border-earth-green hover:bg-green-50 transition-all duration-300 flex items-center justify-center group shadow-md hover:shadow-lg"
            aria-label="Previous"
          >
            <ChevronRight className="w-6 h-6 text-slate-600 group-hover:text-earth-green rotate-180 transition-colors" />
          </button>

          {/* Dots */}
          <div className="flex gap-3">
            {divisions.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className="relative group"
                aria-label={`Go to slide ${index + 1}`}
              >
                <div className={`h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-earth-green w-12' 
                    : 'bg-slate-300 hover:bg-slate-400 w-3'
                }`} />
              </button>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full bg-white border-2 border-slate-300 hover:border-earth-green hover:bg-green-50 transition-all duration-300 flex items-center justify-center group shadow-md hover:shadow-lg"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6 text-slate-600 group-hover:text-earth-green transition-colors" />
          </button>
        </div>

        {/* Card Counter */}
        <div className="text-center mt-8">
          <p className="text-slate-500 font-medium">
            <span className="text-2xl font-bold text-earth-green">{activeIndex + 1}</span>
            <span className="mx-2">/</span>
            <span className="text-slate-400">{divisions.length}</span>
          </p>
        </div>
      </div>
    </div>
  );
}