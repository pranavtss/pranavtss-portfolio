import React, { useState, useEffect } from "react";
import profileSrc from "../src/assets/profile.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <nav className="fixed left-0 right-0 top-0 z-50 bg-gray-900/70 backdrop-blur-md shadow-md">
        <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img
              src={profileSrc}
              alt="Pranav T S S"
              className="w-12 h-12 md:w-10 md:h-10 rounded-full object-cover border border-white/20 cursor-pointer"
              loading="eager"
              decoding="async"
              role="button"
              aria-label="Open profile image"
              onClick={() => setOpen(true)}
            />
            <div className="text-white font-bold text-xl">PRANAV T S S</div>
          </div>
          <div className="space-x-6 text-gray-300 hidden md:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#experience" className="hover:text-white">Experience</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </nav>

      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60"
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute -top-2 -right-2 bg-black/60 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-black"
              aria-label="Close image"
            >
              ×
            </button>

            <img
              src={profileSrc}
              alt="Pranav T S S large"
              className="max-w-[90vw] max-h-[90vh] rounded-xl shadow-2xl animate-float"
            />
          </div>
        </div>
      )}
    </>
  );
}