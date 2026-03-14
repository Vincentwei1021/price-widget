import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://price.toolboxlite.com";

export const metadata: Metadata = {
  title: {
    default: "PriceWidget — Embed Stock & Crypto Prices on Any Website",
    template: "%s | PriceWidget",
  },
  description:
    "Generate embeddable stock and cryptocurrency price widgets for your website. Real-time prices, customizable themes, and easy one-line embed code for AAPL, BTC, ETH, and thousands more.",
  keywords: [
    "stock widget",
    "crypto widget",
    "embed stock prices",
    "stock ticker widget",
    "cryptocurrency price widget",
    "bitcoin widget",
    "stock price embed",
    "website stock ticker",
    "real-time stock widget",
    "financial widget",
  ],
  authors: [{ name: "PriceWidget" }],
  creator: "PriceWidget",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "PriceWidget",
    title: "PriceWidget — Embed Stock & Crypto Prices on Any Website",
    description:
      "Generate embeddable stock and cryptocurrency price widgets for your website. Real-time prices, customizable themes, and easy embed code.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "PriceWidget" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PriceWidget — Embed Stock & Crypto Prices on Any Website",
    description:
      "Generate embeddable stock and cryptocurrency price widgets for your website.",
    creator: "@pricewidget",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jakarta.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
