import React from "react";
import { PROJECTS } from "../constants";
import { FaGithub } from "react-icons/fa6";
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        My Projects
      </motion.h2>
      <div>
        {PROJECTS.slice(0, 4).map((project, index) => (
          <div key={project.title} className="mb-8 flex flex-wrap lg:justify-center lg:gap-14">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/3"
            >
              <img
                src={project.image}
                alt={project.title}
                className="mb-6 rounded-xl hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-2/3"
            >
              <h3 className="mb-2 font-semibold text-3xl">{project.title}</h3>
              <p className="text-stone-400">{project.description}</p>
              <div className="mb-4 flex flex-wrap items-center">
                {project.technologies.map((tech) => (
                  <span key={tech} className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300 mt-2">
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
