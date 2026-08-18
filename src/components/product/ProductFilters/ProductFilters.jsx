import React, { useState } from "react";
import "./ProductFilters.css";

const CATEGORY_MAPPINGS = [
  { id: "", label: "All Categories", matchValues: [""] },
  { id: "beauty", label: "Beauty & Makeup", matchValues: ["beauty", "beauty-and-makeup"] },
  { id: "fragrances", label: "Fragrances", matchValues: ["fragrances"] },
  { id: "skin-care", label: "Personal Care", matchValues: ["skin-care", "personal-care", "groceries"] },
  { id: "accessories", label: "Accessories", matchValues: ["accessories", "womens-jewellery", "sunglasses", "womens-bags", "womens-watches", "mens-watches"] },
  { id: "electronics", label: "Electronics", matchValues: ["electronics", "laptops", "smartphones", "mobile-accessories", "tablets"] },
];

const DEFAULT_BRANDS = [
  "Calvin Klein",
  "Chanel",
  "Dior",
  "Dolce & Gabbana",
  "Gucci",
  "L'Oréal",
  "Maybelline",
];

const RATINGS = [
  { stars: 5, label: "5 Stars", count: 56 },
  { stars: 4, label: "4 Stars & up", count: 28 },
  { stars: 3, label: "3 Stars & up", count: 12 },
  { stars: 2, label: "2 Stars & up", count: 6 },
  { stars: 1, label: "1 Star & up", count: 2 },
];

const ProductFilters = ({
  selectedCategory = "",
  onSelectCategory,
  priceRange = 15000,
  onPriceChange,
  selectedBrands = [],
  onToggleBrand,
  selectedRating = 0,
  onSelectRating,
  onResetFilters,
  isOpen = false,
  onClose,
  totalCount = 0,
}) => {
  const [showMoreBrands, setShowMoreBrands] = useState(false);

  const filterBody = (
    <div className="filters-content-pane">
      {/* 1. Header */}
      <div className="filters-header-title-row">
        <div className="d-flex align-items-center gap-2">
          <i className="bi bi-sliders2-vertical filter-header-icon"></i>
          <h4 className="filters-main-heading">FILTERS</h4>
        </div>
      </div>

      {/* 2. Categories Section */}
      <div className="filter-block">
        <h5 className="filter-block-title">CATEGORIES</h5>
        <div className="filter-category-options">
          {CATEGORY_MAPPINGS.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                className={`filter-category-row ${isSelected ? "is-selected" : ""}`}
                onClick={() => onSelectCategory(cat.id)}
              >
                <span className="category-bullet-circle">
                  {isSelected && <span className="category-bullet-inner"></span>}
                </span>
                <span className="category-row-label">{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Price Range Section */}
      <div className="filter-block">
        <h5 className="filter-block-title">PRICE RANGE</h5>
        <div className="price-slider-wrapper">
          <input
            type="range"
            min="0"
            max="15000"
            step="100"
            value={priceRange}
            onChange={(e) => onPriceChange(Number(e.target.value))}
            className="crimson-range-slider"
            aria-label="Price range slider"
          />
          <div className="price-slider-labels">
            <span>₹0</span>
            <span>₹15000+</span>
          </div>
          <div className="price-current-tag">
            ₹0 — ₹{priceRange.toLocaleString()}{priceRange >= 15000 ? "+" : ""}
          </div>
        </div>
      </div>

      {/* 4. Brand Section */}
      <div className="filter-block">
        <h5 className="filter-block-title">BRAND</h5>
        <div className="filter-brand-list">
          {DEFAULT_BRANDS.slice(0, showMoreBrands ? DEFAULT_BRANDS.length : 5).map((brand) => {
            const isChecked = selectedBrands.includes(brand);
            return (
              <label key={brand} className="filter-checkbox-label">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => onToggleBrand(brand)}
                  className="filter-custom-checkbox"
                />
                <span className="checkbox-box">
                  {isChecked && <i className="bi bi-check-lg"></i>}
                </span>
                <span className="brand-name-text">{brand}</span>
              </label>
            );
          })}
          {DEFAULT_BRANDS.length > 5 && (
            <button
              type="button"
              className="show-more-brands-btn"
              onClick={() => setShowMoreBrands(!showMoreBrands)}
            >
              {showMoreBrands ? "- Less" : "+ More"}
            </button>
          )}
        </div>
      </div>

      {/* 5. Rating Section */}
      <div className="filter-block">
        <h5 className="filter-block-title">RATING</h5>
        <div className="filter-rating-list">
          {RATINGS.map((r) => {
            const isSelected = selectedRating === r.stars;
            return (
              <button
                key={r.stars}
                type="button"
                className={`filter-rating-row ${isSelected ? "is-selected" : ""}`}
                onClick={() => onSelectRating(isSelected ? 0 : r.stars)}
              >
                <div className="rating-stars-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <i
                      key={i}
                      className={`bi ${i < r.stars ? "bi-star-fill text-gold" : "bi-star text-muted"}`}
                    ></i>
                  ))}
                </div>
                <span className="rating-count-pill">({r.count})</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 6. Clear Filters Button */}
      <div className="filter-block clear-action-block">
        <button
          type="button"
          className="btn-clear-all-filters"
          onClick={onResetFilters}
        >
          CLEAR ALL FILTERS
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Permanent Sidebar */}
      <aside className="luxury-filter-sidebar-desktop" aria-label="Product filters">
        {filterBody}
      </aside>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="mobile-filter-overlay" onClick={onClose}>
          <div
            className="mobile-filter-drawer"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mobile-drawer-top">
              <div className="d-flex align-items-center gap-2">
                <i className="bi bi-sliders2-vertical text-crimson"></i>
                <h4 className="m-0 font-display">FILTERS</h4>
              </div>
              <button
                type="button"
                className="mobile-drawer-close"
                onClick={onClose}
                aria-label="Close filters"
              >
                <i className="bi bi-x-lg"></i>
              </button>
            </div>

            <div className="mobile-drawer-body">{filterBody}</div>

            <div className="mobile-drawer-footer">
              <button
                type="button"
                className="btn-luxury-primary w-100"
                onClick={onClose}
              >
                SHOW {totalCount} PRODUCTS
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductFilters;
