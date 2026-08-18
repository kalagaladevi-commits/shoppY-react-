import React from "react";
import { Link } from "react-router-dom";
import "./HeroBanner.css";

const HeroBanner = ({
  tag = "NOIR & CRIMSON",
  title = "Curated Precision. Iconic Presence.",
  text = "Discover rare horology, high acoustics, and atelier fashion.",
  btnText = "Explore Collection",
  btnLink = "/products",
  image = "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=1000&auto=format&fit=crop&q=80",
}) => {
  return (
    <section className="shop-hero container">
      <div className="shop-hero-wrapper">
        <img
          src={image}
          alt={title}
          className="shop-hero-image"
        />
        <div className="shop-hero-overlay">
          <div className="shop-hero-content">
            <span className="shop-hero-title">{tag}</span>
            <h1 className="shop-hero-subtitle">{title}</h1>
            <p className="shop-hero-text">{text}</p>
            <Link to={btnLink} className="btn-luxury-primary">
              <span>{btnText}</span>
              <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
