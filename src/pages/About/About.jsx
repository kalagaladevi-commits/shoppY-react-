import React from "react";
import AboutHero from "../../components/about/AboutHero/AboutHero";
import WhoWeAre from "../../components/about/WhoWeAre/WhoWeAre";
import AboutBenefits from "../../components/about/AboutBenefits/AboutBenefits";
import AboutValues from "../../components/about/AboutValues/AboutValues";
import MissionBanner from "../../components/about/MissionBanner/MissionBanner";
import "./About.css";

const About = () => {
  return (
    <div className="about-page-root">
      {/* 1. Cinematic Hero Section */}
      <AboutHero />

      {/* 2. Who We Are Editorial Section */}
      <WhoWeAre />

      {/* 3. Service Benefits Horizontal Panel */}
      <AboutBenefits />

      {/* 4. The Values We Stand For Section */}
      <AboutValues />

      {/* 5. Mission Banner */}
      <MissionBanner />
    </div>
  );
};

export default About;
