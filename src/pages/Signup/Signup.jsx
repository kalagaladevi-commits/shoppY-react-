import React, { useState, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import BrandLogo from "../../components/BrandLogo/BrandLogo";
import AuthSwitcher from "../../components/Auth/AuthSwitcher";
import SocialLogin from "../../components/Auth/SocialLogin";
import AuthBenefits from "../../components/Auth/AuthBenefits";
import { useAuth } from "../../context/AuthContext";
import "../Login/Login.css";
import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();
  let authContext = null;
  try {
    authContext = useAuth();
  } catch {
    authContext = null;
  }

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const pattern = {
    errName: /^[a-zA-Z\s]{3,}$/,
    errEmail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    errMobile: /^[0-9+-\s]{8,15}$/,
  };

  // Password strength calculation
  const passwordStrength = useMemo(() => {
    const pwd = form.password;
    if (!pwd) return { score: 0, text: "" };
    let score = 0;
    if (pwd.length >= 6) score += 1;
    if (pwd.length >= 10) score += 1;
    if (/[A-Z]/.test(pwd) && /[0-9]/.test(pwd)) score += 1;
    if (/[^A-Za-z0-9]/.test(pwd)) score += 1;

    let text = "Weak";
    if (score >= 3) text = "Strong";
    else if (score >= 2) text = "Medium";

    return { score, text };
  }, [form.password]);

  const handleData = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const showError = (message) => {
    setError(message);
    setSuccessMsg("");
    setTimeout(() => {
      setError("");
    }, 4000);
  };

  const showSuccess = (message) => {
    setSuccessMsg(message);
    setError("");
    setTimeout(() => {
      setSuccessMsg("");
    }, 4000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, mobile, password } = form;

    if (!name || !email || !password) {
      return showError("Name, Email, and Password are required.");
    }

    if (!pattern.errName.test(name)) {
      return showError("Name must be at least 3 characters long.");
    }

    if (!pattern.errEmail.test(email)) {
      return showError("Invalid Email Format.");
    }

    if (mobile && !pattern.errMobile.test(mobile)) {
      return showError("Invalid Mobile Number Format.");
    }

    if (password.length < 6) {
      return showError("Password must be at least 6 characters.");
    }

    if (!agree) {
      return showError("Please accept Terms and Conditions & Privacy Policy.");
    }

    // Persist user in localStorage
    localStorage.setItem("user", JSON.stringify(form));

    if (authContext && authContext.signup) {
      authContext.signup({ name, email });
    }

    showSuccess("Account created successfully! Redirecting to login...");
    setTimeout(() => {
      navigate("/login");
    }, 1200);
  };

  const handleSocialClick = (provider) => {
    showSuccess(`Redirecting to ${provider} registration...`);
  };

  return (
    <div className="luxury-auth-page-wrapper">
      <div className="luxury-auth-container">
        {/* Main Auth Card */}
        <div className="luxury-auth-card">
          {/* Top Auth Switcher */}
          <AuthSwitcher activeTab="signup" />

          {/* Brand Logo & Editorial Heading */}
          <div className="auth-card-header">
            <div className="auth-brand-center">
              <BrandLogo size="md" clickable={true} />
            </div>

            <h1 className="auth-card-title">CREATE ACCOUNT</h1>

            <p className="auth-card-subtitle">
              Join SHOPPY for exclusive deals & instant shopping.
            </p>

            <div className="auth-header-glow-accent"></div>
          </div>

          {/* Alerts */}
          {error && (
            <div className="auth-error-banner" role="alert">
              <i className="bi bi-exclamation-triangle-fill"></i>
              <span>{error}</span>
            </div>
          )}

          {successMsg && (
            <div className="auth-success-banner" role="alert">
              <i className="bi bi-check-circle-fill"></i>
              <span>{successMsg}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="auth-luxury-form">
            {/* Full Name */}
            <div className="auth-field-group">
              <label className="auth-field-label">FULL NAME</label>
              <div className="auth-input-container">
                <i className="bi bi-person auth-field-icon"></i>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={form.name}
                  onChange={handleData}
                  className="auth-input-field"
                  autoComplete="name"
                  required
                />
              </div>
            </div>

            {/* Email Address */}
            <div className="auth-field-group">
              <label className="auth-field-label">EMAIL ADDRESS</label>
              <div className="auth-input-container">
                <i className="bi bi-envelope auth-field-icon"></i>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={handleData}
                  className="auth-input-field"
                  autoComplete="email"
                  required
                />
              </div>
            </div>

            {/* Mobile Number */}
            <div className="auth-field-group">
              <label className="auth-field-label">MOBILE NUMBER</label>
              <div className="auth-input-container">
                <i className="bi bi-phone auth-field-icon"></i>
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Enter mobile number"
                  value={form.mobile}
                  onChange={handleData}
                  className="auth-input-field"
                  autoComplete="tel"
                />
              </div>
            </div>

            {/* Password */}
            <div className="auth-field-group">
              <label className="auth-field-label">PASSWORD</label>
              <div className="auth-input-container">
                <i className="bi bi-lock auth-field-icon"></i>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Create password"
                  value={form.password}
                  onChange={handleData}
                  className="auth-input-field"
                  autoComplete="new-password"
                  required
                />
                <button
                  type="button"
                  className="password-toggle-btn"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  <i className={`bi ${showPassword ? "bi-eye" : "bi-eye-slash"}`}></i>
                </button>
              </div>

              {/* Password Strength Indicator */}
              {form.password && (
                <div className="password-strength-container">
                  <div className="password-strength-bars">
                    {[1, 2, 3, 4].map((seg) => {
                      let activeClass = "";
                      if (passwordStrength.score >= seg) {
                        if (passwordStrength.score <= 1) activeClass = "is-active-weak";
                        else if (passwordStrength.score <= 2) activeClass = "is-active-medium";
                        else activeClass = "is-active-strong";
                      }
                      return (
                        <div
                          key={seg}
                          className={`strength-bar-segment ${activeClass}`}
                        ></div>
                      );
                    })}
                  </div>
                  <span className="strength-status-text">
                    {passwordStrength.text}
                  </span>
                </div>
              )}
            </div>

            {/* Terms Checkbox */}
            <div className="auth-terms-row">
              <label className="auth-checkbox-label">
                <input
                  type="checkbox"
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                  className="auth-checkbox-input"
                  required
                />
                <span className="auth-custom-checkbox">
                  {agree && <i className="bi bi-check-lg"></i>}
                </span>
                <span className="checkbox-text">
                  I agree to the{" "}
                  <a href="#terms" className="terms-link">
                    Terms and Conditions
                  </a>{" "}
                  &{" "}
                  <a href="#privacy" className="terms-link">
                    Privacy Policy
                  </a>
                </span>
              </label>
            </div>

            {/* Submit CTA */}
            <button type="submit" className="auth-submit-primary-btn">
              <span>CREATE ACCOUNT</span>
              <i className="bi bi-arrow-right"></i>
            </button>

            {/* Social Logins */}
            <SocialLogin onSocialClick={handleSocialClick} />

            {/* Bottom Auth Link */}
            <div className="auth-bottom-switch-link">
              <span className="switch-prompt-text">Already have an account?</span>
              <Link to="/login" className="switch-action-highlight">
                Sign In
              </Link>
            </div>
          </form>
        </div>

        {/* 4-Column Benefits Bar */}
        <AuthBenefits />
      </div>
    </div>
  );
};

export default Signup;
