"use client";
import Image from "next/image";
import React from "react";
import TechTag from "./TechTag";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";

const Project = ({
  name,
  desc,
  img1,
  img2,
  tag1,
  tag2,
  link,
}: {
  name: string;
  desc: string;
  img1: string;
  img2: string;
  tag1: string;
  tag2: string;
  link: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0.2 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: "all" }}
      transition={{ duration: 1, type: "spring" }}
      className="flex flex-row gap-[10rem] mb-[6rem] xl:flex-col xl:gap-[2rem]"
    >
      <div className="flex flex-col w-[40rem] justify-center xl:order-2 xl:w-full">
        <div className=" text-4xl font-bold opacity-80 mb-2 xl:text-3xl">
          {name}
        </div>
        <div className="h-[0.5px] w-full bg-primary-300 opacity-20" />
        <div className=" text-lg font-extralight opacity-80 mt-5 xl:text-base">
          {desc}
        </div>
        <div className="flex flex-row mt-4 gap-3">
          <TechTag>{tag1}</TechTag>
          <TechTag>{tag2}</TechTag>
        </div>
        <a className="flex flex-row items-center mt-10 xl:mt-5" href={link}>
          <div>Github</div> <MdArrowOutward />
        </a>
      </div>
      <div>
        <div className="flex flex-row overflow-hidden gap-10">
          <Image
            src={img1}
            alt="website image"
            width={600}
            height={383}
            className=" rounded-xl"
          />
          <Image
            src={img2}
            alt="website image"
            width={600}
            height={383}
            className=" rounded-xl"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
