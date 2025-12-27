import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FiUsers, 
  FiSearch, 
  FiShoppingBag, 
  FiCpu, 
  FiCode,
  FiInstagram, 
  FiFacebook, 
  FiLinkedin, 
  FiTwitter, 
  FiMessageSquare,
  FiPenTool, 
  FiSmartphone, 
  FiMail,
  FiPackage,
  FiGlobe,
  FiCheck,
  FiTarget,
  FiBarChart2,
  FiAward,
  FiArrowRight,
  FiArrowUpRight,
  FiChevronDown,
  FiTrendingUp,
  FiMonitor,
  FiChevronRight as FiArrowRightSmall
} from "react-icons/fi";
import { Link } from "react-router-dom";

// Services Data
const servicesData = {
  hero: {
    title: "AI-Powered Digital Marketing Services That Drive Real Business Growth",
    description: "At IntefAI, we deliver result-oriented digital marketing services backed by AI, data analytics, and proven strategies. Our services are designed to help brands increase visibility, engage the right audience, and scale revenue across digital platforms."
  },
  
  mainServices: [
    {
      id: 1,
      title: "Social Media Management Services",
      subtitle: "Strategic Social Media Growth for Modern Brands",
      description: "We manage and grow your brand's presence across all major social media platforms using data-driven strategies, creative content, and performance tracking.",
      icon: FiUsers,
      color: "from-purple-500 to-pink-500",
      gradient: "bg-gradient-to-br from-purple-900/20 to-pink-900/10",
      
      platforms: [
        { name: "Instagram", icon: FiInstagram, color: "text-pink-500" },
        { name: "Facebook", icon: FiFacebook, color: "text-blue-500" },
        { name: "LinkedIn", icon: FiLinkedin, color: "text-blue-400" },
        { name: "X (Twitter)", icon: FiTwitter, color: "text-black" },
        { name: "Reddit", icon: FiMessageSquare, color: "text-orange-500" },
        { name: "Pinterest", icon: FiPenTool, color: "text-red-500" },
        { name: "WhatsApp Business", icon: FiSmartphone, color: "text-green-500" },
        { name: "Email Marketing Campaigns", icon: FiMail, color: "text-cyan-500" }
      ],
      
      howWeWork: [
        "Brand-specific content strategy",
        "Content creation and scheduling",
        "Audience engagement and community management",
        "Performance analysis and optimization",
        "Monthly reports with insights and improvements"
      ],
      
      seoKeywords: [
        "Social media management services",
        "Instagram marketing",
        "LinkedIn marketing", 
        "brand growth on social media"
      ]
    },
    
    {
      id: 2,
      title: "SEO & Content Marketing",
      subtitle: "Increase Organic Traffic, Rankings, and Authority",
      description: "Our SEO and content marketing services are focused on long-term growth. We help businesses rank higher on search engines and convert visitors into customers.",
      icon: FiSearch,
      color: "from-emerald-500 to-teal-500",
      gradient: "bg-gradient-to-br from-emerald-900/20 to-teal-900/10",
      
      approach: [
        "Keyword research and competitor analysis",
        "On-page and technical SEO optimization",
        "AI-assisted content strategy",
        "Blog writing and content optimization",
        "Local and international SEO"
      ],
      
      contentTypes: [
        "SEO blogs",
        "Website content",
        "Service pages",
        "Marketing copy"
      ],
      
      seoKeywords: [
        "SEO services",
        "content marketing agency",
        "organic growth",
        "search engine optimization company"
      ]
    },
    
    {
      id: 3,
      title: "E-commerce Growth Services",
      subtitle: "Scale Your Sales on Amazon, Flipkart & More",
      description: "We specialize in e-commerce account management and growth strategies for brands selling online.",
      icon: FiShoppingBag,
      color: "from-orange-500 to-red-500",
      gradient: "bg-gradient-to-br from-orange-900/20 to-red-900/10",
      
      platforms: [
        { name: "Amazon", icon: FiPackage, color: "text-yellow-500" },
        { name: "Flipkart", icon: FiShoppingBag, color: "text-blue-400" },
        { name: "Other online marketplaces", icon: FiGlobe, color: "text-green-500" }
      ],
      
      whatWeDo: [
        "Product listing optimization",
        "Keyword-rich product descriptions",
        "Account performance monitoring",
        "Sales growth strategies",
        "Brand visibility improvement"
      ],
      
      aiBenefits: "Our AI-backed analysis helps identify trends, improve conversion rates, and increase revenue.",
      
      seoKeywords: [
        "Amazon account management",
        "Flipkart marketing services",
        "e-commerce growth solutions"
      ]
    },
    
    {
      id: 4,
      title: "AI-Driven Digital Marketing Strategy",
      subtitle: "Smarter Decisions Through Data & Automation",
      description: "We use artificial intelligence and data analytics to optimize marketing campaigns and reduce guesswork.",
      icon: FiCpu,
      color: "from-cyan-500 to-blue-500",
      gradient: "bg-gradient-to-br from-cyan-900/20 to-blue-900/10",
      
      keyBenefits: [
        "Data-backed campaign decisions",
        "Audience behavior analysis",
        "Automated reporting and insights",
        "Improved ROI and performance"
      ],
      
      outcome: "This approach allows us to deliver predictable and scalable marketing results."
    },
    
    {
      id: 5,
      title: "Web & Technology Support",
      subtitle: "Strong Technical Foundation for Marketing Success",
      description: "With our background in software development, web development, and AI solutions, we ensure your digital marketing efforts are supported by high-performing technology.",
      icon: FiCode,
      color: "from-indigo-500 to-violet-500",
      gradient: "bg-gradient-to-br from-indigo-900/20 to-violet-900/10",
      
      technicalServices: [
        "Website optimization for SEO and speed",
        "Marketing-focused web development",
        "App and software support",
        "Integration with analytics and automation tools"
      ]
    }
  ],
  
  whyStandOut: {
    title: "Why Our Services Stand Out",
    points: [
      "AI-powered marketing strategies",
      "Platform-specific expertise",
      "Scalable solutions for startups to enterprises",
      "Transparent reporting and performance tracking",
      "Dedicated support team"
    ]
  },
  
  industries: {
    title: "Industries We Serve",
    list: [
      "Startups",
      "Small & Medium Businesses",
      "Enterprises",
      "E-commerce Brands",
      "International & India-based Companies"
    ]
  }
};

