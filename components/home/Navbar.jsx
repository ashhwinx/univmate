import React, { useState } from "react";
import logo from "./univmatelogo.png";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full bg-[#0a51ae] text-white font-[Poppins]">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-[70px]">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img src={logo} alt="Univmate Logo" className="h-10" />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 text-lg font-semibold">
          {["Class Notes", "Lab Work", "PYQs", "Syllabus"].map(
            (item, index) => (
              <a
                key={index}
                href="#"
                className="transition-opacity duration-300 hover:opacity-60"
              >
                {item}
              </a>
            )
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-3xl focus:outline-none"
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden px-4 pb-4 flex flex-col gap-4 bg-[#0a51ae] text-lg font-semibold"
          >
            <a
              href="#"
              className="hover:opacity-70 transition-opacity duration-300"
            >
              Class Notes
            </a>
            <a
              href="#"
              className="hover:opacity-70 transition-opacity duration-300"
            >
              Lab Work
            </a>
            <a
              href="#"
              className="hover:opacity-70 transition-opacity duration-300"
            >
              PYQs
            </a>
            <a
              href="#"
              className="hover:opacity-70 transition-opacity duration-300"
            >
              Syllabus
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;


