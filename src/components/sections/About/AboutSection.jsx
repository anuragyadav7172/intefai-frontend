import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCheck } from "react-icons/fi";

// --- IMPORT YOUR IMAGES ---
// Ensure paths are correct relative to this file
import img1 from "../../../assets/images/about/office-1.jpg";
import img2 from "../../../assets/images/about/office-2.jpg";
import img3 from "../../../assets/images/about/office-3.jpg";
import img4 from "../../../assets/images/about/office-4.jpg";
import img5 from "../../../assets/images/about/office-5.jpg";

const AboutSection = () => {
  const sliderImages = [img1, img2, img3, img4, img5];
  const [currentIndex, setCurrentIndex] = useState(0);

  // 1. PRELOAD IMAGES: This forces the browser to load all images immediately
  // preventing that "white flash" or lag when the slide changes.
  useEffect(() => {
    sliderImages.forEach((img) => {
      const image = new Image();
      image.src = img;
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [sliderImages.length]);

  const highlights = [
    "Custom AI & Software Solutions",
    "End-to-End Development Support",
    "Expert Team Based in Indore, India",
    "Scalable Future-Ready Architecture",
  ];

  return (
    <section id="about" className="relative py-20 md:py-32 bg-[#05070d] overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT COLUMN: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
              <span className="text-cyan-400 text-xs font-bold tracking-widest uppercase">
                About IntefAI
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1]">
              We Bridge the Gap Between <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                Business & Innovation
              </span>
            </h2>

            <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-xl">
              Welcome to <strong>IntefAI</strong>. Based in the heart of Indore, India, we are a collective of passionate developers and AI experts. We don't just write code; we engineer digital transformations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center shrink-0">
                    <FiCheck className="text-cyan-400 text-xs" />
                  </div>
                  <span className="text-gray-300 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="border-l-4 border-cyan-500 pl-6 py-2">
              <p className="text-white/90 italic text-lg md:text-xl mb-4">
                "Our vision is to democratize AI technology, making high-end software solutions accessible."
              </p>
              <div>
                <h4 className="text-white font-bold">Lakhan Jadam</h4>
                <p className="text-cyan-500 text-xs uppercase tracking-wider">CEO & Co-Founder</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Performance Optimized Slideshow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-gray-900 group">
              
              {/* 2. SMOOTH ANIMATION FIX:
                Instead of simple opacity, we use a keyframe strategy.
                - The 'initial' image is absolutely positioned.
                - The 'animate' state brings it to full visibility slowly.
                - The 'exit' state holds it there for a second so the new image covers it.
              */}
              <AnimatePresence initial={false}>
                <motion.img
                  key={currentIndex}
                  src={sliderImages[currentIndex]}
                  alt="IntefAI Office"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  // Using 'linear' ease prevents the jumpy "acceleration" effect
                  transition={{ duration: 1, ease: "linear" }} 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent pointer-events-none z-10" />
              
              {/* Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {sliderImages.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`h-1.5 rounded-full transition-all duration-500 ${
                            idx === currentIndex ? "bg-cyan-500 w-8" : "bg-white/40 hover:bg-white w-2"
                        }`}
                    />
                ))}
              </div>
            </div>

            {/* Floating Stat Card */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 bg-[#0a0f1c]/95 border border-white/10 p-6 md:p-8 rounded-2xl shadow-xl backdrop-blur-xl hidden sm:block z-30"
            >
              <div className="flex items-baseline gap-1">
                <span className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  8+
                </span>
                <span className="text-xl text-white font-bold">Years</span>
              </div>
              <p className="text-gray-400 text-sm mt-1 uppercase tracking-wider">Experience in Tech</p>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;