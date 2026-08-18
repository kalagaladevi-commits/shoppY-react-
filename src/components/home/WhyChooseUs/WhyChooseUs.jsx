import React from "react";
import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  const points = [
    "Trusted by thousands of happy customers",
    "Easy hassle-free returns within 7 days",
    "Verified top-tier quality products",
    "Best price guarantee on electronics",
    "Super-fast and secure pan-India delivery",
  ];

  return (
    <section className="reference-why-us-section">
      <div className="luxury-container">
        <div className="reference-why-us-grid">
          {/* LEFT: Boutique Retail / Patron Visual */}
          <div className="why-us-image-col">
            <div className="why-us-image-container">
              <img
                src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=900&auto=format&fit=crop&q=85"
                alt="Why Choose Shoppy Store"
                className="why-us-image-ref"
                loading="lazy"
              />
            </div>
          </div>

          {/* RIGHT: Quality Guaranteed Editorial */}
          <div className="why-us-content-col">
            <span className="why-us-ref-eyebrow">QUALITY GUARANTEED</span>

            <h2 className="why-us-ref-title">
              WHY CHOOSE SHOPPY?
            </h2>

            <p className="why-us-ref-desc">
              SHOPPY provides premium quality products with unbeatable prices.
            </p>

            <ul className="why-us-ref-list">
              {points.map((pt, index) => (
                <li key={index} className="why-us-ref-item">
                  <span className="why-us-check-icon">
                    <i className="bi bi-check-circle-fill"></i>
                  </span>
                  <span className="why-us-check-text">{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
