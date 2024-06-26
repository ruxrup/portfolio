"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      id="about"
      className="bg-grey-950  h-auto px-10 pb-32  flex flex-col rounded-b-3xl text-primary-300 lg:h-fit lg:pb-64"
    >
      <div className=" mt-16 ml-10 flex flex-col gap-[4rem]">
        <div className=" text-8xl font-extrabold opacity-80 xl:text-7xl">
          ABOUT ME
        </div>
        <div className="flex flex-col justify-center items-center last:text-end xl:items-start xl:relative lg:top-24 lg:right-44">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 0.8 }}
            transition={{ duration: 2, type: "spring", delay: 1.5 }}
            className="text-2xl font-normal w-96 self-start absolute text-left xl:top-10 xl:left-80 xl:text-xl"
          >
            {"   "}I am a 20-y.o. web designer and developer, deeply passionate
            about creating and bringing digital experiences to life.
          </motion.div>
          <div className="flex flex-row ">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 0.5 }}
              viewport={{ amount: "all" }}
              transition={{ duration: 1, type: "spring", delay: 1 }}
              className="flex flex-row justify-center items-center content-center relative  xl:left-[40rem] xl:top-[1rem] lg:hidden"
            >
              <div className="h-[30rem] w-[30rem] bg-primary-300 opacity-10 rounded-full absolute xl:h-[20rem] xl:w-[20rem]"></div>
              <div className="h-[20rem] w-[20rem] bg-primary-300 opacity-10 rounded-full absolute xl:h-[10rem] xl:w-[10rem]"></div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ amount: "all", once: true }}
              transition={{ duration: 1.5, type: "spring" }}
              style={{ zIndex: 3 }}
              className="xl:scale-60 lg:hidden"
            >
              <Image
                src="/daksh.png"
                alt="developer"
                width={300}
                height={300}
              />
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 0.5 }}
              viewport={{ amount: "all" }}
              transition={{ duration: 1, type: "spring", delay: 1 }}
              className="flex flex-row justify-center items-center content-center relative xl:hidden"
            >
              <div className="h-[30rem] w-[30rem] bg-primary-300 opacity-10 rounded-full absolute"></div>
              <div className="h-[20rem] w-[20rem] bg-primary-300 opacity-10 rounded-full absolute"></div>
            </motion.div>
          </div>
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 0.8 }}
            transition={{ duration: 2, type: "spring", delay: 1.5 }}
            className="text-2xl font-normal w-96 self-end absolute xl:absolute xl:bottom-10 xl:text-xl lg:text-left"
          >
            Currently, I am pursuing my bachelor&apos;s degree, which I will
            complete in May 2025.
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
