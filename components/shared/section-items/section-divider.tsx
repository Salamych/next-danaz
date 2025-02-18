import React from "react";

interface Props {
  name: string;
  className?: string;
}

export const SectionDivider: React.FC<Props> = ({name, className}) => {
  return (
    <div className={className}>
      <span className="uppercase relative after:ml-3 after:absolute after:w-[40vw] xl:after:w-[450px] after:h-[2px] after:bg-black after:top-1/2 ">{name}</span>
    </div>
  );
}