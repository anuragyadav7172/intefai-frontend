import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaXmark } from "react-icons/fa6"; 
import logo from "@/assets/images/logo.png";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  // CHANGED: id changed from 'contact' to 'inquiry' to match your new section
  { label: "Contact", id: "inquiry" }, 
];

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false); 
    const el = document.getElementById(id);
    if (!el) return;

    const yOffset = -80; 
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (!section) return;
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActive(item.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b
        ${
          isScrolled
            ? "bg-[#05070d]/80 backdrop-blur-md border-white/10 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
            : "bg-transparent border-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          <button
            onClick={() => scrollToSection("home")}
            className="relative group z-50"
          >
            <div className="absolute -inset-2 bg-cyan-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />
            <img
              src={logo}
              alt="IntefAI Logo"
              className="relative h-10 md:h-12 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </button>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300
                  ${active === item.id ? "text-white" : "text-gray-400 hover:text-white"}
                `}
              >
                {active === item.id && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 shadow-[0_0_10px_rgba(6,182,212,0.2)]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            ))}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              // ADDED: onClick to scroll to social section
              onClick={() => scrollToSection("social")}
              className="ml-6 px-5 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-bold uppercase tracking-wider shadow-lg hover:shadow-cyan-500/25 transition-all"
            >
              Get Started
            </motion.button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden relative z-50 p-2 text-white/80 hover:text-cyan-400 transition-colors"
          >
            {mobileMenuOpen ? <FaXmark size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-[#05070d]/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center space-y-8"
          >
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.1 }}
                onClick={() => scrollToSection(item.id)}
                className={`text-2xl font-bold tracking-wide
                  ${active === item.id 
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500" 
                    : "text-white/60"
                  }`}
              >
                {item.label}
              </motion.button>
            ))}
            
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              // ADDED: onClick to scroll to social section
              onClick={() => scrollToSection("social")}
              className="mt-8 px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold shadow-lg"
            >
              Get Started
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;