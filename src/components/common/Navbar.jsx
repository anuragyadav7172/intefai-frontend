import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import Container from "./Container";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Social", path: "/social" }, 
  { name: "Careers", path: "/careers" },
  { name: "Contact", path: "/contact" },
];


const Navbar = () => {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 backdrop-blur-md bg-white/5 border-b border-white/10"
    >
      <Container className="flex h-16 items-center justify-between">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-xl font-semibold tracking-wide text-primary"
          aria-label="IntefAI Home"
        >
          IntefAI
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-sm transition-colors ${
                  isActive
                    ? "text-primary"
                    : "text-white/70 hover:text-primary"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      </Container>
    </motion.header>
  );
};

export default Navbar;
