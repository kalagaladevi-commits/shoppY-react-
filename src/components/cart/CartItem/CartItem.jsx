import React from "react";
import { Link } from "react-router-dom";
import "./CartItem.css";

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  const itemPrice = Number(item.price) || 0;
  const itemQty = Number(item.quantity) || 1;
  const lineTotal = itemPrice * itemQty;
  const displayImg =
    item.thumbnail ||
    item.image ||
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600";

  return (
    <div className="luxury-cart-item-card">
      {/* Product Image */}
      <div className="cart-item-image-box">
        <Link to={`/product/${item.id}`} aria-label={item.title}>
          <img
            src={displayImg}
            alt={item.title || "Product"}
            className="cart-item-img"
            loading="lazy"
          />
        </Link>
      </div>

      {/* Product Information */}
      <div className="cart-item-info">
        <span className="cart-item-category">
          {item.category || "LUXURY"}
        </span>

        <h3 className="cart-item-title">
          <Link to={`/product/${item.id}`}>{item.title}</Link>
        </h3>

        <div className="cart-item-unit-price">
          ₹{itemPrice.toFixed(2)} each
        </div>
      </div>

      {/* Quantity Controls */}
      <div className="cart-item-quantity-wrapper">
        <div className="luxury-qty-control">
          <button
            type="button"
            className="qty-btn qty-btn-minus"
            onClick={() => onUpdateQuantity(item.id, itemQty - 1, item.selectedVariant)}
            aria-label="Decrease quantity"
          >
            <i className="bi bi-dash"></i>
          </button>

          <span className="qty-value">{itemQty}</span>

          <button
            type="button"
            className="qty-btn qty-btn-plus"
            onClick={() => onUpdateQuantity(item.id, itemQty + 1, item.selectedVariant)}
            aria-label="Increase quantity"
          >
            <i className="bi bi-plus"></i>
          </button>
        </div>
      </div>

      {/* Line Total & Remove Action */}
      <div className="cart-item-total-group">
        <div className="cart-item-line-total">
          ₹{lineTotal.toFixed(2)}
        </div>

        <button
          type="button"
          className="cart-item-remove-btn"
          onClick={() => onRemove(item.id, item.selectedVariant)}
          title="Remove item from cart"
          aria-label={`Remove ${item.title}`}
        >
          <i className="bi bi-trash3"></i>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
