import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./Deals.css";

const dealsData = [
  {
    id: 301,
    title: "Aura Spatial Noise-Cancelling Studio Monitors",
    category: "HAUTE AUDIO",
    price: 349,
    originalPrice: 599,
    discountPercentage: 42,
    claimed: 86,
    stock: 4,
    endsIn: "08h 24m",
    thumbnail: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=80",
    desc: "Beryllium precision acoustic drivers, active carbon isolation, sculpted memory lambskin earcups.",
  },
  {
    id: 302,
    title: "Monolith Titanium Skeleton Chronometer",
    category: "CHRONOMETRY",
    price: 890,
    originalPrice: 1450,
    discountPercentage: 38,
    claimed: 93,
    stock: 2,
    endsIn: "05h 11m",
    thumbnail: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600&auto=format&fit=crop&q=80",
    desc: "DLC black titanium skeleton case with crimson ruby escapement and sapphire crystal.",
  },
  {
    id: 303,
    title: "Crimson Velvet Extract Fragrance 100ml",
    category: "HIGH PERFUMERY",
    price: 210,
    originalPrice: 380,
    discountPercentage: 45,
    claimed: 78,
    stock: 9,
    endsIn: "14h 50m",
    thumbnail: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600&auto=format&fit=crop&q=80",
    desc: "Cambodian oud steeped in Bulgarian rose petals, saffron resin, and smoked black vanilla.",
  },
  {
    id: 304,
    title: "Optique Matte Black Aviator Glasses",
    category: "EYEWEAR",
    price: 195,
    originalPrice: 320,
    discountPercentage: 39,
    claimed: 65,
    stock: 7,
    endsIn: "18h 32m",
    thumbnail: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&auto=format&fit=crop&q=80",
    desc: "Ultra-lightweight Japanese beta-titanium with custom crimson anti-glare Zeiss lenses.",
  },
  {
    id: 305,
    title: "Sculpted Italian Calfskin Weekend Duffle",
    category: "LEATHER GOODS",
    price: 680,
    originalPrice: 1100,
    discountPercentage: 38,
    claimed: 88,
    stock: 3,
    endsIn: "09h 15m",
    thumbnail: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&auto=format&fit=crop&q=80",
    desc: "Full-grain vegetable tanned Tuscan hide with brushed palladium hardware and crimson edge lining.",
  },
  {
    id: 306,
    title: "Double-Face Cashmere Tailored Overcoat",
    category: "ATELIER FASHION",
    price: 890,
    originalPrice: 1490,
    discountPercentage: 40,
    claimed: 74,
    stock: 5,
    endsIn: "22h 05m",
    thumbnail: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&auto=format&fit=crop&q=80",
    desc: "Heavyweight unstructured Italian wool cashmere blend with buffalo horn buttons.",
  },
];

const tiers = ["ALL PRIVATE DEALS", "40%+ PRIVILEGE", "UNDER $400", "HOROLOGY & TECH", "HAUTE ATELIER"];

