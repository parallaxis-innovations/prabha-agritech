// data/blog.ts
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
        category: 'Sustainability & Social Impact',
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
        category: 'Farming & Cultivation',
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
        category: 'Technology & Innovation in Agriculture',
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
        slug: 'beekeeping-business-guide',
        title: 'Starting a Profitable Beekeeping Business',
        excerpt: 'A comprehensive guide to launching and scaling your beekeeping enterprise for sustainable income.',
        category: 'Agribusiness & Entrepreneurship',
        date: 'September 20, 2025',
        author: 'Sunita Desai',
        authorImage: '/image/profile.png',
        image: '/image/blog/beekeeping.jpg',
        readTime: '7 min read',
        content: `
                <h2>The Sweet Business of Beekeeping</h2>
                <p>Beekeeping offers entrepreneurs a unique opportunity to build a profitable business while contributing to environmental sustainability. Beyond honey production, bees play a crucial role in pollinating crops and maintaining ecosystem health.</p>
                
                <h2>Economic Opportunities</h2>
                <p>A well-managed beekeeping operation can generate significant revenue through honey, beeswax, royal jelly, and pollination services. With relatively low startup costs, beekeeping is accessible to aspiring agripreneurs and can complement existing agricultural activities.</p>
                
                <h3>Revenue Streams</h3>
                <p>Successful beekeeping businesses diversify income through multiple channels: raw honey sales, value-added products like creamed honey and honey-based cosmetics, pollination services for farms, and bee colony sales to new beekeepers.</p>
                
                <h2>Market Analysis and Pricing</h2>
                <p>The organic honey market is growing at 15% annually, with premium varieties commanding prices 3-5 times higher than conventional honey. Understanding market demand and positioning your products strategically is key to profitability.</p>
                
                <h2>Scaling Your Operation</h2>
                <p>Start with 10-20 hives and gradually expand based on market demand and management capacity. Invest in proper equipment, training, and quality control systems to ensure consistent product quality and customer satisfaction.</p>
                
                <h2>Business Planning Essentials</h2>
                <p>Develop a comprehensive business plan covering startup costs, operational expenses, marketing strategy, and financial projections. PRABHA's entrepreneurship program provides mentorship and resources for launching successful agribusiness ventures.</p>
            `,
        tags: ['Beekeeping', 'Agribusiness', 'Entrepreneurship', 'Sustainable Income'],
    },
    {
        slug: 'rooftop-gardening-guide',
        title: 'Transform Your Rooftop into a Productive Garden',
        excerpt: 'Learn how to create thriving gardens in urban spaces with limited area and resources.',
        category: 'Urban Farming & Gardening',
        date: 'September 15, 2025',
        author: 'Vikram Singh',
        authorImage: '/image/profile.png',
        image: '/image/blog/hydroponics.avif',
        readTime: '6 min read',
        content: `
                <h2>The Urban Farming Revolution</h2>
                <p>Rooftop gardening is transforming city landscapes, providing fresh produce, reducing urban heat islands, and connecting people with nature. With proper planning, even small rooftop spaces can produce substantial yields.</p>
                
                <h2>Getting Started with Rooftop Gardens</h2>
                <p>Before starting, assess your rooftop's load-bearing capacity, sun exposure, and water access. Choose appropriate growing systems: container gardens for flexibility, raised beds for larger spaces, or hydroponic systems for intensive production.</p>
                
                <h3>Best Crops for Urban Gardens</h3>
                <p>Focus on high-value, space-efficient crops like leafy greens, herbs, cherry tomatoes, and peppers. These crops grow well in containers and provide quick returns on your investment of time and resources.</p>
                
                <h2>Soil and Growing Media</h2>
                <p>Use lightweight growing media specifically designed for rooftop gardens. Mix coco peat, vermicompost, and perlite for excellent drainage and nutrition. Avoid heavy garden soil which can stress building structures.</p>
                
                <h2>Water Management</h2>
                <p>Install drip irrigation systems to conserve water and ensure consistent moisture. Collect rainwater for sustainable irrigation and reduce dependence on municipal water supplies.</p>
                
                <h2>Community Impact</h2>
                <p>Rooftop gardens create green spaces, improve air quality, and foster community connections. Share your harvest with neighbors and inspire others to start their own urban farming projects.</p>
            `,
        tags: ['Urban Farming', 'Rooftop Gardening', 'Container Gardening', 'City Agriculture'],
    },
    {
        slug: 'farmer-success-story',
        title: 'From Traditional to Tech: A Farmer\'s Transformation Journey',
        excerpt: 'How one farmer increased yields by 300% through sustainable practices and modern technology.',
        category: 'Stories & Inspirations',
        date: 'September 8, 2025',
        author: 'Meera Nair',
        authorImage: '/image/profile.png',
        image: '/image/blog/market-trends.webp',
        readTime: '8 min read',
        content: `
                <h2>Meet Ramesh: A Pioneer in Modern Farming</h2>
                <p>Ramesh Kumar's story is one of resilience, innovation, and transformation. Five years ago, he struggled with declining yields and mounting debts on his 5-acre farm in Maharashtra. Today, he's a role model for sustainable farming in his region.</p>
                
                <h2>The Turning Point</h2>
                <p>Everything changed when Ramesh attended a PRABHA training program on integrated farming systems. He learned about soil health management, drip irrigation, and crop diversification strategies that would revolutionize his approach to farming.</p>
                
                <h3>Implementing Change</h3>
                <p>Ramesh started small, dedicating one acre to test new methods. He installed a drip irrigation system, practiced crop rotation with legumes, and adopted organic pest management. The results were immediate and impressive.</p>
                
                <h2>The Numbers Tell the Story</h2>
                <p>Within two years, Ramesh's yields increased by 300% while reducing water usage by 60% and chemical inputs by 80%. His annual income grew from ₹2 lakhs to ₹8 lakhs, completely transforming his family's financial situation.</p>
                
                <h2>Giving Back to the Community</h2>
                <p>Today, Ramesh mentors other farmers in his village, sharing his knowledge and experience. He's proof that with the right guidance and willingness to adapt, traditional farming can evolve into a profitable, sustainable enterprise.</p>
                
                <h2>Key Lessons Learned</h2>
                <p>Ramesh emphasizes the importance of continuous learning, starting small with new methods, and seeking expert guidance. His journey inspires farmers across India to embrace innovation while respecting traditional wisdom.</p>
            `,
        tags: ['Success Stories', 'Farmer Inspiration', 'Sustainable Agriculture', 'Innovation'],
    },
    {
        slug: 'organic-farming-business',
        title: 'Building a Profitable Organic Farming Business',
        excerpt: 'Strategic insights on certification, marketing, and scaling your organic agriculture venture.',
        category: 'Agribusiness & Entrepreneurship',
        date: 'October 12, 2025',
        author: 'Anjali Verma',
        authorImage: '/image/profile.png',
        image: '/image/blog/sustainable-farming.jpg',
        readTime: '9 min read',
        content: `
                <h2>The Organic Market Opportunity</h2>
                <p>The organic food market in India is growing at 25% annually, driven by health-conscious consumers willing to pay premium prices. This presents a golden opportunity for farmers ready to transition to organic methods.</p>
                
                <h2>Certification Process</h2>
                <p>Obtaining organic certification requires a 3-year transition period and adherence to strict standards. Plan ahead, maintain detailed records, and work with certifying agencies to navigate the process smoothly.</p>
                
                <h3>Building Your Brand</h3>
                <p>Successful organic farmers don't just grow crops—they build brands. Develop a compelling story, create attractive packaging, and establish direct connections with consumers through farmers' markets and online platforms.</p>
                
                <h2>Premium Pricing Strategies</h2>
                <p>Organic produce commands 30-50% higher prices than conventional alternatives. Educate customers about your farming practices, emphasize quality and nutritional benefits, and build loyalty through consistent excellence.</p>
                
                <h2>Distribution Channels</h2>
                <p>Explore multiple distribution options: direct-to-consumer sales, subscription boxes, partnerships with organic stores, and exports. Diversification reduces risk and maximizes market reach.</p>
            `,
        tags: ['Organic Farming', 'Agribusiness', 'Certification', 'Marketing Strategy'],
    },
    {
        slug: 'vertical-farming-innovation',
        title: 'Vertical Farming: Growing Up Instead of Out',
        excerpt: 'Discover how vertical farming is revolutionizing urban agriculture with year-round production.',
        category: 'Technology & Innovation in Agriculture',
        date: 'October 8, 2025',
        author: 'Dr. Kiran Reddy',
        authorImage: '/image/profile.png',
        image: '/image/blog/hydroponics.avif',
        readTime: '7 min read',
        content: `
                <h2>What is Vertical Farming?</h2>
                <p>Vertical farming involves growing crops in stacked layers within controlled environments. This innovative approach maximizes space efficiency and enables year-round production regardless of external weather conditions.</p>
                
                <h2>Technology Integration</h2>
                <p>Modern vertical farms utilize LED grow lights, automated nutrient delivery systems, climate control, and AI-powered monitoring to optimize growing conditions. These technologies dramatically increase productivity per square foot.</p>
                
                <h3>Resource Efficiency</h3>
                <p>Vertical farms use 95% less water than traditional agriculture, eliminate pesticide need, and reduce transportation costs by locating production near urban consumers. The environmental benefits are substantial.</p>
                
                <h2>Economic Viability</h2>
                <p>While initial investment is significant, vertical farms achieve faster crop cycles and higher yields. Leafy greens can be harvested every 21 days, generating consistent revenue streams year-round.</p>
                
                <h2>Scaling Strategies</h2>
                <p>Start with a small pilot system to understand technology and market demand. Gradually expand production capacity based on sales performance and operational efficiency improvements.</p>
            `,
        tags: ['Vertical Farming', 'AgriTech', 'Indoor Farming', 'Innovation'],
    },
];

export const categories: string[] = [
    'All',
    'Farming & Cultivation',
    'Technology & Innovation in Agriculture',
    'Agribusiness & Entrepreneurship',
    'Sustainability & Social Impact',
    'Urban Farming & Gardening',
    'Stories & Inspirations',
];