import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0052cc] text-white h-auto sm:h-[210px] px-6 py-4 flex flex-col justify-between items-center text-center">
      {/* Top Text */}
      <div>
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
          Join UnivMate Today!
        </h2>
        <p className="text-xs sm:text-sm md:text-base mt-1">
          Made with <span className="text-red-500">♥</span> by students, for students
        </p>
        <p className="text-xs sm:text-sm md:text-base">© 2025 UnivMate</p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-2 sm:mt-4">
        <button className="bg-white text-[#0052cc]  px-5 py-2 rounded-full font-medium text-sm sm:text-base hover:bg-gray-100 transition">
          Sign Up
        </button>
        <button className="bg-white text-[#0052cc]  px-5 py-2 rounded-full font-medium text-sm sm:text-base hover:bg-gray-100 transition">
          Login
        </button>
      </div>

      {/* Bottom Links */}
      <div className="text-[10px] sm:text-xs md:text-sm flex gap-4 mt-2 sm:mt-3  ">
        <a href="#" className="hover:underline">About</a>
        <a href="#" className="hover:underline">Contact</a>
        <a href="#" className="hover:underline">Privacy</a>
      </div>
    </footer>
  );
};

export default Footer;