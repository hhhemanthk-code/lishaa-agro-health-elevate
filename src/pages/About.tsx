import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Heart, Award, Users, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import founderImg from "@/assets/founder-portrait.jpg";
import sustainabilityImg from "@/assets/sustainability.jpg";

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    icon: Heart,
    title: "Integrity",
    description: "Unwavering commitment to quality and ethical practices in everything we do.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "Protecting our planet through eco-friendly and sustainable business practices.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Building strong relationships with farmers, partners, and customers.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Striving for the highest standards in research, products, and service.",
  },
];

const milestones = [
  { year: "1998", event: "Founded with a vision to revolutionize natural health" },
  { year: "2005", event: "Established state-of-the-art research laboratory" },
  { year: "2010", event: "Launched 50+ herbal products nationwide" },
  { year: "2015", event: "Expanded dealer network to 500+ partners" },
  { year: "2020", event: "Pioneered sustainable biotechnology initiatives" },
  { year: "2024", event: "Serving 50,000+ customers across India" },
];

const About = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".timeline-item",
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.2,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".value-card",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".values-section",
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
      <section className="pt-32 pb-20 bg-gradient-nature relative overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 organic-shape-1 animate-float" />
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="text-accent font-medium tracking-wider uppercase mb-4">
              About Us
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
              Our Story of
              <span className="text-gradient-nature"> Natural Excellence</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              For over 25 years, Lishaa Agro Health has been at the forefront of 
              natural health innovation, combining traditional wisdom with modern 
              science to create products that nourish and heal.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-card rounded-3xl p-10 shadow-card"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Our Mission
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                To enhance human health and well-being through sustainable, 
                nature-inspired solutions. We are committed to delivering products 
                of the highest quality that honor both traditional knowledge and 
                scientific innovation, while fostering partnerships that empower 
                communities and protect our planet.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-card rounded-3xl p-10 shadow-card"
            >
              <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-accent" />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Our Vision
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                To become a global leader in natural health and sustainable 
                agriculture, recognized for our unwavering commitment to quality, 
                innovation, and environmental stewardship. We envision a world 
                where natural wellness is accessible to all and where business 
                success is measured by positive impact on people and the planet.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <p className="text-accent font-medium tracking-wider uppercase mb-4">
                Founder & Chairman
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-cream mb-6">
                Dr. Manjunath N.S
              </h2>
              <p className="text-cream/80 leading-relaxed mb-4">
                Dr. Manjunath N.S is a distinguished agricultural scientist and 
                entrepreneur with over 25 years of experience in biotechnology, 
                natural product development, and sustainable agriculture.
              </p>
              <p className="text-cream/80 leading-relaxed mb-4">
                His pioneering research in herbal formulations and organic farming 
                practices has earned him recognition as a thought leader in the 
                natural health industry. Under his visionary leadership, Lishaa 
                Agro Health has grown from a small research initiative into a 
                nationally recognized brand.
              </p>
              <p className="text-cream/80 leading-relaxed mb-8">
                Dr. Manjunath holds multiple patents in biotechnology and has 
                published extensively in peer-reviewed journals. His commitment 
                to community development and environmental sustainability continues 
                to shape the company's values and direction.
              </p>
              <Link to="/leadership">
                <Button variant="gold" size="lg">
                  Full Leadership Profile
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <img
                src={founderImg}
                alt="Dr. Manjunath N.S"
                className="rounded-3xl shadow-elevated w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-accent font-medium tracking-wider uppercase mb-4">
              Our Foundation
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
              Core Values
            </h2>
            <div className="section-divider mt-6" />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="value-card bg-gradient-card rounded-3xl p-8 text-center shadow-card hover:shadow-elevated transition-all duration-500 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-gradient-nature">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-accent font-medium tracking-wider uppercase mb-4">
              Our Journey
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
              Milestones
            </h2>
            <div className="section-divider mt-6" />
          </motion.div>

          <div ref={timelineRef} className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="timeline-item flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm shrink-0">
                    {milestone.year.slice(2)}
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 h-full bg-primary/20 mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <p className="text-accent font-semibold mb-1">{milestone.year}</p>
                  <p className="text-foreground">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-24 bg-background">
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
                alt="Sustainability"
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
                Our Commitment
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Sustainability at Heart
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                At Lishaa Agro Health, sustainability isn't just a buzzword—it's 
                woven into the fabric of everything we do. From sourcing raw 
                materials to packaging our products, we prioritize environmental 
                responsibility.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Organic farming partnerships with local communities",
                  "Eco-friendly packaging and minimal waste production",
                  "Carbon-neutral manufacturing processes",
                  "Investment in renewable energy sources",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Leaf className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/research">
                <Button variant="hero" size="lg">
                  Our Research
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
