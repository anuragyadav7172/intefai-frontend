import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend, FiUser, FiMessageSquare } from "react-icons/fi";

const InquirySection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    requirement: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Inquiry Submitted:", formData);
    alert("Thank you! We have received your inquiry.");
  };

  return (
    <section id="inquiry" className="py-20 bg-[#05070d] relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-72 md:w-[500px] h-72 md:h-[500px] bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 md:w-[500px] h-72 md:h-[500px] bg-purple-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT: Responsive Inquiry Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 p-6 md:p-10 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl shadow-2xl"
          >
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Request an Inquiry</h2>
              <div className="h-1 w-12 bg-cyan-500 rounded-full" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="relative">
                  <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-500" />
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white focus:outline-none focus:border-cyan-500 transition-all text-sm md:text-base"
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="relative">
                  <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-500" />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white focus:outline-none focus:border-cyan-500 transition-all text-sm md:text-base"
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="relative">
                <FiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-500" />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white focus:outline-none focus:border-cyan-500 transition-all text-sm md:text-base"
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>

              <div className="relative">
                <FiMessageSquare className="absolute left-4 top-4 text-cyan-500" />
                <textarea
                  placeholder="Your Requirement"
                  rows="4"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white focus:outline-none focus:border-cyan-500 transition-all resize-none text-sm md:text-base"
                  onChange={(e) => setFormData({...formData, requirement: e.target.value})}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl text-white font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all active:scale-95 shadow-lg shadow-cyan-500/20"
              >
                Send Message <FiSend className="text-lg" />
              </button>
            </form>
          </motion.div>

          {/* RIGHT: Official Contact Details */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 space-y-10"
          >
            <div>
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Have Any Question?</h3>
              <p className="text-gray-400 text-base md:text-lg max-w-md">
                Get in touch with us to explore how AI-driven strategies can scale your business.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8">
              {/* Phone */}
              <div className="flex items-start gap-5">
                <div className="mt-1 h-12 w-12 shrink-0 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-xl text-cyan-500">
                  <FiPhone />
                </div>
                <div>
                  <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-1">Free Call</p>
                  <p className="text-lg md:text-xl text-white font-semibold">+91-93406-88440</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-5">
                <div className="mt-1 h-12 w-12 shrink-0 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-xl text-purple-500">
                  <FiMail />
                </div>
                <div>
                  <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-1">Write Email</p>
                  <p className="text-lg md:text-xl text-white font-semibold">solution@intefai.com</p>
                </div>
              </div>

              {/* Visit */}
              <div className="flex items-start gap-5">
                <div className="mt-1 h-12 w-12 shrink-0 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-xl text-emerald-500">
                  <FiMapPin />
                </div>
                <div>
                  <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-1">Visit Anytime</p>
                  <p className="text-lg md:text-xl text-white font-semibold leading-snug">05 Shri Kanha Vihar Indore MP</p>
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default InquirySection;