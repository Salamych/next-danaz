import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  className?: string;
}

export const Achievements: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        "sm:flex sm:justify-between px-5 py-5 md:px-4 sm:px-8 sm:py-6 bg-[#2c3878] text-white lg:w-[252px] md:flex-col md:gap-[5px]",
        className
      )}
    >
      <div className="flex flex-col text-center mb-5 md:mb-1 lg:mb-5">
        <p className="text-[40px] md:text-[3vw] lg:text-[52px]">350+</p>
        <p className="text-base">Project Completed</p>
      </div>

      <div className="flex flex-col text-center mb-5 md:mb-1 lg:mb-5">
        <p className="text-[40px] md:text-[3vw] lg:text-[52px]">23+</p>
        <p className="text-base">Professional Teams</p>
      </div>

      <div className="flex flex-col text-center mb-5 md:mb-1 lg:mb-5">
        <p className="text-[40px] md:text-[3vw] lg:text-[52px]">15+</p>
        <p className="text-base">Years Experience</p>
      </div>
    </div>
  );
};