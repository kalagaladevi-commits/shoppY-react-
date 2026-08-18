import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "../components/Loader/Loader";
import "./AppRouter.css";

export const Home = React.lazy(() => import("../pages/Home/Home"));
export const About = React.lazy(() => import("../pages/About/About"));
export const Products = React.lazy(() => import("../pages/Products/Products"));
export const SingleProduct = React.lazy(() => import("../pages/SinglePage/SingleProduct"));
export const Cart = React.lazy(() => import("../pages/Cart/Cart"));
export const Users = React.lazy(() => import("../pages/Users/Users"));
export const Signup = React.lazy(() => import("../pages/Signup/Signup"));
export const Login = React.lazy(() => import("../pages/Login/Login"));
export const UseForm = React.lazy(() => import("../pages/UseForm/UseForm"));

const AppRouter = () => {
  const routes = [
    { path: "/", Element: <Home /> },
    { path: "/about", Element: <About /> },
    { path: "/products", Element: <Products /> },
    { path: "/product/:id", Element: <SingleProduct /> },
    { path: "/products/:id", Element: <SingleProduct /> },
    { path: "/cart", Element: <Cart /> },
    { path: "/user", Element: <Users /> },
    { path: "/signup", Element: <Signup /> },
    { path: "/login", Element: <Login /> },
    { path: "/useform", Element: <UseForm /> },
  ];

  return (
    <Suspense
      fallback={
        <div className="router-loader-container">
          <Loader />
        </div>
      }
    >
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.Element} />
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
