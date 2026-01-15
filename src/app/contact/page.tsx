'use client';

import Link from "next/link";

export default function Contact() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-brand-light dark:from-brand-dark dark:to-gray-900">
      {/* Header */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-brand-dark/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-brand-primary">
            Luxyana
          </Link>
          <div className="flex gap-8">
            <Link href="/about" className="hover:text-brand-primary transition">About</Link>
            <Link href="/apps" className="hover:text-brand-primary transition">Apps</Link>
            <Link href="/blog" className="hover:text-brand-primary transition">Blog</Link>
            <Link href="/contact" className="text-brand-primary font-semibold">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-8">Get In Touch</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-16">
            We'd love to hear from you. Connect with us on social media, via email, or subscribe to our newsletter.
          </p>

          {/* Connect Sections */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Newsletter */}
            <div className="p-8 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
              <div className="text-4xl mb-4">📧</div>
              <h2 className="text-2xl font-bold mb-4">Newsletter</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Get monthly updates on new apps, learnings, and progress toward 10,000 users.
              </p>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-primary"
                />
                <button
                  type="submit"
                  className="w-full px-4 py-3 bg-brand-primary text-white rounded-lg font-semibold hover:bg-brand-secondary transition"
                >
                  Subscribe
                </button>
              </form>
            </div>

            {/* Social Media */}
            <div className="p-8 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
              <div className="text-4xl mb-4">🌐</div>
              <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Connect with us on social media for daily updates and behind-the-scenes content.
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 bg-brand-primary text-white rounded-lg text-center font-semibold hover:bg-brand-secondary transition"
                >
                  Follow on Twitter
                </a>
                <a
                  href="https://github.com/luxyana-studios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg text-center font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                >
                  Follow on GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Direct Email */}
          <div className="p-8 rounded-lg border-2 border-brand-primary bg-brand-primary/5 mb-16">
            <h2 className="text-2xl font-bold mb-4">Direct Email</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              For inquiries, partnerships, or just to say hello:
            </p>
            <a
              href="mailto:hello@luxyana.com"
              className="inline-block px-6 py-3 bg-brand-primary text-white rounded-lg font-semibold hover:bg-brand-secondary transition"
            >
              hello@luxyana.com
            </a>
          </div>

          {/* Quick Links */}
          <div className="p-8 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold mb-6">Resources</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <a
                href="https://github.com/luxyana-studios/luxyana-business-plan"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-brand-primary hover:bg-brand-primary/5 transition text-center"
              >
                <div className="font-semibold text-brand-primary">📋 Business Plan</div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">See our Year 1 goals and strategy</p>
              </a>
              <a
                href="/"
                className="p-4 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-brand-primary hover:bg-brand-primary/5 transition text-center"
              >
                <div className="font-semibold text-brand-primary">🏠 Homepage</div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Back to home</p>
              </a>
              <a
                href="/apps"
                className="p-4 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-brand-primary hover:bg-brand-primary/5 transition text-center"
              >
                <div className="font-semibold text-brand-primary">📱 Our Apps</div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">See what we're building</p>
              </a>
              <a
                href="/blog"
                className="p-4 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-brand-primary hover:bg-brand-primary/5 transition text-center"
              >
                <div className="font-semibold text-brand-primary">📝 Blog</div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Read our updates</p>
              </a>
            </div>
          </div>

          {/* Legal Links */}
          <div className="mt-16 text-center space-y-4">
            <div className="flex gap-4 justify-center">
              <a href="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-brand-primary transition">
                Privacy Policy
              </a>
              <span className="text-gray-400">•</span>
              <a href="/terms" className="text-gray-600 dark:text-gray-400 hover:text-brand-primary transition">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
