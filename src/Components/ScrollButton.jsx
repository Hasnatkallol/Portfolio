import React from "react";
import { FaArrowUp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const ScrollButton = () => {
  const handleScroll = () => {
    window.scrollTo({ top: 10, behavior: "smooth" });
  };
  return (
    <div
      onClick={handleScroll}
      className="fixed right-1 bottom-1 lg:right-5 lg:bottom-5  w-11 h-11 bg-[#38424f] text-white flex items-center justify-center border-b border-gray-500 hover:bg-[#2c333c] rounded-full transition-all"
    >
      <FaArrowUp size={18} />
    </div>
  );
};

export default ScrollButton;
