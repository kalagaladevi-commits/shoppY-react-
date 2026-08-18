import React, { createContext, useContext, useState, useCallback } from "react";
import "../components/common/Toast/Toast.css";

const ToastContext = createContext(null);

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((message, type = "crimson", duration = 3200) => {
    const id = Date.now() + Math.random().toString(36).substr(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, duration);
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <div className="luxury-toast-container" aria-live="polite" aria-atomic="true">
        {toasts.map((toast) => (
          <div key={toast.id} className={`luxury-toast luxury-toast-${toast.type}`}>
            <div className="toast-icon">
              {toast.type === "success" && <i className="bi bi-check2-circle"></i>}
              {toast.type === "crimson" && <i className="bi bi-bag-check-fill"></i>}
              {toast.type === "wishlist" && <i className="bi bi-heart-fill"></i>}
              {toast.type === "error" && <i className="bi bi-exclamation-triangle-fill"></i>}
              {toast.type === "info" && <i className="bi bi-info-circle-fill"></i>}
            </div>
            <div className="toast-message">{toast.message}</div>
            <button
              className="toast-close-btn"
              onClick={() => removeToast(toast.id)}
              aria-label="Close notification"
            >
              <i className="bi bi-x"></i>
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
