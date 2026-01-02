import React from "react";
import { motion } from "framer-motion";
import { 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn, 
  FaXTwitter, 
  FaGithub 
} from "react-icons/fa6";

const HeroMiniStats = () => {
  const socialLinks = [
    { 
      id: 1, 
      icon: <FaLinkedinIn />, 
      label: "LinkedIn", 
      href: "https://linkedin.com",
      color: "group-hover:bg-[#0077b5] group-hover:border-[#0077b5]",
      shadow: "group-hover:shadow-[0_0_20px_rgba(0,119,181,0.5)]"
    },
    { 
      id: 2, 
      icon: <FaXTwitter />, 
      label: "X (Twitter)", 
      href: "https://twitter.com",
      color: "group-hover:bg-black group-hover:border-gray-600",
      shadow: "group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
    },
    { 
      id: 3, 
      icon: <FaInstagram />, 
      label: "Instagram", 
      href: "https://www.instagram.com/intefai_digital?igsh=MTVwYXJ0NWZtMjFkNA==",
      // Instagram gradient background
      color: "group-hover:bg-gradient-to-tr group-hover:from-yellow-500 group-hover:via-red-500 group-hover:to-purple-500 group-hover:border-red-500",
      shadow: "group-hover:shadow-[0_0_20px_rgba(236,72,153,0.5)]"
    },
    { 
      id: 4, 
      icon: <FaFacebookF />, 
      label: "Facebook", 
      href: "https://facebook.com",
      color: "group-hover:bg-[#1877F2] group-hover:border-[#1877F2]",
      shadow: "group-hover:shadow-[0_0_20px_rgba(24,119,242,0.5)]"
    },
    { 
        id: 5, 
        icon: <FaGithub />, 
        label: "Github", 
        href: "https://github.com",
        color: "group-hover:bg-[#2b3137] group-hover:border-[#2b3137]",
        shadow: "group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
    },
  ];

  return (
    <div className="flex flex-wrap gap-4 items-center justify-center md:justify-start">
      {socialLinks.map((social, index) => (
        <motion.a
          key={social.id}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20, rotateX: 90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ 
            duration: 0.5, 
            delay: index * 0.1,
            type: "spring",
            stiffness: 200 
          }}
          whileHover={{ y: -5 }}
          whileTap={{ y: 0, scale: 0.95 }}
          className="group relative"
        >
          {/* 3D Button Structure */}
          <div 
            className={`
              relative z-10 
              flex items-center justify-center 
              w-12 h-12 
              rounded-xl 
              bg-[#1a1f2e] 
              text-gray-400 
              border-t border-l border-r border-white/10 
              border-b-4 /* This creates the 3D thickness */
              transition-all duration-300 
              ${social.color} 
              ${social.shadow}
              group-hover:text-white
              group-hover:border-b-4 /* Keeps thickness on hover */
              group-active:border-b-0 /* "Presses" down on click */
              group-active:translate-y-[4px]
            `}
          >
            <span className="text-xl">
                {social.icon}
            </span>
          </div>

          {/* Tooltip (Optional: Shows name on hover) */}
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-black/80 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            {social.label}
          </span>
        </motion.a>
      ))}
    </div>
  );
};

export default HeroMiniStats;