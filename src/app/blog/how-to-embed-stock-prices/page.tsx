import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "How to Embed Stock Prices on Your Website",
  description:
    "Learn how to embed live stock price widgets on your website with PriceWidget. Step-by-step guide with code examples for adding stock tickers to any site.",
  keywords: [
    "embed stock prices",
    "stock widget",
    "stock ticker widget",
    "website stock price",
    "embed stock ticker",
    "stock price widget HTML",
  ],
  alternates: {
    canonical: "/blog/how-to-embed-stock-prices",
  },
};

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Embed Stock Prices on Your Website",
  description:
    "A complete step-by-step guide to embedding live stock price widgets on any website using PriceWidget.",
  datePublished: "2026-03-01",
  dateModified: "2026-03-01",
  author: {
    "@type": "Organization",
    name: "PriceWidget",
  },
  publisher: {
    "@type": "Organization",
    name: "PriceWidget",
  },
};

export default function HowToEmbedStockPrices() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }}
      />
      <Header />
      <main className="dot-grid min-h-screen">
        <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 text-sm text-emerald-600 hover:text-emerald-700 dark:text-emerald-400"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
          </div>

          <header className="mb-10">
            <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
              <time dateTime="2026-03-01">March 1, 2026</time>
              <span>&middot;</span>
              <span>5 min read</span>
            </div>
            <h1 className="mt-3 font-heading text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
              How to Embed Stock Prices on Your Website
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              A step-by-step guide to adding real-time stock price widgets to any website — no coding experience required.
            </p>
          </header>

          <div className="prose prose-gray dark:prose-invert max-w-none [&_h2]:font-heading [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-gray-900 dark:[&_h2]:text-white [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:font-heading [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-gray-900 dark:[&_h3]:text-white [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:text-gray-600 dark:[&_p]:text-gray-400 [&_p]:mb-4 [&_p]:leading-7 [&_ul]:text-gray-600 dark:[&_ul]:text-gray-400 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:text-gray-600 dark:[&_ol]:text-gray-400 [&_ol]:mb-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_li]:leading-7 [&_code]:bg-gray-100 dark:[&_code]:bg-gray-800 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm [&_pre]:bg-gray-900 [&_pre]:text-gray-300 [&_pre]:p-4 [&_pre]:rounded-lg [&_pre]:overflow-x-auto [&_pre]:mb-4 [&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_strong]:text-gray-900 dark:[&_strong]:text-white">
            <p>
              Displaying live stock prices on your website is one of the most effective ways to keep visitors engaged — especially if you run a financial blog, investment newsletter, or portfolio tracker. Instead of linking to external finance sites, you can embed a clean, real-time stock price widget directly on your page. In this guide, we will walk through exactly how to do that using <strong>PriceWidget</strong>, a free stock widget generator that makes the entire process effortless.
            </p>

            <h2>Why Embed Stock Prices on Your Website?</h2>

            <p>
              Adding a stock ticker widget to your website offers several advantages. First, it keeps your visitors on your site longer by providing the financial data they are looking for without redirecting them to Yahoo Finance or Google. Second, live price data adds credibility to your content — readers trust a site that shows current, accurate market information. Third, a well-designed stock widget enhances the user experience and makes your site feel more professional and polished.
            </p>

            <p>
              Whether you write about individual stocks like Apple (AAPL) and Tesla (TSLA), or you cover broader market trends, an embedded stock price widget creates a dynamic, constantly-updated element that gives your pages a fresh feel even between content updates.
            </p>

            <h2>What You Need Before You Start</h2>

            <p>
              The good news is that you do not need any technical expertise or development tools to embed a stock widget. All you need is:
            </p>

            <ul>
              <li>A website where you can edit the HTML (WordPress, Squarespace, Wix, a static HTML site, or any CMS)</li>
              <li>The stock ticker symbol you want to display (for example, AAPL for Apple, MSFT for Microsoft, or GOOGL for Alphabet)</li>
              <li>A free widget generator like <Link href="/" className="text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300">PriceWidget</Link></li>
            </ul>

            <p>
              That is it. No API keys to manage, no JavaScript libraries to install, and no server-side configuration. The entire process works through a simple HTML iframe tag.
            </p>

            <h2>Step 1: Choose Your Stock Ticker Symbol</h2>

            <p>
              Every publicly traded stock has a unique ticker symbol. For example, Apple is AAPL, Amazon is AMZN, Google&rsquo;s parent company Alphabet is GOOGL, and Tesla is TSLA. If you are unsure of a company&rsquo;s ticker, a quick search on any financial site will give you the answer.
            </p>

            <p>
              PriceWidget also supports cryptocurrency tickers. Bitcoin is listed as BTC-USD, Ethereum as ETH-USD, and Solana as SOL-USD. You can generate widgets for both stocks and crypto using the same tool.
            </p>

            <h2>Step 2: Generate Your Widget with PriceWidget</h2>

            <p>
              Head to the <Link href="/#generator" className="text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300">PriceWidget Generator</Link> on our homepage. Type your desired ticker symbol into the search box and click &ldquo;Search.&rdquo; The tool will fetch the latest price data and render a preview of your widget, including:
            </p>

            <ul>
              <li>The current stock price in the native currency</li>
              <li>The daily price change (absolute amount and percentage)</li>
              <li>A sparkline chart showing the price trend over the last 30 days</li>
              <li>The company or cryptocurrency name</li>
              <li>A timestamp showing when the data was last updated</li>
            </ul>

            <h2>Step 3: Customize the Widget Appearance</h2>

            <p>
              PriceWidget offers two customization options to help the widget blend with your site design:
            </p>

            <h3>Theme Selection</h3>

            <p>
              Choose between a <strong>light theme</strong> (white background, dark text) and a <strong>dark theme</strong> (dark background, light text). The light theme works best on websites with white or light-colored backgrounds, while the dark theme is ideal for sites with darker color schemes. Pick whichever matches your site&rsquo;s aesthetic.
            </p>

            <h3>Size Options</h3>

            <p>
              You can select from three sizes: <strong>Small</strong> (280px wide), <strong>Medium</strong> (340px wide), and <strong>Large</strong> (420px wide). The small size is great for sidebars, the medium size works well in content columns, and the large size is ideal for featured placements or hero sections.
            </p>

            <h2>Step 4: Copy and Paste the Embed Code</h2>

            <p>
              Once you are happy with the preview, click the <strong>&ldquo;Copy Embed Code&rdquo;</strong> button. This copies an HTML iframe snippet to your clipboard. The code looks like this:
            </p>

            <pre><code>{`<iframe
  src="https://price.toolboxlite.com/widget/AAPL?theme=light&size=md"
  width="340"
  height="180"
  frameborder="0"
  style="border-radius:12px;overflow:hidden;"
  title="Apple Inc. Price Widget"
></iframe>`}</code></pre>

            <p>
              Paste this snippet into your website&rsquo;s HTML wherever you want the widget to appear. In WordPress, you can use a &ldquo;Custom HTML&rdquo; block. In Squarespace, use the &ldquo;Code&rdquo; block. In a static HTML file, paste it directly into the body of your page.
            </p>

            <h2>Step 5: Verify and Publish</h2>

            <p>
              After pasting the embed code, preview your page to make sure the widget renders correctly. The widget is fully responsive within its iframe and will auto-refresh the price data every 60 seconds, so your visitors always see current market information without needing to reload the page.
            </p>

            <p>
              If you want to change the ticker, theme, or size later, simply generate a new embed code and replace the old iframe snippet. There is no limit on how many widgets you can embed — add one per stock, or create a dashboard layout with multiple widgets side by side.
            </p>

            <h2>Best Practices for Stock Price Widgets</h2>

            <ul>
              <li><strong>Match the theme to your site.</strong> A mismatched widget looks out of place. Use the dark theme on dark sites and the light theme on light sites.</li>
              <li><strong>Place widgets where they add value.</strong> Position stock widgets near relevant content — next to stock analysis articles, inside portfolio pages, or in a dedicated market data section.</li>
              <li><strong>Use appropriate sizes.</strong> Do not force a large widget into a narrow sidebar. Choose the size that fits the container naturally.</li>
              <li><strong>Combine stocks and crypto.</strong> If your audience is interested in both traditional markets and crypto, embed widgets for each to create a comprehensive price dashboard.</li>
              <li><strong>Keep it minimal.</strong> One or two well-placed widgets are more effective than a wall of tickers. Focus on the stocks and cryptos most relevant to your audience.</li>
            </ul>

            <h2>Conclusion</h2>

            <p>
              Embedding stock prices on your website has never been simpler. With PriceWidget, the entire process takes less than a minute: search for a ticker, customize the widget, copy the embed code, and paste it into your site. The widget handles everything else — real-time price updates, responsive sizing, and a clean, professional design.
            </p>

            <p>
              Ready to get started? <Link href="/#generator" className="text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300">Try the PriceWidget Generator now</Link> and add live stock prices to your website today.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
