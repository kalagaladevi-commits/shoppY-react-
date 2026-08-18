import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import EmptyCart from "../../components/cart/EmptyCart/EmptyCart";
import CartItem from "../../components/cart/CartItem/CartItem";
import CartSummary from "../../components/cart/CartSummary/CartSummary";
import CartFeatures from "../../components/cart/CartFeatures/CartFeatures";
import "./Cart.css";

const Cart = () => {
  const navigate = useNavigate();
  const {
    cart,
    removeFromCart,
    updateQuantity,
    clearCart,
    subtotal,
    taxAmount,
    shippingFee,
    totalAmount,
    totalItemCount,
  } = useCart();

  const isCartEmpty = !cart || cart.length === 0;

  const handleCheckout = () => {
    if (!isCartEmpty) {
      navigate("/user");
    }
  };

  return (
    <div className="luxury-cart-page">
      <div className="luxury-container">
        {/* Page Header */}
        <section className="cart-editorial-header">
          <div className="cart-eyebrow-pill">
            <span className="eyebrow-dot">●</span>
            <span>SHOPPING CART</span>
          </div>

          <h1 className="cart-headline-title">SHOPPING CART</h1>

          <p className="cart-headline-subtitle">
            Review your selected items and proceed to checkout.
          </p>

          <div className="cart-header-accent-glow"></div>
        </section>

        {/* Main 2-Column Cart Layout */}
        <div className="cart-main-grid-layout">
          {/* Left Column: Cart Items or Empty State */}
          <div className="cart-content-column">
            {isCartEmpty ? (
              <EmptyCart />
            ) : (
              <div className="cart-items-wrapper">
                <div className="cart-items-header-bar">
                  <div className="cart-items-count-tag">
                    <span>{totalItemCount} {totalItemCount === 1 ? "Item" : "Items"} in your bag</span>
                  </div>

                  <button
                    type="button"
                    className="cart-clear-all-btn"
                    onClick={clearCart}
                    title="Clear entire cart"
                  >
                    <i className="bi bi-trash3 me-1"></i>
                    <span>Clear Cart</span>
                  </button>
                </div>

                <div className="cart-items-list-container">
                  {cart.map((item, index) => (
                    <CartItem
                      key={`${item.id}-${index}`}
                      item={item}
                      onUpdateQuantity={updateQuantity}
                      onRemove={removeFromCart}
                    />
                  ))}
                </div>

                <div className="cart-continue-shopping-bar">
                  <Link to="/products" className="continue-shopping-link">
                    <i className="bi bi-arrow-left me-2"></i>
                    <span>Continue Shopping</span>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Order Summary */}
          <div className="cart-summary-column">
            <CartSummary
              subtotal={subtotal}
              totalItemCount={totalItemCount}
              shippingFee={shippingFee}
              taxAmount={taxAmount}
              totalAmount={totalAmount}
              isEmpty={isCartEmpty}
              onCheckout={handleCheckout}
            />
          </div>
        </div>

        {/* 3-Column Features Strip */}
        <CartFeatures />
      </div>
    </div>
  );
};

export default Cart;
