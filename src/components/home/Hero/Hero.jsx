import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="reference-hero-section">
      <div className="luxury-container">
        <div className="reference-hero-card">
          {/* Ambient Lighting */}
          <div className="hero-glow-crimson-ring"></div>

          {/* LEFT: Content */}
          <div className="hero-left-content">
            <span className="hero-reference-eyebrow">
              SHOPPY • 2026
            </span>

            <h1 className="hero-editorial-title">
              EVERYTHING YOU NEED,<br />
              ALL IN <span className="hero-highlight-crimson">ONE PLACE</span>
            </h1>

            <p className="hero-editorial-desc">
              Explore curated collections and quality products at great prices.
            </p>

            <div className="hero-reference-cta-row">
              <Link to="/products" className="hero-ref-primary-btn">
                <span>EXPLORE PRODUCTS</span>
                <i className="bi bi-arrow-right"></i>
              </Link>

              <button
                type="button"
                className="hero-ref-watch-btn"
                onClick={() => {
                  const el = document.getElementById("shop-categories");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <span className="watch-play-icon">▶</span>
                <span>WATCH VIDEO</span>
              </button>
            </div>

            {/* Avatars & Social Proof */}
            <div className="hero-social-proof">
              <div className="hero-avatars-cluster">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                  alt="Customer 1"
                  className="hero-avatar-img"
                />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                  alt="Customer 2"
                  className="hero-avatar-img"
                />
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80"
                  alt="Customer 3"
                  className="hero-avatar-img"
                />
              </div>
              <span className="hero-social-text">10K+ Happy Customers</span>
            </div>
          </div>

          {/* RIGHT: 3D Product Visual */}
          <div className="hero-right-visual">
            <div className="hero-watch-stage">
              <div className="hero-neon-crimson-circle"></div>
              <img
                src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=1000&auto=format&fit=crop&q=90"
                alt="Luxury Chronograph Watch"
                className="hero-watch-img"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
