import React from "react";

const Education = () => {
  return (
    <div className="pb-10 w-9/12 mx-auto">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-[28px] sm:text-[28px] lg:text-[28px] font-normal text-[#263040] relative inline-block group">
          Education
          <span className="absolute left-0 -bottom-1 h-[2px] bg-[#263040] w-0 transition-all duration-500 group-hover:w-full"></span>
        </h2>
      </div>
      <div className="bg-white shadow-md rounded-2xl p-6 mb-4 border border-gray-200">
        <h2 className="text-xl font-semibold text-[#1B2432] ">
          Bachelor of Computer Science (BSc)
        </h2>
        <p className="text-gray-600">Southeast University</p>
        <p className="text-sm text-gray-500">Completed: 2025</p>
        <p className="mt-2 text-gray-700">
          Major in Computer Science and Engineering. Specialized in MERN Stack
          development with hands-on experience in building full-stack web
          applications using MongoDB, Express.js, React, and Node.js. Also
          completed coursework in algorithms, software development, and data
          structures.
        </p>
      </div>
    </div>
  );
};

export default Education;
