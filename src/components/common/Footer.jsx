import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiArrowRight, 
  FiFacebook, 
  FiTwitter, 
  FiInstagram, 
  FiLinkedin, 
  FiYoutube,
  FiSend,
  FiChevronRight,
  FiCheckCircle,
  FiArrowUp
} from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";
import Container from "./Container";
import logo from "../../assets/images/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    { name: "Social Media Management", path: "/services#social-media" },
    { name: "SEO & Content Marketing", path: "/services#seo" },
    { name: "E-commerce Growth", path: "/services#ecommerce" },
    { name: "AI-Powered Marketing", path: "/services#ai-marketing" },
    { name: "Web Development", path: "/services#web-dev" },
  ];

  const company = [
    { name: "About Us", path: "/about" },
    { name: "Our Team", path: "/about#team" },
    { name: "Careers", path: "/careers" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Partnerships", path: "/partnerships" },
  ];

  const socialLinks = [
    { icon: FiFacebook, url: "https://facebook.com", color: "hover:bg-blue-600" },
    { icon: FiTwitter, url: "https://twitter.com", color: "hover:bg-blue-400" },
    { icon: FiInstagram, url: "https://instagram.com", color: "hover:bg-pink-600" },
    { icon: FiLinkedin, url: "https://linkedin.com", color: "hover:bg-blue-700" },
    { icon: FiYoutube, url: "https://youtube.com", color: "hover:bg-red-600" },
  ];

  const handleNavigation = (path) => {
    if (location.pathname === "/" && path.startsWith("#")) {
      const sectionId = path.replace("#", "");
      const el = document.getElementById(sectionId);
      if (el) {
        const yOffset = -80;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    } else if (path.startsWith("/")) {
      navigate(path);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      console.log("Subscribed with email:", email);
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const handleGetInTouch = () => {
    navigate("/contact");
  };

  return (
    <footer className="relative bg-[#0a0f1c] pt-16 pb-8 overflow-hidden border-t border-white/10">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[80px] rounded-full"></div>
      </div>

      <Container>
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12 relative z-10">
          
          {/* Branding Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={logo} 
                alt="IntefAI Logo" 
                className="h-10 w-auto"
              />
              
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              AI-powered digital solutions that drive real business growth and measurable results.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-2 pt-2">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-9 w-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-cyan-500 hover:border-cyan-500 transition-all duration-300"
                  >
                    <Icon className="text-sm" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <button
                    onClick={() => handleNavigation(link.path)}
                    className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.path}>
                  <button
                    onClick={() => handleNavigation(service.path)}
                    className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-200"
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Contact */}
          <div className="space-y-4">
            <h4 className="text-white font-bold mb-2 text-sm uppercase tracking-wider">Stay Updated</h4>
            
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-all"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 h-8 w-8 rounded-lg bg-cyan-500 hover:bg-cyan-600 flex items-center justify-center transition-all"
                >
                  <FiSend className="text-white text-sm" />
                </button>
              </div>
              {subscribed && (
                <div className="flex items-center gap-2 text-green-400 text-xs">
                  <FiCheckCircle />
                  Subscribed successfully!
                </div>
              )}
            </form>

            <div className="pt-2">
              <div className="flex items-center gap-3 text-gray-300 text-sm mb-2">
                <FiPhone className="text-cyan-400" />
                <span>+91-93406-88440</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 text-sm">
                <FiMail className="text-cyan-400" />
                <span>solution@intefai.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-xs text-gray-500">
            <p>© {currentYear} IntefAI. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <button 
                onClick={() => handleNavigation("/privacy")}
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => handleNavigation("/terms")}
                className="hover:text-white transition-colors"
              >
                Terms
              </button>
              <button 
                onClick={() => handleNavigation("/cookies")}
                className="hover:text-white transition-colors"
              >
                Cookies
              </button>
            </div>
          </div>

          <div className="text-xs text-gray-500">
            Made with ❤️ in India
          </div>
        </div>
      </Container>

      {/* Back to Top Button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        whileHover={{ y: -3 }}
        className="fixed bottom-6 right-6 h-10 w-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white shadow-lg hover:bg-cyan-500 hover:border-cyan-500 flex items-center justify-center z-50 transition-all"
      >
        <FiArrowUp className="text-sm" />
      </motion.button>
    </footer>
  );
};

export default Footer;