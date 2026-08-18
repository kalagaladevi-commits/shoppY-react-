import React from "react";
import { motion } from "framer-motion";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductGrid.css";

const ProductGrid = ({ products = [], loading = false, onResetFilters }) => {
  if (loading) {
    return (
      <div className="product-grid-loading">
        <div className="luxury-grid-skeleton">
          {Array.from({ length: 9 }).map((_, idx) => (
            <div key={idx} className="skeleton-card">
              <div className="skeleton-img"></div>
              <div className="skeleton-body">
                <div className="skeleton-tag"></div>
                <div className="skeleton-title"></div>
                <div className="skeleton-desc"></div>
                <div className="skeleton-price"></div>
                <div className="skeleton-btn"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="product-grid-empty">
        <div className="empty-state-icon">
          <i className="bi bi-search"></i>
        </div>
        <h3 className="empty-state-title">No Products Found</h3>
        <p className="empty-state-text">
          We couldn't find any products matching your selected criteria. Try adjusting your search query, price range, or categories.
        </p>
        {onResetFilters && (
          <button
            type="button"
            className="btn-luxury-primary empty-reset-btn"
            onClick={onResetFilters}
          >
            <i className="bi bi-arrow-counterclockwise me-2"></i>
            Reset All Filters
          </button>
        )}
      </div>
    );
  }

  return (
    <motion.div
      className="luxury-products-grid"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.05,
          },
        },
      }}
    >
      {products.map((product) => (
        <motion.div
          key={product.id}
          className="grid-item-col"
          variants={{
            hidden: { opacity: 0, y: 15 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.35, ease: "easeOut" },
            },
          }}
        >
          <ProductCard
            id={product.id}
            title={product.title}
            description={product.description}
            price={product.price}
            thumbnail={product.thumbnail || (product.images && product.images[0])}
            image={product.thumbnail || (product.images && product.images[0])}
            category={product.category}
            rating={product.rating}
            discountPercentage={product.discountPercentage}
            brand={product.brand}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProductGrid;
