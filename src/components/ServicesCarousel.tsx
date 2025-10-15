"use client";

import { useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import ServiceCard from "./ServiceCard";

interface Division {
	title: string;
	tagline: string;
	description: string;
	icon: React.ReactNode;
	image: string;
	href: string;
	delay?: number;
}

export default function ServicesCarousel({
	divisions,
}: {
	divisions: Division[];
}) {
	const autoplay = useRef(
		Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })
	);

	const [emblaRef, emblaApi] = useEmblaCarousel(
		{
			loop: true,
			align: "start",
			skipSnaps: false,
			containScroll: "trimSnaps",
		},
		[autoplay.current]
	);

	return (
		<div className="relative px-4 sm:px-6">
			{/* Carousel Container */}
			<div className="overflow-hidden -mx-4 sm:-mx-6" ref={emblaRef}>
				<div className="flex gap-3 sm:gap-6 px-4 sm:px-6 py-4">
					{divisions.map((division, idx) => (
						<div
							key={division.title}
							className="flex-[0_0_90%] min-w-0 sm:flex-[0_0_45%] lg:flex-[0_0_30%] transition-transform duration-300"
						>
							<ServiceCard {...division} delay={idx * 0.1} />
						</div>
					))}
				</div>
			</div>

			{/* Navigation Buttons */}
			<button
				onClick={() => emblaApi?.scrollPrev()}
				className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-r-lg sm:rounded-full p-3 sm:p-4 transition-all duration-300 z-10 group"
				aria-label="Previous slide"
			>
				<svg
					className="w-5 h-5 text-earth-green group-hover:scale-110 transition-transform duration-300"
					fill="none"
					stroke="currentColor"
					strokeWidth="2.5"
					viewBox="0 0 24 24"
				>
					<path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
				</svg>
			</button>

			<button
				onClick={() => emblaApi?.scrollNext()}
				className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-l-lg sm:rounded-full p-3 sm:p-4 transition-all duration-300 z-10 group"
				aria-label="Next slide"
			>
				<svg
					className="w-5 h-5 text-earth-green group-hover:scale-110 transition-transform duration-300"
					fill="none"
					stroke="currentColor"
					strokeWidth="2.5"
					viewBox="0 0 24 24"
				>
					<path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
				</svg>
			</button>
		</div>
	);
}