import React from "react";
import "./SearchBar.css";

const SearchBar = ({
  search = "",
  onSearchChange,
  category = "",
  onCategoryChange,
  categories = [],
}) => {
  return (
    <div className="luxury-search-category-bar">
      {/* Search Input on Left */}
      <div className="luxury-search-input-wrap">
        <i className="bi bi-search luxury-search-icon"></i>
        <input
          type="search"
          placeholder="Search for products..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="luxury-search-input"
          aria-label="Search for products"
        />
        {search && (
          <button
            type="button"
            className="luxury-search-clear-btn"
            onClick={() => onSearchChange("")}
            aria-label="Clear search"
          >
            <i className="bi bi-x-lg"></i>
          </button>
        )}
      </div>

      {/* Category Dropdown on Right */}
      <div className="luxury-category-dropdown-wrap">
        <select
          value={category}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="luxury-category-dropdown"
          aria-label="Filter by category"
        >
          <option value="">All Categories</option>
          {categories.map((cat) => {
            const catSlug = typeof cat === "string" ? cat : cat.slug || cat.name;
            const catName = typeof cat === "string" ? cat.replace(/-/g, " ") : cat.name || catSlug;
            return (
              <option key={catSlug} value={catSlug}>
                {catName}
              </option>
            );
          })}
        </select>
        <i className="bi bi-chevron-down category-dropdown-caret"></i>
      </div>
    </div>
  );
};

export default SearchBar;
