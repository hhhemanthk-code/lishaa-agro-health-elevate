import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, ChevronRight, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/lishaa logo (1).png";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();

  // Scroll effect logic
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = location.pathname === "/";
  // Determine if we are on a page that needs a transparent header initially
  const isTransparentPage = ["/", "/about", "/contact", "/products"].includes(location.pathname);

  // Dynamic Styles
  const navbarBackground = isScrolled
    ? "bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100/50"
    : "bg-transparent";

  const textColor = isTransparentPage && !isScrolled
    ? "text-white"
    : "text-gray-900";

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${isScrolled ? "py-3" : "py-5"} ${navbarBackground}`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <nav className="flex items-center justify-between">
            {/* Logo Section */}
            <Link to="/" className="flex items-center gap-3 group relative z-50">
              <motion.div
                whileHover={{ rotate: 5, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-emerald-400/30 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-100/50 relative z-10 overflow-hidden">
                  <img
                    src={logo}
                    alt="Lishaa Logo"
                    className="h-14 md:h-[4.5rem] w-auto object-contain drop-shadow-sm"
                  />
                </div>
              </motion.div>
              <div className="hidden sm:block">
                <p className={`font-display text-xl font-bold tracking-tight transition-colors duration-300 ${textColor}`}>
                  LISHAA
                </p>
                <p className={`text-[10px] tracking-[0.3em] font-medium uppercase transition-colors duration-300 ${isTransparentPage && !isScrolled ? "text-white/80" : "text-emerald-600"}`}>
                  Agro Health
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2 p-1 rounded-full bg-white/5 backdrop-blur-[2px] border border-white/10 shadow-sm">
              {navItems.map((item) => (
                <Link key={item.path} to={item.path} className="relative">
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-emerald-500 rounded-full shadow-lg shadow-emerald-500/20"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span
                    className={`relative z-10 px-6 py-2.5 rounded-full text-sm font-medium transition-colors duration-300 block ${location.pathname === item.path
                      ? "text-white"
                      : isTransparentPage && !isScrolled
                        ? "text-white/90 hover:bg-white/10"
                        : "text-gray-600 hover:bg-gray-100/50"
                      }`}
                  >
                    {item.name}
                  </span>
                </Link>
              ))}
            </div>

            {/* CTA & Mobile Toggle */}
            <div className="flex items-center gap-4">
              <div className="hidden lg:block relative group">
                <Link to="/contact">
                  <Button
                    className={`rounded-full px-6 h-11 font-semibold transition-all duration-300 shadow-lg ${isTransparentPage && !isScrolled
                      ? "bg-white text-emerald-900 hover:bg-emerald-50"
                      : "bg-emerald-600 text-white hover:bg-emerald-700"
                      }`}
                  >
                    <span>Get in Touch</span>
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>

              {/* Mobile Toggle Button */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden p-2 rounded-full backdrop-blur-md transition-colors ${isTransparentPage && !isScrolled ? "bg-white/10 text-white" : "bg-black/5 text-black"}`}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Premium Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-emerald-950/95 backdrop-blur-xl lg:hidden flex flex-col justify-center px-8"
          >
            {/* Background Decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px]" />
              <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-lime-400/5 rounded-full blur-[80px]" />
            </div>

            <div className="relative z-10 flex flex-col gap-8 max-w-sm mx-auto w-full">
              {/* Navigation Links */}
              <div className="flex flex-col gap-4">
                {navItems.map((item, idx) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="group"
                  >
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + idx * 0.1, duration: 0.5, type: "spring" }}
                      className="flex items-center justify-between"
                    >
                      <span className={`font-display text-4xl font-bold tracking-tight transition-all duration-300 ${location.pathname === item.path ? "text-emerald-400 translate-x-4" : "text-white/80 group-hover:text-white"}`}>
                        {item.name}
                      </span>
                      {location.pathname === item.path && <Leaf className="w-6 h-6 text-emerald-400 animate-pulse" />}
                    </motion.div>
                  </Link>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="pt-8 border-t border-white/10"
              >
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full h-14 bg-white text-emerald-950 hover:bg-emerald-50 rounded-2xl text-lg font-bold shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)]">
                    Get in Touch <ChevronRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>

                <div className="mt-8 text-center">
                  <p className="text-white/40 text-sm font-medium tracking-wider uppercase mb-2">Connect with us</p>
                  <div className="flex justify-center gap-6">
                    {['Instagram', 'Twitter', 'Facebook'].map((social, i) => (
                      <span key={i} className="text-white/60 hover:text-emerald-400 cursor-pointer text-xs uppercase tracking-widest transition-colors font-bold">
                        {social}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
