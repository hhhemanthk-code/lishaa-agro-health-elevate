import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Award, 
  BookOpen, 
  Briefcase, 
  GraduationCap,
  Lightbulb,
  Trophy,
  Users,
  FileText
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import founderImg from "@/assets/founder-portrait.jpg";

gsap.registerPlugin(ScrollTrigger);

const timeline = [
  {
    year: "1998",
    title: "Foundation",
    description: "Established Lishaa Agro Health with a vision to revolutionize natural wellness.",
  },
  {
    year: "2002",
    title: "Research Breakthrough",
    description: "Developed patented herbal extraction technology for enhanced bioavailability.",
  },
  {
    year: "2008",
    title: "National Recognition",
    description: "Received National Award for Excellence in Agricultural Innovation.",
  },
  {
    year: "2012",
    title: "Expansion",
    description: "Launched pan-India dealer network reaching over 500 partners.",
  },
  {
    year: "2018",
    title: "Sustainability Initiative",
    description: "Pioneered carbon-neutral manufacturing in the herbal products industry.",
  },
  {
    year: "2023",
    title: "Digital Transformation",
    description: "Launched e-commerce platform bringing products to customers nationwide.",
  },
];

const awards = [
  "National Award for Excellence in Agricultural Innovation (2008)",
  "Best Herbal Product Manufacturer Award (2012)",
  "Green Business Leadership Award (2015)",
  "Outstanding Contribution to Biotechnology (2018)",
  "Sustainability Champion Award (2021)",
  "Industry Pioneer Recognition (2023)",
];

const researchProjects = [
  {
    title: "Herbal Extraction Technology",
    description: "Patented methods for extracting active compounds from medicinal plants with enhanced bioavailability.",
  },
  {
    title: "Sustainable Agriculture",
    description: "Research on organic farming practices and bio-fertilizers for improved crop yield.",
  },
  {
    title: "Natural Product Development",
    description: "Innovation in formulating effective herbal supplements and health products.",
  },
  {
    title: "Environmental Biotechnology",
    description: "Development of eco-friendly solutions for agricultural waste management.",
  },
];

const Leadership = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".career-item",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".award-item",
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.1,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".awards-section",
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
                Leadership
              </p>
              <h1 className="font-display text-4xl md:text-6xl font-bold text-cream mb-6">
                Dr. Manjunath N.S
              </h1>
              <p className="text-cream/80 text-xl mb-2">
                Chairman & Chief Executive Officer
              </p>
              <p className="text-cream/60 mb-8">
                Lishaa Agro Health Private Limited
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-cream/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-cream text-sm">25+ Years Experience</span>
                </div>
                <div className="bg-cream/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-cream text-sm">Ph.D. Biotechnology</span>
                </div>
                <div className="bg-cream/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-cream text-sm">6+ Patents</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src={founderImg}
                alt="Dr. Manjunath N.S"
                className="rounded-3xl shadow-elevated w-full max-w-md mx-auto lg:ml-auto"
              />
              <div className="absolute -bottom-6 -left-6 lg:left-auto lg:-right-6 bg-accent text-foreground px-6 py-4 rounded-2xl shadow-gold">
                <p className="font-display text-2xl font-bold">6+</p>
                <p className="text-sm">Patents Held</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <BookOpen className="h-7 w-7 text-primary" />
                </div>
                <h2 className="font-display text-3xl font-bold text-foreground">
                  Biography
                </h2>
              </div>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Dr. Manjunath N.S is a distinguished agricultural scientist, entrepreneur, 
                  and visionary leader who has dedicated his career to advancing natural 
                  health and sustainable agriculture. With over 25 years of experience in 
                  biotechnology and herbal product development, he has established himself 
                  as a pioneer in India's natural wellness industry.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Born and raised in Karnataka, Dr. Manjunath developed an early passion 
                  for agriculture and traditional medicine. He pursued his doctoral studies 
                  in Biotechnology, focusing on the extraction and formulation of bioactive 
                  compounds from medicinal plants. His groundbreaking research led to the 
                  development of several patented technologies that enhance the efficacy 
                  of herbal products.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  In 1998, Dr. Manjunath founded Lishaa Agro Health with a mission to 
                  bring the healing power of nature to every household. Under his 
                  leadership, the company has grown from a small research initiative 
                  into a nationally recognized brand with over 100 products and 500+ 
                  dealer partners across India.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Beyond business, Dr. Manjunath is committed to community development 
                  and environmental sustainability. He actively mentors young entrepreneurs 
                  and researchers, and has established scholarship programs for students 
                  pursuing careers in agricultural sciences.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Career Timeline */}
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
              Career Journey
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
              Key Milestones
            </h2>
            <div className="section-divider mt-6" />
          </motion.div>

          <div ref={timelineRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className="career-item bg-card rounded-3xl p-8 shadow-card hover:shadow-elevated transition-all duration-500"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-bold">{item.year.slice(2)}</span>
                  </div>
                  <span className="text-accent font-semibold">{item.year}</span>
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="awards-section py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-accent font-medium tracking-wider uppercase mb-4">
                Recognition
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-cream mb-6">
                Awards & Honors
              </h2>
              <p className="text-cream/80 leading-relaxed mb-8">
                Dr. Manjunath's contributions to agricultural biotechnology and 
                natural health have been recognized with numerous prestigious 
                awards and honors from industry bodies and government organizations.
              </p>
              <ul className="space-y-4">
                {awards.map((award, index) => (
                  <li key={index} className="award-item flex items-start gap-3">
                    <Trophy className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                    <span className="text-cream/80">{award}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { icon: GraduationCap, label: "Ph.D. Holder", value: "Biotechnology" },
                { icon: FileText, label: "Publications", value: "50+" },
                { icon: Lightbulb, label: "Patents", value: "6+" },
                { icon: Users, label: "Team Size", value: "100+" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-cream/5 backdrop-blur-sm border border-cream/10 rounded-2xl p-6 text-center"
                >
                  <stat.icon className="h-8 w-8 text-accent mx-auto mb-3" />
                  <p className="font-display text-2xl font-bold text-cream mb-1">
                    {stat.value}
                  </p>
                  <p className="text-cream/60 text-sm">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Research Projects */}
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
              Research Focus
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
              Key Research Areas
            </h2>
            <div className="section-divider mt-6" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {researchProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-card rounded-3xl p-8 shadow-card hover:shadow-elevated transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12"
          >
            <Link to="/research">
              <Button variant="hero" size="lg">
                Explore Our Research
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Leadership;
