"use client";

import { useState } from "react";

interface CommunityPost {
  id: string;
  title: string;
  content: string;
  author: {
    name: string;
    username: string;
    avatar: string;
  };
  category: string;
  tags: string[];
  likes: number;
  comments: number;
  views: number;
  createdAt: string;
  isPinned?: boolean;
  isHot?: boolean;
}

const POSTS_PER_PAGE = 10;

const mockPosts: CommunityPost[] = [
  {
    id: "1",
    title: "2024년 투자 전략 공유 - 성장주 vs 가치주",
    content:
      "올해 시장 변동성이 큰 상황에서 어떤 투자 전략이 효과적일지 의견을 나누고 싶습니다. 개인적으로는 기술주 중심의 성장주 포트폴리오를 구성했는데...",
    author: {
      name: "김투자",
      username: "kiminvest",
      avatar: "KI",
    },
    category: "투자전략",
    tags: ["성장주", "가치주", "포트폴리오"],
    likes: 42,
    comments: 18,
    views: 256,
    createdAt: "2024-03-15T10:30:00Z",
    isPinned: true,
    isHot: true,
  },
  {
    id: "2",
    title: "삼성전자 실적 분석 및 향후 전망",
    content:
      "삼성전자 최근 실적을 분석해보니 메모리 반도체 업황 회복 신호가 보이는 것 같습니다. 특히 HBM 수요 증가가 주목할만한데...",
    author: {
      name: "분석러",
      username: "analyzer99",
      avatar: "AN",
    },
    category: "기업분석",
    tags: ["삼성전자", "반도체", "실적분석"],
    likes: 38,
    comments: 24,
    views: 312,
    createdAt: "2024-03-15T09:15:00Z",
    isHot: true,
  },
  {
    id: "3",
    title: "미국 금리 인하 전망과 한국 증시 영향",
    content:
      "연준의 금리 인하 시기가 점점 늦춰지고 있는 가운데, 한국 증시에 미칠 영향을 분석해보겠습니다...",
    author: {
      name: "경제박사",
      username: "econdr",
      avatar: "EC",
    },
    category: "거시경제",
    tags: ["금리", "연준", "한국증시"],
    likes: 56,
    comments: 31,
    views: 428,
    createdAt: "2024-03-15T08:45:00Z",
  },
  {
    id: "4",
    title: "비트코인 ETF 승인 이후 암호화폐 시장 동향",
    content:
      "비트코인 ETF 승인 이후 기관 투자자들의 유입이 증가하고 있습니다. 이번 상승장의 지속성에 대해 어떻게 생각하시나요?",
    author: {
      name: "코인매니아",
      username: "cryptomania",
      avatar: "CM",
    },
    category: "암호화폐",
    tags: ["비트코인", "ETF", "기관투자"],
    likes: 73,
    comments: 45,
    views: 589,
    createdAt: "2024-03-15T07:20:00Z",
  },
  {
    id: "5",
    title: "신규 상장 기업 분석 - 테슬라와 비교",
    content:
      "최근 상장한 전기차 관련 기업들을 테슬라와 비교 분석해보겠습니다. 밸류에이션과 성장성 측면에서...",
    author: {
      name: "주식초보",
      username: "stocknewbie",
      avatar: "SN",
    },
    category: "IPO분석",
    tags: ["IPO", "전기차", "테슬라"],
    likes: 29,
    comments: 12,
    views: 198,
    createdAt: "2024-03-14T16:30:00Z",
  },
  {
    id: "6",
    title: "배당주 투자 전략 - 안전한 수익률 추구",
    content:
      "변동성이 큰 시장에서 안정적인 배당 수익을 추구하는 전략에 대해 토론해보죠. 추천 종목도 공유해주세요.",
    author: {
      name: "배당왕",
      username: "dividendking",
      avatar: "DK",
    },
    category: "배당투자",
    tags: ["배당주", "안정투자", "수익률"],
    likes: 35,
    comments: 19,
    views: 287,
    createdAt: "2024-03-14T14:15:00Z",
  },
  {
    id: "7",
    title: "글로벌 인플레이션과 투자 포트폴리오 조정",
    content:
      "지속되는 인플레이션 압력 속에서 포트폴리오를 어떻게 조정해야 할지 고민이 많습니다. 실물자산 비중을 늘려야 할까요?",
    author: {
      name: "펀드매니저",
      username: "fundmgr",
      avatar: "FM",
    },
    category: "자산배분",
    tags: ["인플레이션", "자산배분", "실물자산"],
    likes: 48,
    comments: 27,
    views: 356,
    createdAt: "2024-03-14T11:45:00Z",
  },
  {
    id: "8",
    title: "ESG 투자의 미래 - 지속가능한 투자 전략",
    content:
      "ESG 투자가 단순한 트렌드가 아닌 필수가 되어가고 있습니다. 장기적 관점에서 ESG 기업에 투자하는 것에 대한 의견을 나누고 싶습니다.",
    author: {
      name: "그린투자자",
      username: "greeninvestor",
      avatar: "GI",
    },
    category: "ESG투자",
    tags: ["ESG", "지속가능", "장기투자"],
    likes: 41,
    comments: 22,
    views: 298,
    createdAt: "2024-03-14T09:30:00Z",
  },
  {
    id: "9",
    title: "AI 관련주 투자 기회 분석",
    content:
      "ChatGPT 열풍 이후 AI 관련주들이 큰 주목을 받고 있습니다. 하지만 거품 논란도 있는데, 진짜 투자 가치가 있는 기업들을 찾아보겠습니다.",
    author: {
      name: "테크분석가",
      username: "techanalyst",
      avatar: "TA",
    },
    category: "기술주분석",
    tags: ["AI", "기술주", "투자기회"],
    likes: 67,
    comments: 38,
    views: 445,
    createdAt: "2024-03-13T15:20:00Z",
  },
  {
    id: "10",
    title: "중국 시장 리오프닝 효과와 투자 전략",
    content:
      "중국의 코로나 정책 변화로 경제 리오프닝이 본격화되고 있습니다. 중국 관련주나 원자재 투자에 대한 의견이 궁금합니다.",
    author: {
      name: "차이나워처",
      username: "chinawatcher",
      avatar: "CW",
    },
    category: "해외투자",
    tags: ["중국", "리오프닝", "원자재"],
    likes: 33,
    comments: 16,
    views: 243,
    createdAt: "2024-03-13T13:10:00Z",
  },
];

