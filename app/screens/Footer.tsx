"use client";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
import Time from "./Components/Time";
import { motion } from "framer-motion";
import { ScrollToHash } from "./Components/ScrollToHash";

const Footer = () => {
  return (
    <div className="text-grey-800 py-6 px-10  flex flex-col rounded-t-3xl bg-primary-300 mt-12 gap-[5rem]">
      <div className="w-full flex justify-center">
        <div className="flex items-center justify-center">
          <motion.div
            className="bg-grey-900 w-12 h-12"
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 180, 180, 0],
              borderRadius: ["0%", "0%", "50%", "50%", "0%"],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 0.5,
              times: [0, 0.5, 0.75, 0.875, 1],
            }}
          />
          <motion.div
            className=" w-12 h-12 bg-primary-400"
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 180, 180, 0],
              borderRadius: ["0%", "0%", "50%", "50%", "0%"],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 0.5,
            }}
          />
        </div>
      </div>
      <div className="mt-12 ml-10 flex flex-col gap-[1rem]">
        <div className=" text-8xl font-extrabold opacity-80 text-center flex justify-center gap-10">
          THAT&apos;S ALL FOLKS!
        </div>
        <div className="flex flex-row gap-16 text-lg mt-32">
          <div className="w-3/6">
            <div className="mb-1 font-bold opacity-80">NAVIGATION</div>
            <div className="h-[0.5px] w-full bg-grey-800 opacity-20" />
            <div className="opacity-60 font-medium mt-5 flex flex-col gap-1">
              <div
                onClick={() => ScrollToHash("home")}
                className=" cursor-pointer"
              >
                Home
              </div>
              <div
                onClick={() => ScrollToHash("services")}
                className=" cursor-pointer"
              >
                Services
              </div>
              <div
                onClick={() => ScrollToHash("works")}
                className=" cursor-pointer"
              >
                Works
              </div>
              <div
                onClick={() => ScrollToHash("about")}
                className=" cursor-pointer"
              >
                About
              </div>
            </div>
          </div>
          <div className="w-3/6">
            <div className="mb-1 font-bold opacity-80">SOCIALS</div>
            <div className="h-[0.5px] w-full bg-grey-800 opacity-20" />
            <div className="opacity-60 font-medium mt-5 flex flex-col gap-1">
              <a href="https://www.linkedin.com/in/dakshsri/">linkedin</a>
              <a href="https://github.com/ruxrup">Github</a>
              <a href="https://leetcode.com/ruxrup/">Leetcode</a>
            </div>
          </div>
        </div>
        <div className="flex flex-row mt-5 gap-8 items-end">
          <div className=" text-3xl font-extrabold opacity-80 w-3/6">
            <div>© 2024</div>
            <div>Daksh Srivastava</div>
          </div>
          <div className="text-bottom ">
            <div className=" font-bold opacity-80">LOCAL TIME</div>
            <div className=" font-medium opacity-60">
              {`${Time("chandigarh", "+5.5")}, CHANDIGARH, IN`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
