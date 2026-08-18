import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ProductFilters from "../../components/product/ProductFilters/ProductFilters";
import ProductGrid from "../../components/product/ProductGrid/ProductGrid";
import SearchBar from "../../components/product/SearchBar/SearchBar";
import SortDropdown from "../../components/product/SortDropdown/SortDropdown";
import Pagination from "../../components/product/Pagination/Pagination";
import { API_BASE_URL } from "../../services/api";
import "./Products.css";

const PRODUCTS_PER_PAGE = 12;

const Products = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState(15000);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedRating, setSelectedRating] = useState(0);
  const [sortBy, setSortBy] = useState("featured");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Fetch categories
  useEffect(() => {
    async function fetchCategories() {
      try {
        const { data } = await axios.get(
          `${API_BASE_URL}/products/category-list`
        );
        setCategories(data || []);
      } catch (err) {
        console.error("Failed to load categories", err);
      }
    }
    fetchCategories();
  }, []);

  // Fetch all 100 products from dummyjson
  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      try {
        const { data } = await axios.get(
          `${API_BASE_URL}/products?limit=100`
        );
        setAllProducts(data.products || []);
      } catch (err) {
        console.error("Failed to load products", err);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  // Reset page to 1 whenever filters change
  useEffect(() => {
    setPage(1);
  }, [search, category, priceRange, selectedBrands, selectedRating, sortBy]);

  // Brand toggle handler
  const handleToggleBrand = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand)
        ? prev.filter((b) => b !== brand)
        : [...prev, brand]
    );
  };

  // Reset all filters
  const handleResetFilters = () => {
    setSearch("");
    setCategory("");
    setPriceRange(15000);
    setSelectedBrands([]);
    setSelectedRating(0);
    setSortBy("featured");
    setPage(1);
  };

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    let result = [...allProducts];

    // 1. Search filter
    if (search.trim()) {
      const q = search.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.title?.toLowerCase().includes(q) ||
          p.description?.toLowerCase().includes(q) ||
          p.brand?.toLowerCase().includes(q) ||
          p.category?.toLowerCase().includes(q)
      );
    }

    // 2. Category filter
    if (category) {
      const catLower = category.toLowerCase();
      result = result.filter((p) => {
        const pCat = (p.category || "").toLowerCase();
        if (catLower === "beauty" || catLower === "beauty-and-makeup") {
          return pCat.includes("beauty") || pCat.includes("skin") || pCat.includes("makeup");
        }
        if (catLower === "fragrances") {
          return pCat.includes("fragrance") || pCat.includes("perfume");
        }
        if (catLower === "skin-care" || catLower === "personal-care") {
          return pCat.includes("skin") || pCat.includes("care") || pCat.includes("grocery");
        }
        if (catLower === "accessories") {
          return (
            pCat.includes("jewellery") ||
            pCat.includes("sunglass") ||
            pCat.includes("bag") ||
            pCat.includes("watch") ||
            pCat.includes("accessory")
          );
        }
        if (catLower === "electronics") {
          return (
            pCat.includes("laptop") ||
            pCat.includes("smart") ||
            pCat.includes("tablet") ||
            pCat.includes("mobile") ||
            pCat.includes("electronics")
          );
        }
        return pCat === catLower || pCat.includes(catLower);
      });
    }

    // 3. Price Range filter
    if (priceRange < 15000) {
      result = result.filter((p) => (Number(p.price) || 0) <= priceRange);
    }

    // 4. Brands filter
    if (selectedBrands.length > 0) {
      result = result.filter((p) => {
        const productBrand = (p.brand || "").toLowerCase();
        const productTitle = (p.title || "").toLowerCase();
        return selectedBrands.some(
          (b) =>
            productBrand.includes(b.toLowerCase()) ||
            productTitle.includes(b.toLowerCase())
        );
      });
    }

    // 5. Rating filter
    if (selectedRating > 0) {
      result = result.filter((p) => (Number(p.rating) || 0) >= selectedRating);
    }

    // 6. Sorting
    if (sortBy === "price-asc") {
      result.sort((a, b) => (Number(a.price) || 0) - (Number(b.price) || 0));
    } else if (sortBy === "price-desc") {
      result.sort((a, b) => (Number(b.price) || 0) - (Number(a.price) || 0));
    } else if (sortBy === "rating") {
      result.sort((a, b) => (Number(b.rating) || 0) - (Number(a.rating) || 0));
    } else if (sortBy === "name-asc") {
      result.sort((a, b) => (a.title || "").localeCompare(b.title || ""));
    }

    return result;
  }, [allProducts, search, category, priceRange, selectedBrands, selectedRating, sortBy]);

  // Pagination computations
  const totalCount = filteredProducts.length;
  const totalPages = Math.ceil(totalCount / PRODUCTS_PER_PAGE) || 1;
  const startItem = totalCount === 0 ? 0 : (page - 1) * PRODUCTS_PER_PAGE + 1;
  const endItem = Math.min(page * PRODUCTS_PER_PAGE, totalCount);

  const paginatedProducts = useMemo(() => {
    return filteredProducts.slice(
      (page - 1) * PRODUCTS_PER_PAGE,
      page * PRODUCTS_PER_PAGE
    );
  }, [filteredProducts, page]);

  return (
    <div className="luxury-products-page">
      <div className="luxury-container">
        {/* Page Editorial Header */}
        <section className="products-hero-header">
          <div className="products-eyebrow-badge">OUR COLLECTION</div>
          <h1 className="products-main-title">EXPLORE PRODUCTS</h1>
          <p className="products-subheading">
            Discover our collection of premium quality products.
          </p>
          <div className="products-header-glow-line"></div>
        </section>

        {/* Search + Category Bar */}
        <SearchBar
          search={search}
          onSearchChange={setSearch}
          category={category}
          onCategoryChange={setCategory}
          categories={categories}
        />

        {/* Sub-Bar: Breadcrumbs, Count, and Sort */}
        <div className="products-subcontrol-bar">
          {/* Breadcrumb Left */}
          <nav className="products-breadcrumbs" aria-label="Breadcrumb">
            <Link to="/" className="breadcrumb-link">
              Home
            </Link>
            <span className="breadcrumb-separator">&gt;</span>
            <span className="breadcrumb-current">Products</span>
          </nav>

          {/* Results Count Center */}
          <div className="products-results-count">
            {totalCount > 0
              ? `Showing ${startItem}–${endItem} of ${totalCount} products`
              : "0 products found"}
          </div>

          {/* Sort Control & Mobile Trigger Right */}
          <div className="products-right-controls">
            {/* Mobile Filter Button */}
            <button
              type="button"
              className="mobile-filters-trigger"
              onClick={() => setMobileFilterOpen(true)}
              aria-label="Open filter sidebar"
            >
              <i className="bi bi-sliders2-vertical me-1"></i>
              <span>FILTERS</span>
            </button>

            <SortDropdown sortBy={sortBy} onSortChange={setSortBy} />
          </div>
        </div>

        {/* Main 2-Column Layout */}
        <div className="products-layout-body">
          {/* Left Filter Sidebar */}
          <ProductFilters
            selectedCategory={category}
            onSelectCategory={setCategory}
            priceRange={priceRange}
            onPriceChange={setPriceRange}
            selectedBrands={selectedBrands}
            onToggleBrand={handleToggleBrand}
            selectedRating={selectedRating}
            onSelectRating={setSelectedRating}
            onResetFilters={handleResetFilters}
            isOpen={mobileFilterOpen}
            onClose={() => setMobileFilterOpen(false)}
            totalCount={totalCount}
          />

          {/* Right Products Area */}
          <div className="products-main-content-area">
            <ProductGrid
              products={paginatedProducts}
              loading={loading}
              onResetFilters={handleResetFilters}
            />

            {/* Centered Pagination */}
            {!loading && totalPages > 1 && (
              <Pagination
                currentPage={page}
                totalPages={totalPages}
                onPageChange={setPage}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
