import React, { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring, useInView } from "framer-motion";
import { 
  FiSearch, 
  FiCalendar, 
  FiClock, 
  FiArrowRight, 
  FiChevronRight,
  FiChevronLeft,
  FiBookmark,
  FiShare2,
  FiMail,
  FiTrendingUp,
  FiFilter,
  FiTag,
  FiUser,
  FiEye,
  FiMessageSquare,
  FiTarget,
  FiUsers,
  FiShoppingBag,
  FiCpu,
  FiBarChart2,
  FiGlobe,
  FiAward,
  FiBookOpen,
  FiArrowUpRight,
  FiX,
  FiHome,
  FiList
} from "react-icons/fi";
import { useNavigate, useParams, Link } from "react-router-dom";

// Import local images
import blog1 from "@/assets/images/blog/blog1.png";
import blog2 from "@/assets/images/blog/blog2.png";
import blog3 from "@/assets/images/blog/blog3.png";
import blog4 from "@/assets/images/blog/blog4.png";
import blog5 from "@/assets/images/blog/blog5.png";
import blog6 from "@/assets/images/blog/blog6.png";
import blog7 from "@/assets/images/blog/blog7.png";
import blog8 from "@/assets/images/blog/blog8.png";
import blog9 from "@/assets/images/blog/blog9.png";
import blog10 from "@/assets/images/blog/blog10.png";

