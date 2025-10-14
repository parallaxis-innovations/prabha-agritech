// app/blog/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts, categories } from '@/data/blog';
import type { Metadata } from 'next';
import type { BlogPost } from '@/data/blog';

export const metadata: Metadata = {
  title: 'Blog - PRABHA Agritech',
  description:
    'Latest insights, stories, and updates on agricultural technology, sustainable farming practices, and innovations in agriculture.',
};

export default function BlogPage() {
  return (
    <section className="min-h-screen bg-white">
      {/* Video Hero Section */}
      <div className="relative w-full h-[60vh] sm:h-[70vh] lg:h-screen overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/video/farming.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex items-center justify-center h-full px-4">
          <div className="text-center max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6">
              Our Blog
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90">
              Insights, stories, and updates on agricultural technology and sustainable farming practices
            </p>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="lg:mx-20 mx-6 px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-8 sm:mb-12">
          {categories.map((category: string) => (
            <button
              key={category}
              className="px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base rounded-full border border-earth-green text-earth-green hover:bg-earth-green hover:text-white transition-colors"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {blogPosts.map((post: BlogPost) => (
            <Link
              href={`/blog/${post.slug}`}
              key={post.slug}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-earth-green text-white px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-500 mb-3">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-earth-green transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm text-gray-500">By {post.author}</span>
                  <span className="text-earth-green font-semibold text-sm">
                    Read More →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="py-8 sm:py-12 lg:py-20 px-4 sm:px-6 lg:px-12 bg-gradient-to-br from-emerald-50 to-green-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Stay Updated with PRABHA
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
            Subscribe to our newsletter for the latest insights on sustainable agriculture, farming innovations, and industry trends delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm sm:text-base"
            />
            <button className="px-6 sm:px-8 py-3 sm:py-4 bg-earth-green text-white hover:bg-sunrise-gold hover:text-dark transition-all duration-300 rounded-lg font-semibold text-sm sm:text-base whitespace-nowrap">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
