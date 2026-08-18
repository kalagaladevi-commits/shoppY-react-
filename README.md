# SHOPPY LUXE — Crimson & Black Luxury Marketplace

A modern, high-performance React + Vite e-commerce web application featuring a bespoke **Crimson + Black** bold luxury aesthetic, complete mobile responsiveness (320px to 2560px), full authentication flows, persistent cart state, dynamic catalog filtering, and Vercel production deployment readiness.

---

## Tech Stack

- **React 19** — Frontend UI Library
- **Vite 8** — Next-Gen Frontend Tooling & Fast Dev Server
- **React Router 7** — SPA Client-Side Routing
- **Axios** — HTTP Client for REST APIs
- **Framer Motion** — Micro-animations and page transitions
- **Bootstrap 5 & Bootstrap Icons** — Utilities & Iconography
- **Vanilla CSS3** — Custom Luxury Design System Tokens

---

## Getting Started

### Installation

```bash
npm install
```

### Environment Setup

Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

Set the API base URL:

```env
VITE_API_BASE_URL=https://dummyjson.com
```

### Development Server

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## Deployment (Vercel)

This project is configured for **Vercel** deployment out of the box:

- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`
- **SPA Rewrites**: Handled automatically via `vercel.json`

---

## Project Structure

```
practicefile-restructured/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── about/
│   │   │   ├── AboutBenefits/
│   │   │   ├── AboutHero/
│   │   │   ├── AboutValues/
│   │   │   ├── MissionBanner/
│   │   │   └── WhoWeAre/
│   │   ├── Auth/
│   │   │   ├── AuthBenefits/
│   │   │   ├── AuthSwitcher/
│   │   │   └── SocialLogin/
│   │   ├── BrandLogo/
│   │   ├── Cards/
│   │   ├── cart/
│   │   │   ├── CartFeatures/
│   │   │   ├── CartItem/
│   │   │   ├── CartSummary/
│   │   │   └── EmptyCart/
│   │   ├── common/
│   │   ├── Features/
│   │   ├── Footer/
│   │   ├── Header/
│   │   ├── home/
│   │   │   ├── BrandValues/
│   │   │   ├── Categories/
│   │   │   ├── CategorySection/
│   │   │   ├── DealsSection/
│   │   │   ├── FeaturedProduct/
│   │   │   ├── Hero/
│   │   │   ├── Newsletter/
│   │   │   ├── PromoBanner/
│   │   │   ├── PromoSection/
│   │   │   ├── ServiceCards/
│   │   │   ├── Testimonials/
│   │   │   ├── TopBar/
│   │   │   ├── TrendingProducts/
│   │   │   └── WhyChooseUs/
│   │   ├── layout/
│   │   │   └── MobileNavigation/
│   │   ├── Loader/
│   │   ├── MainLayout/
│   │   └── product/
│   │       ├── Pagination/
│   │       ├── ProductCard/
│   │       ├── ProductFilters/
│   │       ├── ProductGrid/
│   │       ├── SearchBar/
│   │       └── SortDropdown/
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   ├── CartContext.jsx
│   │   ├── ToastContext.jsx
│   │   └── WishlistContext.jsx
│   ├── pages/
│   │   ├── About/
│   │   ├── Cart/
│   │   ├── Deals/
│   │   ├── Home/
│   │   ├── Login/
│   │   ├── Products/
│   │   ├── Signup/
│   │   ├── SinglePage/
│   │   ├── UseForm/
│   │   └── Users/
│   ├── services/
│   │   └── api.js
│   ├── AppRouter/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .env.example
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── vercel.json
├── vite.config.js
└── README.md
```
