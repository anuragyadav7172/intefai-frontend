import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const SocialMediaCard = ({ icon: Icon, name, link, colorClass = "from-cyan-400 to-blue-500", bgImage }) => {
  const ref = useRef(null);

  // Motion Values
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring Physics
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17deg", "-17deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17deg", "17deg"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    const xPos = e.clientX - rect.left;
    const yPos = e.clientY - rect.top;

    x.set(xPct);
    y.set(yPct);
    mouseX.set(xPos);
    mouseY.set(yPos);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial="initial"
      whileHover="hover"
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative flex h-52 w-full flex-col items-center justify-center rounded-3xl perspective-1000"
    >
      {/* --------------------------------------------------
          LAYER 1: The Glass Body & Background Image
         -------------------------------------------------- */}
      <div 
        className="absolute inset-0 rounded-3xl border border-white/10 overflow-hidden bg-[#05070d] transition-all duration-300 group-hover:border-white/20 shadow-2xl shadow-black/50"
        style={{ transform: "translateZ(0px)" }}
      >
        {/* Background Image Logic */}
        {bgImage && (
            <>
                <div 
                    className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-500 grayscale group-hover:grayscale-0"
                    style={{ backgroundImage: `url(${bgImage})` }}
                />
                {/* Dark Gradient Overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-90" />
            </>
        )}

        {/* Glass Sheen */}
        <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px]" />

        {/* Noise Texture */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay rounded-3xl" />
        
        {/* Spotlight Effect */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: useTransform(
              [mouseX, mouseY],
              ([newX, newY]) => `radial-gradient(600px circle at ${newX}px ${newY}px, rgba(255,255,255,0.1), transparent 40%)`
            ),
          }}
        />
        
        {/* Bottom Color Glow */}
        <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-gradient-to-t ${colorClass} opacity-0 group-hover:opacity-30 blur-[60px] transition-opacity duration-500`} />
      </div>

      {/* --------------------------------------------------
          LAYER 2: The Content (Floating)
         -------------------------------------------------- */}
      <div 
        style={{ transform: "translateZ(70px)" }}
        className="relative z-10 mb-4 p-4 rounded-2xl bg-white/5 border border-white/10 transition-all duration-300 group-hover:-translate-y-2"
      >
        {/* Colored Shadow Behind Icon (Fixes visibility issues) */}
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${colorClass} opacity-0 blur-md group-hover:opacity-40 transition-opacity duration-300`} />
        
        {/* The Icon (White text) */}
        <div className="relative text-4xl text-white drop-shadow-lg">
          <Icon />
        </div>
      </div>

      <div 
        style={{ transform: "translateZ(40px)" }}
        className="relative z-10 flex flex-col items-center"
      >
        <h3 className="text-white font-bold tracking-widest uppercase text-sm group-hover:text-cyan-200 transition-colors drop-shadow-md">
            {name}
        </h3>
        <span className="text-[10px] text-gray-300 mt-1 drop-shadow-md">Connect with us</span>
      </div>

      {/* --------------------------------------------------
          LAYER 3: The "Go" Arrow
         -------------------------------------------------- */}
      <div 
        style={{ transform: "translateZ(30px)" }}
        className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
      >
         <div className="p-2 rounded-full bg-white/10 text-white border border-white/10 backdrop-blur-md">
            <FiArrowUpRight />
         </div>
      </div>

    </motion.a>
  );
};

export default SocialMediaCard;