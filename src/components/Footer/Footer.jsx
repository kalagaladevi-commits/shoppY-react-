import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="luxury-site-footer" id="contact">
      <div className="luxury-container">
        <div className="luxury-footer-grid">
          {/* Brand Column */}
          <div className="luxury-footer-brand-col">
            <Link to="/" className="footer-brand-logo" aria-label="SHOPPY LUXE Home">
              <div className="footer-brand-emblem">
                <i className="bi bi-bag"></i>
              </div>
              <div className="footer-brand-text">
                <span className="footer-brand-name">SHOPPY</span>
                <span className="footer-brand-tag">LUXE</span>
              </div>
            </Link>

            <span className="footer-brand-edition-sub">CRIMSON & BLACK LUXURY</span>

            <p className="luxury-footer-tagline">
              A modern luxury e-commerce platform built for quality shopping, fast
              delivery, and an unbeatable customer experience.
            </p>

            <div className="luxury-footer-social-row">
              <a href="#facebook" aria-label="Facebook" className="footer-social-pill">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#x" aria-label="X" className="footer-social-pill">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="#instagram" aria-label="Instagram" className="footer-social-pill">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#linkedin" aria-label="LinkedIn" className="footer-social-pill">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="#youtube" aria-label="YouTube" className="footer-social-pill">
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="luxury-footer-col">
            <h6 className="luxury-footer-col-title">QUICK LINKS</h6>
            <ul className="luxury-footer-link-list">
              <li>
                <Link to="/" className={location.pathname === "/" ? "active-footer-link" : ""}>
                  <i className="bi bi-chevron-right me-1"></i>Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={location.pathname === "/about" ? "active-footer-link" : ""}
                >
                  <i className="bi bi-chevron-right me-1"></i>About
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className={location.pathname === "/products" ? "active-footer-link" : ""}
                >
                  <i className="bi bi-chevron-right me-1"></i>Products
                </Link>
              </li>
              <li>
                <Link
                  to="/cart"
                  className={location.pathname === "/cart" ? "active-footer-link" : ""}
                >
                  <i className="bi bi-chevron-right me-1"></i>Cart
                </Link>
              </li>
              <li>
                <Link
                  to="/user"
                  className={location.pathname === "/user" ? "active-footer-link" : ""}
                >
                  <i className="bi bi-chevron-right me-1"></i>User
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="luxury-footer-col">
            <h6 className="luxury-footer-col-title">CONTACT</h6>
            <ul className="luxury-footer-contact-list">
              <li>
                <i className="bi bi-envelope-fill text-crimson"></i>
                <a href="mailto:info@shoppy.com">info@shoppy.com</a>
              </li>
              <li>
                <i className="bi bi-telephone-fill text-crimson"></i>
                <a href="tel:+919876543210">+91 98765 43210</a>
              </li>
              <li>
                <i className="bi bi-geo-alt-fill text-crimson"></i>
                <span>Hyderabad, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="luxury-footer-bottom-bar">
          <small>© 2026 SHOPPY. All Rights Reserved.</small>
          
          <div className="footer-bottom-right">
            <small>
              Curated in <span className="text-crimson fw-bold">Crimson & Black</span>
            </small>
            <button
              className="scroll-top-btn"
              onClick={scrollToTop}
              title="Scroll to top"
              aria-label="Scroll to top"
            >
              <i className="bi bi-arrow-up"></i>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
