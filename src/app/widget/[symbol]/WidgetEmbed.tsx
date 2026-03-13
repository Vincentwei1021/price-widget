"use client";

import { useEffect, useState, useCallback } from "react";
import PriceCard from "@/components/PriceCard";
import type { PriceData } from "@/components/PriceCard";

interface WidgetEmbedProps {
  initialData: PriceData;
  symbol: string;
  theme: "light" | "dark";
  size: "sm" | "md" | "lg";
}

export default function WidgetEmbed({ initialData, symbol, theme, size }: WidgetEmbedProps) {
  const [data, setData] = useState<PriceData>(initialData);

  const refresh = useCallback(async () => {
    try {
      const res = await fetch(`/api/finance?symbol=${encodeURIComponent(symbol)}`);
      if (res.ok) {
        const newData = await res.json();
        setData(newData);
      }
    } catch {
      // Keep existing data on error
    }
  }, [symbol]);

  useEffect(() => {
    const interval = setInterval(refresh, 60000);
    return () => clearInterval(interval);
  }, [refresh]);

  return (
    <div className={`flex min-h-screen items-center justify-center p-2 ${theme === "dark" ? "widget-dark bg-gray-900" : "widget-light bg-white"}`}>
      <PriceCard data={data} theme={theme} size={size} />
    </div>
  );
}
