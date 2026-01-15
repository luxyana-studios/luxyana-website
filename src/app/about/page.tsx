'use client';

import Link from 'next/link';
import Image from 'next/image';
import MobileMenu from '@/components/MobileMenu';

export default function About() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-brand-dark/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center relative">
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
            <Link href="/about" className="text-brand-primary font-semibold">
              About
            </Link>
            <Link
              href="/apps"
              className="text-gray-900 dark:text-white hover:text-brand-primary transition"
            >
              Apps
            </Link>
            <Link
              href="/blog"
              className="text-gray-900 dark:text-white hover:text-brand-primary transition"
            >
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
          <h1 className="text-5xl font-bold mb-8 dark:text-white">
            About Luxyana
          </h1>

          {/* Story */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 dark:text-white">
              Our Story
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-100 mb-4">
              David and James are experienced React Native developers who
              decided now is the right moment to build their own products.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-100 mb-4">
              After 3 years of professional development, we realized that the
              best way to create products we truly believe in is to own them
              ourselves.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-100">
              Luxyana was born from a passion for quality, ethics in technology,
              and creating apps that genuinely solve real problems.
            </p>
          </div>

          {/* Mission */}
          <div className="mb-16 p-8 bg-brand-primary/10 rounded-lg border-l-4 border-brand-primary">
            <h2 className="text-3xl font-bold mb-4 dark:text-white">
              Our Mission
            </h2>
            <p className="text-lg font-semibold text-brand-primary">
              Build lovable, ethical, quality-first indie apps that make a real
              difference in people's lives.
            </p>
          </div>

          {/* Team */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 dark:text-white">
              Meet the Team
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="text-5xl mb-4">👨‍💻</div>
                <h3 className="text-2xl font-bold mb-2 dark:text-white">
                  David
                </h3>
                <p className="text-gray-600 dark:text-gray-100 mb-3">
                  Co-founder, Developer
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-100">
                  3 years React Native. Full-stack: Frontend, Backend, DevOps.
                  Architecture enthusiast.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="text-5xl mb-4">👨‍💻</div>
                <h3 className="text-2xl font-bold mb-2 dark:text-white">
                  James
                </h3>
                <p className="text-gray-600 dark:text-gray-100 mb-3">
                  Co-founder, Developer
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-100">
                  3 years React Native. Full-stack: Frontend, Backend, DevOps.
                  Product thinker.
                </p>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 dark:text-white">
              Our Values
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg">
                <h3 className="font-bold text-lg mb-2 dark:text-white">
                  Quality First
                </h3>
                <p className="text-gray-600 dark:text-gray-100 text-sm">
                  No compromises on UX, performance, or reliability.
                </p>
              </div>
              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg">
                <h3 className="font-bold text-lg mb-2 dark:text-white">
                  Ethical & Responsible
                </h3>
                <p className="text-gray-600 dark:text-gray-100 text-sm">
                  Thoughtful use of technology. Respect user privacy.
                </p>
              </div>
              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg">
                <h3 className="font-bold text-lg mb-2 dark:text-white">
                  Problem-Solving
                </h3>
                <p className="text-gray-600 dark:text-gray-100 text-sm">
                  Build for real problems. Focus on genuine value.
                </p>
              </div>
              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg">
                <h3 className="font-bold text-lg mb-2 dark:text-white">
                  Indie Spirit
                </h3>
                <p className="text-gray-600 dark:text-gray-100 text-sm">
                  Authentic, long-term thinking. Build what we're proud of.
                </p>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-4">
            <Link
              href="/"
              className="px-6 py-3 bg-brand-primary text-white rounded-lg hover:bg-brand-secondary transition font-semibold"
            >
              Back Home
            </Link>
            <a
              href="https://github.com/luxyana-studios/luxyana-business-plan"
              target="_blank"
              className="px-6 py-3 border-2 border-brand-primary text-brand-primary rounded-lg hover:bg-brand-primary hover:text-white transition font-semibold"
            >
              View Business Plan
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
