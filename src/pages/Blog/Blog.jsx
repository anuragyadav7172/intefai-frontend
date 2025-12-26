import React from "react";
import { motion } from "framer-motion";

const Blog = () => {
  return (
    <div className="min-h-screen bg-[#05070d] text-white pt-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500"
        >
          Latest Insights
        </motion.h1>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-12 text-center">
          <h2 className="text-2xl font-semibold mb-4">Blog Coming Soon</h2>
          <p className="text-gray-400">
            We are currently crafting high-quality articles about AI and Technology.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;