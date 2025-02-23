import { cn } from "@/lib/utils";
import React from "react";
import { DescriptionTextGray } from "../description-text-gray";
import Image, { StaticImageData } from "next/image";


export interface IPersonCard {
  imageUrl: StaticImageData;
  imageAlt: string;
  name: string;
  work: string;
}

interface Props extends IPersonCard {  
  className?: string;
}

export const PersonCard: React.FC<Props> = ({imageUrl, imageAlt, name, work, className}) => {
  return (
    <div className={cn("sm:max-w-[calc(6/12*100%-10px)] md:max-w-[calc(4/12*100%-10px)] lg:max-w-[calc(3/12*100%-10px)] pt-3 bg-[#2c3878] relative", className)}>
      <div>
        <Image src={imageUrl} alt={imageAlt} />
      </div>
      <div className="absolute bottom-3 right-3 left-3 bg-white p-5">
        <p className="text-xl lg:text-[2vw] xl:text-2xl text-[#333333] font-semibold">{name}</p>
        <DescriptionTextGray description={work} />
      </div>
    </div>
  );
}