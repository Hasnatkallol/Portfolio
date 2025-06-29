import React from "react";
import { FaLaptopCode, FaServer, FaBug, FaDatabase } from "react-icons/fa";

const services = [
  {
    icon: <FaLaptopCode className="text-3xl text-[#263040]" />,
    title: "Responsive Design",
    description:
      "Bringing your vision to life with the latest technology and design trends.",
  },
  {
    icon: <FaServer className="text-3xl text-[#263040]" />,
    title: "Full Stack Development",
    description:
      "Bringing your vision to life with the latest technology and design trends.",
  },
  {
    icon: <FaDatabase className="text-3xl text-[#263040]" />,
    title: "Database Management",
    description:
      "Bringing your vision to life with the latest technology and design trends.",
  },
  {
    icon: <FaBug className="text-3xl text-[#263040]" />,
    title: "Debugging",
    description:
      "Bringing your vision to life with the latest technology and design trends.",
  },
];

const Service = () => {
  return (
    <section id="services" className="py-12  lg:py-16 mb-2 px-4 md:px-6 lg:px-12  bg-[white] rounded-b-[20px] lg:rounded-b-[40px]">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-[28px] sm:text-[28px] lg:text-[28px] font-normal text-[#263040] relative inline-block group">
          Services I Offer
          <span className="absolute left-0 -bottom-1 h-[2px] bg-[#263040] w-0 transition-all duration-500 group-hover:w-full"></span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 w-10/12 mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white  rounded-[20px] p-6 flex flex-col items-start gap-4 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-[#EFEFED] rounded-full">
              {service.icon}
            </div>
            <h3 className="text-lg font-semibold text-[#263040]">
              {service.title}
            </h3>
            <p className="text-sm text-[#4A5568]">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
