import Image from "next/image";
import React from "react";
import Project from "./Components/Works/Project";

const Works = () => {
  return (
    <div className="bg-grey-950 py-6 px-10 pt-44  flex flex-col text-primary-300">
      <div className=" mt-16 ml-10 flex flex-col gap-[10rem]">
        <div className=" text-8xl font-extrabold opacity-80">WORKS</div>
        <Project
          name="ENTERTAINMENT"
          desc="This website is related to the game Valorant, showcasing all 
          the characters with detailed information on their weaknesses, advantages, 
          and abilities. It is built using React and Styled 
          Components and an API to fetch and display up-to-date data."
          img1="/valdex1.png"
          img2="/valdex2.png"
          tag1="React"
          tag2="Styled components"
          link="https://github.com/ruxrup/valdex"
        />
        <Project
          name="EDUCATIONAL"
          desc="This is a space-themed website that features 
          fascinating facts about all the planets in our solar system. For this project, 
          I utilized Next.js for the framework, Framer Motion for animations, and 
          Tailwind CSS for styling."
          img1="/theplanets1.png"
          img2="/theplanets2.png"
          tag1="Next js"
          tag2="Framer Motion"
          link="https://github.com/ruxrup/the-planets"
        />
        <div className="pb-44">
          <Project
            name="RETAIL"
            desc="This is a website for a company 
          offering tiffin services to nearby students. The site, built using React for the framework, 
          Supabase for the database, and React Query for managing the api calls, allows the dealers 
          to manage the placed orders conveniently."
            img1="/kenko1.png"
            img2="/kenko2.png"
            tag1="React"
            tag2="Supabase"
            link="https://github.com/ruxrup/kenko"
          />
        </div>
      </div>
    </div>
  );
};

export default Works;
