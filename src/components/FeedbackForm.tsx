"use client";
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { useState } from 'react';

type FeedbackData = {
    name: string;
    email: string;
    rating: number;
    feedback: string;
    isPublic: boolean;
};

export default function FeedbackForm() {
    const { register, handleSubmit, formState, reset } = useForm<FeedbackData>({ mode: 'onTouched' });
    const { errors, isSubmitting } = formState;
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState<string>('');

    async function onSubmit(data: FeedbackData) {
        try {
            setSubmitStatus('idle');
            setErrorMessage('');
            
            const response = await fetch('/api/feedback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || 'Failed to send feedback');
            }

            setSubmitStatus('success');
            reset();
        } catch (error) {
            console.error('Error:', error);
            setSubmitStatus('error');
            setErrorMessage(error instanceof Error ? error.message : 'Failed to send feedback');
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                </label>
                <input
                    {...register('name', { required: 'Name is required' })}
                    placeholder="John Doe"
                    className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-red-300 bg-red-50' : 'border-slate-200'} focus:border-earth-green focus:ring-2 focus:ring-earth-green/20 outline-none transition-all`}
                />
                {errors.name && (
                    <p className="text-xs text-red-600 mt-1">{errors.name.message}</p>
                )}
            </div>

            <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                </label>
                <input
                    {...register('email', {
                        required: 'Email is required',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Please enter a valid email address'
                        }
                    })}
                    type="email"
                    placeholder="john@example.com"
                    className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-300 bg-red-50' : 'border-slate-200'} focus:border-earth-green focus:ring-2 focus:ring-earth-green/20 outline-none transition-all`}
                />
                {errors.email && (
                    <p className="text-xs text-red-600 mt-1">{errors.email.message}</p>
                )}
            </div>

            <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                    Rating <span className="text-red-500">*</span>
                </label>
                <select
                    {...register('rating', { required: 'Rating is required' })}
                    className={`w-full px-4 py-3 rounded-xl border ${errors.rating ? 'border-red-300 bg-red-50' : 'border-slate-200'} focus:border-earth-green focus:ring-2 focus:ring-earth-green/20 outline-none transition-all`}
                >
                    <option value="">Select a rating</option>
                    {[1, 2, 3, 4, 5].map((num) => (
                        <option key={num} value={num}>
                            {num} Star{num !== 1 ? 's' : ''}
                        </option>
                    ))}
                </select>
                {errors.rating && (
                    <p className="text-xs text-red-600 mt-1">{errors.rating.message}</p>
                )}
            </div>

            <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                    Your Feedback <span className="text-red-500">*</span>
                </label>
                <textarea
                    {...register('feedback', {
                        required: 'Feedback is required',
                        minLength: { value: 10, message: 'Feedback must be at least 10 characters' }
                    })}
                    rows={4}
                    placeholder="Please share your experience with us..."
                    className={`w-full px-4 py-3 rounded-xl border ${errors.feedback ? 'border-red-300 bg-red-50' : 'border-slate-200'} focus:border-earth-green focus:ring-2 focus:ring-earth-green/20 outline-none transition-all`}
                />
                {errors.feedback && (
                    <p className="text-xs text-red-600 mt-1">{errors.feedback.message}</p>
                )}
            </div>

            <div className="flex items-center gap-2">
                <input
                    type="checkbox"
                    {...register('isPublic')}
                    id="isPublic"
                    className="rounded border-slate-300 text-earth-green focus:ring-earth-green"
                />
                <label htmlFor="isPublic" className="text-sm text-slate-600">
                    I agree to make my feedback public on the website
                </label>
            </div>

            <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-earth-green text-white px-8 py-3 rounded-xl hover:bg-earth-green/90 focus:outline-none focus:ring-2 focus:ring-earth-green/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
            >
                {isSubmitting ? (
                    'Submitting...'
                ) : (
                    <>
                        Submit Feedback
                        <Send className="w-4 h-4" />
                    </>
                )}
            </motion.button>

            {submitStatus === 'success' && (
                <p className="text-sm text-green-600 mt-4">Thank you for your feedback!</p>
            )}

            {submitStatus === 'error' && (
                <p className="text-sm text-red-600 mt-4">{errorMessage}</p>
            )}
        </form>
    );
}
