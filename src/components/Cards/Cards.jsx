import React from "react";
import { Link } from "react-router-dom";
import { useWishlist } from "../../context/WishlistContext";
import "./Cards.css";

function Cards({ id, title, description, price, image, category = "Luxury" }) {
  const { toggleWishlist, isInWishlist } = useWishlist();

  const displayImg =
    image ||
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=80";
  const numPrice = Number(price) || 0;
  const isWishlisted = isInWishlist(id);

  const handleToggleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist({
      id,
      title,
      price: numPrice,
      thumbnail: displayImg,
      category,
    });
  };

  return (
    <div className="product-card-wrapper">
      <div className="luxury-store-card">
        {/* Product Image Stage */}
        <div className="product-card-img-container">
          <Link
            to={`/product/${id}`}
            className="product-img-link"
            aria-label={title}
          >
            <img
              src={displayImg}
              className="product-card-img"
              alt={title || "Product"}
              loading="lazy"
            />
          </Link>
          <span className="product-badge">BEST SELLER</span>

          <button
            type="button"
            className={`product-card-wishlist-btn ${isWishlisted ? "is-active" : ""}`}
            onClick={handleToggleWishlist}
            title={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
            aria-label="Wishlist toggle"
          >
            <i
              className={`bi ${isWishlisted ? "bi-heart-fill" : "bi-heart"}`}
            ></i>
          </button>
        </div>

        {/* Product Body */}
        <div className="product-card-body">
          <div className="product-category-tag">FEATURED</div>

          <h5 className="product-card-title" title={title}>
            <Link to={`/product/${id}`}>{title}</Link>
          </h5>

          <p className="product-card-description">
            {description ? `${description.slice(0, 85)}...` : ""}
          </p>

          <div className="product-card-footer">
            <div className="product-price">₹{numPrice.toFixed(2)}</div>

            <div className="product-action-btns-group">
              <Link
                to={`/product/${id}`}
                className="btn-luxury-primary btn-luxury-sm product-view-btn w-100"
              >
                <span>VIEW DETAILS</span>
                <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
