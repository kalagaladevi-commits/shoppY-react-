import React from "react";
import "./CartFeatures.css";

const FEATURES = [
  {
    icon: "bi-patch-check-fill",
    title: "QUALITY PRODUCTS",
    description: "Hand-picked premium products with quality assurance.",
  },
  {
    icon: "bi-truck",
    title: "FAST DELIVERY",
    description: "Quick and reliable delivery at your doorstep.",
  },
  {
    icon: "bi-shield-lock-fill",
    title: "SECURE CHECKOUT",
    description: "100% secure payments and protected transactions.",
  },
];

const CartFeatures = () => {
  return (
    <div className="luxury-cart-features-strip">
      {FEATURES.map((feature, index) => (
        <div key={index} className="cart-feature-card">
          <div className="feature-icon-circle">
            <i className={`bi ${feature.icon}`}></i>
          </div>
          <div className="feature-card-content">
            <h4 className="feature-card-title">{feature.title}</h4>
            <p className="feature-card-desc">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartFeatures;
