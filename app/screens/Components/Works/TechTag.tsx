import React, { ReactNode } from "react";

const TechTag = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-fit h-fit rounded-xl border border-primary-300 p-2 font-extralight text-sm text-center">
      {children}
    </div>
  );
};

export default TechTag;
