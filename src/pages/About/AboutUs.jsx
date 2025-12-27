import React, { useState, useEffect, useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { 
  FiTarget, FiCpu, FiUsers, FiActivity, FiCheckCircle, 
  FiGlobe, FiSmartphone, FiTrendingUp, FiArrowRight,
  FiX, FiMaximize2, FiChevronLeft, FiChevronRight, FiChevronDown, FiChevronUp
} from "react-icons/fi";
import { Link } from "react-router-dom";

// ==========================================
//  1. DATA & CONSTANTS
// ==========================================
const services = [
  {
    title: "AI-Driven Marketing",
    desc: "Data-backed strategies that improve reach, engagement, and conversions using advanced analytics.",
    icon: FiCpu,
    color: "from-cyan-400 to-blue-500"
  },
  {
    title: "Social Media Growth",
    desc: "Growth on Instagram, Facebook, LinkedIn, X, and more with consistent content and optimization.",
    icon: FiUsers,
    color: "from-purple-400 to-pink-500"
  },
  {
    title: "SEO & Content",
    desc: "Search-engine-optimized content strategies that improve rankings, organic traffic, and visibility.",
    icon: FiActivity,
    color: "from-emerald-400 to-teal-500"
  },
  {
    title: "E-commerce Scale",
    desc: "Account optimization for Amazon, Flipkart, and platforms focused on sales and performance tracking.",
    icon: FiTrendingUp,
    color: "from-orange-400 to-red-500"
  },
  {
    title: "Web & App Dev",
    desc: "Robust web and mobile solutions backed by our strong technical foundation and AI integration.",
    icon: FiSmartphone,
    color: "from-blue-400 to-indigo-500"
  },
];

const whyChooseUsData = [
  "AI-Powered Approach – Smarter marketing decisions via data analytics.",
  "Industry-Focused – Tailored for startups, enterprises, and e-commerce.",
  "Experienced Team – Marketers, developers, and AI experts under one roof.",
  "Performance-Driven – Clear goals, transparent reporting, and results.",
  "End-to-End Support – From strategy to execution and scaling.",
];

const founders = [
  {
    name: "Lakhan Jadam",
    role: "CEO & Co-Founder",
    desc: "Driving force behind IntefAI's strategic vision. Expert in AI-driven solutions and scalable business systems.",
    imageColor: "from-cyan-400 to-blue-600",
    imageSrc: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" 
  },
  {
    name: "Dharmesh Thakur",
    role: "Co-Founder & CEO",
    desc: "Tech architecture and operations leader. Aligns technology with marketing outcomes for peak performance.",
    imageColor: "from-purple-400 to-pink-600",
    imageSrc: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
  },
  {
    name: "Sachin Gupta",
    role: "Co-Founder & CEO",
    desc: "Product development and automation specialist. Ensures solutions remain future-ready and results-oriented.",
    imageColor: "from-emerald-400 to-cyan-600",
    imageSrc: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
  },
];

// Gallery Images - Using Unsplash URLs
const galleryItems = [
  { 
    id: 1, 
    title: "IntefAI Headquarters", 
    category: "Our Space", 
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop", 
    size: "large" 
  },
  { 
    id: 2, 
    title: "Collaborative Zone", 
    category: "Innovation", 
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop", 
    size: "tall" 
  },
  { 
    id: 3, 
    title: "Tech Stack Visuals", 
    category: "Architecture", 
    src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop", 
    size: "normal" 
  },
  { 
    id: 4, 
    title: "Workstation Setup", 
    category: "Efficiency", 
    src: "https://images.unsplash.com/photo-1581094794321-9691cca2c5c0?q=80&w=2069&auto=format&fit=crop", 
    size: "normal" 
  },
  { 
    id: 5, 
    title: "Meeting Lounge", 
    category: "Strategy", 
    src: "https://images.unsplash.com/photo-1568992688065-536aad8a12f6?q=80&w=2069&auto=format&fit=crop", 
    size: "wide" 
  },
  { 
    id: 6, 
    title: "Data Center View", 
    category: "Infrastructure", 
    src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2074&auto=format&fit=crop", 
    size: "normal" 
  },
  { 
    id: 7, 
    title: "Creative Hub", 
    category: "Design", 
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop", 
    size: "normal" 
  },
  { 
    id: 8, 
    title: "Breakout Room", 
    category: "Culture", 
    src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop", 
    size: "normal" 
  },
  { 
    id: 9, 
    title: "Focus Pods", 
    category: "Engineering", 
    src: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop", 
    size: "normal" 
  },
  { 
    id: 10, 
    title: "Client Suite", 
    category: "Relations", 
    src: "https://images.unsplash.com/photo-1568992688065-536aad8a12f6?q=80&w=2069&auto=format&fit=crop", 
    size: "wide" 
  },
];

const galleryCategories = ["All", "Our Space", "Innovation", "Design", "Infrastructure"];

// ==========================================
//  2. UI HELPER COMPONENTS
// ==========================================

// --- 3D Tilt Card Component ---
const ThreeDCard = ({ children, className }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 30 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 30 });

  function onMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    x.set(clientX - left - width / 2);
    y.set(clientY - top - height / 2);
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const rotateX = useTransform(mouseY, [-300, 300], [8, -8]);
  const rotateY = useTransform(mouseX, [-300, 300], [-8, 8]);

  return (
    <motion.div
      className={`perspective-1000 ${className}`}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      whileHover={{ scale: 1.02 }}
    >
      <div style={{ transform: "translateZ(20px)", transformStyle: "preserve-3d" }} className="h-full">
        {children}
      </div>
    </motion.div>
  );
};

