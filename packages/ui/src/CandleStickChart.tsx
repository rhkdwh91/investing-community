'use client';

import React, { useEffect, useRef, useState } from 'react';
import type { IChartApi, CandlestickData as LWCandlestickData, UTCTimestamp } from 'lightweight-charts';

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
}

type TimeInterval = '1m' | '3m' | '5m' | '15m' | '30m' | '1h' | '2h' | '4h' | '6h' | '8h' | '12h' | '1d';

const timeIntervals: { value: TimeInterval; label: string }[] = [
    { value: '1m', label: '1 Minute' },
    { value: '3m', label: '3 Minutes' },
    { value: '5m', label: '5 Minutes' },
    { value: '15m', label: '15 Minutes' },
    { value: '30m', label: '30 Minutes' },
    { value: '1h', label: '1 Hour' },
    { value: '2h', label: '2 Hours' },
    { value: '4h', label: '4 Hours' },
    { value: '6h', label: '6 Hours' },
    { value: '8h', label: '8 Hours' },
    { value: '12h', label: '12 Hours' },
    { value: '1d', label: '1 Day' },
];

const CandlestickChart: React.FC<CandlestickChartProps> = ({
                                                               symbol = 'BTCUSDT',
                                                               interval: initialInterval = '1m'
                                                           }) => {
    const chartContainerRef = useRef<HTMLDivElement>(null);
    const chartRef = useRef<IChartApi | null>(null);
    const candlestickSeriesRef = useRef<unknown>(null);

    const [candleData, setCandleData] = useState<CandlestickData[]>([]);
    const [ws, setWs] = useState<WebSocket | null>(null);
    const [isConnected, setIsConnected] = useState(false);
    const [selectedInterval, setSelectedInterval] = useState<TimeInterval>(initialInterval as TimeInterval);
    const [currentPrice, setCurrentPrice] = useState<number>(0);

    // Initialize chart
    useEffect(() => {
        if (typeof window === 'undefined' || !chartContainerRef.current) return;

        const initChart = async () => {
            try {
                const { createChart, ColorType, CandlestickSeries } = await import('lightweight-charts');

                const chart = createChart(chartContainerRef.current!, {
                    layout: {
                        background: { type: ColorType.Solid, color: '#ffffff' },
                        textColor: '#333',
                    },
                    width: chartContainerRef.current?.clientWidth || 800,
                    height: 400,
                    grid: {
                        vertLines: { color: '#e1e1e1' },
                        horzLines: { color: '#e1e1e1' },
                    },
                    crosshair: {
                        mode: 1,
                    },
                    rightPriceScale: {
                        borderColor: '#cccccc',
                    },
                    timeScale: {
                        borderColor: '#cccccc',
                        timeVisible: true,
                        secondsVisible: false,
                    },
                });

                const candlestickSeries = chart.addSeries(CandlestickSeries, {
                    upColor: '#26a69a',
                    downColor: '#ef5350',
                    borderDownColor: '#ef5350',
                    borderUpColor: '#26a69a',
                    wickDownColor: '#ef5350',
                    wickUpColor: '#26a69a',
                });

                chartRef.current = chart;
                candlestickSeriesRef.current = candlestickSeries;

                // Handle resize
                const handleResize = () => {
                    if (chartContainerRef.current && chartRef.current) {
                        chartRef.current.applyOptions({
                            width: chartContainerRef.current.clientWidth,
                        });
                    }
                };

                window.addEventListener('resize', handleResize);

                return () => {
                    window.removeEventListener('resize', handleResize);
                    if (chartRef.current) {
                        chartRef.current.remove();
                        chartRef.current = null;
                        candlestickSeriesRef.current = null;
                    }
                };
            } catch (error) {
                console.error('Error initializing chart:', error);
            }
        };

        initChart();
    }, []);

    // Fetch historical data
    useEffect(() => {
        const fetchHistoricalData = async () => {
            try {
                const response = await fetch(
                    `https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=${selectedInterval}&limit=100`
                );
                const data = await response.json();

                const formattedData: CandlestickData[] = data.map((item: unknown[]) => ({
                    t: item[0] as number,
                    o: parseFloat(item[1] as string),
                    h: parseFloat(item[2] as string),
                    l: parseFloat(item[3] as string),
                    c: parseFloat(item[4] as string),
                    v: parseFloat(item[5] as string),
                }));

                setCandleData(formattedData);
                if (formattedData.length > 0) {
                    setCurrentPrice(formattedData[formattedData.length - 1]?.c ?? 0);
                }

                // Update chart with historical data
                if (candlestickSeriesRef.current) {
                    const candlestickData: LWCandlestickData[] = formattedData.map(item => ({
                        time: (item.t / 1000) as UTCTimestamp,
                        open: item.o,
                        high: item.h,
                        low: item.l,
                        close: item.c,
                    }));

                    (candlestickSeriesRef.current as { setData: (data: unknown) => void }).setData(candlestickData);
                }
            } catch (error) {
                console.error('Error fetching historical data:', error);
            }
        };

        fetchHistoricalData();
    }, [symbol, selectedInterval]);

    // WebSocket connection
    useEffect(() => {
        if (typeof window === 'undefined') return;

        const connectWebSocket = () => {
            try {
                const wsUrl = `wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@kline_${selectedInterval}`;
                const websocket = new WebSocket(wsUrl);

                websocket.onopen = () => {
                    console.log('WebSocket connected');
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
                            time: (newCandle.t / 1000) as UTCTimestamp,
                            open: newCandle.o,
                            high: newCandle.h,
                            low: newCandle.l,
                            close: newCandle.c,
                        };

                        (candlestickSeriesRef.current as { update: (data: unknown) => void }).update(candlestickPoint);
                    }

                    if (kline.x) {
                        // Candle is closed, add to historical data
                        setCandleData(prev => {
                            const updated = [...prev];
                            const lastIndex = updated.length - 1;

                            if (updated[lastIndex] && updated[lastIndex].t === newCandle.t) {
                                updated[lastIndex] = newCandle;
                            } else {
                                updated.push(newCandle);
                                if (updated.length > 100) {
                                    updated.shift();
                                }
                            }
                            return updated;
                        });
                    } else {
                        // Candle is still forming, update current candle
                        setCandleData(prev => {
                            const updated = [...prev];
                            const lastIndex = updated.length - 1;

                            if (updated[lastIndex] && updated[lastIndex].t === newCandle.t) {
                                updated[lastIndex] = newCandle;
                            }
                            return updated;
                        });
                    }
                };

                websocket.onerror = (error) => {
                    console.error('WebSocket error:', error);
                    setIsConnected(false);
                };

                websocket.onclose = () => {
                    console.log('WebSocket disconnected');
                    setIsConnected(false);
                    setTimeout(connectWebSocket, 5000);
                };

                setWs(websocket);
            } catch (error) {
                console.error('Error connecting to WebSocket:', error);
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
    }, [symbol, selectedInterval]);

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

                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <label htmlFor="interval-select" className="text-sm font-medium text-gray-700">
                            Time Frame:
                        </label>
                        <select
                            id="interval-select"
                            value={selectedInterval}
                            onChange={(e) => setSelectedInterval(e.target.value as TimeInterval)}
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
                            <div className={`w-3 h-3 rounded-full ${isConnected ? 'bg-green-500' : 'bg-red-500'}`}></div>
                            <span className="text-sm text-gray-600">
                {isConnected ? 'Connected' : 'Disconnected'}
              </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full bg-white rounded-lg border">
                <div
                    ref={chartContainerRef}
                    className="w-full"
                    style={{ height: '400px' }}
                />
            </div>

            <div className="mt-4 flex justify-between items-center text-sm text-gray-500">
                <div>
                    Last update: {candleData.length > 0 ? new Date(candleData[candleData.length - 1]?.t ?? 0).toLocaleString() : 'N/A'}
                </div>
                <div className="flex items-center space-x-4">
                    <div className="text-xs">
                        💡 Mouse wheel: zoom | Click + drag: pan | Double-click: fit content
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CandlestickChart;