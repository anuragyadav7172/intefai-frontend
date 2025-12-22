import React from "react";
import HeroSection from "../../components/sections/Hero/HeroSection";
import ServicesSection from "../../components/services/ServicesSection";
import SocialSection from "../../components/Social/SocialSection.jsx";

const Home = () => {
  return (
    <main className="bg-[#05070d] min-h-screen">
      <HeroSection />
      
      {/* Social Section is now placed correctly */}
      <SocialSection />
      
      <ServicesSection />
    </main>
  );
};

export default Home;