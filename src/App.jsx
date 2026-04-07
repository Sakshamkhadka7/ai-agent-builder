import React from "react";
import Navbar from "./commonFolder/Navbar";
import HeroSection from "./commonFolder/HeroSection";
import { Route, Routes } from "react-router-dom";
import Configurations from "./components/Configurations";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./commonFolder/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/agent" element={<Configurations />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
