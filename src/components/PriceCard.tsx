import SparklineChart from "./SparklineChart";

export interface PriceData {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  currency: string;
  sparkline: number[];
  updatedAt: string;
}

interface PriceCardProps {
  data: PriceData;
  theme?: "light" | "dark";
  size?: "sm" | "md" | "lg";
}

const sizeStyles = {
  sm: {
    wrapper: "p-3",
    name: "text-xs",
    symbol: "text-xs",
    price: "text-lg",
    change: "text-xs",
    chart: { width: 80, height: 28 },
    updated: "text-[10px]",
  },
  md: {
    wrapper: "p-4",
    name: "text-sm",
    symbol: "text-xs",
    price: "text-2xl",
    change: "text-sm",
    chart: { width: 120, height: 40 },
    updated: "text-xs",
  },
  lg: {
    wrapper: "p-6",
    name: "text-base",
    symbol: "text-sm",
    price: "text-3xl",
    change: "text-base",
    chart: { width: 160, height: 50 },
    updated: "text-xs",
  },
};

export default function PriceCard({
  data,
  theme = "light",
  size = "md",
}: PriceCardProps) {
  const positive = data.change >= 0;
  const s = sizeStyles[size];

  const themeClasses =
    theme === "dark"
      ? "bg-gray-900 border-gray-700 text-white"
      : "bg-white border-gray-200 text-gray-900";

  const mutedClasses =
    theme === "dark" ? "text-gray-400" : "text-gray-500";

  const changeClasses = positive
    ? "text-emerald-500"
    : "text-red-500";

  const changeBgClasses = positive
    ? "bg-emerald-50 dark:bg-emerald-900/20"
    : "bg-red-50 dark:bg-red-900/20";

  const formatPrice = (price: number, currency: string) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency || "USD",
      minimumFractionDigits: price < 1 ? 4 : 2,
      maximumFractionDigits: price < 1 ? 4 : 2,
    }).format(price);
  };

  const formatChange = (change: number) => {
    const sign = change >= 0 ? "+" : "";
    return `${sign}${change.toFixed(2)}`;
  };

  const formatPercent = (percent: number) => {
    const sign = percent >= 0 ? "+" : "";
    return `${sign}${percent.toFixed(2)}%`;
  };

  return (
    <div
      className={`rounded-xl border ${themeClasses} ${s.wrapper} shadow-sm transition-shadow hover:shadow-md`}
    >
      <div className="flex items-start justify-between">
        <div className="min-w-0 flex-1">
          <p className={`truncate font-medium ${s.name} ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
            {data.name}
          </p>
          <p className={`${s.symbol} ${mutedClasses} mt-0.5`}>
            {data.symbol}
          </p>
        </div>
        <SparklineChart
          data={data.sparkline}
          width={s.chart.width}
          height={s.chart.height}
          positive={positive}
        />
      </div>

      <div className="mt-3">
        <p className={`font-bold ${s.price} ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
          {formatPrice(data.price, data.currency)}
        </p>
        <div className="mt-1 flex items-center gap-2">
          <span
            className={`inline-flex items-center rounded-md px-1.5 py-0.5 font-medium ${s.change} ${changeClasses} ${changeBgClasses}`}
          >
            {positive ? "▲" : "▼"} {formatChange(data.change)}
          </span>
          <span className={`font-medium ${s.change} ${changeClasses}`}>
            ({formatPercent(data.changePercent)})
          </span>
        </div>
      </div>

      <p className={`mt-3 ${s.updated} ${mutedClasses}`}>
        Updated: {new Date(data.updatedAt).toLocaleString()}
      </p>
    </div>
  );
}
