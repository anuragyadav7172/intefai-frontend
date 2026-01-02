import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FiUsers,
  FiSearch,
  FiShoppingBag,
  FiCpu,
  FiCode,
  FiMessageSquare,
  FiPenTool,
  FiSmartphone,
  FiMail,
  FiPackage,
  FiGlobe,
  FiCheck,
  FiTarget,
  FiAward,
  FiArrowRight,
  FiInstagram,
  FiFacebook,
  FiLinkedin,
  FiTwitter,
  FiArrowUpRight
} from "react-icons/fi";

const services = [
  {
    id: 1,
    title: "Social Media Management",
    desc: "Strategic social media growth across all major platforms using data-driven strategies, creative content, and performance tracking.",
    icon: FiUsers,
    color: "rgba(168, 85, 247, 0.4)", // Purple
    gradient: "from-purple-500 to-pink-500",
    platforms: ["Instagram", "Facebook", "LinkedIn", "Twitter", "Reddit", "Pinterest", "WhatsApp Business"],
    serviceName: "social-media-management"
  },
  {
    id: 2,
    title: "SEO & Content Marketing",
    desc: "Increase organic traffic and rankings with comprehensive SEO strategies, keyword research, and AI-assisted content creation.",
    icon: FiSearch,
    color: "rgba(16, 185, 129, 0.4)", // Emerald
    gradient: "from-emerald-500 to-teal-500",
    features: ["Keyword Research", "Content Strategy", "Technical SEO", "Blog Writing"],
    serviceName: "seo-content-marketing"
  },
  {
    id: 3,
    title: "E-commerce Growth",
    desc: "Scale your sales on Amazon, Flipkart & other marketplaces with optimized listings and conversion-focused strategies.",
    icon: FiShoppingBag,
    color: "rgba(245, 158, 11, 0.4)", // Orange
    gradient: "from-orange-500 to-red-500",
    platforms: ["Amazon", "Flipkart", "Other Marketplaces"],
    serviceName: "ecommerce-growth"
  },
  {
    id: 4,
    title: "AI-Powered Marketing",
    desc: "Data-driven marketing decisions using artificial intelligence for audience analysis and campaign optimization.",
    icon: FiCpu,
    color: "rgba(6, 182, 212, 0.4)", // Cyan
    gradient: "from-cyan-500 to-blue-500",
    benefits: ["Predictive Analytics", "Automated Insights", "Improved ROI"],
    serviceName: "ai-powered-marketing"
  },
  {
    id: 5,
    title: "Web & Tech Support",
    desc: "Technical foundation for marketing success with website optimization, development, and integration support.",
    icon: FiCode,
    color: "rgba(99, 102, 241, 0.4)", // Indigo
    gradient: "from-indigo-500 to-violet-500",
    services: ["Web Development", "App Support", "Analytics Integration"],
    serviceName: "web-tech-support"
  },
];

