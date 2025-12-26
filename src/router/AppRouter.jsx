import { Routes, Route } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import Home from "@/pages/Home/Home";
import About from "../pages/Home/About";

const AppRouter = () => {
  return (
    <Routes>
      {/* Main Website Layout */}
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
         <Route path="/about" index element={<About />} />
          <Route path="/" index element={<Home />} />

        <Route
          path="*"
          element={<Home />}
        />

      </Route>
    </Routes>
  );
};

export default AppRouter;