import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
    title: 'Services — PRABHA Agritech',
    description:
        'Specialized agricultural solutions including mushroom cultivation, beekeeping, hydroponics, training, and farm infrastructure.',
};

const services = [
    {
        id: 'prabha-shroom',
        title: 'Prabha Shroom',
        desc: 'Advanced mushroom cultivation, R&D, and comprehensive training programs.',
        tagline: 'Growing nutrition, farming the future of nutritional protein',
        features: ['Mushroom Cultivation', 'R&D Programs', 'Training Workshops', 'Quality Control'],
        image: '/image/services/mushroom.jpeg',
    },
    {
        id: 'prabha-hive',
        title: 'Prabha Hive',
        desc: 'Expert beekeeping services, pure honey production, and pollination solutions.',
        tagline: "Sweetening nature's work, the buzz behind sustainability",
        features: ['Beekeeping Services', 'Pure Honey Production', 'Pollination Services', 'Colony Management'],
        image: '/image/services/beekeeping.jpeg',
    },
    {
        id: 'prabha-fresh',
        title: 'Prabha Fresh',
        desc: 'Premium hydroponic produce with indoor/outdoor farm setup solutions.',
        tagline: 'From water to wellness, pure fresh smartly grown',
        features: ['Hydroponic Systems', 'Clean Produce', 'Farm Setup', 'Retail Solutions'],
        image: '/image/services/hydroponics.jpeg',
    },
    {
        id: 'prabha-learn',
        title: 'Prabha Learn',
        desc: 'Comprehensive agricultural training and consultancy hub.',
        tagline: "Training India's next agri-leaders",
        features: ['Workshops', 'R&D Programs', 'Consultancy', 'Agritech Training'],
        image: '/image/services/training.jpeg',
    },
    {
        id: 'prabha-technovation',
        title: 'Prabha Technovation',
        desc: 'Advanced farm design and technology integration services.',
        tagline: 'Designing farms for tomorrow',
        features: ['Greenhouse Design', 'IoT Solutions', 'Automation Systems', 'Infrastructure Setup'],
        image: '/image/services/technology.jpeg',
    },
];

export default function ServicesPage() {
    return (
        <section className="min-h-screen bg-white">
            {/* Video Hero Section */}
            <div className="relative w-full h-screen overflow-hidden">
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    src="/video/farming.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40" />

                {/* Content */}
                <div className="relative z-10 flex items-center justify-center h-full">
                    <h1 className="text-5xl md:text-7xl font-bold text-white text-center px-4">
                        Our Farms
                    </h1>
                </div>
            </div>

            {/* Services Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Our Services</h2>
                    <p className="mt-4 text-lg md:text-xl text-gray-600">
                        Innovative agricultural solutions for a sustainable future
                    </p>
                </div>

                {/* Services List */}
                <div className="space-y-20">
                    {services.map((service, index) => (
                        <Link
                            href={`/services/${service.id}`}
                            key={service.title}
                            className={`flex flex-col md:flex-row items-center gap-10 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''
                                } hover:bg-gray-50 transition-colors rounded-xl p-4`}
                        >
                            {/* Text Section */}
                            <div className="flex-1 space-y-4">
                                <h3 className="text-3xl font-semibold text-gray-900">{service.title}</h3>
                                <p className="text-lg font-medium text-emerald-600">{service.tagline}</p>
                                <p className="text-gray-600">{service.desc}</p>

                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                                    {service.features.map((feature) => (
                                        <li key={feature} className="flex items-center text-gray-700">
                                            <svg
                                                className="w-3 h-3 text-emerald-500 mr-2 flex-shrink-0"
                                                fill="currentColor"
                                                viewBox="0 0 8 8"
                                            >
                                                <circle cx="4" cy="4" r="3" />
                                            </svg>

                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Image Section */}
                            <div className="w-full md:w-1/2 relative aspect-video rounded-lg overflow-hidden shadow-lg">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority={index === 0}
                                />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}