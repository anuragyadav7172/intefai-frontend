import { useEffect, useState } from "react";
import { products } from "@/constants/products";
import ProductCard from "@/components/ui/ProductCard";
const heroImages = [
  "/src/assets/images/hero/hero-1.png",
  "/src/assets/images/hero/hero-2.png",
  "/src/assets/images/hero/hero-3.png",
  "/src/assets/images/hero/hero-4.png",
];

const Home = () => {
  const [current, setCurrent] = useState(0);

  // Auto image change
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#05070d] via-[#080b16] to-[#0c1022]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center w-full">

          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
              AI-Driven{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                Social Media
              </span>
              <br />
              & Digital Marketing
            </h1>

            <p className="mt-6 text-gray-300 text-lg max-w-xl">
              We help brands grow with intelligent content, automation,
              analytics, and performance-driven digital marketing strategies.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-medium hover:scale-105 transition">
                Get Started
              </button>

              <button className="px-6 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10 transition">
                View Services
              </button>
            </div>
          </div>

          <div className="relative hidden md:flex items-center justify-center">
            <div className="relative w-[420px] h-[420px] rounded-2xl overflow-hidden">

              {heroImages.map((img, index) => (
                <img
                  key={img}
                  src={img}
                  alt="IntefAI digital marketing hero visual"
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out
                    ${index === current ? "opacity-100 scale-100" : "opacity-0 scale-105"}
                  `}
                  
                />
              ))}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10" />
            </div>
          </div>

        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gradient-to-br from-[#0B0F19] via-[#0E1525] to-[#0B0F19]">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Services</span>
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Smart digital marketing solutions designed to grow your brand and drive measurable results.
            </p>
          </div>

          {/* Products Grid - Show only first 3 */}
          <div className="grid gap-8 md:grid-cols-3">
            {products.slice(0, 3).map((product) => (
              <ProductCard
                key={product.id}
                title={product.title}
                description={product.description}
                color={product.color}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
