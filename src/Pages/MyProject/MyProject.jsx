import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const MyProject = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div id="myProject" className="bg-white pb-4 pt-8 rounded-2xl">
      <div className="w-full  py-10">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-[28px] sm:text-[28px] lg:text-[28px] font-normal text-[#263040] relative inline-block group">
            My Projects
            <span className="absolute left-0 -bottom-1 h-[2px] bg-[#263040] w-0 transition-all duration-500 group-hover:w-full"></span>
          </h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2  lg:grid-cols-3 max-w-7xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white  p-2 rounded-2xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 sm:h-56 md:h-60 object-cover my-1 border-l-1 border-r-1 border-b-1 border-gray-200 rounded-2xl"
              />
              <div className="p-5 flex flex-col gap-4">
                <h3 className="text-xl sm:text-2xl font-semibold text-[#263040] leading-tight">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-3 mt-2">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm bg-[#263040] text-white rounded-full transition
               sm:text-sm sm:px-4 sm:py-2
               lg:text-xs lg:px-3 lg:py-[6px]
               hover:bg-[#1b2432]"
                  >
                    Live
                  </a>
                  <Link to={`/projectdetails/${project.id}`}>
                    <button
                      className="px-4 py-2 text-sm border border-[#263040] text-[#263040] rounded-full transition
               sm:text-sm sm:px-4 sm:py-2
               lg:text-xs lg:px-3 lg:py-[6px]
               hover:bg-[#263040] hover:text-white"
                    >
                      Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyProject;
