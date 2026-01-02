import React, { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

// --- IMPORT LOCAL IMAGES ---
// Note: Ensure these file names match exactly what is in your folder (case-sensitive)
import lakhanImg from "../../../assets/images/Team/Lakhan Jadam.png";
import dharmeshImg from "../../../assets/images/Team/Dharmesh Thakur.png";
import sachinImg from "../../../assets/images/Team/Sachin Gupta.png";
import sanjayImg from "../../../assets/images/Team/Sanjay Dhakad.png";
import akhilImg from "../../../assets/images/Team/Akhil Deshmukh.jpeg";
import sandeepImg from "../../../assets/images/Team/Sandeep Rajput.jpeg";
import anuragImg from "../../../assets/images/Team/Anurag Yadav.jpg";

// Fallback image (in case a local image is missing, you can use this)
const defaultAvatar = "https://cdn-icons-png.flaticon.com/512/149/149071.png";

// --- TEAM DATA ---
const team = [
  { 
    name: "Lakhan Jadam", 
    role: "Co-Founder & CEO", 
    image: lakhanImg, // Using the imported variable
    linkedin: "#" 
  },
  { 
    name: "Dharmesh Thakur", 
    role: "Co-Founder & CEO", 
    image: dharmeshImg, 
    linkedin: "#" 
  },
  { 
    name: "Sachin Gupta", 
    role: "Co-Founder & CEO", 
    image: sachinImg, 
    linkedin: "#" 
  },
  { 
    name: "Mr Sanjay Dhakad", 
    role: "Full Stack Developer", 
    image: sanjayImg, 
    linkedin: "#" 
  },
  { 
    name: "Akhil Deshmukh", 
    role: "MERN Stack Developer", 
    image: akhilImg, 
    linkedin: "#" 
  },
  { 
    name: "Sandeep Rajput", 
    role: "MERN Stack Developer", 
    image: sandeepImg, 
    linkedin: "#" 
  },
  { 
    name: "Anurag Yadav", 
    role: "Full Stack Intern", 
    image: anuragImg, 
    linkedin: "#" 
  }
];

// --- CARD COMPONENT ---
const TeamCard = ({ name, role, image, linkedin }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      className="group relative flex-shrink-0 w-[85vw] sm:w-[300px] md:w-[280px] lg:w-[300px] h-[400px] rounded-3xl bg-slate-900 border border-white/10 overflow-hidden snap-center"
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      {/* 1. HOVER SPOTLIGHT EFFECT */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(6, 182, 212, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      
      {/* 2. CARD CONTENT */}
      <div className="absolute inset-[1px] rounded-3xl bg-slate-950/90 backdrop-blur-sm flex flex-col items-center p-6 transition-colors duration-500">
        
        {/* Glow behind image */}
        <div className="absolute top-10 w-32 h-32 bg-cyan-500/30 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        {/* Image Container */}
        <div className="relative z-10 mt-4 mb-6">
            <div className="w-28 h-28 md:w-32 md:h-32 rounded-full p-1 bg-gradient-to-br from-white/10 to-white/5 group-hover:from-cyan-400 group-hover:to-blue-600 transition-colors duration-500">
                <img 
                    src={image} 
                    alt={name} 
                    className="w-full h-full rounded-full object-cover grayscale group-hover:grayscale-0 transform group-hover:scale-105 transition-all duration-500 ease-out"
                />
            </div>
        </div>

        {/* Text Details */}
        <div className="text-center z-10 relative">
          <h3 className="text-xl font-bold text-white group-hover:text-cyan-50 transition-colors duration-300">
            {name}
          </h3>
          <p className="text-sm font-medium text-cyan-500/70 mt-1 uppercase tracking-wider">
            {role}
          </p>
        </div>

        {/* Decorative Divider */}
        <div className="w-12 h-[1px] bg-white/10 my-6 group-hover:w-full group-hover:bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent transition-all duration-500" />

        {/* LinkedIn Button (Slides up on Hover) */}
        <div className="mt-auto overflow-hidden">
            <a 
                href={linkedin}
                className="flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-500/50 text-white text-sm transition-all duration-300 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
            >
                <span className="font-semibold">Connect</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
        </div>
      </div>
    </motion.div>
  );
};

// --- MAIN SECTION ---
const TeamSection = () => {
  const scrollContainerRef = useRef(null);

  // Scroll Handler for Buttons
  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320; // Approx card width + gap
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="relative py-20 bg-slate-950 overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-3xl md:text-5xl font-bold text-white mb-4"
            >
              Meet the <span className="text-cyan-400">Masterminds</span>
            </motion.h2>
            <p className="text-slate-400 text-sm md:text-base">
                The passionate team of developers and innovators driving our success.
            </p>
          </div>

          {/* Navigation Buttons (Visible on Desktop) */}
          <div className="hidden md:flex gap-4">
            <button 
                onClick={() => scroll("left")}
                className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-cyan-500 hover:border-cyan-500 text-white transition-all active:scale-95"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button 
                onClick={() => scroll("right")}
                className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-cyan-500 hover:border-cyan-500 text-white transition-all active:scale-95"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>

        {/* SCROLL CONTAINER 
            snap-x: Enables snapping
            overflow-x-auto: Enables native scrolling
            scrollbar-hide: Optional (you can add utility to hide scrollbar)
        */}
        <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 px-4 md:px-0 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} // Hide scrollbar for Firefox/IE
        >
          {team.map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
          
          {/* Spacer to allow last card to be seen fully on mobile */}
          <div className="w-1 shrink-0" /> 
        </div>

      </div>
    </section>
  );
};

export default TeamSection;