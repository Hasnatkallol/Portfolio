import React from "react";
import { FaCopy } from "react-icons/fa";
import { toast } from "react-toastify";
import SocialButton from "./SocialButton";

const Hero = () => {
  const email = "hasnatkallol1971@gmail.com";

  const handleCopy = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => toast.info("Email copied to clipboard!"))
      .catch(() => toast.error("Failed to copy email!"));
  };

  return (
    <div id="banner" className="bg-white">
      <div className="p-3 mx-5 mt-5 lg:p-4 transition-all bg-[#EFEFED]  rounded-[20px] lg:rounded-[40px] relative overflow-hidden">
        {/* Navbar section */}
        <div className="absolute top-3 lg:top-5 left-1/2 -translate-x-1/2 w-[95%] md:w-5/6 lg:w-4/5 flex justify-between items-center px-2 md:px-0 py-3 lg:py-2">
          <h1 className="text-lg ml-3 sm:text-xl font-bold text-[#263040]">
            HASNAT
          </h1>
          <a
            href="https://drive.google.com/file/d/1ZXdZEB7o4HA-yDJ53zzbWafLq_Dju4qf/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 lg:px-5 lg:py-2 rounded-full bg-white text-[#263040] text-sm sm:text-base hover:shadow-md transition"
          >
            View Resume
          </a>
        </div>

        {/* Main content */}
        <div className="mt-20 md:mt-24 lg:mt-28 px-4 md:px-0 w-[95%] md:w-5/6 lg:w-4/5 mx-auto flex flex-col items-center lg:items-start gap-5 md:gap-6 text-center lg:text-left">
          <div className="text-[#263040] font-bold">
            <div className="text-[18px] sm:text-[22px] lg:text-[28px] font-light">
              Hello, I'm
            </div>
            <div className="text-[23px] sm:text-[48px] md:text-[60px] lg:text-[84px] uppercase leading-tight font-normal">
              Md Abul Hasnat Kallol
            </div>
          </div>

          {/* Underlined subtitle */}
          <div className="relative group w-fit">
            <p className="text-[18px] sm:text-[22px] lg:text-[28px] font-medium text-[#263040]">
              MERN Stack Developer | Bangladesh
            </p>
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#263040] transition-all duration-500 group-hover:w-full"></span>
          </div>

          {/* Copy Email Button */}
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-white text-[#263040] text-sm sm:text-base shadow hover:shadow-md transition-all select-none"
          >
            <FaCopy className="text-base" />
            <span>Email</span>
          </button>
        </div>
      </div>
      <button className="fixed right-4 top-1/2 transform -translate-y-1/2  text-white px-4 py-2   z-50">
        <SocialButton></SocialButton>
      </button>
    </div>
  );
};

export default Hero;
