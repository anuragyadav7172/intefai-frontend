import { motion } from "framer-motion";
import HeroScene from "@/components/three/HeroScene";
import Container from "@/components/common/Container";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 blur-3xl" />

      <Container className="relative grid min-h-[90vh] grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Building the <span className="text-primary">Future</span> of
            <br />
            Intelligent Systems
          </h1>

          <p className="mt-6 max-w-xl text-white/70 text-lg">
            IntefAI empowers businesses with next-generation AI solutions,
            blending intelligence, automation, and innovation.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/products"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 font-medium text-dark shadow-glow transition hover:scale-105"
            >
              Explore Solutions
            </a>

            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-white/20 px-6 py-3 font-medium text-white transition hover:border-primary hover:text-primary"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>

        {/* Right 3D Scene */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative h-[360px] sm:h-[420px] lg:h-[520px]"
        >
          <HeroScene />
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;
