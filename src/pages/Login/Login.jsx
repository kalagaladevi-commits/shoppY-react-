import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BrandLogo from "../../components/BrandLogo/BrandLogo";
import AuthSwitcher from "../../components/Auth/AuthSwitcher";
import SocialLogin from "../../components/Auth/SocialLogin";
import AuthBenefits from "../../components/Auth/AuthBenefits";
import { useAuth } from "../../context/AuthContext";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  let authContext = null;
  try {
    authContext = useAuth();
  } catch {
    authContext = null;
  }

  const [form, setForm] = useState({
    email: "",
    password: "",
    rememberMe: true,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const pattern = {
    errEmail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  };

  const handleData = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
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
    const { email, password } = form;

    if (!email || !password) {
      return showError("All fields are required.");
    }

    if (!pattern.errEmail.test(email)) {
      return showError("Invalid Email Format.");
    }

    if (password.length < 6) {
      return showError("Password must be at least 6 characters.");
    }

    // Check user in localStorage
    let storedUser = null;
    try {
      storedUser = JSON.parse(localStorage.getItem("user"));
    } catch {
      storedUser = null;
    }

    if (storedUser) {
      if (storedUser.email === email && storedUser.password !== password) {
        return showError("Incorrect password.");
      }
    }

    const loggedInUserData = {
      email,
      name: storedUser && storedUser.name ? storedUser.name : email.split("@")[0],
    };

    if (authContext && authContext.login) {
      authContext.login(loggedInUserData);
    }

    navigate("/");
  };

  const handleSocialClick = (provider) => {
    showSuccess(`Redirecting to ${provider} authentication...`);
  };

  return (
    <div className="luxury-auth-page-wrapper">
      <div className="luxury-auth-container">
        {/* Main Auth Card */}
        <div className="luxury-auth-card">
          {/* Top Auth Switcher */}
          <AuthSwitcher activeTab="login" />

          {/* Brand Logo & Editorial Heading */}
          <div className="auth-card-header">
            <div className="auth-brand-center">
              <BrandLogo size="md" clickable={true} />
            </div>

            <h1 className="auth-card-title">WELCOME BACK</h1>

            <p className="auth-card-subtitle">
              Sign in to access your account & orders.
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

            {/* Password */}
            <div className="auth-field-group">
              <label className="auth-field-label">PASSWORD</label>
              <div className="auth-input-container">
                <i className="bi bi-lock auth-field-icon"></i>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  value={form.password}
                  onChange={handleData}
                  className="auth-input-field"
                  autoComplete="current-password"
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
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="auth-options-row">
              <label className="auth-checkbox-label">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={form.rememberMe}
                  onChange={handleData}
                  className="auth-checkbox-input"
                />
                <span className="auth-custom-checkbox">
                  {form.rememberMe && <i className="bi bi-check-lg"></i>}
                </span>
                <span className="checkbox-text">Remember Me</span>
              </label>

              <button
                type="button"
                className="forgot-password-link"
                onClick={() =>
                  showSuccess("Password reset instructions sent to your email.")
                }
              >
                Forgot Password?
              </button>
            </div>

            {/* Submit CTA */}
            <button type="submit" className="auth-submit-primary-btn">
              <span>LOGIN</span>
              <i className="bi bi-arrow-right"></i>
            </button>

            {/* Social Logins */}
            <SocialLogin onSocialClick={handleSocialClick} />

            {/* Bottom Auth Link */}
            <div className="auth-bottom-switch-link">
              <span className="switch-prompt-text">Don't have an account?</span>
              <Link to="/signup" className="switch-action-highlight">
                Sign Up
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

export default Login;
