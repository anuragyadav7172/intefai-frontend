import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import SideScroller from "../components/common/SideScroller"; // Import it here

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#05070d]">
      <Navbar />
      
      {/* Add SideScroller here. It is fixed position, so it floats above everything else. */}
      <SideScroller />

      <main className="flex-grow">
        {/* This Outlet is where Home.jsx appears */}
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
};

export default MainLayout;