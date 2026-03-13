"use client";

import { useState, useCallback } from "react";
import PriceCard from "./PriceCard";
import type { PriceData } from "./PriceCard";
import CopyButton from "./CopyButton";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://pricewidget.toolboxlite.com";

const MOCK_DATA: Record<string, PriceData> = {
  AAPL: {
    symbol: "AAPL",
    name: "Apple Inc.",
    price: 237.42,
    change: 3.18,
    changePercent: 1.36,
    currency: "USD",
    sparkline: [220, 222, 219, 223, 226, 224, 228, 230, 227, 229, 231, 233, 230, 232, 235, 234, 236, 233, 235, 237, 234, 236, 238, 235, 237, 239, 236, 238, 237, 237.42],
    updatedAt: new Date().toISOString(),
  },
  TSLA: {
    symbol: "TSLA",
    name: "Tesla, Inc.",
    price: 352.80,
    change: -8.45,
    changePercent: -2.34,
    currency: "USD",
    sparkline: [380, 375, 370, 365, 372, 368, 362, 358, 365, 360, 355, 350, 358, 352, 348, 345, 350, 355, 348, 352, 346, 350, 348, 355, 350, 345, 348, 352, 350, 352.80],
    updatedAt: new Date().toISOString(),
  },
  GOOGL: {
    symbol: "GOOGL",
    name: "Alphabet Inc.",
    price: 174.85,
    change: 1.92,
    changePercent: 1.11,
    currency: "USD",
    sparkline: [165, 167, 166, 168, 170, 169, 171, 170, 172, 171, 173, 172, 170, 172, 174, 173, 171, 173, 175, 174, 172, 174, 176, 175, 173, 175, 174, 176, 175, 174.85],
    updatedAt: new Date().toISOString(),
  },
  "BTC-USD": {
    symbol: "BTC-USD",
    name: "Bitcoin USD",
    price: 87243.50,
    change: 1523.40,
    changePercent: 1.78,
    currency: "USD",
    sparkline: [82000, 83200, 81500, 83800, 84500, 83000, 85200, 86000, 84800, 85500, 86200, 85000, 86800, 87200, 85500, 86000, 87500, 86800, 85200, 86500, 87000, 86200, 87800, 86500, 87200, 85800, 86500, 87000, 87500, 87243.50],
    updatedAt: new Date().toISOString(),
  },
  "ETH-USD": {
    symbol: "ETH-USD",
    name: "Ethereum USD",
    price: 3456.78,
    change: -45.23,
    changePercent: -1.29,
    currency: "USD",
    sparkline: [3600, 3580, 3550, 3520, 3560, 3540, 3500, 3480, 3520, 3500, 3460, 3440, 3480, 3460, 3420, 3450, 3480, 3460, 3500, 3480, 3450, 3420, 3460, 3440, 3480, 3460, 3420, 3450, 3470, 3456.78],
    updatedAt: new Date().toISOString(),
  },
};

const SUGGESTIONS = ["AAPL", "TSLA", "GOOGL", "BTC-USD", "ETH-USD"];

