import React from "react"; // (Optional but good to have)
import { motion } from "framer-motion";
import { FiSparkles } from "react-icons/fi";

const HeroBadge = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 
                 border border-cyan-500/30 
                 shadow-[0_0_15px_rgba(6,182,212,0.15)]
                 text-cyan-400 font-semibold text-xs uppercase tracking-wider backdrop-blur-md"
    >
      <FiSparkles className="w-4 h-4 animate-pulse" />
      <span>AI-Powered Marketing Solutions</span>
    </motion.div>
  );
};


export default HeroBadge;