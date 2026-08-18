import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./PromoSection.css";

const PromoSection = () => {
  // Live Countdown Timer for the reference deal card
  const [timeLeft, setTimeLeft] = useState({
    days: "02",
    hours: "14",
    minutes: "38",
    seconds: "59",
  });

  useEffect(() => {
    const target = new Date().getTime() + (2 * 86400 + 14 * 3600 + 38 * 60 + 59) * 1000;
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = Math.max(0, target - now);

      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({
        days: String(d).padStart(2, "0"),
        hours: String(h).padStart(2, "0"),
        minutes: String(m).padStart(2, "0"),
        seconds: String(s).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="reference-promo-section">
      <div className="luxury-container">
        <div className="reference-promo-grid">
          {/* LEFT PROMO CARD: Bold Products / Iconic Style */}
          <div className="promo-card-left">
            <div className="promo-silk-overlay"></div>
            <div className="promo-card-content">
              <span className="promo-ref-eyebrow">NEW ARRIVALS</span>

              <h2 className="promo-ref-title">
                BOLD PRODUCTS.<br />
                <span className="promo-title-crimson">ICONIC STYLE.</span>
              </h2>

              <p className="promo-ref-desc">
                Discover the latest in fashion, electronics, accessories and much more.
              </p>

              <div className="promo-ref-cta-group">
                <Link to="/products" className="btn-luxury-primary promo-primary-btn">
                  <span>SHOP NOW</span>
                  <i className="bi bi-arrow-right"></i>
                </Link>

                <Link to="/about" className="btn-luxury-secondary promo-secondary-btn">
                  <span>EXPLORE STORY</span>
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT PROMO CARD: 50% OFF Limited Time Offer */}
          <div className="promo-card-right">
            <div className="promo-gift-bg-wrap">
              <img
                src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800&auto=format&fit=crop&q=85"
                alt="Limited Time Offer"
                className="promo-gift-img"
                loading="lazy"
              />
              <div className="promo-gift-overlay"></div>
            </div>

            <div className="promo-sale-content">
              <span className="sale-up-to font-mono">UP TO</span>
              <h2 className="sale-percentage-headline">
                <span className="text-crimson">50%</span> OFF
              </h2>
              <span className="sale-badge-label font-mono">LIMITED TIME OFFER</span>

              {/* Countdown Clocks */}
              <div className="sale-countdown-row">
                <div className="sale-timer-box">
                  <span className="timer-number font-mono">{timeLeft.days}</span>
                  <span className="timer-label font-mono">DAYS</span>
                </div>
                <div className="sale-timer-box">
                  <span className="timer-number font-mono">{timeLeft.hours}</span>
                  <span className="timer-label font-mono">HRS</span>
                </div>
                <div className="sale-timer-box">
                  <span className="timer-number font-mono">{timeLeft.minutes}</span>
                  <span className="timer-label font-mono">MINS</span>
                </div>
                <div className="sale-timer-box">
                  <span className="timer-number font-mono">{timeLeft.seconds}</span>
                  <span className="timer-label font-mono">SECS</span>
                </div>
              </div>

              <Link to="/products" className="sale-shop-btn">
                <span>SHOP THE SALE</span>
                <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
