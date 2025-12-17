import Hero from "./Hero";

const Home = () => {
  return (
    <section className="min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            AI-Driven <span className="text-primary">Social Media</span> &  
            <br />
            Digital Marketing
          </h1>

          <p className="mt-6 text-gray-300 text-lg max-w-xl">
            We help brands grow with intelligent content, analytics,
            automation, and performance-driven digital marketing solutions.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-medium hover:scale-105 transition">
              Get Started
            </button>

            <button className="px-6 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10 transition">
              View Services
            </button>
          </div>
        </div>

        {/* Right Visual Placeholder */}
        <div className="hidden md:flex justify-center">
          <div className="w-72 h-72 rounded-full bg-gradient-to-r from-cyan-400/30 to-purple-500/30 blur-3xl" />
        </div>

      </div>
    </section>
  );
};

export default Home;