const categories = [
  "전체",
  "투자전략",
  "기업분석",
  "거시경제",
  "암호화폐",
  "IPO분석",
  "배당투자",
  "자산배분",
  "ESG투자",
  "기술주분석",
  "해외투자",
];

const sortOptions = [
  { value: "latest", label: "최신순" },
  { value: "popular", label: "인기순" },
  { value: "comments", label: "댓글순" },
  { value: "views", label: "조회순" },
];

export default function Page() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [sortBy, setSortBy] = useState("latest");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = mockPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "전체" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    switch (sortBy) {
      case "popular":
        return b.likes - a.likes;
      case "comments":
        return b.comments - a.comments;
      case "views":
        return b.views - a.views;
      default:
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
    }
  });

  const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = sortedPosts.slice(
    startIndex,
    startIndex + POSTS_PER_PAGE,
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 60 * 60),
    );

    if (diffInHours < 1) return "방금 전";
    if (diffInHours < 24) return `${diffInHours}시간 전`;
    if (diffInHours < 48) return "어제";
    return date.toLocaleDateString("ko-KR", { month: "short", day: "numeric" });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">FS</span>
                </div>
                <span className="ml-2 text-xl font-bold text-gray-900">
                  FinSight
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-8">
              <a
                href="#"
                className="text-blue-600 border-b-2 border-blue-600 px-3 py-2 text-sm font-medium"
              >
                커뮤니티
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium"
              >
                뉴스
              </a>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                글쓰기
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            투자 인사이트를 공유하는
            <span className="text-blue-600 block">스마트 커뮤니티</span>
          </h1>
          <p className="text-gray-600 mb-4 max-w-2xl mx-auto">
            실시간 토론, 전문가 분석, 데이터 기반 투자 정보를 한 곳에서
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <input
                type="text"
                placeholder="제목, 내용으로 검색..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mt-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Posts List */}
        <div className="bg-white rounded-lg shadow-sm">
          {currentPosts.map((post) => (
            <div
              key={post.id}
              className={`p-6 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 cursor-pointer transition-colors ${
                post.isPinned ? "bg-blue-50 border-blue-200" : ""
              }`}
            >
              <div className="flex items-start space-x-4">
                {/* Avatar */}
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-semibold text-sm">
                    {post.author.avatar}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-2">
                    {post.isPinned && (
                      <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">
                        📌 공지
                      </span>
                    )}
                    {post.isHot && (
                      <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-medium">
                        🔥 인기
                      </span>
                    )}
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 mb-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 mb-3 line-clamp-2">
                    {post.content}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Meta */}
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>by @{post.author.username}</span>
                    <span>•</span>
                    <span>{formatDate(post.createdAt)}</span>
                    <span>•</span>
                    <span className="flex items-center space-x-1">
                      <span>👁️</span>
                      <span>{post.views.toLocaleString()}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center space-x-1">
                      <span>💬</span>
                      <span>{post.comments}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center space-x-1">
                      <span>👍</span>
                      <span>{post.likes}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-2 mt-8">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              이전
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  currentPage === page
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() =>
                setCurrentPage(Math.min(totalPages, currentPage + 1))
              }
              disabled={currentPage === totalPages}
              className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              다음
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
