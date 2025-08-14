"use client";

import CandlestickChart from "@/components/candlestick-chart";
import { useState } from "react";

type AssetType = "stocks" | "crypto";

export default function Page() {
  const [activeTab, setActiveTab] = useState<AssetType>("stocks");
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation Header */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">IC</span>
                </div>
                <span className="ml-2 text-xl font-bold text-gray-900">
                  InvestCommunity
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-8">
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium"
              >
                Discussions
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium"
              >
                Charts
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium"
              >
                Members
              </a>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Join Community
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4">
            Your Investment
            <span className="text-blue-600 block">Community Hub</span>
          </h1>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Join live discussions, share insights, and learn from thousands of
            investors in real-time.
          </p>
        </div>
      </section>

      {/* Asset Type Tabs */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center">
            <div className="flex bg-white rounded-xl shadow-sm p-1 mb-8">
              <button
                onClick={() => setActiveTab("stocks")}
                className={`px-8 py-3 rounded-lg font-semibold text-sm transition-all ${
                  activeTab === "stocks"
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                📈 Stocks
              </button>
              <button
                onClick={() => setActiveTab("crypto")}
                className={`px-8 py-3 rounded-lg font-semibold text-sm transition-all ${
                  activeTab === "crypto"
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                ₿ Crypto
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Board and Chat */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Discussion Board */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-gray-900">
                      {activeTab === "stocks"
                        ? "Stock Discussions"
                        : "Crypto Discussions"}
                    </h2>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                      New Post
                    </button>
                  </div>
                  <div className="flex space-x-4 mt-4">
                    <button className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg text-sm font-medium">
                      All
                    </button>
                    <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg text-sm font-medium">
                      Hot
                    </button>
                    <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg text-sm font-medium">
                      Analysis
                    </button>
                    <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg text-sm font-medium">
                      {activeTab === "stocks" ? "Earnings" : "DeFi"}
                    </button>
                  </div>
                </div>
                <div className="divide-y divide-gray-200">
                  {activeTab === "stocks" ? (
                    <>
                      {/* Stock Discussion Post 1 */}
                      <div className="p-6 hover:bg-gray-50 cursor-pointer">
                        <div className="flex items-start space-x-4">
                          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                            <span className="text-white font-semibold text-sm">
                              JD
                            </span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-2">
                              <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600">
                                NVIDIA Q4 Earnings Analysis - Better than
                                Expected?
                              </h3>
                              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                                Hot
                              </span>
                            </div>
                            <p className="text-gray-600 mt-1 line-clamp-2">
                              Just reviewed NVIDIA's latest earnings report.
                              Revenue beat expectations at $60.9B vs $57.9B
                              expected. Data center revenue up 409% YoY. What's
                              everyone's take on the guidance for Q1?
                            </p>
                            <div className="flex items-center space-x-4 mt-3 text-sm text-gray-500">
                              <span>by @johntrader</span>
                              <span>•</span>
                              <span>2 hours ago</span>
                              <span>•</span>
                              <span className="flex items-center space-x-1">
                                <span>💬</span>
                                <span>24 replies</span>
                              </span>
                              <span>•</span>
                              <span className="flex items-center space-x-1">
                                <span>👍</span>
                                <span>56</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Stock Discussion Post 2 */}
                      <div className="p-6 hover:bg-gray-50 cursor-pointer">
                        <div className="flex items-start space-x-4">
                          <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                            <span className="text-white font-semibold text-sm">
                              SM
                            </span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-2">
                              <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600">
                                Apple's Services Revenue Growth Strategy
                              </h3>
                              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                                Analysis
                              </span>
                            </div>
                            <p className="text-gray-600 mt-1 line-clamp-2">
                              With iPhone sales plateauing, Apple's focus on
                              services is paying off. App Store, iCloud, and
                              Apple Pay driving consistent revenue growth. Is
                              this sustainable long-term?
                            </p>
                            <div className="flex items-center space-x-4 mt-3 text-sm text-gray-500">
                              <span>by @sarahstocks</span>
                              <span>•</span>
                              <span>4 hours ago</span>
                              <span>•</span>
                              <span className="flex items-center space-x-1">
                                <span>💬</span>
                                <span>18 replies</span>
                              </span>
                              <span>•</span>
                              <span className="flex items-center space-x-1">
                                <span>👍</span>
                                <span>32</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Stock Discussion Post 3 */}
                      <div className="p-6 hover:bg-gray-50 cursor-pointer">
                        <div className="flex items-start space-x-4">
                          <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                            <span className="text-white font-semibold text-sm">
                              RT
                            </span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-2">
                              <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600">
                                Fed Rate Cuts Impact on Bank Stocks
                              </h3>
                            </div>
                            <p className="text-gray-600 mt-1 line-clamp-2">
                              With potential rate cuts coming, how will this
                              affect major bank stocks like JPM, BAC, and WFC?
                              Historical analysis shows mixed results...
                            </p>
                            <div className="flex items-center space-x-4 mt-3 text-sm text-gray-500">
                              <span>by @ratetrader</span>
                              <span>•</span>
                              <span>6 hours ago</span>
                              <span>•</span>
                              <span className="flex items-center space-x-1">
                                <span>💬</span>
                                <span>15 replies</span>
                              </span>
                              <span>•</span>
                              <span className="flex items-center space-x-1">
                                <span>👍</span>
                                <span>28</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Crypto Discussion Post 1 */}
                      <div className="p-6 hover:bg-gray-50 cursor-pointer">
                        <div className="flex items-start space-x-4">
                          <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                            <span className="text-white font-semibold text-sm">
                              BK
                            </span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-2">
                              <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600">
                                Bitcoin ETF Approval Impact - New All-Time High?
                              </h3>
                              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                                Hot
                              </span>
                            </div>
                            <p className="text-gray-600 mt-1 line-clamp-2">
                              With multiple Bitcoin ETFs now approved, we're
                              seeing massive institutional inflows. Could this
                              be the catalyst for $100k+ Bitcoin? What are your
                              price targets?
                            </p>
                            <div className="flex items-center space-x-4 mt-3 text-sm text-gray-500">
                              <span>by @bitcoinbull</span>
                              <span>•</span>
                              <span>1 hour ago</span>
                              <span>•</span>
                              <span className="flex items-center space-x-1">
                                <span>💬</span>
                                <span>42 replies</span>
                              </span>
                              <span>•</span>
                              <span className="flex items-center space-x-1">
                                <span>👍</span>
                                <span>78</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Crypto Discussion Post 2 */}
                      <div className="p-6 hover:bg-gray-50 cursor-pointer">
                        <div className="flex items-start space-x-4">
                          <div className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center">
                            <span className="text-white font-semibold text-sm">
                              ED
                            </span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-2">
                              <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600">
                                Ethereum Shanghai Upgrade - Staking Rewards
                                Analysis
                              </h3>
                              <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-medium">
                                DeFi
                              </span>
                            </div>
                            <p className="text-gray-600 mt-1 line-clamp-2">
                              Post-Shanghai upgrade, ETH staking yields are
                              stabilizing around 4-5%. Comparing this to
                              traditional bonds and dividend stocks - is it
                              competitive?
                            </p>
                            <div className="flex items-center space-x-4 mt-3 text-sm text-gray-500">
                              <span>by @ethdefi</span>
                              <span>•</span>
                              <span>3 hours ago</span>
                              <span>•</span>
                              <span className="flex items-center space-x-1">
                                <span>💬</span>
                                <span>26 replies</span>
                              </span>
                              <span>•</span>
                              <span className="flex items-center space-x-1">
                                <span>👍</span>
                                <span>45</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Crypto Discussion Post 3 */}
                      <div className="p-6 hover:bg-gray-50 cursor-pointer">
                        <div className="flex items-start space-x-4">
                          <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center">
                            <span className="text-white font-semibold text-sm">
                              AL
                            </span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-2">
                              <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600">
                                Altcoin Season Indicators - Are We There Yet?
                              </h3>
                            </div>
                            <p className="text-gray-600 mt-1 line-clamp-2">
                              Bitcoin dominance at 52% and dropping. Layer 1s
                              like SOL, AVAX showing strength. Traditional
                              altseason metrics suggest we might be entering the
                              next phase...
                            </p>
                            <div className="flex items-center space-x-4 mt-3 text-sm text-gray-500">
                              <span>by @altcoinwatch</span>
                              <span>•</span>
                              <span>5 hours ago</span>
                              <span>•</span>
                              <span className="flex items-center space-x-1">
                                <span>💬</span>
                                <span>31 replies</span>
                              </span>
                              <span>•</span>
                              <span className="flex items-center space-x-1">
                                <span>👍</span>
                                <span>52</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
                <div className="p-6 border-t border-gray-200 text-center">
                  <button className="text-blue-600 hover:text-blue-800 font-medium">
                    View All Discussions →
                  </button>
                </div>
              </div>
            </div>

            {/* Live Chat */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg h-full flex flex-col">
                <div className="p-4 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {activeTab === "stocks" ? "Stock Chat" : "Crypto Chat"}
                    </h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">
                        {activeTab === "stocks" ? "89 online" : "156 online"}
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  className="flex-1 p-4 space-y-4 overflow-y-auto"
                  style={{ maxHeight: "400px" }}
                >
                  {activeTab === "stocks" ? (
                    <>
                      {/* Stock Chat Message 1 */}
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-semibold text-xs">
                            AL
                          </span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <span className="font-semibold text-sm text-gray-900">
                              alexstocks
                            </span>
                            <span className="text-xs text-gray-500">
                              2:34 PM
                            </span>
                          </div>
                          <p className="text-sm text-gray-700 mt-1">
                            Anyone watching TSLA today? Volume is unusual 📈
                          </p>
                        </div>
                      </div>

                      {/* Stock Chat Message 2 */}
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-semibold text-xs">
                            RJ
                          </span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <span className="font-semibold text-sm text-gray-900">
                              RobTrader
                            </span>
                            <span className="text-xs text-gray-500">
                              2:35 PM
                            </span>
                          </div>
                          <p className="text-sm text-gray-700 mt-1">
                            Yeah, broke resistance at $205. Could run to $220
                          </p>
                        </div>
                      </div>

                      {/* Stock Chat Message 3 */}
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-semibold text-xs">
                            LM
                          </span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <span className="font-semibold text-sm text-gray-900">
                              LisaEquities
                            </span>
                            <span className="text-xs text-gray-500">
                              2:36 PM
                            </span>
                          </div>
                          <p className="text-sm text-gray-700 mt-1">
                            NVDA earnings coming up next week, might be worth
                            watching
                          </p>
                        </div>
                      </div>

                      {/* Stock Chat Message 4 */}
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-semibold text-xs">
                            DK
                          </span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <span className="font-semibold text-sm text-gray-900">
                              DaveValue
                            </span>
                            <span className="text-xs text-gray-500">
                              2:37 PM
                            </span>
                          </div>
                          <p className="text-sm text-gray-700 mt-1">
                            SPY looking weak though, might drag everything down
                          </p>
                        </div>
                      </div>

                      {/* Stock Chat Message 5 */}
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-semibold text-xs">
                            MF
                          </span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <span className="font-semibold text-sm text-gray-900">
                              MarketFocus
                            </span>
                            <span className="text-xs text-gray-500">
                              2:38 PM
                            </span>
                          </div>
                          <p className="text-sm text-gray-700 mt-1">
                            Apple services revenue still growing strong 🍎
                          </p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Crypto Chat Message 1 */}
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-semibold text-xs">
                            BT
                          </span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <span className="font-semibold text-sm text-gray-900">
                              BitcoinTom
                            </span>
                            <span className="text-xs text-gray-500">
                              2:34 PM
                            </span>
                          </div>
                          <p className="text-sm text-gray-700 mt-1">
                            BTC ETF flows are insane today! $2.1B inflow 🚀
                          </p>
                        </div>
                      </div>

                      {/* Crypto Chat Message 2 */}
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-semibold text-xs">
                            EH
                          </span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <span className="font-semibold text-sm text-gray-900">
                              EthHolder
                            </span>
                            <span className="text-xs text-gray-500">
                              2:35 PM
                            </span>
                          </div>
                          <p className="text-sm text-gray-700 mt-1">
                            ETH staking rewards at 4.2% now, better than bonds
                          </p>
                        </div>
                      </div>

                      {/* Crypto Chat Message 3 */}
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-semibold text-xs">
                            DX
                          </span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <span className="font-semibold text-sm text-gray-900">
                              DeFiExplorer
                            </span>
                            <span className="text-xs text-gray-500">
                              2:36 PM
                            </span>
                          </div>
                          <p className="text-sm text-gray-700 mt-1">
                            SOL ecosystem growing fast, check out the new DEXs
                          </p>
                        </div>
                      </div>

                      {/* Crypto Chat Message 4 */}
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-semibold text-xs">
                            AT
                          </span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <span className="font-semibold text-sm text-gray-900">
                              AltcoinTrader
                            </span>
                            <span className="text-xs text-gray-500">
                              2:37 PM
                            </span>
                          </div>
                          <p className="text-sm text-gray-700 mt-1">
                            Bitcoin dominance dropping, altseason incoming? 🌊
                          </p>
                        </div>
                      </div>

                      {/* Crypto Chat Message 5 */}
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-semibold text-xs">
                            CH
                          </span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <span className="font-semibold text-sm text-gray-900">
                              CryptoHODL
                            </span>
                            <span className="text-xs text-gray-500">
                              2:38 PM
                            </span>
                          </div>
                          <p className="text-sm text-gray-700 mt-1">
                            Layer 2 tokens pumping hard today 📈
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                <div className="p-4 border-t border-gray-200">
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      placeholder="Type a message..."
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chart Section - Now Secondary */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {activeTab === "stocks"
                ? "Stock Market Chart"
                : "Crypto Market Chart"}
            </h2>
            <p className="text-gray-600">
              {activeTab === "stocks"
                ? "Live stock price data for community discussions"
                : "Live cryptocurrency price data for community discussions"}
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <CandlestickChart
              symbol={activeTab === "stocks" ? "AAPL" : "BTCUSDT"}
              assetType={activeTab === "stocks" ? "stock" : "crypto"}
              key={activeTab}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <p>&copy; 2025 InvestCommunity. All rights reserved.</p>
      </footer>
    </div>
  );
}
