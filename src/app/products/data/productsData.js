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
            heading: "Advanced Climate Engineering",
            text: "The Fan and Pad Greenhouse system utilizes evaporative cooling to maintain ideal growing conditions during extreme weather. It ensures consistent growth and quality produce throughout the year.",
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
          "Durable Polycarbonate Sheets",
          "UV Protection",
          "Long-lasting and Low Maintenance",
        ],
        content: [
          {
            heading: "Superior Light Diffusion",
            text: "Ensures even sunlight distribution, promoting uniform plant growth and reducing heat stress.",
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
            heading: "Sustainable Ventilation System",
            text: "Uses wind and thermal buoyancy to regulate internal climate without mechanical fans.",
          },
        ],
      },
    ],
  },

  // Example for another category
  hydroponics: {
    name: "Hydroponics",
    description:
      "Grow crops efficiently using soilless cultivation techniques and controlled nutrient systems.",
    subProducts: [
      {
        slug: "nft-system",
        title: "Nutrient Film Technique (NFT) System",
        bannerImage: "/images/hydroponics-nft-banner.jpg",
        mainImage: "/images/hydroponics-nft.jpg",
        shortDescription:
          "A continuous flow of nutrient solution for efficient root oxygenation and optimal growth.",
        features: [
          "Efficient Water Use",
          "Fast Crop Turnover",
          "Ideal for Leafy Greens",
        ],
        content: [
          {
            heading: "Sustainable & Scalable",
            text: "NFT systems are modular, allowing for compact installations and low maintenance.",
          },
        ],
      },
    ],
  },
};
