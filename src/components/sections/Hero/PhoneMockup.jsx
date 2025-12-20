import React, { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import PhoneScreen from "./PhoneScreen";
import FloatingIcons from "./FloatingIcons";

const PhoneMockup = () => {
  const ref = useRef(null);

  // --- 3D Physics Setup ---
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="flex justify-center lg:justify-end py-10 perspective-1000">
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        initial={{ rotateY: -10, rotateX: 5 }}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative z-10"
      >
        {/* --- PHYSICAL PHONE BODY --- */}
        <div
          className="
            relative 
            w-[240px] sm:w-[260px] md:w-[280px] 
            h-[480px] md:h-[550px]
            rounded-[2.5rem]
            border-[6px] border-[#1f2127]
            bg-[#05070d]
            shadow-2xl
          "
          style={{
            transformStyle: "preserve-3d",
            boxShadow: `
              0 0 0 2px #3e424b,
              0 0 0 4px #000, 
              20px 20px 40px rgba(0,0,0,0.6), 
              -5px 5px 15px rgba(0,0,0,0.4)
            `,
          }}
        >
          {/* SIDE BUTTONS */}
          <div className="absolute top-20 -right-[10px] w-[3px] h-10 bg-[#2d3038] rounded-r-md shadow-md" />
          <div className="absolute top-20 -left-[10px] w-[3px] h-8 bg-[#2d3038] rounded-l-md shadow-md" />
          <div className="absolute top-32 -left-[10px] w-[3px] h-8 bg-[#2d3038] rounded-l-md shadow-md" />

          {/* DYNAMIC GLARE */}
          <motion.div
            style={{
                transform: "translateZ(1px)",
                opacity: useTransform(mouseXSpring, [-0.5, 0.5], [0, 0.4]) 
            }}
            className="absolute inset-0 rounded-[2.2rem] bg-gradient-to-tr from-transparent via-white/20 to-transparent pointer-events-none z-50"
          />

          {/* SCREEN CONTAINER */}
          <div 
            className="relative h-full w-full overflow-hidden rounded-[2.2rem] bg-[#05070d]"
            style={{ transform: "translateZ(2px)" }}
          >
            {/* Light Reflection Source */}
            <div className="absolute -top-16 -left-16 w-48 h-48 bg-purple-500/20 blur-[60px] pointer-events-none mix-blend-screen" />
            <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-cyan-500/20 blur-[60px] pointer-events-none mix-blend-screen" />

            {/* Content Import */}
            <PhoneScreen />
          </div>

          {/* FLOATING ICONS */}
          <div 
            className="absolute inset-0 pointer-events-none" 
            style={{ transform: "translateZ(30px)" }}
          >
             <FloatingIcons />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PhoneMockup;