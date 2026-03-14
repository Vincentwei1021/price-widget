import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WidgetGenerator from "@/components/WidgetGenerator";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const SITE_URL = "https://price.toolboxlite.com";

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is PriceWidget?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PriceWidget is a free tool that lets you generate embeddable stock and cryptocurrency price widgets for your website. Simply search for a ticker symbol, customize the appearance, and copy the embed code to add live prices to any webpage.",
      },
    },
    {
      "@type": "Question",
      name: "Which stocks and cryptocurrencies are supported?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PriceWidget supports thousands of stocks listed on major exchanges (NYSE, NASDAQ, etc.) as well as popular cryptocurrencies like Bitcoin (BTC), Ethereum (ETH), Solana (SOL), and many more.",
      },
    },
    {
      "@type": "Question",
      name: "Is PriceWidget free to use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, PriceWidget is completely free. You can generate and embed as many widgets as you need on your websites without any cost or sign-up requirement.",
      },
    },
    {
      "@type": "Question",
      name: "How do I embed a widget on my website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: 'Use the widget generator to search for a ticker, customize the theme and size, then click "Copy Embed Code." Paste the HTML iframe snippet into your website and the widget will display live price data automatically.',
      },
    },
    {
      "@type": "Question",
      name: "How often do prices update?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Widget prices refresh automatically every 60 seconds when the embed page is loaded in a browser. The data includes the current price, daily change, change percentage, and a 30-day sparkline chart.",
      },
    },
    {
      "@type": "Question",
      name: "Can I customize the widget appearance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! You can choose between light and dark themes, and select from three sizes (small, medium, large). The widget is designed to blend seamlessly with any website design.",
      },
    },
  ],
};

const webAppStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "PriceWidget",
  description:
    "Generate embeddable stock and cryptocurrency price widgets for your website. Real-time prices, customizable themes, and easy embed code.",
  url: SITE_URL,
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Real-time stock prices",
    "Cryptocurrency price tracking",
    "Customizable light and dark themes",
    "Multiple widget sizes",
    "One-click embed code",
    "30-day sparkline charts",
    "Auto-refreshing data",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <Header />
      <main className="dot-grid min-h-screen">
        <Hero />
        <WidgetGenerator />

        {/* Features Section */}
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="text-center">
            <h2 className="font-heading text-3xl font-bold text-gray-900 dark:text-white">
              Why PriceWidget?
            </h2>
            <p className="mt-3 text-gray-600 dark:text-gray-400">
              Everything you need to display financial data on your website.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: "⚡",
                title: "Real-Time Prices",
                description:
                  "Live stock and crypto prices that auto-refresh every 60 seconds. Always up to date.",
              },
              {
                icon: "🎨",
                title: "Customizable Themes",
                description:
                  "Choose light or dark themes with multiple size options to match your website design.",
              },
              {
                icon: "📋",
                title: "Easy Embed",
                description:
                  "Copy a single line of HTML and paste it anywhere. Works with any website or CMS.",
              },
              {
                icon: "💹",
                title: "Stocks + Crypto",
                description:
                  "Support for thousands of stock tickers and all major cryptocurrencies in one tool.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
              >
                <div className="mb-3 text-3xl">{feature.icon}</div>
                <h3 className="font-heading text-lg font-semibold text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="text-center">
            <h2 className="font-heading text-3xl font-bold text-gray-900 dark:text-white">
              About PriceWidget
            </h2>
            <div className="mt-6 space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                PriceWidget was built to solve a simple problem: adding live
                stock and cryptocurrency prices to a website should be easy. No
                complicated APIs to integrate, no JavaScript SDKs to install, and
                no monthly fees to worry about.
              </p>
              <p>
                Our widget generator creates a clean, responsive price card that
                you can embed on any website using a simple iframe. Each widget
                shows the current price, daily change, percentage movement, and a
                30-day sparkline chart — all in a compact, professional design.
              </p>
              <p>
                Whether you run a financial blog, a crypto news site, or a
                personal portfolio, PriceWidget makes it effortless to keep your
                visitors informed with real-time market data.
              </p>
            </div>
          </div>
        </section>

        <FAQ />
      </main>
      <Footer />
    </>
  );
}
