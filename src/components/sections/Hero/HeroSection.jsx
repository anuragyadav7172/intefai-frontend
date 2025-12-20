import React from "react";
import { motion } from "framer-motion";
import PhoneMockup from "./PhoneMockup";
import HeroContent from "./HeroContent";
import HeroMiniStats from "./HeroMiniStats"; // 1. Import the stats here

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-[100dvh] flex items-center justify-center bg-[#05070d] overflow-x-hidden pt-32 pb-12 lg:pt-40 lg:pb-20"
    >
      {/* --- Background Ambient Glows --- */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[80vw] h-[80vw] md:w-[600px] md:h-[600px] bg-cyan-500/10 blur-[80px] md:blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[80vw] h-[80vw] md:w-[600px] md:h-[600px] bg-purple-500/10 blur-[80px] md:blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        
        {/* Main Layout Container */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">

          {/* 1. LEFT COLUMN WRAPPER (Text + Stats) */}
          <div className="flex-1 w-full flex flex-col gap-10"> 
            
            {/* The Text Content */}
            <HeroContent />

            {/* The Stats (Routed here as requested) */}
            <div className="w-full border-t border-white/5 pt-8">
              <HeroMiniStats />
            </div>

          </div>

          {/* 2. RIGHT COLUMN (Phone Visual) */}
          <div className="flex-1 w-full flex justify-center lg:justify-end perspective-1000 mt-8 lg:mt-0">
            <motion.div 
                initial={{ opacity: 0, scale: 0.8, rotateY: -10 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative w-full max-w-[280px] sm:max-w-[340px] md:max-w-[400px] lg:max-w-full lg:scale-110"
            >
              <PhoneMockup />
              
              {/* Back Glow behind phone */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[80%] bg-gradient-to-b from-cyan-500/20 to-purple-500/20 blur-[60px] -z-10 rounded-full" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;