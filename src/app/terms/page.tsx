'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Terms() {
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
          <Link
            href="/"
            className="text-gray-900 dark:text-white hover:text-brand-primary transition"
          >
            Back Home
          </Link>
        </div>
      </nav>

      {/* Content */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-3xl mx-auto prose dark:prose-invert">
          <h1>Terms of Service</h1>

          <p>Last updated: 2024</p>

          <h2>Agreement to Terms</h2>
          <p>
            These Terms of Service ("Terms") constitute a legal agreement
            between you and Luxyana ("Company", "we", "us", or "our") concerning
            your use of our website and apps.
          </p>

          <h2>Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the
            materials (information or software) on Luxyana's website or apps for
            personal, non-commercial transitory viewing only. This is the grant
            of a license, not a transfer of title, and under this license you
            may not:
          </p>
          <ul>
            <li>Modify or copy the materials</li>
            <li>
              Use the materials for any commercial purpose or for any public
              display
            </li>
            <li>
              Attempt to decompile or reverse engineer any software contained on
              the website or apps
            </li>
            <li>
              Remove any copyright or other proprietary notations from the
              materials
            </li>
            <li>
              Transfer the materials to another person or "mirror" the materials
              on any other server
            </li>
          </ul>

          <h2>Disclaimer</h2>
          <p>
            The materials on Luxyana's website and apps are provided on an 'as
            is' basis. Luxyana makes no warranties, expressed or implied, and
            hereby disclaims and negates all other warranties including, without
            limitation, implied warranties or conditions of merchantability,
            fitness for a particular purpose, or non-infringement of
            intellectual property or other violation of rights.
          </p>

          <h2>Limitations</h2>
          <p>
            In no event shall Luxyana or its suppliers be liable for any damages
            (including, without limitation, damages for loss of data or profit,
            or due to business interruption) arising out of the use or inability
            to use the materials on Luxyana's website or apps.
          </p>

          <h2>Accuracy of Materials</h2>
          <p>
            The materials appearing on Luxyana's website and apps could include
            technical, typographical, or photographic errors. Luxyana does not
            warrant that any of the materials on its website or apps are
            accurate, complete, or current.
          </p>

          <h2>Links</h2>
          <p>
            Luxyana has not reviewed all of the sites linked to its website and
            is not responsible for the contents of any such linked site. The
            inclusion of any link does not imply endorsement by Luxyana of the
            site. Use of any such linked website is at the user's own risk.
          </p>

          <h2>Modifications</h2>
          <p>
            Luxyana may revise these Terms of Service for its website and apps
            at any time without notice. By using this website or apps, you are
            agreeing to be bound by the then current version of these Terms of
            Service.
          </p>

          <h2>Governing Law</h2>
          <p>
            These Terms and Conditions are governed by and construed in
            accordance with the laws of the jurisdiction in which Luxyana
            operates, and you irrevocably submit to the exclusive jurisdiction
            of the courts in that location.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about these Terms of Service, please
            contact us at hello@luxyana.com
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
