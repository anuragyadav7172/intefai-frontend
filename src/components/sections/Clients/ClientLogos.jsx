import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

// --- IMAGE IMPORTS ---
import client1 from "../../../assets/images/clients/client1.png";
import client2 from "../../../assets/images/clients/client2.png";
import client3 from "../../../assets/images/clients/client3.png";
import client4 from "../../../assets/images/clients/client4.png";
import client5 from "../../../assets/images/clients/client5.png";
import client6 from "../../../assets/images/clients/client6.png";

const logos = [
  { name: "Client 1", url: client1 },
  { name: "Client 2", url: client2 },
  { name: "Client 3", url: client3 },
  { name: "Client 4", url: client4 },
  { name: "Client 5", url: client5 },
  { name: "Client 6", url: client6 },
];

const ClientLogos = () => {
  // Triple the data to ensure smooth infinite loop
  const loopLogos = [...logos, ...logos, ...logos];

  return (
    <section className="py-10 md:py-16 bg-[#05070d] border-t border-white/5 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-cyan-900/10 blur-[120px] pointer-events-none" />

      {/* --- TEXT SECTION --- */}
      <div className="max-w-4xl mx-auto px-6 mb-10 md:mb-14 text-center relative z-10">
        <div className="w-px h-8 md:h-12 bg-gradient-to-b from-transparent via-cyan-500 to-transparent mx-auto mb-4 opacity-50" />

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/30 border border-cyan-500/20 backdrop-blur-sm mb-4 md:mb-6 shadow-[0_0_10px_rgba(6,182,212,0.1)]">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-cyan-400 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
            Our Ecosystem
          </span>
        </div>

        <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight">
          Trusted by <br className="md:hidden" />
          <span className="relative inline-block">
            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400">
              Industry Leaders
            </span>
            <span className="absolute -inset-1 bg-cyan-500/20 blur-xl z-0" />
          </span>
        </h3>
      </div>

      {/* --- SWIPER SECTION --- */}
      <div className="relative w-full">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          speed={3000}
          allowTouchMove={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            640: { slidesPerView: 3, spaceBetween: 40 },
            768: { slidesPerView: 4, spaceBetween: 50 },
            1024: { slidesPerView: 5, spaceBetween: 60 },
            1280: { slidesPerView: 6, spaceBetween: 70 },
          }}
          className="swiper-linear-ease"
        >
          {loopLogos.map((logo, index) => (
            <SwiperSlide key={`${logo.name}-${index}`} className="py-8 px-2">
               {/* Increased container height to fit larger logos */}
               <div className="group relative flex items-center justify-center cursor-pointer h-24 w-full">
                  <img
                    src={logo.url}
                    alt={logo.name}
                    // UPDATED CLASSES:
                    // 1. Removed 'grayscale' and 'opacity-60' -> Now fully colorful
                    // 2. Increased Height: h-14 (mobile), h-20 (tablet), h-24 (desktop)
                    className="relative h-14 sm:h-20 md:h-24 w-auto object-contain 
                               transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                               drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)]
                               hover:-translate-y-2
                               hover:scale-110
                               hover:drop-shadow-[0_0_25px_rgba(34,211,238,0.6)]"
                  />
               </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        {/* Side Fades */}
        <div className="absolute inset-y-0 left-0 w-12 md:w-32 bg-gradient-to-r from-[#05070d] via-[#05070d]/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-12 md:w-32 bg-gradient-to-l from-[#05070d] via-[#05070d]/90 to-transparent z-10 pointer-events-none" />
      </div>

      <style>{`
        .swiper-linear-ease .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>
    </section>
  );
};

export default ClientLogos;