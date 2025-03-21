import React from "react";
import HeroSection from "./components/HeroSection";
import ImageShowcase from "./components/ImageShowcase";
import "./styles/App.css";

const App = () => {
  return (
    <div className="container">
      <HeroSection />
      <ImageShowcase />
    </div>
  );
};

export default App;