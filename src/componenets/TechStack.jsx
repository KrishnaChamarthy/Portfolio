import React from "react";
import { FaCss3Alt, FaHtml5, FaJs, FaNodeJs, FaPython } from "react-icons/fa6";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import {
  SiCplusplus,
  SiMongodb,
  SiPytorch,
  SiScikitlearn,
  SiTensorflow,
} from "react-icons/si";
import { motion } from "framer-motion";

const iconVarients = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [5, -5],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const TechStack = () => {
  return (
    <div className="pb-24 flex flex-col items-center">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        My Tech Stack
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4 lg:w-[70%] text-stone-500"
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVarients(3)}
          className="p-4 flex flex-col gap-1 items-center"
        >
          <FaPython className="text-5xl text-[#4584b6] lg:text-7xl" />
          <p className="text-lg lg:text-xl">Python</p>
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVarients(1.5)}
          className="p-4 flex flex-col gap-1 items-center"
        >
          <FaJs className="text-5xl text-[#F0DB4F] lg:text-7xl" />
          <p className="text-lg lg:text-xl">Java Script</p>
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVarients(2)}
          className="p-4 flex flex-col gap-1 items-center"
        >
          <SiCplusplus className="text-5xl text-[#044F88] lg:text-7xl" />
          <p className="text-lg lg:text-xl">C++</p>
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVarients(2.5)}
          className="p-4 flex flex-col gap-1 items-center"
        >
          <FaHtml5 className="text-5xl text-[#e34c26] lg:text-7xl" />
          <p className="text-lg lg:text-xl">HTML</p>
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVarients(1.5)}
          className="p-4 flex flex-col gap-1 items-center"
        >
          <FaCss3Alt className="text-5xl text-[#2965f1] lg:text-7xl" />
          <p className="text-lg lg:text-xl">CSS</p>
        </motion.div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4 text-stone-500"
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVarients(1.5)}
          className="p-4 flex flex-col gap-1 items-center"
        >
          <RiReactjsLine className="text-5xl text-cyan-400 lg:text-7xl" />
          <p className="text-lg lg:text-xl">React</p>
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVarients(2.5)}
          className="p-4 flex flex-col gap-1 items-center"
        >
          <FaNodeJs className="text-5xl  text-green-500 lg:text-7xl" />
          <p className="text-lg lg:text-xl">NodeJs</p>
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVarients(2)}
          className="p-4 flex flex-col gap-1 items-center"
        >
          <RiTailwindCssFill className="text-5xl text-[#06B6D4] lg:text-7xl" />
          <p className="text-lg lg:text-xl">Tailwind</p>
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVarients(3)}
          className="p-4 flex flex-col gap-1 items-center"
        >
          <SiMongodb className="text-5xl  text-[#4DB33D] lg:text-7xl" />
          <p className="text-lg lg:text-xl">MongoDB</p>
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVarients(5)}
          className="p-4 flex flex-col gap-1 items-center"
        >
          <SiPytorch className="text-5xl text-orange-500 lg:text-7xl" />
          <p className="text-lg lg:text-xl">PyTorch</p>
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVarients(4)}
          className="p-4 flex flex-col gap-1 items-center"
        >
          <SiScikitlearn className="text-5xl text-[#29ABE2] lg:text-7xl" />
          <p className="text-lg lg:text-xl">SkLearn</p>
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVarients(2.5)}
          className="p-4 flex flex-col gap-1 items-center"
        >
          <SiTensorflow className="text-5xl text-[#FF6F00] lg:text-7xl" />
          <p className="text-lg lg:text-xl">TensorFlow</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TechStack;
