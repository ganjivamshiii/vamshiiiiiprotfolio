import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed  top-3 w-full z-10 bg-white/0 backdrop-blur-xl border border-white/20 p-4 ">
  <div className="flex justify-center space-x-6">
    <a href="#experience" className="text-white hover:text-gray-200">Experience</a>
    <a href="#opensource" className="text-white hover:text-gray-200">Open Source</a>
    <a href="#skills" className="text-white hover:text-gray-200">Skills</a>
    <a href="#projects" className="text-white hover:text-gray-200">Projects</a>
  </div>
</nav>

  );
};

export default Navbar;
