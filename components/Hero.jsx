import React from "react";
import Background1 from "../images/Background 1.png";
import Background2 from "../images/Background 2.png";

const Hero = () => {
  return (
    <div className="w-screen bg-emerald-800">
      <div className="relative w-full bg-white overflow-hidden h-[500px] md:h-[410px]">
        {/* Background Image */}
        <img
          src={Background1}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-10 md:py-16 space-y-8 md:space-y-0 h-full">
          {/* Text Section */}
          <div className="md:w-1/2 flex justify-center items-center">
            <div className="bg-[#0a51ae] text-red-100 text-lg md:text-xl font-normal py-6 px-4 md:px-6 rounded-full max-w-xl text-center">
              UnivMate is your one-stop platform for everything a college
              student needs — whether it's class notes, lab work, PYQs, or your
              syllabus — we've got it all in place.
            </div>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 flex justify-center items-center">
            <img
              src={Background2}
              alt="Person"
              className="w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

