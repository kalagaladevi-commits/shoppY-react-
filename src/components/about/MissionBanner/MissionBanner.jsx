import React from "react";
import { Link } from "react-router-dom";
import "./MissionBanner.css";

const MissionBanner = () => {
  return (
    <section className="about-mission-section">
      <div className="luxury-container">
        <div className="about-mission-card">
          <div className="mission-glow-backdrop"></div>

          {/* LEFT: Mission Headline & Text */}
          <div className="mission-content-side">
            <span className="mission-ref-eyebrow">
              OUR MISSION
            </span>

            <h2 className="mission-ref-title font-display">
              Making Online Shopping<br />
              Smarter, <span className="text-crimson">Easier & Better</span>
            </h2>

            <p className="mission-ref-desc">
              Join thousands of happy customers who trust SHOPPY every day.
            </p>
          </div>

          {/* CENTER: Start Shopping CTA */}
          <div className="mission-cta-side">
            <Link to="/products" className="btn-luxury-primary mission-action-btn">
              <span>START SHOPPING</span>
              <i className="bi bi-arrow-right"></i>
            </Link>
          </div>

          {/* RIGHT: 3D Luxury Shopping Bags Visual */}
          <div className="mission-visual-side">
            <img
              src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800&auto=format&fit=crop&q=85"
              alt="Shoppy Luxe Shopping Bags"
              className="mission-bags-img"
              loading="lazy"
            />
            <div className="mission-bags-overlay"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionBanner;
