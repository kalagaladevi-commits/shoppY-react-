import React, { useState } from "react";
import "./Newsletter.css";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <section className="reference-newsletter-section">
      <div className="luxury-container">
        <div className="ref-newsletter-card">
          <div className="ref-newsletter-ambient"></div>

          <div className="ref-newsletter-inner">
            {/* Left Mail Icon */}
            <div className="ref-newsletter-icon-circle">
              <i className="bi bi-envelope"></i>
            </div>

            <span className="ref-newsletter-eyebrow">STAY CONNECTED</span>

            <h2 className="ref-newsletter-title">
              SUBSCRIBE TO OUR NEWSLETTER
            </h2>

            <p className="ref-newsletter-desc">
              Get updates on new arrivals, exclusive discounts, and flash sales directly to your inbox.
            </p>

            {subscribed ? (
              <div className="ref-newsletter-success">
                <i className="bi bi-check-circle-fill me-2 text-crimson"></i>
                <span>Thank you! Your email has been subscribed.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="ref-newsletter-form">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="ref-newsletter-input"
                />
                <button type="submit" className="ref-newsletter-submit-btn">
                  <span>SUBSCRIBE</span>
                  <i className="bi bi-arrow-right"></i>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