export default function WidgetGenerator() {
  const [query, setQuery] = useState("");
  const [priceData, setPriceData] = useState<PriceData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [size, setSize] = useState<"sm" | "md" | "lg">("md");

  const fetchPrice = useCallback(async (symbol: string) => {
    setLoading(true);
    setError("");

    try {
      const res = await fetch(`/api/finance?symbol=${encodeURIComponent(symbol.toUpperCase())}`);
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to fetch price data");
      }

      setPriceData(data);
    } catch {
      const upperSymbol = symbol.toUpperCase();
      if (MOCK_DATA[upperSymbol]) {
        setPriceData({
          ...MOCK_DATA[upperSymbol],
          updatedAt: new Date().toISOString(),
        });
      } else {
        setError(`Could not find data for "${symbol}". Try AAPL, TSLA, GOOGL, BTC-USD, or ETH-USD.`);
        setPriceData(null);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = query.trim();
    if (trimmed) {
      fetchPrice(trimmed);
    }
  };

  const embedUrl = priceData
    ? `${SITE_URL}/widget/${encodeURIComponent(priceData.symbol)}?theme=${theme}&size=${size}`
    : "";

  const embedCode = priceData
    ? `<iframe src="${embedUrl}" width="${size === "sm" ? 280 : size === "md" ? 340 : 420}" height="${size === "sm" ? 140 : size === "md" ? 180 : 220}" frameborder="0" style="border-radius:12px;overflow:hidden;" title="${priceData.name} Price Widget"></iframe>`
    : "";

  return (
    <section id="generator" className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="text-center">
        <h2 className="font-heading text-3xl font-bold text-gray-900 dark:text-white">
          Widget Generator
        </h2>
        <p className="mt-3 text-gray-600 dark:text-gray-400">
          Search for a stock or crypto ticker to generate your embeddable widget.
        </p>
      </div>

      <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8 dark:border-gray-800 dark:bg-gray-900">
        <form onSubmit={handleSubmit} className="flex gap-3">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter ticker symbol (e.g. AAPL, BTC-USD)"
            className="flex-1 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500"
          />
          <button
            type="submit"
            disabled={loading || !query.trim()}
            className="rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Loading..." : "Search"}
          </button>
        </form>

        <div className="mt-3 flex flex-wrap gap-2">
          <span className="text-xs text-gray-500 dark:text-gray-500">Try:</span>
          {SUGGESTIONS.map((s) => (
            <button
              key={s}
              onClick={() => {
                setQuery(s);
                fetchPrice(s);
              }}
              className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700 transition-colors hover:bg-emerald-100 hover:text-emerald-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-emerald-900/30 dark:hover:text-emerald-400"
            >
              {s}
            </button>
          ))}
        </div>

        {error && (
          <div className="mt-4 rounded-lg bg-red-50 p-3 text-sm text-red-600 dark:bg-red-900/20 dark:text-red-400">
            {error}
          </div>
        )}

        {priceData && (
          <div className="mt-8 animate-fade-in">
            <div className="flex flex-col gap-6 sm:flex-row">
              <div className="flex-1">
                <h3 className="mb-4 text-sm font-semibold text-gray-900 dark:text-white">
                  Preview
                </h3>
                <div
                  className={`inline-block rounded-xl p-4 ${
                    theme === "dark" ? "bg-gray-800" : "bg-gray-50"
                  }`}
                >
                  <PriceCard data={priceData} theme={theme} size={size} />
                </div>
              </div>

              <div className="sm:w-56">
                <h3 className="mb-4 text-sm font-semibold text-gray-900 dark:text-white">
                  Customize
                </h3>

                <div className="space-y-4">
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-gray-600 dark:text-gray-400">
                      Theme
                    </label>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setTheme("light")}
                        className={`flex-1 rounded-md px-3 py-2 text-xs font-medium transition-colors ${
                          theme === "light"
                            ? "bg-emerald-600 text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300"
                        }`}
                      >
                        ☀️ Light
                      </button>
                      <button
                        onClick={() => setTheme("dark")}
                        className={`flex-1 rounded-md px-3 py-2 text-xs font-medium transition-colors ${
                          theme === "dark"
                            ? "bg-emerald-600 text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300"
                        }`}
                      >
                        🌙 Dark
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-gray-600 dark:text-gray-400">
                      Size
                    </label>
                    <div className="flex gap-2">
                      {(["sm", "md", "lg"] as const).map((s) => (
                        <button
                          key={s}
                          onClick={() => setSize(s)}
                          className={`flex-1 rounded-md px-3 py-2 text-xs font-medium uppercase transition-colors ${
                            size === s
                              ? "bg-emerald-600 text-white"
                              : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300"
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 border-t border-gray-200 pt-6 dark:border-gray-700">
              <h3 className="mb-3 text-sm font-semibold text-gray-900 dark:text-white">
                Embed Code
              </h3>
              <div className="rounded-lg bg-gray-900 p-4">
                <pre className="overflow-x-auto text-xs text-gray-300">
                  <code>{embedCode}</code>
                </pre>
              </div>
              <div className="mt-3">
                <CopyButton text={embedCode} />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
