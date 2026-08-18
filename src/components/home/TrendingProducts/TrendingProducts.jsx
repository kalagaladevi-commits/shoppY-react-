import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ProductCard from "../../product/ProductCard/ProductCard";
import { API_BASE_URL } from "../../../services/api";
import "./TrendingProducts.css";

const fallbackTrending = [
  {
    id: 101,
    title: "Vanguard Obsidian Tourbillon",
    description: "Hand-finished skeleton dial in DLC black titanium with crimson ruby escapement.",
    price: 1850,
    discountPercentage: 15,
    rating: 4.95,
    category: "Horology",
    thumbnail: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=80",
    stock: 4,
  },
  {
    id: 102,
    title: "Acoustic Noir Spatial Headphones",
    description: "Beryllium dynamic drivers enclosed in carved carbon fiber with lambskin memory earcups.",
    price: 680,
    discountPercentage: 20,
    rating: 4.88,
    category: "Audio & Tech",
    thumbnail: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=80",
    stock: 8,
  },
  {
    id: 103,
    title: "Oud Crimson Imperial Extract 100ml",
    description: "Rare Cambodian agarwood saturated with damask rose and smoky black vanilla bean.",
    price: 420,
    discountPercentage: 0,
    rating: 4.98,
    category: "Perfumery",
    thumbnail: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600&auto=format&fit=crop&q=80",
    stock: 12,
  },
  {
    id: 104,
    title: "Monochrome Tailored Wool Overcoat",
    description: "Heavyweight Italian double-face cashmere blend with horn buttons and crimson silk lining.",
    price: 1250,
    discountPercentage: 10,
    rating: 4.91,
    category: "Atelier",
    thumbnail: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&auto=format&fit=crop&q=80",
    stock: 5,
  },
  {
    id: 105,
    title: "Sculpted Italian Calfskin Duffle",
    description: "Full-grain vegetable tanned black hide with brushed palladium hardware and crimson edge paint.",
    price: 940,
    discountPercentage: 25,
    rating: 4.86,
    category: "Leather",
    thumbnail: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&auto=format&fit=crop&q=80",
    stock: 6,
  },
  {
    id: 106,
    title: "Optique Polarized Crimson Aviators",
    description: "Ultra-thin beta-titanium chassis with custom crimson-tinted anti-reflective Zeiss optics.",
    price: 380,
    discountPercentage: 0,
    rating: 4.79,
    category: "Eyewear",
    thumbnail: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&auto=format&fit=crop&q=80",
    stock: 14,
  },
  {
    id: 107,
    title: "Pro Edition Titanium Flagship",
    description: "Seamless ceramic body with custom dark silicon and studio-grade cinematic sensors.",
    price: 1399,
    discountPercentage: 12,
    rating: 4.94,
    category: "Hardware",
    thumbnail: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop&q=80",
    stock: 7,
  },
  {
    id: 108,
    title: "Midnight Noir Chrono Classic",
    description: "Automatic mechanical movement with date complication and sapphire case back.",
    price: 1620,
    discountPercentage: 18,
    rating: 4.89,
    category: "Horology",
    thumbnail: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600&auto=format&fit=crop&q=80",
    stock: 9,
  },
];

const filterTabs = [
  { label: "ALL EDITIONS", category: "all" },
  { label: "HOROLOGY", category: "mens-watches" },
  { label: "HAUTE TECH", category: "smartphones" },
  { label: "PERFUMERY", category: "fragrances" },
  { label: "ATELIER", category: "mens-shirts" },
];

const TrendingProducts = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [products, setProducts] = useState(fallbackTrending);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      try {
        let url = `${API_BASE_URL}/products?limit=8&skip=0`;
        if (activeTab !== "all") {
          url = `${API_BASE_URL}/products/category/${activeTab}?limit=8`;
        }
        const { data } = await axios.get(url);
        if (data.products && data.products.length > 0) {
          setProducts(data.products);
        } else {
          setProducts(fallbackTrending);
        }
      } catch (err) {
        console.error("Using curated fallback products", err);
        setProducts(fallbackTrending);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [activeTab]);

  return (
    <section className="luxury-trending-section">
      <div className="luxury-container">
        {/* Header */}
        <div className="section-header-editorial">
          <div>
            <div className="eyebrow-tag">THE LATEST EDIT</div>
            <h2 className="section-heading-title">TRENDING NOW</h2>
          </div>

          {/* Filter Pills */}
          <div className="trending-filter-tabs">
            {filterTabs.map((tab) => (
              <button
                key={tab.category}
                className={`trending-tab-btn ${activeTab === tab.category ? "active" : ""}`}
                onClick={() => setActiveTab(tab.category)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="trending-products-grid">
          {products.map((item) => (
            <ProductCard
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              price={item.price}
              thumbnail={item.thumbnail || item.images?.[0]}
              category={item.category}
              rating={item.rating}
              discountPercentage={item.discountPercentage}
              brand={item.brand}
              stock={item.stock}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="trending-bottom-cta">
          <Link to="/products" className="btn-luxury-secondary">
            <span>VIEW COMPLETE CATALOG</span>
            <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
