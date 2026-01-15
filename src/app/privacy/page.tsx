'use client';

import Link from 'next/link';
import Image from 'next/image';
import MobileMenu from '@/components/MobileMenu';

export default function Privacy() {
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
          <MobileMenu />
        </div>
      </nav>
        </div>
      </nav>

      {/* Content */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-3xl mx-auto prose dark:prose-invert">
          <h1>Privacy Policy</h1>

          <p>Last updated: 2024</p>

          <h2>Introduction</h2>
          <p>
            Luxyana ("we" or "us" or "our") operates the Luxyana website and
            apps. This page informs you of our policies regarding the
            collection, use, and disclosure of personal data when you use our
            services and the choices you have associated with that data.
          </p>

          <h2>Information Collection and Use</h2>
          <p>
            We collect several different types of information for various
            purposes to provide and improve our service to you.
          </p>

          <h3>Types of Data Collected</h3>
          <ul>
            <li>
              <strong>Personal Data:</strong> Email address (if you subscribe to
              our newsletter)
            </li>
            <li>
              <strong>Usage Data:</strong> Information about how you access and
              use our website
            </li>
            <li>
              <strong>Device Information:</strong> Device type, operating system
              version
            </li>
          </ul>

          <h2>Security of Your Data</h2>
          <p>
            The security of your data is important to us but remember that no
            method of transmission over the Internet or method of electronic
            storage is 100% secure. While we strive to use commercially
            acceptable means to protect your personal data, we cannot guarantee
            its absolute security.
          </p>

          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page
            and updating the "Last updated" date at the top of this Privacy
            Policy.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at hello@luxyana.com
          </p>

          <div className="mt-8 not-prose">
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
