import React, { useState, useEffect, useRef } from "react";

const subjects = [
  "Engineering Mathematics - II",
  "Engineering Chemistry",
  "Basic Civil Engineering",
  "Basic Mechanical Engineering",
  "Human Values",
];


const CNHero2 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const selectorRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const selector = selectorRef.current;
    const activeItem = container?.children[activeIndex + 1]; // +1 because selector is first child
    if (activeItem) {
      selector.style.top = activeItem.offsetTop + "px";
    }
  }, [activeIndex]);
  return (
    <div className=" px-4 sm:px-6 lg:px-16 py-6">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white p-6 sm:p-8 rounded-xl text-center shadow-lg">
        <p className="text-base sm:text-lg lg:text-xl font-medium leading-relaxed">
          Access a wide range of class notes to help you stay ahead in your
          studies. Our collection includes notes for various subjects, compiled
          to simplify complex concepts and make revision easier. Whether you're
          looking for concise summaries or detailed explanations, you'll find
          everything you need to ace your exams.
        </p>
      </div>

      {/* Subjects and Units */}
      <div className="flex flex-col lg:flex-row gap-6 mt-10">
        {/* Subjects List */}
        <div className="flex items-center justify-center h-full bg-blue-100 font-[Segoe UI]">
      <div
        className="relative w-[300px] bg-[#004aad]  text-white rounded-2xl overflow-hidden py-2"
        ref={containerRef}
      >
        <div
          ref={selectorRef}
          className="absolute left-0 w-66 ml-6 h-[45px] mt-2  bg-white rounded-2xl transition-all duration-300 z-0"
        ></div>

        {subjects.map((subject, index) => (
          <div
            key={index}
            className={`relative z-10 cursor-pointer m-3 px-6 py-3 transition-colors duration-300 ${
              activeIndex === index
                ? "text-[#004aad] font-bold"
                : "text-white"
            }`}
            onClick={() => setActiveIndex(index)}
          >
            {subject}
          </div>
        ))}
      </div>
    </div>

        {/* Units Grid */}
        <div className="bg-white rounded-xl p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:w-3/4 shadow-md">
          {[
            "Unit - I",
            "Unit - II",
            "Unit - III",
            "Unit - IV",
            "Unit - V",
            "Unit - VI",
          ].map((unit, index) => (
            <div
              key={index}
              className="bg-blue-100 text-blue-800 font-semibold rounded-xl py-6 text-center hover:bg-blue-200 transition-all"
            >
              {unit}
              <br />
              Name
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CNHero2;

