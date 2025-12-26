import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-[#05070d] text-white pt-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500"
        >
          About Us
        </motion.h1>
        
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
          <p className="text-gray-300 text-lg leading-relaxed">
            [Sample Code] Welcome to IntefAI. We are a collective of passionate developers 
            and AI experts based in Indore, India. We engineer digital transformations 
            that empower businesses to scale efficiently.
          </p>
          <br />
          <p className="text-gray-400">
            (This is a placeholder for the full About Us content. You can move the content 
            from your old AboutSection here later.)
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;