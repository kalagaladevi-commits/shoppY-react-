import React from "react";
import "./SortDropdown.css";

const SortDropdown = ({ sortBy = "featured", onSortChange }) => {
  return (
    <div className="luxury-sort-control">
      <i className="bi bi-filter-right sort-icon-prefix"></i>
      <span className="sort-by-text">Sort by:</span>
      <div className="sort-select-wrapper">
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="luxury-sort-select"
          aria-label="Sort products"
        >
          <option value="featured">Featured</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="rating">Rating: High to Low</option>
          <option value="name-asc">Name: A to Z</option>
        </select>
        <i className="bi bi-chevron-down sort-caret"></i>
      </div>
    </div>
  );
};

export default SortDropdown;
