import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import Cards from "../Cards/Cards";
import Loader from "../Loader/Loader";
import { API_BASE_URL } from "../../services/api";
import "./ProductList.css";

export const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [categoryList, setCategoryList] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const productsPerPage = 10;

  // Get Categories
  useEffect(() => {
    async function getCategories() {
      try {
        const { data } = await axios.get(
          `${API_BASE_URL}/products/category-list`
        );
        setCategoryList(data);
      } catch (err) {
        console.error(err);
      }
    }

    getCategories();
  }, []);

  // Get Products
  useEffect(() => {
    async function productsApi() {
      setLoading(true);

      let api;

      if (category) {
        api = `${API_BASE_URL}/products/category/${category}`;
      } else if (search) {
        api = `${API_BASE_URL}/products/search?q=${search}`;
      } else {
        api = `${API_BASE_URL}/products?limit=100`;
      }

      try {
        const { data } = await axios.get(api);
        setProducts(data.products || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    productsApi();
    setPage(1);
  }, [category, search]);

  // Pagination
  const currentPageProducts = products.slice(
    (page - 1) * productsPerPage,
    page * productsPerPage
  );

  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <div className="products-page">
      <div className="luxury-container">
        {/* Header */}
        <div className="products-header">
          <span className="products-eyebrow">OUR COLLECTION</span>
          <h1 className="products-main-title">Explore Products</h1>
          <p className="products-subtitle">Discover our collection of quality products.</p>
        </div>

        {/* Search and Category Filters */}
        <div className="products-filter">
          <div className="products-search-wrap">
            <i className="bi bi-search search-icon"></i>
            <input
              type="search"
              placeholder="Search For Products..."
              value={search}
              onChange={(e) => {
                setCategory("");
                setSearch(e.target.value);
              }}
              className="products-search-input"
            />
          </div>

          <div className="products-select-wrap">
            <select
              value={category}
              onChange={(e) => {
                setSearch("");
                setCategory(e.target.value);
              }}
              className="products-category-select"
            >
              <option value="">All Categories</option>
              {categoryList.map((categoryName) => (
                <option key={categoryName} value={categoryName}>
                  {typeof categoryName === "string" ? categoryName.replace("-", " ") : categoryName}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Products List */}
        <div className="products-list">
          {loading ? (
            <Loader />
          ) : currentPageProducts.length === 0 ? (
            <p className="no-products">No products found.</p>
          ) : (
            <motion.div
              className="products-grid-row"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  opacity: 0,
                },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.06,
                  },
                },
              }}
            >
              {currentPageProducts.map((product) => (
                <motion.div
                  key={product.id}
                  className="product-grid-col"
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 20,
                      scale: 0.98,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: {
                        duration: 0.4,
                        ease: "easeOut",
                      },
                    },
                  }}
                >
                  <Cards
                    id={product.id}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    image={product.thumbnail}
                  />
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>

        {/* Pagination */}
        {!loading && totalPages > 1 && (
          <div className="pagination">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (pageNumber) => (
                <button
                  key={pageNumber}
                  className={
                    page === pageNumber
                      ? "pagination-btn active"
                      : "pagination-btn"
                  }
                  onClick={() => {
                    setPage(pageNumber);
                    window.scrollTo({ top: 150, behavior: "smooth" });
                  }}
                >
                  {pageNumber}
                </button>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
