import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, GraduationCap, FlaskConical, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import heroBg from "@/assets/hero-bg.jpg";
import founderImg from "@/assets/Founder.jpeg";
import { supabase, Product } from "@/lib/supabase";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const founderRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);

  // 3D Mouse Parallax - Simplified for Elegance
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Softer spring for subtle float
  const moveX = useSpring(useTransform(mouseX, [-1, 1], [-20, 20]), { stiffness: 50, damping: 20 });
  const moveY = useSpring(useTransform(mouseY, [-1, 1], [-20, 20]), { stiffness: 50, damping: 20 });
  const rotateX = useSpring(useTransform(mouseY, [-1, 1], [5, -5]), { stiffness: 60, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-1, 1], [-5, 5]), { stiffness: 60, damping: 20 });

  function onMouseMove(e: React.MouseEvent) {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - left) / width * 2 - 1);
    mouseY.set((e.clientY - top) / height * 2 - 1);
  }

  // Fetch products from Supabase
  const [products, setProducts] = useState<Product[]>([]);
  const [loadingProducts, setLoadingProducts] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(5);

      if (error) throw error;
      setProducts(data || []);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoadingProducts(false);
    }
  };

  useEffect(() => {
    // GSAP Animations
    const ctx = gsap.context(() => {
      // Background Parallax
      gsap.to(".hero-bg-layer", {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Section Reveals
      [missionRef, founderRef, productsRef].forEach(ref => {
        if (!ref.current) return;
        gsap.fromTo(ref.current.children,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.15,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 85%",
            },
          }
        );
      });
    });
    return () => ctx.revert();
  }, []);

  const { scrollYProgress } = useScroll();

  return (
    <Layout>
      {/* Top Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-lime-400 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-[#0a1f16] perspective-1000"
        onMouseMove={onMouseMove}
      >
        {/* Cinematic Background */}
        <div className="absolute inset-0 hero-bg-layer z-0">
          <div className="absolute inset-0 bg-[#0a1f16]/60 z-10 mix-blend-multiply" />
          <img
            src={heroBg}
            alt="Nature Background"
            className="w-full h-full object-cover opacity-60 scale-110"
          />
        </div>

        {/* Ambient Gradient Blobs */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-emerald-500/20 rounded-full blur-[120px]"
          />
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] bg-lime-400/10 rounded-full blur-[100px]"
          />
        </div>

        {/* Content Container */}
        <div className="container relative z-10 px-4 pt-20 text-center">
          <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative inline-block"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mb-8 inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10"
            >
              <Sparkles className="h-3 w-3 text-emerald-400" />
              <span className="text-emerald-50 text-[10px] tracking-[0.25em] uppercase font-bold">The Future of Herbal Wellness</span>
            </motion.div>

            {/* Headline - Masked Reveal Animation */}
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-[1.1]">
              <div className="overflow-hidden">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                  className="block"
                >
                  Nature's Purest
                </motion.span>
              </div>
              <div className="overflow-hidden">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                  className="block bg-gradient-to-r from-emerald-200 via-white to-emerald-200 bg-clip-text text-transparent pb-2"
                >
                  Scientific Touch
                </motion.span>
              </div>
            </h1>

            {/* Subheadline floating with mouse */}
            <motion.p
              style={{ x: moveX, y: moveY }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="text-white/70 text-lg md:text-xl font-light max-w-2xl mx-auto mb-12 leading-relaxed"
            >
              Experience a new era of health where ancient herbal wisdom meets modern biotechnology.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link to="/products">
                <Button className="h-14 px-8 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-lg hover:px-10 transition-all duration-300 shadow-[0_10px_40px_-10px_rgba(16,185,129,0.5)]">
                  Explore Products
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="h-14 px-8 rounded-full border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold text-lg backdrop-blur-sm">
                  Contact Support
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-white/50 to-transparent relative overflow-hidden">
            <motion.div
              animate={{ top: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute w-full h-1/2 bg-white blur-[1px]"
            />
          </div>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section ref={missionRef} className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <span className="text-emerald-600 font-bold uppercase tracking-widest text-xs mb-4 block">Our Philosophy</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            We don't just sell products.<br />We engineer wellness.
          </h2>
          <p className="text-xl text-gray-600 font-light leading-relaxed">
            Every product at <span className="font-bold text-gray-900">Lishaa Agro Health</span> is a result of rigorous research, blending potent herbal extracts with scientifically proven formulations to deliver real, measurable health benefits.
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section ref={founderRef} className="py-24 bg-[#0a1f16] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            {/* Image Side */}
            {/* Image Side - Clean & Elegant Design */}
            <div className="flex-1 relative group flex justify-center">
              <div className="relative w-72 h-72 md:w-96 md:h-96">
                {/* Soft/Subtle Pulsing Glow Background */}
                <motion.div
                  animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.02, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 rounded-full bg-emerald-600/20 blur-2xl"
                />

                {/* Main Image Container with Clean Border */}
                <div className="relative w-full h-full rounded-full p-1.5 bg-gradient-to-b from-emerald-500/50 to-emerald-900/50 backdrop-blur-sm border border-emerald-500/30 shadow-2xl">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#0a1f16] relative z-10">
                    <img src={founderImg} alt="Dr. Manjunath" className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-700 ease-in-out" />
                  </div>
                </div>

                {/* Visionary Badge - Clean & Professional */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="absolute bottom-6 right-0 md:right-4 z-20"
                >
                  <div className="bg-emerald-600 text-white text-[10px] md:text-xs font-bold tracking-[0.2em] px-5 py-2 rounded-full shadow-lg ring-4 ring-[#0a1f16] uppercase transform group-hover:translate-y-[-4px] transition-transform duration-300">
                    Visionary
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Content Side */}
            <div className="flex-1 text-center md:text-left">
              <div className="mb-6">
                <h2 className="font-display text-4xl md:text-6xl font-bold mb-2">Dr. Manjunath N.S.</h2>
                <p className="text-emerald-400 text-lg font-medium tracking-wide">M.Sc., B.Ed., Ph.D.</p>
                <p className="text-white/60 text-sm uppercase tracking-widest font-bold mt-2">Founder & Chief Executive Officer</p>
              </div>
              <p className="text-white/80 text-lg mb-8 font-light leading-relaxed">
                "Dr. Manjunath N. S. is a distinguished microbiologist, biotechnologist, academic leader, and innovation-driven entrepreneur, currently serving as the Founder and Chief Executive Officer of the firm."
              </p>

              <Dialog>
                <DialogTrigger asChild>
                  <Button className="rounded-full bg-white text-emerald-950 font-bold hover:bg-emerald-50 px-8 py-6 text-base group shadow-lg hover:shadow-xl transition-all duration-300">
                    Read Full Bio <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-5xl bg-white border border-gray-100 p-0 overflow-hidden rounded-[2rem] md:rounded-[2.5rem] shadow-2xl block h-[90vh] md:h-auto gap-0">
                  <div className="flex flex-col md:flex-row h-full">
                    {/* Visual Side (Sticky/Fixed) */}
                    <div className="w-full md:w-2/5 relative bg-black h-64 md:h-[600px] shrink-0 overflow-hidden group">
                      <img
                        src={founderImg}
                        alt="Dr. Manjunath"
                        className="absolute inset-0 w-full h-full object-cover object-top opacity-100 scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      {/* Adjusted Gradient for better visibility */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-80" />

                      <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                        <div className="w-10 h-1 bg-emerald-500 mb-3 rounded-full shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
                        <p className="font-serif italic text-white text-lg md:text-2xl leading-relaxed shadow-sm drop-shadow-md pr-4">
                          "The future of medicine lies in the intelligent application of nature's pharmacy."
                        </p>
                      </div>

                      {/* Mobile Close Button (Functional & Smaller) */}
                      <DialogClose className="absolute top-4 right-4 md:hidden z-50 p-2 bg-black/40 backdrop-blur-md rounded-full text-white hover:bg-black/60 transition-colors border border-white/10">
                        <X className="w-4 h-4" />
                      </DialogClose>
                    </div>

                    {/* Content Side (Scrollable) */}
                    <div className="flex-1 overflow-y-auto max-h-[calc(90vh-18rem)] md:max-h-[600px] p-6 md:p-12 bg-white relative no-scrollbar [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="mb-2 relative z-10"
                      >
                        <span className="text-emerald-700 font-bold uppercase tracking-widest text-xs mb-2 block">Leadership Profile</span>
                        <DialogTitle className="font-display text-4xl md:text-5xl font-bold text-black leading-tight">
                          Dr. Manjunath N.S.
                        </DialogTitle>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex flex-wrap gap-3 mb-8 relative z-10"
                      >
                        <span className="px-4 py-1.5 rounded-full bg-emerald-950 text-white text-xs font-bold tracking-wider uppercase shadow-sm">Founder & CEO</span>
                        <span className="px-4 py-1.5 rounded-full bg-gray-100 text-gray-800 text-xs font-bold tracking-wide border border-gray-200">M.Sc., B.Ed., Ph.D.</span>
                      </motion.div>

                      <div className="space-y-6 text-gray-700 leading-relaxed text-lg font-light relative z-10">
                        <motion.p
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 0.6, delay: 0.3 }}
                          viewport={{ once: true }}
                          className="first-letter:text-5xl first-letter:font-serif first-letter:float-left first-letter:mr-3 first-letter:mt-[-4px] first-letter:text-emerald-900"
                        >
                          <strong>Dr. Manjunath N. S.</strong> is a distinguished microbiologist, biotechnologist, academic leader, and innovation-driven entrepreneur. With over <strong>26 years of combined experience</strong> spanning advanced research, export-oriented herbal industry R&D, and higher education, he brings deep scientific expertise aligned with strategic leadership.
                        </motion.p>

                        {/* Highlights Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group/card"
                          >
                            <h4 className="flex items-center gap-2 font-bold text-gray-900 mb-2 text-sm uppercase tracking-wide group-hover/card:text-emerald-700 transition-colors">
                              <GraduationCap className="w-5 h-5 text-emerald-600" /> Education
                            </h4>
                            <p className="text-sm text-gray-600">
                              Ph.D. from Gulbarga University. Specialized in Microbiology, MDR, Phage Therapy & Applied Biotech.
                            </p>
                          </motion.div>
                          <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group/card"
                          >
                            <h4 className="flex items-center gap-2 font-bold text-gray-900 mb-2 text-sm uppercase tracking-wide group-hover/card:text-emerald-700 transition-colors">
                              <FlaskConical className="w-5 h-5 text-emerald-600" /> Innovation
                            </h4>
                            <p className="text-sm text-gray-600">
                              Expert in value-added natural products. Granted patent holder with commercially successful research.
                            </p>
                          </motion.div>
                        </div>

                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.6 }}
                          viewport={{ once: true }}
                          className="relative pl-6 border-l-4 border-emerald-500/30 my-8 py-2"
                        >
                          <p className="text-gray-900 font-bold mb-1 font-display text-xl">Academic & Research Legacy</p>
                          <p className="text-base text-gray-500">
                            He served as Professor and Head of Biotechnology at Bapuji Institute (BIET) for 22 years. As Principal Investigator, he executed projects worth <strong className="text-emerald-700">₹1.8 Crores+</strong> funded by DBT & VGST.
                          </p>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.7 }}
                          viewport={{ once: true }}
                        >
                          <p className="mb-4">
                            His accolades include the <strong>“Young Scientist Award”</strong> (VGST), Best Teacher Award (2021), and multiple institutional honors.
                          </p>
                          <p>
                            Dr. Manjunath’s mission is to translate advanced biotechnology into natural, eco-friendly products that benefit society, driving global health through sustainable innovation.
                          </p>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div >
        </div >
      </section >

      {/* Featured Products */}
      < section ref={productsRef} className="py-24 bg-gray-50" >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-8 md:mb-12 gap-4">
            <div className="text-center md:text-left">
              <span className="text-emerald-600 font-bold uppercase tracking-widest text-xs mb-2 block">Our Collection</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900">Curated for You</h2>
            </div>
            <Link to="/products">
              <Button variant="ghost" className="text-emerald-700 hover:text-emerald-800 hover:bg-emerald-50 font-bold text-sm md:text-base">
                View All Products <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            {products.map((product) => (
              <div key={product.id} className="group bg-white rounded-3xl p-4 hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/5] rounded-2xl bg-gray-100 mb-4 overflow-hidden relative">
                  <img src={product.image_url} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-emerald-800 shadow-sm">
                    {product.tag}
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-1">{product.name}</h3>
                <p className="text-emerald-600 font-bold">{product.price}</p>
                <div className="mt-4 pt-4 border-t border-gray-100 flex gap-2">
                  <Link to="/products" className="flex-1">
                    <Button className="w-full rounded-xl bg-gray-900 text-white hover:bg-emerald-600 transition-colors">Buy Now</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section >
    </Layout >
  );
};

export default Index;