// --- Section Header Helper ---
const SectionHeader = ({ title, subtitle, align = "left" }) => (
  <div className={`mb-12 relative z-10 ${align === "center" ? "text-center" : "text-left"}`}>
    <motion.h2 
      initial={{ opacity: 0, x: align === "center" ? 0 : -20, y: align === "center" ? 20 : 0 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-bold text-white mb-4"
    >
      {title}
    </motion.h2>
    <motion.div 
      initial={{ width: 0 }}
      whileInView={{ width: 80 }}
      viewport={{ once: true }}
      className={`h-1.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full mb-6 ${align === "center" ? "mx-auto" : ""}`} 
    />
    {subtitle && <p className={`text-gray-300 max-w-2xl text-lg ${align === "center" ? "mx-auto" : ""}`}>{subtitle}</p>}
  </div>
);

// ==========================================
//  3. GALLERY SECTION COMPONENT
// ==========================================

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredItems, setFilteredItems] = useState(galleryItems);
  const INITIAL_VISIBLE_COUNT = 6;
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);

  // Filter Logic
  useEffect(() => {
    let items = galleryItems;
    if (activeCategory !== "All") {
      items = galleryItems.filter(item => item.category === activeCategory);
    }
    setFilteredItems(items);
    setVisibleCount(INITIAL_VISIBLE_COUNT);
  }, [activeCategory]);

  // Handle Show More / Show Less
  const toggleVisibility = () => {
    if (visibleCount >= filteredItems.length) {
      setVisibleCount(INITIAL_VISIBLE_COUNT);
    } else {
      setVisibleCount(filteredItems.length);
    }
  };

  // Lightbox Navigation
  const handleNext = (e) => {
    e.stopPropagation();
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedImage(filteredItems[nextIndex]);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedImage(filteredItems[prevIndex]);
  };

  // Keyboard Support
  const handleKeyDown = useCallback((e) => {
    if (!selectedImage) return;
    if (e.key === "Escape") setSelectedImage(null);
    if (e.key === "ArrowRight") handleNext(e);
    if (e.key === "ArrowLeft") handlePrev(e);
  }, [selectedImage, filteredItems]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const getGridClass = (size) => {
    if (activeCategory !== "All") return "col-span-1 row-span-1";
    switch (size) {
      case "large": return "md:col-span-2 md:row-span-2";
      case "wide": return "md:col-span-2 md:row-span-1";
      case "tall": return "md:col-span-1 md:row-span-2";
      default: return "col-span-1 row-span-1";
    }
  };

  return (
    <section id="gallery" className="py-20 md:py-32 bg-[#05070d] relative overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header & Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Visualizing <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Excellence</span>
            </motion.h2>
            <p className="text-slate-400 text-lg">
              A curated look into our workspace, culture, and the cutting-edge infrastructure that powers our AI solutions.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                  activeCategory === cat 
                    ? "bg-cyan-500/10 border-cyan-500 text-cyan-400" 
                    : "bg-white/5 border-white/10 text-slate-400 hover:border-white/30 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* BENTO GRID GALLERY */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[250px] gap-4 mb-12"
        >
          <AnimatePresence>
            {filteredItems.slice(0, visibleCount).map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedImage(item)}
                className={`group relative rounded-3xl overflow-hidden cursor-pointer bg-slate-900 border border-white/10 ${getGridClass(item.size)}`}
              >
                <img 
                  src={item.src} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-2 block">
                      {item.category}
                    </span>
                    <h3 className="text-white text-xl font-bold leading-tight">
                      {item.title}
                    </h3>
                  </div>
                  <div className="absolute top-4 right-4 p-3 rounded-full bg-white/10 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-cyan-500">
                    <FiMaximize2 size={18} />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* SHOW MORE / SHOW LESS BUTTON */}
        {filteredItems.length > INITIAL_VISIBLE_COUNT && (
          <div className="flex justify-center">
            <button
              onClick={toggleVisibility}
              className="group flex items-center gap-2 px-8 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-cyan-500/10 hover:border-cyan-500 text-white font-medium transition-all duration-300"
            >
              {visibleCount < filteredItems.length ? (
                <>
                  Show More <FiChevronDown className="group-hover:translate-y-1 transition-transform" />
                </>
              ) : (
                <>
                  Show Less <FiChevronUp className="group-hover:-translate-y-1 transition-transform" />
                </>
              )}
            </button>
          </div>
        )}

      </div>

      {/* FULL SCREEN LIGHTBOX */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 p-4 rounded-full bg-white/5 text-white hover:bg-red-500/80 transition-all z-20"
              onClick={() => setSelectedImage(null)}
            >
              <FiX size={24} />
            </button>
            <button 
              className="absolute left-4 md:left-8 p-3 rounded-full bg-white/10 text-white hover:bg-cyan-500 transition-all z-20 hidden md:block"
              onClick={handlePrev}
            >
              <FiChevronLeft size={32} />
            </button>
            <button 
              className="absolute right-4 md:right-8 p-3 rounded-full bg-white/10 text-white hover:bg-cyan-500 transition-all z-20 hidden md:block"
              onClick={handleNext}
            >
              <FiChevronRight size={32} />
            </button>

            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-cyan-900/20 border border-white/10 bg-black">
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.title} 
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold text-white mb-1">{selectedImage.title}</h3>
                <p className="text-cyan-400/80 text-sm font-medium tracking-wide uppercase">
                  {selectedImage.category}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

// ==========================================
//  4. OPTIMIZED HERO SECTION COMPONENT
// ==========================================
const OptimizedHeroSection = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-[#05070a]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-purple-600/10 blur-[150px] rounded-full mix-blend-screen animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[700px] h-[700px] bg-cyan-500/10 blur-[150px] rounded-full mix-blend-screen" />
        
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '50px 50px' }}
        />
        
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-md text-cyan-400 text-sm font-bold tracking-widest uppercase mb-8">
             <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
             About IntefAI
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight tracking-tight text-white">
            Innovating <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
              Digital Growth
            </span>
          </h1>

          <p className="text-xl text-gray-400 mb-8 leading-relaxed max-w-lg">
            IntefAI transforms businesses with data-driven strategies, 
            blending <span className="text-cyan-400 font-semibold underline underline-offset-4 decoration-cyan-400/30">AI precision</span> with creative marketing.
          </p>
        </motion.div>

        <motion.div
          style={{ perspective: 2000 }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative group cursor-pointer"
          onMouseMove={handleMouse}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            style={{ rotateX, rotateY }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="w-full aspect-[4/3] rounded-[30px] overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-[#0a0f1c] relative z-20"
          >
            <div className="absolute inset-0 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-tr from-white/5 via-transparent to-white/10" />

            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
              alt="IntefAI Team" 
              className="absolute inset-0 w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-[#05070d] via-transparent to-transparent opacity-80" />
          </motion.div>

          <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-[35px] blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
        </motion.div>

      </div>
    </section>
  );
};

