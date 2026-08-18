import React from "react";
import "./BrandValues.css";

const values = [
  {
    icon: "bi-gem",
    title: "Mastery of Material",
    desc: "Every creation uses aerospace titanium, forged carbon, handcrafted Japanese acetate, or full-grain Tuscan hide.",
  },
  {
    icon: "bi-shield-check",
    title: "Vault Authenticity",
    desc: "Every item undergoes rigorous microscopic inspection and comes with a cryptographic NFC certificate of origin.",
  },
  {
    icon: "bi-airplane-engines",
    title: "Private Global Dispatch",
    desc: "Express, fully insured global courier delivery in tamper-evident sealed presentation packaging.",
  },
  {
    icon: "bi-person-badge",
    title: "VIP 24/7 Concierge",
    desc: "Direct access to private client advisors for bespoke commissions, sizing guidance, and private collection requests.",
  },
];

const BrandValues = () => {
  return (
    <section className="luxury-values-section">
      <div className="luxury-container">
        <div className="section-header-editorial text-center mx-auto" style={{ maxWidth: "600px" }}>
          <div className="eyebrow-tag">THE STANDARD</div>
          <h2 className="section-heading-title">UNCOMPROMISING EXCELLENCE</h2>
          <p className="section-heading-desc">
            Built on four pillars of timeless integrity, surgical technical standards, and discreet concierge service.
          </p>
        </div>

        <div className="values-grid">
          {values.map((v, i) => (
            <div key={i} className="value-card-item">
              <div className="value-icon-circle">
                <i className={`bi ${v.icon}`}></i>
              </div>
              <h4 className="value-card-title">{v.title}</h4>
              <p className="value-card-desc">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandValues;
