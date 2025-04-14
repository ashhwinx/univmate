import React, { useState } from "react";
import logo from "../images/univmatelogo.png"; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full bg-[#0a51ae] text-white font-[Poppins]">

        
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-[70px]">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img src={logo} alt="Univmate Logo" className="h-10" />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-lg font-semibold">
          <a href="#" className="hover:opacity-70">Class Notes</a>
          <a href="#" className="hover:opacity-70">Lab Work</a>
          <a href="#" className="hover:opacity-70">PYQs</a>
          <a href="#" className="hover:opacity-70">Syllabus</a>
        </div>
        

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-3xl focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-4 bg-[#0a51ae] text-lg font-semibold">
          <a href="#" className="hover:opacity-70">Class Notes</a>
          <a href="#" className="hover:opacity-70">Lab Work</a>
          <a href="#" className="hover:opacity-70">PYQs</a>
          <a href="#" className="hover:opacity-70">Syllabus</a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
