import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Luxyana - Quality Indie Apps",
  description: "Building lovable, ethical, quality-first indie apps for learning and entertainment.",
  authors: [{ name: "David & James" }],
  metadataBase: new URL("https://luxyana.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  );
}
