import React from "react";
import { Link } from "react-router-dom";
import { useWishlist } from "../../../context/WishlistContext";
import "./ProductCard.css";

const ProductCard = ({
  id,
  title,
  description,
  price,
  thumbnail,
  image,
  category = "Luxury",
  rating = 4.8,
  discountPercentage = 0,
  brand = "",
}) => {
  const { toggleWishlist, isInWishlist } = useWishlist();

  const productImg =
    thumbnail ||
    image ||
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600";
  const numPrice = Number(price) || 0;
  const isWishlisted = isInWishlist(id);

  const handleToggleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist({
      id,
      title,
      price: numPrice,
      thumbnail: productImg,
      category,
      rating,
      discountPercentage,
    });
  };

  return (
    <div className="luxury-product-card">
      {/* Visual / Image Area */}
      <div className="product-image-frame">
        <Link
          to={`/product/${id}`}
          className="product-image-link"
          aria-label={title}
        >
          <img
            src={productImg}
            alt={title}
            className="product-card-thumbnail"
            loading="lazy"
          />
        </Link>

        {/* Top Badges */}
        <div className="product-card-badge-top-left">
          <span className="badge-best-seller">BEST SELLER</span>
        </div>

        {/* Wishlist Button */}
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

      {/* Card Body */}
      <div className="product-card-body">
        <div className="product-featured-tag">FEATURED</div>

        <h3 className="product-title-heading" title={title}>
          <Link to={`/product/${id}`}>{title}</Link>
        </h3>

        {description && (
          <p className="product-short-desc">
            {description.length > 70
              ? `${description.slice(0, 70)}...`
              : description}
          </p>
        )}

        <div className="product-price-display">
          ₹{numPrice.toFixed(2)}
        </div>

        {/* Action Button Row */}
        <div className="product-card-actions">
          <Link
            to={`/product/${id}`}
            className="product-view-details-btn"
          >
            <span>VIEW DETAILS</span>
            <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
