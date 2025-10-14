// app/blog/[slug]/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FaFacebook, FaTwitter, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import { blogPosts } from '@/data/blog';
import { Metadata } from 'next';

// Type definitions
interface PageParams {
    params: Promise<{
        slug: string;
    }>;
}

// Generate static params for all blog posts
export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return {
            title: 'Post Not Found - PRABHA Agritech',
        };
    }

    return {
        title: `${post.title} - PRABHA Agritech Blog`,
        description: post.excerpt,
    };
}

export default async function BlogDetailPage({ params }: PageParams) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    const relatedPosts = blogPosts
        .filter((p) => p.slug !== post.slug && p.category === post.category)
        .slice(0, 3);

    return (
        <article className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative w-full h-[50vh] sm:h-[60vh] lg:h-[70vh] overflow-hidden">
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-12">
                    <div className="max-w-4xl mx-auto">
                        <div className="mb-4">
                            <span className="bg-emerald-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
                                {post.category}
                            </span>
                        </div>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                            {post.title}
                        </h1>
                        <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-sm sm:text-base text-white/90">
                            <span>{post.date}</span>
                            <span>•</span>
                            <span>{post.readTime}</span>
                            <span>•</span>
                            <span>By {post.author}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Blog Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
                {/* Author Info */}
                <div className="flex items-center gap-4 mb-8 sm:mb-12 p-4 sm:p-6 bg-gray-50 rounded-xl">
                    <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                            src={post.authorImage}
                            alt={post.author}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div>
                        <p className="font-semibold text-gray-900 text-sm sm:text-base">{post.author}</p>
                        <p className="text-xs sm:text-sm text-gray-600">Agricultural Expert at PRABHA Agritech</p>
                    </div>
                </div>

                {/* Article Content */}
                <div
                    className="prose prose-sm sm:prose-base lg:prose-lg max-w-none
                        prose-headings:font-bold prose-headings:text-gray-900
                        prose-h2:text-2xl sm:prose-h2:text-3xl prose-h2:mt-8 sm:prose-h2:mt-12 prose-h2:mb-4
                        prose-h3:text-xl sm:prose-h3:text-2xl prose-h3:mt-6 sm:prose-h3:mt-8 prose-h3:mb-3
                        prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4
                        prose-a:text-emerald-600 prose-a:no-underline hover:prose-a:underline
                        prose-strong:text-gray-900 prose-strong:font-semibold
                        prose-ul:my-4 prose-li:text-gray-700"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Tags */}
                <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-xs sm:text-sm hover:bg-emerald-50 hover:text-emerald-700 transition-colors cursor-pointer"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Share Buttons */}
                <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Share this article</h3>
                    <div className="flex flex-wrap gap-3">
                        <button
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                            aria-label="Share on Facebook"
                        >
                            <FaFacebook />
                        </button>
                        <button
                            className="px-4 py-2 bg-sky-500 text-white rounded-lg text-sm font-medium hover:bg-sky-600 transition-colors"
                            aria-label="Share on Twitter"
                        >
                            <FaTwitter />
                        </button>
                        <button
                            className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors"
                            aria-label="Share on WhatsApp"
                        >
                            <FaWhatsapp />
                        </button>
                        <button
                            className="px-4 py-2 bg-blue-700 text-white rounded-lg text-sm font-medium hover:bg-blue-800 transition-colors"
                            aria-label="Share on LinkedIn"
                        >
                            <FaLinkedinIn />
                        </button>
                    </div>
                </div>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
                <div className="bg-gray-50 py-12 sm:py-16 lg:py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">Related Articles</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                            {relatedPosts.map((relatedPost) => (
                                <Link
                                    href={`/blog/${relatedPost.slug}`}
                                    key={relatedPost.slug}
                                    className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                                >
                                    <div className="relative aspect-video w-full overflow-hidden">
                                        <Image
                                            src={relatedPost.image}
                                            alt={relatedPost.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="p-4 sm:p-6">
                                        <span className="text-xs sm:text-sm text-emerald-600 font-medium">
                                            {relatedPost.category}
                                        </span>
                                        <h3 className="text-base sm:text-lg font-bold text-gray-900 mt-2 mb-2 group-hover:text-emerald-600 transition-colors line-clamp-2">
                                            {relatedPost.title}
                                        </h3>
                                        <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">
                                            {relatedPost.excerpt}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-emerald-600 to-green-700 py-12 sm:py-16 lg:py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                        Ready to Transform Your Farm?
                    </h2>
                    <p className="text-base sm:text-lg text-white/90 mb-6 sm:mb-8">
                        Connect with PRABHA Agritech experts and discover innovative solutions for your agricultural needs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-emerald-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm sm:text-base"
                        >
                            Contact Us
                        </Link>
                        <Link
                            href="/services"
                            className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors text-sm sm:text-base"
                        >
                            Our Services
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    );
}