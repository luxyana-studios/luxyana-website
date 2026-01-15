'use client';

import Link from 'next/link';
import Image from 'next/image';
import MobileMenu from '@/components/MobileMenu';

export default function Blog() {
  const posts = [
    {
      title: "Why We're Building Apps",
      excerpt:
        "After 3 years of professional development, we decided to build our own products. Here's why.",
      date: 'Coming Soon',
      slug: 'why-we-are-building-apps',
      readTime: '5 min read',
    },
    {
      title: "Our First App: What We're Learning",
      excerpt:
        'Building our first app taught us a lot about users, design, and what it takes to ship quality.',
      date: 'Coming Soon',
      slug: 'first-app-learnings',
      readTime: '7 min read',
    },
    {
      title: 'Ethical Indie App Development',
      excerpt:
        "How we're approaching app development with ethics at the forefront, not as an afterthought.",
      date: 'Coming Soon',
      slug: 'ethical-indie-development',
      readTime: '8 min read',
    },
    {
      title: "The Indie Developer's Playbook",
      excerpt:
        'Strategic decisions we made to bootstrap 6 apps in Year 1 without external funding.',
      date: 'Coming Soon',
      slug: 'indie-developer-playbook',
      readTime: '10 min read',
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Header */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-brand-dark/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition"
          >
            <Image
              src="/panda.jpeg"
              alt="Luxyana"
              width={40}
              height={40}
              className="w-10 h-10 rounded-full"
            />
            <span className="text-2xl font-bold text-brand-primary">
              Luxyana
            </span>
          </Link>
          <div className="hidden md:flex gap-8">
            <Link
              href="/about"
              className="text-gray-900 dark:text-white hover:text-brand-primary transition"
            >
              About
            </Link>
            <Link
              href="/apps"
              className="text-gray-900 dark:text-white hover:text-brand-primary transition"
            >
              Apps
            </Link>
            <Link href="/blog" className="text-brand-primary font-semibold">
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-gray-900 dark:text-white hover:text-brand-primary transition"
            >
              Contact
            </Link>
          </div>
          <MobileMenu />
        </div>
      </nav>

      {/* Content */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="mb-16">
            <h1 className="text-5xl font-bold mb-4 dark:text-white">Blog</h1>
            <p className="text-xl text-gray-600 dark:text-gray-100">
              Follow our journey building 6 apps in Year 1. We share learnings,
              challenges, and wins.
            </p>
          </div>

          {/* Posts */}
          <div className="space-y-8">
            {posts.map((post, index) => (
              <article
                key={index}
                className="p-8 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-brand-primary hover:shadow-lg transition group"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-2xl font-bold group-hover:text-brand-primary transition dark:text-white">
                      {post.title}
                    </h2>
                  </div>
                  <span className="text-sm font-semibold px-3 py-1 bg-brand-primary/10 text-brand-primary rounded-full whitespace-nowrap">
                    {post.date}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-100 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex gap-4 items-center">
                  <span className="text-sm text-gray-500">
                    📖 {post.readTime}
                  </span>
                  <button className="text-brand-primary font-semibold hover:text-brand-secondary transition">
                    Read More →
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter CTA */}
          <div className="mt-16 p-8 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-lg text-white">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="mb-6">
              Subscribe to our newsletter to get updates about new apps, blog
              posts, and our journey.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="your@email.com"
                required
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-brand-primary rounded-lg font-semibold hover:bg-brand-light transition"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Links */}
          <div className="mt-16 text-center">
            <Link
              href="/"
              className="px-6 py-3 bg-brand-primary text-white rounded-lg hover:bg-brand-secondary transition font-semibold"
            >
              Back Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
