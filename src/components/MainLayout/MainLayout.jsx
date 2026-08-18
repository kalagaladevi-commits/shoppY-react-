import React from "react";
import { useLocation } from "react-router-dom";
import TopBar from "../home/TopBar/TopBar";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MobileNavigation from "../layout/MobileNavigation/MobileNavigation";
import AppRouter from "../../AppRouter/AppRouter";
import "./MainLayout.css";

export const MainLayout = () => {
  const location = useLocation();

  // Completely hide TopBar, Header, Footer, and Bottom MobileNavigation on all Auth pages
  const isAuthPage = [
    "/login",
    "/signup",
    "/useform"
  ].some((path) => location.pathname.toLowerCase().startsWith(path));

  return (
    <div className="layout-wrapper">
      {!isAuthPage && <TopBar />}
      {!isAuthPage && <Header />}
      <main className="layout-content">
        <AppRouter />
      </main>
      {!isAuthPage && <Footer />}
      {!isAuthPage && <MobileNavigation />}
    </div>
  );
};

export default MainLayout;
