import { 
  FaLinkedinIn, 
  FaInstagram, 
  FaYoutube, 
  FaXTwitter 
} from "react-icons/fa6";

// --- IMPORT YOUR IMAGES HERE ---
// Ensure these files exist in your assets folder
import linkedinBg from "../assets/images/posts/linkedin_post.jpg";
import instaBg from "../assets/images/posts/instagram_post.jpg";
import xBg from "../assets/images/posts/x_post.jpg";
import youtubeBg from "../assets/images/posts/youtube_post.jpg";

export const socialLinks = [
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/intefai-it-solutions/",
    icon: FaLinkedinIn,
    color: "from-blue-600 to-blue-400",
    image: linkedinBg, // Added image
  },
  {
    id: "instagram",
    name: "Instagram",
    url: "https://www.instagram.com/intefai_digital?igsh=MTVwYXJ0NWZtMjFkNA==",
    icon: FaInstagram,
    color: "from-pink-500 to-orange-400",
    image: instaBg, // Added image
  },
  {
    id: "x",
    name: "X (Twitter)",
    url: "https://x.com/intefai",
    icon: FaXTwitter,
    color: "from-gray-700 to-gray-400",
    image: xBg, // Added image
  },
  {
    id: "youtube",
    name: "YouTube",
    url: "https://www.youtube.com/@intefai",
    icon: FaYoutube,
    color: "from-red-600 to-red-400",
    image: youtubeBg, // Added image
  },
];