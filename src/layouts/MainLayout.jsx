import { Outlet } from "react-router-dom";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer"; // if exists

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main className="pt-16">
  <Outlet />
</main>

      <Footer />
    </>
  );
};

export default MainLayout;
