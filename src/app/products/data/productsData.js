// app/products/data/productsData.js
export const productData = {
  greenhouse: {
    name: "Greenhouse Solutions",
    description:
      "Discover our range of premium greenhouse structures designed for maximum yield and resource efficiency.",
    subProducts: [
      {
        slug: "fan-pad-greenhouse",
        title: "Fan Pad Greenhouse",
        bannerImage: "/products/green-house/greenhouse-fanpad-banner.png",
        mainImage: "/products/green-house/greenhouse-fanpad.png",
        shortDescription:
          "A climate-controlled greenhouse using evaporative cooling systems ideal for hot regions.",
        features: [
          "Energy-Efficient Cooling",
          "Consistent Temperature & Humidity",
          "High Yield & Quality Crops",
          "Customizable for Different Crop Types",
        ],
        content: [
          {
            heading: "Advanced Climate Engineering for Optimal Crop Production",
            text: ["The Fan and Pad Greenhouse system utilizes evaporative cooling to maintain ideal growing conditions during extreme weather. Exhaust fans pull air through water-saturated cooling pads, creating uniform temperatures throughout.",
                   "Enhanced by automation, this system ensures consistent growing conditions year-round, resulting in accelerated growth, higher quality produce, and increased yields.",
                ]
          },
          {
            heading: "Efficient Temperature Management",
            text: "The system can reduce internal temperatures by 10–15°C in summer while maintaining humidity, ensuring optimal plant health and productivity.",
          },
        ],
      },
      {
        slug: "polycarbonate-greenhouse",
        title: "Polycarbonate Greenhouse",
        bannerImage: "/products/green-house/greenhouse-polycarbonate-banner.png",
        mainImage: "/products/green-house/greenhouse-polycarbonate.png",
        shortDescription:
          "Perfect for cold climates and specialized crop production, ensuring optimal insulation and light transmission.",
        features: [
          "Superior Light Diffusion",
          "Excellent Thermal Insulation",
          "Exceptional Durability & Longevity",
          "UV Protection & Weather Resistance"
        ],
        content: [
          {
            heading: "Premium Protection for High-Value Crop Production",
            text: [
              "Polycarbonate greenhouse is a premium choice for growers living in cold climates. It can withstand harsh weather, snowfall & sand storm weather. It is long-lasting and can remain in good shape. Polycarbonate greenhouses help diffuse UV lights, which helps plants thrive and even grow faster in very Hot and Cold climates.",
              "This technology eliminates harsh shadows and hotspots, promoting uniform plant growth and reducing energy costs by up to 40% compared to conventional glass structures."
            ],
          },
        ],
      },
      {
        slug: "naturally-ventilated-greenhouse",
        title: "Naturally Ventilated Greenhouse",
        bannerImage: "/products/green-house/greenhouse-nv-banner.png",
        mainImage: "/products/green-house/greenhouse-nv.png",
        shortDescription:
          "Eco-friendly and cost-effective solution ideal for tropical and moderate climates.",
        features: [
          "Low Energy Consumption",
          "Natural Air Circulation",
          "Environmentally Friendly Design",
        ],
        content: [
          {
            heading: "Sustainable Growing with Natural Climate Management",
            text: [
              " Naturally Ventilated greenhouses effectively save energy by managing shade, temperature, and humidity.",
              "This design is widely adaptable and suitable for use worldwide. The middle of each span of the greenhouse can be used for ventilation a large area.",
              "At the same time, due to the principle of hot differential pressure, the gas with high temperature in the greenhouse is always at the highest point of the greenhouse, so it's effectively reduces the temperature and humidity in the greenhouse, especially suitable for flowers and crops with low humidity requirements.",
              "It is suitable and used in most of the world.",
            ],
          },
        ],
      },
    ],
  },

  // Example for another category
  hydroponics: {
    name: "Hydroponics Solutions",
    description:
      "Experience advanced soilless farming techniques that enable faster growth, higher yields, and sustainable cultivation using nutrient-rich water systems.",
    subProducts: [
      {
        slug: "flatbed-system",
        title: "Flatbed System",
        bannerImage: "/products/hydroponics/flatbed-banner.png",
        mainImage: "/products/hydroponics/flatbed.png",
        shortDescription:
          "A simple and efficient setup for beginners and commercial growers, ideal for leafy greens and herbs.",
        features: [
          "Uniform Nutrient Distribution",
          "Easy Setup and Maintenance",
          "Cost-Effective for Large Scale Production",
          "Suitable for Various Crop Types",
        ],
        content: [
          {
            heading: "Efficient & Scalable Hydroponic Growing Platform",
            text: [
              "Flatbed hydroponic systems consist of shallow, horizontal growing beds filled with a soilless medium that provides support for plants while allowing for excellent nutrient circulation and root development. These systems combine the simplicity of traditional growing beds with the precision of hydroponic nutrient delivery.",
              "Irrigation is provided through distributed drip lines or micro-sprinklers, with drainage systems that collect and recirculate the nutrient solution. This approach creates a consistent growing environment with excellent temperature stability and uniform moisture distribution.",
              "Our Flatbed systems feature durable, UV-resistant materials designed for years of productive use in both greenhouse and indoor environments, with customizable dimensions to fit your specific growing space."
            ],
          },
        ],
      },
      {
        slug: "nft-system",
        title: "Nutrient Film Technique (NFT)",
        bannerImage: "/products/hydroponics/nft-banner.png",
        mainImage: "/products/hydroponics/nft.png",
        shortDescription:
          "A dynamic system where a thin film of nutrient-rich water continuously flows past the plant roots.",
        features: [
          "Minimal Water Wastage",
          "Continuous Oxygen Supply",
          "Rapid Growth Rate",
          "Perfect for Leafy Crops",
        ],
        content: [
          {
            heading: "Continuous Nutrient Flow for Enhanced Growth",
            text: [
              "The Nutrient Film Technique (NFT) is a sophisticated hydroponic method where a shallow stream of nutrient-rich water continuously flows over plant roots in a slightly sloped channel system.",
              "This system creates an ideal environment where roots receive perfect access to water, nutrients, and oxygen simultaneously - producing exceptional growth rates while using minimal water and nutrients.",
              "Our NFT systems are engineered for commercial efficiency with durable food-grade materials, precisely calibrated slopes, and optimized channel designs to ensure consistent nutrient delivery and prevent root zone issues."
            ],
          },
        ],
      },
      {
        slug: "dwc-system",
        title: "Deep Water Culture (DWC)",
        bannerImage: "/products/hydroponics/dwc-banner.png",
        mainImage: "/products/hydroponics/dwc.png",
        shortDescription:
          "A hydroponic system where plant roots are submerged in oxygenated nutrient water for direct absorption.",
        features: [
          "High Oxygen Availability",
          "Fast Root Development",
          "Simple Setup with Low Maintenance",
          "Consistent Nutrient Delivery",
        ],
        content: [
          {
            heading: "Direct Nutrient Absorption for Rapid Growth",
            text: [
              "The Nutrient Film Technique (NFT) is a sophisticated hydroponic method where a shallow stream of nutrient-rich water continuously flows over plant roots in a slightly sloped channel system.",
              "This system creates an ideal environment where roots receive perfect access to water, nutrients, and oxygen simultaneously - producing exceptional growth rates while using minimal water and nutrients.",
              "Our NFT systems are engineered for commercial efficiency with durable food-grade materials, precisely calibrated slopes, and optimized channel designs to ensure consistent nutrient delivery and prevent root zone issues."
            ],
          },
        ],
      },
      {
        slug: "a-frame-hydroponic-system",
        title: "A-Frame Hydroponic System",
        bannerImage: "/products/hydroponics/a-frame-banner.png",
        mainImage: "/products/hydroponics/a-frame.png",
        shortDescription:
          "A vertical hydroponic setup designed to maximize growing space using stacked plant channels.",
        features: [
          "Space-Saving Vertical Design",
          "Ideal for Urban or Indoor Farms",
          "High Yield per Square Foot",
          "Easy Harvesting and Maintenance",
        ],
        content: [
          {
            heading: "Vertical Farming Made Simple & Productive",
            text: [
              "A-Frame hydroponic systems feature a distinctive triangular structure with growing channels arranged in vertical rows along both sides of the frame. This design maximizes growing area in limited floor space while providing excellent light exposure and gravity-assisted nutrient flow.",
              "Plants grow in channels positioned at an angle, allowing for optimal light interception and creating an efficient use of greenhouse or indoor growing space. The triangular design also facilitates natural air circulation, reducing the risk of fungal issues common in dense growing arrangements.",
              "Our A-Frame systems are engineered with durable materials suitable for long-term commercial production, with customizable lengths and configurations to fit any growing space."
            ],
          },
        ],
      },
      {
        slug: "indoor-setup",
        title: "Indoor Hydroponic Setup",
        bannerImage: "/products/hydroponics/indoor-banner.png",
        mainImage: "/products/hydroponics/indoor.png",
        shortDescription:
          "A complete controlled-environment solution for growing plants indoors year-round.",
        features: [
          "Complete Control Over Climate",
          "LED Grow Lighting Integration",
          "Automated Water & Nutrient Systems",
          "Perfect for Urban Farming",
        ],
        content: [
          {
            heading: "Year-Round Cultivation in Controlled Environments",
            text: [
              "Indoor Hydroponic Setups represent the pinnacle of controlled environment agriculture, combining advanced growing systems with complete environmental control to create the ideal growing conditions regardless of external weather and seasonal limitations.",
              "These systems integrate hydroponic growing technology with precision climate management, artificial lighting, and automation to produce consistent, high-quality crops year-round. By eliminating the variables of outdoor production, indoor hydroponics achieves exceptional quality, consistency, and food safety.",
              "Our indoor hydroponic solutions range from small-scale production facilities to large commercial operations, with customized configurations based on your specific crops, production goals, and available space."
            ],
          },
        ],
      },
      {
        slug: "dutch-bucket-system",
        title: "Dutch Bucket System",
        bannerImage: "/products/hydroponics/dutch-bucket-banner.png",
        mainImage: "/products/hydroponics/dutch-bucket.png",
        shortDescription:
          "A versatile hydroponic system designed for large fruiting crops such as tomatoes and peppers.",
        features: [
          "Perfect for Heavy Fruiting Crops",
          "Independent Plant Growth Control",
          "Efficient Water Recirculation",
          "Modular and Expandable Design",
        ],
        content: [
          {
            heading: "Reliable Solution for Large Crop Cultivation",
            text: [
              "Dutch Bucket systems (also known as Bato Buckets) are a versatile hydroponic method that uses individual growing containers connected to a central irrigation and drainage system. Each bucket contains growing medium and typically one or two plants, providing an isolated root zone for optimal development.",
              "This system delivers nutrient solution through precision drip emitters to each bucket, with excess solution draining through the bottom and returning to the central reservoir. The combination of frequent irrigation and excellent drainage creates an ideal environment for fruiting crops that need consistent moisture without becoming waterlogged.",
              "Our Dutch Bucket systems feature commercial-grade components designed for years of reliable operation, with customizable spacing and layouts to optimize your growing area."
            ],
          },
        ],
      },
    //   {
    //     slug: "home-hydroponic-grow-kit",
    //     title: "Home Hydroponic Grow Kit",
    //     bannerImage: "/products/hydroponics/home-kit-banner.png",
    //     mainImage: "/products/hydroponics/home-kit.png",
    //     shortDescription:
    //       "A compact, beginner-friendly hydroponic kit for growing fresh greens at home.",
    //     features: [
    //       "Plug-and-Play Setup",
    //       "Ideal for Home Kitchens & Balconies",
    //       "Low Maintenance System",
    //       "Grow Fresh Herbs and Microgreens",
    //     ],
    //     content: [
    //       {
    //         heading: "Compact Hydroponics for Every Home",
    //         text: [
    //           "The Home Hydroponic Grow Kit is designed to make urban farming accessible for everyone. Simply add water, nutrients, and plants to start growing instantly.",
    //           "It’s ideal for households looking to produce pesticide-free, fresh greens all year round with minimal effort."
    //         ],
    //       },
    //     ],
    //   },
    ],
  },

  soillessAndCocopeat: {
    name: "Soilless & Cocopeat Solutions",
    description:
      "Enhance crop productivity using eco-friendly, sustainable soilless growing media. Our cocopeat-based products offer superior aeration, drainage, and nutrient retention for modern farming applications.",
    subProducts: [
      {
        slug: "through-bags",
        title: "Through Bags",
        bannerImage: "/products/soilless/through-bag-banner.png",
        mainImage: "/products/soilless/through-bag.png",
        shortDescription:
          "Designed for commercial cultivation, through bags provide excellent drainage and airflow for strong root development.",
        features: [
          "Optimized Drainage and Aeration",
          "Ready-to-Use and Lightweight",
          "Supports Uniform Plant Growth",
          "Reusable and Eco-Friendly Material",
        ],
        content: [
          {
            heading: "Efficient Soilless Growing Solution",
            text: [
              "Through Bags are ideal for hydroponic and greenhouse cultivation, offering excellent water management and air circulation. They promote healthy root growth while preventing waterlogging and fungal infections.",
              "Made from high-quality cocopeat blend, these bags are ready to use and can be easily integrated into drip irrigation systems, ensuring consistent crop yield."
            ],
          },
        ],
      },
      {
        slug: "grow-slabs",
        title: "Grow Slabs",
        bannerImage: "/products/soilless/grow-slab-banner.png",
        mainImage: "/products/soilless/grow-slab.png",
        shortDescription:
          "Premium cocopeat slabs formulated for efficient root zone management and high-yield cultivation.",
        features: [
          "Consistent Moisture Retention",
          "Perfect for Tomatoes, Cucumbers, and Strawberries",
          "Pre-Cut Planting Holes for Easy Setup",
          "100% Organic and Renewable Media",
        ],
        content: [
          {
            heading: "High-Performance Media for Commercial Cultivation",
            text: [
              "Grow Slabs are compact, easy-to-handle growing media used in hydroponic systems. They provide an optimal balance between water retention and air porosity for better root growth.",
              "Suitable for commercial crops like tomatoes, peppers, and strawberries, Grow Slabs ensure uniform nutrient distribution and help reduce water wastage."
            ],
          },
        ],
      },
      {
        slug: "grow-bags",
        title: "Grow Bags",
        bannerImage: "/products/soilless/grow-bag-banner.png",
        mainImage: "/products/soilless/grow-bag.png",
        shortDescription:
          "Versatile and space-efficient grow bags for greenhouse and terrace farming applications.",
        features: [
          "Durable, UV-Stabilized Material",
          "Reusable and Easy to Transport",
          "Excellent Water Holding Capacity",
          "Ideal for Vegetables, Herbs, and Ornamentals",
        ],
        content: [
          {
            heading: "Flexible Growing Solution for Urban and Commercial Use",
            text: [
              "Grow Bags are a popular choice for both home and commercial growers. Made from UV-treated materials and filled with cocopeat mix, they provide excellent support for root aeration and water retention.",
              "These bags are suitable for a wide range of crops, making them an affordable and sustainable alternative to traditional soil-based cultivation."
            ],
          },
        ],
      },
    ],
  },
};
