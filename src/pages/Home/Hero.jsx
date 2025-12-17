import { motion } from "framer-motion";
import Container from "@/components/common/Container";
import ImageCarousel from "@/components/ui/ImageCarousel";

const Hero = () => {
  return (
    <section className="relative py-28 overflow-hidden bg-gradient-to-br from-[#0B0F19] via-[#0E1525] to-[#0B0F19]">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10 blur-3xl" />

      <Container className="relative">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              AI-Powered <span className="text-primary">Social Media</span>
              <br /> & Digital Marketing
            </h1>

            <p className="mt-6 text-lg text-white/70 max-w-xl">
              We manage, optimize, and scale your brand’s digital presence
              across platforms using data-driven strategies and creative
              storytelling.
            </p>

            <div className="mt-10 flex gap-4">
              <button className="px-6 py-3 rounded-xl bg-primary text-black font-semibold hover:scale-105 transition">
                Get Started
              </button>

              <button className="px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition">
                View Services
              </button>
            </div>
          </motion.div>

          {/* Image timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <ImageCarousel />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
