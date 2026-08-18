import React, { createContext, useContext, useState, useEffect, useMemo } from "react";
import { useToast } from "./ToastContext";

const CartContext = createContext(null);

const CART_STORAGE_KEY = "shoppy_luxury_cart";
const COUPON_STORAGE_KEY = "shoppy_luxury_coupon";

const VALID_COUPONS = {
  LUXE10: { discount: 0.10, description: "10% Off Luxury Privilege" },
  CRIMSON20: { discount: 0.20, description: "20% Off Crimson Drop Special" },
  VIP30: { discount: 0.30, description: "30% Off VIP Editorial Access" },
};

export const CartProvider = ({ children }) => {
  const { addToast } = useToast();

  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [appliedCoupon, setAppliedCoupon] = useState(() => {
    try {
      const saved = localStorage.getItem(COUPON_STORAGE_KEY);
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  // Persist cart
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (err) {
      console.error("Failed to save cart to localStorage", err);
    }
  }, [cart]);

  // Persist coupon
  useEffect(() => {
    try {
      if (appliedCoupon) {
        localStorage.setItem(COUPON_STORAGE_KEY, JSON.stringify(appliedCoupon));
      } else {
        localStorage.removeItem(COUPON_STORAGE_KEY);
      }
    } catch (err) {
      console.error("Failed to save coupon to localStorage", err);
    }
  }, [appliedCoupon]);

  const addToCart = (product, quantity = 1, selectedVariant = null) => {
    if (!product || !product.id) return;

    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex(
        (item) =>
          item.id === product.id &&
          JSON.stringify(item.selectedVariant) === JSON.stringify(selectedVariant)
      );

      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity,
        };
        return updated;
      } else {
        return [
          ...prevCart,
          {
            id: product.id,
            title: product.title,
            price: Number(product.price) || 0,
            originalPrice: product.discountPercentage
              ? Math.round((Number(product.price) * 100) / (100 - Number(product.discountPercentage)))
              : Number(product.price) || 0,
            discountPercentage: product.discountPercentage || 0,
            thumbnail: product.thumbnail || product.image || (product.images && product.images[0]) || "",
            category: product.category || "Luxury",
            brand: product.brand || "NOIR & CRIMSON",
            quantity: quantity,
            selectedVariant: selectedVariant,
          },
        ];
      }
    });

    addToast(`"${product.title}" added to your bag`, "crimson");
  };

  const removeFromCart = (productId, selectedVariant = null) => {
    setCart((prevCart) => {
      const itemToRemove = prevCart.find(
        (item) =>
          item.id === productId &&
          JSON.stringify(item.selectedVariant) === JSON.stringify(selectedVariant)
      );
      if (itemToRemove) {
        addToast(`Removed "${itemToRemove.title}" from bag`, "info");
      }
      return prevCart.filter(
        (item) =>
          !(
            item.id === productId &&
            JSON.stringify(item.selectedVariant) === JSON.stringify(selectedVariant)
          )
      );
    });
  };

  const updateQuantity = (productId, quantity, selectedVariant = null) => {
    if (quantity <= 0) {
      removeFromCart(productId, selectedVariant);
      return;
    }

    setCart((prevCart) =>
      prevCart.map((item) => {
        if (
          item.id === productId &&
          JSON.stringify(item.selectedVariant) === JSON.stringify(selectedVariant)
        ) {
          return { ...item, quantity };
        }
        return item;
      })
    );
  };

  const clearCart = () => {
    setCart([]);
    setAppliedCoupon(null);
  };

  const applyCoupon = (code) => {
    if (!code) return { success: false, message: "Please enter a coupon code" };
    const cleanCode = code.trim().toUpperCase();

    if (VALID_COUPONS[cleanCode]) {
      const couponData = {
        code: cleanCode,
        discount: VALID_COUPONS[cleanCode].discount,
        description: VALID_COUPONS[cleanCode].description,
      };
      setAppliedCoupon(couponData);
      addToast(`Promo code "${cleanCode}" applied: ${couponData.description}`, "success");
      return { success: true, message: `Promo applied: ${couponData.description}` };
    } else {
      addToast("Invalid promotional code. Try 'LUXE10' or 'CRIMSON20'", "error");
      return { success: false, message: "Invalid promo code" };
    }
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    addToast("Promo code removed", "info");
  };

  // Computations
  const subtotal = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }, [cart]);

  const discountAmount = useMemo(() => {
    if (!appliedCoupon) return 0;
    return subtotal * appliedCoupon.discount;
  }, [subtotal, appliedCoupon]);

  const shippingFee = useMemo(() => {
    if (subtotal === 0) return 0;
    return subtotal > 150 ? 0 : 15; // Free over $150
  }, [subtotal]);

  const taxAmount = useMemo(() => {
    if (subtotal === 0) return 0;
    return (subtotal - discountAmount) * 0.08; // 8% sales tax
  }, [subtotal, discountAmount]);

  const totalAmount = useMemo(() => {
    if (subtotal === 0) return 0;
    return Math.max(0, subtotal - discountAmount + shippingFee + taxAmount);
  }, [subtotal, discountAmount, shippingFee, taxAmount]);

  const totalItemCount = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        appliedCoupon,
        applyCoupon,
        removeCoupon,
        subtotal,
        discountAmount,
        shippingFee,
        taxAmount,
        totalAmount,
        totalItemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
