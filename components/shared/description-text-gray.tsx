import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  description: string;
  className?: string;
}

export const DescriptionTextGray: React.FC<Props> = ({description, className}) => {
  return (
    <div className={cn("text-lg text-[#9c9c9c]", className)}>{description}</div>
  );
}