import React from "react";
import "./SocialLogin.css";

const SocialLogin = ({ onSocialClick }) => {
  const handleAction = (provider) => {
    if (onSocialClick) {
      onSocialClick(provider);
    }
  };

  return (
    <div className="luxury-social-auth-section">
      <div className="social-divider">
        <span className="social-divider-line"></span>
        <span className="social-divider-text">OR</span>
        <span className="social-divider-line"></span>
      </div>

      <div className="social-buttons-grid">
        <button
          type="button"
          className="social-auth-btn"
          onClick={() => handleAction("Google")}
          aria-label="Sign in with Google"
        >
          <i className="bi bi-google social-icon-google"></i>
          <span>Google</span>
        </button>

        <button
          type="button"
          className="social-auth-btn"
          onClick={() => handleAction("Apple")}
          aria-label="Sign in with Apple"
        >
          <i className="bi bi-apple social-icon-apple"></i>
          <span>Apple</span>
        </button>

        <button
          type="button"
          className="social-auth-btn"
          onClick={() => handleAction("Facebook")}
          aria-label="Sign in with Facebook"
        >
          <i className="bi bi-facebook social-icon-facebook"></i>
          <span>Facebook</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
