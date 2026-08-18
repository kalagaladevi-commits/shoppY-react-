import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { API_ENDPOINTS } from "../../services/api";
import "./SingleProduct.css";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function getProduct() {
      try {
        const data = await fetch(`${API_ENDPOINTS.products}/${id}`);
        const result = await data.json();
        setProduct(result);
      } catch (err) {
        console.error(err);
      }
    }

    getProduct();
  }, [id]);

  return (
    <div className="single-product-page container py-5">
      {product ? (
        <div className="single-product-card">
          <div className="row g-5 align-items-center">
            {/* LEFT - PRODUCT GALLERY */}
            <div className="col-lg-6">
              <div className="single-product-image-box">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="single-product-img"
                />
                {product.discountPercentage && (
                  <span className="single-discount-badge">
                    -{Math.round(product.discountPercentage)}% OFF
                  </span>
                )}
              </div>
            </div>

            {/* RIGHT - PRODUCT INFO */}
            <div className="col-lg-6">
              <div className="single-product-info">
                {/* Category & Rating Badges */}
                <div className="d-flex align-items-center gap-2 mb-3">
                  <span className="single-category-badge">
                    {product.category}
                  </span>
                  <span className="single-rating-badge">
                    <i className="bi bi-star-fill text-warning me-1"></i>
                    {product.rating} / 5.0
                  </span>
                </div>

                <h1 className="single-product-title font-display">{product.title}</h1>

                <div className="single-price-row">
                  <span className="single-price">₹{product.price}</span>
                  <span className="single-stock-badge">
                    <i className="bi bi-check-circle-fill me-1"></i> In Stock ({product.stock} units)
                  </span>
                </div>

                <p className="single-product-description">
                  {product.description}
                </p>

                {/* Specs List */}
                <div className="single-specs-grid">
                  <div className="spec-item">
                    <span className="spec-label">Brand</span>
                    <span className="spec-value">{product.brand || "SHOPPY Verified"}</span>
                  </div>

                  <div className="spec-item">
                    <span className="spec-label">SKU</span>
                    <span className="spec-value">SHP-{product.id}098</span>
                  </div>

                  <div className="spec-item">
                    <span className="spec-label">Warranty</span>
                    <span className="spec-value">1 Year Warranty</span>
                  </div>

                  <div className="spec-item">
                    <span className="spec-label">Delivery</span>
                    <span className="spec-value">Free Shipping (2-4 Days)</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="single-actions-wrapper">
                  <button className="btn-luxury-primary single-btn-cart">
                    <i className="bi bi-cart-plus-fill me-2"></i>
                    Add to Cart
                  </button>

                  <button className="btn-luxury-secondary single-btn-buy">
                    <i className="bi bi-lightning-charge-fill text-crimson me-2"></i>
                    Buy Now
                  </button>

                  <Link to="/products" className="btn-luxury-ghost single-btn-back">
                    <i className="bi bi-arrow-left me-1"></i>
                    Back to Products
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="single-loading-wrapper">
          <Loader />
        </div>
      )}
    </div>
  );
};

export default SingleProduct;
