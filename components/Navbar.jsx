import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 bg-gray-900/70 backdrop-blur-md shadow-md">
      <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-white font-bold text-xl">PRANAV T S S</div>
        <div className="space-x-6 text-gray-300 hidden md:flex">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#experience" className="hover:text-white">Experience</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </div>
    </nav>
  );
}