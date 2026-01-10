import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  FlaskConical, 
  Microscope, 
  Leaf, 
  Lightbulb,
  Beaker,
  Target,
  TrendingUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import researchImg from "@/assets/research-lab.jpg";
import sustainabilityImg from "@/assets/sustainability.jpg";

gsap.registerPlugin(ScrollTrigger);

const researchAreas = [
  {
    icon: FlaskConical,
    title: "Herbal Extraction Technology",
    description: "Developing advanced extraction methods to maximize the bioavailability and efficacy of active compounds from medicinal plants.",
  },
  {
    icon: Leaf,
    title: "Sustainable Agriculture",
    description: "Research on organic farming practices, bio-fertilizers, and natural pest control for environmentally responsible agriculture.",
  },
  {
    icon: Microscope,
    title: "Natural Product Development",
    description: "Innovating new formulations for herbal supplements and health products through rigorous scientific methodology.",
  },
  {
    icon: Beaker,
    title: "Environmental Biotechnology",
    description: "Developing eco-friendly solutions for agricultural waste management and environmental conservation.",
  },
];

const innovations = [
  {
    title: "Patented Extraction Process",
    description: "Our proprietary cold extraction technology preserves the natural potency of herbal compounds while ensuring maximum bioavailability.",
  },
  {
    title: "Nano-Encapsulation Technology",
    description: "Advanced delivery systems that enhance the absorption and effectiveness of active ingredients in our supplements.",
  },
  {
    title: "Organic Bio-Stimulants",
    description: "Revolutionary formulations that improve crop yield naturally without harmful chemicals or environmental impact.",
  },
  {
    title: "Waste-to-Value Processing",
    description: "Innovative methods to convert agricultural waste into valuable bio-products, promoting circular economy principles.",
  },
];

const stats = [
  { value: "6+", label: "Patents Filed" },
  { value: "50+", label: "Research Publications" },
  { value: "15+", label: "Active Projects" },
  { value: "25", label: "Research Scientists" },
];

const Research = () => {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".research-card",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".innovation-item",
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.15,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".innovations-section",
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
      <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 organic-shape-2 opacity-10" />
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-accent font-medium tracking-wider uppercase mb-4">
                Research & Innovation
              </p>
              <h1 className="font-display text-4xl md:text-6xl font-bold text-cream mb-6">
                Science-Driven
                <span className="text-gradient-gold"> Natural Solutions</span>
              </h1>
              <p className="text-cream/80 text-lg leading-relaxed mb-8">
                Our state-of-the-art research facilities combine traditional 
                knowledge with cutting-edge biotechnology to develop innovative, 
                effective, and sustainable health solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-cream/10 backdrop-blur-sm px-6 py-4 rounded-2xl"
                  >
                    <p className="font-display text-2xl font-bold text-cream">
                      {stat.value}
                    </p>
                    <p className="text-cream/60 text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src={researchImg}
                alt="Research Laboratory"
                className="rounded-3xl shadow-elevated w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-accent font-medium tracking-wider uppercase mb-4">
              Our Focus
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
              Research Areas
            </h2>
            <div className="section-divider mt-6" />
          </motion.div>

          <div ref={cardsRef} className="grid md:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (
              <motion.div
                key={index}
                className="research-card group bg-gradient-card rounded-3xl p-10 shadow-card hover:shadow-elevated transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <area.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                  {area.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainable Biotechnology */}
      <section className="py-24 bg-gradient-nature">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={sustainabilityImg}
                alt="Sustainable Research"
                className="rounded-3xl shadow-elevated w-full"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-accent font-medium tracking-wider uppercase mb-4">
                Sustainable Biotechnology
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Innovation with Responsibility
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                At Lishaa Agro Health, sustainability is at the core of our 
                research philosophy. We believe that scientific innovation must 
                go hand-in-hand with environmental responsibility.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our biotechnology research focuses on developing solutions that 
                not only improve human health but also protect and preserve our 
                natural ecosystem for future generations.
              </p>
              <ul className="space-y-3">
                {[
                  "Zero-waste research processes",
                  "Renewable energy-powered laboratories",
                  "Biodegradable packaging research",
                  "Ecosystem restoration initiatives",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Leaf className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Innovations */}
      <section className="innovations-section py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-accent font-medium tracking-wider uppercase mb-4">
              Breakthrough Technologies
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-cream mb-4">
              Key Innovations
            </h2>
            <div className="section-divider mt-6" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {innovations.map((innovation, index) => (
              <motion.div
                key={index}
                className="innovation-item bg-cream/5 backdrop-blur-sm border border-cream/10 rounded-3xl p-8 hover:bg-cream/10 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center shrink-0">
                    <Lightbulb className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-cream mb-2">
                      {innovation.title}
                    </h3>
                    <p className="text-cream/70 leading-relaxed">
                      {innovation.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Projects Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-accent font-medium tracking-wider uppercase mb-4">
              Ongoing Work
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
              Active Research Projects
            </h2>
            <div className="section-divider mt-6" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Immunity Enhancement Research",
                status: "In Progress",
                description: "Developing next-generation immune-boosting formulations using traditional Ayurvedic herbs.",
              },
              {
                icon: TrendingUp,
                title: "Crop Yield Optimization",
                status: "Phase 2",
                description: "Bio-stimulant research to improve agricultural productivity sustainably.",
              },
              {
                icon: Beaker,
                title: "Bioavailability Studies",
                status: "Clinical Trials",
                description: "Testing novel delivery systems for enhanced nutrient absorption.",
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-card rounded-3xl p-8 shadow-card"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <project.icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="px-3 py-1 bg-accent/20 text-accent text-xs font-medium rounded-full">
                    {project.status}
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
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
            className="bg-gradient-hero rounded-3xl p-12 md:p-16 text-center"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-cream mb-6">
              Collaborate With Us
            </h2>
            <p className="text-cream/80 text-lg max-w-2xl mx-auto mb-10">
              We welcome research partnerships with academic institutions, 
              industry leaders, and innovators who share our vision for 
              sustainable natural health solutions.
            </p>
            <Link to="/contact">
              <Button variant="gold" size="xl">
                Contact Our Research Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Research;
