import React from "react";
import { motion } from "framer-motion";
import { FiCheck, FiArrowUpRight } from "react-icons/fi";

const AboutSection = () => {
  // Simplified feature list to avoid "card overload"
  const highlights = [
    "Custom AI & Software Solutions",
    "End-to-End Development Support",
    "Expert Team Based in Indore, India",
    "Scalable Future-Ready Architecture",
  ];

  return (
    <section id="about" className="relative py-20 md:py-32 bg-[#05070d] overflow-hidden">
      
      {/* Background Decor: Subtle Gradient Blob */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT COLUMN: Narrative Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
              <span className="text-cyan-400 text-xs font-bold tracking-widest uppercase">
                About IntefAI
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1]">
              We Bridge the Gap Between <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                Business & Innovation
              </span>
            </h2>

            {/* Description */}
            <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-xl">
              Welcome to <strong>IntefAI</strong>. Based in the heart of Indore, India, we are a collective of passionate developers and AI experts. We don't just write code; we engineer digital transformations that empower businesses to scale efficiently in a tech-driven world.
            </p>

            {/* Clean List (Replacing Cards) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center shrink-0">
                    <FiCheck className="text-cyan-400 text-xs" />
                  </div>
                  <span className="text-gray-300 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* CEO Quote Block */}
            <div className="border-l-4 border-cyan-500 pl-6 py-2">
              <p className="text-white/90 italic text-lg md:text-xl mb-4">
                "Our vision is to democratize AI technology, making high-end software solutions accessible and scalable for businesses of all sizes."
              </p>
              <div>
                <h4 className="text-white font-bold">Lakhan Jadam</h4>
                <p className="text-cyan-500 text-xs uppercase tracking-wider">CEO & Co-Founder</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Visuals & Big Stat */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Main Visual Image Placeholder */}
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-gray-900 aspect-[4/3] group">
              {/* You can replace this gradient div with an <img /> tag if you have a team photo */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black opacity-80" />
              
              {/* Abstract Tech Graphic Overlay */}
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="text-center p-8">
                    <div className="w-20 h-20 mx-auto bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-4 backdrop-blur-md border border-cyan-500/30">
                        <FiArrowUpRight className="text-4xl text-cyan-400" />
                    </div>
                    <h3 className="text-2xl text-white font-bold">Driven by Results</h3>
                    <p className="text-gray-400 text-sm mt-2">Delivering excellence across every project.</p>
                 </div>
              </div>
            </div>

            {/* Floating Stat Card - Positioned nicely on Desktop, Stacked on Mobile via Layout */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 bg-[#0a0f1c] border border-white/10 p-6 md:p-8 rounded-2xl shadow-xl backdrop-blur-xl hidden sm:block"
            >
              <div className="flex items-baseline gap-1">
                <span className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  8+
                </span>
                <span className="text-xl text-white font-bold">Years</span>
              </div>
              <p className="text-gray-400 text-sm mt-1 uppercase tracking-wider">Experience in Tech</p>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;