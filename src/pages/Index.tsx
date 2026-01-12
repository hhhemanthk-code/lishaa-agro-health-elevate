import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { ArrowRight, Leaf, FlaskConical, Users, Sparkles, ChevronDown, Quote, Target, Eye, Heart, Award, Briefcase, TrendingUp, Package, Headphones, BarChart, Shield, MapPin, Phone, Mail, GraduationCap, Award as AwardIcon, BookOpen, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import heroBg from "@/assets/hero-bg.jpg";
import founderImg from "@/assets/Founder.jpeg";
import toothpasteImg from "@/assets/ToothPaste.jpeg";
import greenTeaImg from "@/assets/GreenTea_Tablets.jpeg";
import mattressImg from "@/assets/Mattrices_and_Pillowpad.jpeg";
import addictionDropImg from "@/assets/Anti_adiction_drop.jpeg";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const founderRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);

  // 3D Mouse Move Effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animation for the tilt
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { stiffness: 100, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { stiffness: 100, damping: 30 });

  function onMouseMove(e: React.MouseEvent) {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - left) / width - 0.5);
    mouseY.set((e.clientY - top) / height - 0.5);
  }

  const products = [
    {
      id: 1,
      name: "Herbal Toothpaste",
      description: "Complete dental care with Meswak & Babool for fresh breath.",
      price: "₹135",
      image: toothpasteImg,
      tag: "Best Seller"
    },
    {
      id: 2,
      name: "Razata Green Tea Tablets",
      description: "Premium green tea extract for metabolism and immunity.",
      price: "₹699",
      image: greenTeaImg,
      tag: "Trending"
    },
    {
      id: 3,
      name: "Bio Magnetic Mattress",
      description: "Therapeutic mattress for deep sleep and pain relief.",
      price: "₹5499",
      image: mattressImg,
      tag: "Premium"
    },
    {
      id: 4,
      name: "Anti-Addiction Drops",
      description: "Herbal support to help overcome dependency naturally.",
      price: "₹699",
      image: addictionDropImg,
      tag: "Natural Care"
    }
  ];

  useEffect(() => {
    // GSAP Animations
    const ctx = gsap.context(() => {
      // Hero parallax
      gsap.to(".hero-bg", {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Standard section reveals
      const sections = [missionRef, founderRef, productsRef];
      sections.forEach(ref => {
        if (!ref.current) return;
        gsap.fromTo(
          ref.current.children, // Animate direct children
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.2,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 80%",
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans overflow-x-hidden selection:bg-emerald-500 selection:text-white bg-white">
      <Navbar />
      {/* Hero Section - The "Best" Design */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden perspective-1000 bg-[#0d2e20]"
        onMouseMove={onMouseMove}
      >
        {/* Background Layers for Depth */}
        <div className="absolute inset-0 hero-bg transform-gpu">
          <img
            src={heroBg}
            alt="Lush green tea plantations"
            className="w-full h-full object-cover scale-110 opacity-40 mix-blend-overlay"
          />
        </div>

        {/* Rich Gradient Overlay for Premium Feel */}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/90 via-emerald-900/50 to-emerald-950/95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(16,185,129,0.15),transparent_70%)]" />

        {/* Floating Particles (3D Plane 1) */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ translateX: useTransform(mouseX, [-1, 1], [-30, 30]), translateY: useTransform(mouseY, [-1, 1], [-30, 30]) }}
        >
          <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-white/5 rounded-full blur-[80px] animate-pulse" />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px]" />
        </motion.div>

        {/* Hero Content (3D Plane 2 - Main Focus) */}
        <div className="relative z-20 container mx-auto px-4 lg:px-8 text-center pt-20 perspective-1000">
          <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center"
          >
            {/* Premium Badge */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              style={{ transform: "translateZ(80px)" }}
              className="mb-8 inline-flex items-center gap-2 px-8 py-2.5 rounded-full bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:bg-white/10 transition-all duration-500 group"
            >
              <Sparkles className="h-4 w-4 text-emerald-300 animate-pulse" />
              <span className="text-emerald-50 font-medium tracking-[0.3em] text-[10px] sm:text-xs uppercase">Pioneering Natural Wellness</span>
            </motion.div>

            {/* Main Headline with Split Stagger Animation */}
            <motion.h1
              style={{ transform: "translateZ(60px)" }}
              className="font-display text-5xl md:text-7xl lg:text-9xl font-bold text-white mb-8 leading-[1.0] tracking-tighter drop-shadow-2xl"
            >
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                  className="block text-white/95"
                >
                  Nature's Wisdom,
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-lime-200 to-emerald-400 animate-shimmer bg-[length:200%_auto] pb-4"
                >
                  Scientific Excellence
                </motion.span>
              </span>
            </motion.h1>

            {/* Description - Fade Up */}
            <motion.p
              style={{ transform: "translateZ(40px)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-white/70 text-lg md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed font-light font-display italic tracking-wide"
            >
              "Bridging the gap between <span className="text-white font-normal not-italic border-b border-emerald-500/50 pb-0.5">ancient tradition</span> and <span className="text-white font-normal not-italic border-b border-emerald-500/50 pb-0.5">modern science</span> for a sustainable future."
            </motion.p>

            {/* Buttons with Magnetic & Glow Effects */}
            <motion.div
              style={{ transform: "translateZ(70px)" }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center w-full max-w-lg mx-auto"
            >
              <Link to="/products" className="w-full sm:w-auto group">
                <Button
                  size="xl"
                  className="w-full relative overflow-hidden bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-lg px-10 py-8 rounded-full shadow-[0_20px_50px_rgba(16,185,129,0.3)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_20px_60px_rgba(16,185,129,0.5)] border-2 border-transparent hover:border-emerald-300/30"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">Explore Collection <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" /></span>
                </Button>
              </Link>
              <Link to="/contact" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="xl"
                  className="w-full bg-white/5 border-2 border-white/20 text-white hover:bg-white/10 font-semibold text-lg px-10 py-8 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:border-white/50 hover:shadow-[0_10px_30px_rgba(255,255,255,0.1)]"
                >
                  Contact Us
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Scroll Down Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
          >
            <span className="text-[10px] uppercase tracking-widest">Scroll</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-white/50 to-white/0 overflow-hidden">
              <motion.div
                initial={{ y: -50 }}
                animate={{ y: 50 }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                className="w-full h-1/2 bg-white/80 blur-[1px]"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section - White & Clean */}
      <section id="mission" ref={missionRef} className="py-24 bg-white relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-50/50 rounded-full blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-emerald-600 font-bold tracking-[0.2em] uppercase text-sm mb-4 block"
            >
              Our Purpose
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-8"
            >
              Holistic Wellness for Everyone
            </motion.h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-lime-400 mx-auto rounded-full mb-10" />
            <motion.p
              className="text-xl md:text-2xl text-gray-600 leading-relaxed mission-content font-light"
            >
              At <strong className="text-gray-900 font-semibold">Lishaa Agro Health</strong>, our mission is to promote <span className="text-emerald-600 font-medium">natural holistic wellness</span> through safe, effective, and ethically sourced products. We combine the purity of herbal ingredients with rigorous scientific testing to ensure quality you can trust.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Founder Section - Deep Green */}
      <section ref={founderRef} className="py-32 bg-[#0d2e20] text-background relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-lime-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="flex flex-col items-center justify-center max-w-5xl mx-auto">
            <Dialog>
              <motion.div
                className="relative group text-center"
              >
                {/* Image Container with Glow */}
                <div className="relative inline-block mb-10">
                  <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-400 to-lime-300 rounded-full opacity-20 group-hover:opacity-40 blur-2xl transition-opacity duration-700 animate-pulse" />
                  <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full p-2 bg-gradient-to-b from-white/10 to-transparent backdrop-blur-sm border border-white/20 shadow-2xl">
                    <img
                      src={founderImg}
                      alt="Dr. Manjunath N.S."
                      className="w-full h-full object-cover rounded-full shadow-inner"
                    />
                  </div>
                  {/* Floating Badge */}
                  <div className="absolute bottom-0 right-4 px-4 py-2 bg-emerald-500 text-white font-bold text-xs rounded-full shadow-lg border border-white/20 tracking-wider uppercase">
                    Visionary
                  </div>
                </div>

                {/* Name & Short Bio under Image */}
                <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
                  <div>
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-2 leading-tight drop-shadow-lg">
                      Dr. Manjunath N. S.
                    </h2>
                    <p className="text-lg text-emerald-300 font-medium italic">
                      M.Sc., B.Ed., Ph.D.
                    </p>
                  </div>

                  <div className="w-24 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent mx-auto rounded-full" />

                  <p className="text-xl md:text-2xl text-white font-semibold tracking-wide">
                    Chairman & Chief Executive Officer
                  </p>

                  <p className="text-white/70 leading-relaxed font-light text-lg">
                    "Bridging the gap between scientific innovation and natural wellness to create a sustainable future for all."
                  </p>

                  <div className="pt-6">
                    <DialogTrigger asChild>
                      <Button
                        size="lg"
                        className="rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-white px-10 py-7 text-lg font-semibold transition-all hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.1)] group"
                      >
                        Read Full Biography <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </DialogTrigger>
                  </div>
                </div>
              </motion.div>

              {/* Enhanced Bio Modal */}
              <DialogContent className="max-w-4xl p-0 overflow-hidden bg-white/95 backdrop-blur-xl border border-white/10 shadow-2xl rounded-[2rem] max-h-[90vh] overflow-y-auto custom-scrollbar text-gray-900">
                <div className="relative">
                  {/* Modal Header Background */}
                  <div className="h-40 bg-gradient-to-r from-emerald-800 to-emerald-900 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                  </div>

                  <div className="px-8 md:px-12 pb-12 -mt-20 relative z-10">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                      {/* Modal Profile Image */}
                      <div className="w-40 h-40 rounded-full border-4 border-white shadow-xl overflow-hidden shrink-0 bg-white">
                        <img src={founderImg} alt="Dr. Manjunath" className="w-full h-full object-cover" />
                      </div>

                      <div className="pt-2 md:pt-20 text-center md:text-left">
                        <DialogTitle className="font-display text-3xl md:text-4xl font-bold text-gray-900">
                          Dr. Manjunath N. S.
                        </DialogTitle>
                        <p className="text-emerald-600 font-medium text-lg mb-2">Chairman & CEO | Microbiologist | Entrepreneur</p>
                        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                          <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-bold border border-emerald-100">M.Sc.</span>
                          <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-bold border border-emerald-100">Ph.D. Microbiology</span>
                          <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-bold border border-emerald-100">26+ Years Exp.</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 space-y-6 text-gray-600 leading-relaxed text-lg font-light">
                      <p>
                        <span className="text-gray-900 font-semibold text-xl block mb-2">A Legacy of Science & Leadership</span>
                        Dr. Manjunath N. S. is a distinguished microbiologist, biotechnologist, and innovation-driven entrepreneur. With over <strong className="text-emerald-600">26 years of combined experience</strong> spanning advanced research, export-oriented herbal industry R&D, and higher education, he brings deep scientific expertise aligned with strategic leadership.
                      </p>

                      <div className="grid md:grid-cols-2 gap-6 my-8">
                        <div className="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-100">
                          <h4 className="text-gray-900 font-bold mb-3 flex items-center gap-2">
                            <GraduationCap className="h-5 w-5 text-emerald-600" /> Academic Excellence
                          </h4>
                          <p className="text-sm">
                            Holding a Ph.D. from Gulbarga University, he served for over two decades as Professor and Head of Biotechnology at <span className="font-medium text-gray-900">BIET, Davangere</span>. His work in phage therapy and applied biotechnology has shaped the minds of countless future scientists.
                          </p>
                        </div>
                        <div className="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-100">
                          <h4 className="text-gray-900 font-bold mb-3 flex items-center gap-2">
                            <FlaskConical className="h-5 w-5 text-emerald-600" /> Research Impact
                          </h4>
                          <p className="text-sm">
                            As Principal Investigator, he executed major projects exceeding <span className="font-medium text-gray-900">₹1.8 Crores</span> funded by DBT and VGST. His research addresses critical areas like superbug control and antimicrobial resistance.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section ref={productsRef} className="py-32 bg-white relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-emerald-600 font-bold tracking-[0.2em] text-sm uppercase mb-3 block">Our Collection</span>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Featured Wellness
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-lime-400 mx-auto rounded-full" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-10">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                whileHover={{ y: -10 }}
                className="product-card group bg-white rounded-[2rem] p-6 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden"
              >
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-emerald-700 shadow-sm uppercase tracking-wide border border-emerald-100">
                    {product.tag}
                  </span>
                </div>

                <div className="flex flex-col gap-6 relative z-10 h-full">
                  {/* Product Image */}
                  <div className="w-full h-64 rounded-2xl bg-gray-50 flex items-center justify-center relative p-4 overflow-hidden border border-gray-100">
                    <div className="w-full h-full flex items-center justify-center">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col text-left">
                    <h3 className="font-display text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-500 font-medium text-sm mb-4 leading-relaxed line-clamp-2">
                      {product.description}
                    </p>

                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                      <span className="font-display text-xl font-bold text-emerald-700">
                        {product.price}
                      </span>
                      <Link to="/products">
                        <Button size="sm" className="rounded-full bg-gray-900 text-white hover:bg-emerald-600 transition-all shadow-md px-6">
                          View
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Link to="/products">
              <Button variant="outline" size="lg" className="rounded-full border-2 border-emerald-100 hover:border-emerald-500 hover:text-emerald-700 text-gray-500 font-bold px-12 py-7 text-lg uppercase tracking-wide transition-all bg-transparent">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;