import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-brand-light dark:from-brand-dark dark:to-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-brand-dark/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-brand-primary">
            Luxyana
          </Link>
          <div className="flex gap-8">
            <Link href="/about" className="hover:text-brand-primary transition">About</Link>
            <Link href="/apps" className="hover:text-brand-primary transition">Apps</Link>
            <Link href="/blog" className="hover:text-brand-primary transition">Blog</Link>
            <Link href="/contact" className="hover:text-brand-primary transition">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
            Quality Indie Apps
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Building lovable, ethical, quality-first indie apps that people actually love using.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-8 py-3 bg-brand-primary text-white rounded-lg hover:bg-brand-secondary transition font-semibold">
              Learn More
            </button>
            <button className="px-8 py-3 border-2 border-brand-primary text-brand-primary rounded-lg hover:bg-brand-primary hover:text-white transition font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Why Luxyana</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-bold mb-3">Quality First</h3>
              <p className="text-gray-600 dark:text-gray-400">
                No compromises on UX, performance, or reliability. Beautifully designed with attention to detail.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold mb-3">Ethical & Responsible</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Thoughtful use of AI and technology. Respect for your privacy and data.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3">Real Solutions</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Built for real problems people face. Focus on utility and genuine value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Apps Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Our Apps (Coming Soon)</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-lg bg-gradient-to-br from-brand-primary to-brand-secondary text-white">
              <h3 className="text-2xl font-bold mb-3">App #1</h3>
              <p className="mb-4">Coming in Month 3 of 2026</p>
              <p className="text-sm opacity-90">Building something special in Learning & Entertainment</p>
            </div>
            <div className="p-8 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
              <h3 className="text-2xl font-bold mb-3">More Apps Coming</h3>
              <p className="mb-4">6 apps planned for Year 1</p>
              <p className="text-sm">Follow us to stay updated</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-brand-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-lg mb-8 opacity-90">
            Get notified when we launch new apps and share our journey building indie apps.
          </p>
          <form className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 bg-brand-secondary text-brand-primary rounded-lg font-semibold hover:opacity-90 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-gray-400">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold mb-4">Luxyana</h3>
              <p className="text-sm">Quality indie apps that people actually love using.</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/apps">Apps</Link></li>
                <li><Link href="/about">About</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Community</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="https://twitter.com/luxyana" target="_blank">Twitter</a></li>
                <li><a href="https://github.com/luxyana-studios" target="_blank">GitHub</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/privacy">Privacy</Link></li>
                <li><Link href="/terms">Terms</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2026 Luxyana. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
