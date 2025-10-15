"use client";
import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
import ServicesCarousel from '../components/ServicesCarousel';
import PrabhaTree from '../components/PrabhaTree';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  const divisions = [
    {
      title: 'Prabha Shroom',
      tagline: 'Farming the Future of Nutritional Protein',
      description: 'Advanced mushroom cultivation, R&D, and comprehensive training programs.',
      icon: <span className="text-2xl">🍄</span>,
      image: 'https://media.istockphoto.com/id/1396681773/photo/converging-lines-of-rows-of-shitake-mushrooms-growing-in-indoor-farm.webp?a=1&b=1&s=612x612&w=0&k=20&c=npF75rRzQzRpGf3fq9hKdkcoVFTj1KqalUCme9N3AJA=',
      href: '/services#shroom'
    },
    {
      title: 'Prabha Hive',
      tagline: 'The Buzz Behind Sustainability',
      description: 'Honeybee farming, pure honey production, and pollination services for healthier ecosystems.',
      icon: <span className="text-2xl">🐝</span>,
      image: 'https://media.istockphoto.com/id/1294583580/photo/beekeeper-working-collect-honey.webp?a=1&b=1&s=612x612&w=0&k=20&c=2khGBBAqRdBbE611QHeYR0_wo1qf1kLZ80gVlCDOgdY=',
      href: '/services#hive'
    },
    {
      title: 'Prabha Fresh',
      tagline: 'From Water to Wellness',
      description: 'Premium hydroponically grown clean produce. Pure. Fresh. Smartly Grown.',
      icon: <span className="text-2xl">🥬</span>,
      image: '/image/services/hydroponics.png',
      href: '/services#fresh'
    },
    {
      title: 'Prabha Learn',
      tagline: "Training India's Next Agri-Leaders",
      description: 'Workshops, R&D, consultancy, and full-fledged agritech training hub.',
      icon: <span className="text-2xl">🎓</span>,
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80',
      href: '/services#learn'
    },
    {
      title: 'Prabha Technovation',
      tagline: 'Designing Farms for Tomorrow',
      description: 'Greenhouses, tech infrastructure, automation, IoT sensors, and digital tools for modern farms.',
      icon: <span className="text-2xl">⚙️</span>,
      image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=800&q=80',
      href: '/services#technovation'
    },
  ];

  const stats = [
    { value: '120+', label: 'Farmers Trained' },
    { value: '15+', label: 'Active Projects' },
    { value: '5', label: 'States Reached' },
    { value: '45%', label: 'Water Saved' },
  ];

  return (
    <div className="bg-light min-h-screen">
      <HeroSection />

      {/* Intro Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-12 bg-cream">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight">
            Technology Meets Tradition
          </h2>
          <p className="text-slate-700 text-base sm:text-lg leading-relaxed px-4 sm:px-0">
            PRABHA is where innovation meets heritage. We empower Indian farmers with sustainable systems that
            honor traditional knowledge while embracing cutting-edge agritech—creating pathways to prosperity,
            food security, and climate resilience.
          </p>
        </motion.div>
      </section>

      <section>
        <PrabhaTree />
      </section>

      {/* Key Divisions Section */}
      <section className="py-10 lg:py-12 md:py-10 px-4 sm:px-6 lg:px-12">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <p className="text-sunrise-gold text-xs sm:text-sm uppercase tracking-widest mb-3">Our Ecosystem</p>
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-dark leading-tight">
              Five Pillars of Innovation
            </h2>
          </motion.div>

          <div className="overflow-hidden px-4 sm:px-6">
             <div className="flex gap-6 sm:gap-8">
            <ServicesCarousel divisions={divisions} />
             </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 xl:px-0 bg-earth-green text-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Impact in Numbers
            </h2>
            <p className="text-white/80 text-base sm:text-lg px-4 sm:px-0">
              Real results, measurable change across communities
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="text-center px-2"
              >
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold font-playfair text-sunrise-gold mb-2 leading-none">
                  {stat.value}
                </div>
                <div className="text-white/90 text-xs sm:text-sm uppercase tracking-wide px-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial / CTA Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-12 bg-cream">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-6 sm:mb-8 leading-tight">
            Join India's Sustainable <br className="hidden sm:inline md:block lg:inline" />
            Farming Revolution
          </h2>
          <p className="text-slate-700 text-base sm:text-lg mb-6 sm:mb-10 leading-relaxed px-4 sm:px-0">
            Whether you're a farmer, entrepreneur, or institution—let's build a future
            where agriculture is profitable, respected, and regenerative.
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-earth-green text-white rounded-full font-medium text-sm sm:text-base hover:bg-dark transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Start Your Journey
          </Link>
        </motion.div>
      </section>
    </div>
  );
}