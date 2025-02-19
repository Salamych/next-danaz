import { cn } from "@/lib/utils";
import React from "react";
import { DescriptionTextGray } from "../description-text-gray";

interface Props {
  title: string;
  description: string;
  className?: string;
}

export const ConvenienceCard: React.FC<Props> = ({title, description, className}) => {
  return (
    <div
      className={cn(
        "p-5 max-w-[388px] border shadow-lg flex flex-col items-center",
        className
      )}
    >
      <div className="w-[63px] h-63px p-[63px] rounded-full bg-[#d9d9d9] mb-5" />
      <h3 className="text-2xl text-[#333333] font-semibold mb-5">
        {title}
      </h3>
      <DescriptionTextGray description={description} />
    </div>
  );
}