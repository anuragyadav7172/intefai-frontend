import { motion } from "framer-motion";
import Container from "@/components/common/Container";
import ProductCard from "@/components/ui/ProductCard";
import { products } from "@/constants/products";

const Products = () => {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Soft background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 blur-3xl" />

      <Container className="relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-20"
        >
          <h1 className="text-4xl sm:text-5xl font-bold">
            Products & <span className="text-primary">Solutions</span>
          </h1>

          <p className="mt-5 text-lg text-white/70">
            Powerful AI-driven solutions designed to scale with your business
            and unlock intelligent automation.
          </p>
        </motion.div>

        {/* GRID — THIS IS WHAT YOU ARE MISSING */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <ProductCard {...product} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Products;
