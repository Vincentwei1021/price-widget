import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | PriceWidget",
  description: "PriceWidget terms of service and conditions of use for the stock and crypto price widget generator.",
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Terms of Service</h1>
          <p className="mt-2 text-sm text-gray-400">Last updated: March 12, 2026</p>
          <div className="mt-8 space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Acceptance of Terms</h2>
            <p>By accessing and using PriceWidget (&quot;the Service&quot;), you agree to be bound by these Terms of Service. If you do not agree, please do not use the Service.</p>

            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Description of Service</h2>
            <p>PriceWidget provides a free tool for generating embeddable price widgets that display stock and cryptocurrency market data on third-party websites. The service includes a widget generator interface and widget display pages that can be embedded via iframe.</p>

            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Use of the Service</h2>
            <p>You may use PriceWidget for personal and commercial purposes, including embedding widgets on your websites and blogs. You agree not to use the Service in ways that:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Exceed reasonable usage and degrade performance for other users</li>
              <li>Attempt to scrape, reproduce, or redistribute our financial data feeds</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Misrepresent the source or accuracy of the financial data displayed</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Financial Data Disclaimer</h2>
            <p><strong>Important:</strong> The stock and cryptocurrency prices displayed through PriceWidget are provided for <strong>informational purposes only</strong> and do not constitute financial advice, investment recommendations, or trading signals. Data may be delayed and is sourced from third-party providers whose accuracy we cannot guarantee.</p>
            <p>PriceWidget is not a licensed financial advisor, broker, or investment service. Do not make investment decisions based solely on data displayed in PriceWidget widgets. Always consult a qualified financial professional before making investment decisions.</p>

            <h2 className="text-xl font-bold text-gray-900 dark:text-white">No Warranty</h2>
            <p>PriceWidget is provided &quot;as is&quot; without warranties of any kind, express or implied. We do not guarantee that price data will be accurate, complete, up-to-date, or uninterrupted. Market data may be delayed by 15 minutes or more depending on the data provider.</p>

            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Limitation of Liability</h2>
            <p>In no event shall PriceWidget or its operators be liable for any indirect, incidental, special, or consequential damages arising from your use of the Service, including any financial losses resulting from reliance on price data displayed in widgets.</p>

            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Embedded Widget Terms</h2>
            <p>When you embed a PriceWidget on your website, you are responsible for ensuring your use complies with applicable laws and your own website&apos;s terms of service. You must not embed widgets in contexts that could mislead users about the nature or accuracy of the financial data shown.</p>

            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Intellectual Property</h2>
            <p>The PriceWidget name, logo, and website design are the property of their respective owners. Financial data displayed in widgets is sourced from third-party providers and subject to their respective terms. The embed code we provide may be freely used on your own websites.</p>

            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Changes to Terms</h2>
            <p>We may update these terms from time to time. Continued use of the Service after changes constitutes acceptance of the updated terms. We encourage you to review this page periodically.</p>

            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Contact</h2>
            <p>For questions about these terms, contact us at <a href="mailto:legal@toolboxlite.com" className="text-emerald-600 dark:text-emerald-400 hover:underline">legal@toolboxlite.com</a>.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
