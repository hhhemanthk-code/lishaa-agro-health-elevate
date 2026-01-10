import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  Leaf
} from "lucide-react";
import logo from "@/assets/lishaa-logo.png";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", path: "/about" },
    { name: "Our Products", path: "/products" },
    { name: "Research", path: "/research" },
    { name: "Leadership", path: "/leadership" },
    { name: "Dealership", path: "/dealership" },
    { name: "Contact", path: "/contact" },
  ];

  const products = [
    "Herbal Supplements",
    "Organic Health Solutions",
    "Natural Wellness",
    "Agricultural Products",
    "Bio-Fertilizers",
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Organic shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 organic-shape-1 opacity-5" />
      <div className="absolute bottom-0 left-0 w-64 h-64 organic-shape-2 opacity-5" />

      <div className="container mx-auto px-4 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Lishaa Agro Health" className="h-14 w-auto" />
              <div>
                <p className="font-display text-xl font-semibold text-cream">
                  LISHAA
                </p>
                <p className="text-xs tracking-wider text-cream/70">
                  AGRO HEALTH
                </p>
              </div>
            </Link>
            <p className="text-cream/80 text-sm leading-relaxed mb-6">
              Nourishing Nature, Enriching Lives. Pioneering sustainable health 
              solutions through nature-inspired innovation.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-accent transition-colors"
                >
                  <Icon className="h-4 w-4 text-cream" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-display text-lg font-semibold text-cream mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-cream/70 hover:text-accent transition-colors text-sm flex items-center gap-2"
                  >
                    <Leaf className="h-3 w-3" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Products */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-display text-lg font-semibold text-cream mb-6">
              Our Products
            </h4>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product}>
                  <span className="text-cream/70 text-sm flex items-center gap-2">
                    <Leaf className="h-3 w-3" />
                    {product}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-display text-lg font-semibold text-cream mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-cream/70 text-sm">
                  Karnataka, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="text-cream/70 text-sm hover:text-accent transition-colors"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <a
                  href="mailto:info@lishaaagrohealth.com"
                  className="text-cream/70 text-sm hover:text-accent transition-colors"
                >
                  info@lishaaagrohealth.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-cream/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-cream/60 text-sm">
            © {new Date().getFullYear()} Lishaa Agro Health. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-cream/60 text-sm hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-cream/60 text-sm hover:text-accent transition-colors">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
