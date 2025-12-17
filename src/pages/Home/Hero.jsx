const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      
      {/* Background Glow Effects */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl" />
      <div className="absolute top-1/3 -right-32 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            AI-Driven <span className="text-red-900">Social Media</span>
            <br />
            & Digital Marketing
          </h1>

          <p className="mt-6 text-gray-300 text-lg max-w-xl">
            We help brands grow faster with intelligent content, analytics,
            automation, and performance-focused digital strategies.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-medium hover:scale-105 transition">
              Get Started
            </button>

            <button className="px-6 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10 transition">
              Explore Services
            </button>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="hidden md:flex justify-center relative">
          <div className="w-72 h-72 rounded-full bg-gradient-to-r from-cyan-400/30 to-purple-500/30 blur-2xl" />
          <div className="absolute w-40 h-40 rounded-full bg-cyan-400/40 blur-xl top-10 left-10" />
          <div className="absolute w-32 h-32 rounded-full bg-purple-500/40 blur-xl bottom-10 right-10" />
        </div>

      </div>
    </section>
  );
};

export default Hero;
