import React from "react";
import Hero from "../../components/home/Hero/Hero";
import ServiceCards from "../../components/home/ServiceCards/ServiceCards";
import PromoSection from "../../components/home/PromoSection/PromoSection";
import CategorySection from "../../components/home/CategorySection/CategorySection";
import WhyChooseUs from "../../components/home/WhyChooseUs/WhyChooseUs";
import Testimonials from "../../components/home/Testimonials/Testimonials";
import Newsletter from "../../components/home/Newsletter/Newsletter";
import "./Home.css";

function Home() {
  return (
    <div className="home-page-root">
      {/* 1. Main Hero Container */}
      <Hero />

      {/* 2. Service Benefits Horizontal Strip */}
      <ServiceCards />

      {/* 3. Promotional Split Section */}
      <PromoSection />

      {/* 4. Shop by Category Grid */}
      <CategorySection />

      {/* 5. Why Choose Us Editorial Section */}
      <WhyChooseUs />

      {/* 6. Customer Testimonials */}
      <Testimonials />

      {/* 7. VIP Newsletter Card */}
      <Newsletter />
    </div>
  );
}

export default Home;
