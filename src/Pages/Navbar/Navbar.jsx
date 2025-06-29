import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 100); // Show after 100px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed  border-1 border-gray-300 h-auto w-auto rounded-2xl flex  top-0 left-1/2 -translate-x-1/2 z-50 bg-white shadow-md transition-transform duration-500 ${
        show ? "translate-y-10" : "-translate-y-30"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 py-2 sm:px-5 lg:px-4 lg:py-3 overflow-x-auto sm:overflow-visible">
        <ul className="flex flex-nowrap sm:flex-wrap justify-start sm:justify-center items-center gap-2 sm:gap-6 text-[#263040] text-[12px] sm:text-sm whitespace-nowrap sm:whitespace-normal">
          <li>
            <a href="#banner" className="hover:text-gray-500 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-gray-500 transition">
              Services
            </a>
          </li>
          <li>
            <a href="#mySkill" className="hover:text-gray-500 transition">
              Skills
            </a>
          </li>
          <li>
            <a href="#myProject" className="hover:text-gray-500  transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-500 transition">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
