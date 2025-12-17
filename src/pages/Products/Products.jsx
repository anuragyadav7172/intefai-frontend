import Container from "@/components/common/Container";
import ProductCard from "@/components/ui/ProductCard";
import { products } from "@/constants/products";

const Products = () => {
  return (
    <section className="py-24">
      <Container>
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Our <span className="text-primary">Services</span>
          </h2>

          <p className="mt-4 text-white/70 text-lg">
            Smart digital marketing solutions designed to grow your brand,
            increase reach, and drive measurable results.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              description={product.description}
              color={product.color}
            />
          ))}
        </div>

      </Container>
    </section>
  );
};

export default Products;
