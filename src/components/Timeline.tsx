"use client";
import { motion } from 'framer-motion';

type TimelineItem = {
    year: string;
    title: string;
    description: string;
};

export default function Timeline({ items }: { items: TimelineItem[] }) {
    return (
        <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-slate-200" />

            <div className="space-y-12">
                {items.map((item, idx) => (
                    <motion.div
                        key={item.year}
                        initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className={`relative flex ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
                    >
                        {/* Content */}
                        <div className="flex-1 pl-8 md:pl-0">
                            <div className={`bg-white p-6 rounded-lg shadow-sm border ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                <div className="text-sm font-bold text-primary mb-2">{item.year}</div>
                                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                <p className="text-sm text-slate-600">{item.description}</p>
                            </div>
                        </div>

                        {/* Center dot */}
                        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow" />

                        {/* Spacer for alternating layout */}
                        <div className="hidden md:block flex-1" />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
