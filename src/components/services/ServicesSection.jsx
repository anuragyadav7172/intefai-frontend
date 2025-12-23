import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { 
  FaMobileAlt, FaBrain, FaBullhorn, FaShieldAlt, 
  FaSearch, FaCode, FaGlobe, FaPalette, FaArrowRight 
} from "react-icons/fa";

const services = [
  { 
    title: "App Development", 
    desc: "Native iOS & Android solutions tailored for performance. We use the latest frameworks to ensure your app scales seamlessly.",
    icon: FaMobileAlt, 
    color: "rgba(6, 182, 212, 0.4)" // Cyan
  },
  { 
    title: "Data Analysis & AI", 
    desc: "Predictive modeling and machine learning integration to help you make data-driven decisions.",
    icon: FaBrain, 
    color: "rgba(168, 85, 247, 0.4)" // Purple
  },
  { 
    title: "Digital Marketing", 
    desc: "Strategic campaigns that drive ROI. From PPC to social media mastery, we ensure your brand gets the visibility it deserves.",
    icon: FaBullhorn, 
    color: "rgba(236, 72, 153, 0.4)" // Pink
  },
  { 
    title: "Security System", 
    desc: "End-to-end encryption and vulnerability testing to protect your digital assets.",
    icon: FaShieldAlt, 
    color: "rgba(16, 185, 129, 0.4)" // Emerald
  },
  { 
    title: "SEO Optimization", 
    desc: "Ranking your business at the top of search results using white-hat techniques that last.",
    icon: FaSearch, 
    color: "rgba(245, 158, 11, 0.4)" // Amber
  },
  { 
    title: "Software Dev", 
    desc: "Scalable SaaS platforms and enterprise software built for specific business needs.",
    icon: FaCode, 
    color: "rgba(59, 130, 246, 0.4)" // Blue
  },
  { 
    title: "Website Dev", 
    desc: "High-performance, responsive websites that convert visitors into loyal customers.",
    icon: FaGlobe, 
    color: "rgba(99, 102, 241, 0.4)" // Indigo
  },
  { 
    title: "UI/UX Designing", 
    desc: "User-centric interfaces that look beautiful and function perfectly.",
    icon: FaPalette, 
    color: "rgba(139, 92, 246, 0.4)" // Violet
  },
];

const SpotlightCard = ({ title, desc, icon: Icon, color, onInquiry }) => {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const isLongText = desc.length > 80;

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setOpacity(1);
  };

  const handleBlur = () => {
    setOpacity(0);
  };

  const toggleReadMore = (e) => {
    e.stopPropagation(); // Prevents clicking the card when clicking "Read More"
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      ref={divRef}
      onClick={onInquiry}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleFocus}
      onMouseLeave={handleBlur}
      className="group relative flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] px-6 py-8 shadow-2xl transition-all duration-300 hover:border-white/20 active:scale-[0.98] cursor-pointer"
    >
      {/* Spotlight Gradient */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${color}, transparent 40%)`,
        }}
      />
      
      {/* Grid Pattern */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-20"
        style={{
             backgroundImage: "radial-gradient(rgba(255,255,255,0.2) 1px, transparent 1px)",
             backgroundSize: "24px 24px"
        }}
      />

      {/* Hover Arrow Icon */}
      <div className="absolute top-4 right-4 translate-x-4 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
         <FaArrowRight className="text-white/50" />
      </div>

      <div className="relative z-10 flex flex-col h-full">
        <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:bg-white/10 group-hover:text-white"
             style={{ boxShadow: opacity ? `0 0 20px ${color}` : 'none' }}
        >
          <Icon className="text-2xl" />
        </div>

        <div className="mt-auto">
          <h3 className="mb-2 text-xl font-bold text-white tracking-wide group-hover:text-cyan-50 transition-colors">
            {title}
          </h3>
          <div className="relative">
            <p className={`text-sm leading-relaxed text-gray-400 transition-all duration-300 group-hover:text-gray-300 ${isExpanded ? "" : "line-clamp-2"}`}>
              {desc}
            </p>
            {isLongText && (
              <button 
                onClick={toggleReadMore}
                className="mt-2 text-xs font-bold uppercase tracking-wider text-cyan-400 hover:text-cyan-300 focus:outline-none transition-colors"
              >
                {isExpanded ? "Read Less" : "Read More"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  // Navigation Handler
  const handleInquiryNavigation = () => {
    const section = document.getElementById("inquiry");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      console.warn("Inquiry section not found. Ensure ID 'inquiry' is set in InquirySection.jsx");
    }
  };

  return (
    <section id="services" className="py-24 bg-[#05070d] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-white"
          >
            Core Expertise
          </motion.h2>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full" />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <SpotlightCard 
                key={i} 
                {...service} 
                onInquiry={handleInquiryNavigation} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;