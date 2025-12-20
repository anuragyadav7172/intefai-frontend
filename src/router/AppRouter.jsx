import { Routes, Route } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import Home from "@/pages/Home/Home";

const AppRouter = () => {
  return (
    <Routes>
      {/* Main Website Layout */}
      <Route element={<MainLayout />}>
        
        {/* In a Single Page Application (SPA) for marketing, 
          all sections live inside the Home component.
        */}
        <Route index element={<Home />} />

        {/* Keep a fallback for 404s, but redirecting to "/" 
          is often better for single-page marketing sites. 
        */}
        <Route
          path="*"
          element={<Home />}
        />

      </Route>
    </Routes>
  );
};

export default AppRouter;