import React from "react";
import profilePic from "../assets/KrishnaProfile.jpeg";
import { FaGithub, FaInstagram, FaLinkedin, FaLocationDot, FaXTwitter } from "react-icons/fa6";
import {motion} from "framer-motion";

const containerVarients = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.4,
    },
  },
};

const childVarients = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};
const iconVarients = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <motion.img
              src={profilePic}
              alt="Krishna Chamarthy"
              className="border border-stone-900 rounded-3xl"
              width={650}
              height={650}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <motion.div initial="hidden" animate="visible" variants={containerVarients} className="flex flex-col items-center lg:items-start mt-10">
          <motion.h2 variants={childVarients} className="pb-2 text-4xl tracking-tighter lg:text-8xl">
              Krishna Chamarthy
            </motion.h2>

            <motion.span variants={childVarients} className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent">
              Full Stack Developer
            </motion.span>
          
            <motion.span variants={childVarients} className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent">
            Machine Learning Enthusiast
            </motion.span>

            <motion.p variants={childVarients} className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tight">
              I am a passionate full stack developer with a knack for crafting
              robust and scalable web applications. I also have a ever-growing
              interest in machine learning and its applications.
            </motion.p>
            <motion.div variants={iconVarients} className="mt-4 text-4xl flex items-center justify-center gap-4">
              <a
                href="https://www.linkedin.com/in/krishna-chamarthy-291409187/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/KrishnaChamarthy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://x.com/KrishnaC9236"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaXTwitter />
              </a>
              <a href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="bg-white rounded-full py-3 px-6 text-stone-800 text-xl">Resume</a>
            </motion.div>
            <motion.div variants={iconVarients} className="mt-3 text-xl flex w-full items-center justify-center lg:justify-start gap-2">
                <FaLocationDot />
                Pune, Maharashtra, India
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
