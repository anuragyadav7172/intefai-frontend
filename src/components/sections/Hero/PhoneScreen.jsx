import React from "react";
import { motion } from "framer-motion";

const POSTS = [
  "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400",
  "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400",
  "https://images.unsplash.com/photo-1557838923-2985c318be48?w=400",
];

const PhoneScreen = () => {
  return (
    <div className="relative h-full w-full bg-[#05070d] pt-10 overflow-hidden">
      <motion.div
        animate={{ y: ["0%", "-50%"] }}
        transition={{ 
          repeat: Infinity, 
          duration: 15, 
          ease: "linear" 
        }}
        style={{ willChange: "transform" }}
        className="flex flex-col gap-3 p-3"
      >
        {/* Doubling the array ensures the loop is seamless */}
        {[...POSTS, ...POSTS].map((src, i) => (
          <div 
            key={i} 
            className="w-full aspect-square rounded-xl overflow-hidden border border-white/5 bg-white/5"
          >
            <img 
              src={src} 
              alt={`Feed post ${i}`} 
              className="w-full h-full object-cover opacity-80" 
              loading="lazy"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default PhoneScreen;