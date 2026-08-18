import React from "react";
import "./AboutValues.css";

const AboutValues = () => {
  const values = [
    {
      icon: "bi-heart",
      title: "Customer First",
      desc: "Your satisfaction is our top priority.",
    },
    {
      icon: "bi-shield-check",
      title: "Secure Shopping",
      desc: "100% safe and encrypted payment system.",
    },
    {
      icon: "bi-gift",
      title: "Latest Trends",
      desc: "Stay ahead with the newest products and collections.",
    },
    {
      icon: "bi-tag",
      title: "Affordable Prices",
      desc: "Premium quality at prices you'll love.",
    },
  ];

  return (
    <section className="about-values-section">
      <div className="luxury-container">
        {/* Centered Heading */}
        <div className="about-values-header text-center">
          <span className="about-values-eyebrow">
            WHY CHOOSE SHOPPY
          </span>

          <h2 className="about-values-title font-display">
            THE <span className="text-crimson">VALUES</span> WE STAND FOR
          </h2>

          <p className="about-values-sub">
            More than just a shopping website — we create experiences that matter.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="about-values-cards-grid">
          {values.map((v, index) => (
            <div key={index} className="about-value-card-item">
              <div className="about-val-icon-box">
                <i className={`bi ${v.icon}`}></i>
              </div>

              <h4 className="about-val-card-title font-display">{v.title}</h4>
              <p className="about-val-card-desc">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
