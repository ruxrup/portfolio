"use client";
import React from "react";
import StackElement from "./StackElement";
import { easeInOut, motion } from "framer-motion";

const TechElement = ({
  tech,
  description,
  el1,
  el2,
  el3,
}: {
  tech: string;
  description: string;
  el1: string;
  el2: string;
  el3: string;
}) => {
  return (
    <motion.div
      className="relative"
      initial={{ marginBottom: "1rem" }}
      whileInView={{
        marginBottom: "25rem",
        transition: { delay: 0.5, duration: 2, type: "spring" },
      }}
      viewport={{ amount: "all" }}
      transition={{ duration: 2, type: "spring" }}
    >
      <div className="bg-grey-950">
        <div className="h-[0.5px] w-full bg-primary-300 opacity-20" />
        <div className="text-4xl font-bold opacity-80 mt-5">{tech}</div>
      </div>
      <div className="flex flex-row gap-64 pt-10 absolute bg-grey-950 w-full">
        <div className="w-[65rem]  text-lg font-medium opacity-60">
          {description}
        </div>
        <div className=" flex flex-col gap-8 w-full">
          <StackElement>{el1}</StackElement>
          <StackElement>{el2}</StackElement>
          <StackElement>{el3}</StackElement>
        </div>
      </div>
    </motion.div>
  );
};

export default TechElement;
