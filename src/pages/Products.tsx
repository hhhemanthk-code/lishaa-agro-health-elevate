import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Search, Filter, ShoppingCart, Star, X, Check, ChevronDown, ArrowRight, Info, Leaf, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import productsHero from "@/assets/products-hero.jpg";
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
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// Images (using placeholders where necessary if assets not perfectly named, but trying best guess)
import toothpasteImg from "@/assets/ToothPaste.jpeg";
import greenTeaImg from "@/assets/GreenTea_Tablets.jpeg";
import mattressImg from "@/assets/Mattrices_and_Pillowpad.jpeg";
import addictionDropImg from "@/assets/Anti_adiction_drop.jpeg";
import powerBoosterImg from "@/assets/PowerBooster.jpeg";

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
  },
  {
    id: 5,
    name: "Power Booster",
    description: "Advanced herbal formula for enhanced vitality, strength, and immune support.",
    longDescription: "Recharge your life with Power Booster. A scientifically crafted blend of potent herbs like Ashwagandha and Ginseng to boost energy levels, improve stamina, and strengthen immunity naturally. Feel the difference in your daily vitality.",
    price: "₹1299",
    image: powerBoosterImg,
    rating: 4.9,
    reviews: 62,
    tag: "New Arrival",
    category: "Wellness",
    benefits: ["Enhances Vitality", "Boosts Stamina", "Immune Support"]
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

  const categories = ["All", "Herbal Care", "Wellness", "Lifestyle"];

  return (
    <Layout>
      {/* Premium Hero Section - Green & White Theme */}
      <section className="relative min-h-[90vh] overflow-hidden flex items-center justify-center bg-[#0d2e20]" ref={containerRef}>
        {/* Background Image Layer - Parallax Effect */}
        <motion.div
          style={{ y }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-black/70 z-10" />
          <img
            src={productsHero}
            alt="Lishaa Products Collection"
            className="w-full h-full object-cover scale-110 opacity-70"
          />
        </motion.div>

        {/* Ambient Gradient Blobs - Consistent with Index */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-[100px]"
          />
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-[20%] -left-[10%] w-[500px] h-[500px] bg-lime-400/10 rounded-full blur-[80px]"
          />
        </div>

        {/* Content Container */}
        <div className="container relative z-20 px-4 pt-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-8"
          >
            <Leaf className="h-4 w-4 text-emerald-400 animate-pulse" />
            <span className="text-emerald-50 text-[10px] tracking-[0.2em] font-bold uppercase">Our Collection</span>
          </motion.div>

          {/* ... existing Hero content ... */}
          <h1 className="font-display text-4xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
            <div className="overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}

                className="block"
              >
                Curated for
              </motion.span>
            </div>
            <div className="overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                className="block text-white pb-3 drop-shadow-md"
              >
                Pure Wellness
              </motion.span>
            </div>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-white/80 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed"
          >
            Discover our exclusive range of natural products, scientifically formulated to enhance your daily life.
          </motion.p>
        </div>
      </section>

      {/* Main Product Grid */}
      <section className="py-24 px-4 lg:px-8 bg-background relative z-20 -mt-12">
        <div className="container mx-auto">
          {/* Filter/Sort Header */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 pb-6 border-b border-border/40 gap-4">
            <p className="text-muted-foreground">Showing <span className="text-foreground font-semibold">{filteredProducts.length}</span> premium products</p>

            {/* Desktop Filters */}
            <div className="hidden md:flex gap-2">
              {categories.map(cat => (
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

            {/* Mobile Filter Sheet */}
            <div className="md:hidden w-full">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="w-full gap-2 rounded-full border-emerald-200 text-emerald-800">
                    <Filter className="w-4 h-4" /> Filter Products
                  </Button>
                </SheetTrigger>
                <SheetContent side="bottom" className="rounded-t-[2rem]">
                  <SheetHeader className="mb-6 text-left">
                    <SheetTitle className="font-display text-2xl text-emerald-950">Filter Collection</SheetTitle>
                    <SheetDescription>Select a category to view specific products.</SheetDescription>
                  </SheetHeader>
                  <div className="flex flex-col gap-3">
                    {categories.map(cat => (
                      <button
                        key={cat}
                        onClick={() => {
                          setActiveCategory(cat);
                          // Optional: Close sheet logic if controlled, but default behavior is fine for now or we rely on user clicking outside/close
                        }}
                        className={`px-4 py-4 rounded-xl text-lg font-medium transition-all text-left flex justify-between items-center ${activeCategory === cat
                          ? 'bg-emerald-50 text-emerald-900 border border-emerald-200'
                          : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                          }`}
                      >
                        {cat}
                        {activeCategory === cat && <Check className="w-5 h-5 text-emerald-600" />}
                      </button>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
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
                  <div className="w-full md:w-3/5 p-5 md:p-8 flex flex-col justify-between">
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

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-auto pt-6 border-t border-border/40 gap-4">
                      <div className="flex flex-col">
                        <span className="text-[10px] text-muted-foreground/80 uppercase tracking-widest font-semibold mb-1">MRP Price</span>
                        <div className="flex items-baseline gap-1">
                          <span className="font-serif text-3xl font-extrabold text-emerald-800 tracking-wide">{product.price}</span>
                        </div>
                      </div>
                      <div className="flex gap-3 flex-wrap">
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            className="rounded-full border-primary/20 hover:border-primary hover:text-primary transition-all flex-1 sm:flex-none"
                            onClick={() => setSelectedProduct(product)}
                          >
                            Details
                          </Button>
                        </DialogTrigger>
                        <Button
                          className="rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 px-6 flex-1 sm:flex-none"
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

            <DialogContent className="max-w-4xl w-[95vw] rounded-[2rem] p-0 overflow-hidden bg-white border-none shadow-2xl h-[85vh] md:h-auto flex flex-col">
              {selectedProduct && (
                <div className="flex flex-col md:flex-row h-full overflow-hidden">
                  {/* Modal Image Side */}
                  <div className="w-full md:w-1/2 bg-gradient-to-br from-secondary/5 to-secondary/10 p-8 flex items-center justify-center relative shrink-0 h-64 md:h-auto">
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      className="max-h-full w-auto object-contain drop-shadow-2xl mix-blend-multiply"
                    />
                    {/* Floating Tag */}
                    <div className="absolute top-6 left-6">
                      <span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-primary shadow-sm uppercase tracking-wide border border-white/50">
                        {selectedProduct.tag}
                      </span>
                    </div>
                  </div>

                  {/* Modal Content Side */}
                  <div className="w-full md:w-1/2 flex flex-col bg-white flex-1 min-h-0 overflow-hidden">
                    {/* Scrollable Content Area */}
                    <div className="flex-1 overflow-y-auto p-6 md:p-10">
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
                    </div>

                    {/* Fixed Footer Area */}
                    <div className="shrink-0 p-6 md:px-10 md:pb-10 md:pt-6 border-t border-border bg-white z-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                      <div className="text-center sm:text-left flex flex-row sm:flex-col items-center sm:items-start justify-between sm:justify-center">
                        <p className="text-xs text-muted-foreground uppercase font-semibold tracking-wide mb-0 sm:mb-1 mr-2 sm:mr-0">Total Price</p>
                        <p className="font-serif text-3xl md:text-4xl font-extrabold text-emerald-800 tracking-wide">{selectedProduct.price}</p>
                      </div>
                      <Button
                        size="lg"
                        className="rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 px-8 py-4 md:py-6 text-lg transition-all hover:scale-105 active:scale-95 w-full sm:w-auto"
                        onClick={() => {
                          handleBuyNow(selectedProduct.name);
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
