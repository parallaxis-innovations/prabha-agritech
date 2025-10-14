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
        image: '/image/services/mushroom.png',
    },
    {
        id: 'prabha-hive',
        title: 'Prabha Hive',
        desc: 'Expert beekeeping services, pure honey production, and pollination solutions.',
        tagline: "Sweetening nature's work, the buzz behind sustainability",
        features: ['Beekeeping Services', 'Pure Honey Production', 'Pollination Services', 'Colony Management'],
        image: '/image/services/honeyfarming.png',
    },
    {
        id: 'prabha-fresh',
        title: 'Prabha Fresh',
        desc: 'Premium hydroponic produce with indoor/outdoor farm setup solutions.',
        tagline: 'From water to wellness, pure fresh smartly grown',
        features: ['Hydroponic Systems', 'Clean Produce', 'Farm Setup', 'Retail Solutions'],
        image: '/image/services/hydroponics.png',
    },
    {
        id: 'prabha-learn',
        title: 'Prabha Learn',
        desc: 'Comprehensive agricultural training and consultancy hub.',
        tagline: "Training India's next agri-leaders",
        features: ['Workshops', 'R&D Programs', 'Consultancy', 'Agritech Training'],
        image: '/image/services/training.png',
    },
    {
        id: 'prabha-technovation',
        title: 'Prabha Technovation',
        desc: 'Advanced farm design and technology integration services.',
        tagline: 'Designing farms for tomorrow',
        features: ['Greenhouse Design', 'IoT Solutions', 'Automation Systems', 'Infrastructure Setup'],
        image: '/image/services/technology.png',
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
                <div className="relative z-10 flex items-center justify-center h-full px-4">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white text-center">
                        Our Farms
                    </h1>
                </div>
            </div>

            {/* Services Content */}
            <div className="lg:mx-20 mx-6 px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
                <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">Our Services</h2>
                    <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-gray-600">
                        Innovative agricultural solutions for a sustainable future
                    </p>
                </div>

                {/* Services List */}
                <div className="space-y-8 sm:space-y-12 lg:space-y-20">
                    {services.map((service, index) => (
                        <Link
                            href={`/services/${service.id}`}
                            key={service.title}
                            className={`flex flex-col md:flex-row items-center gap-6 sm:gap-8 lg:gap-10 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''
                                } hover:bg-gray-50 transition-colors rounded-xl p-4 sm:p-6`}
                        >
                            {/* Text Section */}
                            <div className="flex-1 space-y-3 sm:space-y-4">
                                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900">{service.title}</h3>
                                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-emerald-600">{service.tagline}</p>
                                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600">{service.desc}</p>

                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mt-3 sm:mt-4">
                                    {service.features.map((feature) => (
                                        <li key={feature} className="flex text-sm sm:text-base md:text-lg lg:text-xl items-center text-gray-700">
                                            <svg
                                                className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-emerald-500 mr-1.5 sm:mr-2 flex-shrink-0"
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
                            <div className="w-full md:w-1/2 relative aspect-video rounded-lg overflow-hidden shadow-lg mt-6 md:mt-0">
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
            <div className="py-8 sm:py-12 lg:py-20 px-4 sm:px-6 lg:px-12 bg-cream flex flex-col items-center justify-center min-h-[20rem]">
                <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-4 sm:mb-6 text-center">
                    Empowering Sustainable Agriculture
                </h2>
                <p className="text-slate-700 text-sm sm:text-base md:text-lg leading-relaxed max-w-5xl text-center">
                    PRABHA delivers innovative farming services, blending precision agriculture, organic practices, and farmer education.
                    Our solutions enhance productivity, promote sustainability, and empower communities to build a resilient future.
                </p>
            </div>
        </section>
    );
}