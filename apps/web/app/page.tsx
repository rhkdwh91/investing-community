import CandlestickChart from "@/components/candlestick-chart";

export default function Page() {
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
                      Latest Discussions
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
                      Stocks
                    </button>
                    <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg text-sm font-medium">
                      Crypto
                    </button>
                  </div>
                </div>
                <div className="divide-y divide-gray-200">
                  {/* Discussion Post 1 */}
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
                            NVIDIA Q4 Earnings Analysis - Better than Expected?
                          </h3>
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                            Hot
                          </span>
                        </div>
                        <p className="text-gray-600 mt-1 line-clamp-2">
                          Just reviewed NVIDIA's latest earnings report. Revenue
                          beat expectations at $60.9B vs $57.9B expected. Data
                          center revenue up 409% YoY. What's everyone's take on
                          the guidance for Q1?
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

                  {/* Discussion Post 2 */}
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
                            Market Correction Coming? Fed Policy Impact
                            Discussion
                          </h3>
                        </div>
                        <p className="text-gray-600 mt-1 line-clamp-2">
                          With the recent Fed statements and rising bond yields,
                          are we heading for a market correction? Looking at
                          historical patterns and current economic indicators...
                        </p>
                        <div className="flex items-center space-x-4 mt-3 text-sm text-gray-500">
                          <span>by @sarahmarkets</span>
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

                  {/* Discussion Post 3 */}
                  <div className="p-6 hover:bg-gray-50 cursor-pointer">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">
                          MK
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2">
                          <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600">
                            Bitcoin ETF Impact on Crypto Portfolio Strategy
                          </h3>
                          <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-medium">
                            Crypto
                          </span>
                        </div>
                        <p className="text-gray-600 mt-1 line-clamp-2">
                          How are you all adjusting your crypto portfolios with
                          the new Bitcoin ETFs in the market? Traditional
                          allocation models vs. new opportunities...
                        </p>
                        <div className="flex items-center space-x-4 mt-3 text-sm text-gray-500">
                          <span>by @mikecrypto</span>
                          <span>•</span>
                          <span>6 hours ago</span>
                          <span>•</span>
                          <span className="flex items-center space-x-1">
                            <span>💬</span>
                            <span>12 replies</span>
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
                      Live Chat
                    </h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">127 online</span>
                    </div>
                  </div>
                </div>

                <div
                  className="flex-1 p-4 space-y-4 overflow-y-auto"
                  style={{ maxHeight: "400px" }}
                >
                  {/* Chat Message 1 */}
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-xs">
                        AL
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <span className="font-semibold text-sm text-gray-900">
                          alexinvests
                        </span>
                        <span className="text-xs text-gray-500">2:34 PM</span>
                      </div>
                      <p className="text-sm text-gray-700 mt-1">
                        Anyone watching TSLA today? Volume is unusual 📈
                      </p>
                    </div>
                  </div>

                  {/* Chat Message 2 */}
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
                        <span className="text-xs text-gray-500">2:35 PM</span>
                      </div>
                      <p className="text-sm text-gray-700 mt-1">
                        Yeah, broke resistance at $205. Could run to $220
                      </p>
                    </div>
                  </div>

                  {/* Chat Message 3 */}
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-xs">
                        LM
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <span className="font-semibold text-sm text-gray-900">
                          LisaM
                        </span>
                        <span className="text-xs text-gray-500">2:36 PM</span>
                      </div>
                      <p className="text-sm text-gray-700 mt-1">
                        Earnings coming up next week, might be worth watching
                      </p>
                    </div>
                  </div>

                  {/* Chat Message 4 */}
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-xs">
                        DK
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <span className="font-semibold text-sm text-gray-900">
                          DaveK
                        </span>
                        <span className="text-xs text-gray-500">2:37 PM</span>
                      </div>
                      <p className="text-sm text-gray-700 mt-1">
                        SPY looking weak though, might drag everything down
                      </p>
                    </div>
                  </div>
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
              Market Chart
            </h2>
            <p className="text-gray-600">
              Reference chart for community discussions
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <CandlestickChart />
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
