import React from "react";
import "./TopBar.css";

const TopBar = () => {
  return (
    <div className="top-announcement-bar">
      <div className="luxury-container">
        <div className="top-bar-content">
          <i className="bi bi-truck top-bar-icon"></i>
          <p className="top-bar-text">
            <strong>FREE SHIPPING</strong> on all orders above $99
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
