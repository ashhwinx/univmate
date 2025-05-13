import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const subjects = [
  "Engineering Mathematics - II",
  "Engineering Chemistry",
  "Basic Civil Engineering",
  "Basic Mechanical Engineering",
  "Human Values",
];

const CNHero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const selectorRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const selector = selectorRef.current;
    const activeItem = container?.children[activeIndex + 1];
    if (activeItem && selector) {
      selector.style.top = activeItem.offsetTop + "px";
    }
  }, [activeIndex]);

  return (
    <div
      className="w-full bg-gradient-to-br from-[#0e0e0e] to-[#1f1f1f] text-white font-[Poppins] 
                 overflow-auto lg:overflow-hidden"
      style={{ height: "calc(100vh - 70px)" }} // 70px navbar
    >
      <div className="min-h-full px-4 sm:px-6 lg:px-16 py-10 flex flex-col gap-10">
        {/* Hero Text */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="bg-[#004aad] p-6 sm:p-8 rounded-xl text-center shadow-xl max-w-4xl mx-auto"
        >
          <p className="text-lg sm:text-xl font-medium leading-relaxed text-blue-100">
            Access class notes to stay ahead. Simplified explanations, concise
            summaries — ace your exams with ease.
          </p>
        </motion.div>

        {/* Subject Selector + Units */}
        <div className="flex flex-1 flex-col lg:flex-row gap-8">
          {/* Subject Selector */}
          <div className="flex justify-center lg:justify-start">
            <div
              className="relative w-[300px] bg-[#004aad] rounded-2xl py-3 overflow-hidden h-full"
              ref={containerRef}
            >
              <div
                ref={selectorRef}
                className="absolute left-3 w-[90%] h-[45px] bg-white rounded-xl transition-all duration-300 z-0"
              ></div>

              {subjects.map((subject, index) => (
                <div
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`relative z-10 cursor-pointer px-6 py-3 transition-colors duration-300 ${
                    activeIndex === index
                      ? "text-[#004aad] font-bold"
                      : "text-white"
                  }`}
                >
                  {subject}
                </div>
              ))}
            </div>
          </div>

          {/* Units Grid */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 gap-6 "
          >
            {[
              "Unit - I",
              "Unit - II",
              "Unit - III",
              "Unit - IV",
              "Unit - V",
              "Unit - VI",
            ].map((unit, index) => (
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
                key={index}
                className="bg-white text-[#004aad] font-semibold rounded-xl py-6 text-center shadow-md hover:shadow-lg cursor-pointer transition-all"
              >
                {unit}
                <br />
                <span className="text-sm font-medium text-gray-600">
                  Topic Name
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CNHero;
