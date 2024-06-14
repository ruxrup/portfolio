import React from "react";
import StackElement from "./Components/Techstack/StackElement";
import TechElement from "./Components/Techstack/TechElement";

const Techstack = () => {
  return (
    <div
      id="services"
      className="bg-grey-950 py-6 px-10  flex flex-col rounded-t-3xl text-primary-300"
    >
      <div className=" mt-16 ml-10 flex flex-col gap-[2rem]">
        <div className=" text-8xl font-extrabold opacity-80 xl:text-7xl">
          SERVICES
        </div>
        <div className="flex flex-col last:mb-44">
          <TechElement
            tech="Web Development"
            description="I create visually stunning 
            and highly functional websites. My work ensures seamless user experiences with fast 
            load times and intuitive navigation. By leveraging the latest technologies, I deliver 
            seamless experiences that captivate users and enhance brand identity."
            el1="REACT / NEXT js"
            el2="3d Development"
            el3="Motion & Animation"
          />
          <TechElement
            tech="Web Designing"
            description="I specialize in crafting intuitive and visually appealing websites that 
            elevate your brand and achieve your objectives. My focus on seamless user experiences, 
            responsive design, and minimal looks ensures your online presence stands out and 
            engages your audience."
            el1="Responsive Designs"
            el2="Wireframing"
            el3="Framer"
          />
        </div>
      </div>
    </div>
  );
};

export default Techstack;
