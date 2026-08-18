import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./Header.css";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { totalItemCount } = useCart();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`header-outer-wrapper ${scrolled ? "is-scrolled" : ""} ${
        mobileMenuOpen ? "drawer-open" : ""
      }`}
    >
      <div className="header-floating-pill">
        {/* Brand Logo */}
        <Link to="/" className="brand-logo-reference" aria-label="SHOPPY LUXE Home">
          <div className="brand-icon-box">
            <i className="bi bi-bag"></i>
          </div>
          <span className="brand-name-bold">SHOPPY</span>
          <span className="brand-name-luxe">LUXE</span>
        </Link>

        {/* Center Nav Links */}
        <nav className="header-center-nav" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                isActive ? "nav-link-pill active" : "nav-link-pill"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Right Auth & Cart Action Group */}
        <div className="header-actions-group">
          <Link to="/login" className="header-action-login">
            Login
          </Link>

          <Link to="/signup" className="header-action-signup">
            SIGN UP
          </Link>

          <Link to="/user" className="header-profile-icon-btn" aria-label="User Profile">
            <i className="bi bi-person"></i>
          </Link>

          {/* Cart Icon */}
          <Link to="/cart" className="header-cart-icon-btn" aria-label="Shopping Cart">
            <i className="bi bi-cart3"></i>
            {totalItemCount > 0 && (
              <span className="header-cart-badge">{totalItemCount}</span>
            )}
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            className="mobile-hamburger-btn"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            <i className={`bi bi-${mobileMenuOpen ? "x-lg" : "list"}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          className="mobile-drawer-overlay"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="mobile-drawer-pane"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="drawer-top">
              <div className="brand-logo-reference">
                <div className="brand-icon-box">
                  <i className="bi bi-bag"></i>
                </div>
                <span className="brand-name-bold">SHOPPY</span>
                <span className="brand-name-luxe">LUXE</span>
              </div>
              <button
                className="drawer-close"
                onClick={() => setMobileMenuOpen(false)}
              >
                <i className="bi bi-x-lg"></i>
              </button>
            </div>

            <nav className="drawer-links">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === "/"}
                  className={({ isActive }) =>
                    isActive ? "drawer-item active" : "drawer-item"
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>{link.name}</span>
                  <i className="bi bi-chevron-right"></i>
                </NavLink>
              ))}
            </nav>

            <div className="drawer-auth">
              <Link
                to="/login"
                className="btn-luxury-secondary w-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                LOGIN
              </Link>
              <Link
                to="/signup"
                className="btn-luxury-primary w-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                SIGN UP
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
