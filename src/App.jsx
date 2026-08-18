import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastProvider } from "./context/ToastContext";
import { AuthProvider } from "./context/AuthContext";
import { WishlistProvider } from "./context/WishlistContext";
import { CartProvider } from "./context/CartContext";
import ScrollToTop from "./components/common/ScrollToTop/ScrollToTop";
import MainLayout from "./components/MainLayout/MainLayout";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ToastProvider>
        <AuthProvider>
          <WishlistProvider>
            <CartProvider>
              <MainLayout />
            </CartProvider>
          </WishlistProvider>
        </AuthProvider>
      </ToastProvider>
    </BrowserRouter>
  );
};

export default App;
