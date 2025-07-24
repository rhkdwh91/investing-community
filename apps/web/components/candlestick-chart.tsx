"use client";

import React, { useEffect, useRef, useState } from "react";
import type {
  IChartApi,
  CandlestickData as LWCandlestickData,
  UTCTimestamp,
} from "lightweight-charts";

interface CandlestickData {
  t: number; // timestamp
  o: number; // open
  h: number; // high
  l: number; // low
  c: number; // close
  v: number; // volume
}

interface CandlestickChartProps {
  symbol?: string;
  interval?: string;
  assetType?: "crypto" | "stock";
}

type TimeInterval =
  | "1m"
  | "3m"
  | "5m"
  | "15m"
  | "30m"
  | "1h"
  | "2h"
  | "4h"
  | "6h"
  | "8h"
  | "12h"
  | "1d";

type TimePeriod = "1D" | "1W" | "1M" | "3M" | "1Y";

const timeIntervals: { value: TimeInterval; label: string }[] = [
  { value: "1m", label: "1 Minute" },
  { value: "3m", label: "3 Minutes" },
  { value: "5m", label: "5 Minutes" },
  { value: "15m", label: "15 Minutes" },
  { value: "30m", label: "30 Minutes" },
  { value: "1h", label: "1 Hour" },
  { value: "2h", label: "2 Hours" },
  { value: "4h", label: "4 Hours" },
  { value: "6h", label: "6 Hours" },
  { value: "8h", label: "8 Hours" },
  { value: "12h", label: "12 Hours" },
  { value: "1d", label: "1 Day" },
];

const timePeriods: { value: TimePeriod; label: string; interval: TimeInterval; limit: number }[] = [
  { value: "1D", label: "1 Day", interval: "5m", limit: 288 }, // 24 hours * 60 minutes / 5 minutes
  { value: "1W", label: "1 Week", interval: "1h", limit: 168 }, // 7 days * 24 hours
  { value: "1M", label: "1 Month", interval: "4h", limit: 180 }, // ~30 days * 6 intervals per day
  { value: "3M", label: "3 Months", interval: "1d", limit: 90 }, // ~90 days
  { value: "1Y", label: "1 Year", interval: "1d", limit: 365 }, // 365 days
];

// Generate mock stock data for demonstration
const generateMockStockData = (symbol: string, limit: number): unknown[][] => {
  const data: unknown[][] = [];
  const now = Date.now();
  const intervalMs = 5 * 60 * 1000; // 5 minutes in milliseconds
  
  // Base price varies by symbol
  let basePrice = 150; // Default for AAPL
  if (symbol === "TSLA") basePrice = 200;
  if (symbol === "NVDA") basePrice = 800;
  if (symbol === "MSFT") basePrice = 400;
  
  let currentPrice = basePrice;
  
  for (let i = limit - 1; i >= 0; i--) {
    const timestamp = now - (i * intervalMs);
    
    // Generate realistic price movement
    const volatility = 0.02; // 2% volatility
    const change = (Math.random() - 0.5) * volatility * currentPrice;
    const open = currentPrice;
    const close = Math.max(0.01, currentPrice + change);
    
    // Generate high and low around open/close
    const high = Math.max(open, close) * (1 + Math.random() * 0.01);
    const low = Math.min(open, close) * (1 - Math.random() * 0.01);
    
    // Generate volume
    const volume = Math.floor(Math.random() * 1000000) + 100000;
    
    data.push([
      timestamp,
      open.toFixed(2),
      high.toFixed(2),
      low.toFixed(2),
      close.toFixed(2),
      volume.toString(),
    ]);
    
    currentPrice = close;
  }
  
  return data;
};

