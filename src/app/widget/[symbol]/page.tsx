import type { Metadata } from "next";
import WidgetEmbed from "./WidgetEmbed";

const TOOLBOX_URL = process.env.TOOLBOX_API_URL || "http://localhost:3100";
const TOOLBOX_KEY = process.env.TOOLBOX_API_KEY || "test-key-123";

interface PriceData {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  currency: string;
  sparkline: number[];
  updatedAt: string;
}

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

async function fetchPriceData(symbol: string): Promise<PriceData | null> {
  try {
    const res = await fetch(`${TOOLBOX_URL}/v1/finance`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOOLBOX_KEY}`,
      },
      body: JSON.stringify({ symbol }),
      signal: AbortSignal.timeout(15000),
      next: { revalidate: 60 },
    });

    if (!res.ok) throw new Error("API error");

    const data = await res.json();
    return {
      symbol: data.symbol || symbol.toUpperCase(),
      name: data.name || symbol.toUpperCase(),
      price: data.price ?? data.regularMarketPrice ?? 0,
      change: data.change ?? data.regularMarketChange ?? 0,
      changePercent: data.changePercent ?? data.regularMarketChangePercent ?? 0,
      currency: data.currency || "USD",
      sparkline: data.sparkline || data.historicalPrices || [],
      updatedAt: data.updatedAt || new Date().toISOString(),
    };
  } catch {
    const upper = symbol.toUpperCase();
    const mock = MOCK_DATA[upper];
    if (mock) {
      return { ...mock, updatedAt: new Date().toISOString() };
    }
    return null;
  }
}

type PageProps = {
  params: Promise<{ symbol: string }>;
  searchParams: Promise<{ theme?: string; size?: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { symbol } = await params;
  return {
    title: `${symbol.toUpperCase()} Price Widget`,
    description: `Live ${symbol.toUpperCase()} price widget — embed on your website.`,
    robots: { index: false, follow: false },
  };
}

export default async function WidgetPage({ params, searchParams }: PageProps) {
  const { symbol } = await params;
  const { theme: themeParam, size: sizeParam } = await searchParams;
  const theme = themeParam === "dark" ? "dark" : "light";
  const size = (["sm", "md", "lg"].includes(sizeParam || "") ? sizeParam : "md") as "sm" | "md" | "lg";

  const data = await fetchPriceData(symbol);

  if (!data) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white p-4 text-gray-900">
        <p className="text-sm">Unable to load data for {symbol.toUpperCase()}</p>
      </div>
    );
  }

  return <WidgetEmbed initialData={data} symbol={symbol} theme={theme} size={size} />;
}
