"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is PriceWidget?",
    answer:
      "PriceWidget is a free tool that lets you generate embeddable stock and cryptocurrency price widgets for your website. Simply search for a ticker symbol, customize the appearance, and copy the embed code to add live prices to any webpage.",
  },
  {
    question: "Which stocks and cryptocurrencies are supported?",
    answer:
      "PriceWidget supports thousands of stocks listed on major exchanges (NYSE, NASDAQ, etc.) as well as popular cryptocurrencies like Bitcoin (BTC), Ethereum (ETH), Solana (SOL), and many more. Simply type a ticker symbol to search.",
  },
  {
    question: "Is PriceWidget free to use?",
    answer:
      "Yes, PriceWidget is completely free. You can generate and embed as many widgets as you need on your websites without any cost or sign-up requirement.",
  },
  {
    question: "How do I embed a widget on my website?",
    answer:
      "Use the widget generator on this page to search for a ticker, customize the theme and size, then click the \"Copy Embed Code\" button. Paste the HTML iframe snippet into your website's HTML and the widget will display live price data automatically.",
  },
  {
    question: "How often do prices update?",
    answer:
      "Widget prices refresh automatically every 60 seconds when the embed page is loaded in a browser. The data includes the current price, daily change, change percentage, and a 30-day sparkline chart.",
  },
  {
    question: "Can I customize the widget appearance?",
    answer:
      "Yes! You can choose between light and dark themes, and select from three sizes (small, medium, large). The widget is designed to blend seamlessly with any website design.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="text-center">
        <h2 className="font-heading text-3xl font-bold text-gray-900 dark:text-white">
          Frequently Asked Questions
        </h2>
        <p className="mt-3 text-gray-600 dark:text-gray-400">
          Everything you need to know about PriceWidget.
        </p>
      </div>

      <div className="mt-10 divide-y divide-gray-200 dark:divide-gray-800">
        {faqs.map((faq, index) => (
          <div key={index}>
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="flex w-full items-center justify-between py-4 text-left"
            >
              <span className="text-sm font-medium text-gray-900 sm:text-base dark:text-white">
                {faq.question}
              </span>
              <svg
                className={`h-5 w-5 shrink-0 text-gray-500 transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openIndex === index && (
              <div className="pb-4 text-sm text-gray-600 dark:text-gray-400">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
