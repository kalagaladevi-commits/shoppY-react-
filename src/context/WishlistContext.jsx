import React, { createContext, useContext, useState, useEffect } from "react";
import { useToast } from "./ToastContext";

const WishlistContext = createContext(null);
const WISHLIST_STORAGE_KEY = "shoppy_luxury_wishlist";

export const WishlistProvider = ({ children }) => {
  const { addToast } = useToast();

  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem(WISHLIST_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(wishlist));
    } catch (err) {
      console.error("Failed to save wishlist", err);
    }
  }, [wishlist]);

  const toggleWishlist = (product) => {
    if (!product || !product.id) return;

    setWishlist((prev) => {
      const exists = prev.some((item) => item.id === product.id);
      if (exists) {
        addToast(`Removed "${product.title}" from wishlist`, "info");
        return prev.filter((item) => item.id !== product.id);
      } else {
        addToast(`Added "${product.title}" to wishlist`, "wishlist");
        return [
          ...prev,
          {
            id: product.id,
            title: product.title,
            price: Number(product.price) || 0,
            thumbnail: product.thumbnail || product.image || (product.images && product.images[0]) || "",
            category: product.category || "Luxury",
            rating: product.rating || 4.8,
            discountPercentage: product.discountPercentage || 0,
          },
        ];
      }
    });
  };

  const isInWishlist = (productId) => {
    return wishlist.some((item) => item.id === productId);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        toggleWishlist,
        isInWishlist,
        wishlistCount: wishlist.length,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
};
