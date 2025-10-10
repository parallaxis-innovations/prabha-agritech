import Link from "next/link";

const greenhouseTypes = [
  {
    title: "Fan & Pad Greenhouse",
    image:
      "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&q=80",
    description:
      "A climate-controlled greenhouse using an evaporative cooling system for temperature regulation, ideal for hot and arid regions. Achieve precise temperature and humidity control with Fan & Pad Greenhouse. Designed for high-value crops and extreme weather conditions.",
    features: [
      "Energy-Efficient Cooling",
      "Consistent Temperature & Humidity",
      "High Yield & Quality Crops",
      "Customizable for Different Crop Types",
    ],
  },
  {
    title: "Polycarbonate Greenhouse",
    image:
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
    description:
      "A premium greenhouse solution featuring lightweight, durable polycarbonate panels that provide excellent insulation and diffused light transmission for optimal plant growth.",
    features: [
      "Superior Light Diffusion",
      "Excellent Thermal Insulation",
      "Exceptional Durability & Longevity",
      "UV Protection & Weather Resistance",
    ],
  },
  {
    title: "Naturally Ventilated Greenhouse",
    image:
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80",
    description:
      "A cost-effective greenhouse design that uses strategic roof and side vents to regulate temperature and humidity through natural air movement, reducing energy consumption while maintaining ideal growing conditions.",
    features: [
      "Energy-Efficient Operation",
      "Lower Maintenance Requirements",
      "Adaptable to Various Climates",
      "Consistent Air Exchange & Circulation",
    ],
  },
];

const GreenhouseSubPage = () => {
  return (
    <main className="bg-white min-h-screen">
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-semibold text-center mb-10 text-green-800">
          Greenhouse Solutions
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {greenhouseTypes.map((type) => (
            <div
              key={type.title}
              className="rounded-3xl overflow-hidden shadow-lg bg-white flex flex-col"
            >
              <img
                src={type.image}
                alt={type.title}
                className="w-full h-56 object-cover object-center"
              />
              <div className="p-6 flex-1 flex flex-col justify-between">
                <h2 className="text-2xl font-bold text-green-700 mb-2">
                  {type.title}
                </h2>
                <p className="text-gray-700 mb-4">
                  {type.description}
                </p>
                <ul className="mb-4">
                  {type.features.map((feature) => (
                    <li key={feature} className="text-green-600 text-sm mb-1 flex items-center">
                      <span className="mr-2">•</span>{feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/products">
            <span className="inline-block bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-lg text-base font-medium transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer">
              Back to Products
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default GreenhouseSubPage;
