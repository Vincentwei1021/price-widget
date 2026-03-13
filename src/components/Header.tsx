"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-white">
          <span className="text-2xl">📈</span>
          <span className="font-heading">PriceWidget</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/#generator" className="text-sm font-medium text-gray-600 transition-colors hover:text-emerald-600 dark:text-gray-400 dark:hover:text-emerald-400">
            Widget Generator
          </Link>
          <Link href="/blog" className="text-sm font-medium text-gray-600 transition-colors hover:text-emerald-600 dark:text-gray-400 dark:hover:text-emerald-400">
            Blog
          </Link>
          <Link href="/#faq" className="text-sm font-medium text-gray-600 transition-colors hover:text-emerald-600 dark:text-gray-400 dark:hover:text-emerald-400">
            FAQ
          </Link>
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100 md:hidden dark:text-gray-400 dark:hover:bg-gray-800"
          aria-label="Toggle menu"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <nav className="border-t border-gray-200 bg-white px-4 py-3 md:hidden dark:border-gray-800 dark:bg-gray-950">
          <div className="flex flex-col gap-3">
            <Link
              href="/#generator"
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-emerald-600 dark:text-gray-400"
            >
              Widget Generator
            </Link>
            <Link
              href="/blog"
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-emerald-600 dark:text-gray-400"
            >
              Blog
            </Link>
            <Link
              href="/#faq"
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-emerald-600 dark:text-gray-400"
            >
              FAQ
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
