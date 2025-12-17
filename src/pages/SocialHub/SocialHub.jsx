import { motion } from "framer-motion";
import Container from "@/components/common/Container";
import SocialCard from "@/components/ui/SocialCard";
import { socialLinks } from "@/constants/socialLinks";
import SocialParallaxScene from "@/components/three/SocialParallaxScene";

const SocialHub = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* 3D Parallax Background */}
      <SocialParallaxScene />

      {/* Ambient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

      <Container className="relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mb-20"
        >
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Social Presence
          </h1>

          <p className="mt-4 text-white/60 text-lg">
            Follow IntefAI across platforms to stay updated with our latest work,
            insights, and announcements.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {socialLinks.map((social, index) => (
            <motion.div
              key={social.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
            >
              <SocialCard
                name={social.name}
                description={social.description}
                url={social.url}
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SocialHub;
