import React from "react";

import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaBootstrap,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import {
  SiDaisyui,
  SiTailwindcss,
  SiFirebase,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

const MySkills = () => {
  const skills = [
  {
    id: 1,
    title: "HTML5",
    icon: <FaHtml5 className="text-orange-600" />,
  },
  {
    id: 2,
    title: "CSS3",
    icon: <FaCss3Alt className="text-blue-600" />,
  },
  {
    id: 3,
    title: "JavaScript",
    icon: <FaJsSquare className="text-yellow-400" />,
  },
  {
    id: 4,
    title: "Bootstrap",
    icon: <FaBootstrap className="text-purple-600" />,
  },
  {
    id: 5,
    title: "DaisyUI",
    icon: <SiDaisyui className="text-pink-500" />,
  },
  {
    id: 6,
    title: "Tailwind",
    icon: <SiTailwindcss className="text-sky-400" />,
  },
  {
    id: 7,
    title: "React.js",
    icon: <FaReact className="text-cyan-400" />,
  },
  {
    id: 8,
    title: "Firebase",
    icon: <SiFirebase className="text-yellow-500" />,
  },
  {
    id: 9,
    title: "Node.js",
    icon: <FaNodeJs className="text-green-600" />,
  },
  {
    id: 10,
    title: "Express.js",
    icon: <SiExpress className="text-gray-700" />,
  },
  {
    id: 11,
    title: "MongoDB",
    icon: <SiMongodb className="text-green-500" />,
  },
  {
    id: 12,
    title: "GitHub",
    icon: <FaGithub className="text-black" />,
  },
];


  return (
    <div className=" py-12 w-9/12 mx-auto lg:py-16" id="mySkill">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-[28px] sm:text-[28px] lg:text-[28px] font-normal text-[#263040] relative inline-block group">
          My Skills
          <span className="absolute left-0 -bottom-1 h-[2px] bg-[#263040] w-0 transition-all duration-500 group-hover:w-full"></span>
        </h2>
      </div>

      <div className="grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 gap-6 justify-center items-center ">
        {skills.map((skill) => (
          <div key={skill.id} className="flex flex-col sm:flex-row gap-3  rounded-xl  bg-white px-5 py-2 items-center">
            <div className="text-4xl  text-[#263040]  ">{skill.icon}</div>
            <p className="text-sm text-[#1E2939]  font-semibold">{skill.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MySkills;
