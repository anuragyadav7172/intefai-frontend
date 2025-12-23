import React from "react";
import HeroSection from "../../components/sections/Hero/HeroSection";
import DynamicStats from "../../components/sections/Hero/DynamicStats";
import AboutSection from "../../components/sections/About/AboutSection";
import ServicesSection from "../../components/services/ServicesSection";
import TeamSection from "../../components/sections/Team/TeamSection";
import ClientLogos from "../../components/sections/Clients/ClientLogos";
import SocialSection from "../../components/Social/SocialSection.jsx";
import InquirySection from "../../components/sections/Inquiry/InquirySection";
const Home = () => {
  return (
    <main className="bg-[#05070d] min-h-screen">
      <HeroSection />
      <DynamicStats />
      <AboutSection />
      <ServicesSection />
      <TeamSection />
      <ClientLogos />
      <SocialSection />
      <InquirySection />
    </main>
  );
};

export default Home;