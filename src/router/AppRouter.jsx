import { Routes, Route } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";

// Import your pages
import Home from "@/pages/Home/Home";
import AboutUs from "@/pages/About/AboutUs";    // Corrected path
import Services from "@/pages/Services/Services"; // Corrected path
import Blog, { BlogPostDetail } from "@/pages/Blog/Blog"; // Import Blog and BlogPostDetail
import Contact from "@/pages/Contact/Contact";    // Corrected path

const AppRouter = () => {
  return (
    <Routes>
      {/* Main Website Layout (Navbar + Footer) */}
      <Route element={<MainLayout />}>
        
        {/* Home Page (Default) */}
        <Route index element={<Home />} />
        
        {/* Dedicated Pages */}
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        
        {/* Blog Routes with Categories and Individual Posts */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:category" element={<Blog />} />
        <Route path="/blog/post/:postId" element={<BlogPostDetail />} />
        
        <Route path="/contact" element={<Contact />} />

        {/* Fallback: Redirect unknown URLs to Home */}
        <Route path="*" element={<Home />} />

      </Route>
    </Routes>
  );
};

export default AppRouter;