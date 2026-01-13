import { motion, Variants } from "framer-motion";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight, Heart, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from "@/assets/lishaa logo (1).png";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Welcome to the Family! 🌿",
      description: "You've successfully subscribed to our wellness newsletter.",
      duration: 5000,
    });
  };

  const handleComingSoon = (e: React.MouseEvent, title: string) => {
    e.preventDefault();
    toast({
      title: "Coming Soon ✨",
      description: `The ${title} page is currently under construction. Stay tuned!`,
      duration: 3000,
    });
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
  };

  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Linkedin, href: "#" },
  ];

  return (
    <footer className="relative bg-[#0d2e20] text-white pt-32 pb-12 border-t border-white/10">
      {/* Background Wrapper with Overflow Hidden */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* 3D Texture & ambient light */}
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* Glow Effects */}
        <div className="absolute -top-[30%] -left-[10%] w-[900px] h-[900px] bg-emerald-500/10 rounded-full blur-[180px] opacity-30 animate-pulse" />
        <div className="absolute top-[40%] -right-[10%] w-[600px] h-[600px] bg-lime-400/5 rounded-full blur-[150px] opacity-20" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-20">

        {/* Floating Newsletter Card - Glass & Green */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative -mt-48 mb-20 bg-gradient-to-br from-emerald-900/40 to-emerald-950/40 backdrop-blur-md rounded-[2.5rem] p-8 md:p-14 border border-white/10 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.3)] overflow-hidden group"
        >
          {/* Shine Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

          <div className="grid lg:grid-cols-2 gap-10 items-center relative z-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-emerald-500/20 rounded-full border border-emerald-500/20">
                  <Leaf className="h-5 w-5 text-emerald-400" />
                </div>
                <span className="text-emerald-400 font-bold tracking-widest uppercase text-xs">Newsletter</span>
              </div>
              <h3 className="font-display text-3xl md:text-5xl font-bold mb-4 text-white leading-tight">
                Join Our Wellness Circle
              </h3>
              <p className="text-white/70 text-lg font-light max-w-md leading-relaxed">
                Connect with nature’s best. Get exclusive offers and holistic health tips delivered to you.
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="bg-black/20 p-2 rounded-full flex items-center border border-white/10 focus-within:bg-black/30 focus-within:border-emerald-500/50 transition-all shadow-inner relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-transparent opacity-0 focus-within:opacity-100 transition-opacity pointer-events-none" />
              <Input
                required
                type="email"
                placeholder="Enter your email address..."
                className="bg-transparent border-none text-white placeholder:text-white/40 h-14 rounded-full px-6 focus-visible:ring-0 text-lg shadow-none z-10"
              />
              <Button type="submit" size="icon" className="h-14 w-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shrink-0 shadow-lg hover:scale-105 transition-all duration-300 z-10">
                <ArrowRight className="h-6 w-6" />
              </Button>
            </form>
          </div>
        </motion.div>

        {/* Footer Links Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16 pt-8"
        >
          {/* Brand Column */}
          <motion.div variants={itemVariants} className="lg:col-span-4 space-y-6">
            <Link to="/" className="flex items-center gap-4 group w-fit">
              <div className="w-16 h-16 bg-white/5 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-white/10 transition-colors">
                <img src={logo} alt="Lishaa Logo" className="h-10 w-auto brightness-200 contrast-0 grayscale sm:grayscale-0 sm:contrast-100 sm:brightness-100" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-2xl font-bold tracking-wide text-white">LISHAA</span>
                <span className="text-[10px] tracking-[0.4em] text-emerald-400 uppercase font-bold">Agro Health</span>
              </div>
            </Link>
            <p className="text-white/60 leading-relaxed font-light text-base max-w-sm">
              Crafting a legacy of purity by bridging ancient herbal wisdom with modern scientific innovation for a healthier tomorrow.
            </p>
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  onClick={(e) => handleComingSoon(e, 'Social Media')}
                  className="w-12 h-12 rounded-full bg-white/5 hover:bg-emerald-500 hover:text-white text-white/70 flex items-center justify-center transition-all duration-300 border border-white/10 hover:-translate-y-1 hover:shadow-[0_4px_20px_-5px_rgba(16,185,129,0.4)] group cursor-pointer"
                >
                  <social.icon className="h-5 w-5 opacity-80 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Links Columns */}
          <motion.div variants={itemVariants} className="lg:col-span-2 lg:col-start-6 space-y-6">
            <h4 className="font-bold text-white relative inline-block text-lg font-display">
              Explore
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-emerald-500 rounded-full" />
            </h4>
            <ul className="space-y-3">
              <li key="Home">
                <Link to="/" className="text-white/60 hover:text-emerald-400 transition-colors flex items-center gap-2 group text-sm font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 scale-0 group-hover:scale-100 transition-transform" />
                  <span className="group-hover:translate-x-1 transition-transform">Home</span>
                </Link>
              </li>
              <li key="Products">
                <Link to="/products" className="text-white/60 hover:text-emerald-400 transition-colors flex items-center gap-2 group text-sm font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 scale-0 group-hover:scale-100 transition-transform" />
                  <span className="group-hover:translate-x-1 transition-transform">Products</span>
                </Link>
              </li>
              {['Leadership', 'Dealership'].map((item) => (
                <li key={item}>
                  <a href="#" onClick={(e) => handleComingSoon(e, item)} className="text-white/60 hover:text-emerald-400 transition-colors flex items-center gap-2 group text-sm font-medium cursor-pointer">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 scale-0 group-hover:scale-100 transition-transform" />
                    <span className="group-hover:translate-x-1 transition-transform">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="lg:col-span-3 space-y-6">
            <h4 className="font-bold text-white relative inline-block text-lg font-display">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-emerald-500 rounded-full" />
            </h4>
            <ul className="space-y-5">
              <li className="flex gap-4 text-white/60 group items-start">
                <div className="p-2 bg-emerald-500/10 rounded-full shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-colors text-emerald-400 border border-emerald-500/20">
                  <MapPin className="h-4 w-4" />
                </div>
                <div className="flex flex-col group-hover:text-white transition-colors">
                  <span className="text-sm font-bold text-emerald-400">LISHAA AGRO HEALTH</span>
                  <span className="text-sm">SUDHARMA #1652, 'C' block,</span>
                  <span className="text-sm">J.H. Patel Badavane, Davanagere-577004</span>
                </div>
              </li>
              <li className="flex gap-4 text-white/60 group items-center">
                <a href="tel:+918762221973" className="flex gap-4 items-center hover:text-white transition-colors w-full">
                  <div className="p-2 bg-emerald-500/10 rounded-full shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-colors text-emerald-400 border border-emerald-500/20">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-emerald-400 uppercase tracking-wider mb-1">Proprietor</span>
                    <span className="text-base font-semibold text-white">Dr. Manjunath N.S.</span>
                    <span className="text-sm text-white/70">87622 21973</span>
                  </div>
                </a>
              </li>
              <li className="flex gap-4 text-white/60 group items-center">
                <a href="mailto:lishaaagrohealth@gmail.com" className="flex gap-4 items-center hover:text-white transition-colors w-full">
                  <div className="p-2 bg-emerald-500/10 rounded-full shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-colors text-emerald-400 border border-emerald-500/20">
                    <Mail className="h-4 w-4" />
                  </div>
                  <span className="text-sm">lishaaagrohealth@gmail.com</span>
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="lg:col-span-2 space-y-6">
            <h4 className="font-bold text-white relative inline-block text-lg font-display">
              Legal
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-emerald-500 rounded-full" />
            </h4>
            <ul className="space-y-3">
              {['Privacy Policy', 'Terms of Service', 'Return Policy'].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-white/60 hover:text-emerald-400 transition-colors hover:translate-x-1 inline-block text-sm font-medium">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/10 text-sm text-white/40 font-light"
        >
          <p>&copy; {new Date().getFullYear()} Lishaa Agro Health. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>Made with</span>
            <Heart className="h-3 w-3 text-red-500 fill-current animate-pulse opacity-70" />
            <span>for a Healthier World</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;