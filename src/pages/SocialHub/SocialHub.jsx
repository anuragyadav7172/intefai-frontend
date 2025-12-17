import { motion } from "framer-motion";
import Container from "@/components/common/Container";
import { socialLinks } from "@/constants/socialLinks";

const SocialHub = () => {
  return (
    <section className="py-24">
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12"
        >
          Social Media Presence
        </motion.h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {socialLinks.map((social, i) => (
            <motion.a
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition"
            >
              <h3 className="text-xl font-semibold">{social.name}</h3>
              <p className="text-white/60 mt-2">Follow us →</p>
            </motion.a>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SocialHub;
