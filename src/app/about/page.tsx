"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import Timeline from '../../components/Timeline';
import { GiThreeLeaves } from "react-icons/gi";
import { FaUser } from "react-icons/fa";
import { FaEarthEurope } from "react-icons/fa6";

const roadmap = [
    { year: '2025', title: 'Foundation & Expansion', description: 'Establish core operations and scale training programs.' },
    { year: '2026', title: 'Technology Integration', description: 'Launch IoT-enabled farming systems and mobile app for farmers.' },
    { year: '2027', title: 'Market Linkages', description: 'Build direct farmer-to-consumer supply chains.' },
    { year: '2028', title: 'Regional Hubs', description: 'Open 5 regional training and innovation centers.' },
    { year: '2030', title: 'National Impact', description: 'Reach 50,000+ farmers and establish PRABHA as a leader in sustainable agritech.' },
];

export default function AboutPage() {
    return (
        <section className="bg-white overflow-hidden">

            <div className="relative h-[80vh] md:h-[60vh] lg:h-[70vh]">
                <Image
                    src="/image/background/background.jpg"
                    alt="About PRABHA Agritech"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />

                <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <div className="text-center text-white max-w-5xl mx-auto px-6">
                        <motion.p
                            className="text-sm md:text-base tracking-[0.3em] uppercase mb-6 text-amber-300"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                        >
                            About PRABHA Agritech
                        </motion.p>

                        <motion.h1
                            className="text-4xl md:text-6xl lg:text-7xl font-serif mb-8 leading-tight"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            Cultivating Innovation,<br />Empowering Communities.
                        </motion.h1>

                        {/* <motion.p
                            className="text-lg md:text-xl font-light max-w-3xl mx-auto leading-relaxed"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                        >
                            At PRABHA Agritech, we’re redefining agriculture through sustainable technology,
                            farmer education, and innovation-driven growth — bridging the gap between
                            tradition and tomorrow’s smart farming solutions.
                        </motion.p> */}
                    </div>
                </motion.div>
            </div>


            {/* Tagline Section */}
            <div className="bg-gradient-to-b from-slate-50 to-white py-24">
                <motion.div
                    className="max-w-4xl mx-auto px-6 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-2xl md:text-4xl font-serif text-slate-800 leading-relaxed italic">
                        "Where tradition meets innovation, and every farmer becomes a pioneer of sustainable change."
                    </p>
                </motion.div>
            </div>

            {/* Story Section - Split Layout */}
            <div className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <p className="text-sm tracking-[0.2em] uppercase text-primary mb-4">Our Story</p>
                            <h2 className="text-4xl md:text-5xl font-serif mb-8 text-slate-900">
                                From Vision to<br />Reality
                            </h2>
                            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                                <p>
                                    PRABHA (Rising Sun) began with a simple yet powerful belief: that farming deserves the same respect, innovation, and prosperity as any other profession.
                                </p>
                                <p>
                                    We witnessed the disconnect between India's agricultural heritage and modern market demands. Farmers, the backbone of our nation, were often left behind in the race toward progress.
                                </p>
                                <p>
                                    Our mission became clear—bridge the gap between tradition and technology, empowering farmers with knowledge, tools, and market access to transform agriculture into a dignified, profitable way of life.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div
                            className="relative"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/image/background/farmer.jpg"
                                    alt="Indian Farmer"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            {/* <div className="absolute -bottom-8 -left-8 bg-primary text-white p-8 rounded-2xl shadow-xl">
                                    <p className="text-5xl font-bold mb-2">120+</p>
                                    <p className="text-sm">Farmers Trained</p>
                                </div> */}
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="py-24 bg-gradient-to-b from-slate-50 to-white">
                <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-12 xl:px-0">
                    <div
                        className="grid md:grid-cols-2 gap-8"

                    >
                        <div
                            className="bg-gradient-to-br from-primary to-primary/80 text-black p-12 rounded-3xl relative overflow-hidden group"

                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32 group-hover:scale-150 transition-transform duration-700" />
                            <div className="relative z-10">
                                <p className="text-sm tracking-[0.2em] uppercase mb-4 text-black/80">Our Vision</p>
                                <h3 className="text-3xl font-serif mb-6">A Respected Profession</h3>
                                <p className="text-lg leading-relaxed text-black/90">
                                    Transform farming into a profitable, respected profession while honoring local knowledge and ecosystems.
                                </p>
                            </div>
                        </div>
                        <div
                            className="bg-gradient-to-br from-secondary to-secondary/80 text-black p-12 rounded-3xl relative overflow-hidden group"

                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32 group-hover:scale-150 transition-transform duration-700" />
                            <div className="relative z-10">
                                <p className="text-sm tracking-[0.2em] uppercase mb-4 text-black/80">Our Mission</p>
                                <h3 className="text-3xl font-serif mb-6">Bridging Two Worlds</h3>
                                <p className="text-lg leading-relaxed text-black/90">
                                    Bridge modern technology with traditional Indian farming wisdom to create sustainable, climate-resilient systems.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Founder Section - Editorial Style */}
            <div className="py-24 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <motion.div
                        className="bg-gradient-to-br from-amber-50 via-orange-50 to-amber-50 rounded-3xl overflow-hidden"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="grid md:grid-cols-5 gap-0">
                            <div className="md:col-span-2 relative h-96 md:h-auto">
                                <Image
                                    src="/image/team/founder.jpg"
                                    alt="Bharat Soni"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="md:col-span-3 p-12 md:p-16 flex flex-col justify-center">
                                <p className="text-sm tracking-[0.2em] uppercase text-primary mb-4">Meet Our CEO</p>
                                <h2 className="text-4xl md:text-5xl font-serif mb-4 text-slate-900">Bharat Soni</h2>
                                <p className="text-xl text-primary mb-8 font-medium">Champion for Farmer-Led Innovation</p>
                                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                    Growing up surrounded by India's agricultural heartland, Bharat witnessed firsthand the struggles and untapped potential of our farming communities.
                                </p>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    With a vision to merge cutting-edge agri-technology with time-tested practices, he founded PRABHA to create pathways for rural prosperity and food security—proving that tradition and innovation are not opposites, but partners.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Roadmap Section */}
            <div className="py-24 bg-gradient-to-b from-slate-50 to-white">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        className="text-center mb-20"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-sm tracking-[0.2em] uppercase text-primary mb-4">Our Journey</p>
                        <h2 className="text-4xl md:text-5xl font-serif text-slate-900">Roadmap (2025–2030)</h2>
                    </motion.div>
                    <Timeline items={roadmap} />
                </div>
            </div>

            {/* Impact Highlights */}
            <div className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-sm tracking-[0.2em] uppercase text-primary mb-4">Real Change</p>
                        <h2 className="text-4xl md:text-5xl font-serif text-slate-900">Impact Highlights</h2>
                    </motion.div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <GiThreeLeaves />,
                                title: 'Zero-Waste Ecosystem',
                                description: 'Integrated systems that turn farm waste into value through composting, biogas, and circular farming.',
                                color: 'from-green-500 to-emerald-600',
                            },
                            {
                                icon: <FaUser />,
                                title: 'Women Empowerment',
                                description: 'Over 40% of our training participants are women, leading agri-enterprises in their communities.',
                                color: 'from-purple-500 to-pink-600',
                            },
                            {
                                icon: <FaEarthEurope />,
                                title: 'Climate Resilience',
                                description: 'Water-efficient systems reducing consumption by 45% while increasing yield and farmer income.',
                                color: 'from-blue-500 to-cyan-600',
                            },
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.2 }}
                                whileHover={{ y: -8 }}
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
                                <div className="relative p-8 text-center items-center justify-center flex flex-col h-full">
                                    <div className="text-5xl mb-6">{item.icon}</div>
                                    <h3 className="text-2xl font-serif text-slate-900 mb-4">{item.title}</h3>
                                    <p className="text-lg text-slate-600 leading-relaxed">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}