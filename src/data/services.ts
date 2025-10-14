export const services = [
    {
        id: 'prabha-shroom',
        title: 'Prabha Shroom',
        desc: 'Advanced mushroom cultivation, R&D, and comprehensive training programs.',
        tagline: 'Growing nutrition, farming the future of nutritional protein',
        features: ['Mushroom Cultivation', 'R&D Programs', 'Training Workshops', 'Quality Control'],
        image: '/image/services/mushroom.png',
        fullDescription: `Our mushroom cultivation program combines traditional knowledge with modern technology.
            We specialize in various gourmet and medicinal mushroom varieties, offering complete solutions
            from spawn production to harvest management.`,
        benefits: [
            'State-of-the-art cultivation facilities',
            'Expert guidance and support',
            'Quality spawn production',
            'Market linkage assistance',
            'Regular training programs'
        ],
        specifications: {
            'Production Capacity': '500kg per day',
            'Varieties': 'Button, Oyster, Shiitake, etc.',
            'Technology': 'Climate controlled facilities',
            'Quality Standards': 'FSSAI Certified'
        }
    },
    {
        id: 'prabha-hive',
        title: 'Prabha Hive',
        desc: 'Expert beekeeping services, pure honey production, and pollination solutions.',
        tagline: "Sweetening nature's work, the buzz behind sustainability",
        features: ['Beekeeping Services', 'Pure Honey Production', 'Pollination Services', 'Colony Management'],
        image: '/image/services/honeyfarming.png',
        fullDescription: `Our beekeeping division provides comprehensive solutions for honey production and pollination services.
            We maintain the highest standards in bee colony management while promoting sustainable beekeeping practices
            and biodiversity conservation.`,
        benefits: [
            'Modern beekeeping equipment',
            'Pure honey extraction facilities',
            'Professional colony management',
            'Pollination services for farms',
            'Regular health monitoring'
        ],
        specifications: {
            'Colony Strength': '1000+ colonies',
            'Honey Production': '2000kg per month',
            'Certification': 'Organic certified',
            'Coverage Area': 'Pan India services'
        }
    },
    {
        id: 'prabha-fresh',
        title: 'Prabha Fresh',
        desc: 'Premium hydroponic produce with indoor/outdoor farm setup solutions.',
        tagline: 'From water to wellness, pure fresh smartly grown',
        features: ['Hydroponic Systems', 'Clean Produce', 'Farm Setup', 'Retail Solutions'],
        image: '/image/services/hydroponics.png',
        fullDescription: `Our hydroponic solutions deliver clean, efficient, and sustainable farming methods.
            We design and implement both small and large-scale hydroponic systems, focusing on
            resource optimization and maximum yield.`,
        benefits: [
            'Water-efficient systems',
            'Year-round production',
            'Pesticide-free produce',
            'Advanced nutrient management',
            'IoT-enabled monitoring'
        ],
        specifications: {
            'System Types': 'NFT, DWC, Aeroponic',
            'Production Area': 'Customizable from 100-10000 sq ft',
            'Automation Level': 'Fully automated options',
            'Crop Varieties': 'Leafy greens, herbs, vegetables'
        }
    },
    {
        id: 'prabha-learn',
        title: 'Prabha Learn',
        desc: 'Comprehensive agricultural training and consultancy hub.',
        tagline: "Training India's next agri-leaders",
        features: ['Workshops', 'R&D Programs', 'Consultancy', 'Agritech Training'],
        image: '/image/services/training.png',
        fullDescription: `Our education division focuses on building the next generation of agricultural entrepreneurs.
            We provide hands-on training, theoretical knowledge, and practical exposure to modern farming
            techniques and technologies.`,
        benefits: [
            'Expert-led training programs',
            'Practical hands-on experience',
            'Modern facility exposure',
            'Ongoing support system',
            'Industry networking'
        ],
        specifications: {
            'Course Duration': '1 week to 6 months',
            'Training Modes': 'Online and offline',
            'Batch Size': '20-30 students',
            'Certification': 'Industry recognized'
        }
    },
    {
        id: 'prabha-technovation',
        title: 'Prabha Technovation',
        desc: 'Advanced farm design and technology integration services.',
        tagline: 'Designing farms for tomorrow',
        features: ['Greenhouse Design', 'IoT Solutions', 'Automation Systems', 'Infrastructure Setup'],
        image: '/image/services/technology.png',
        fullDescription: `We specialize in designing and implementing cutting-edge agricultural infrastructure.
            Our solutions incorporate IoT, automation, and smart monitoring systems to create
            efficient and productive farming environments.`,
        benefits: [
            'Custom design solutions',
            'Smart automation systems',
            'Remote monitoring capability',
            'Energy-efficient setups',
            'Scalable infrastructure'
        ],
        specifications: {
            'Design Capacity': 'Up to 100 acres',
            'Technology Stack': 'IoT, AI, Automation',
            'Support': '24/7 technical assistance',
            'Integration': 'Full systems integration'
        }
    }
];

export function getServiceById(id: string) {
    return services.find(service => service.id === id);
}
