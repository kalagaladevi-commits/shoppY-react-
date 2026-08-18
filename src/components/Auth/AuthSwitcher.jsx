import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./AuthSwitcher.css";

const AuthSwitcher = ({ activeTab = "signup" }) => {
  const location = useLocation();
  const currentTab = activeTab || (location.pathname.includes("login") ? "login" : "signup");

  return (
    <div className="luxury-auth-switcher" role="tablist" aria-label="Authentication mode">
      <Link
        to="/signup"
        className={`auth-switcher-tab ${currentTab === "signup" ? "is-active" : ""}`}
        role="tab"
        aria-selected={currentTab === "signup"}
      >
        <span>Sign Up</span>
      </Link>

      <Link
        to="/login"
        className={`auth-switcher-tab ${currentTab === "login" ? "is-active" : ""}`}
        role="tab"
        aria-selected={currentTab === "login"}
      >
        <span>Login</span>
      </Link>
    </div>
  );
};

export default AuthSwitcher;