// Enhanced Blog Data with local images
const allBlogPosts = [
  {
    id: "ai-revolution-2024",
    title: "How AI is Revolutionizing Digital Marketing in 2024",
    excerpt: "Discover the latest AI tools and strategies transforming how businesses approach marketing automation and personalization.",
    category: "AI & Technology",
    date: "Mar 15, 2024",
    readTime: "5 min read",
    author: "Lakhan Jadam",
    views: "2.4k",
    comments: 42,
    image: blog1,
    tags: ["AI", "Marketing", "Automation"],
    featured: true,
    content: `<h2>Introduction to AI in Marketing</h2>
    <p>Artificial Intelligence is no longer a futuristic concept; it's a present-day reality that's transforming how businesses approach digital marketing. In 2024, AI-powered tools are becoming increasingly sophisticated, enabling marketers to automate complex tasks, gain deeper insights into customer behavior, and deliver personalized experiences at scale.</p>
    
    <h3>Key AI Applications in Marketing</h3>
    <p>From predictive analytics to natural language processing, AI is being used across various marketing functions:</p>
    <ul>
      <li>Personalized content recommendations</li>
      <li>Predictive customer segmentation</li>
      <li>Automated ad optimization</li>
      <li>Chatbot-driven customer service</li>
      <li>Content generation and optimization</li>
    </ul>
    
    <h3>The Future of AI in Marketing</h3>
    <p>As AI continues to evolve, we can expect even more advanced applications that will further revolutionize how brands connect with their audiences. The key to success lies in understanding these technologies and implementing them strategically.</p>`,
    relatedPosts: ["instagram-algorithm-2024", "linkedin-marketing-b2b"]
  },
  {
    id: "instagram-algorithm-2024",
    title: "Complete Guide to Instagram Algorithm Changes 2024",
    excerpt: "Learn how to optimize your Instagram strategy with the latest algorithm updates and content trends.",
    category: "Social Media",
    date: "Mar 12, 2024",
    readTime: "7 min read",
    author: "Sachin Gupta",
    views: "3.1k",
    comments: 56,
    image: blog2,
    tags: ["Instagram", "Algorithm", "Social Media"],
    featured: true,
    content: `<h2>Understanding Instagram's 2024 Algorithm</h2>
    <p>Instagram's algorithm has undergone significant changes in 2024, with a renewed focus on authentic content, meaningful interactions, and creator monetization. Understanding these updates is crucial for maintaining and growing your presence on the platform.</p>
    
    <h3>Key Algorithm Changes</h3>
    <p>The 2024 update introduces several important changes:</p>
    <ul>
      <li>Increased weight on video content, especially Reels</li>
      <li>Better visibility for smaller creators</li>
      <li>Enhanced focus on authentic engagement metrics</li>
      <li>Improved content discovery mechanisms</li>
      <li>New monetization opportunities for creators</li>
    </ul>
    
    <h3>Optimization Strategies</h3>
    <p>To succeed with the new algorithm, focus on creating high-quality, engaging content that encourages meaningful interactions. Consistency and authenticity are more important than ever.</p>`,
    relatedPosts: ["ai-revolution-2024", "social-media-brand-guide"]
  },
  {
    id: "ecommerce-seo-strategies",
    title: "E-commerce SEO: Advanced Strategies for Amazon & Flipkart",
    excerpt: "Master e-commerce SEO with proven techniques to boost visibility and sales on major marketplaces.",
    category: "E-commerce Growth",
    date: "Mar 10, 2024",
    readTime: "8 min read",
    author: "Dharmesh Thakur",
    views: "1.8k",
    comments: 28,
    image: blog3,
    tags: ["E-commerce", "SEO", "Amazon"],
    featured: true,
    content: `<h2>E-commerce SEO Fundamentals</h2>
    <p>E-commerce SEO requires a specialized approach to stand out on crowded marketplaces like Amazon and Flipkart. With millions of products competing for attention, a strategic SEO approach is essential for success.</p>
    
    <h3>Marketplace Optimization Strategies</h3>
    <p>Effective e-commerce SEO involves several key components:</p>
    <ul>
      <li>Keyword-optimized product titles and descriptions</li>
      <li>High-quality product images and videos</li>
      <li>Customer review management</li>
      <li>Competitive pricing strategies</li>
      <li>Inventory and shipping optimization</li>
    </ul>
    
    <h3>Advanced Techniques</h3>
    <p>Beyond basic optimization, consider implementing advanced strategies like A+ content, sponsored product campaigns, and marketplace-specific advertising to maximize your visibility and sales.</p>`,
    relatedPosts: ["content-marketing-b2b", "data-driven-marketing"]
  },
  {
    id: "content-marketing-b2b",
    title: "Content Marketing Strategy for B2B SaaS Companies",
    excerpt: "Build an effective content marketing funnel that drives qualified leads and conversions.",
    category: "SEO & Content",
    date: "Mar 8, 2024",
    readTime: "6 min read",
    author: "Lakhan Jadam",
    views: "2.1k",
    comments: 34,
    image: blog4,
    tags: ["Content", "B2B", "SaaS"],
    featured: false,
    content: `<h2>B2B Content Strategy Framework</h2>
    <p>B2B content marketing requires a strategic approach to educate and convert sophisticated buyers. In the SaaS industry, where products are often complex and subscription-based, content plays a crucial role in the customer journey.</p>
    
    <h3>Content Funnel Development</h3>
    <p>A successful B2B content strategy follows a clear funnel:</p>
    <ul>
      <li>Awareness: Educational blog posts and industry reports</li>
      <li>Consideration: Case studies and product comparisons</li>
      <li>Decision: Demos, trials, and pricing information</li>
      <li>Retention: Onboarding content and advanced tutorials</li>
    </ul>
    
    <h3>Key Performance Indicators</h3>
    <p>Track metrics like lead quality, conversion rates, and customer lifetime value to measure the effectiveness of your content strategy.</p>`,
    relatedPosts: ["ecommerce-seo-strategies", "voice-search-seo"]
  },
  {
    id: "linkedin-marketing-b2b",
    title: "LinkedIn Marketing: Generating B2B Leads in 2024",
    excerpt: "Advanced LinkedIn strategies for B2B lead generation and professional networking.",
    category: "Social Media",
    date: "Mar 5, 2024",
    readTime: "9 min read",
    author: "Sachin Gupta",
    views: "2.7k",
    comments: 41,
    image: blog5,
    tags: ["LinkedIn", "B2B", "Lead Generation"],
    featured: false,
    content: `<h2>LinkedIn for B2B Marketing</h2>
    <p>LinkedIn remains the premier platform for B2B marketing and professional networking. With over 900 million users worldwide, it offers unparalleled opportunities for connecting with decision-makers and industry professionals.</p>
    
    <h3>Effective LinkedIn Strategies</h3>
    <p>To succeed on LinkedIn, focus on these key areas:</p>
    <ul>
      <li>Optimized company page and personal profiles</li>
      <li>Thought leadership content publishing</li>
      <li>Strategic networking and connection building</li>
      <li>Targeted advertising campaigns</li>
      <li>Lead generation forms and automation</li>
    </ul>
    
    <h3>Content Best Practices</h3>
    <p>Share valuable insights, case studies, industry analysis, and company updates to establish authority and build trust with your target audience.</p>`,
    relatedPosts: ["ai-revolution-2024", "social-media-brand-guide"]
  },
  {
    id: "data-driven-marketing",
    title: "Data-Driven Marketing: Turning Analytics into Action",
    excerpt: "Learn how to leverage marketing analytics to make informed decisions and optimize campaigns.",
    category: "Digital Marketing",
    date: "Mar 3, 2024",
    readTime: "7 min read",
    author: "Dharmesh Thakur",
    views: "1.9k",
    comments: 29,
    image: blog6,
    tags: ["Analytics", "Data", "Marketing"],
    featured: false,
    content: `<h2>The Power of Data in Marketing</h2>
    <p>Data-driven marketing enables businesses to make informed decisions based on real insights rather than assumptions or intuition. In today's competitive landscape, leveraging data effectively can be the difference between success and failure.</p>
    
    <h3>Key Data Sources</h3>
    <p>Successful data-driven marketers leverage multiple data sources:</p>
    <ul>
      <li>Website and app analytics</li>
      <li>CRM and customer data</li>
      <li>Social media insights</li>
      <li>Email marketing metrics</li>
      <li>Competitive intelligence</li>
    </ul>
    
    <h3>Actionable Insights</h3>
    <p>Focus on turning raw data into actionable insights that can drive strategic decisions and campaign optimizations. Regular analysis and reporting are essential for continuous improvement.</p>`,
    relatedPosts: ["ai-revolution-2024", "ecommerce-seo-strategies"]
  },
  {
    id: "voice-search-seo",
    title: "Voice Search Optimization: The Future of SEO",
    excerpt: "Prepare your content for voice search with these essential optimization techniques.",
    category: "SEO & Content",
    date: "Feb 28, 2024",
    readTime: "5 min read",
    author: "Lakhan Jadam",
    views: "2.3k",
    comments: 38,
    image: blog7,
    tags: ["Voice Search", "SEO", "Future Tech"],
    featured: false,
    content: `<h2>Optimizing for Voice Search</h2>
    <p>Voice search is rapidly changing how users find information online. With the proliferation of smart speakers and voice assistants, optimizing your content for voice search is becoming increasingly important.</p>
    
    <h3>Voice Search Optimization Techniques</h3>
    <p>To optimize for voice search, focus on these key areas:</p>
    <ul>
      <li>Natural language and conversational content</li>
      <li>Featured snippets and position zero optimization</li>
      <li>Local SEO and "near me" queries</li>
      <li>Structured data and schema markup</li>
      <li>Mobile-first optimization</li>
    </ul>
    
    <h3>The Future of Search</h3>
    <p>As voice search technology continues to improve, we can expect it to play an even larger role in how users discover and interact with online content.</p>`,
    relatedPosts: ["content-marketing-b2b", "instagram-algorithm-2024"]
  },
  {
    id: "social-media-brand-guide",
    title: "Building a Brand on Social Media: Complete Guide",
    excerpt: "From zero to hero: A step-by-step guide to building a powerful brand presence on social media.",
    category: "Social Media",
    date: "Feb 25, 2024",
    readTime: "10 min read",
    author: "Sachin Gupta",
    views: "3.4k",
    comments: 62,
    image: blog8,
    tags: ["Branding", "Social Media", "Strategy"],
    featured: false,
    content: `<h2>Social Media Brand Building</h2>
    <p>Building a strong brand on social media requires consistency, strategy, and genuine engagement. In a crowded digital space, standing out requires more than just regular posting.</p>
    
    <h3>Brand Building Framework</h3>
    <p>Follow this framework for successful social media brand building:</p>
    <ul>
      <li>Define your brand voice and visual identity</li>
      <li>Create valuable, platform-specific content</li>
      <li>Engage authentically with your audience</li>
      <li>Collaborate with influencers and partners</li>
      <li>Measure and optimize your strategy</li>
    </ul>
    
    <h3>Platform-Specific Strategies</h3>
    <p>Different platforms require different approaches. Tailor your content and engagement strategies to each platform's unique characteristics and audience expectations.</p>`,
    relatedPosts: ["instagram-algorithm-2024", "linkedin-marketing-b2b"]
  },
  {
    id: "email-marketing-strategy",
    title: "Modern Email Marketing Strategy for 2024",
    excerpt: "Advanced email marketing techniques that deliver real results and ROI.",
    category: "Digital Marketing",
    date: "Feb 20, 2024",
    readTime: "6 min read",
    author: "Dharmesh Thakur",
    views: "2.2k",
    comments: 31,
    image: blog9,
    tags: ["Email", "Marketing", "Automation"],
    featured: false,
    content: `<h2>Email Marketing Evolution</h2>
    <p>Email marketing continues to be one of the most effective digital marketing channels, offering impressive ROI and direct access to your audience. However, the strategies that worked in the past may not be as effective today.</p>
    
    <h3>Modern Email Strategies</h3>
    <p>Successful email marketing in 2024 requires:</p>
    <ul>
      <li>Personalization beyond just names</li>
      <li>Behavioral triggered campaigns</li>
      <li>Interactive email content</li>
      <li>AI-powered optimization</li>
      <li>Privacy-first approaches</li>
    </ul>
    
    <h3>Measuring Success</h3>
    <p>Track metrics like open rates, click-through rates, conversion rates, and overall ROI to continually optimize your email marketing strategy.</p>`,
    relatedPosts: ["content-marketing-b2b", "data-driven-marketing"]
  },
  {
    id: "video-marketing-trends",
    title: "Video Marketing Trends That Dominate 2024",
    excerpt: "Stay ahead with these cutting-edge video marketing trends and strategies.",
    category: "Digital Marketing",
    date: "Feb 18, 2024",
    readTime: "8 min read",
    author: "Lakhan Jadam",
    views: "2.8k",
    comments: 45,
    image: blog10,
    tags: ["Video", "Marketing", "Trends"],
    featured: false,
    content: `<h2>The Rise of Video Content</h2>
    <p>Video continues to dominate social media and digital marketing, with new formats and platforms emerging regularly. Staying current with video marketing trends is essential for modern marketers.</p>
    
    <h3>Key Video Trends for 2024</h3>
    <p>These trends are shaping video marketing in 2024:</p>
    <ul>
      <li>Short-form vertical video (TikTok, Reels, Shorts)</li>
      <li>Interactive and shoppable video</li>
      <li>Live streaming and virtual events</li>
      <li>AI-generated video content</li>
      <li>Accessibility-focused video</li>
    </ul>
    
    <h3>Video Strategy Development</h3>
    <p>Develop a comprehensive video strategy that aligns with your brand goals, target audience preferences, and available resources. Consistency and quality are key to success.</p>`,
    relatedPosts: ["instagram-algorithm-2024", "social-media-brand-guide"]
  }
];

