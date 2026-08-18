import React from "react";
import { Link } from "react-router-dom";
import "./Categories.css";

const collections = [
  {
    id: "mens-watches",
    title: "HAUTE HOROLOGY",
    categoryParam: "mens-watches",
    subtitle: "Precision chronographs & sapphire tourbillons",
    itemCount: "24 Pieces",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&auto=format&fit=crop&q=80",
    tag: "SIGNATURE",
  },
  {
    id: "fragrances",
    title: "HIGH PERFUMERY",
    categoryParam: "fragrances",
    subtitle: "Oud noir, crimson amber & rare botanical extracts",
    itemCount: "18 Blends",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800&auto=format&fit=crop&q=80",
    tag: "LIMITED",
  },
  {
    id: "smartphones",
    title: "HAUTE TECH & AUDIO",
    categoryParam: "smartphones",
    subtitle: "Architectural acoustic monitors & titanium flagships",
    itemCount: "32 Editions",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
    tag: "INNOVATION",
  },
  {
    id: "mens-shirts",
    title: "ATELIER FASHION",
    categoryParam: "mens-shirts",
    subtitle: "Hand-tailored structured wool, silk & leather",
    itemCount: "45 Items",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&auto=format&fit=crop&q=80",
    tag: "NEW SEASON",
  },
  {
    id: "sunglasses",
    title: "EYEWEAR NOIR",
    categoryParam: "sunglasses",
    subtitle: "Japanese acetate frames & polarized crimson gradient lenses",
    itemCount: "15 Designs",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&auto=format&fit=crop&q=80",
    tag: "COVETED",
  },
  {
    id: "furniture",
    title: "SANCTUARY LIVING",
    categoryParam: "furniture",
    subtitle: "Minimalist Italian marble, smoked oak & obsidian glass",
    itemCount: "20 Objects",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&auto=format&fit=crop&q=80",
    tag: "EXCLUSIVE",
  },
];

const Categories = () => {
  return (
    <section className="luxury-collections-section">
      <div className="luxury-container">
        {/* Section Header */}
        <div className="section-header-editorial">
          <div>
            <div className="eyebrow-tag">CURATED DOMAINS</div>
            <h2 className="section-heading-title">EXPLORE COLLECTIONS</h2>
          </div>
          <p className="section-heading-desc">
            Each collection represents uncompromising craftsmanship, rare materiality, and visionary aesthetic purity.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="collections-grid">
          {collections.map((item) => (
            <Link
              key={item.id}
              to={`/products?category=${item.categoryParam}`}
              className="collection-editorial-card"
            >
              <div className="collection-img-container">
                <img
                  src={item.image}
                  alt={item.title}
                  className="collection-card-img"
                  loading="lazy"
                />
                <div className="collection-dark-overlay"></div>
                <div className="collection-crimson-gradient"></div>
              </div>

              <div className="collection-card-content">
                <div className="collection-top-meta">
                  <span className="collection-tag">{item.tag}</span>
                  <span className="collection-count">{item.itemCount}</span>
                </div>

                <div className="collection-bottom-meta">
                  <h3 className="collection-name">{item.title}</h3>
                  <p className="collection-subtitle">{item.subtitle}</p>

                  <div className="collection-explore-btn">
                    <span>EXPLORE VAULT</span>
                    <i className="bi bi-arrow-right"></i>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
