import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Luxyana - Quality Indie Apps',
  description:
    'Building lovable, ethical, quality-first indie apps for learning and entertainment.',
  authors: [{ name: 'David & James' }],
  metadataBase: new URL('https://luxyana.com'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased relative min-h-screen bg-gradient-to-br from-white to-brand-light dark:from-brand-dark dark:to-gray-900">
        {/* Global Blurred Background Glows */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-brand-secondary/20 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>
          <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-brand-primary/15 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
