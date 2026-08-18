import React from "react";
import "./AuthBenefits.css";

const BENEFITS_DATA = [
  {
    icon: "bi-shield-check",
    title: "Secure & Private",
    description: "Your data is protected with top-tier encryption.",
  },
  {
    icon: "bi-tag",
    title: "Exclusive Deals",
    description: "Get access to members-only offers & discounts.",
  },
  {
    icon: "bi-lightning-charge",
    title: "Instant Access",
    description: "Quick login & checkout for a seamless shopping.",
  },
  {
    icon: "bi-headset",
    title: "24/7 Support",
    description: "We're here to help you anytime, anywhere.",
  },
];

const AuthBenefits = () => {
  return (
    <div className="luxury-auth-benefits-bar">
      {BENEFITS_DATA.map((item, index) => (
        <div key={index} className="auth-benefit-column">
          <div className="benefit-icon-box">
            <i className={`bi ${item.icon}`}></i>
          </div>

          <div className="benefit-text-group">
            <h4 className="benefit-title">{item.title}</h4>
            <p className="benefit-desc">{item.description}</p>
          </div>

          {index < BENEFITS_DATA.length - 1 && (
            <div className="benefit-divider-desktop"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AuthBenefits;
