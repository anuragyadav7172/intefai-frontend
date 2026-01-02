import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiMaximize2, FiChevronLeft, FiChevronRight, FiChevronDown, FiChevronUp } from "react-icons/fi";

// --- IMAGE IMPORTS ---
import office1 from "../../../assets/images/gallery/office-1.jpg";
import office2 from "../../../assets/images/gallery/office-2.jpg";
import office3 from "../../../assets/images/gallery/office-3.jpg";
import office4 from "../../../assets/images/gallery/office-4.jpg";
import office5 from "../../../assets/images/gallery/office-5.jpg";
import office6 from "../../../assets/images/gallery/office-6.png";
import office7 from "../../../assets/images/gallery/office-7.png";
import office8 from "../../../assets/images/gallery/office-8.png";
import office9 from "../../../assets/images/gallery/office-9.png";
import office10 from "../../../assets/images/gallery/office-11.png";

// --- DATA ---
const galleryItems = [
  { id: 1, title: "IntefAI Headquarters", category: "Our Space", src: office1, size: "large" },
  { id: 2, title: "Collaborative Zone", category: "Innovation", src: office2, size: "wide" },
  { id: 3, title: "Tech Stack Visuals", category: "Architecture", src: office3, size: "normal" },
  { id: 4, title: "Workstation Setup", category: "Efficiency", src: office4, size: "normal" },
  { id: 5, title: "Meeting Lounge", category: "Strategy", src: office5, size: "wide" },
  { id: 6, title: "Data Center View", category: "Infrastructure", src: office6, size: "normal" },
  { id: 7, title: "Creative Hub", category: "Design", src: office7, size: "normal" },
  { id: 8, title: "Breakout Room", category: "Our Space", src: office8, size: "normal" },
  { id: 9, title: "Focus Pods", category: "Our Space", src: office9, size: "normal" },
  { id: 10, title: "Client Suite", category: "Our Space", src: office10, size: "wide" },
];

const categories = ["All", "Our Space", "Innovation", "Design", "Infrastructure"];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredItems, setFilteredItems] = useState(galleryItems);
  
  // --- NEW STATE FOR SHOW MORE/LESS ---
  const INITIAL_VISIBLE_COUNT = 6;
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);

  // Filter Logic
  useEffect(() => {
    // 1. Filter the items based on category
    let items = galleryItems;
    if (activeCategory !== "All") {
      items = galleryItems.filter(item => item.category === activeCategory);
    }
    setFilteredItems(items);
    
    // 2. Reset visibility to 6 whenever category changes
    setVisibleCount(INITIAL_VISIBLE_COUNT);
  }, [activeCategory]);

  // Handle Show More / Show Less
  const toggleVisibility = () => {
    if (visibleCount >= filteredItems.length) {
      setVisibleCount(INITIAL_VISIBLE_COUNT); // Show Less
    } else {
      setVisibleCount(filteredItems.length); // Show More
    }
  };

  // Lightbox Navigation Logic
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
            {categories.map((cat) => (
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
            {/* Slicing the filteredItems based on visibleCount */}
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

        {/* --- SHOW MORE / SHOW LESS BUTTON --- */}
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

      {/* FULL SCREEN LIGHTBOX (Same as before) */}
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

export default GallerySection;