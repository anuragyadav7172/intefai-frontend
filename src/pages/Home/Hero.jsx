import { motion } from "framer-motion";
import Container from "@/components/common/Container";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-black to-secondary/20 blur-3xl" />

      <Container className="relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl sm:text-6xl font-bold max-w-3xl"
        >
          AI-Driven Social Media & Digital Marketing
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-white/70 text-lg max-w-xl"
        >
          We help brands grow with intelligent content, analytics,
          automation, and performance marketing.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex gap-4"
        >
          <button className="px-6 py-3 rounded-xl bg-primary text-black font-medium">
            Get Started
          </button>
          <button className="px-6 py-3 rounded-xl border border-white/20">
            View Services
          </button>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;
