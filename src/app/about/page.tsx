import Timeline from '../../components/Timeline';

export const metadata = {
    title: 'About — PRABHA Agritech',
    description: 'Our story, vision, mission and roadmap to empower farmers and communities.'
};

const roadmap = [
    { year: '2025', title: 'Foundation & Expansion', description: 'Establish core operations and scale training programs.' },
    { year: '2026', title: 'Technology Integration', description: 'Launch IoT-enabled farming systems and mobile app for farmers.' },
    { year: '2027', title: 'Market Linkages', description: 'Build direct farmer-to-consumer supply chains.' },
    { year: '2028', title: 'Regional Hubs', description: 'Open 5 regional training and innovation centers.' },
    { year: '2030', title: 'National Impact', description: 'Reach 50,000+ farmers and establish PRABHA as a leader in sustainable agritech.' },
];

export default function AboutPage() {
    return (
        <div className="max-w-5xl mx-auto px-6 py-16">
            <h1 className="text-3xl font-bold">Our Story</h1>
            <p className="mt-4 text-slate-700">
                PRABHA (Rising Sun) began with a mission to bring dignity and prosperity to farming through technology and tradition.
                We believe in empowering farmers with knowledge, tools, and market access to transform agriculture into a respected
                and profitable profession while preserving India's rich agricultural heritage.
            </p>

            <section className="mt-12">
                <h2 className="text-2xl font-semibold">Vision & Mission</h2>
                <p className="mt-3 text-slate-600">
                    Transform farming into a profitable, respected profession while honoring local knowledge and ecosystems.
                    Bridge modern technology with traditional Indian farming wisdom to create sustainable, climate-resilient systems.
                </p>
            </section>

            <section className="mt-12">
                <h2 className="text-2xl font-semibold">Founder</h2>
                <div className="mt-4 p-6 bg-accent rounded-lg">
                    <h3 className="font-semibold text-lg">Bharat Soni</h3>
                    <p className="text-sm text-slate-600 mt-2">
                        Champion for farmer-led innovation and sustainable enterprise. Bharat founded PRABHA with a vision
                        to merge cutting-edge agri-technology with India's time-tested farming practices, creating pathways
                        for rural prosperity and food security.
                    </p>
                </div>
            </section>

            <section className="mt-16">
                <h2 className="text-2xl font-semibold mb-8">Our Roadmap (2025–2030)</h2>
                <Timeline items={roadmap} />
            </section>

            <section className="mt-16">
                <h2 className="text-2xl font-semibold">Impact Highlights</h2>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 bg-white border rounded-lg">
                        <h3 className="font-semibold text-secondary">Zero-Waste Ecosystem</h3>
                        <p className="text-sm text-slate-600 mt-2">Integrated systems that turn farm waste into value through composting, biogas, and circular farming.</p>
                    </div>
                    <div className="p-6 bg-white border rounded-lg">
                        <h3 className="font-semibold text-secondary">Women Empowerment</h3>
                        <p className="text-sm text-slate-600 mt-2">Over 40% of our training participants are women, leading agri-enterprises in their communities.</p>
                    </div>
                    <div className="p-6 bg-white border rounded-lg">
                        <h3 className="font-semibold text-secondary">Climate Resilience</h3>
                        <p className="text-sm text-slate-600 mt-2">Water-efficient systems reducing consumption by 45% while increasing yield and farmer income.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
