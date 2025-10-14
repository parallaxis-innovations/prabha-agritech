export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    author: string;
    authorImage: string;
    image: string;
    readTime: string;
    content: string;
    tags: string[];
}

export const blogPosts: BlogPost[] = [
    {
        slug: 'sustainable-farming-techniques',
        title: 'Sustainable Farming Techniques for Modern Agriculture',
        excerpt: 'Exploring innovative methods to enhance productivity while preserving the environment for future generations.',
        category: 'Sustainability',
        date: 'October 10, 2025',
        author: 'Dr. Rajesh Kumar',
        authorImage: '/image/profile.png',
        image: '/image/blog/sustainable-farming.jpg',
        readTime: '5 min read',
        content: `
                <h2>Introduction to Sustainable Farming</h2>
                <p>Sustainable farming is more than just a buzzword—it's a necessity for our future. As climate change continues to impact agricultural practices worldwide, farmers are increasingly turning to methods that protect the environment while maintaining productivity.</p>
                
                <h2>Key Principles of Sustainable Agriculture</h2>
                <p>Sustainable agriculture is built on several core principles that work together to create a balanced ecosystem. These include crop rotation, which helps maintain soil health and reduce pest problems naturally, and integrated pest management, which minimizes the use of chemical pesticides.</p>
                
                <h3>Soil Health Management</h3>
                <p>Healthy soil is the foundation of sustainable farming. By incorporating organic matter, practicing minimal tillage, and using cover crops, farmers can improve soil structure, increase water retention, and enhance nutrient availability. This not only benefits current crops but also ensures long-term productivity.</p>
                
                <h3>Water Conservation Techniques</h3>
                <p>With water becoming an increasingly scarce resource, efficient irrigation systems like drip irrigation and rainwater harvesting are essential. These methods reduce water waste while ensuring crops receive adequate moisture for optimal growth.</p>
                
                <h2>Benefits for Farmers and Communities</h2>
                <p>Sustainable farming practices offer numerous benefits beyond environmental protection. They can reduce input costs, improve crop quality, and create healthier working conditions for farmers. Additionally, these practices help build resilient communities that can adapt to changing climate conditions.</p>
                
                <h2>Getting Started with Sustainable Practices</h2>
                <p>Transitioning to sustainable farming doesn't have to happen overnight. Start with small changes like composting farm waste, reducing chemical inputs, or experimenting with companion planting. PRABHA Agritech offers comprehensive training programs to help farmers make this transition successfully.</p>
                
                <p>At PRABHA, we believe that sustainable agriculture is the path forward. Our expert team is here to support farmers every step of the way, from initial planning to full implementation of sustainable practices.</p>
            `,
        tags: ['Sustainable Farming', 'Organic Agriculture', 'Soil Health', 'Water Conservation'],
    },
    {
        slug: 'mushroom-cultivation-guide',
        title: 'Complete Guide to Mushroom Cultivation',
        excerpt: 'From substrate preparation to harvest, learn the essential steps for successful mushroom farming.',
        category: 'Mushroom Farming',
        date: 'October 5, 2025',
        author: 'Priya Sharma',
        authorImage: '/image/profile.png',
        image: '/image/blog/mushroom-guide.jpg',
        readTime: '8 min read',
        content: `
                <h2>Why Mushroom Cultivation?</h2>
                <p>Mushroom farming has emerged as one of the most profitable and sustainable agricultural ventures. With minimal space requirements and high yields, it's an excellent option for both small-scale and commercial farmers.</p>
                
                <h2>Understanding Mushroom Types</h2>
                <p>Different mushroom varieties require different growing conditions. Button mushrooms, oyster mushrooms, and shiitake are among the most popular choices for commercial cultivation. Each has its unique substrate requirements and environmental needs.</p>
                
                <h3>Substrate Preparation</h3>
                <p>The substrate is the foundation of successful mushroom cultivation. Common materials include wheat straw, paddy straw, and sawdust. Proper sterilization and pasteurization are crucial to eliminate competing organisms and create an ideal environment for mushroom growth.</p>
                
                <h3>Spawning and Colonization</h3>
                <p>After substrate preparation, quality spawn is introduced. The colonization phase typically takes 2-3 weeks, during which the mycelium spreads throughout the substrate. Maintaining proper temperature and humidity is essential during this stage.</p>
                
                <h2>Environmental Control</h2>
                <p>Temperature, humidity, light, and fresh air exchange must be carefully managed throughout the cultivation process. Most mushrooms prefer temperatures between 15-25°C and humidity levels of 80-90%.</p>
                
                <h2>Harvesting and Post-Harvest Care</h2>
                <p>Mushrooms are typically ready for harvest within 3-4 weeks after spawning. Proper harvesting techniques and immediate cooling are essential to maintain quality and extend shelf life.</p>
                
                <p>PRABHA Shroom offers comprehensive training programs and ongoing support to help you succeed in mushroom cultivation. Contact us to learn more about our R&D programs and quality spawn production.</p>
            `,
        tags: ['Mushroom Farming', 'Cultivation Guide', 'Agricultural Training', 'Substrate Preparation'],
    },
    {
        slug: 'technology-in-farming',
        title: 'Empowering Farmers with Technology',
        excerpt: 'How modern tools, IoT sensors, and apps are transforming traditional farming practices across India.',
        category: 'Technology',
        date: 'September 28, 2025',
        author: 'Amit Patel',
        authorImage: '/image/profile.png',
        image: '/image/blog/agri-tech.jpg',
        readTime: '6 min read',
        content: `
                <h2>The Digital Revolution in Agriculture</h2>
                <p>Agriculture technology is rapidly transforming how farmers work, making operations more efficient, sustainable, and profitable. From smartphone apps to IoT sensors, technology is bridging the gap between traditional knowledge and modern innovation.</p>
                
                <h2>IoT Sensors and Smart Farming</h2>
                <p>Internet of Things (IoT) sensors monitor soil moisture, temperature, humidity, and nutrient levels in real-time. This data helps farmers make informed decisions about irrigation, fertilization, and pest management, reducing waste and improving yields.</p>
                
                <h3>Precision Agriculture</h3>
                <p>GPS-guided equipment, drone technology, and satellite imagery enable precision farming techniques. Farmers can now apply inputs exactly where and when needed, optimizing resource use and minimizing environmental impact.</p>
                
                <h2>Mobile Applications for Farm Management</h2>
                <p>Smartphone apps provide farmers with instant access to weather forecasts, market prices, expert advice, and farm management tools. These applications democratize information and connect farmers with resources previously out of reach.</p>
                
                <h2>Automated Irrigation Systems</h2>
                <p>Smart irrigation systems use weather data and soil moisture sensors to automatically adjust watering schedules. This technology saves water, reduces labor, and ensures crops receive optimal hydration.</p>
                
                <h2>Overcoming Adoption Challenges</h2>
                <p>While technology offers tremendous benefits, adoption faces challenges including cost, digital literacy, and infrastructure. PRABHA Technovation focuses on providing affordable, user-friendly solutions with comprehensive training and support.</p>
                
                <p>Join us at PRABHA Learn to discover how technology can transform your farming operations. Our expert team provides hands-on training and ongoing support to ensure successful technology integration.</p>
            `,
        tags: ['AgriTech', 'Smart Farming', 'IoT', 'Precision Agriculture', 'Digital Agriculture'],
    },
    {
        slug: 'beekeeping-benefits',
        title: 'The Economic and Environmental Benefits of Beekeeping',
        excerpt: 'Discover how beekeeping supports biodiversity, crop pollination, and provides sustainable income.',
        category: 'Beekeeping',
        date: 'September 20, 2025',
        author: 'Sunita Desai',
        authorImage: '/image/profile.png',
        image: '/image/blog/beekeeping.jpg',
        readTime: '7 min read',
        content: `
                <h2>The Sweet Business of Beekeeping</h2>
                <p>Beekeeping offers farmers a unique opportunity to diversify income while contributing to environmental sustainability. Beyond honey production, bees play a crucial role in pollinating crops and maintaining ecosystem health.</p>
                
                <h2>Economic Benefits</h2>
                <p>A well-managed beekeeping operation can generate significant revenue through honey, beeswax, royal jelly, and pollination services. With relatively low startup costs, beekeeping is accessible to small-scale farmers and can complement existing agricultural activities.</p>
                
                <h3>Pollination Services</h3>
                <p>Farmers can increase crop yields by 20-30% through effective pollination. Many commercial farmers rent bee colonies during flowering season, creating an additional income stream for beekeepers.</p>
                
                <h2>Environmental Impact</h2>
                <p>Bees are essential pollinators for over 75% of flowering plants and 35% of global food crops. By maintaining healthy bee populations, beekeepers contribute to biodiversity conservation and food security.</p>
                
                <h2>Getting Started</h2>
                <p>Starting a beekeeping venture requires proper training, equipment, and knowledge of bee behavior. PRABHA's beekeeping program provides comprehensive training and ongoing support for aspiring beekeepers.</p>
            `,
        tags: ['Beekeeping', 'Pollination', 'Sustainable Income', 'Biodiversity'],
    },
    {
        slug: 'hydroponics-revolution',
        title: 'Hydroponics: The Future of Urban Farming',
        excerpt: 'Learn how soil-less farming is revolutionizing agriculture in cities and water-scarce regions.',
        category: 'Hydroponics',
        date: 'September 15, 2025',
        author: 'Vikram Singh',
        authorImage: '/image/profile.png',
        image: '/image/blog/hydroponics.avif',
        readTime: '6 min read',
        content: `
                <h2>What is Hydroponics?</h2>
                <p>Hydroponics is a method of growing plants without soil, using mineral nutrient solutions in water. This innovative approach offers numerous advantages, particularly in urban environments and regions facing water scarcity.</p>
                
                <h2>Advantages of Hydroponic Systems</h2>
                <p>Hydroponic farming uses 90% less water than traditional agriculture, requires minimal space, and produces higher yields. Plants grow faster due to optimized nutrient delivery and controlled environmental conditions.</p>
                
                <h3>Types of Hydroponic Systems</h3>
                <p>Common systems include Deep Water Culture, Nutrient Film Technique, Drip Systems, and Aeroponics. Each system has unique advantages suited to different crops and growing environments.</p>
                
                <h2>Urban Agriculture Applications</h2>
                <p>Hydroponics enables year-round production in urban settings, reducing transportation costs and carbon footprint. Rooftop gardens and vertical farms are transforming cities into food production centers.</p>
                
                <h2>Challenges and Solutions</h2>
                <p>Initial setup costs and technical knowledge requirements can be barriers. However, PRABHA provides training programs and affordable system designs to make hydroponics accessible to all farmers.</p>
            `,
        tags: ['Hydroponics', 'Urban Farming', 'Water Conservation', 'Vertical Farming'],
    },
    {
        slug: 'market-trends-2025',
        title: 'Agricultural Market Trends in 2025',
        excerpt: 'Analyzing current market dynamics, pricing patterns, and emerging opportunities for farmers.',
        category: 'Market Analysis',
        date: 'September 8, 2025',
        author: 'Meera Nair',
        authorImage: '/image/profile.png',
        image: '/image/blog/market-trends.webp',
        readTime: '10 min read',
        content: `
                <h2>Overview of 2025 Agricultural Markets</h2>
                <p>The agricultural sector in 2025 is experiencing significant transformations driven by technology adoption, climate change impacts, and shifting consumer preferences toward organic and sustainable products.</p>
                
                <h2>Key Market Trends</h2>
                <p>Organic produce continues to command premium prices, with demand outpacing supply. Exotic vegetables and specialty crops are gaining traction in urban markets, offering higher profit margins for farmers.</p>
                
                <h3>Technology Integration</h3>
                <p>Digital platforms connecting farmers directly with consumers are disrupting traditional supply chains. E-commerce and farm-to-table movements are creating new market opportunities.</p>
                
                <h2>Price Dynamics</h2>
                <p>Commodity prices remain volatile due to climate uncertainties and global supply chain disruptions. Diversification and value-added processing are key strategies for risk management.</p>
                
                <h2>Emerging Opportunities</h2>
                <p>Export markets for organic products, agro-tourism, and carbon credit programs offer new revenue streams. Government initiatives supporting sustainable agriculture are creating favorable conditions for forward-thinking farmers.</p>
                
                <h2>Strategic Recommendations</h2>
                <p>Farmers should focus on quality over quantity, embrace certification programs, and leverage digital platforms for market access. PRABHA provides market intelligence and training to help farmers capitalize on emerging trends.</p>
            `,
        tags: ['Market Analysis', 'Agricultural Economics', 'Pricing Trends', 'Market Opportunities'],
    },
];


export const categories: string[] = [
    'All',
    'Sustainability',
    'Technology',
    'Mushroom Farming',
    'Beekeeping',
    'Hydroponics',
    'Market Analysis',
];
