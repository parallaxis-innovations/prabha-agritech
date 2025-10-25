export const services = [
    {
        id: 'prabha-shroom',
        title: 'Prabha Shroom',
        desc: 'Specialized in cultivation, processing, and training of high-yield Oyster and Button mushrooms.',
        tagline: 'Growing Nutrition Naturally',
        features: [
            'Farm Setup Planning',
            'Substrate Preparation',
            'Environmental Control',
            'Pest Management',
            'Marketing Guidance'
        ],
        image: '/image/services/mushroom.png',
        fullDescription: `Mushrooms are more than a crop — they are a sustainable food revolution. At Prabha Shroom, we specialize in the cultivation, processing, and training of high-yield Oyster and Button mushrooms using controlled, eco-friendly techniques. Our model is designed to help farmers, entrepreneurs, and rural youth establish profitable mushroom units with minimal investment and maximum efficiency.\n\n"From waste to wealth — we turn straw and sunlight into food and fortune."`,
        benefits: [
            'End-to-end cultivation solutions',
            'Training in environmental control',
            'Pest management expertise',
            'Marketing support for local branding',
            'Ideal for limited land and water resources'
        ],
        specifications: {
            'Production Focus': 'Oyster and Button mushrooms',
            'Technology': 'Controlled eco-friendly techniques',
            'Setup Type': 'Small shed to commercial scale',
            'Support': 'Complete cultivation cycle guidance',
            'Unique Feature': 'Waste to wealth conversion'
        }
    },
    {
        id: 'prabha-hive',
        title: 'Prabha Hive',
        desc: 'Natural honeybee cultivation and pollination services promoting ecological balance.',
        tagline: 'The Buzz Behind Sustainability',
        features: [
            'High-quality Honey Production',
            'Pollination Services',
            'Training Programs',
            'Apiary Setup Design',
            'Multi-crop Integration'
        ],
        image: '/image/services/honeyfarming.png',
        fullDescription: `Bees are the backbone of biodiversity. At Prabha Hive, we promote natural honeybee cultivation as both a profitable venture and an ecological necessity. We design apiary setups that fit small farmers as well as commercial orchards, ensuring safety, productivity, and purity. Our focus is on producing pure, unblended honey while restoring nature's balance.\n\n"Each drop of honey carries the story of a blooming farm."`,
        benefits: [
            'Standardized boxes and colonies',
            'Comprehensive pollination services',
            'Training for farmers and groups',
            'Increased crop yields',
            'Support for biodiversity'
        ],
        specifications: {
            'Target Crops': 'Mustard, Sunflower, Vegetables, Fruits',
            'Setup Scale': 'Small farms to commercial orchards',
            'Focus': 'Pure, unblended honey production',
            'Training': 'Farmers, youth, women self-help groups',
            'Integration': 'Multi-cropping models support'
        }
    },
    {
        id: 'prabha-fresh',
        title: 'Prabha Fresh',
        desc: 'Advanced hydroponic and vertical farming systems for high-value produce.',
        tagline: 'From Water to Wellness',
        features: [
            'NFT Systems',
            'Dutch Bucket Systems',
            'Vertical Tower Systems',
            'Aeroponic Systems',
            'Automated Controls'
        ],
        image: '/image/services/hydroponics.png',
        fullDescription: `At Prabha Fresh, we bring the future of farming to today's fields. Our hydroponic and vertical farming systems allow cultivation of exotic and high-value vegetables — lettuce, basil, spinach, cherry tomatoes, kale, and more — using up to 90% less water and zero soil. Our mission is to make safe, pesticide-free greens available directly from local farms to nearby consumers.\n\n"From water to wellness — we grow what tomorrow will eat."`,
        benefits: [
            'Up to 90% water savings',
            'Zero soil requirement',
            'Automated nutrient control',
            'Climate-controlled environment',
            'Direct farm-to-consumer model'
        ],
        specifications: {
            'System Types': 'NFT, Dutch bucket, Vertical tower, Aeroponic',
            'Scale Options': 'Commercial and home use',
            'Automation': 'Nutrient dosing, pH, climate control',
            'Produce Types': 'Exotic vegetables and leafy greens',
            'Support': 'Crop planning and post-harvest guidance'
        }
    },
    {
        id: 'prabha-learn',
        title: 'Prabha Learn',
        desc: 'PRABHA\'s dedicated training and capacity-building wing for skilled agri-entrepreneurs.',
        tagline: 'Training India\'s Next Agri-Leaders',
        features: [
            'Technical Training',
            'Agribusiness Planning',
            'Technology Integration',
            'Financial Literacy',
            'Entrepreneurial Mentorship'
        ],
        image: '/image/services/training.png',
        fullDescription: `Knowledge is the first seed of transformation. Prabha Learn is PRABHA's training and capacity-building wing dedicated to creating skilled agri-entrepreneurs. Each program combines hands-on learning and real farm exposure so participants walk away confident to start or scale their own ventures.\n\n"We don't just teach farming — we teach how to make farming a business of pride and profit."`,
        benefits: [
            'Structured on-field training',
            'Classroom programs',
            'Hands-on learning experience',
            'Real farm exposure',
            'Entrepreneurial guidance'
        ],
        specifications: {
            'Program Areas': 'Mushroom, Hydroponics, Beekeeping, Vermicomposting',
            'Business Focus': 'Planning, Branding, Market Access',
            'Technology Training': 'IoT, Solar Integration, Automation',
            'Additional Support': 'Government schemes, FPO formation',
            'Target Groups': 'Farmers, Students, NGOs, Rural Youth'
        }
    },
    {
        id: 'prabha-technovation',
        title: 'Prabha Technovation',
        desc: 'Next-generation farm infrastructure and technology integration solutions.',
        tagline: 'Designing Farms for Tomorrow',
        features: [
            'Greenhouse Construction',
            'Climate Control Systems',
            'Automation Integration',
            'Solar Solutions',
            'IoT Monitoring'
        ],
        image: '/image/services/technology.png',
        fullDescription: `Modern agriculture begins with smart design. Prabha Technovation focuses on building next-generation farm infrastructure and integrating technology that makes agriculture efficient, scalable, and sustainable. Our goal is not just to build structures — but to build systems that pay for themselves through precision, productivity, and reduced waste.\n\n"When design meets data, even a few acres can feed a city."`,
        benefits: [
            'Turnkey infrastructure solutions',
            'Climate-controlled environments',
            'Energy independence through solar',
            'Real-time monitoring systems',
            'Custom design approach'
        ],
        specifications: {
            'Infrastructure': 'Greenhouse, Polyhouse, Shade-net',
            'Control Systems': 'Irrigation, Fogging, Lighting, Ventilation',
            'Monitoring': 'Temperature, Humidity, pH & EC tracking',
            'Energy': 'Solar integration options',
            'Design': 'Custom solutions for all scales'
        }
    }
];

export function getServiceById(id: string) {
    return services.find(service => service.id === id);
}
