import React from "react";
import { motion } from "framer-motion";
import { FiUsers, FiTarget, FiAward, FiGlobe, FiCode, FiCpu, FiTrendingUp, FiShield } from "react-icons/fi";
import AboutSection from "../../components/sections/About/AboutSection";

const About = () => {
  const values = [
    {
      icon: <FiTarget className="text-2xl" />,
      title: "Mission-Driven",
      description: "We're committed to solving real business challenges with innovative AI solutions that drive measurable results."
    },
    {
      icon: <FiCpu className="text-2xl" />,
      title: "Innovation First",
      description: "We stay at the forefront of technology trends, ensuring our clients always have access to cutting-edge solutions."
    },
    {
      icon: <FiUsers className="text-2xl" />,
      title: "Client-Centric",
      description: "Your success is our success. We build long-term partnerships based on trust, transparency, and exceptional results."
    },
    {
      icon: <FiShield className="text-2xl" />,
      title: "Quality Assured",
      description: "Every solution we deliver undergoes rigorous testing and quality assurance to ensure reliability and performance."
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Delivered" },
    { number: "30+", label: "Happy Clients" },
    { number: "8+", label: "Years Experience" },
    { number: "15+", label: "Team Members" }
  ];

  const services = [
    {
      icon: <FiCode className="text-3xl" />,
      title: "Custom Software Development",
      description: "Tailored software solutions built with modern technologies to meet your specific business needs."
    },
    {
      icon: <FiCpu className="text-3xl" />,
      title: "AI & Machine Learning",
      description: "Intelligent automation and predictive analytics to transform your business operations and decision-making."
    },
    {
      icon: <FiGlobe className="text-3xl" />,
      title: "Web & Mobile Apps",
      description: "Responsive, user-friendly applications that deliver exceptional experiences across all devices."
    },
    {
      icon: <FiTrendingUp className="text-3xl" />,
      title: "Digital Transformation",
      description: "Comprehensive strategies to modernize your business processes and embrace digital innovation."
    }
  ];

  const team = [
    {
      name: "Lakhan Jadam",
      role: "CEO & Co-Founder",
      description: "Visionary leader with 8+ years in tech, driving innovation and strategic growth.",
      expertise: "AI Strategy, Business Development"
    },
    {
      name: "Anurag Yadav",
      role: "CTO & Co-Founder", 
      description: "Technical architect specializing in scalable systems and cutting-edge technologies.",
      expertise: "Full-Stack Development, System Design"
    },
    {
      name: "Priya Sharma",
      role: "Lead AI Engineer",
      description: "Machine learning expert with a passion for solving complex business problems.",
      expertise: "Deep Learning, NLP, Computer Vision"
    },
    {
      name: "Rahul Verma",
      role: "Senior Developer",
      description: "Full-stack developer with expertise in modern web technologies and cloud platforms.",
      expertise: "React, Node.js, Cloud Architecture"
    }
  ];

  return (
    <div className="min-h-screen bg-[#05070d]">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
              <span className="text-cyan-400 text-sm font-bold tracking-widest uppercase">
                About Us
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.1]">
              Transforming Ideas Into
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 block">
                Digital Reality
              </span>
            </h1>
            
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              We are IntefAI, a dynamic technology company based in Indore, India, 
              dedicated to pushing the boundaries of what's possible with AI and software innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main About Section */}
      <AboutSection />

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The principles that guide everything we do, from code to client relationships
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#0a0f1c]/50 border border-white/10 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300 group"
              >
                <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What We Do
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#0a0f1c]/50 to-[#05070d]/50 border border-white/10 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="text-cyan-400 shrink-0">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The talented individuals behind our innovative solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#0a0f1c]/50 border border-white/10 rounded-2xl p-6 hover:border-cyan-500/30 transition-all duration-300 group"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full mb-4 flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-bold text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-cyan-400 text-sm font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">
                  {member.description}
                </p>
                <div className="text-xs text-gray-500">
                  <strong>Expertise:</strong> {member.expertise}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-white/10 rounded-3xl p-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Let's discuss how our innovative solutions can help you achieve your goals and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                onClick={() => window.location.href = '/contact'}
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-cyan-500/30 text-cyan-400 font-bold rounded-full hover:bg-cyan-500/10 transition-all duration-300"
                onClick={() => window.location.href = '/portfolio'}
              >
                View Our Work
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;