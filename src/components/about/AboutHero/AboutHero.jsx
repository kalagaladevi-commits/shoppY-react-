import React from "react";
import "./AboutHero.css";

const AboutHero = () => {
  return (
    <section className="about-hero-reference-section">
      <div className="luxury-container">
        <div className="about-hero-card">
          {/* Ambient Lighting Background */}
          <div className="about-hero-ring-glow"></div>

          {/* LEFT: Editorial Content (45%) */}
          <div className="about-hero-content-col">
            <span className="about-hero-eyebrow">
              ABOUT SHOPPY
            </span>

            <h1 className="about-hero-headline font-display">
              YOUR TRUSTED ONLINE<br />
              <span className="text-crimson">SHOPPING</span> DESTINATION
            </h1>

            <p className="about-hero-desc">
              Discover quality products, simple shopping, and a better online experience — powered by trust, technology and you.
            </p>

            {/* 3 Trust Chips */}
            <div className="about-trust-chips-row">
              <div className="about-trust-chip">
                <i className="bi bi-tag-fill chip-icon"></i>
                <span>Trusted Brand</span>
              </div>

              <div className="about-trust-chip">
                <i className="bi bi-gem chip-icon"></i>
                <span>Quality Products</span>
              </div>

              <div className="about-trust-chip">
                <i className="bi bi-truck chip-icon"></i>
                <span>Fast Delivery</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Cinematic 3D Watch Composition (55%) */}
          <div className="about-hero-visual-col">
            <div className="about-watch-composition-stage">
              <div className="about-neon-crimson-ring"></div>
              <img
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1000&auto=format&fit=crop&q=90"
                alt="Luxury Black Smartwatch & Horology"
                className="about-watch-main-img"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
