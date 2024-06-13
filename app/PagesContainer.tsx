import React from "react";
import Home from "./screens/Home";
import Techstack from "./screens/Techstack";
import Works from "./screens/Works";
import About from "./screens/About";
import Footer from "./screens/Footer";

const PagesContainer = () => {
  return (
    <div className="bg-primary-300 ">
      <Home />
      <Techstack />
      <Works />
      <About />
      <Footer />
    </div>
  );
};

export default PagesContainer;
