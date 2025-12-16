import { Routes, Route } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import Home from "@/pages/Home/Home";
import Products from "@/pages/Products/Products";
import SocialHub from "@/pages/SocialHub/SocialHub";

const PlaceholderPage = ({ title }) => (
  <div className="min-h-[60vh] flex items-center justify-center text-3xl text-primary">
    {title}
  </div>
);

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        {/* Home */}
        <Route index element={<Home />} />

        {/* About */}
        <Route
          path="about"
          element={<PlaceholderPage title="About IntefAI" />}
        />

        {/* Products */}
        <Route path="products" element={<Products />} />

        {/* ✅ Social Hub (FIXED) */}
        <Route path="social" element={<SocialHub />} />

        {/* Careers */}
        <Route
          path="careers"
          element={<PlaceholderPage title="Careers & Blog" />}
        />

        {/* Contact */}
        <Route
          path="contact"
          element={<PlaceholderPage title="Contact" />}
        />
      </Route>
    </Routes>
  );
};

export default AppRouter;
