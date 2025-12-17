import { Routes, Route } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";

// Pages
import Home from "@/pages/Home/Home";
import Products from "@/pages/Products/Products";
import SocialHub from "@/pages/SocialHub/SocialHub";

// Temporary Placeholder (until real pages are built)
const PlaceholderPage = ({ title }) => (
  <div className="min-h-[60vh] flex items-center justify-center text-3xl text-primary">
    {title}
  </div>
);

const AppRouter = () => {
  return (
    <Routes>
      {/* Main Website Layout */}
      <Route element={<MainLayout />}>

        {/* Home */}
        <Route index element={<Home />} />

        {/* About */}
        <Route
          path="about"
          element={<PlaceholderPage title="About IntefAI" />}
        />

        {/* Products */}
        <Route
          path="products"
          element={<Products />}
        />

        {/* Social */}
        <Route
          path="social"
          element={<SocialHub />}
        />

        {/* Careers */}
        <Route
          path="careers"
          element={<PlaceholderPage title="Careers at IntefAI" />}
        />

        {/* Contact */}
        <Route
          path="contact"
          element={<PlaceholderPage title="Contact IntefAI" />}
        />

        {/* 404 Fallback (Optional but Recommended) */}
        <Route
          path="*"
          element={<PlaceholderPage title="404 | Page Not Found" />}
        />

      </Route>
    </Routes>
  );
};

export default AppRouter;
