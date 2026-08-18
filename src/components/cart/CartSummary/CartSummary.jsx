import React from "react";
import { Link } from "react-router-dom";
import "./CartSummary.css";

const CartSummary = ({
  subtotal = 0,
  totalItemCount = 0,
  shippingFee = 0,
  taxAmount = 0,
  totalAmount = 0,
  isEmpty = false,
  onCheckout,
}) => {
  return (
    <div className="luxury-order-summary-card">
      <h3 className="order-summary-title">ORDER SUMMARY</h3>

      <div className="summary-items-breakdown">
        {/* Subtotal */}
        <div className="summary-data-row">
          <span className="summary-row-label">Items Subtotal</span>
          <span className="summary-row-value">₹{subtotal.toFixed(2)}</span>
        </div>

        {/* Quantity */}
        <div className="summary-data-row">
          <span className="summary-row-label">Total Quantity</span>
          <span className="summary-row-value">
            {totalItemCount} {totalItemCount === 1 ? "Item" : "Items"}
          </span>
        </div>

        {/* Shipping */}
        <div className="summary-data-row">
          <span className="summary-row-label">Estimated Shipping</span>
          <span className="summary-row-value shipping-free-tag">
            {shippingFee === 0 || subtotal > 150 ? "FREE" : `₹${shippingFee.toFixed(2)}`}
          </span>
        </div>

        {/* Tax */}
        <div className="summary-data-row">
          <span className="summary-row-label">Tax (GST)</span>
          <span className="summary-row-value">₹{taxAmount.toFixed(2)}</span>
        </div>
      </div>

      <div className="summary-divider-line"></div>

      {/* Total Amount */}
      <div className="summary-total-row">
        <span className="total-label">TOTAL AMOUNT</span>
        <span className="total-amount-crimson">₹{totalAmount.toFixed(2)}</span>
      </div>

      {/* Checkout CTA */}
      <button
        type="button"
        className={`order-checkout-btn ${isEmpty ? "is-disabled" : ""}`}
        disabled={isEmpty}
        onClick={onCheckout}
      >
        <i className="bi bi-shield-lock-fill me-2"></i>
        <span>PROCEED TO CHECKOUT</span>
      </button>

      {/* Secure Checkout Guarantee */}
      <div className="secure-checkout-guarantee">
        <i className="bi bi-lock-fill secure-lock-icon"></i>
        <span className="secure-text">Guaranteed 100% Safe & Secure Checkout</span>
      </div>
    </div>
  );
};

export default CartSummary;
