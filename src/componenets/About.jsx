import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

const About = () => {
  return (
    <div className="pb-4 flex flex-col items-center">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="mt-14 text-center text-2xl"
      >
        Hey, I'm
      </motion.div>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-4 mb-20 text-center text-6xl bg-gradient-to-tl from-stone-100 to-stone-800 bg-clip-text text-transparent tracking-tight"
      >
        KRISHNA CHAMARTHY
      </motion.div>
      <div>
        <div className="mb-12 flex flex-wrap lg:justify-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/4"
          >
            <p className="mb-2 text-4xl text-stone-300">Background</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-3xl lg:w-3/4 "
          >
            <p className="mb-3 text-2xl text-stone-400">
              I'm currently a 3rd year student at MIT World Peace University,
              Pune.
            </p>
            <p className="mb-3 text-2xl text-stone-400">
              I'm a passionate developer with a focus on full-stack web
              development and a growing interest in machine learning. My
              expertise lie in full-stack web developemnt, but I am equally
              driven to explore machine learning, aiming to apply intelligent
              solutions to solve complex challenges and enhance data-driven
              applications.
            </p>
            <p className="mb-3 text-2xl text-stone-400">
              With a commitment to continuous learning, I’m dedicated to
              refining my technical skills, keeping up with industry trends, and
              contributing to impactful projects.
            </p>
          </motion.div>
        </div>
        <div className="mb-12 flex flex-wrap lg:justify-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/4"
          >
            <p className="mb-2 text-4xl text-stone-300">Education</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-3xl lg:w-3/4 "
          >
            <p className="mb-3 text-2xl text-stone-400">
              Bachelor of Technology in Computer Science and Engineering <br />
              <span className="text-stone-500">
                MIT World Peace University (2022 - 2026)
              </span>
            </p>
          </motion.div>
        </div>
        <div className="mb-12 flex flex-wrap lg:justify-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/4"
          >
            <p className="mb-2 text-4xl text-stone-300">
              Programming Languages
            </p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-3xl lg:w-3/4 "
          >
            <ul className="mb-3 text-2xl text-stone-400 flex flex-col gap-4 list-disc">
              <li>Python</li>
              <li>JavaScript</li>
              <li>HTML & CSS</li>
              <li>C++</li>
              <li>SQL</li>
            </ul>
          </motion.div>
        </div>
        <div className="mb-12 flex flex-wrap lg:justify-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/4"
          >
            <p className="mb-2 text-4xl text-stone-300">Skills</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-3xl lg:w-3/4 "
          >
            <ul className="mb-3 text-2xl text-stone-400 flex flex-col gap-4 list-disc">
              <li>
                <span className="font-semibold text-stone-300">Frontend:</span>{" "}
                JQuery, React, Tailwind, Bootstrap, Vue
              </li>
              <li>
                <span className="font-semibold text-stone-300">Backend:</span>{" "}
                NodeJs, Redis
              </li>
              <li>
                <span className="font-semibold text-stone-300">
                  Machine Learning:
                </span>{" "}
                PyTorch, TensorFlow, Scikit-Learn
              </li>
              <li>
                <span className="font-semibold text-stone-300">
                  Data Engineering:
                </span>{" "}
                Pandas, Numpy, MatPlotLib, Tableaum, OLAPCube
              </li>
              <li>
                <span className="font-semibold text-stone-300">Database:</span>{" "}
                MySQL, PostgreSQL, MongoDB, Firebase
              </li>
              <li>
                <span className="font-semibold text-stone-300">Testing:</span>{" "}
                Jest, Selenium, Cypress
              </li>
              <li>
                <span className="font-semibold text-stone-300">Deploy:</span>{" "}
                Aws, Azure, Vercel, Netlify
              </li>
            </ul>
          </motion.div>
        </div>
        <div className="mb-12 flex flex-wrap lg:justify-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/4"
          >
            <p className="mb-2 text-4xl text-stone-300">Certificates</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-3xl lg:w-3/4 "
          >
            <ul className="mb-3 text-2xl text-stone-400 flex flex-col gap-4 list-disc">
              <li>
                Machine Learning A-Z: AI, Python - Udemy -{" "}
                <span className="text-xl text-stone-300">Ongoing</span>
              </li>
              <li>
                100 Days of Code: The Complete Python Pro Bootcamp - Udemy -{" "}
                <a
                  href="https://www.udemy.com/certificate/UC-5d285341-86b2-4ee7-be65-f744808aa8e3/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-stone-300"
                >
                  View Certificate
                </a>
              </li>
              <li>
                The Complete 2024 Web Development Bootcamp - Udemy -{" "}
                <a
                  href="https://www.udemy.com/certificate/UC-48d6e520-bbfe-462c-ab96-6eca399b4d93/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-stone-300"
                >
                  View Certificate
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Contact Me
      </motion.h2>
      <div className="mb-8 flex flex-wrap lg:grid lg:grid-cols-2 lg:gap-20 w-[60%] ">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="w-full flex items-center justify-center"
        >
          <a
            href="https://www.linkedin.com/in/krishna-chamarthy-291409187/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-4 flex items-center gap-5 text-3xl justify-center w-full bg-stone-500 rounded-xl"
          >
            <FaLinkedin />
            <span className="text-xl">LinkedIn/KrishnaChamarthy </span>
          </a>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="w-full flex items-center justify-center"
        >
          <a
            href="https://github.com/KrishnaChamarthy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-4 flex items-center gap-5 text-3xl justify-center w-full bg-stone-500 rounded-xl"
          >
            <FaGithub />
            <span className="text-xl">Github/KrishnaChamarthy </span>
          </a>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="w-full flex items-center justify-center"
        >
          <a
            href="https://x.com/KrishnaC9236"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="p-4 flex items-center gap-5 text-3xl justify-center w-full bg-stone-500 rounded-xl"
          >
            <FaXTwitter />
            <span className="text-xl">@KrishnaC9236 </span>
          </a>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="w-full flex items-center justify-center"
        >
          <div className="p-4 flex items-center gap-5 text-3xl justify-center w-full bg-stone-500 rounded-xl">
            <MdOutlineEmail />
            <span className="text-xl">chamarthysr@gmail.com </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
