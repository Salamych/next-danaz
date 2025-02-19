import { cn } from "@/lib/utils";
import React from "react";


interface Props {
  pageName: string;
  description: string;
  className?: string;
}

export const HeadTitleWithDescription: React.FC<Props> = ({pageName, description, className}) => {
  return (
    <div className={cn("flex flex-col items-center", className)}>
      <h2 className="text-[40px] md:text-[56px] font-bold text-center pt-20">{pageName}</h2>
      <p className="max-w-[600px] text-center md:text-lg">{description}</p>
    </div>
  );
}