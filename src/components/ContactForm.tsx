"use client";
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { useState } from 'react';

type FormData = {
    name: string;
    phone: string;
    email: string;
    inquiry: string;
    message: string;
};

export default function ContactForm() {
    const { register, handleSubmit, formState, reset } = useForm<FormData>({ mode: 'onTouched' });
    const { errors, isSubmitting } = formState;
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState<string>('');

    async function onSubmit(data: FormData) {
        try {
            setSubmitStatus('idle');
            setErrorMessage('');
            
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || 'Failed to send message');
            }

            setSubmitStatus('success');
            reset();
        } catch (error) {
            console.error('Error:', error);
            setSubmitStatus('error');
            setErrorMessage(error instanceof Error ? error.message : 'Failed to send message');
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name & Phone */}
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
                    Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                    {...register('phone', {
                        required: 'Phone number is required',
                        pattern: {
                            value: /^[0-9]{10}$/,
                            message: 'Please enter a valid 10-digit phone number'
                        }
                    })}
                    type='tel'
                    placeholder="+91 XXXXX XXXXX"
                    className={`w-full px-4 py-3 rounded-xl border ${errors.phone ? 'border-red-300 bg-red-50' : 'border-slate-200'} focus:border-earth-green focus:ring-2 focus:ring-earth-green/20 outline-none transition-all`}
                />
                {errors.phone && (
                    <p className="text-xs text-red-600 mt-1">{errors.phone.message}</p>
                )}
            </div>


            {/* Email */}
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

            {/* Inquiry Type */}
            <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                    I am a...
                </label>
                <select
                    {...register('inquiry')}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-earth-green focus:ring-2 focus:ring-earth-green/20 outline-none transition-all bg-white"
                >
                    <option value="farmer">Farmer</option>
                    <option value="entrepreneur">Entrepreneur</option>
                    <option value="institution">Institution / NGO</option>
                    <option value="investor">Investor</option>
                    <option value="student">Student / Researcher</option>
                    <option value="other">Other</option>
                </select>
            </div>

            {/* Message */}
            <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                    Your Message
                </label>
                <textarea
                    {...register('message')}
                    placeholder="Tell us about your inquiry or how we can help..."
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-earth-green focus:ring-2 focus:ring-earth-green/20 outline-none transition-all resize-none"
                />
            </div>

            {/* Submit Button */}
            <div className="flex items-center justify-between pt-4">
                {submitStatus === 'success' && (
                    <motion.p
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-sm text-green-600 font-medium"
                    >
                        ✓ Message sent! We&apos;ll get back to you soon.
                    </motion.p>
                )}

                {submitStatus === 'error' && (
                    <motion.p
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-sm text-red-600 font-medium"
                    >
                        ⚠ {errorMessage}
                    </motion.p>
                )}

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="ml-auto px-8 py-3 bg-earth-green text-white rounded-full font-medium hover:bg-sunrise-gold hover:text-dark transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center gap-2"
                >
                    {isSubmitting ? (
                        <>
                            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Sending...
                        </>
                    ) : (
                        <>
                            Send Message
                            <Send className="w-4 h-4" />
                        </>
                    )}
                </button>
            </div>
        </form>
    );
}