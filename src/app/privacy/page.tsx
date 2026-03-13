import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | PriceWidget",
  description: "PriceWidget privacy policy. Learn how we handle data when you use our stock and crypto price widget generator.",
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Privacy Policy</h1>
          <p className="mt-2 text-sm text-gray-400">Last updated: March 12, 2026</p>
          <div className="mt-8 space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Overview</h2>
            <p>PriceWidget is a free tool for generating embeddable stock and cryptocurrency price widgets. This policy explains what data we collect and how we use it.</p>

            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Data We Collect</h2>
            <p>When you use the widget generator on our website, we do not collect, store, or process any personal information. Your ticker symbol selections and customization preferences are processed in your browser and are not transmitted to our servers for storage.</p>
            <p>When an embedded widget loads on a third-party website, our servers fetch price data from financial data providers in order to display current market prices. This server-side request does not include any personal information about the end user viewing the widget.</p>

            <h2 className="text-xl font-bold text-gray-900 dark:text-white">No Personal Data Collection</h2>
            <p>We do not require you to create an account or provide any personal information to use PriceWidget. We do not collect names, email addresses, or payment information.</p>

            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Analytics</h2>
            <p>We may use privacy-friendly analytics tools (such as Plausible or similar) to understand general traffic patterns including page views and referrers. These tools do not use tracking cookies and do not collect personally identifiable information.</p>

            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Advertising</h2>
            <p>We may display advertisements through Google AdSense or similar ad networks. These services may use cookies to serve relevant ads based on your browsing history. You can opt out of personalized advertising by visiting <a href="https://adssettings.google.com" className="text-emerald-600 dark:text-emerald-400 hover:underline" rel="noopener noreferrer" target="_blank">Google Ad Settings</a> or through your browser settings.</p>

            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Cookies</h2>
            <p>PriceWidget itself does not use first-party cookies beyond what is strictly necessary for the service to function. Third-party services such as advertising networks may set their own cookies. You can control cookie settings in your browser preferences.</p>

            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Embedded Widgets on Third-Party Sites</h2>
            <p>When you embed a PriceWidget on your website, visitors to your site will load widget content from our servers. We do not use this to collect personal data about your visitors. Website operators embedding PriceWidget are responsible for disclosing third-party content in their own privacy policies.</p>

            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Financial Data</h2>
            <p>Price data displayed in widgets is sourced from third-party financial data providers. We are not responsible for the accuracy, completeness, or timeliness of this data. See our Terms of Service for full disclaimers.</p>

            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Contact</h2>
            <p>If you have questions about this privacy policy, contact us at <a href="mailto:privacy@toolboxlite.com" className="text-emerald-600 dark:text-emerald-400 hover:underline">privacy@toolboxlite.com</a>.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
