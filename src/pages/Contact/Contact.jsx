import React, { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiChevronRight,
  FiChevronDown,
  FiCheck,
  FiArrowRight,
  FiUsers,
  FiTarget,
  FiAward,
  FiClock
} from "react-icons/fi";
import { useForm } from "react-hook-form";

// Import your existing SocialSection component
import SocialSection from "@/components/Social/SocialSection";

// 3D Card Component
const ThreeDCard = ({ children, intensity = 8, scale = 1.02, className = "" }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-100, 100], [intensity, -intensity]), {
    stiffness: 300,
    damping: 30
  });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-intensity, intensity]), {
    stiffness: 300,
    damping: 30
  });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className={`perspective-[1000px] ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d"
      }}
      whileHover={{ scale }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {children}
    </motion.div>
  );
};

// Services for dropdown
const services = [
  "AI-Powered Digital Marketing",
  "SEO & Content Strategy",
  "Social Media Management",
  "E-commerce Growth",
  "Website Development",
  "Brand Strategy",
  "Paid Advertising",
  "Analytics & Reporting"
];

// Contact Page Component
const ContactPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 50]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        setMousePosition({
          x: (e.clientX - centerX) / 100,
          y: (e.clientY - centerY) / 100
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const onSubmit = async (data) => {
    console.log("Form submitted:", data);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-[#05070d] via-[#0a0f1c] to-[#0c1120] text-white overflow-hidden">

      {/* ============================================== */}
      {/* HERO SECTION */}
      {/* ============================================== */}

      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <motion.div className="absolute inset-0 overflow-hidden" style={{ y }}>
          <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-cyan-500/10 rounded-full blur-2xl md:blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-purple-500/10 rounded-full blur-2xl md:blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-48 md:h-64 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 blur-2xl md:blur-3xl" />

          {/* Grid Pattern with Mouse Parallax */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
            }}
          />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
          <div className="text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-2.5 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 backdrop-blur-md text-cyan-400 text-sm md:text-base font-bold tracking-wider uppercase mb-6 md:mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Contact IntefAI
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight mb-4 md:mb-6"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
                Let's Build
              </span>
              <br />
              <span className="text-white">Smarter Digital Growth</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed"
            >
              At IntefAI, we're always ready to help businesses grow through AI-powered digital marketing, SEO, social media management, and e-commerce solutions.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <a
                href="#contact-form"
                className="group inline-flex items-center gap-3 px-8 md:px-10 py-3 md:py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-lg md:text-xl hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300"
              >
                Start Your Growth Journey
                <FiChevronRight className="group-hover:translate-x-2 transition-transform text-xl" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================== */}
      {/* CONTACT INFORMATION CARDS */}
      {/* ============================================== */}

      <section className="py-12 md:py-20 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Touch</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
              Our team responds promptly and ensures clear, professional communication.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Phone Card */}
            <ThreeDCard intensity={6}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="relative h-full p-6 md:p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/30 border border-white/10 backdrop-blur-sm group cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <FiPhone className="text-cyan-400 text-2xl md:text-3xl" />
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 flex items-center gap-2">
                    <span>📞</span> Call Us
                  </h3>

                  <p className="text-gray-400 mb-4">Available for business inquiries and consultations</p>

                  <a
                    href="tel:+919340688440"
                    className="inline-flex items-center gap-2 text-cyan-400 font-medium group/link hover:text-cyan-300"
                  >
                    <span className="text-lg md:text-xl font-bold">+91-93406-88440</span>
                    <FiArrowRight className="group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            </ThreeDCard>

            {/* Email Card */}
            <ThreeDCard intensity={6}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative h-full p-6 md:p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/30 border border-white/10 backdrop-blur-sm group cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-600/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <FiMail className="text-purple-400 text-2xl md:text-3xl" />
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 flex items-center gap-2">
                    <span>📧</span> Email Us
                  </h3>

                  <p className="text-gray-400 mb-4">For project discussions, proposals, and general inquiries</p>

                  <a
                    href="mailto:solution@intefai.com"
                    className="inline-flex items-center gap-2 text-purple-400 font-medium group/link hover:text-purple-300"
                  >
                    <span className="text-lg md:text-xl font-bold">solution@intefai.com</span>
                    <FiArrowRight className="group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            </ThreeDCard>

            {/* Address Card */}
            <ThreeDCard intensity={6}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="relative h-full p-6 md:p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/30 border border-white/10 backdrop-blur-sm group cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-gradient-to-br from-emerald-500/20 to-green-600/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <FiMapPin className="text-emerald-400 text-2xl md:text-3xl" />
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 flex items-center gap-2">
                    <span>📍</span> Office Address
                  </h3>

                  <p className="text-gray-400 mb-4">Visit our office for meetings and consultations</p>

                  <div className="text-emerald-400">
                    <p className="font-bold mb-1">IntefAI</p>
                    <p className="text-sm md:text-base">05 Shri Kanha Vihar,</p>
                    <p className="text-sm md:text-base">Indore, Madhya Pradesh, India</p>
                  </div>
                </div>
              </motion.div>
            </ThreeDCard>
          </div>
        </div>
      </section>

      {/* ============================================== */}
      {/* BUSINESS INQUIRY FORM */}
      {/* ============================================== */}

      <section id="contact-form" className="py-12 md:py-20 relative">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Left Content - Improved */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:pr-8"
            >
              <div className="sticky top-24">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
                  Business <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">Inquiry Form</span>
                </h2>

                <p className="text-gray-400 text-lg md:text-xl mb-6 md:mb-8 leading-relaxed">
                  Have a question or want to know how IntefAI works? Submit your inquiry using our contact form, and our team will get back to you within a few business days.
                </p>

                <div className="space-y-4 md:space-y-5">
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <FiCheck className="text-cyan-400" />
                    </div>
                    <p className="text-gray-300">AI-powered digital marketing solutions</p>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <FiCheck className="text-cyan-400" />
                    </div>
                    <p className="text-gray-300">Expert team for SEO, social media, and e-commerce growth</p>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <FiCheck className="text-cyan-400" />
                    </div>
                    <p className="text-gray-300">Transparent communication and fast response</p>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <FiCheck className="text-cyan-400" />
                    </div>
                    <p className="text-gray-300">Trusted by startups, enterprises, and global brands</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Right Content - Form with Fixes */}
            <ThreeDCard intensity={8} scale={1.01}>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/30 border border-white/10 backdrop-blur-xl"
              >
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center mx-auto mb-6">
                      <FiCheck className="text-white text-3xl" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">Thank You!</h3>
                    <p className="text-gray-400">Your inquiry has been submitted. Our team will contact you within 24 hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Full Name *
                        </label>
                        <input
                          {...register("name", {
                            required: "Name is required",
                            minLength: {
                              value: 2,
                              message: "Name must be at least 2 characters"
                            }
                          })}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all"
                          placeholder="John Doe"
                        />
                        {errors.name && (
                          <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "Invalid email address"
                            }
                          })}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all"
                          placeholder="john@company.com"
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          {...register("phone", {
                            required: "Phone number is required",
                            pattern: {
                              value: /^[0-9]{10}$/,
                              message: "Phone number must be exactly 10 digits"
                            },
                            minLength: {
                              value: 10,
                              message: "Phone number must be 10 digits"
                            },
                            maxLength: {
                              value: 10,
                              message: "Phone number must be 10 digits"
                            }
                          })}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all"
                          placeholder="9340688440"
                          maxLength="10"
                          onInput={(e) => {
                            // Allow only numbers
                            e.target.value = e.target.value.replace(/[^0-9]/g, '');
                            // Limit to 10 digits
                            if (e.target.value.length > 10) {
                              e.target.value = e.target.value.slice(0, 10);
                            }
                          }}
                        />
                        {errors.phone && (
                          <p className="mt-1 text-sm text-red-400">{errors.phone.message}</p>
                        )}
                        <p className="mt-1 text-xs text-gray-500">Enter 10-digit number without country code</p>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Company Name
                        </label>
                        <input
                          {...register("company")}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all"
                          placeholder="Your Company"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Service of Interest *
                      </label>
                      <div className="relative">
                        <select
                          {...register("service", { required: "Please select a service" })}
                          className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-white/10 text-white focus:outline-none focus:border-cyan-500/50 focus:bg-gray-800 transition-all appearance-none"
                        >
                          <option value="" className="bg-gray-900 text-gray-400">Select a service</option>
                          {services.map((service, index) => (
                            <option
                              key={index}
                              value={service}
                              className="bg-gray-900 text-white py-2"
                            >
                              {service}
                            </option>
                          ))}
                        </select>
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                          <FiChevronDown className="text-gray-400" />
                        </div>
                      </div>
                      {errors.service && (
                        <p className="mt-1 text-sm text-red-400">{errors.service.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Message / Query *
                      </label>
                      <textarea
                        {...register("message", {
                          required: "Message is required",
                          minLength: {
                            value: 10,
                            message: "Message must be at least 10 characters"
                          }
                        })}
                        rows="4"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all"
                        placeholder="Tell us about your project or inquiry..."
                      />
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
                      )}
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-lg flex items-center justify-center gap-3 hover:shadow-xl hover:shadow-cyan-500/30 transition-all relative overflow-hidden group"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span className="relative z-10 flex items-center gap-3">
                        <FiSend className="group-hover:translate-x-1 transition-transform" />
                        Submit Inquiry
                      </span>
                    </motion.button>
                  </form>
                )}
              </motion.div>
            </ThreeDCard>
          </div>
        </div>
      </section>

      {/* ============================================== */}
      {/* YOUR EXISTING SOCIAL SECTION (IMPORTED) */}
      {/* ============================================== */}

      <SocialSection />

      {/* ============================================== */}
      {/* TRUST & CREDIBILITY SECTION */}
      {/* ============================================== */}

      <section className="py-12 md:py-20 relative">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">IntefAI</span>?
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center flex-shrink-0">
                    <FiTarget className="text-cyan-400 text-xl" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">AI-Powered Solutions</h4>
                    <p className="text-gray-400">Leverage cutting-edge AI technology for data-driven marketing decisions and optimized campaign performance.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-600/20 flex items-center justify-center flex-shrink-0">
                    <FiUsers className="text-purple-400 text-xl" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Expert Team</h4>
                    <p className="text-gray-400">Our specialists in SEO, social media, and e-commerce bring years of experience to drive your growth.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-green-600/20 flex items-center justify-center flex-shrink-0">
                    <FiClock className="text-emerald-400 text-xl" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Fast Response</h4>
                    <p className="text-gray-400">We prioritize clear communication and quick turnaround times for all client inquiries and projects.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-red-600/20 flex items-center justify-center flex-shrink-0">
                    <FiAward className="text-orange-400 text-xl" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Proven Results</h4>
                    <p className="text-gray-400">Trusted by startups, enterprises, and global brands for delivering measurable business growth.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Content - Final CTA */}
            <ThreeDCard intensity={8}>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 md:p-10 rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/30 border border-white/10 backdrop-blur-xl text-center"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Let's Grow Your Business
                </h3>

                <p className="text-gray-400 mb-8">
                  Whether you need social media management, SEO services, e-commerce growth support, or AI-driven marketing strategies, IntefAI is your trusted digital partner.
                </p>

                <div className="space-y-4 mb-8">
                  <a
                    href="tel:+919340688440"
                    className="flex items-center justify-center gap-3 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <FiPhone className="text-xl" />
                    <span className="text-lg font-bold">+91-93406-88440</span>
                    <span className="text-sm text-gray-400">Call Anytime</span>
                  </a>

                  <a
                    href="mailto:solution@intefai.com"
                    className="flex items-center justify-center gap-3 text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <FiMail className="text-xl" />
                    <span className="text-lg font-bold">solution@intefai.com</span>
                    <span className="text-sm text-gray-400">Email Us</span>
                  </a>
                </div>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#contact-form"
                  className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold hover:shadow-xl hover:shadow-cyan-500/30 transition-all"
                >
                  Start Your Growth Journey
                  <FiArrowRight />
                </motion.a>
              </motion.div>
            </ThreeDCard>
          </div>
        </div>
      </section>

      {/* NO FOOTER SECTION - REMOVED AS REQUESTED */}

    </div>
  );
};

export default ContactPage;