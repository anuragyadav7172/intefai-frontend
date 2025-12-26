import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div className="min-h-screen bg-[#05070d] text-white pt-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500"
        >
          Our Services
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Sample Service Cards */}
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-colors">
              <h3 className="text-xl font-bold mb-2">Service Name {item}</h3>
              <p className="text-gray-400 text-sm">
                This is sample text for service description. We will eventually map your 
                real services array here.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;