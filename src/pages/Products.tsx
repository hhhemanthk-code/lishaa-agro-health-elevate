import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Layout from "@/components/layout/Layout";
import productsImg from "@/assets/products-hero.jpg";

const categories = [
  "All Products",
  "Herbal Supplements",
  "Organic Health",
  "Bio-Fertilizers",
  "Wellness",
];

const products = [
  {
    id: 1,
    name: "Organic Ashwagandha Extract",
    category: "Herbal Supplements",
    description: "Premium adaptogenic herb for stress relief and vitality enhancement.",
    benefits: ["Reduces stress", "Boosts energy", "Improves sleep"],
    price: "₹599",
  },
  {
    id: 2,
    name: "Tulsi Immunity Booster",
    category: "Herbal Supplements",
    description: "Pure holy basil extract to strengthen your natural immune defenses.",
    benefits: ["Immune support", "Respiratory health", "Antioxidant rich"],
    price: "₹449",
  },
  {
    id: 3,
    name: "Moringa Wellness Capsules",
    category: "Organic Health",
    description: "Nutrient-dense superfood for overall health and vitality.",
    benefits: ["Rich in nutrients", "Anti-inflammatory", "Energy boost"],
    price: "₹549",
  },
  {
    id: 4,
    name: "Turmeric Curcumin Complex",
    category: "Organic Health",
    description: "High-absorption curcumin formula for joint and digestive health.",
    benefits: ["Joint health", "Digestive support", "Anti-inflammatory"],
    price: "₹699",
  },
  {
    id: 5,
    name: "Organic Bio-Fertilizer",
    category: "Bio-Fertilizers",
    description: "Eco-friendly fertilizer for enhanced crop yield and soil health.",
    benefits: ["Improves soil", "Organic certified", "Safe for crops"],
    price: "₹299",
  },
  {
    id: 6,
    name: "Neem Plant Protector",
    category: "Bio-Fertilizers",
    description: "Natural pest control solution for organic farming.",
    benefits: ["Pest control", "Safe for plants", "Biodegradable"],
    price: "₹349",
  },
  {
    id: 7,
    name: "Triphala Digestive Aid",
    category: "Wellness",
    description: "Traditional Ayurvedic formula for digestive wellness.",
    benefits: ["Digestive health", "Detoxification", "Gut balance"],
    price: "₹399",
  },
  {
    id: 8,
    name: "Brahmi Memory Enhancer",
    category: "Wellness",
    description: "Cognitive support supplement for mental clarity and focus.",
    benefits: ["Memory support", "Mental clarity", "Stress relief"],
    price: "₹499",
  },
];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("All Products");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      activeCategory === "All Products" || product.category === activeCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-nature relative overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 organic-shape-1 animate-float" />
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-accent font-medium tracking-wider uppercase mb-4">
                Our Products
              </p>
              <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
                Nature's Best for
                <span className="text-gradient-nature"> Your Health</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Discover our premium range of herbal supplements, organic health 
                products, and sustainable agricultural solutions. Each product is 
                crafted with care, backed by research, and inspired by nature.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src={productsImg}
                alt="Lishaa Products"
                className="rounded-3xl shadow-elevated w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row gap-6 mb-12"
          >
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 rounded-xl border-2 border-border focus:border-primary"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-primary/10"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Products Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group bg-gradient-card rounded-3xl p-6 shadow-card hover:shadow-elevated transition-all duration-500"
              >
                {/* Product Image Placeholder */}
                <div className="aspect-square rounded-2xl bg-herbal/10 mb-6 flex items-center justify-center overflow-hidden">
                  <div className="w-20 h-20 rounded-full bg-herbal/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Leaf className="h-10 w-10 text-primary" />
                  </div>
                </div>

                {/* Category */}
                <span className="inline-block px-3 py-1 bg-accent/20 text-accent text-xs font-medium rounded-full mb-3">
                  {product.category}
                </span>

                {/* Name & Description */}
                <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* Benefits */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {product.benefits.slice(0, 2).map((benefit, i) => (
                    <span
                      key={i}
                      className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between">
                  <span className="font-display text-xl font-bold text-primary">
                    {product.price}
                  </span>
                  <Button variant="ghost" size="sm" className="group/btn">
                    Details
                    <ArrowRight className="ml-1 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {filteredProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <Leaf className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                No products found
              </h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filter criteria.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-card">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-hero rounded-3xl p-12 md:p-16 text-center"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-cream mb-6">
              Interested in Becoming a Dealer?
            </h2>
            <p className="text-cream/80 text-lg max-w-2xl mx-auto mb-10">
              Join our growing network of partners and bring natural wellness 
              to your community.
            </p>
            <Link to="/dealership">
              <Button variant="gold" size="xl">
                Learn About Dealership
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
