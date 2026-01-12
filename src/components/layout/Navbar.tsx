import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/lishaa logo (1).png";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = location.pathname === "/";
  const isProducts = location.pathname === "/products";
  const isContact = location.pathname === "/contact";
  const isTransparentPage = isHome || isProducts || isContact;

  // Dynamic text color based on scroll and page
  const textColorClass = isTransparentPage && !isScrolled
    ? "text-white hover:text-emerald-200"
    : "text-foreground hover:text-primary";

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? "bg-white/90 backdrop-blur-md shadow-sm py-3 border-b border-gray-100"
        : "bg-transparent py-6"
        }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <motion.img
              whileHover={{ scale: 1.08, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              src={logo}
              alt="Lishaa Agro Health"
              className="h-14 w-auto drop-shadow-md transition-all duration-300 group-hover:opacity-90"
            />
            <div className="hidden sm:block">
              <motion.p
                className={`font-display text-xl font-bold transition-colors duration-300 ${isTransparentPage && !isScrolled ? "text-white drop-shadow-sm" : "text-primary"
                  }`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                LISHAA
              </motion.p>
              <motion.p
                className={`text-xs tracking-widest font-medium transition-colors duration-300 ${isTransparentPage && !isScrolled ? "text-white/90" : "text-muted-foreground"
                  }`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                AGRO HEALTH
              </motion.p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item, index) => (
              <Link key={item.path} to={item.path}>
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="relative px-5 py-2 group"
                >
                  <span className={`text-sm font-medium transition-colors duration-300 relative z-10 ${location.pathname === item.path
                    ? (isTransparentPage && !isScrolled ? "text-accent font-bold" : "text-primary font-bold")
                    : textColorClass
                    }`}>
                    {item.name}
                  </span>

                  {/* Hover Underline Animation */}
                  <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full rounded-full ${location.pathname === item.path ? "w-1/2" : ""
                    }`} />
                </motion.div>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link to="/contact">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Button
                  className={`px-6 py-2.5 rounded-full font-semibold shadow-lg transition-all duration-300 ${isTransparentPage && !isScrolled
                    ? "bg-accent hover:bg-accent/90 text-primary-foreground border-none"
                    : "bg-primary hover:bg-primary/90 text-white"
                    }`}
                >
                  Get in Touch
                </Button>
              </motion.div>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`lg:hidden p-3 rounded-full transition-all duration-300 group ${isTransparentPage && !isScrolled ? "hover:bg-white/10" : "hover:bg-black/5"
              }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 90 }}
                transition={{ duration: 0.3 }}
              >
                <X className={`h-6 w-6 group-hover:scale-110 ${isTransparentPage && !isScrolled ? "text-white" : "text-foreground"
                  }`} />
              </motion.div>
            ) : (
              <Menu className={`h-6 w-6 group-hover:scale-110 ${isTransparentPage && !isScrolled ? "text-white" : "text-foreground"
                }`} />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? "auto" : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
            y: isMobileMenuOpen ? 0 : -20
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="lg:hidden overflow-hidden mt-2"
        >
          <div className="py-4 space-y-3 bg-white/95 backdrop-blur-xl rounded-2xl border border-border/30 shadow-xl p-4">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`w-full px-4 py-3 rounded-xl font-medium transition-all duration-300 ${location.pathname === item.path
                    ? "text-primary bg-primary/10"
                    : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                    }`}
                >
                  {item.name}
                </motion.div>
              </Link>
            ))}
            <div className="pt-4">
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button
                  className="w-full rounded-full font-semibold py-6 bg-primary text-white hover:bg-primary/90"
                >
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Navbar;
