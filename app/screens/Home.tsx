"use client";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { easeInOut, motion } from "framer-motion";

const home = () => {
  const variantsHeading = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 2.4 },
    },
  };
  const itemHeading = {
    hidden: {
      opacity: 0,
      y: -50,
      x: -50,
    },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.6,
        ease: easeInOut,
        type: "spring",
        bounce: 0.5,
      },
    },
  };

  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 3.3 },
    },
  };
  const item = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: easeInOut,
        type: "spring",
        bounce: 0.5,
      },
    },
  };

  return (
    <div className="text-grey-700 py-6 px-10 h-screen flex flex-col justify-between text-sm">
      <motion.div
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 3.5,
          ease: easeInOut,
          type: "spring",
          bounce: 0.5,
        }}
        className="  flex flex-row justify-between font-semibold"
      >
        <div>D.S.</div>
        <div>Works</div>
        <a
          className="flex flex-row items-center"
          href="https://drive.google.com/file/d/1mrg9gDfp2V8SVTuBJohyyAJ-xFXMUXw8/view?usp=sharing"
        >
          <div>Resume</div> <MdArrowOutward />
        </a>
        <a
          className="flex flex-row items-center"
          href="https://www.linkedin.com/in/dakshsri/"
        >
          <div>linkedin</div> <MdArrowOutward />
        </a>
        <a
          className="flex flex-row items-center"
          href="https://github.com/ruxrup"
        >
          <div>Github</div> <MdArrowOutward />
        </a>
      </motion.div>
      <motion.div
        variants={variantsHeading}
        initial="hidden"
        animate="show"
        className=" text-8xl flex flex-col gap-5 font-extrabold ml-10 drop-shadow-[0_1.2px_1.2px_#404040]"
      >
        <motion.div variants={itemHeading}>
          I <span className="">DEVELOP</span>
        </motion.div>
        <motion.div variants={itemHeading}>THINGS OUT OF</motion.div>
        <motion.div variants={itemHeading}>CURIOSITY</motion.div>
      </motion.div>
      <motion.div
        variants={variants}
        initial="hidden"
        animate="show"
        className=" font-semibold flex flex-row justify-between items-end"
      >
        <div className="flex flex-col">
          <motion.div variants={item}>Motivated by enthusiasm and a</motion.div>
          <motion.div variants={item}>
            {" "}
            profound curiosity about the{" "}
          </motion.div>
          <motion.div variants={item}>processes of web development</motion.div>
          <motion.div variants={item}>and design.</motion.div>
        </div>
        <motion.div variants={item} className=" text-3xl font-bold">
          DAKSH SRIVASTAVA
        </motion.div>
      </motion.div>
    </div>
  );
};

export default home;
