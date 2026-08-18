import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./MobileNavigation.css";

const MobileNavigation = () => {
  const location = useLocation();

  // Hide mobile bottom nav on login/signup full auth views
  const hideOnAuth = ["/login", "/signup", "/useform"].includes(location.pathname.toLowerCase());
  if (hideOnAuth) return null;

  return (
    <nav className="mobile-bottom-nav" aria-label="Mobile Bottom Navigation">
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          isActive ? "mobile-bottom-item active" : "mobile-bottom-item"
        }
      >
        <div className="mobile-bottom-icon">
          <i className="bi bi-house"></i>
        </div>
        <span className="mobile-bottom-label">Home</span>
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "mobile-bottom-item active" : "mobile-bottom-item"
        }
      >
        <div className="mobile-bottom-icon">
          <i className="bi bi-info-circle"></i>
        </div>
        <span className="mobile-bottom-label">About</span>
      </NavLink>

      <NavLink
        to="/products"
        className={({ isActive }) =>
          isActive ? "mobile-bottom-item active" : "mobile-bottom-item"
        }
      >
        <div className="mobile-bottom-icon">
          <i className="bi bi-grid"></i>
        </div>
        <span className="mobile-bottom-label">Products</span>
      </NavLink>
    </nav>
  );
};

export default MobileNavigation;
