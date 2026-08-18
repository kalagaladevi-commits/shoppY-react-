import React, { createContext, useContext, useState, useEffect } from "react";
import { useToast } from "./ToastContext";

const AuthContext = createContext(null);
const AUTH_USER_KEY = "shoppy_auth_user";

export const AuthProvider = ({ children }) => {
  const { addToast } = useToast();

  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem(AUTH_USER_KEY);
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    try {
      if (user) {
        localStorage.setItem(AUTH_USER_KEY, JSON.stringify(user));
      } else {
        localStorage.removeItem(AUTH_USER_KEY);
      }
    } catch (err) {
      console.error("Failed to sync user state", err);
    }
  }, [user]);

  const login = (userData) => {
    setUser(userData);
    addToast(`Welcome back, ${userData.name || "Collector"}`, "success");
  };

  const signup = (userData) => {
    setUser(userData);
    addToast(`Account created successfully. Welcome, ${userData.name}!`, "success");
  };

  const logout = () => {
    setUser(null);
    addToast("Logged out successfully", "info");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        signup,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
