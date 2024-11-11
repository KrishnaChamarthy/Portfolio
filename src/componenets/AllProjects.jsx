import React from "react";
import { PROJECTS } from "../constants";
import { FaGithub } from "react-icons/fa6";
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";
import { motion } from "framer-motion";

const AllProjects = () => {
  return (
    <div className="pb-4 mt-20">
      {PROJECTS.map((project, index) => (
        <div
          key={project.title}
          className={`mb-10 flex ${
            index % 2 === 1 ? "flex-col-reverse" : "flex-col"
          } lg:grid lg:grid-cols-4 lg:gap-10 `}
        >
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5 }}
            className="w-full lg:col-span-1"
          >
            {index % 2 === 0 && (
              <img
                src={project.image}
                alt={project.title}
                className="mb-6 rounded-xl hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            )}
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
            transition={{ duration: 1.5 }}
            className={`w-full lg:col-span-2 flex flex-col ${
              index % 2 === 0 ? "lg:items-start" : "lg:items-end"
            }`}
          >
            <h3 className="mb-2 font-semibold text-3xl">{project.title}</h3>
            <p
              className={`text-stone-400 ${
                index % 2 === 0 ? "lg:text-start" : "lg:text-end"
              }`}
            >
              {project.description}
            </p>
            <div className="mb-4 flex flex-wrap items-center">
              {project.technologies.map((tech) => (
                <span
                  className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300 mt-2"
                  key={tech}
                >
                  {tech}
                </span>
              ))}
            </div>

            {(project.github || project.live) && (
              <div className="flex items-center gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} GitHub`}
                    className="text-stone-700 text-base py-2 px-4 bg-stone-200 flex items-center gap-1 rounded-full"
                  >
                    <FaGithub />
                    Github
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} Live`}
                    className="text-stone-700 text-base py-2 px-4 bg-stone-200 flex items-center gap-1 rounded-full"
                  >
                    <HiMiniArrowTopRightOnSquare className="text-lg" />
                    Live
                  </a>
                )}
              </div>
            )}
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1.5 }}
            className="w-full lg:col-span-1"
          >
            {index % 2 === 1 && (
              <img
                src={project.image}
                alt={project.title}
                className="mb-6 rounded-xl hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            )}
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default AllProjects;
