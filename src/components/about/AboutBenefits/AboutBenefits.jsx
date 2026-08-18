import React from "react";
import "./AboutBenefits.css";

const AboutBenefits = () => {
  const benefits = [
    {
      icon: "bi-bag",
      title: "QUALITY PRODUCTS",
      desc: "Hand-picked, certified products with manufacturer warranty and quality assurance.",
    },
    {
      icon: "bi-truck",
      title: "FAST DELIVERY",
      desc: "Reliable logistics network ensuring fast, safely packaged doorstep shipping.",
    },
    {
      icon: "bi-headphones",
      title: "24/7 SUPPORT",
      desc: "Dedicated customer support team ready to assist you anytime, anywhere.",
    },
  ];

  return (
    <section className="about-benefits-panel-section">
      <div className="luxury-container">
        <div className="about-benefits-panel">
          {benefits.map((b, index) => (
            <div key={index} className="about-benefit-col">
              <div className="about-benefit-icon-ring">
                <i className={`bi ${b.icon}`}></i>
              </div>
              <h3 className="about-benefit-col-title font-display">{b.title}</h3>
              <p className="about-benefit-col-desc">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutBenefits;
