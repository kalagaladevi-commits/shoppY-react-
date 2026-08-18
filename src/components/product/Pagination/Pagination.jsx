import React from "react";
import "./Pagination.css";

const Pagination = ({
  currentPage = 1,
  totalPages = 1,
  onPageChange,
}) => {
  if (totalPages <= 1) return null;

  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages + 2) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      if (currentPage > 3) {
        pages.push("...");
      }

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - 2) {
        pages.push("...");
      }
      pages.push(totalPages);
    }
    return pages;
  };

  const pages = getPageNumbers();

  return (
    <nav className="luxury-pagination-nav" aria-label="Products pagination">
      {/* Prev Button */}
      <button
        type="button"
        className="pagination-arrow-btn"
        onClick={() => {
          if (currentPage > 1) {
            onPageChange(currentPage - 1);
            window.scrollTo({ top: 200, behavior: "smooth" });
          }
        }}
        disabled={currentPage === 1}
        aria-label="Previous page"
      >
        <i className="bi bi-chevron-left"></i>
      </button>

      {/* Page Numbers */}
      <div className="pagination-numbers-row">
        {pages.map((item, index) => {
          if (item === "...") {
            return (
              <span key={`ellipsis-${index}`} className="pagination-ellipsis">
                ...
              </span>
            );
          }

          const isCurrent = currentPage === item;
          return (
            <button
              key={item}
              type="button"
              className={`pagination-number-btn ${isCurrent ? "is-active" : ""}`}
              onClick={() => {
                onPageChange(item);
                window.scrollTo({ top: 200, behavior: "smooth" });
              }}
              aria-current={isCurrent ? "page" : undefined}
            >
              {item}
            </button>
          );
        })}
      </div>

      {/* Next Button */}
      <button
        type="button"
        className="pagination-arrow-btn"
        onClick={() => {
          if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
            window.scrollTo({ top: 200, behavior: "smooth" });
          }
        }}
        disabled={currentPage === totalPages}
        aria-label="Next page"
      >
        <i className="bi bi-chevron-right"></i>
      </button>
    </nav>
  );
};

export default Pagination;
