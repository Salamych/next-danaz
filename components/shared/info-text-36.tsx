import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  text: string;
  className?: string;
}

export const InfoText36: React.FC<Props> = ({text, className}) => {
  return (
    <div className={cn("w-full mb-5 font-semibold text-3xl/[42px] md:text-4xl/[62px]", className)}>
      {text}
  </div>
  );
}