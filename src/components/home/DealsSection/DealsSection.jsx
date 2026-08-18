import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../../context/CartContext";
import "./DealsSection.css";

const flashDeals = [
  {
    id: 501,
    title: "Aura Noise-Cancelling Over-Ear",
    category: "HAUTE AUDIO",
    price: 349,
    originalPrice: 599,
    discountPercentage: 42,
    claimedPercent: 82,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=80",
    stock: 6,
  },
  {
    id: 502,
    title: "Monolith Titanium Mechanical Watch",
    category: "CHRONOMETRY",
    price: 890,
    originalPrice: 1450,
    discountPercentage: 38,
    claimedPercent: 91,
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600&auto=format&fit=crop&q=80",
    stock: 3,
  },
  {
    id: 503,
    title: "Crimson Velvet Signature Fragrance 100ml",
    category: "PERFUMERY",
    price: 210,
    originalPrice: 380,
    discountPercentage: 45,
    claimedPercent: 76,
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600&auto=format&fit=crop&q=80",
    stock: 11,
  },
  {
    id: 504,
    title: "Minimalist Matte Black Acetate Frames",
    category: "EYEWEAR",
    price: 195,
    originalPrice: 320,
    discountPercentage: 39,
    claimedPercent: 64,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&auto=format&fit=crop&q=80",
    stock: 9,
  },
];

const DealsSection = () => {
  const { addToCart } = useCart();

  // 48h Flash drop countdown timer
  const [timeLeft, setTimeLeft] = useState({
    hours: 14,
    minutes: 42,
    seconds: 19,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 24, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="luxury-deals-section">
      <div className="deals-ambient-glow"></div>

      <div className="luxury-container">
        {/* Header with Live Countdown */}
        <div className="deals-header-row">
          <div>
            <div className="eyebrow-tag">
              <span className="live-pulse-dot"></span>
              <span>FLASH DROP · PRIVATE ACCESS</span>
            </div>
            <h2 className="deals-main-heading">LIMITED TIME OFFERS</h2>
          </div>

          {/* Countdown Clock */}
          <div className="deals-countdown-box">
            <span className="countdown-label">CLOSES IN:</span>
            <div className="countdown-digits">
              <div className="time-digit">
                <span className="digit-val">{String(timeLeft.hours).padStart(2, "0")}</span>
                <span className="digit-unit">HRS</span>
              </div>
              <span className="time-colon">:</span>
              <div className="time-digit">
                <span className="digit-val">{String(timeLeft.minutes).padStart(2, "0")}</span>
                <span className="digit-unit">MIN</span>
              </div>
              <span className="time-colon">:</span>
              <div className="time-digit highlight-crimson">
                <span className="digit-val">{String(timeLeft.seconds).padStart(2, "0")}</span>
                <span className="digit-unit">SEC</span>
              </div>
            </div>
          </div>
        </div>

        {/* Deals Cards Grid */}
        <div className="deals-cards-grid">
          {flashDeals.map((deal) => (
            <div key={deal.id} className="compact-deal-card">
              {/* Image & Discount Badge */}
              <div className="deal-image-container">
                <img src={deal.image} alt={deal.title} className="deal-image" loading="lazy" />
                <span className="deal-discount-badge">-{deal.discountPercentage}% OFF</span>
              </div>

              {/* Deal Body */}
              <div className="deal-body">
                <span className="deal-category">{deal.category}</span>
                <h4 className="deal-title">
                  <Link to={`/products/${deal.id}`}>{deal.title}</Link>
                </h4>

                <div className="deal-price-row">
                  <span className="deal-sale-price">${deal.price}</span>
                  <span className="deal-orig-price">${deal.originalPrice}</span>
                </div>

                {/* Progress Claimed Bar */}
                <div className="deal-progress-box">
                  <div className="progress-label-row">
                    <small>Claimed: {deal.claimedPercent}%</small>
                    <small className="text-warning">Only {deal.stock} Left</small>
                  </div>
                  <div className="deal-progress-bar-bg">
                    <div
                      className="deal-progress-fill"
                      style={{ width: `${deal.claimedPercent}%` }}
                    ></div>
                  </div>
                </div>

                {/* Quick Add CTA */}
                <button
                  className="deal-cta-btn"
                  onClick={() =>
                    addToCart({
                      id: deal.id,
                      title: deal.title,
                      price: deal.price,
                      thumbnail: deal.image,
                      category: deal.category,
                      discountPercentage: deal.discountPercentage,
                    })
                  }
                >
                  <i className="bi bi-lightning-charge-fill"></i>
                  <span>CLAIM OFFER</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="deals-view-all-row">
          <Link to="/deals" className="btn-luxury-primary">
            <span>VIEW ALL ACTIVE DEALS</span>
            <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DealsSection;
