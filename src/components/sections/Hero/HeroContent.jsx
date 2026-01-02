import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// You can define the badge here or import it if you have a separate file
const HeroBadge = () => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 mb-6 backdrop-blur-sm"
  >
    <span className="relative flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
    </span>
    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-cyan-400">
      AI-Powered Marketing
    </span>
  </motion.div>
);

const HeroContent = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/contact');
  };

  const handleViewServices = () => {
    navigate('/services');
  };

  return (
    <div className="flex-1 w-full flex flex-col items-center lg:items-start text-center lg:text-left">
      
      <HeroBadge />

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-white tracking-tight"
      >
        Elevate Your Brand with{" "}
        <br className="hidden lg:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-gradient-x">
          AI Intelligence
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-6 text-gray-400 text-base sm:text-lg lg:text-xl max-w-lg lg:max-w-xl leading-relaxed"
      >
        We combine data-driven automation with high-end creative strategy to
        scale your digital presence and maximize engagement.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
      >
        <button 
          onClick={handleGetStarted}
          className="w-full sm:w-auto relative group px-8 py-4 rounded-full overflow-hidden font-bold text-black bg-white transition-transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="relative group-hover:text-white transition-colors duration-300">
            Get Started Now
          </span>
        </button>

        <button 
          onClick={handleViewServices}
          className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/10 text-white font-bold hover:bg-white/5 transition-colors active:scale-95 backdrop-blur-sm"
        >
          View Services
        </button>
      </motion.div>
    </div>
  );
};

export default HeroContent;