// ==========================================
//  5. MAIN PAGE COMPONENT
// ==========================================
const AboutUs = () => {
  return (
    <div className="min-h-screen bg-[#05070d] text-white overflow-x-hidden selection:bg-cyan-500/30">
      
      {/* -----------------------------------------------------------
          1. HERO SECTION
      ----------------------------------------------------------- */}
      <OptimizedHeroSection />

      {/* -----------------------------------------------------------
          2. WHO WE ARE
      ----------------------------------------------------------- */}
      <section className="py-24 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative z-10 order-1 lg:order-1"
          >
            <SectionHeader title="Who We Are" />
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Headquartered in <span className="text-white font-semibold">Indore, India</span>, we define the next era of digital presence. We aren't just an agency; we are your growth partners powered by silicon and soul.
              </p>
              <p>
                Bridging the gap between software engineering and creative marketing, we deliver solutions that don't just look good—they perform.
              </p>
            </div>
            
            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 backdrop-blur-sm">
              <p className="text-cyan-200 italic font-medium">
                "We don't believe in generic marketing. Every strategy is customized based on business goals, audience behavior, and data insights."
              </p>
            </div>
          </motion.div>

          <ThreeDCard className="w-full h-full min-h-[400px] order-2 lg:order-2">
             <div className="relative w-full h-full rounded-[30px] overflow-hidden border border-white/10 shadow-2xl bg-[#0a0f1c] group">
                
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                  alt="Who We Are" 
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-end p-8">
                   <h3 className="text-2xl font-bold text-white mb-2">Global Impact</h3>
                   <p className="text-gray-300">Serving clients across India & International Markets</p>
                </div>
             </div>
          </ThreeDCard>
        </div>
      </section>

      {/* -----------------------------------------------------------
          3. OUR VISION & MISSION
      ----------------------------------------------------------- */}
      <section className="py-24 relative bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <ThreeDCard className="w-full h-full min-h-[400px] order-2 lg:order-1">
             <div className="relative w-full h-full rounded-[30px] overflow-hidden border border-white/10 shadow-2xl bg-[#0a0f1c] group">
                
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                  alt="Our Vision" 
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-end p-8">
                   <h3 className="text-2xl font-bold text-white mb-2">Future Ready</h3>
                   <p className="text-gray-300">Building scalable systems for tomorrow.</p>
                </div>
             </div>
          </ThreeDCard>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative z-10 order-1 lg:order-2"
          >
            <SectionHeader title="Our Vision & Mission" />
            
            <div className="space-y-8">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <FiTarget className="text-2xl text-purple-400" />
                  <h3 className="text-xl font-bold text-white">Our Vision</h3>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  To become a trusted global digital marketing and AI solutions partner, empowering businesses to grow faster, smarter, and more efficiently.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <FiTrendingUp className="text-2xl text-cyan-400" />
                  <h3 className="text-xl font-bold text-white">Our Commitment</h3>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  We are committed to delivering quality work, technical excellence, and transparent communication. Our solutions truly support business growth.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* -----------------------------------------------------------
          4. WHAT WE DO (Services Grid)
      ----------------------------------------------------------- */}
      <section className="py-24 px-6 relative bg-gradient-to-b from-[#05070d] to-[#0a0f1c]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="What We Do" subtitle="End-to-end digital marketing and technology services designed to scale businesses." align="center" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <ThreeDCard key={idx} className="h-full">
                <div className="relative h-full p-8 rounded-2xl bg-[#0e121f] border border-white/5 overflow-hidden group hover:border-white/20 transition-colors">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`} />
                  
                  <div className="relative z-10">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} p-[1px] mb-6 shadow-lg`}>
                       <div className="w-full h-full rounded-[10px] bg-[#0e121f] flex items-center justify-center">
                          <service.icon className="text-2xl text-white" />
                       </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
                  </div>
                </div>
              </ThreeDCard>
            ))}
          </div>
        </div>
      </section>

      {/* -----------------------------------------------------------
          5. WHY CHOOSE US
      ----------------------------------------------------------- */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <motion.div
                 initial={{ opacity: 0, x: -50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
              >
                <h3 className="text-4xl font-bold text-white mb-10">Why Choose <span className="text-cyan-400">IntefAI?</span></h3>
                <div className="space-y-6">
                  {whyChooseUsData.map((item, i) => (
                    <motion.div 
                      key={i} 
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-cyan-500/30 transition-all cursor-default"
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center shadow-lg shadow-green-500/20">
                        <FiCheckCircle className="text-white text-sm" />
                      </div>
                      <p className="text-gray-200 font-medium">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Big Visual CTA */}
              <div className="relative p-10 rounded-3xl bg-gradient-to-br from-purple-900/40 to-black border border-purple-500/20 text-center">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/30 blur-[60px] rounded-full" />
                  <h3 className="text-3xl font-bold text-white mb-4 relative z-10">Driven by Results</h3>
                  <p className="text-gray-400 mb-8 relative z-10">
                    We combine technology and creativity to build solutions that matter.
                  </p>
                  <Link to="/contact" className="relative z-10 inline-flex items-center gap-2 text-cyan-400 font-bold hover:gap-4 transition-all">
                    Start a Project <FiArrowRight />
                  </Link>
              </div>
           </div>
        </div>
      </section>

      {/* -----------------------------------------------------------
          6. GALLERY SECTION (NEWLY ADDED)
      ----------------------------------------------------------- */}
      <GallerySection />

      {/* -----------------------------------------------------------
          7. FOUNDERS
      ----------------------------------------------------------- */}
      <section className="py-24 px-6 bg-[#080c14]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="Meet The Masterminds" subtitle="The innovators driving your success." align="center" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {founders.map((founder, i) => (
              <ThreeDCard key={i}>
                <div className="h-full bg-[#0e121f] border border-white/5 rounded-3xl p-8 flex flex-col items-center text-center relative overflow-hidden group">
                   
                   <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${founder.imageColor}`} />
                   
                   <div className={`w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br ${founder.imageColor} p-[3px] shadow-2xl group-hover:scale-105 transition-transform duration-500`}>
                      <div className="w-full h-full rounded-full bg-[#0e121f] overflow-hidden">
                         <img 
                            src={founder.imageSrc} 
                            alt={founder.name} 
                            className="w-full h-full object-cover"
                         />
                      </div>
                   </div>
                   
                   <h3 className="text-2xl font-bold text-white mb-1">{founder.name}</h3>
                   <p className="text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 uppercase tracking-widest mb-4">
                     {founder.role}
                   </p>
                   <p className="text-gray-400 text-sm leading-relaxed mb-6">
                     {founder.desc}
                   </p>
                </div>
              </ThreeDCard>
            ))}
          </div>
        </div>
      </section>

      {/* -----------------------------------------------------------
          8. CALL TO ACTION (CTA)
      ----------------------------------------------------------- */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 via-[#05070d] to-purple-900/20" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Scale</span> Your Business?
          </h2>
          <Link to="/contact">
            <button className="px-10 py-4 rounded-full bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 text-white font-bold text-lg shadow-lg hover:shadow-cyan-500/50 transition-all">
              Start Your Journey
            </button>
          </Link>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;