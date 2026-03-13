export default function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-12 pt-20 sm:px-6 sm:pb-16 sm:pt-28">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-700 dark:border-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
          <span>📊</span>
          Free stock &amp; crypto widgets
        </div>

        <h1 className="font-heading text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl dark:text-white">
          Embed{" "}
          <span className="text-emerald-600 dark:text-emerald-400">
            Live Prices
          </span>{" "}
          on Any Website
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
          Generate beautiful, real-time stock and cryptocurrency price widgets
          in seconds. Customize the theme, copy the embed code, and paste it
          into your site. No sign-up required.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#generator"
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-emerald-700"
          >
            Create Your Widget
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
          <a
            href="/blog"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 shadow-sm transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
