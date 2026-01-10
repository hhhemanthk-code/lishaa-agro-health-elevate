import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  TrendingUp, 
  Users, 
  Package, 
  Headphones,
  Award,
  BarChart,
  Shield,
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const benefits = [
  {
    icon: TrendingUp,
    title: "High Growth Potential",
    description: "Join India's fastest-growing natural health market with exceptional profit margins.",
  },
  {
    icon: Package,
    title: "Premium Products",
    description: "Access to our complete range of research-backed herbal and organic products.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Comprehensive training, marketing materials, and ongoing business support.",
  },
  {
    icon: Award,
    title: "Brand Recognition",
    description: "Leverage our established reputation and trusted brand identity.",
  },
  {
    icon: BarChart,
    title: "Flexible Investment",
    description: "Multiple partnership models to suit different business scales and goals.",
  },
  {
    icon: Shield,
    title: "Exclusive Territory",
    description: "Protected territories to ensure sustainable business growth.",
  },
];

const dealershipTiers = [
  {
    name: "District Dealer",
    investment: "₹2,00,000",
    features: [
      "Exclusive district rights",
      "Starter inventory package",
      "Marketing kit included",
      "Basic training program",
      "Monthly sales support",
    ],
  },
  {
    name: "Regional Distributor",
    investment: "₹5,00,000",
    features: [
      "Multi-district territory",
      "Extended inventory package",
      "Advanced marketing materials",
      "Comprehensive training",
      "Dedicated account manager",
      "Priority product access",
    ],
    featured: true,
  },
  {
    name: "State Partner",
    investment: "₹15,00,000",
    features: [
      "Full state exclusivity",
      "Complete product catalog",
      "Custom marketing solutions",
      "Leadership training program",
      "Direct leadership access",
      "Equity partnership options",
    ],
  },
];

const testimonials = [
  {
    quote: "Partnering with Lishaa has been transformative for my business. Their support and product quality are unmatched.",
    author: "Suresh Kumar",
    role: "Regional Distributor, Kerala",
    years: "5 years",
  },
  {
    quote: "The training and marketing support helped me build a thriving network in just 2 years.",
    author: "Meera Patel",
    role: "District Dealer, Gujarat",
    years: "2 years",
  },
];

const Dealership = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 organic-shape-2 opacity-10" />
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-accent font-medium tracking-wider uppercase mb-4">
              Business Opportunity
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-cream mb-6">
              Grow With
              <span className="text-gradient-gold"> Lishaa</span>
            </h1>
            <p className="text-cream/80 text-lg leading-relaxed mb-8">
              Join our thriving network of dealers and distributors. Partner with 
              a brand that's committed to your success in the booming natural 
              health industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="gold" size="xl">
                  Apply Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline-hero" size="xl">
                Download Brochure
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-accent">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "500+", label: "Active Dealers" },
              { value: "25+", label: "States Covered" },
              { value: "40%", label: "Average Margins" },
              { value: "95%", label: "Partner Retention" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <p className="font-display text-3xl md:text-4xl font-bold text-foreground mb-1">
                  {stat.value}
                </p>
                <p className="text-foreground/70 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Why Partner With Us
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
              Partnership Benefits
            </h2>
            <div className="section-divider mt-6" />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-card rounded-3xl p-8 shadow-card hover:shadow-elevated transition-all duration-500 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dealership Tiers */}
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
              Partnership Models
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
              Choose Your Level
            </h2>
            <div className="section-divider mt-6" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {dealershipTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-3xl p-8 ${
                  tier.featured
                    ? "bg-gradient-hero text-cream shadow-elevated scale-105"
                    : "bg-card shadow-card"
                }`}
              >
                {tier.featured && (
                  <span className="inline-block px-4 py-1 bg-accent text-foreground text-xs font-bold rounded-full mb-4">
                    MOST POPULAR
                  </span>
                )}
                <h3 className={`font-display text-2xl font-bold mb-2 ${
                  tier.featured ? "text-cream" : "text-foreground"
                }`}>
                  {tier.name}
                </h3>
                <p className={`text-3xl font-bold mb-6 ${
                  tier.featured ? "text-accent" : "text-primary"
                }`}>
                  {tier.investment}
                  <span className={`text-sm font-normal ml-2 ${
                    tier.featured ? "text-cream/60" : "text-muted-foreground"
                  }`}>
                    investment
                  </span>
                </p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className={`h-5 w-5 shrink-0 mt-0.5 ${
                        tier.featured ? "text-accent" : "text-primary"
                      }`} />
                      <span className={tier.featured ? "text-cream/90" : "text-muted-foreground"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact">
                  <Button
                    variant={tier.featured ? "gold" : "hero"}
                    className="w-full"
                    size="lg"
                  >
                    Get Started
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-accent font-medium tracking-wider uppercase mb-4">
              Success Stories
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-cream mb-4">
              Partner Testimonials
            </h2>
            <div className="section-divider mt-6" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-cream/5 backdrop-blur-sm border border-cream/10 rounded-3xl p-8"
              >
                <p className="text-cream/90 leading-relaxed mb-6 italic text-lg">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <Users className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-display font-semibold text-cream">
                      {testimonial.author}
                    </p>
                    <p className="text-cream/60 text-sm">{testimonial.role}</p>
                    <p className="text-accent text-sm">{testimonial.years} partnership</p>
                  </div>
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
            className="bg-gradient-hero rounded-3xl p-12 md:p-16 text-center"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-cream mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-cream/80 text-lg max-w-2xl mx-auto mb-10">
              Take the first step towards building a successful business in 
              the natural health industry. Our team is ready to guide you 
              through the partnership process.
            </p>
            <Link to="/contact">
              <Button variant="gold" size="xl">
                Contact Us Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Dealership;
