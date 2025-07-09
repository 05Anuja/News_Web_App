import React, { useEffect, useMemo, useState } from "react";

const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const date = new Date().getDate();
  const API_Key = "55f9d78a9907409ea884d4b121bce8f8";

  const api = `https://newsapi.org/v2/everything?q=India&from=2025-07-${
    date - 1
  }&sortBy=popularity&apiKey=${API_Key}`;

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.articles || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching news:", err);
        setLoading(false);
      });
  }, []);

  const filterNews = useMemo(() => {
    return articles.filter((filterData) =>
      filterData.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, articles]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-xl font-semibold text-orange-700">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-7xl mx-auto">
        {/* <div className="mb-6 flex justify-center">
          <input
            type="text"
            placeholder="Search articles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div> */}

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filterNews.map((article, index) => (
            <div
              key={index}
              className="bg-[#fffaf5] rounded-lg shadow-md p-5 flex flex-col justify-between hover:shadow-lg transition duration-200 border border-orange-100"
            >
              <h2 className="text-base sm:text-lg font-semibold mb-2 text-[#4b2e2e] line-clamp-2">
                {article.title}
              </h2>
              <p className="text-sm text-gray-500 mb-1">
                {article.source.name} | {article.publishedAt?.slice(0, 10)}
              </p>
              <p className="text-sm text-[#5a4a42] mb-4 line-clamp-3">
                {article.description || "No description available."}
              </p>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block"
              >
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:brightness-110 transition">
                  Read Full Article
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