const Deals = () => {
  const { addToCart } = useCart();
  const [activeTier, setActiveTier] = useState("ALL PRIVATE DEALS");
  const [timeLeft, setTimeLeft] = useState({ hours: 16, minutes: 48, seconds: 32 });

  useEffect(() => {
    window.scrollTo(0, 0);
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

  const filteredDeals = dealsData.filter((deal) => {
    if (activeTier === "40%+ PRIVILEGE") return deal.discountPercentage >= 40;
    if (activeTier === "UNDER $400") return deal.price <= 400;
    if (activeTier === "HOROLOGY & TECH")
      return ["HAUTE AUDIO", "CHRONOMETRY"].includes(deal.category);
    if (activeTier === "HAUTE ATELIER")
      return ["HIGH PERFUMERY", "EYEWEAR", "LEATHER GOODS", "ATELIER FASHION"].includes(
        deal.category
      );
    return true;
  });

  return (
    <div className="luxury-deals-page">
      <div className="luxury-container">
        {/* Deals Hero Header */}
        <div className="deals-page-hero">
          <div className="eyebrow-tag">
            <span className="live-pulse-dot"></span>
            <span>PRIVATE ACCESS · MIDNIGHT DROP</span>
          </div>

          <h1 className="deals-page-title">LIMITED TIME OFFERS</h1>

          <p className="deals-page-subtitle">
            Curated private acquisitions offered under exclusive patron privileges. Once an allocation is claimed, the lot is locked and archived.
          </p>

          {/* Master Countdown Card */}
          <div className="deals-master-countdown">
            <div className="countdown-headline">
              <i className="bi bi-stopwatch text-crimson"></i>
              <span>ALLOCATION WINDOW CLOSING:</span>
            </div>
            <div className="countdown-timer-units">
              <div className="unit-card">
                <span className="unit-num">{String(timeLeft.hours).padStart(2, "0")}</span>
                <span className="unit-tag">HOURS</span>
              </div>
              <span className="unit-sep">:</span>
              <div className="unit-card">
                <span className="unit-num">{String(timeLeft.minutes).padStart(2, "0")}</span>
                <span className="unit-tag">MINUTES</span>
              </div>
              <span className="unit-sep">:</span>
              <div className="unit-card unit-highlight">
                <span className="unit-num">{String(timeLeft.seconds).padStart(2, "0")}</span>
                <span className="unit-tag">SECONDS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tier Tabs */}
        <div className="deals-tier-tabs">
          {tiers.map((tier) => (
            <button
              key={tier}
              className={`deals-tier-pill ${activeTier === tier ? "active" : ""}`}
              onClick={() => setActiveTier(tier)}
            >
              {tier}
            </button>
          ))}
        </div>

        {/* Deals Grid */}
        <div className="deals-full-grid">
          {filteredDeals.map((deal) => (
            <div key={deal.id} className="deals-showcase-card">
              <div className="deal-card-visual">
                <img src={deal.thumbnail} alt={deal.title} className="deal-card-img" />
                <span className="deal-card-tag">-{deal.discountPercentage}% OFF</span>
                <span className="deal-card-timer">
                  <i className="bi bi-clock me-1"></i> {deal.endsIn}
                </span>
              </div>

              <div className="deal-card-info">
                <span className="deal-card-cat">{deal.category}</span>
                <h3 className="deal-card-heading">
                  <Link to={`/products/${deal.id}`}>{deal.title}</Link>
                </h3>
                <p className="deal-card-desc">{deal.desc}</p>

                <div className="deal-card-pricing">
                  <div className="d-flex align-items-baseline gap-2">
                    <span className="deal-card-price">${deal.price.toLocaleString()}</span>
                    <span className="deal-card-orig">${deal.originalPrice.toLocaleString()}</span>
                  </div>
                  <span className="deal-save-pill">
                    SAVE ${(deal.originalPrice - deal.price).toLocaleString()}
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="deal-claimed-section">
                  <div className="d-flex justify-content-between font-mono text-muted mb-1" style={{ fontSize: "0.72rem" }}>
                    <span>{deal.claimed}% Allocation Claimed</span>
                    <span className="text-warning">Only {deal.stock} Left</span>
                  </div>
                  <div className="deal-track-bg">
                    <div className="deal-track-fill" style={{ width: `${deal.claimed}%` }}></div>
                  </div>
                </div>

                <button
                  className="btn-luxury-primary w-100"
                  onClick={() =>
                    addToCart({
                      id: deal.id,
                      title: deal.title,
                      price: deal.price,
                      thumbnail: deal.thumbnail,
                      category: deal.category,
                      discountPercentage: deal.discountPercentage,
                    })
                  }
                >
                  <i className="bi bi-lightning-charge-fill"></i>
                  <span>CLAIM PRIVILEGE</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Deals;
