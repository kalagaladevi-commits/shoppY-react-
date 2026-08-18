import React from "react";
import { Link } from "react-router-dom";
import "./EmptyCart.css";

const EmptyCart = () => {
  return (
    <div className="luxury-empty-cart-card">
      <div className="empty-cart-ambient-glow"></div>

      {/* Top Circular Cart Icon */}
      <div className="empty-cart-icon-wrapper">
        <i className="bi bi-bag-x empty-cart-main-icon"></i>
      </div>

      {/* Heading */}
      <h2 className="empty-cart-headline">YOUR CART IS CURRENTLY EMPTY</h2>

      {/* Subtitles */}
      <p className="empty-cart-text-primary">
        Looks like you haven't added any products to your cart yet.
      </p>
      <p className="empty-cart-text-secondary">
        Discover our latest gadgets, fashion, and electronics collection!
      </p>

      {/* Primary CTA */}
      <div className="empty-cart-actions">
        <Link to="/products" className="btn-luxury-primary empty-cart-shop-btn">
          <span>START SHOPPING NOW</span>
          <i className="bi bi-arrow-right"></i>
        </Link>
      </div>

      {/* Secondary CTA Row with Divider */}
      <div className="empty-cart-divider-row">
        <div className="empty-cart-divider-line"></div>
      </div>

      <div className="empty-cart-secondary-cta">
        <span className="secondary-cta-lead">
          Your next favorite product is waiting.
        </span>
        <Link to="/products" className="secondary-cta-link">
          <span>EXPLORE PRODUCTS</span>
          <i className="bi bi-arrow-right ms-1"></i>
        </Link>
      </div>
    </div>
  );
};

export default EmptyCart;