// 3D Card Component
const ThreeDCard = ({ children, intensity = 10, scale = 1.02, className = "" }) => {
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

// Blog Card Component
const BlogCard = ({ post, variant = "default", onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const variants = {
    default: "col-span-1",
    featured: "md:col-span-2",
    trending: "flex-shrink-0 w-full md:w-[320px]"
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className={`${variants[variant]} h-full`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onClick(post.id)}
    >
      <ThreeDCard intensity={variant === "featured" ? 8 : 5} scale={1.03}>
        <div className="relative h-full rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-gray-900/50 to-black/30 backdrop-blur-sm group cursor-pointer">
          {/* Background Glow */}
          <div className={`absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5 transition-opacity duration-500 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`} />
          
          {/* Image Container */}
          <div className="relative h-48 md:h-56 overflow-hidden">
            <motion.img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
              animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
              transition={{ duration: 0.7 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            
            {/* Category Badge */}
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold uppercase tracking-wider">
                {post.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 md:p-6 relative z-10">
            <div className="flex flex-wrap items-center gap-2 md:gap-4 text-xs md:text-sm text-gray-400 mb-3">
              <span className="flex items-center gap-1">
                <FiCalendar className="text-cyan-400" /> {post.date}
              </span>
              <span className="flex items-center gap-1">
                <FiClock className="text-purple-400" /> {post.readTime}
              </span>
              <span className="flex items-center gap-1">
                <FiUser className="text-pink-400" /> {post.author}
              </span>
            </div>

            <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors line-clamp-2">
              {post.title}
            </h3>
            
            <p className="text-gray-400 text-sm md:text-base mb-4 line-clamp-2">
              {post.excerpt}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.slice(0, 3).map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 rounded-lg bg-white/5 text-gray-300 text-xs border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Stats & Actions */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-4 border-t border-white/10 gap-3">
              <div className="flex items-center gap-3 md:gap-4 text-xs md:text-sm text-gray-400">
                <span className="flex items-center gap-1">
                  <FiEye /> {post.views}
                </span>
                <span className="flex items-center gap-1">
                  <FiMessageSquare /> {post.comments}
                </span>
              </div>
              
              <motion.button
                whileHover={{ x: 5 }}
                className="flex items-center gap-2 text-cyan-400 font-medium group"
                onClick={(e) => {
                  e.stopPropagation();
                  onClick(post.id);
                }}
              >
                Read More
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </div>

          {/* Hover Effect Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-t from-cyan-500/10 via-transparent to-transparent pointer-events-none transition-opacity duration-500 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`} />
        </div>
      </ThreeDCard>
    </motion.div>
  );
};

// Hero Section
const BlogHero = ({ onExploreClick }) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#05070d] via-[#0a0f1c] to-[#0c1120]">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        style={{ y }}
      >
        {/* Abstract Shapes */}
        <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-cyan-500/10 rounded-full blur-2xl md:blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-purple-500/10 rounded-full blur-2xl md:blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-48 md:h-64 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 blur-2xl md:blur-3xl" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
          }}
        />
      </motion.div>

     <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 pt-24 sm:pt-26 md:pt-28 pb-12 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content - Floating Text Layers */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Accent Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 md:px-4 py-1 md:py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-md text-cyan-400 text-xs md:text-sm font-bold tracking-widest uppercase mb-6 md:mb-8"
            >
              <span className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-cyan-400 animate-pulse" />
              Insights & Strategies
            </motion.div>

            {/* Main Heading with 3D Effect */}
            <div className="relative mb-6 md:mb-8">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight"
              >
                <span className="text-white">IntefAI</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
                  Blog
                </span>
              </motion.h1>
              
              {/* Floating Text Effect */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute -top-2 md:-top-4 -right-2 md:-right-4 w-20 md:w-32 h-20 md:h-32 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-xl md:blur-2xl"
                style={{ opacity }}
              />
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-gray-400 mb-6 md:mb-8 leading-relaxed"
            >
              Insights on Digital Marketing, AI, and Business Growth
            </motion.p>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-300"
            >
              <p>
                Welcome to the IntefAI Blog, where we share expert insights on digital marketing, 
                AI-powered growth strategies, social media trends, e-commerce optimization, and modern technology.
              </p>
              <p>
                Our blogs are designed to help startups, businesses, and enterprises stay ahead in an 
                ever-evolving digital landscape.
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-6 md:mt-8"
            >
              <button 
                onClick={onExploreClick}
                className="group px-6 md:px-8 py-2.5 md:py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-base md:text-lg flex items-center gap-2 hover:shadow-lg hover:shadow-cyan-500/30 transition-all w-full md:w-auto justify-center"
              >
                Explore Latest Posts
                <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
            </motion.div>
          </motion.div>

          {/* Right Content - Interactive Elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* 3D Floating Cards */}
            <ThreeDCard intensity={15} scale={1.05} className="mb-6 md:mb-8">
              <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/30 border border-white/10 backdrop-blur-sm">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 flex items-center gap-3">
                  <FiBookOpen className="text-cyan-400" />
                  What You'll Find in Our Blogs
                </h3>
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  {[
                    { icon: FiTarget, text: "Digital Marketing", color: "cyan" },
                    { icon: FiUsers, text: "Social Media", color: "purple" },
                    { icon: FiSearch, text: "SEO & Content", color: "emerald" },
                    { icon: FiShoppingBag, text: "E-commerce", color: "orange" },
                    { icon: FiCpu, text: "AI & Tech", color: "blue" },
                    { icon: FiBarChart2, text: "Case Studies", color: "pink" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="p-3 md:p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
                    >
                      <div className="flex items-center gap-2 md:gap-3">
                        <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg bg-${item.color}-500/20 flex items-center justify-center`}>
                          <item.icon className={`text-${item.color}-400 text-sm md:text-base`} />
                        </div>
                        <span className="text-white text-xs md:text-sm font-medium truncate">{item.text}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ThreeDCard>

            {/* Stats Card */}
            <ThreeDCard intensity={10} className="opacity-90">
              <div className="p-4 md:p-6 rounded-2xl bg-gradient-to-br from-purple-900/20 to-pink-900/10 border border-white/10 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">10</div>
                    <div className="text-xs md:text-sm text-gray-400">Published Posts</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">45k+</div>
                    <div className="text-xs md:text-sm text-gray-400">Monthly Readers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">98%</div>
                    <div className="text-xs md:text-sm text-gray-400">Positive Feedback</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">24/7</div>
                    <div className="text-xs md:text-sm text-gray-400">Updated Content</div>
                  </div>
                </div>
              </div>
            </ThreeDCard>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2"
        style={{ opacity }}
      >
        <div className="flex flex-col items-center gap-1 md:gap-2">
          <span className="text-gray-400 text-xs md:text-sm">Scroll to explore</span>
          <div className="w-5 h-8 md:w-6 md:h-10 rounded-full border-2 border-cyan-500/30 flex justify-center">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1 h-2 md:h-3 bg-cyan-500 rounded-full mt-1.5 md:mt-2"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

// Newsletter Section
const NewsletterCTA = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <section className="py-12 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20" />
      <div className="max-w-4xl mx-auto px-4 md:px-6 relative z-10">
        <ThreeDCard intensity={8}>
          <div className="p-6 md:p-12 rounded-2xl md:rounded-3xl bg-gradient-to-br from-gray-900/50 to-black/30 border border-white/10 backdrop-blur-xl">
            <div className="text-center mb-6 md:mb-8">
              <FiMail className="text-3xl md:text-4xl text-cyan-400 mx-auto mb-3 md:mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">
                Stay Updated with Latest Insights
              </h3>
              <p className="text-gray-400 mb-6 md:mb-8 text-sm md:text-base max-w-2xl mx-auto">
                Get weekly updates on digital marketing trends, SEO strategies, 
                AI innovations, and growth hacks delivered directly to your inbox.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-4 md:px-6 py-2.5 md:py-3 rounded-full bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all text-sm md:text-base"
                  required
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="px-6 md:px-8 py-2.5 md:py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold hover:shadow-lg hover:shadow-cyan-500/30 transition-all text-sm md:text-base"
                >
                  {isSubmitted ? "Subscribed! ✓" : "Subscribe Now"}
                </motion.button>
              </div>
              
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={isSubmitted ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
                className="text-green-400 text-xs md:text-sm mt-3 md:mt-4 text-center"
              >
                Thank you for subscribing! Check your inbox for confirmation.
              </motion.p>
            </form>
          </div>
        </ThreeDCard>
      </div>
    </section>
  );
};

// Blog Listing Component
const BlogListing = ({ posts, onLoadMore, hasMore, onPostClick }) => {
  return (
    <section className="py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 md:mb-8 gap-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Latest Articles</h2>
          <div className="flex items-center gap-2 md:gap-4">
            <button className="flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-sm">
              <FiFilter /> Filter
            </button>
            <button className="flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-sm">
              <FiTag /> Tags
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} onClick={onPostClick} />
          ))}
        </div>

        {/* Load More */}
        {hasMore && (
          <div className="text-center mt-8 md:mt-12">
            <button 
              onClick={onLoadMore}
              className="group px-6 md:px-8 py-2.5 md:py-3 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 text-cyan-400 font-bold hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-purple-500/20 transition-all text-sm md:text-base"
            >
              Load More Posts
              <FiArrowRight className="inline-block ml-2 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

// Main Blog Component
const Blog = () => {
  const navigate = useNavigate();
  const [displayedPosts, setDisplayedPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  // All posts are shown (no category filtering)
  const filteredPosts = allBlogPosts;

  // Handle post click
  const handlePostClick = (postId) => {
    navigate(`/blog/post/${postId}`);
  };

  // Handle load more
  const handleLoadMore = () => {
    setCurrentPage(prev => prev + 1);
  };

  // Handle explore latest posts
  const handleExploreLatest = () => {
    window.scrollTo({ top: document.getElementById('blog-listing')?.offsetTop - 100 || 0, behavior: 'smooth' });
  };

  // Update displayed posts when page changes
  useEffect(() => {
    const startIndex = 0;
    const endIndex = currentPage * postsPerPage;
    setDisplayedPosts(filteredPosts.slice(startIndex, endIndex));
  }, [currentPage, filteredPosts]);

  const hasMorePosts = displayedPosts.length < filteredPosts.length;

  return (
    <div className="bg-[#05070d] text-white min-h-screen">
      {/* Hero Section */}
      <BlogHero onExploreClick={handleExploreLatest} />

      {/* NO FILTER NAVIGATION - Removed as requested */}

      <div className="pt-8 md:pt-12">
        {/* Featured Posts */}
        <section className="py-8 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 md:mb-8 gap-4">
              <h2 className="text-2xl md:text-3xl font-bold text-white">Featured Articles</h2>
              <button 
                onClick={handleExploreLatest}
                className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm md:text-base"
              >
                View All <FiArrowRight />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {allBlogPosts.filter(post => post.featured).slice(0, 3).map((post) => (
                <BlogCard key={post.id} post={post} onClick={handlePostClick} />
              ))}
            </div>
          </div>
        </section>

        {/* All Posts */}
        <div id="blog-listing">
          <BlogListing 
            posts={displayedPosts}
            onLoadMore={handleLoadMore}
            hasMore={hasMorePosts}
            onPostClick={handlePostClick}
          />
        </div>

        {/* Newsletter */}
        <NewsletterCTA />

        {/* Recommended Posts */}
        <section className="py-8 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8 flex items-center gap-3">
              <FiAward className="text-purple-400 text-xl md:text-2xl" />
              Recommended Reads
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              {allBlogPosts
                .filter(post => !displayedPosts.some(p => p.id === post.id))
                .slice(0, 4)
                .map((post) => (
                  <BlogCard key={post.id} post={post} onClick={handlePostClick} />
                ))}
            </div>
          </div>
        </section>

        {/* Back to Top */}
        <div className="sticky bottom-4 md:bottom-8 flex justify-end px-4 md:px-6">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg hover:shadow-cyan-500/30 transition-all"
          >
            <FiArrowUpRight className="rotate-45" />
          </button>
        </div>
      </div>
    </div>
  );
};

// Blog Post Detail Component
export const BlogPostDetail = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const post = allBlogPosts.find(p => p.id === postId);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#05070d] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <button 
            onClick={() => navigate('/blog')}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white"
          >
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#05070d] text-white">
      {/* Back Button */}
      <button
        onClick={() => navigate('/blog')}
        className="fixed top-4 left-4 z-50 p-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all"
      >
        <FiArrowRight className="rotate-180" />
      </button>

      {/* Hero Image */}
      <div className="relative h-64 md:h-96">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-16">
        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm md:text-base text-gray-400 mb-6">
          <span className="px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
            {post.category}
          </span>
          <span className="flex items-center gap-2">
            <FiCalendar /> {post.date}
          </span>
          <span className="flex items-center gap-2">
            <FiClock /> {post.readTime}
          </span>
          <span className="flex items-center gap-2">
            <FiUser /> {post.author}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">{post.title}</h1>

        {/* Excerpt */}
        <p className="text-xl text-gray-300 mb-8">{post.excerpt}</p>

        {/* Content */}
        <div className="prose prose-lg prose-invert max-w-none">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-8">
          {post.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-full bg-white/5 text-gray-300 text-sm"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Related Posts */}
        {post.relatedPosts && post.relatedPosts.length > 0 && (
          <div className="mt-12 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {post.relatedPosts.map(relatedId => {
                const relatedPost = allBlogPosts.find(p => p.id === relatedId);
                return relatedPost ? (
                  <div
                    key={relatedPost.id}
                    onClick={() => navigate(`/blog/post/${relatedPost.id}`)}
                    className="p-4 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 cursor-pointer transition-all"
                  >
                    <h4 className="text-lg font-bold text-white mb-2">{relatedPost.title}</h4>
                    <p className="text-gray-400 text-sm">{relatedPost.excerpt}</p>
                  </div>
                ) : null;
              })}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <button
            onClick={() => navigate('/blog')}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
          >
            Back to All Posts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;