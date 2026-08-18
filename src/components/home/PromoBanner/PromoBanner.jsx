import React from "react";
import { Link } from "react-router-dom";
import "./PromoBanner.css";

const PromoBanner = () => {
  return (
    <section className="luxury-promo-banner-section">
      <div className="luxury-container">
        <div className="promo-banner-card">
          <div className="promo-background-glow"></div>

          {/* Left Text */}
          <div className="promo-text-side">
            <div className="eyebrow-tag">
              <span>EDITORIAL MANIFESTO</span>
            </div>

            <h2 className="promo-headline">
              YOUR STYLE.<br />
              YOUR CHOICE.<br />
              <span className="promo-crimson-phrase">YOUR MOMENT.</span>
            </h2>

            <p className="promo-subhead">
              The boundaries of modern aesthetics redefined. Experience private previews, limited capsule releases, and bespoke curator services.
            </p>

            <div className="promo-actions">
              <Link to="/products" className="btn-luxury-primary">
                <span>DISCOVER MORE</span>
                <i className="bi bi-arrow-right"></i>
              </Link>
              <Link to="/about" className="btn-luxury-secondary">
                <span>OUR PHILOSOPHY</span>
              </Link>
            </div>
          </div>

          {/* Right Product Visual */}
          <div className="promo-visual-side">
            <div className="promo-visual-wrapper">
              <img
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=900&auto=format&fit=crop&q=80"
                alt="Haute Fashion Editorial"
                className="promo-image"
                loading="lazy"
              />
              <div className="promo-floating-seal">
                <i className="bi bi-patch-check-fill text-crimson"></i>
                <div>
                  <small className="d-block text-muted">COLLECTION</small>
                  <strong>HAUTE NOIR 2026</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
