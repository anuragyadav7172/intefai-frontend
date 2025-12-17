import { Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";

const Page = ({ title }) => (
  <div className="pt-32 text-center text-white">
    <h1 className="text-4xl font-bold">{title}</h1>
  </div>
);

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Page title="Home" />} />
        <Route path="/about" element={<Page title="About" />} />
        <Route path="/products" element={<Page title="Products" />} />
        <Route path="/social" element={<Page title="Social" />} />
        <Route path="/careers" element={<Page title="Careers" />} />
        <Route path="/contact" element={<Page title="Contact" />} />
      </Routes>
    </>
  );
}

export default App;
