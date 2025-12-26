import React from "react";
import { motion } from "framer-motion";

// --- LOCAL THUMBNAIL IMPORTS ---
import instagramThumb from "../../../assets/images/hero/instagram_post.jpg";
import linkedinThumb from "../../../assets/images/hero/linkedin_post.jpg";
import xThumb from "../../../assets/images/hero/x_post.jpg";
import youtubeThumb from "../../../assets/images/hero/youtube_post.jpg";

// Data for the posts
const POST_DATA = [
  { id: 1, image: instagramThumb, user: "instagram_user", platform: "Instagram" },
  { id: 2, image: linkedinThumb, user: "linkedin_pro", platform: "LinkedIn" },
  { id: 3, image: xThumb, user: "x_creator", platform: "X" },
  { id: 4, image: youtubeThumb, user: "yt_channel", platform: "YouTube" },
];

const PhoneScreen = () => {
  return (
    // --- MAIN CONTAINER ---
    // set to w-full h-full to fill the parent PhoneMockup container
    // Removed borders and shadows because the Mockup handles them
    <div className="w-full h-full relative flex flex-col bg-[#080a0f] overflow-hidden">
      
      {/* 1. Status Bar (Time & Battery) */}
      <div className="absolute top-0 left-0 right-0 h-12 z-20 flex justify-between items-start px-5 pt-4">
          <span className="text-[10px] text-white/50 font-medium tracking-wide">9:41</span>
          <div className="flex gap-1">
              <div className="w-3 h-3 rounded-full bg-white/20"></div>
              <div className="w-3 h-3 rounded-full bg-white/20"></div>
          </div>
      </div>

      {/* 2. Top Gradient Fade (Behind Status Bar) */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#080a0f] via-[#080a0f]/80 to-transparent z-10 pointer-events-none" />

      {/* 3. Scrolling Feed */}
      <motion.div
        animate={{ y: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 30, 
          ease: "linear",
        }}
        whileHover={{ animationPlayState: "paused" }}
        className="flex flex-col gap-5 px-4 pt-14 pb-4" 
      >
        {/* Loop twice for infinite scroll */}
        {[...POST_DATA, ...POST_DATA].map((post, i) => (
          <div
            key={i}
            className="flex flex-col bg-[#141821] border border-white/5 rounded-xl overflow-hidden shadow-lg"
          >
            {/* --- Compact Header --- */}
            <div className="flex items-center gap-2 p-2.5 bg-white/5">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-[8px] font-bold text-white">
                {post.user[0].toUpperCase()}
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-[11px] font-medium text-white/90 mb-0.5">
                  {post.user}
                </span>
                <span className="text-[9px] text-white/40">
                  {post.platform}
                </span>
              </div>
            </div>

            {/* --- Image (Square) --- */}
            <div className="relative w-full aspect-square bg-black">
              <img
                src={post.image}
                alt={`Post ${i}`}
                className="w-full h-full object-cover opacity-90 transition-opacity duration-500 hover:opacity-100"
                loading="lazy"
              />
            </div>

            {/* --- Compact Footer --- */}
            <div className="p-2.5 flex items-center justify-between">
              <div className="flex gap-3">
                <HeartIcon />
                <CommentIcon />
                <ShareIcon />
              </div>
              <div className="text-[9px] text-white/30">1.2k likes</div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* 4. Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#080a0f] via-[#080a0f]/80 to-transparent z-10 pointer-events-none" />
    </div>
  );
};

// --- Helper Icons ---
const HeartIcon = () => (
  <svg className="w-4 h-4 text-white/60 hover:text-red-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const CommentIcon = () => (
  <svg className="w-4 h-4 text-white/60 hover:text-blue-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

const ShareIcon = () => (
  <svg className="w-4 h-4 text-white/60 hover:text-green-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
);

export default PhoneScreen;