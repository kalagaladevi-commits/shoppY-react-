/**
 * Base API Configuration
 */
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://dummyjson.com";

export const API_ENDPOINTS = {
  products: `${API_BASE_URL}/products`,
  users: `${API_BASE_URL}/users`,
  categories: `${API_BASE_URL}/products/categories`,
};
