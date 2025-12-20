import React from "react";
import { motion } from "framer-motion";
import { FiZap, FiTarget, FiBarChart2, FiUsers, FiArrowRight } from "react-icons/fi";

const ServicesSection = () => {
  const services = [
    {
      icon: FiZap,
      title: "AI Content Creation",
      desc: "Generative AI models that write, design, and optimize content that sounds exactly like your brand.",
      color: "group-hover:text-cyan-400",
      gradient: "from-cyan-500/20 to-blue-500/20"
    },
    {
      icon: FiTarget,
      title: "Hyper-Targeting",
      desc: "Using predictive algorithms to find customers who are ready to buy before they even search.",
      color: "group-hover:text-purple-400",
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: FiBarChart2,
      title: "Predictive Analytics",
      desc: "Dashboards that don't just show you what happened, but tell you what to do next.",
      color: "group-hover:text-emerald-400",
      gradient: "from-emerald-500/20 to-green-500/20"
    },
    {
      icon: FiUsers,
      title: "Social Automation",
      desc: "Full-stack management of your digital presence, running 24/7 on autopilot.",
      color: "group-hover:text-orange-400",
      gradient: "from-orange-500/20 to-red-500/20"
    }
  ];

  return (
    <section id="services" className="relative py-28 bg-[#05070d]">
      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Intelligent Services for <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Modern Brands
            </span>
          </h2>
          <p className="text-xl text-white/60">
            Stop guessing. Start using AI to predict, automate, and scale.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-full p-8 rounded-3xl bg-[#0b0f19] border border-white/5 hover:border-white/10 transition-all duration-300 hover:shadow-2xl overflow-hidden"
            >
              {/* Hover Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 text-white transition-colors duration-300 ${service.color}`}>
                  <service.icon className="w-7 h-7" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-8 group-hover:text-white/80 transition-colors">
                  {service.desc}
                </p>
                
                <div className="flex items-center gap-2 text-sm font-bold text-white/40 group-hover:text-white transition-colors cursor-pointer">
                  Explore Service <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;