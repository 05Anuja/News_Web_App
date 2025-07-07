import React, { useEffect, useMemo, useState } from "react";

const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const date = new Date().getDate();

  const api = `https://newsapi.org/v2/everything?q=Mumbai&from=2025-07-${
    date - 1  
  }&sortBy=popularity&apiKey=55f9d78a9907409ea884d4b121bce8f8`;

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
      <div className="flex justify-center items-center h-screen text-xl font-semibold">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fff8dc] px-4 py-10">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-gray-800">
        Mumbai News
      </h1>

      <div className="flex justify-center mb-10">
        <input
          type="text"
          name="newsSearch"
          id="newsSearch"
          placeholder="Search news by title..."
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filterNews.map((article, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-5 flex flex-col justify-between hover:shadow-lg transition duration-200 border"
          >
            <h2 className="text-base sm:text-lg font-semibold mb-2 text-gray-800 line-clamp-2">
              {article.title}
            </h2>
            <p className="text-sm text-gray-500 mb-1">
              {article.source.name} | {article.publishedAt?.slice(0, 10)}
            </p>
            <p className="text-sm text-gray-700 mb-4 line-clamp-3">
              {article.description || "No description available."}
            </p>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-block"
            >
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition">
                Read Full Article
              </button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
1