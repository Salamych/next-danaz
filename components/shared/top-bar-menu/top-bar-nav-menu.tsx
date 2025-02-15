import { cn } from "@/lib/utils";
import React from "react";
import { NavMenu } from "./nav-menu";

interface Props {
  className?: string;
}

export const TopBarNavMenu: React.FC<Props> = ({className}) => {
  return (
    <div className={cn("flex justify-between items-center lg:gap-[74px] md:gap-8", className)}>
      <NavMenu />
    </div>
  );
}