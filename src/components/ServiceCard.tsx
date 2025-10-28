"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";

interface ServiceCardProps {
	title: string;
	tagline: string;
	description: string;
	icon: ReactNode;
	image: string;
	href: string;
	delay?: number;
}

export default function ServiceCard({
	title,
	tagline,
	description,
	icon,
	image,
	href,
	delay = 0,
}: ServiceCardProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-100px" }}
			transition={{ duration: 0.6, delay, ease: "easeOut" }}
			className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-500 h-full"
		>
			<Link href={href} className="block h-full">
				{/* Image Background */}
				<div className="relative h-56 sm:h-64 overflow-hidden">
					<div
						className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
						style={{
							backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url('${image}')`,
						}}
					/>

					{/* Icon Overlay */}
					<div className="absolute top-4 sm:top-6 left-4 sm:left-6 w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full text-white transition-all duration-300 group-hover:bg-sunrise-gold group-hover:text-dark">
                        {icon}
                    </div>
				</div>

				{/* Content */}
				<div className="p-4 sm:p-6">
					<h3 className="font-playfair text-xl sm:text-2xl font-bold text-dark mb-2 group-hover:text-earth-green transition-colors line-clamp-2">
						{title}
					</h3>
					<p className="text-sunrise-gold text-sm font-medium mb-2 sm:mb-3 italic line-clamp-1">
						{tagline}
					</p>
					<p className="text-slate-600 text-sm leading-relaxed line-clamp-3 sm:line-clamp-2">
						{description}
					</p>

					{/* Arrow */}
					<div className="mt-3 sm:mt-4 flex items-center justify-start text-earth-green font-medium text-sm group-hover:gap-2 transition-all">
						<span className="group-hover:underline">Learn More</span>
						<svg
							className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1.5"
							fill="none"
							stroke="currentColor"
							strokeWidth="2.5"
							viewBox="0 0 24 24"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path d="M5 12h14m0 0l-6-6m6 6l-6 6" />
						</svg>
					</div>
				</div>
			</Link>
		</motion.div>
	);
}
