import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

// --- IMAGE IMPORTS ---
const defaultAvatar = "https://cdn-icons-png.flaticon.com/512/149/149071.png";

// --- 3D CARD COMPONENT ---
const TeamCard = ({ name, role, image, linkedin, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 400, damping: 40 });
  const mouseY = useSpring(y, { stiffness: 400, damping: 40 });

  function onMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const xPct = (clientX - left) / width - 0.5;
    const yPct = (clientY - top) / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [7, -7]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-7, 7]);

  return (
    <motion.div
      // flex-shrink-0 is CRITICAL for horizontal scrolling to prevent squishing
      className="relative flex-shrink-0 w-[300px] md:w-[340px] h-[450px] md:h-[480px] rounded-[24px] bg-slate-900/40 backdrop-blur-xl border border-white/10 group perspective-1000 cursor-grab active:cursor-grabbing"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      whileTap={{ scale: 0.98 }} // Subtle press effect when dragging starts
    >
      {/* Dynamic Gradient Border */}
      <div className="absolute -inset-[1px] rounded-[24px] bg-gradient-to-br from-cyan-500/20 via-blue-500/0 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

      {/* Card Body */}
      <div className="absolute inset-0 rounded-[24px] overflow-hidden bg-gradient-to-b from-white/[0.08] to-transparent p-6 flex flex-col items-center select-none">
        
        {/* Shine highlight */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

        {/* 3D Content Container */}
        <div 
          style={{ transform: "translateZ(30px)" }}
          className="relative z-10 flex flex-col items-center w-full h-full"
        >
            {/* Image Section */}
            <div className="relative mt-4 mb-6 group-hover:-translate-y-2 transition-transform duration-500 ease-out pointer-events-none">
                <div className="absolute inset-0 rounded-full bg-cyan-500 blur-[20px] opacity-20 group-hover:opacity-60 transition-opacity duration-500" />
                <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full p-[3px] bg-gradient-to-b from-cyan-300 via-blue-500 to-transparent">
                    <div className="w-full h-full rounded-full overflow-hidden bg-slate-950">
                        <img 
                            src={image} 
                            alt={name} 
                            className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                            draggable="false" // Prevent browser image drag
                        />
                    </div>
                </div>
            </div>

            {/* Typography */}
            <div className="text-center space-y-2 mt-2 pointer-events-none">
                <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-cyan-50 transition-colors">
                    {name}
                </h3>
                <div className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                    <p className="text-xs font-semibold text-cyan-400 tracking-wider uppercase">
                        {role}
                    </p>
                </div>
            </div>

            {/* Interaction Area */}
            <div className="mt-auto w-full flex flex-col items-center pb-4">
                <div className="w-8 h-[2px] bg-white/20 rounded-full mb-6 group-hover:w-24 group-hover:bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-500" />
                
                {/* LinkedIn Button */}
                <a 
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-2 rounded-full bg-blue-600/90 hover:bg-blue-500 text-white text-sm font-medium opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg shadow-blue-900/50"
                    // Prevent drag click propagation
                    onPointerDown={(e) => e.stopPropagation()}
                >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    <span>Connect</span>
                </a>
            </div>
        </div>
      </div>
    </motion.div>
  );
};

// --- MAIN SECTION ---
const TeamSection = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    // Calculate the scrollable width: Total content width - Visible window width
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  const team = [
    { name: "Lakhan Jadam", role: "Co-Founder & CEO", image: defaultAvatar, linkedin: "https://www.linkedin.com/in/lakhan-jadam-91a775131/" },
    { name: "Dharmesh Thakur", role: "Co-Founder & CEO", image: defaultAvatar, linkedin: "https://www.linkedin.com/feed/" },
    { name: "Sachin Gupta", role: "Co-Founder & CEO", image: defaultAvatar, linkedin: "https://www.linkedin.com/feed/" },
    { name: "Mr Sanjay Dhakad", role: "Full Stack Developer", image: defaultAvatar, linkedin: "https://www.linkedin.com/in/mr-sanjay-dhakad-3a736b320/" },
    { name: "Akhil Deshmukh", role: "MERN Stack Developer", image: defaultAvatar, linkedin: "https://www.linkedin.com/in/akhil-deshmukh11/" },
    { name: "Sandeep Rajput", role: "MERN Stack Developer", image: defaultAvatar, linkedin: "https://www.linkedin.com/company/intefai-it-solutions/" },
    { name: "Anurag Yadav", role: "Full Stack Intern", image: defaultAvatar, linkedin: "https://www.linkedin.com/in/anurag-yadav7489/" }
  ];

  return (
    <section className="relative py-24 overflow-hidden">
        
      {/* Background Atmosphere */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />

      <div className="relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Masterminds</span>
          </motion.h2>
          <p className="text-cyan-200/60 text-sm tracking-widest uppercase">
            &larr; Drag to Explore &rarr;
          </p>
        </div>

        {/* CAROUSEL CONTAINER
            overflow-hidden ensures cards don't spill out of the section
        */}
        <div className="w-full overflow-hidden">
            <motion.div 
                ref={carousel} 
                className="cursor-grab overflow-hidden active:cursor-grabbing px-4 md:px-20 py-10"
                whileTap={{ cursor: "grabbing" }}
            >
                {/* DRAGGABLE TRACK 
                   drag="x" enables horizontal dragging
                   dragConstraints ensures you can't drag past the first or last item
                */}
                <motion.div 
                    drag="x" 
                    dragConstraints={{ right: 0, left: -width }}
                    className="flex gap-8 md:gap-12 w-max"
                >
                    {team.map((member, index) => (
                        <TeamCard key={index} index={index} {...member} />
                    ))}
                </motion.div>
            </motion.div>
        </div>

      </div>
    </section>
  );
};

export default TeamSection;