import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
    title: 'Prabha Shroom — PRABHA Agritech',
    description: 'Advanced mushroom cultivation, R&D, and comprehensive training programs for sustainable agriculture.',
};

export default function PrabhaShroomPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative h-[60vh] bg-gray-900">
                <Image
                    src="/image/services/mushroom.png"
                    alt="Mushroom Cultivation"
                    fill
                    className="object-cover opacity-70"
                    priority
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Prabha Shroom</h1>
                        <p className="text-xl md:text-2xl">Growing nutrition, farming the future of nutritional protein</p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Service Description */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mushroom Cultivation Services</h2>
                    <div className="prose max-w-none">
                        <p className="text-gray-700 mb-8">
                            Mushrooms are more than a crop — they are a sustainable food revolution. At Prabha
                            Shroom, we specialize in the cultivation, processing, and training of high-yield Oyster
                            and Button mushrooms using controlled, eco-friendly techniques. Our model is
                            designed to help farmers, entrepreneurs, and rural youth establish profitable
                            mushroom units with minimal investment and maximum efficiency. "From waste to
                            wealth — we turn straw and sunlight into food and fortune."
                        </p>
                        
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Benefits</h3>
                        <ul className="space-y-2 mb-8">
                            <li className="flex items-center text-gray-600">
                                <svg className="w-5 h-5 text-emerald-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                End-to-end cultivation solutions
                            </li>
                            <li className="flex items-center text-gray-600">
                                <svg className="w-5 h-5 text-emerald-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                Training in environmental control
                            </li>
                            <li className="flex items-center text-gray-600">
                                <svg className="w-5 h-5 text-emerald-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                Pest management expertise
                            </li>
                            <li className="flex items-center text-gray-600">
                                <svg className="w-5 h-5 text-emerald-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                Marketing support for local branding
                            </li>
                            <li className="flex items-center text-gray-600">
                                <svg className="w-5 h-5 text-emerald-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                Ideal for limited land and water resources
                            </li>
                        </ul>

                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Specifications</h3>
                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h4 className="font-semibold mb-2">Production Focus</h4>
                                <p>Oyster and Button mushrooms</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h4 className="font-semibold mb-2">Technology</h4>
                                <p>Controlled eco-friendly techniques</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h4 className="font-semibold mb-2">Setup Type</h4>
                                <p>Small shed to commercial scale</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h4 className="font-semibold mb-2">Support</h4>
                                <p>Complete cultivation cycle guidance</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h4 className="font-semibold mb-2">Unique Feature</h4>
                                <p>Waste to wealth conversion</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Recipe Section */}
                <div className="bg-gray-50 rounded-xl p-8 mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Delicious Oyster Mushroom Recipe</h2>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="space-y-4">
                            <p className="text-gray-600">
                                Discover the delightful taste of oyster mushrooms with our simple yet flavorful recipe.
                                These nutritious mushrooms are not only delicious but also packed with health benefits.
                            </p>
                            <div className="space-y-2">
                                <h3 className="text-xl font-semibold text-gray-800">Key Ingredients:</h3>
                                <ul className="list-disc list-inside text-gray-600 ml-4">
                                    <li>Fresh Oyster Mushrooms</li>
                                    <li>Garlic and Herbs</li>
                                    <li>Olive Oil</li>
                                    <li>Salt and Pepper to taste</li>
                                </ul>
                            </div>
                            <Link
                                href="https://youtu.be/uW4QdfGG2xs?si=IEXuM3W0wQGkS7-A"
                                target="_blank"
                                className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors"
                            >
                                <span>Watch Recipe Video</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                </svg>
                            </Link>
                        </div>
                        <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                            <Image
                                src="/image/services/mashroom-recipe.jpg"
                                alt="Oyster Mushroom Recipe"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
                {/* <div className="bg-gray-50 rounded-xl p-8 mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Delicious Oyster Mushroom Recipe</h2>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="space-y-4">
                            <p className="text-gray-600">
                                Discover the delightful taste of oyster mushrooms with our simple yet flavorful recipe.
                                These nutritious mushrooms are not only delicious but also packed with health benefits.
                            </p>
                            <div className="space-y-2">
                                <h3 className="text-xl font-semibold text-gray-800">Key Ingredients:</h3>
                                <ul className="list-disc list-inside text-gray-600 ml-4">
                                    <li>Fresh Oyster Mushrooms</li>
                                    <li>Garlic and Herbs</li>
                                    <li>Olive Oil</li>
                                    <li>Salt and Pepper to taste</li>
                                </ul>
                            </div>
                            <Link
                                href="https://youtu.be/uW4QdfGG2xs?si=IEXuM3W0wQGkS7-A"
                                target="_blank"
                                className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors"
                            >
                                <span>Watch Recipe Video</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                </svg>
                            </Link>
                        </div>
                        <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                            <Image
                                src="/image/blog/mushroom-guide.jpg"
                                alt="Oyster Mushroom Recipe"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div> */}

                {/* Contact Section */}
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Start Your Mushroom Farming Journey</h2>
                    <p className="text-gray-600 mb-8">
                        Contact us to learn more about our mushroom cultivation services and training programs.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center px-8 py-3 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors"
                    >
                        Contact Us
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
}
