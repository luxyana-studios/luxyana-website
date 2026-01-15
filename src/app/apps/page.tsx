'use client';

import Link from "next/link";

export default function Apps() {
  const apps = [
    {
      name: "App 1",
      category: "Learning",
      description: "Launching Month 3 - First app focusing on learning & entertainment",
      status: "coming-soon",
      icon: "📚",
    },
    {
      name: "App 2",
      category: "Learning",
      description: "Launching Month 4 - Continuing our learning-focused mission",
      status: "coming-soon",
      icon: "🎯",
    },
    {
      name: "App 3",
      category: "Productivity",
      description: "Launching Month 5 - Expanding into productivity tools",
      status: "coming-soon",
      icon: "⚡",
    },
    {
      name: "App 4",
      category: "Entertainment",
      description: "Launching Month 7 - Deeper entertainment experience",
      status: "coming-soon",
      icon: "🎮",
    },
    {
      name: "App 5",
      category: "Learning",
      description: "Launching Month 10 - Advanced learning platform",
      status: "coming-soon",
      icon: "🧠",
    },
    {
      name: "App 6",
      category: "Community",
      description: "Launching Month 12 - Community & social features",
      status: "coming-soon",
      icon: "👥",
    },
  ];

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
            <Link href="/apps" className="text-brand-primary font-semibold">Apps</Link>
            <Link href="/blog" className="hover:text-brand-primary transition">Blog</Link>
            <Link href="/contact" className="hover:text-brand-primary transition">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h1 className="text-5xl font-bold mb-4">Our Apps</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              We're building 6 quality-first, ethical apps in Year 1. Coming to iOS and Android.
            </p>
          </div>

          {/* Apps Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {apps.map((app, index) => (
              <div
                key={index}
                className="group p-8 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-brand-primary hover:shadow-lg transition"
              >
                <div className="text-5xl mb-4">{app.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{app.name}</h3>
                <p className="text-sm font-semibold text-brand-primary mb-2">{app.category}</p>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{app.description}</p>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-semibold">
                    {app.status === "coming-soon" ? "Coming Soon" : "Available"}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Timeline */}
          <div className="mb-16 p-8 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <h2 className="text-3xl font-bold mb-8">Launch Timeline</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-24 font-bold text-brand-primary">Month 3</div>
                <div>App 1 launches</div>
              </div>
              <div className="flex gap-4">
                <div className="w-24 font-bold text-brand-primary">Months 4-6</div>
                <div>Apps 2-3 launch (2 more apps)</div>
              </div>
              <div className="flex gap-4">
                <div className="w-24 font-bold text-brand-primary">Months 7-12</div>
                <div>Apps 4-6 launch (3 more apps)</div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">What You Can Expect</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg">
                <div className="text-3xl mb-2">✨</div>
                <h3 className="font-bold text-lg mb-2">Exceptional Design</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Thoughtful UX and attention to detail in every screen.</p>
              </div>
              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg">
                <div className="text-3xl mb-2">🚀</div>
                <h3 className="font-bold text-lg mb-2">Lightning Fast</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Optimized for performance and instant loading times.</p>
              </div>
              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg">
                <div className="text-3xl mb-2">🔒</div>
                <h3 className="font-bold text-lg mb-2">Privacy First</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Your data is yours. No sketchy tracking or selling data.</p>
              </div>
              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg">
                <div className="text-3xl mb-2">📱</div>
                <h3 className="font-bold text-lg mb-2">Cross-Platform</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Native iOS and Android apps using React Native.</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link href="/" className="px-6 py-3 bg-brand-primary text-white rounded-lg hover:bg-brand-secondary transition font-semibold">
              Back Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
