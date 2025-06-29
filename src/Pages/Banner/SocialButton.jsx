import React from "react";
import { FaCopy, FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { toast } from "react-toastify";

const SocialButton = () => {
  const email = "hasnatkallol1971@gmail.com";

  const handleCopy = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => toast.info("Email copied to clipboard!"))
      .catch(() => toast.error("Failed to copy email!"));
  };
  return (
    <div className="fixed left-0 top-1/2 transform -translate-y-1/2 flex flex-col z-50">
      <a
        onClick={handleCopy}
        className="w-11 h-11 bg-[#38424f] text-white flex items-center justify-center border-b border-gray-500 hover:bg-[#2c333c] rounded-t-2xl transition-all"
        title="LinkedIn"
      >
        <SiGmail size={18} />
      </a>
      <a
        href="https://www.linkedin.com/in/hasnat-kallol/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-11 h-11 bg-[#38424f] text-white flex items-center justify-center border-b border-gray-500 hover:bg-[#2c333c]  transition-all"
        title="LinkedIn"
      >
        <FaLinkedinIn size={18} />
      </a>
      <a
        href="https://github.com/Hasnatkallol"
        target="_blank"
        rel="noopener noreferrer"
        className="w-11 h-11 bg-[#38424f] text-white flex items-center justify-center border-b border-gray-500 hover:bg-[#2c333c] transition-all"
        title="GitHub"
      >
        <FaGithub size={18} />
      </a>
      <a
        href="https://wa.me/8801705132021"
        target="_blank"
        rel="noopener noreferrer"
        className="w-11 h-11 bg-[#38424f] text-white flex items-center justify-center hover:bg-[#2c333c] rounded-b-2xl transition-all"
        title="WhatsApp"
      >
        <FaWhatsapp size={18} />
      </a>
    </div>
  );
};

export default SocialButton;
