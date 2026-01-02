import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PhoneMockup from "./PhoneMockup";
import HeroContent from "./HeroContent";
import HeroMiniStats from "./HeroMiniStats";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="relative w-full min-h-[100dvh] flex items-center justify-center bg-gradient-to-br from-[#05070d] via-[#0a0f1c] to-[#0c1120] overflow-x-hidden pt-32 pb-12 lg:pt-30 lg:pb-20"
    >
      {/* --- Enhanced Background --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Gradient Shapes */}
        <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-cyan-500/10 rounded-full blur-2xl md:blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-purple-500/10 rounded-full blur-2xl md:blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-48 md:h-64 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 blur-2xl md:blur-3xl" />

        {/* Grid Pattern with Mouse Parallax */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
          }}
        />

        {/* Noise Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">

        {/* Main Layout Container */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">

          {/* 1. LEFT COLUMN WRAPPER (Text + Stats) */}
          <div className="flex-1 w-full flex flex-col gap-10 lg:gap-12">

            {/* The Text Content */}
            <HeroContent />

            {/* The Stats - Increased size for desktop */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="w-full"
            >
              <div className="w-full border-t border-white/5 pt-1">
                <HeroMiniStats />
              </div>

            </motion.div>

          </div>

          {/* 2. RIGHT COLUMN (Phone Visual) */}
          <div className="flex-1 w-full flex justify-center lg:justify-end perspective-1000 mt-8 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: -10 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative w-full max-w-[280px] sm:max-w-[340px] md:max-w-[400px] lg:max-w-[480px] xl:max-w-[520px]"
            >
              {/* Phone Container with Enhanced Effects */}
              <div className="relative -mt-4 lg:-mt-8">
  <PhoneMockup />
                {/* Back Glow behind phone */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[80%] bg-gradient-to-b from-cyan-500/30 via-purple-500/30 to-pink-500/30 blur-[80px] -z-10 rounded-full opacity-60" />

                {/* Floating Particles Effect */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400/20 rounded-full blur-md animate-pulse" />
                <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-purple-400/20 rounded-full blur-lg animate-pulse" style={{ animationDelay: "0.5s" }} />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;