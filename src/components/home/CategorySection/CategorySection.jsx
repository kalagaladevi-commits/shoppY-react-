import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CategorySection.css";

const CategorySection = () => {
  const [activeCategory, setActiveCategory] = useState(2); // 3rd card ("Accessories") active by default like reference

  const categories = [
    {
      id: 0,
      title: "MOBILES",
      count: "120+ Items",
      icon: "bi-phone",
    },
    {
      id: 1,
      title: "LAPTOPS",
      count: "80+ Items",
      icon: "bi-laptop",
    },
    {
      id: 2,
      title: "ACCESSORIES",
      count: "200+ Items",
      icon: "bi-headphones",
    },
    {
      id: 3,
      title: "FASHION",
      count: "150+ Items",
      icon: "bi-bag",
    },
  ];

  return (
    <section className="reference-category-section" id="shop-categories">
      <div className="luxury-container">
        {/* Centered Heading */}
        <div className="ref-category-header text-center">
          <span className="ref-category-eyebrow">CURATED FOR YOU</span>
          <h2 className="ref-category-title">SHOP BY CATEGORY</h2>
        </div>

        {/* 4 Cards Row */}
        <div className="ref-category-cards-grid">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <Link
                key={cat.id}
                to="/products"
                className={`ref-category-card ${isActive ? "active-glow" : ""}`}
                onMouseEnter={() => setActiveCategory(cat.id)}
              >
                <div className="ref-cat-icon">
                  <i className={`bi ${cat.icon}`}></i>
                </div>
                <h3 className="ref-cat-name">{cat.title}</h3>
                <span className="ref-cat-count">{cat.count}</span>
              </Link>
            );
          })}
        </div>

        {/* Carousel Indicator Dots */}
        <div className="ref-category-dots-row">
          {categories.map((cat) => (
            <span
              key={cat.id}
              className={`ref-cat-dot ${activeCategory === cat.id ? "active-dot" : ""}`}
              onClick={() => setActiveCategory(cat.id)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
