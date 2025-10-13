import Image from 'next/image';
import { getServiceById } from '@/data/services';
import { notFound } from 'next/navigation';

export default async function ServiceDetailPage({ params }: { params: { id: string } }) {
    const {id} = await params;
    const service = getServiceById(id);

    if (!service) {
        notFound();
    }

    return (
        <article className="min-h-screen">
            {/* Hero Section */}
            <div className="relative h-[60vh] w-full">
                <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 flex items-center justify-center text-white">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold">{service.title}</h1>
                        <p className="mt-4 text-xl md:text-2xl">{service.tagline}</p>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-4xl mx-auto px-4 py-16">
                <div className="prose prose-lg max-w-none">
                    <p className="text-xl">{service.fullDescription}</p>

                    <h2 className="text-2xl font-bold mt-8">Key Benefits</h2>
                    <ul className="mt-4">
                        {service.benefits.map((benefit) => (
                            <li key={benefit}>{benefit}</li>
                        ))}
                    </ul>

                    <h2 className="text-2xl font-bold mt-8">Specifications</h2>
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                        {Object.entries(service.specifications).map(([key, value]) => (
                            <div key={key} className="border p-4 rounded-lg">
                                <h3 className="font-semibold">{key}</h3>
                                <p>{value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </article>
    );
}
