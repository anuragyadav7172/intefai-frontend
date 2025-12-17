import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/src/assets/images/hero-1.jpg",
  "/src/assets/images/hero-2.jpg",
  "/src/assets/images/hero-3.jpg",
];

const ImageCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[320px] sm:h-[420px] rounded-2xl overflow-hidden shadow-xl">
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          alt="Digital marketing showcase"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      </AnimatePresence>
    </div>
  );
};

export default ImageCarousel;
