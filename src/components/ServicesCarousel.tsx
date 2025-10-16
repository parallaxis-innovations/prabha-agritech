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
			<div className="overflow-visible -mx-4 sm:-mx-6" ref={emblaRef}>
				<div className="flex gap-4 sm:gap-6 px-4 sm:px-6">
					{divisions.map((division, idx) => (
						<div
							key={division.title}
							className="flex-[0_0_85%] min-w-0 sm:flex-[0_0_45%] lg:flex-[0_0_30%]"
						>
							<ServiceCard {...division} delay={idx * 0.1} />
						</div>
					))}
				</div>
			</div>

			{/* Navigation Buttons */}
			<button
				onClick={() => emblaApi?.scrollPrev()}
				className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-md rounded-full p-2 transition z-10"
			>
				<svg
					className="w-5 h-5 text-dark"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					viewBox="0 0 24 24"
				>
					<path d="M15 19l-7-7 7-7" />
				</svg>
			</button>

			<button
				onClick={() => emblaApi?.scrollNext()}
				className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-md rounded-full p-2 transition z-10"
			>
				<svg
					className="w-5 h-5 text-dark"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					viewBox="0 0 24 24"
				>
					<path d="M9 5l7 7-7 7" />
				</svg>
			</button>
		</div>
	);
}