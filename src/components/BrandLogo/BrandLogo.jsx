import React from "react";
import { Link } from "react-router-dom";
import "./BrandLogo.css";

const BrandLogo = ({
  variant = "full",
  size = "md",
  clickable = true,
  className = "",
}) => {
  const content = (
    <div
      className={`brand-logo-container brand-logo-${variant} brand-logo-size-${size} ${className}`}
    >
      <div className="brand-logo-emblem">
        <span className="brand-logo-diamond"></span>
        <i className="bi bi-lock-fill brand-logo-icon"></i>
      </div>

      {variant !== "icon" && (
        <div className="brand-logo-text-group">
          <div className="brand-logo-title">
            <span className="logo-shoppy">SHOPPY</span>
            <span className="logo-luxe">LUXE</span>
          </div>
          {size !== "sm" && (
            <span className="brand-logo-subtitle">CRIMSON & BLACK LUXURY</span>
          )}
        </div>
      )}
    </div>
  );

  if (clickable) {
    return (
      <Link to="/" className="brand-logo-link" aria-label="SHOPPY Home">
        {content}
      </Link>
    );
  }

  return content;
};

export default BrandLogo;
