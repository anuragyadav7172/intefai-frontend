import React from "react";
import { motion } from "framer-motion";
import { socialLinks } from "../../constants/socialLinks"; // Ensure this path is correct
import SocialMediaCard from "./SocialMediaCard";

const SocialSection = () => {
  return (
    <section id="social" className="py-24 bg-[#05070d] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Connect With <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">IntefAI</span>
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Stay updated with our latest digital marketing insights and AI-driven strategies across all major platforms.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialLinks.map((social) => (
            <SocialMediaCard 
              key={social.id}
              icon={social.icon}
              name={social.name}
              // Correctly mapping 'url' from data to 'link' prop
              link={social.url} 
              colorClass={social.color}
              // Passing the image
              bgImage={social.image} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialSection;