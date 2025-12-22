import React from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiArrowRight } from "react-icons/fi";
import Container from "./Container";
import logo from "../../assets/images/logo.png";
import { socialLinks } from "../../constants/socialLinks";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Team", id: "team" },
    { name: "Contact", id: "inquiry" },
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const yOffset = -80;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#05070d] pt-24 pb-12 overflow-hidden border-t border-white/5">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* 1. Branding Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">IntefAI</h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Empowering businesses with AI-driven, scalable, and future-ready 
              technology solutions for a seamless digital transformation.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-cyan-500 hover:border-cyan-500 transition-all duration-300"
                  >
                    <Icon className="text-lg" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Navigation</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-cyan-400 text-sm flex items-center group transition-colors"
                  >
                    <FiArrowRight className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Reach Out</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <FiMail className="mt-1 text-cyan-500" />
                <span>solution@intefai.com</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <FiPhone className="mt-1 text-purple-500" />
                <span>+91-93406-88440</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <FiMapPin className="mt-1 text-pink-500" />
                <span>05 Shri Kanha Vihar, Indore, MP</span>
              </li>
            </ul>
          </div>

          {/* 4. Logo Positioning (Top Right of Footer Grid) */}
          <div className="flex flex-col items-center lg:items-end justify-start">
             <div className="relative group">
                <div className="absolute -inset-4 bg-cyan-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition duration-500" />
                <img 
                  src={logo} 
                  alt="IntefAI Logo" 
                  className="h-16 md:h-20 w-auto relative z-10 opacity-80 group-hover:opacity-100 transition-opacity"
                />
             </div>
             <p className="mt-4 text-[10px] font-mono text-gray-600 uppercase tracking-widest text-center lg:text-right">
                Innovating the Future
             </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {currentYear} IntefAI. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs text-gray-600">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;