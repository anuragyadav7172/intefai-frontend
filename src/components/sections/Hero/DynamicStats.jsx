import React, { useEffect, useState, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";

const StatItem = ({ value, label, suffix = "+", delay }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);
  
  // Ref for intersection observer (start animation when visible)
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 2.5,
        ease: [0.25, 0.1, 0.25, 1], // Custom bezier for premium feel
        delay: delay, // Stagger effect
      });
      return controls.stop;
    }
  }, [count, value, isInView, delay]);

  // --- FIXED CODE SECTION START ---
  // Update text state
  useEffect(() => {
    // The syntax .onChange(callback) is deprecated.
    // We switched to .on("change", callback) which is the new standard.
    const unsubscribe = rounded.on("change", (v) => {
      setDisplayValue(v);
    });
    
    return () => unsubscribe();
  }, [rounded]);
  // --- FIXED CODE SECTION END ---

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: delay }}
      whileHover={{ scale: 1.05 }}
      className="relative flex flex-col items-center justify-center p-6 group cursor-default"
    >
      {/* Hover Glow Effect */}
      <div className="absolute inset-0 bg-cyan-500/5 blur-[40px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10 flex items-baseline gap-1">
        <motion.span 
          className="text-4xl md:text-5xl font-extrabold bg-gradient-to-br from-white via-white to-white/50 bg-clip-text text-transparent drop-shadow-sm"
        >
          {displayValue}
        </motion.span>
        <span className="text-2xl font-bold text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
          {suffix}
        </span>
      </div>
      
      <p className="relative z-10 text-xs md:text-sm font-medium text-cyan-200/60 uppercase tracking-[0.2em] mt-2 group-hover:text-cyan-200 transition-colors duration-300">
        {label}
      </p>
    </motion.div>
  );
};

const DynamicStats = () => {
  const stats = [
    { value: 150, label: "Projects Completed", suffix: "+" },
    { value: 85, label: "Happy Clients", suffix: "%" },
    { value: 12, label: "Awards Won", suffix: "" },
    { value: 5, label: "Years Experience", suffix: "Y+" },
  ];

  return (
    <section className="relative w-full px-4 md:px-6">
      {/* Glass Container */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-6xl mx-auto"
      >
        <div className="relative rounded-2xl border border-white/10 bg-gray-900/40 backdrop-blur-xl shadow-2xl overflow-hidden">
          
          {/* Decorative Top Highlight (Shine) */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-50" />
          
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
            {stats.map((stat, index) => (
              <StatItem 
                key={index} 
                {...stat} 
                delay={index * 0.1} // Stagger the counters
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default DynamicStats;