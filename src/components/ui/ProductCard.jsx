import { motion } from "framer-motion";

const ProductCard = ({ title, description, accent }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="relative group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 overflow-hidden"
    >
      {/* Gradient Glow */}
      <div
        className={`pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-30 transition duration-500 bg-gradient-to-br ${accent}`}
      />

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-xl font-semibold mb-3">
          {title}
        </h3>
        

        <p className="text-white/70 leading-relaxed">
          {description}
        </p>
        <h3 className="text-2xl font-bold text-red-500">
  TEST CARD – {title}
</h3>


        <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary">
          <span>Learn more</span>
          <span className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
