import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Star, Check, ShoppingBag, Info, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import productsHero from "@/assets/products-hero.jpg";
import { useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

// Images (using placeholders where necessary if assets not perfectly named, but trying best guess)
import toothpasteImg from "@/assets/ToothPaste.jpeg";
import greenTeaImg from "@/assets/GreenTea_Tablets.jpeg";
import mattressImg from "@/assets/Mattrices_and_Pillowpad.jpeg";
import addictionDropImg from "@/assets/Anti_adiction_drop.jpeg";

const products = [
  {
    id: 1,
    name: "Herbal Toothpaste",
    description: "Complete dental care with the power of Meswak & Babool. Protects against cavities while ensuring long-lasting fresh breath.",
    longDescription: "Our Herbal Toothpaste is a blend of traditional wisdom and modern oral care. Enriched with Meswak and Babool, it fights bacteria, strengthens gums, and ensures freshness that lasts all day. No harmful chemicals, just pure nature for your smile.",
    price: "₹135",
    image: toothpasteImg,
    rating: 4.8,
    reviews: 128,
    tag: "Best Seller",
    category: "Herbal Care",
    benefits: ["Cavity Protection", "Gum Health", "Natural Freshness"]
  },
  {
    id: 2,
    name: "Razata Green Tea Tablets",
    description: "Concentrated green tea extract for metabolism and immunity. The improved way to consume your daily antioxidants.",
    longDescription: "Experience the benefits of green tea in a convenient tablet form. Razata Green Tea Tablets are packed with antioxidants to boost your metabolism, aid in weight management, and support a healthy immune system. 100% natural extract.",
    price: "₹699",
    image: greenTeaImg,
    rating: 4.9,
    reviews: 85,
    tag: "Trending",
    category: "Wellness",
    benefits: ["Metabolism Boost", "High Antioxidants", "Daily Detox"]
  },
  {
    id: 3,
    name: "Bio Magnetic Mattress",
    description: "Therapeutic mattress & pillow pad designed with bio-magnetic technology to improve sleep quality and reduce body pain.",
    longDescription: "Revolutionize your sleep with our Bio Magnetic Mattress. Designed to improve blood circulation and alleviate body pain, it uses advanced bio-magnetic technology to ensure deep, restorative sleep. Wake up feeling refreshed and pain-free.",
    price: "₹5499",
    image: mattressImg,
    rating: 4.7,
    reviews: 210,
    tag: "Premium",
    category: "Lifestyle",
    benefits: ["Pain Relief", "Deep Sleep", "Bio-Magnetic Tech"]
  },
  {
    id: 4,
    name: "Anti-Addiction Drops",
    description: "A secure, herbal support system to help overcome dependency and strengthen willpower naturally.",
    longDescription: "Formulated to support individuals in overcoming dependencies, our Anti-Addiction Drops are a safe, herbal solution. They help reduce cravings, manage withdrawal symptoms, and strengthen willpower, promoting a healthier, addiction-free life.",
    price: "₹699",
    image: addictionDropImg,
    rating: 4.6,
    reviews: 94,
    tag: "Herbal Care",
    category: "Herbal Care",
    benefits: ["Willpower Support", "Non-Addictive", "Detoxification"]
  }
];

const Products = () => {
  const containerRef = useRef(null);
  const { toast } = useToast();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = activeCategory === "All"
    ? products
    : products.filter(product => product.category === activeCategory);

  const handleBuyNow = (productName: string) => {
    toast({
      title: "Added to Cart",
      description: `${productName} has been added to your cart.`,
    });
  };

  return (
    <Layout>
      {/* Premium Hero Section - Green & White Theme */}
      <div className="relative h-[60vh] overflow-hidden flex items-center justify-center bg-[#0d2e20]" ref={containerRef}>
        {/* Background Image Layer */}
        <div className="absolute inset-0 opacity-40 mix-blend-overlay">
          <img
            src={productsHero}
            alt="Lishaa Products Collection"
            className="w-full h-full object-cover scale-105"
          />
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-lime-400/10 rounded-full blur-[100px]" />
        </div>

        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/40 to-emerald-950/90" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-white/10 border border-white/20 text-emerald-300 text-sm font-semibold tracking-wider uppercase mb-6 backdrop-blur-md"
          >
            <Leaf className="h-4 w-4" />
            Our Collection
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl leading-tight"
          >
            Curated for <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-lime-300">Wellness</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/80 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed"
          >
            Discover our exclusive range of natural products, scientifically formulated to enhance your daily life.
          </motion.p>
        </div>
      </div>

      {/* Main Product Grid */}
      <section className="py-24 px-4 lg:px-8 bg-background relative z-20 -mt-12">
        <div className="container mx-auto">
          {/* Filter/Sort Header */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 pb-6 border-b border-border/40 gap-4">
            <p className="text-muted-foreground">Showing <span className="text-foreground font-semibold">{filteredProducts.length}</span> premium products</p>
            <div className="flex gap-2">
              {['All', 'Herbal Care', 'Wellness', 'Lifestyle'].map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === cat
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-secondary/5 text-muted-foreground hover:bg-secondary/10'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <Dialog>
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-x-8 gap-y-12"
            >
              {filteredProducts.map((product, index) => (
                <motion.div
                  layout
                  key={product.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group flex flex-col md:flex-row bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-border/50"
                >
                  {/* Image Section - FIXED VISIBILITY */}
                  <div className="w-full md:w-2/5 relative overflow-hidden bg-gray-50 flex items-center justify-center">
                    <div className="absolute top-4 left-4 z-10">
                      <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm uppercase tracking-wide">
                        {product.tag}
                      </span>
                    </div>

                    {/* Full width/height with object-cover */}
                    <div className="w-full h-64 md:h-full">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>

                    {/* Quick Actions Overlay */}
                    <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-center z-20">
                      <DialogTrigger asChild>
                        <Button
                          size="sm"
                          variant="secondary"
                          className="rounded-full bg-white text-primary hover:bg-accent hover:text-white font-semibold shadow-lg"
                          onClick={() => setSelectedProduct(product)}
                        >
                          Quick View
                        </Button>
                      </DialogTrigger>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="w-full md:w-3/5 p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-1 text-yellow-500">
                          <Star className="h-4 w-4 fill-current" />
                          <span className="text-sm font-semibold text-foreground">{product.rating}</span>
                          <span className="text-xs text-muted-foreground ml-1">({product.reviews})</span>
                        </div>
                        <div className="p-2 rounded-full bg-secondary/5 text-muted-foreground hover:bg-red-50 hover:text-red-500 transition-colors cursor-pointer">
                          <Star className="h-5 w-5" />
                        </div>
                      </div>

                      <h3 className="font-display text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                        {product.description}
                      </p>

                      <div className="space-y-2 mb-8">
                        {product.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                            <Check className="h-4 w-4 text-accent" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-auto pt-6 border-t border-border/40">
                      <div className="flex flex-col">
                        <span className="text-[10px] text-muted-foreground/80 uppercase tracking-widest font-semibold mb-1">MRP Price</span>
                        <div className="flex items-baseline gap-1">
                          <span className="font-display text-2xl font-bold text-foreground">{product.price}</span>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            className="rounded-full border-primary/20 hover:border-primary hover:text-primary transition-all"
                            onClick={() => setSelectedProduct(product)}
                          >
                            Details
                          </Button>
                        </DialogTrigger>
                        <Button
                          className="rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 px-6"
                          onClick={() => handleBuyNow(product.name)}
                        >
                          <ShoppingBag className="mr-2 h-4 w-4" /> Buy Now
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <DialogContent className="max-w-4xl rounded-[2rem] p-0 overflow-hidden bg-white border-none shadow-2xl">
              {selectedProduct && (
                <div className="flex flex-col md:flex-row h-full">
                  {/* Modal Image Side */}
                  <div className="w-full md:w-1/2 bg-gradient-to-br from-secondary/5 to-secondary/10 p-8 flex items-center justify-center relative">
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      className="max-h-[300px] w-auto object-contain drop-shadow-2xl mix-blend-multiply"
                    />
                    {/* Floating Tag */}
                    <div className="absolute top-6 left-6">
                      <span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-primary shadow-sm uppercase tracking-wide border border-white/50">
                        {selectedProduct.tag}
                      </span>
                    </div>
                  </div>

                  {/* Modal Content Side */}
                  <div className="w-full md:w-1/2 p-10 flex flex-col bg-white">
                    <DialogHeader className="mb-6 text-left">
                      <div className="flex items-center gap-2 mb-2 text-yellow-500">
                        <Star className="h-4 w-4 fill-current" />
                        <span className="text-sm font-bold text-foreground">{selectedProduct.rating}</span>
                        <span className="text-xs text-muted-foreground">({selectedProduct.reviews} verified reviews)</span>
                      </div>

                      <DialogTitle className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight mb-2">
                        {selectedProduct.name}
                      </DialogTitle>
                      <DialogDescription className="text-base text-muted-foreground leading-relaxed">
                        {selectedProduct.longDescription || selectedProduct.description}
                      </DialogDescription>
                    </DialogHeader>

                    <div className="my-6 space-y-4 bg-secondary/5 p-6 rounded-2xl border border-secondary/10">
                      <h4 className="font-bold text-sm text-foreground uppercase tracking-wider flex items-center gap-2">
                        <Leaf className="h-4 w-4 text-primary" /> Key Benefits
                      </h4>
                      <div className="grid grid-cols-1 gap-2">
                        {selectedProduct.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-center gap-3 text-sm text-foreground/80">
                            <div className="h-5 w-5 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                              <Check className="h-3 w-3 text-accent" />
                            </div>
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-auto flex items-center justify-between pt-6 border-t border-border">
                      <div>
                        <p className="text-xs text-muted-foreground uppercase font-semibold tracking-wide mb-1">Total Price</p>
                        <p className="font-display text-3xl font-bold text-primary">{selectedProduct.price}</p>
                      </div>
                      <Button
                        size="lg"
                        className="rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 px-8 py-6 text-lg transition-all hover:scale-105 active:scale-95"
                        onClick={() => {
                          handleBuyNow(selectedProduct.name);
                          // Optional: Close dialog here if needed, but usually users might want to keep browsing or see confirmation
                        }}
                      >
                        <ShoppingBag className="mr-2 h-5 w-5" /> Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "100% Natural", sub: "Curated Ingredients" },
              { label: "Scientifically Tested", sub: "Quality Assured" },
              { label: "Eco-Friendly", sub: "Sustainable Packaging" },
              { label: "24/7 Support", sub: "Dedicated Service" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-2">
                  <Check className="h-6 w-6 text-accent" />
                </div>
                <h4 className="font-bold text-lg">{item.label}</h4>
                <p className="text-white/60 text-sm">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
