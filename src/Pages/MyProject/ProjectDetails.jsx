import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData, useParams } from "react-router";

const ProjectDetails = () => {
  const projects = useLoaderData();
  const { id } = useParams();
  const singleProject = projects.find((project) => project.id === parseInt(id));
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-[28px] sm:text-[28px] lg:text-[28px] font-bold text-[#263040] relative inline-block group">
          {singleProject.title} – Project Details
          <span className="absolute left-0 -bottom-1 h-[2px] bg-[#263040] w-0 transition-all duration-500 group-hover:w-full"></span>
        </h2>
      </div>
      <div className="">
        <div
          key={singleProject.id}
          className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition"
        >
          <img
            src={singleProject.image}
            alt={singleProject.title}
            className="w-full h-56 object-cover"
          />
          <div className="p-5 space-y-3">
            <h3 className="text-xl font-semibold text-[#263040]">
              {singleProject.title}
            </h3>
            <p className="text-sm text-gray-700">{singleProject.description}</p>

            <div>
              <h4 className="font-medium text-[#263040]">Tech Stack:</h4>
              <ul className="list-disc list-inside text-sm text-gray-700">
                {singleProject.technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-[#263040]">Challenges:</h4>
              <p className="text-sm text-gray-700">
                {singleProject.challenges}
              </p>
            </div>

            <div>
              <h4 className="font-medium text-[#263040]">
                Future Improvements:
              </h4>
              <p className="text-sm text-gray-700">
                {singleProject.improvements}
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={singleProject.live}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1 text-sm bg-[#263040] text-white rounded-full hover:bg-[#1b2432] transition"
              >
                Live Site
              </a>
              <a
                href={singleProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1 text-sm border border-[#263040] text-[#263040] rounded-full hover:bg-[#263040] hover:text-white transition"
              >
                GitHub (Client)
              </a>
            </div>
          </div>
          <div className="flex justify-end mb-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-[#263040] hover:text-[#1b2432] text-sm sm:text-base font-medium transition"
            >
              <FaArrowLeft className="text-base" />
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