const SpotlightCard = ({ service }) => {
  const navigate = useNavigate();
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

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

  const handleGetService = (e) => {
    e.stopPropagation();
    e.preventDefault();
    // Navigate to contact page with service as query parameter
    navigate(`/contact?service=${service.serviceName}`);
  };

  const handleQuickInquiry = (e) => {
    e.stopPropagation();
    e.preventDefault();
    // Navigate to contact page
    navigate('/contact');
  };

  const getPlatformIcon = (platform) => {
    switch (platform) {
      case "Instagram": return <FiInstagram className="text-pink-500" />;
      case "Facebook": return <FiFacebook className="text-blue-500" />;
      case "LinkedIn": return <FiLinkedin className="text-blue-400" />;
      case "Twitter": return <FiTwitter className="text-blue-300" />;
      case "Reddit": return <FiMessageSquare className="text-orange-500" />;
      case "Pinterest": return <FiPenTool className="text-red-500" />;
      case "WhatsApp Business": return <FiSmartphone className="text-green-500" />;
      case "Amazon": return <FiPackage className="text-yellow-500" />;
      case "Flipkart": return <FiShoppingBag className="text-blue-400" />;
      default: return <FiGlobe className="text-gray-400" />;
    }
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleFocus}
      onMouseLeave={() => {
        setOpacity(0);
        setIsExpanded(false);
      }}
      className="group relative flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] px-4 sm:px-6 py-6 sm:py-8 shadow-2xl transition-all duration-300 hover:border-white/20 cursor-pointer"
    >
      {/* Spotlight Gradient */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${service.color}, transparent 40%)`,
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

      {/* CTA Button */}
      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 translate-x-4 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 z-20">
        <button
          onClick={handleGetService}
          className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs sm:text-sm font-bold hover:shadow-lg hover:shadow-cyan-500/30 transition-all whitespace-nowrap"
        >
          Get Service
          <FiArrowUpRight className="text-xs sm:text-sm" />
        </button>
      </div>

      <div className="relative z-10 flex flex-col h-full">
        {/* Icon with Gradient */}
        <div className={`mb-4 sm:mb-6 inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-gradient-to-br ${service.gradient} p-[2px] shadow-lg transition-transform duration-500 group-hover:scale-110`}>
          <div className="w-full h-full rounded-[10px] bg-[#0a0a0a] flex items-center justify-center">
            <service.icon className="text-lg sm:text-xl text-white" />
          </div>
        </div>

        <div className="mt-auto">
          <h3 className="mb-2 text-lg sm:text-xl font-bold text-white tracking-wide group-hover:text-cyan-50 transition-colors">
            {service.title}
          </h3>

          <div className="relative">
            <p className={`text-xs sm:text-sm leading-relaxed text-gray-400 transition-all duration-300 group-hover:text-gray-300 ${isExpanded ? "" : "line-clamp-2"}`}>
              {service.desc}
            </p>

            {/* Expand/Collapse Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(!isExpanded);
              }}
              className="mt-2 text-xs font-bold uppercase tracking-wider text-cyan-400 hover:text-cyan-300 focus:outline-none transition-colors"
            >
              {isExpanded ? "Show Less" : "Learn More"}
            </button>
          </div>

          {/* Expanded Content */}
          <motion.div
            initial={false}
            animate={{
              height: isExpanded ? 'auto' : 0,
              opacity: isExpanded ? 1 : 0
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden mt-4"
          >
            {service.platforms && (
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-white mb-2 flex items-center gap-2">
                  <FiGlobe className="text-cyan-400 text-xs sm:text-sm" />
                  Platforms We Manage
                </h4>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {service.platforms.slice(0, 3).map((platform, idx) => (
                    <div key={idx} className="flex items-center gap-1 px-2 py-1 rounded-full bg-white/5 border border-white/10">
                      {getPlatformIcon(platform)}
                      <span className="text-gray-300 text-xs">{platform}</span>
                    </div>
                  ))}
                  {service.platforms.length > 3 && (
                    <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-white/5 border border-white/10">
                      <span className="text-gray-300 text-xs">+{service.platforms.length - 3} more</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {service.features && (
              <div className="mt-3 sm:mt-4">
                <h4 className="text-xs sm:text-sm font-bold text-white mb-2 flex items-center gap-2">
                  <FiTarget className="text-emerald-400 text-xs sm:text-sm" />
                  Key Features
                </h4>
                <ul className="space-y-1.5">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-300 text-xs sm:text-sm">
                      <FiCheck className="text-emerald-400 text-xs" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {service.benefits && (
              <div className="mt-3 sm:mt-4">
                <h4 className="text-xs sm:text-sm font-bold text-white mb-2 flex items-center gap-2">
                  <FiAward className="text-cyan-400 text-xs sm:text-sm" />
                  Benefits
                </h4>
                <ul className="space-y-1.5">
                  {service.benefits.slice(0, 3).map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-300 text-xs sm:text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {service.services && (
              <div className="mt-3 sm:mt-4">
                <h4 className="text-xs sm:text-sm font-bold text-white mb-2 flex items-center gap-2">
                  <FiCode className="text-indigo-400 text-xs sm:text-sm" />
                  Services Include
                </h4>
                <ul className="space-y-1.5">
                  {service.services.slice(0, 3).map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-300 text-xs sm:text-sm">
                      <FiArrowRight className="text-indigo-400 text-xs" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Quick Inquiry Button */}
            <button
              onClick={handleQuickInquiry}
              className="mt-4 sm:mt-6 w-full py-2 px-3 sm:py-2.5 sm:px-4 rounded-xl bg-white/5 border border-white/10 text-white text-xs sm:text-sm font-bold hover:bg-white/10 hover:border-cyan-500/30 transition-all"
            >
              Quick Inquiry
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const navigate = useNavigate();

  const handleStartJourney = () => {
    navigate('/contact');
  };

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#05070d] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full sm:w-[600px] md:w-[800px] h-[400px] sm:h-[600px] md:h-[800px] bg-gradient-to-r from-cyan-900/10 via-purple-900/10 to-pink-900/10 blur-[60px] sm:blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-8 sm:mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4"
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">AI-Powered</span> Services
          </motion.h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 mb-4 sm:mb-6 md:mb-8 max-w-3xl">
            Result-oriented digital marketing services backed by AI, data analytics, and proven strategies to increase visibility and drive growth.
          </p>
          <div className="h-1 w-16 sm:w-20 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full" />
        </div>

        {/* FIX: Added 'items-start' to prevent parallel cards from stretching */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 items-start">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <SpotlightCard service={service} />
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-12 sm:mt-16 md:mt-20 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 px-4 sm:px-6 md:px-8 py-5 sm:py-6 rounded-xl sm:rounded-2xl bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20 border border-white/10 backdrop-blur-sm w-full max-w-6xl">
            <div className="text-left w-full sm:w-auto">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 sm:mb-2">
                Ready to Transform Your Digital Presence?
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-400">
                Let's discuss how our AI-powered services can drive real growth.
              </p>
            </div>
            <button
              onClick={handleStartJourney}
              className="group px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 text-white text-sm sm:text-base font-bold shadow-xl hover:shadow-cyan-500/30 hover:scale-105 transition-all whitespace-nowrap w-full sm:w-auto"
            >
              Start Your Journey
              <FiArrowRight className="inline-block ml-2 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;