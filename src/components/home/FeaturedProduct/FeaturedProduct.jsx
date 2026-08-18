import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../../context/CartContext";
import "./FeaturedProduct.css";

const featuredItem = {
  id: 999,
  title: "NOIR AURA · THE OBSIDIAN CHRONO",
  category: "HOROLOGY MASTERPIECE",
  price: 2450,
  originalPrice: 3200,
  discountPercentage: 23,
  description:
    "Sculpted from a single monolithic billet of forged carbon and mirror-polished DLC black titanium. Houses an automatic in-house co-axial escapement with a 72-hour power reserve and crimson hand-painted rotor.",
  image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1000&auto=format&fit=crop&q=80",
  specs: [
    { label: "Case Architecture", val: "Forged Carbon & Grade 5 Titanium" },
    { label: "Calibre", val: "Cal. 9021 Co-Axial Automatique" },
    { label: "Power Reserve", val: "72 Hours Chronometer Certified" },
    { label: "Limited Edition", val: "Numbered 048 / 100 Worldwide" },
  ],
};

const FeaturedProduct = () => {
  const { addToCart } = useCart();

  const handleQuickBuy = () => {
    addToCart({
      id: featuredItem.id,
      title: featuredItem.title,
      price: featuredItem.price,
      thumbnail: featuredItem.image,
      category: featuredItem.category,
      brand: "NOIR & CRIMSON HAUTE HOROLOGY",
      discountPercentage: featuredItem.discountPercentage,
    });
  };

  return (
    <section className="luxury-featured-section">
      <div className="featured-atmospheric-backglow"></div>

      <div className="luxury-container">
        <div className="featured-editorial-wrapper">
          {/* Left Column: Dramatic Studio Visual */}
          <div className="featured-visual-col">
            <div className="featured-image-stage">
              <div className="stage-spotlight-ring"></div>
              <img
                src={featuredItem.image}
                alt={featuredItem.title}
                className="featured-hero-image"
                loading="lazy"
              />
              <div className="featured-floating-tag">
                <span className="vault-dot"></span>
                <span>VAULT EXCLUSIVE · LOT 048</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="featured-content-col">
            <div className="eyebrow-tag">
              <span>EDITORIAL SPOTLIGHT</span>
            </div>

            <h2 className="featured-product-title">{featuredItem.title}</h2>

            <p className="featured-description">{featuredItem.description}</p>

            {/* Spec Matrix */}
            <div className="featured-spec-matrix">
              {featuredItem.specs.map((s, idx) => (
                <div key={idx} className="spec-matrix-item">
                  <span className="spec-matrix-label">{s.label}</span>
                  <span className="spec-matrix-val">{s.val}</span>
                </div>
              ))}
            </div>

            {/* Price & Action Row */}
            <div className="featured-pricing-bar">
              <div className="featured-price-block">
                <span className="featured-price-lead">VALUATION</span>
                <div className="d-flex align-items-baseline gap-3">
                  <span className="featured-sale-price">${featuredItem.price.toLocaleString()}</span>
                  <span className="featured-original-price">${featuredItem.originalPrice.toLocaleString()}</span>
                  <span className="featured-save-badge">SAVE 23%</span>
                </div>
              </div>

              <div className="featured-btn-group">
                <button
                  className="btn-luxury-primary"
                  onClick={handleQuickBuy}
                  aria-label="Acquire this masterpiece"
                >
                  <i className="bi bi-bag-plus"></i>
                  <span>ACQUIRE PIECE</span>
                </button>

                <Link to="/products" className="btn-luxury-secondary">
                  <span>DETAILS</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;
