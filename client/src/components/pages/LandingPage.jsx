import React from "react";
import Footer from "../UI/molecules/Footer";
import DemoApp from "../UI/organisms/DemoApp";
import FeaturesSection from "../UI/organisms/FeaturesSection";
import HeroSection from "../UI/organisms/HeroSection";
import Navbar from "../UI/organisms/Navbar";

function LandingPage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <DemoApp />
      <Footer />
    </>
  );
}

export default LandingPage;
