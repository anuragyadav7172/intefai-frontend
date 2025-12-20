import React from "react";
import HeroSection from "../../components/sections/Hero/HeroSection";
import ServicesSection from "../../components/services/ServicesSection";
import ProductCard from "../../components/ui/ProductCard";

const products = [
  {
    id: 1,
    title: "AI Growth Engine",
    description: "Automated lead generation system that finds customers while you sleep.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    id: 2,
    title: "Content Omni-Bot",
    description: "Generates and posts social content across 5 platforms instantly.",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    title: "Analytics Core",
    description: "Real-time dashboard showing exactly where your revenue comes from.",
    color: "from-green-500 to-emerald-500",
  },
];

const Home = () => {
  return (
    <main className="bg-[#05070d] min-h-screen">
      
      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Products Section */}
      <section id="products" className="py-24 bg-[#05070d] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Products</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Ready-to-deploy solutions for instant impact.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                title={product.title}
                description={product.description}
                color={product.color}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section id="contact" className="py-24 bg-[#05070d] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to scale your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Digital Presence?</span>
          </h2>
          <button 
            onClick={() => console.log("Navigate to contact page")}
            className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-bold shadow-lg shadow-cyan-500/20 hover:scale-105 transition-transform"
          >
            Get Started Now
          </button>
        </div>
      </section>

    </main>
  );
};

export default Home;