
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Layout from "@/components/layout/Layout";
import { Heart, Shield, Award, Users, Leaf, Microscope, Sparkles, Target, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import founderImg from "@/assets/Founder.jpeg";
import agroScienceImg from "@/assets/agro-science-farm.png";
import labResearch from "@/assets/research-lab.jpg";

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const stats = [
    { label: "Years of Excellence", value: "26+" },
    { label: "Research Grants", value: "₹2Cr+" },
    { label: "Happy Families", value: "10k+" },
    { label: "Natural Products", value: "50+" },
  ];

  const values = [
    {
      icon: Shield,
      title: "Scientific Integrity",
      desc: "Every formulation is backed by rigorous research and biotechnology."
    },
    {
      icon: Leaf,
      title: "Purely Natural",
      desc: "Ethically sourced ingredients, free from harmful chemicals."
    },
    {
      icon: Heart,
      title: "Holistic Compassion",
      desc: "We care for your well-being as if you were our own family."
    },
    {
      icon: Award,
      title: "Uncompromising Quality",
      desc: "Manufacturing standards that exceed industry benchmarks."
    }
  ];

  return (
    <Layout>
      {/* 1. Hero Section - Deep Green Theme */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0d2e20]" ref={containerRef}>
        {/* Background Layers */}
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/70 z-10" />
          <img
            src={agroScienceImg}
            alt="Lishaa Agro Health Farm"
            className="w-full h-full object-cover scale-105"
          />
        </motion.div>

        {/* Animated Particles - Configured for subtle premium feel */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 right-20 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[100px]"
          />
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-20 left-20 w-[600px] h-[600px] bg-lime-400/10 rounded-full blur-[120px]"
          />
        </div>

        <div className="container mx-auto px-4 relative z-20 text-center pt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 shadow-lg"
          >
            <Microscope className="h-4 w-4 text-emerald-300" />
            <span className="text-white text-[10px] tracking-[0.2em] font-bold uppercase drop-shadow-sm">Our Story</span>
          </motion.div>

          <h1 className="font-display text-4xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-[1.1] tracking-tight drop-shadow-lg">
            <div className="overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="block"
              >
                Rooted in Nature,
              </motion.span>
            </div>
            <div className="overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 via-white to-emerald-200"
              >
                Proven by Science.
              </motion.span>
            </div>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed"
          >
            We are bridging the gap between ancient herbal wisdom and modern biotechnology.
          </motion.p>
        </div>
      </section>

      {/* 2. Brand Story / Mission - Clean Editorial Layout */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
            {/* Image Side - Minimalist Mask */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-full lg:w-1/2 relative"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-gray-100 rounded-[3rem]">
                <div className="absolute inset-0 bg-emerald-900/10 mix-blend-multiply z-10" />
                <img
                  src={labResearch}
                  alt="Scientific Research Lab"
                  className="w-full h-full object-cover scale-100 hover:scale-105 transition-transform duration-[1.5s]"
                />
              </div>
              {/* Floating Quote Card */}
              <div className="absolute -bottom-12 -right-12 md:right-12 bg-white p-8 rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] max-w-sm border border-gray-50 hidden md:block">
                <p className="font-serif italic text-xl text-gray-800 leading-relaxed mb-4">
                  "We don't just mix herbs; we engineer wellness using the precision of modern science."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 overflow-hidden">
                    <img src={founderImg} alt="Dr. Manjunath" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">Dr. Manjunath N.S.</p>
                    <p className="text-xs text-emerald-600 font-semibold tracking-wide uppercase">Founder & CEO</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Text Side - Elegant Typography */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className="w-full lg:w-1/2"
            >
              <span className="inline-block py-1 px-3 rounded-full bg-emerald-50 text-emerald-600 text-xs font-bold tracking-[0.2em] uppercase mb-6">Our Philosophy</span>
              <h2 className="font-display text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-[1.1]">
                Bridging Ancient Wisdom with <span className="text-emerald-600 relative inline-block">
                  Modern Science
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-emerald-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                  </svg>
                </span>
              </h2>

              <div className="space-y-6 text-lg text-gray-500 leading-relaxed font-light">
                <p>
                  Lishaa Agro Health was born from a singular vision: to demystify traditional herbal medicine and elevate it through rigorous biotechnological research.
                </p>
                <p>
                  Founded by Dr. Manjunath N.S., a visionary with over two decades of research experience, we are not just a brand; we are a scientific movement. We believe that true healing comes when you respect the complexity of nature and validate it with the clarity of science.
                </p>
                <p className="font-medium text-gray-900">
                  No shortcuts. No compromises. Just pure, potent, and proven wellness.
                </p>
              </div>

              {/* Minimal Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 pt-10 border-t border-gray-100">
                {stats.map((stat, i) => (
                  <div key={i}>
                    <p className="font-display text-4xl font-bold text-gray-900 mb-1">{stat.value}</p>
                    <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Core Values - Refined Cards */}
      <section className="py-32 bg-[#F5F7F6] relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">Guided by Principles</h2>
            <p className="text-gray-500 text-lg font-light">
              Our core values are the bedrock of our innovation, ensuring that every product we create is a testament to our commitment to your health.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-white p-10 rounded-[2.5rem] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(16,185,129,0.1)] transition-all duration-500 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mb-8 group-hover:bg-emerald-500 transition-colors duration-500">
                  <val.icon className="h-8 w-8 text-gray-600 group-hover:text-white transition-colors duration-500 stroke-[1.5]" />
                </div>
                <h3 className="font-display text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-700 transition-colors">{val.title}</h3>
                <p className="text-gray-500 text-base leading-relaxed font-light">
                  {val.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA Section - Minimal & Strong */}
      <section className="py-24 relative bg-emerald-950 overflow-hidden text-center mx-4 md:mx-12 rounded-[3rem] mb-20">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
        {/* Glow effects */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-lime-400/5 rounded-full blur-[120px]" />

        <div className="relative z-10 px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
              Ready to Experience Purity?
            </h2>
            <p className="text-white/60 text-xl mb-12 font-light">
              Join the movement towards a chemical-free, scientifically validated healthy lifestyle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/products">
                <Button className="h-16 px-10 rounded-full bg-white text-emerald-950 font-bold text-lg hover:bg-emerald-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105">
                  Explore Collection
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="h-16 px-10 rounded-full border-white/20 bg-transparent text-white font-semibold text-lg hover:bg-white/10 backdrop-blur-sm">
                  Talk to an Expert
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </Layout>
  );
};

export default About;
