import React from "react";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa6"; // Updated to fa6 to match previous code

const FloatingIcons = () => {
  return (
    <div 
      className="absolute inset-0 pointer-events-none"
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Instagram - Top Left */}
      <Icon
        pos="-left-2 top-20 sm:-left-12 sm:top-24"
        color="from-pink-500 via-purple-500 to-orange-400"
        delay={0}
        depth={60}
      >
        <FaInstagram />
      </Icon>

      {/* LinkedIn - Top Right */}
      <Icon
        pos="-right-2 top-32 sm:-right-12 sm:top-40"
        color="from-blue-500 to-cyan-400"
        delay={1.5}
        depth={80} // Floats slightly higher
      >
        <FaLinkedinIn />
      </Icon>

      {/* YouTube - Bottom Left */}
      <Icon
        pos="-left-4 bottom-32 sm:-left-10 sm:bottom-40"
        color="from-red-500 to-red-600"
        delay={0.5}
        depth={50}
      >
        <FaYoutube />
      </Icon>

      {/* Facebook - Bottom Right */}
      <Icon
        pos="-right-4 bottom-16 sm:-right-10 sm:bottom-20"
        color="from-blue-600 to-indigo-500"
        delay={2}
        depth={70}
      >
        <FaFacebookF />
      </Icon>
    </div>
  );
};

const Icon = ({ children, pos, color, delay, depth }) => (
  <motion.div
    // 1. Continuous Floating Animation
    animate={{
      y: [0, -15, 0], // Move up and down
      rotate: [0, 5, -5, 0], // Slight wobble
      scale: [1, 1.05, 1], // Breathing effect
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
      delay: delay,
      repeatType: "mirror",
    }}
    // 2. 3D Depth Logic
    style={{ 
      transform: `translateZ(${depth}px)`, // Pushes icon physically towards the user
    }}
    className={`
        absolute ${pos}
        flex items-center justify-center
        w-12 h-12 sm:w-16 sm:h-16 
        rounded-full
        bg-gradient-to-br ${color}
        text-white text-xl sm:text-2xl
        shadow-[0_10px_30px_rgba(0,0,0,0.3)]
        border border-white/20
        backdrop-blur-md
        z-50
    `}
  >
    {/* Inner Glare for Glass effect */}
    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/30 to-transparent opacity-50" />
    
    {/* The Icon */}
    <div className="relative drop-shadow-md">
      {children}
    </div>
  </motion.div>
);

export default FloatingIcons;