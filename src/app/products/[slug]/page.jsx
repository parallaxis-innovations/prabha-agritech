import { notFound } from "next/navigation";
import { productData } from "../data/productsData";
import Link from "next/link";

// Helper function to convert kebab-case to camelCase
function kebabToCamel(str) {
  return str.replace(/-./g, (match) => match.charAt(1).toUpperCase());
}

export default async function ProductDetail({ params }) {
  const { slug } = await params;
  
  // Remove -solutions suffix first, then convert to camelCase
  const cleanedSlug = slug.replace(/-solutions$/, "");
  const camelCaseKey = kebabToCamel(cleanedSlug);
  
  const category = productData[camelCaseKey];

  if (!category) return notFound();

  const subProducts = category.subProducts || [];

  return (
    <main className="bg-white">
      <section className="relative w-full h-[400px] flex items-center justify-center">
        <img
          src={subProducts[0]?.bannerImage || "https://via.placeholder.com/1200x400"}
          alt={category.name}
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">
            {category.name}
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl opacity-90">
            {category.description}
          </p>
        </div>
      </section>

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subProducts.map((subProduct) => (
            <Link
              key={subProduct.slug}
              href={`/products/${slug}/${subProduct.slug}`}
              className="relative group rounded-3xl overflow-hidden shadow-lg cursor-pointer transition-all duration-500 ease-out hover:scale-105"
              style={{ minHeight: 340 }}
            >
              <img
                src={subProduct.mainImage}
                alt={subProduct.title}
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/60 transition-all duration-500" />
              <div className="absolute left-0 bottom-0 p-6 md:p-8 z-10 w-full">
                <h3 className="text-white text-2xl md:text-3xl font-light mb-2 leading-tight transform group-hover:-translate-y-3 transition-transform duration-500 ease-out">
                  {subProduct.title}
                </h3>
                <div className="overflow-hidden h-0 group-hover:h-10 transition-all duration-500 ease-out">
                  <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out mt-2">
                    <span className="text-white text-base md:text-lg font-medium flex items-center gap-2">
                      View More →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}