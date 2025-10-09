"use client";
import { useForm } from 'react-hook-form';

type FormData = {
    name: string;
    phone: string;
    email: string;
    inquiry: string;
    message: string;
};

export default function ContactForm() {
    const { register, handleSubmit, formState } = useForm<FormData>({ mode: 'onTouched' });
    const { errors, isSubmitting, isSubmitSuccessful } = formState;

    async function onSubmit(data: FormData) {
        // Mock submit
        await new Promise((r) => setTimeout(r, 700));
        console.log('Contact submit', data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <label className="text-sm font-medium">Name</label>
                <input {...register('name', { required: true })} className="mt-1 block w-full rounded border px-3 py-2" />
                {errors.name && <p className="text-xs text-red-600">Name is required</p>}
            </div>

            <div>
                <label className="text-sm font-medium">Phone</label>
                <input {...register('phone', { required: true })} className="mt-1 block w-full rounded border px-3 py-2" />
                {errors.phone && <p className="text-xs text-red-600">Phone is required</p>}
            </div>

            <div className="md:col-span-2">
                <label className="text-sm font-medium">Email</label>
                <input {...register('email', { required: true })} className="mt-1 block w-full rounded border px-3 py-2" />
                {errors.email && <p className="text-xs text-red-600">Email is required</p>}
            </div>

            <div>
                <label className="text-sm font-medium">Inquiry Type</label>
                <select {...register('inquiry')} className="mt-1 block w-full rounded border px-3 py-2">
                    <option>Farmer</option>
                    <option>Entrepreneur</option>
                    <option>Institution</option>
                    <option>Investor</option>
                </select>
            </div>

            <div className="md:col-span-2">
                <label className="text-sm font-medium">Message</label>
                <textarea {...register('message')} className="mt-1 block w-full rounded border px-3 py-2 h-28" />
            </div>

            <div className="md:col-span-2 flex items-center justify-end">
                <button type="submit" disabled={isSubmitting} className="px-5 py-2 bg-primary text-white rounded">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
            </div>

            {isSubmitSuccessful && <p className="text-sm text-green-600 md:col-span-2">Thank you — we will get back to you soon.</p>}
        </form>
    );
}
