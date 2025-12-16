import { motion } from "framer-motion";

const SocialCard = ({ name, description, url }) => {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 240, damping: 18 }}
      className="
        group relative rounded-2xl
        bg-white/5 backdrop-blur-xl
        border border-white/10
        p-7
        hover:border-primary/40
        transition-colors
      "
      aria-label={`Visit IntefAI on ${name}`}
    >
      {/* Subtle glow */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-20 transition duration-500 bg-primary/10 blur-xl" />

      <div className="relative z-10">
        <h3 className="text-lg font-semibold tracking-wide mb-2">
          {name}
        </h3>

        <p className="text-sm text-white/60 leading-relaxed">
          {description}
        </p>

        <div className="mt-6 text-sm font-medium text-primary">
          Open profile →
        </div>
      </div>
    </motion.a>
  );
};

export default SocialCard;
