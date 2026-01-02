import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaRss,
  FaChevronLeft,
  FaXTwitter,
} from "react-icons/fa6";

const socialLinks = [
  { 
    id: 1, 
    icon: <FaFacebookF />, 
    name: "Facebook", 
    color: "group-hover:bg-[#1877F2]", 
    glow: "group-hover:shadow-[0_0_20px_rgba(24,119,242,0.6)]",
    url: "https://facebook.com/your-page" // Add your URL here
  },
  { 
    id: 2, 
    icon: <FaXTwitter />, 
    name: "X (Twitter)", 
    color: "group-hover:bg-black", 
    glow: "group-hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]",
    url: "https://twitter.com/your-username" // Add your URL here
  },
  { 
    id: 3, 
    icon: <FaInstagram />, 
    name: "Instagram", 
    color: "group-hover:bg-gradient-to-br group-hover:from-purple-600 group-hover:to-orange-500", 
    glow: "group-hover:shadow-[0_0_20px_rgba(236,72,153,0.6)]",
    url: "https://www.instagram.com/intefai_digital?igsh=MTVwYXJ0NWZtMjFkNA==" // Add your URL here
  },
  { 
    id: 4, 
    icon: <FaLinkedinIn />, 
    name: "LinkedIn", 
    color: "group-hover:bg-[#0A66C2]", 
    glow: "group-hover:shadow-[0_0_20px_rgba(10,102,194,0.6)]",
    url: "https://linkedin.com/in/your-profile" // Add your URL here
  },
  { 
    id: 5, 
    icon: <FaYoutube />, 
    name: "YouTube", 
    color: "group-hover:bg-[#FF0000]", 
    glow: "group-hover:shadow-[0_0_20px_rgba(255,0,0,0.6)]",
    url: "https://youtube.com/your-channel" // Add your URL here
  },
  { 
    id: 6, 
    icon: <FaRss />, 
    name: "Blog", 
    color: "group-hover:bg-[#EE802F]", 
    glow: "group-hover:shadow-[0_0_20px_rgba(238,128,47,0.6)]",
    url: "https://your-blog.com" // Add your URL here
  },
];

const SideScroller = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="fixed right-0 top-1/2 -translate-y-1/2 z-50 hidden md:flex items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="mr-2"
          >
            <div className="flex flex-col gap-3 p-3 rounded-2xl bg-[#0b0f19]/80 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
              {socialLinks.map((link, index) => (
                <SocialItem key={link.id} link={link} index={index} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        animate={{ 
            x: isHovered ? 10 : 0,
            opacity: isHovered ? 0 : 1 
        }}
        className={`
            cursor-pointer
            flex items-center justify-center
            w-10 h-24 
            rounded-l-2xl
            bg-white/5 backdrop-blur-md 
            border-y border-l border-white/10
            shadow-lg
            transition-all duration-300
            hover:bg-cyan-500/10 hover:border-cyan-500/30
        `}
      >
        <FaChevronLeft className="text-white/50 animate-pulse text-sm" />
      </motion.div>

      <div className="absolute inset-0 w-full h-full -z-10" />
    </div>
  );
};

// Updated SocialItem component with proper link handling
const SocialItem = ({ link, index }) => {
  return (
    <motion.a
      href={link.url} // Use the URL from socialLinks
      target="_blank" // Opens in new tab (recommended for external links)
      rel="noopener noreferrer" // Security best practice for external links
      initial={{ x: 20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: index * 0.05 }}
      className="group relative flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/5 transition-all duration-300 hover:scale-110 active:scale-95"
    >
      {/* Tooltip */}
      <span className="absolute right-14 px-3 py-1 rounded-md bg-[#0b0f19] border border-white/10 text-xs font-semibold text-white whitespace-nowrap opacity-0 -translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shadow-xl z-50">
        {link.name}
      </span>

      {/* Background Color Fill on Hover */}
      <div className={`absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 ${link.color} ${link.glow} group-hover:opacity-100`} />

      {/* Icon */}
      <div className="relative z-10 text-white/60 transition-colors duration-300 group-hover:text-white text-lg">
        {link.icon}
      </div>
    </motion.a>
  );
};

export default SideScroller;