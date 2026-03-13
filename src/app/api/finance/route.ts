import { NextRequest, NextResponse } from "next/server";

const TOOLBOX_URL = process.env.TOOLBOX_API_URL || "http://localhost:3100";
const TOOLBOX_KEY = process.env.TOOLBOX_API_KEY || "test-key-123";

const MOCK_DATA: Record<string, {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  currency: string;
  sparkline: number[];
}> = {
  AAPL: {
    symbol: "AAPL",
    name: "Apple Inc.",
    price: 237.42,
    change: 3.18,
    changePercent: 1.36,
    currency: "USD",
    sparkline: [220, 222, 219, 223, 226, 224, 228, 230, 227, 229, 231, 233, 230, 232, 235, 234, 236, 233, 235, 237, 234, 236, 238, 235, 237, 239, 236, 238, 237, 237.42],
  },
  TSLA: {
    symbol: "TSLA",
    name: "Tesla, Inc.",
    price: 352.80,
    change: -8.45,
    changePercent: -2.34,
    currency: "USD",
    sparkline: [380, 375, 370, 365, 372, 368, 362, 358, 365, 360, 355, 350, 358, 352, 348, 345, 350, 355, 348, 352, 346, 350, 348, 355, 350, 345, 348, 352, 350, 352.80],
  },
  GOOGL: {
    symbol: "GOOGL",
    name: "Alphabet Inc.",
    price: 174.85,
    change: 1.92,
    changePercent: 1.11,
    currency: "USD",
    sparkline: [165, 167, 166, 168, 170, 169, 171, 170, 172, 171, 173, 172, 170, 172, 174, 173, 171, 173, 175, 174, 172, 174, 176, 175, 173, 175, 174, 176, 175, 174.85],
  },
  "BTC-USD": {
    symbol: "BTC-USD",
    name: "Bitcoin USD",
    price: 87243.50,
    change: 1523.40,
    changePercent: 1.78,
    currency: "USD",
    sparkline: [82000, 83200, 81500, 83800, 84500, 83000, 85200, 86000, 84800, 85500, 86200, 85000, 86800, 87200, 85500, 86000, 87500, 86800, 85200, 86500, 87000, 86200, 87800, 86500, 87200, 85800, 86500, 87000, 87500, 87243.50],
  },
  "ETH-USD": {
    symbol: "ETH-USD",
    name: "Ethereum USD",
    price: 3456.78,
    change: -45.23,
    changePercent: -1.29,
    currency: "USD",
    sparkline: [3600, 3580, 3550, 3520, 3560, 3540, 3500, 3480, 3520, 3500, 3460, 3440, 3480, 3460, 3420, 3450, 3480, 3460, 3500, 3480, 3450, 3420, 3460, 3440, 3480, 3460, 3420, 3450, 3470, 3456.78],
  },
};

function validateSymbol(symbol: string): boolean {
  return /^[A-Za-z0-9.\-]{1,20}$/.test(symbol);
}

function getMockData(symbol: string) {
  const upper = symbol.toUpperCase();
  const data = MOCK_DATA[upper];
  if (data) {
    return { ...data, updatedAt: new Date().toISOString() };
  }
  return null;
}

async function fetchFromToolbox(symbol: string) {
  const res = await fetch(`${TOOLBOX_URL}/v1/finance`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOOLBOX_KEY}`,
    },
    body: JSON.stringify({ symbol }),
    signal: AbortSignal.timeout(15000),
  });

  if (!res.ok) {
    throw new Error(`Toolbox API error: ${res.status}`);
  }

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
}

export async function GET(request: NextRequest) {
  const symbol = request.nextUrl.searchParams.get("symbol");

  if (!symbol) {
    return NextResponse.json(
      { error: "Missing required parameter: symbol" },
      { status: 400 }
    );
  }

  if (!validateSymbol(symbol)) {
    return NextResponse.json(
      { error: "Invalid symbol format. Use letters, numbers, dots, or hyphens (max 20 characters)." },
      { status: 400 }
    );
  }

  try {
    const data = await fetchFromToolbox(symbol);
    return NextResponse.json(data);
  } catch {
    const mock = getMockData(symbol);
    if (mock) {
      return NextResponse.json(mock);
    }
    return NextResponse.json(
      { error: `Unable to fetch data for symbol: ${symbol.toUpperCase()}` },
      { status: 404 }
    );
  }
}

export async function POST(request: NextRequest) {
  let body: { symbol?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body" },
      { status: 400 }
    );
  }

  const { symbol } = body;

  if (!symbol) {
    return NextResponse.json(
      { error: "Missing required field: symbol" },
      { status: 400 }
    );
  }

  if (!validateSymbol(symbol)) {
    return NextResponse.json(
      { error: "Invalid symbol format. Use letters, numbers, dots, or hyphens (max 20 characters)." },
      { status: 400 }
    );
  }

  try {
    const data = await fetchFromToolbox(symbol);
    return NextResponse.json(data);
  } catch {
    const mock = getMockData(symbol);
    if (mock) {
      return NextResponse.json(mock);
    }
    return NextResponse.json(
      { error: `Unable to fetch data for symbol: ${symbol.toUpperCase()}` },
      { status: 404 }
    );
  }
}
