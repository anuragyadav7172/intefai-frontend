import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#05070d] text-white pt-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500"
        >
          Contact Us
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-300">
              Sample contact form placeholder. We will move the InquirySection code here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;