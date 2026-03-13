import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog — Stock & Crypto Widget Guides",
  description:
    "Learn how to embed stock prices, cryptocurrency tickers, and financial widgets on your website. Tutorials, comparisons, and best practices.",
  alternates: {
    canonical: "/blog",
  },
};

const posts = [
  {
    slug: "how-to-embed-stock-prices",
    title: "How to Embed Stock Prices on Your Website",
    description:
      "A step-by-step guide to adding live stock price widgets to any website using PriceWidget. Covers HTML embed codes, customization options, and best practices.",
    date: "2026-03-01",
    readTime: "5 min read",
  },
  {
    slug: "best-crypto-widgets",
    title: "Best Cryptocurrency Widgets for Your Blog in 2026",
    description:
      "Compare the top cryptocurrency price widgets available in 2026. Find the best Bitcoin, Ethereum, and altcoin widgets for your blog or website.",
    date: "2026-03-05",
    readTime: "6 min read",
  },
];

export default function BlogIndex() {
  return (
    <>
      <Header />
      <main className="dot-grid min-h-screen">
        <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="text-center">
            <h1 className="font-heading text-4xl font-bold text-gray-900 dark:text-white">
              Blog
            </h1>
            <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">
              Guides and tips for embedding financial data on your website.
            </p>
          </div>

          <div className="mt-12 space-y-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
              >
                <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <span>&middot;</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="mt-2 font-heading text-xl font-semibold text-gray-900 dark:text-white">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-emerald-600 dark:hover:text-emerald-400"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  {post.description}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
                >
                  Read more
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
