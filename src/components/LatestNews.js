import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./LatestNews.css";

const newsData = [
  {
    id: 1,
    date: "20 APR",
    title: "The Covid19 Epidemic in 2022 Is Back",
    image: "/assets/latest-news-img1.png",
  },
  {
    id: 2,
    date: "20 APR",
    title: "The Covid19 Epidemic in 2023 Is Back",
    image: "/assets/latest-news-img2.png",
  },
  {
    id: 3,
    date: "20 APR",
    title: "The Covid19 Epidemic in 2023 Is Back",
    image: "/assets/latest-news-img1.png",
  },
  {
    id: 4,
    date: "20 APR",
    title: "The Covid19 Epidemic in 2023 Is Back",
    image: "/assets/latest-news-img2.png",
  },
  {
    id: 5,
    date: "17 MAR",
    title: "The Covid19 Epidemic in 2023 Is Back",
    image: "/assets/latest-news-img1.png",
  },
  {
    id: 6,
    date: "20 APR",
    title: "The Covid19 Epidemic in 2023 Is Back",
    image: "/assets/latest-news-img2.png",
  },
  {
    id: 7,
    date: "20 APR",
    title: "The Covid19 Epidemic in 2023 Is Back",
    image: "/assets/latest-news-img1.png",
  },
  {
    id: 8,
    date: "17 MAR",
    title: "Has Handwritten Notes Semper Suspendisse",
    image: "/assets/latest-news-img2.png",
  }
];

const LatestNews = () => {
  return (
    <div className="latest-news">
      <h3 className="section-title">Our Blog</h3>
      <h2 className="section-subtitle">Latest News</h2>
      <div className="news-grid">
        {newsData.map((news) => (
          <div key={news.id} className="news-card">
            <LazyLoadImage
              src={news.image}
              alt={news.title}

              className="news-image"
            />
            <div className="news-details">
              <span className="news-date">{news.date}</span>
              <h4 className="news-title">{news.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestNews;