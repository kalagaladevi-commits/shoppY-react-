import React from "react";
import "./ServiceCards.css";

const ServiceCards = () => {
  const benefits = [
    {
      icon: "bi-truck",
      title: "FREE SHIPPING",
      desc: "Free delivery on all orders above $99",
    },
    {
      icon: "bi-shield-check",
      title: "SECURE PAYMENT",
      desc: "100% secure payment gateway",
    },
    {
      icon: "bi-headset",
      title: "24/7 SUPPORT",
      desc: "We're here to help you anytime",
    },
    {
      icon: "bi-arrow-repeat",
      title: "EASY RETURNS",
      desc: "7 days easy returns & refunds",
    },
  ];

  return (
    <section className="reference-benefits-section">
      <div className="luxury-container">
        <div className="reference-benefits-strip">
          {benefits.map((b, index) => (
            <div key={index} className="reference-benefit-item">
              <div className="benefit-icon-ring">
                <i className={`bi ${b.icon}`}></i>
              </div>
              <div className="benefit-text-wrap">
                <h4 className="benefit-title">{b.title}</h4>
                <p className="benefit-desc">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
