'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center"
        aria-label="Toggle menu"
      >
        <span
          className={`w-6 h-0.5 bg-gray-900 dark:bg-white transition-all duration-300 ${
            isOpen ? 'rotate-45 translate-y-2' : ''
          }`}
        ></span>
        <span
          className={`w-6 h-0.5 bg-gray-900 dark:bg-white transition-all duration-300 ${
            isOpen ? 'opacity-0' : ''
          }`}
        ></span>
        <span
          className={`w-6 h-0.5 bg-gray-900 dark:bg-white transition-all duration-300 ${
            isOpen ? '-rotate-45 -translate-y-2' : ''
          }`}
        ></span>
      </button>

      {/* Overlay Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Dropdown Menu from Top */}
      <div
        className={`fixed top-16 left-0 right-0 bg-white/95 dark:bg-brand-dark/95 backdrop-blur-md z-50 md:hidden transform transition-all duration-300 ease-in-out shadow-2xl border-b border-gray-200 dark:border-gray-700 ${
          isOpen ? 'opacity-100 visible h-screen' : 'opacity-0 invisible h-0'
        }`}
      >
        {/* Menu Items */}
        <div className="flex flex-col gap-10 px-6 py-16 h-full justify-start">
          <Link
            href="/about"
            className="text-gray-900 dark:text-white hover:text-brand-primary transition font-bold text-2xl"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/apps"
            className="text-gray-900 dark:text-white hover:text-brand-primary transition font-bold text-2xl"
            onClick={() => setIsOpen(false)}
          >
            Apps
          </Link>
          <Link
            href="/blog"
            className="text-gray-900 dark:text-white hover:text-brand-primary transition font-bold text-2xl"
            onClick={() => setIsOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="text-gray-900 dark:text-white hover:text-brand-primary transition font-bold text-2xl"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}