// Service Card Component
const ServiceCard = ({ service, isExpanded, onToggle }) => {
  return (
    <div className={`rounded-2xl overflow-hidden border transition-all duration-500 ${
      isExpanded 
        ? 'border-cyan-500/30 bg-gradient-to-br from-gray-900/50 to-gray-900/30' 
        : 'border-white/10 bg-gray-900/20 hover:border-cyan-500/20'
    }`}>
      {/* Service Header */}
      <button
        onClick={() => onToggle(service.id)}
        className="w-full p-8 text-left flex flex-col md:flex-row items-start md:items-center gap-6"
      >
        <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} p-[2px] flex-shrink-0`}>
          <div className="w-full h-full rounded-[10px] bg-gray-900 flex items-center justify-center">
            <service.icon className="text-2xl text-white" />
          </div>
        </div>
        
        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-lg text-cyan-300">{service.subtitle}</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden md:block">
                <span className="px-4 py-1.5 rounded-full bg-white/5 text-gray-300 text-sm">
                  {isExpanded ? "Collapse" : "Expand Details"}
                </span>
              </div>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${
                isExpanded ? 'rotate-180 bg-cyan-500/20' : 'bg-white/5'
              }`}>
                <FiChevronDown className={`text-white ${isExpanded ? 'text-cyan-400' : ''}`} />
              </div>
            </div>
          </div>
          <p className="text-gray-400 mt-4 max-w-3xl">{service.description}</p>
        </div>
      </button>

      {/* Expanded Content */}
      <motion.div
        initial={false}
        animate={{ 
          height: isExpanded ? 'auto' : 0,
          opacity: isExpanded ? 1 : 0 
        }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden"
      >
        <div className="px-8 pb-8 pt-0 border-t border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Platforms & Lists */}
            <div className="space-y-8">
              {/* Platforms Section */}
              {service.platforms && (
                <div>
                  <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <FiGlobe className="text-cyan-400" />
                    Platforms We Manage
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {service.platforms.map((platform, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                        <platform.icon className={`text-lg ${platform.color}`} />
                        <span className="text-gray-300 text-sm">{platform.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* How We Work Section */}
              {service.howWeWork && (
                <div>
                  <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <FiCheck className="text-green-400" />
                    How We Work
                  </h4>
                  <ul className="space-y-3">
                    {service.howWeWork.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <FiCheck className="text-green-400 text-xs" />
                        </div>
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Approach Section */}
              {service.approach && (
                <div>
                  <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <FiTarget className="text-purple-400" />
                    Our SEO Approach
                  </h4>
                  <ul className="space-y-3">
                    {service.approach.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <FiCheck className="text-purple-400 text-xs" />
                        </div>
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* What We Do Section */}
              {service.whatWeDo && (
                <div>
                  <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <FiBarChart2 className="text-orange-400" />
                    What We Do
                  </h4>
                  <ul className="space-y-3">
                    {service.whatWeDo.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <FiCheck className="text-orange-400 text-xs" />
                        </div>
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Key Benefits Section */}
              {service.keyBenefits && (
                <div>
                  <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <FiAward className="text-cyan-400" />
                    Key Benefits
                  </h4>
                  <ul className="space-y-3">
                    {service.keyBenefits.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <FiCheck className="text-cyan-400 text-xs" />
                        </div>
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Right Column - SEO Keywords & Additional Info */}
            <div className="space-y-8">
              {/* SEO Keywords */}
              {(service.seoKeywords || service.contentTypes) && (
                <div className={`p-6 rounded-2xl ${service.gradient} border border-white/10`}>
                  <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <FiSearch className="text-cyan-400" />
                    {service.contentTypes ? "Content We Create" : "SEO Keywords Used"}
                  </h4>
                  
                  {service.seoKeywords && (
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {service.seoKeywords.map((keyword, idx) => (
                          <span key={idx} className="px-3 py-1.5 rounded-full bg-white/10 text-gray-300 text-sm border border-white/10">
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {service.contentTypes && (
                    <div>
                      <ul className="space-y-3">
                        {service.contentTypes.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-3 text-gray-300">
                            <FiArrowRightSmall className="text-cyan-400" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {service.aiBenefits && (
                    <div className="mt-6 p-4 rounded-xl bg-black/30 border border-cyan-500/20">
                      <p className="text-cyan-300 text-sm italic">{service.aiBenefits}</p>
                    </div>
                  )}

                  {service.outcome && (
                    <div className="mt-6">
                      <p className="text-gray-300">{service.outcome}</p>
                    </div>
                  )}
                </div>
              )}

              {/* Technical Services */}
              {service.technicalServices && (
                <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-900/20 to-violet-900/10 border border-white/10">
                  <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <FiCode className="text-indigo-400" />
                    Technical Services Include
                  </h4>
                  <ul className="space-y-3">
                    {service.technicalServices.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <FiCheck className="text-indigo-400 text-xs" />
                        </div>
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* CTA Button */}
              <div className="text-center">
                <Link to="/contact">
                  <button className="group w-full py-3 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-cyan-500/30 transition-all">
                    Get This Service
                    <FiArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// Services Component
const Services = () => {
  const [expandedService, setExpandedService] = useState(null);

  const toggleService = (id) => {
    setExpandedService(expandedService === id ? null : id);
  };

  return (
    <div id="services" className="min-h-screen bg-[#05070d] text-white overflow-x-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-64 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-md text-cyan-400 text-sm font-bold tracking-widest uppercase mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                Our Services
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              >
                AI-Powered Digital Marketing <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
                  That Drives Real Growth
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
              >
                {servicesData.hero.description}
              </motion.p>
            </div>

            {/* Main Services */}
            <div className="space-y-6 mb-20">
              {servicesData.mainServices.map((service) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <ServiceCard 
                    service={service} 
                    isExpanded={expandedService === service.id}
                    onToggle={toggleService}
                  />
                </motion.div>
              ))}
            </div>

            {/* Why We Stand Out & Industries Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
              {/* Why We Stand Out */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl"></div>
                <div className="relative p-8 rounded-2xl bg-gradient-to-br from-cyan-900/20 to-blue-900/10 border border-cyan-500/20 backdrop-blur-sm">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <FiAward className="text-cyan-400 text-2xl" />
                    {servicesData.whyStandOut.title}
                  </h3>
                  <ul className="space-y-4">
                    {servicesData.whyStandOut.points.map((point, idx) => (
                      <motion.li 
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                      >
                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                          <FiCheck className="text-white text-xs" />
                        </div>
                        <span className="text-gray-300">{point}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Industries We Serve */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl"></div>
                <div className="relative p-8 rounded-2xl bg-gradient-to-br from-purple-900/20 to-pink-900/10 border border-purple-500/20 backdrop-blur-sm">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <FiGlobe className="text-purple-400 text-2xl" />
                    {servicesData.industries.title}
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {servicesData.industries.list.map((industry, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <FiTrendingUp className="text-purple-400" />
                          </div>
                          <span className="text-gray-300 font-medium">{industry}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Final CTA */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="relative p-12 rounded-3xl overflow-hidden bg-gradient-to-r from-cyan-900/30 via-purple-900/30 to-pink-900/30 border border-white/10">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
                <div className="relative z-10">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Ready to Transform Your Digital Presence?
                  </h3>
                  <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                    Let's discuss how our AI-powered services can drive real growth for your business.
                  </p>
                  <Link to="/contact">
                    <button className="group px-10 py-4 rounded-full bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 text-white font-bold text-lg shadow-xl hover:shadow-cyan-500/30 hover:scale-105 transition-all">
                      Start Your Journey
                      <FiArrowRight className="inline-block ml-2 group-hover:translate-x-2 transition-transform" />
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Additional Information Section */}
        <section className="py-20 bg-gradient-to-b from-[#05070d] to-[#0a0f1c]">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            >
              {/* Service Benefits */}
              <div className="p-8 rounded-2xl bg-gradient-to-br from-cyan-900/20 to-blue-900/10 border border-cyan-500/20">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 p-[2px] mb-6">
                  <div className="w-full h-full rounded-[10px] bg-gray-900 flex items-center justify-center">
                    <FiMonitor className="text-2xl text-white" />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-white mb-4">Comprehensive Analytics</h4>
                <p className="text-gray-400">
                  Get detailed insights and performance metrics to track your growth and ROI.
                </p>
              </div>

              {/* Custom Strategies */}
              <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-900/20 to-pink-900/10 border border-purple-500/20">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 p-[2px] mb-6">
                  <div className="w-full h-full rounded-[10px] bg-gray-900 flex items-center justify-center">
                    <FiTarget className="text-2xl text-white" />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-white mb-4">Customized Strategies</h4>
                <p className="text-gray-400">
                  Tailored solutions designed specifically for your business goals and target audience.
                </p>
              </div>

              {/* Ongoing Support */}
              <div className="p-8 rounded-2xl bg-gradient-to-br from-emerald-900/20 to-teal-900/10 border border-emerald-500/20">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 p-[2px] mb-6">
                  <div className="w-full h-full rounded-[10px] bg-gray-900 flex items-center justify-center">
                    <FiUsers className="text-2xl text-white" />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-white mb-4">Dedicated Support</h4>
                <p className="text-gray-400">
                  Your dedicated account manager ensures consistent communication and support.
                </p>
              </div>
            </motion.div>

            {/* SEO Keywords Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-20 text-center"
            >
              <h4 className="text-2xl font-bold text-white mb-8">Optimized for Search Engines</h4>
              <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                {[
                  "Digital marketing agency",
                  "Social media management",
                  "SEO services",
                  "Content marketing",
                  "E-commerce marketing",
                  "AI marketing solutions",
                  "Brand growth strategies",
                  "Online presence optimization",
                  "Marketing automation",
                  "Data-driven marketing"
                ].map((keyword, idx) => (
                  <span 
                    key={idx}
                    className="px-4 py-2 rounded-full bg-white/5 text-gray-300 text-sm border border-white/10 hover:bg-cyan-500/10 hover:border-cyan-500/30 hover:text-cyan-300 transition-all"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;