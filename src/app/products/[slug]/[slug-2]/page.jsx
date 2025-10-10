import { productData } from '../../data/productsData';
import { notFound } from 'next/navigation';
import Image from 'next/image';

export default function SubProductPage({ params }) {
  const { slug, "slug-2": subProductSlug } = params;
  
  // Get the main product category dynamically using slug
  const productCategory = productData.greenhouse;
  console.log(productData);
  if (!productCategory) return notFound();

  // Find the specific subproduct
  const subProduct = productCategory.subProducts?.find(
    (sp) => sp.slug === subProductSlug
  );
  if (!subProduct) return notFound();

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section with Banner */}
      <div className="relative h-[60vh] w-full">
        <Image
          src={subProduct.bannerImage}
          alt={subProduct.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {subProduct.title}
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto px-4">
              {subProduct.shortDescription}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Product Image and Features */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="relative h-[400px]">
            <Image
              src={subProduct.mainImage}
              alt={subProduct.title}
              fill
              className="object-contain"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Key Features</h2>
            <ul className="space-y-4">
              {subProduct.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2 text-green-600">•</span>
                  <span className="text-lg">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Detailed Content Sections */}
        <div className="space-y-12">
          {subProduct.content.map((section, index) => (
            <div key={index} className="border-b border-gray-200 pb-8">
              <h3 className="text-2xl font-bold mb-4">{section.heading}</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                {section.text}
              </p>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Interested in this solution?</h3>
          <p className="text-lg text-gray-700 mb-6">
            Contact us to learn more about how we can help you implement this solution.
          </p>
          <a
            href="/contact"
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </main>
  );
}

