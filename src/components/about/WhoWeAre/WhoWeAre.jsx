import React from "react";
import { Link } from "react-router-dom";
import "./WhoWeAre.css";

const WhoWeAre = () => {
  return (
    <section className="who-we-are-section">
      <div className="luxury-container">
        <div className="who-we-are-grid">
          {/* LEFT: Boutique Retail / Customer Service Image */}
          <div className="who-we-are-img-col">
            <div className="who-we-are-img-wrapper">
              <img
                src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=900&auto=format&fit=crop&q=85"
                alt="Shoppy Luxe Customer Service & Trust"
                className="who-we-are-img"
                loading="lazy"
              />

              {/* Floating Badge */}
              <div className="who-we-are-exp-badge">
                <span className="badge-exp-number font-display">10+</span>
                <span className="badge-exp-label font-mono">Years of Trusted Service</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Editorial Content */}
          <div className="who-we-are-content-col">
            <span className="who-we-are-eyebrow">
              WHO WE ARE
            </span>

            <h2 className="who-we-are-title font-display">
              BUILDING THE FUTURE OF<br />
              <span className="text-crimson">E-COMMERCE</span> <span className="title-dash">—</span>
            </h2>

            <p className="who-we-are-lead">
              SHOPPY is a modern e-commerce platform built to provide an effortless, delightful shopping experience. Our mission is to connect customers with high-quality products from top brands worldwide.
            </p>

            <p className="who-we-are-sub">
              From the latest tech gadgets and high-performance laptops to everyday fashion and home accessories, our curated catalog is backed by strict quality checks, secure payments, and lightning-fast delivery.
            </p>

            <div className="who-we-are-cta-group">
              <Link to="/products" className="btn-luxury-primary who-we-are-primary-btn">
                <span>EXPLORE OUR CATALOG</span>
                <i className="bi bi-arrow-right"></i>
              </Link>

              <a href="#contact" className="btn-luxury-secondary who-we-are-secondary-btn">
                <span>CONTACT US</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
