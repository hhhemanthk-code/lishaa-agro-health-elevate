import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { ArrowRight, Leaf, FlaskConical, Users, Sparkles, ChevronDown, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import heroBg from "@/assets/hero-bg.jpg";
import founderImg from "@/assets/founder-portrait.jpg";
import productsImg from "@/assets/products-hero.jpg";
import researchImg from "@/assets/research-lab.jpg";
import sustainabilityImg from "@/assets/sustainability.jpg";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Leaf,
    title: "Natural Products",
    description: "Premium herbal supplements and organic health solutions crafted from nature's finest ingredients.",
    image: productsImg,
  },
  {
    icon: FlaskConical,
    title: "Research Excellence",
    description: "Cutting-edge biotechnology research driving innovation in natural health and agriculture.",
    image: researchImg,
  },
  {
    icon: Sparkles,
    title: "Sustainability",
    description: "Committed to sustainable practices that nourish both people and the planet.",
    image: sustainabilityImg,
  },
  {
    icon: Users,
    title: "Business Opportunity",
    description: "Partner with us and grow together in the thriving natural health industry.",
    image: productsImg,
  },
];

const testimonials = [
  {
    quote: "Lishaa Agro Health has transformed my approach to wellness. Their products are truly exceptional.",
    author: "Priya Sharma",
    role: "Health Enthusiast",
  },
  {
    quote: "The quality and purity of their herbal products is unmatched. I've seen remarkable health improvements.",
    author: "Rajesh Kumar",
    role: "Wellness Coach",
  },
  {
    quote: "As a dealer, partnering with Lishaa has been the best business decision. Their support is outstanding.",
    author: "Anita Desai",
    role: "Business Partner",
  },
];

const stats = [
  { value: "25+", label: "Years Experience" },
  { value: "100+", label: "Products" },
  { value: "50k+", label: "Happy Customers" },
  { value: "500+", label: "Dealers Nationwide" },
];

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

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

      // Features stagger animation
      gsap.fromTo(
        ".feature-card",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 80%",
          },
        }
      );

      // Stats counter animation
      gsap.fromTo(
        ".stat-item",
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          stagger: 0.15,
          duration: 0.6,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".stats-section",
            start: "top 80%",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0 hero-bg">
          <img
            src={heroBg}
            alt="Lush green tea plantations"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 via-secondary/60 to-secondary/90" />
        </div>

        {/* Organic Shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 organic-shape-1 animate-float" />
        <div className="absolute bottom-32 right-20 w-96 h-96 organic-shape-2" style={{ animationDelay: "2s" }} />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-accent font-medium tracking-wider uppercase mb-4"
            >
              Welcome to Lishaa Agro Health
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-cream mb-6 leading-tight"
            >
              Nourishing Nature,
              <br />
              <span className="text-gradient-gold">Enriching Lives</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-cream/80 text-lg md:text-xl max-w-2xl mx-auto mb-10"
            >
              Pioneering sustainable health solutions through nature-inspired
              innovation. Discover the power of organic wellness.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/products">
                <Button variant="gold" size="xl">
                  Explore Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline-hero" size="xl">
                  Our Story
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-cream/60"
            >
              <ChevronDown className="h-8 w-8" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section py-16 bg-gradient-card border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="stat-item text-center"
              >
                <p className="font-display text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </p>
                <p className="text-muted-foreground text-sm tracking-wider uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full leaf-pattern opacity-50" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-accent font-medium tracking-wider uppercase mb-4">
              What We Offer
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
              Discover Our Excellence
            </h2>
            <div className="section-divider mt-6" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card group relative rounded-3xl overflow-hidden bg-gradient-card shadow-card hover:shadow-elevated transition-all duration-500"
              >
                <div className="absolute inset-0">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-card/90 to-card/70" />
                </div>
                <div className="relative p-8 md:p-12">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {feature.description}
                  </p>
                  <Link
                    to={
                      index === 0
                        ? "/products"
                        : index === 1
                        ? "/research"
                        : index === 2
                        ? "/about"
                        : "/dealership"
                    }
                    className="inline-flex items-center text-primary font-medium hover:text-accent transition-colors"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 bg-gradient-nature">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <img
                  src={founderImg}
                  alt="Dr. Manjunath N.S - Founder"
                  className="rounded-3xl shadow-elevated w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-accent text-foreground px-6 py-4 rounded-2xl shadow-gold">
                  <p className="font-display text-2xl font-bold">25+</p>
                  <p className="text-sm">Years of Excellence</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-accent font-medium tracking-wider uppercase mb-4">
                About Our Founder
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Dr. Manjunath N.S
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                A visionary leader with over 25 years of experience in agricultural 
                biotechnology and natural health research. Dr. Manjunath founded 
                Lishaa Agro Health with a mission to bring the healing power of 
                nature to every household.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                His pioneering work in sustainable agriculture and herbal medicine 
                has earned numerous accolades and continues to drive innovation 
                in the industry.
              </p>
              <Link to="/leadership">
                <Button variant="hero" size="lg">
                  Meet Our Leader
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-secondary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 organic-shape-1 opacity-5" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-accent font-medium tracking-wider uppercase mb-4">
              Testimonials
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-cream mb-4">
              What People Say
            </h2>
            <div className="section-divider mt-6" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-cream/5 backdrop-blur-sm border border-cream/10 rounded-3xl p-8 hover:bg-cream/10 transition-colors"
              >
                <Quote className="h-10 w-10 text-accent mb-6" />
                <p className="text-cream/90 leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-display font-semibold text-cream">
                    {testimonial.author}
                  </p>
                  <p className="text-cream/60 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
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
            className="bg-gradient-hero rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 organic-shape-2 opacity-10" />
            <div className="relative z-10">
              <h2 className="font-display text-3xl md:text-5xl font-bold text-cream mb-6">
                Ready to Transform Your Health?
              </h2>
              <p className="text-cream/80 text-lg max-w-2xl mx-auto mb-10">
                Join thousands who have discovered the power of natural wellness.
                Explore our products or become a partner today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/products">
                  <Button variant="gold" size="xl">
                    Shop Products
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/dealership">
                  <Button variant="outline-hero" size="xl">
                    Become a Dealer
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