const CandlestickChart: React.FC<CandlestickChartProps> = ({
  symbol = "BTCUSDT",
  interval: initialInterval = "1m",
  assetType = "crypto",
}) => {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<IChartApi | null>(null);
  const candlestickSeriesRef = useRef<unknown>(null);

  const [candleData, setCandleData] = useState<CandlestickData[]>([]);
  const [ws, setWs] = useState<WebSocket | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [selectedInterval, setSelectedInterval] = useState<TimeInterval>(
    initialInterval as TimeInterval,
  );
  const [selectedPeriod, setSelectedPeriod] = useState<TimePeriod>("1D");
  const [currentPrice, setCurrentPrice] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isChartReady, setIsChartReady] = useState<boolean>(false);

  // Initialize chart
  useEffect(() => {
    if (typeof window === "undefined" || !chartContainerRef.current) return;

    const initChart = async () => {
      try {
        const { createChart, ColorType, CandlestickSeries } = await import(
          "lightweight-charts"
        );

        const chart = createChart(chartContainerRef.current!, {
          layout: {
            background: { type: ColorType.Solid, color: "#ffffff" },
            textColor: "#333",
          },
          width: chartContainerRef.current?.clientWidth || 800,
          height: 400,
          grid: {
            vertLines: { color: "#e1e1e1" },
            horzLines: { color: "#e1e1e1" },
          },
          crosshair: {
            mode: 1,
          },
          rightPriceScale: {
            borderColor: "#cccccc",
          },
          timeScale: {
            borderColor: "#cccccc",
            timeVisible: true,
            secondsVisible: false,
          },
        });

        const candlestickSeries = chart.addSeries(CandlestickSeries, {
          upColor: "#26a69a",
          downColor: "#ef5350",
          borderDownColor: "#ef5350",
          borderUpColor: "#26a69a",
          wickDownColor: "#ef5350",
          wickUpColor: "#26a69a",
        });

        chartRef.current = chart;
        candlestickSeriesRef.current = candlestickSeries;
        setIsChartReady(true);

        // Handle resize
        const handleResize = () => {
          if (chartContainerRef.current && chartRef.current) {
            chartRef.current.applyOptions({
              width: chartContainerRef.current.clientWidth,
            });
          }
        };

        window.addEventListener("resize", handleResize);

        return () => {
          window.removeEventListener("resize", handleResize);
          if (chartRef.current) {
            chartRef.current.remove();
            chartRef.current = null;
            candlestickSeriesRef.current = null;
          }
        };
      } catch (error) {
        console.error("Error initializing chart:", error);
      }
    };

    initChart();
  }, []);

  // Fetch historical data
  useEffect(() => {
    const fetchHistoricalData = async () => {
      try {
        setIsLoading(true);
        const periodConfig = timePeriods.find(p => p.value === selectedPeriod);
        const interval = periodConfig?.interval || selectedInterval;
        const limit = periodConfig?.limit || 100;
        
        let response;
        let data;

        if (assetType === "crypto") {
          // Use Binance API for crypto
          response = await fetch(
            `https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=${interval}&limit=${limit}`,
          );
          data = await response.json();
        } else {
          // For stocks, generate mock data since we don't have a real stock API
          data = generateMockStockData(symbol, limit);
        }

        const formattedData: CandlestickData[] = data
          .map((item: unknown[]) => ({
            t: item[0] as number,
            o: parseFloat(item[1] as string),
            h: parseFloat(item[2] as string),
            l: parseFloat(item[3] as string),
            c: parseFloat(item[4] as string),
            v: parseFloat(item[5] as string),
          }))
          .filter((item: CandlestickData) => !isNaN(item.t) && !isNaN(item.o) && !isNaN(item.c))

        setCandleData(formattedData);
        if (formattedData.length > 0) {
          setCurrentPrice(formattedData[formattedData.length - 1]?.c ?? 0);
        }

        // Data will be updated to chart via separate useEffect
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching historical data:", error);
        setIsLoading(false);
      }
    };

    fetchHistoricalData();
  }, [symbol, selectedInterval, selectedPeriod, assetType]);

  // Update chart when both chart is ready and data is available
  useEffect(() => {
    if (candlestickSeriesRef.current && isChartReady && candleData.length > 0) {
      const sortedData = candleData.sort((a, b) => a.t - b.t);
      
      const candlestickData: LWCandlestickData[] = sortedData.map(
        (item) => ({
          time: Math.floor(item.t / 1000) as UTCTimestamp,
          open: item.o,
          high: item.h,
          low: item.l,
          close: item.c,
        }),
      );

      try {
        (
          candlestickSeriesRef.current as { setData: (data: unknown) => void }
        ).setData(candlestickData);
      } catch (error) {
        console.error("Error updating chart:", error);
      }
    }
  }, [candleData, isChartReady]);

  // WebSocket connection
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Only connect WebSocket for crypto assets
    if (assetType !== "crypto") {
      // For stocks, simulate periodic updates with mock data
      const interval = setInterval(() => {
        if (candleData.length > 0) {
          const lastCandle = candleData[candleData.length - 1];
          if (lastCandle) {
            const change = (Math.random() - 0.5) * 0.01 * lastCandle.c;
            const newPrice = Math.max(0.01, lastCandle.c + change);
            setCurrentPrice(newPrice);
          }
        }
      }, 5000); // Update every 5 seconds

      return () => clearInterval(interval);
    }

    const connectWebSocket = () => {
      try {
        const periodConfig = timePeriods.find(p => p.value === selectedPeriod);
        const interval = periodConfig?.interval || selectedInterval;
        const wsUrl = `wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@kline_${interval}`;
        const websocket = new WebSocket(wsUrl);

        websocket.onopen = () => {
          console.log("WebSocket connected");
          setIsConnected(true);
        };

        websocket.onmessage = (event) => {
          const data = JSON.parse(event.data);
          const kline = data.k;

          const newCandle: CandlestickData = {
            t: kline.t,
            o: parseFloat(kline.o),
            h: parseFloat(kline.h),
            l: parseFloat(kline.l),
            c: parseFloat(kline.c),
            v: parseFloat(kline.v),
          };

          setCurrentPrice(newCandle.c);

          // Update chart with new candle data
          if (candlestickSeriesRef.current) {
            const candlestickPoint: LWCandlestickData = {
              time: Math.floor(newCandle.t / 1000) as UTCTimestamp,
              open: newCandle.o,
              high: newCandle.h,
              low: newCandle.l,
              close: newCandle.c,
            };

            try {
              (
                candlestickSeriesRef.current as {
                  update: (data: unknown) => void;
                }
              ).update(candlestickPoint);
            } catch (error) {
              console.error("Error updating chart data:", error);
              // If update fails, try setting all data again
              const sortedData = candleData.sort((a, b) => a.t - b.t);
              const allCandlestickData: LWCandlestickData[] = sortedData.map(
                (item) => ({
                  time: Math.floor(item.t / 1000) as UTCTimestamp,
                  open: item.o,
                  high: item.h,
                  low: item.l,
                  close: item.c,
                }),
              );
              (
                candlestickSeriesRef.current as { setData: (data: unknown) => void }
              ).setData(allCandlestickData);
            }
          }

          if (kline.x) {
            // Candle is closed, add to historical data
            setCandleData((prev) => {
              const updated = [...prev];
              const lastIndex = updated.length - 1;

              if (updated[lastIndex] && updated[lastIndex].t === newCandle.t) {
                updated[lastIndex] = newCandle;
              } else {
                updated.push(newCandle);
                // Keep data within reasonable limits based on selected period
                const periodConfig = timePeriods.find(p => p.value === selectedPeriod);
                const maxCandles = periodConfig?.limit || 100;
                if (updated.length > maxCandles) {
                  updated.shift();
                }
              }
              // Ensure data is always sorted by timestamp
              return updated.sort((a, b) => a.t - b.t);
            });
          } else {
            // Candle is still forming, update current candle
            setCandleData((prev) => {
              const updated = [...prev];
              const lastIndex = updated.length - 1;

              if (updated[lastIndex] && updated[lastIndex].t === newCandle.t) {
                updated[lastIndex] = newCandle;
              } else if (newCandle.t > (updated[lastIndex]?.t ?? 0)) {
                // Only add if timestamp is newer
                updated.push(newCandle);
              }
              return updated.sort((a, b) => a.t - b.t);
            });
          }
        };

        websocket.onerror = (error) => {
          console.error("WebSocket error:", error);
          setIsConnected(false);
        };

        websocket.onclose = () => {
          console.log("WebSocket disconnected");
          setIsConnected(false);
          setTimeout(connectWebSocket, 5000);
        };

        setWs(websocket);
      } catch (error) {
        console.error("Error connecting to WebSocket:", error);
        setIsConnected(false);
      }
    };

    connectWebSocket();

    return () => {
      if (ws) {
        ws.close();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [symbol, selectedInterval, selectedPeriod, assetType]);

  // Reset zoom function
  const resetZoom = () => {
    if (chartRef.current) {
      chartRef.current.timeScale().fitContent();
    }
  };

  return (
    <div className="w-full">
      <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center space-x-4">
          <h2 className="text-2xl font-bold">{symbol} Live Chart</h2>
          <div className="text-lg font-semibold text-blue-600">
            ${currentPrice.toFixed(2)}
          </div>
        </div>

        <div className="flex items-center space-x-6">
          {/* Time Period Selector */}
          <div className="flex items-center space-x-2">
            <label className="text-sm font-medium text-gray-700">
              Period:
            </label>
            <div className="flex bg-gray-100 rounded-lg p-1">
              {timePeriods.map((period) => (
                <button
                  key={period.value}
                  onClick={() => setSelectedPeriod(period.value)}
                  className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                    selectedPeriod === period.value
                      ? "bg-blue-600 text-white"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  {period.label}
                </button>
              ))}
            </div>
          </div>

          {/* Time Frame Selector */}
          <div className="flex items-center space-x-2">
            <label
              htmlFor="interval-select"
              className="text-sm font-medium text-gray-700"
            >
              Custom Interval:
            </label>
            <select
              id="interval-select"
              value={selectedInterval}
              onChange={(e) => {
                setSelectedInterval(e.target.value as TimeInterval);
                setSelectedPeriod("1D"); // Reset to custom when manually selecting
              }}
              className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {timeIntervals.map((interval) => (
                <option key={interval.value} value={interval.value}>
                  {interval.label}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={resetZoom}
              className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white text-sm rounded-md transition-colors"
              title="Reset Zoom"
            >
              🔍 Reset
            </button>

            <div className="flex items-center space-x-2">
              <div
                className={`w-3 h-3 rounded-full ${isConnected ? "bg-green-500" : "bg-red-500"}`}
              ></div>
              <span className="text-sm text-gray-600">
                {isConnected ? "Connected" : "Disconnected"}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-white rounded-lg border relative">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-90 z-10">
            <div className="flex items-center space-x-2">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
              <span className="text-gray-600">Loading chart data...</span>
            </div>
          </div>
        )}
        <div
          ref={chartContainerRef}
          className="w-full"
          style={{ height: "400px" }}
        />
      </div>

      <div className="mt-4 space-y-2">
        <div className="flex justify-between items-center text-sm text-gray-500">
          <div className="space-y-1">
            <div>
              Last update:{" "}
              {candleData.length > 0 ? (
                <>
                  <span className="font-medium">
                    {new Date(candleData[candleData.length - 1]?.t ?? 0).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: '2-digit', 
                      day: '2-digit'
                    })}
                  </span>
                  {" at "}
                  <span className="font-medium">
                    {new Date(candleData[candleData.length - 1]?.t ?? 0).toLocaleTimeString('en-US', {
                      hour: '2-digit',
                      minute: '2-digit',
                      second: '2-digit',
                      hour12: true
                    })}
                  </span>
                </>
              ) : (
                "N/A"
              )}
            </div>
            <div className="text-xs text-gray-400">
              Period: {selectedPeriod} | Total candles: {candleData.length} | 
              Interval: {timePeriods.find(p => p.value === selectedPeriod)?.interval || selectedInterval}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-xs">
              💡 Mouse wheel: zoom | Click + drag: pan | Double-click: fit content
            </div>
          </div>
        </div>
        {candleData.length > 0 && (
          <div className="bg-gray-50 rounded-lg p-3 text-xs">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <span className="text-gray-500">First candle:</span>
                <div className="font-medium">
                  {new Date(candleData[0]?.t ?? 0).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}
                </div>
              </div>
              <div>
                <span className="text-gray-500">Latest candle:</span>
                <div className="font-medium">
                  {new Date(candleData[candleData.length - 1]?.t ?? 0).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}
                </div>
              </div>
              <div>
                <span className="text-gray-500">Time range:</span>
                <div className="font-medium">
                  {candleData.length > 1 ? Math.ceil(((candleData[candleData.length - 1]?.t ?? 0) - (candleData[0]?.t ?? 0)) / (1000 * 60 * 60 * 24)) : 0} days
                </div>
              </div>
              <div>
                <span className="text-gray-500">Current price:</span>
                <div className="font-medium text-blue-600">
                  ${currentPrice.toFixed(2)}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CandlestickChart;
