import React from "react";
import Footer from "./components/Footer";
import ProductShowcase from "./components/ProductShowcase";
import InterSec from "./components/InterSec";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";

import "./App.css";
const App = () => {
  return (
    <div className="bg-[#efefef]">
      <NavBar />
      <Hero />
      <InterSec />
      <ProductShowcase />
      <Footer />
    </div>
  );
};

export default App;
