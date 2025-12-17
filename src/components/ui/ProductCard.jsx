const ProductCard = ({ title, description, color }) => {
  return (
    <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6 hover:-translate-y-2 transition duration-300">
      
      {/* Top gradient bar */}
      <div
        className={`h-1 w-full rounded-full bg-gradient-to-r ${color}`}
      />

      <h3 className="mt-6 text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-3 text-white/70 leading-relaxed">
        {description}
      </p>

      <button className="mt-6 text-sm text-primary hover:underline">
        Learn more →
      </button>
    </div>
  );
};

export default ProductCard;
