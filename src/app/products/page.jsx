import Link from "next/link";

const products = [
	{
		title: "Greenhouse Solutions",
		image:
			"/products/green-house/greenhouse-polycarbonate.png",
	},
	// {
	// 	title: "Soilless & Cocopeat",
	// 	image:
	// 		"https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
	// },
	{
		title: "Hydroponics",
		image:
			"/image/services/hydroponics.png",
	},
	{
		title: "Solar Dehydrator",
		image:
			"https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
	},
	{
		title: "Farm Equipment",
		image:
			"https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
	},
	{
		title: "Smart Technology",
		image:
			"/image/services/technology.png",
	},
];

const ProductsPage = () => {
	return (
		<main className="bg-white">
			{/* Hero Section */}
			<section className="relative w-full h-[400px] md:h-[600px] flex items-center justify-center bg-gray-900">
				<div className="absolute inset-0 w-full h-full">
					<img
						src="/products/product-banner.png"
						alt="Products Banner"
						className="w-full h-full object-cover brightness-75"
					/>
				</div>
				<div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center px-4">
					<h1 className="text-white text-4xl md:text-5xl font-semibold mb-4">
						Product & Systems
					</h1>
					<p className="text-white text-lg md:text-xl max-w-2xl mx-auto">
						Since 2025, Prabha Agritech has been at the forefront of controlled
						environment agriculture, transforming how crops are grown through
						sustainable and efficient technologies.
					</p>
				</div>
			</section>

			{/* Products Grid */}
			<section className="py-16 px-4 mt-10 container mx-auto">
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
					{products.map((product) => {
						const slug = product.title.toLowerCase().replace(/ /g, "-").replace(/&/g, "and");
						return (
							<Link
								key={product.title}
								href={`/products/${slug}`}
								className="relative group rounded-3xl overflow-hidden shadow-lg cursor-pointer transition-all duration-500 ease-out hover:scale-105"
								style={{ minHeight: 340 }}
							>
								<img
									src={product.image}
									alt={product.title}
									className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/60 transition-all duration-500" />
								<div className="absolute left-0 bottom-0 p-6 md:p-8 z-10 w-full">
									<h3 className="text-white text-2xl md:text-3xl font-light mb-2 leading-tight transform group-hover:-translate-y-3 transition-transform duration-500 ease-out">
										{product.title}
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
						);
					})}
				</div>

                {/* Newsletter/CTA Section */}
			<section className="py-16 px-4 container mx-auto  mt-10">
				<div
					className="relative rounded-3xl overflow-hidden shadow-2xl"
					style={{ minHeight: 400 }}
				>
					{/* Background Image */}
					<img
						src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1600&q=80"
						alt="Agricultural landscape"
						className="absolute inset-0 w-full h-full object-cover object-center"
					/>

					{/* Overlay */}
					<div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30" />

					{/* Content */}
					<div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 py-20 md:py-24">
						<h2 className="text-white text-3xl md:text-5xl font-light mb-4 max-w-3xl leading-tight">
							Grow something
							<br />
							great together.
						</h2>
						<p className="text-white text-base md:text-lg mb-8 max-w-2xl mx-auto opacity-90">
							Whether you're a farmer, distributor, or partner, we're here to
							support your
							<br className="hidden md:block" />
							goals with sustainable solutions and global expertise.
						</p>
                        <Link href="/contact">
						<button className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-lg text-base md:text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg">
							Let's Grow Together
						</button>
                        </Link>
					</div>
				</div>
			</section>
			</section>
		</main>
	);
};

export default ProductsPage;
