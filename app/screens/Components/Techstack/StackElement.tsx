import React, { ReactNode } from "react";

const StackElement = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div className="text-3xl font-bold opacity-80 mb-5">{children}</div>
      <div className="h-[0.5px] w-full bg-primary-300 opacity-20" />
    </div>
  );
};

export default StackElement;
