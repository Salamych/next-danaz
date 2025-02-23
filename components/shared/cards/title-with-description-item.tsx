import React from "react";
import { DescriptionTextGray } from "../description-text-gray";

export interface ITitleWithDescriptionItem {
  title: string;
  description: string;
}

interface Props extends ITitleWithDescriptionItem{
  
  className?: string;
}

export const TitleWithDescriptionItem: React.FC<Props> = ({title, description, className}) => {
  return (
    <div className={className}>
      <h3 className="text-2xl text-[#333333] font-semibold mb-5">{title}</h3>
      <DescriptionTextGray description={description} />
    </div>
  );
}