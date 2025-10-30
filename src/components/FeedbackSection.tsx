"use client";
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useEffect, useState } from 'react';

type Feedback = {
    id: string;
    name: string;
    rating: number;
    feedback: string;
    isApproved: boolean;
    createdAt: string;
};

export default function FeedbackSection() {
    const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(3);

    // ✅ Dynamically set items per page based on screen width
    useEffect(() => {
        const updateItemsPerPage = () => {
            if (window.innerWidth < 640) {
                setItemsPerPage(1); // small screens
            } else if (window.innerWidth < 1024) {
                setItemsPerPage(2); // medium screens (optional)
            } else {
                setItemsPerPage(3); // large screens
            }
        };

        updateItemsPerPage();
        window.addEventListener("resize", updateItemsPerPage);
        return () => window.removeEventListener("resize", updateItemsPerPage);
    }, []);

    useEffect(() => {
        const fetchFeedbacks = async () => {
            try {
                const response = await fetch('/api/feedback');
                if (!response.ok) throw new Error('Failed to fetch feedbacks');
                const data = await response.json();
                setFeedbacks(data.feedbacks);
            } catch (error) {
                console.error('Error fetching feedbacks:', error);
            }
        };

        fetchFeedbacks();
    }, []);

    if (feedbacks.length === 0) return null;

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + itemsPerPage >= feedbacks.length ? 0 : prevIndex + itemsPerPage
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex - itemsPerPage < 0
                ? Math.floor((feedbacks.length - 1) / itemsPerPage) * itemsPerPage
                : prevIndex - itemsPerPage
        );
    };

    const visibleFeedbacks = feedbacks.slice(currentIndex, currentIndex + itemsPerPage);

    return (
        <section className="py-20 px-4 sm:px-6 bg-[#FAFAF8]">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <p className="text-sunrise-gold text-xs sm:text-sm uppercase tracking-widest mb-3">
                        Testimonials
                    </p>
                    <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-4 leading-tight">
                        Voices from the Field
                    </h2>
                    <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
                        Real stories from farmers and agripreneurs who&apos;ve transformed their practices with Prabha
                    </p>
                </motion.div>

                <div className="relative">
                    <div className="overflow-hidden">
                        <div className="flex gap-6 justify-center">
                            <AnimatePresence mode="wait">
                                {visibleFeedbacks.map((feedback, index) => (
                                    <motion.div
                                        key={feedback.id}
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -50 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className={`w-full ${
                                            itemsPerPage === 3
                                                ? 'md:w-1/3'
                                                : itemsPerPage === 2
                                                ? 'sm:w-1/2'
                                                : 'w-full'
                                        } bg-white rounded-2xl overflow-hidden border border-earth-green/10`}
                                    >
                                        <div className="p-6 sm:p-8">
                                            <div className="mb-6">
                                                <Quote className="w-10 h-10 text-earth-green/20" />
                                            </div>
                                            <div className="flex items-center gap-1 mb-4">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className={`w-5 h-5 ${
                                                            i < feedback.rating
                                                                ? 'text-sunrise-gold fill-sunrise-gold'
                                                                : 'text-slate-200'
                                                        }`}
                                                    />
                                                ))}
                                            </div>
                                            <p className="text-slate-600 mb-6 line-clamp-4">
                                                {feedback.feedback}
                                            </p>
                                            <div className="pt-6 border-t border-slate-100">
                                                <p className="font-playfair font-semibold text-dark">
                                                    {feedback.name}
                                                </p>
                                                <p className="text-sm text-slate-500">
                                                    {new Date(feedback.createdAt).toLocaleDateString()}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>

                    {feedbacks.length > itemsPerPage && (
                        <div className="flex justify-center gap-4 mt-8">
                            <button
                                onClick={prevSlide}
                                className="p-2 rounded-full bg-earth-green text-white hover:bg-earth-green/90 transition-colors"
                                aria-label="Previous testimonials"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="p-2 rounded-full bg-earth-green text-white hover:bg-earth-green/90 transition-colors"
                                aria-label="Next testimonials"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
