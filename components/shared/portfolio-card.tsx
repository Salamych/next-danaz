import Image, { StaticImageData } from "next/image";
import React from "react";
import { ContactButton } from "./contact-button";
import { cn } from "@/lib/utils";
import { DescriptionTextGray } from "./description-text-gray";

interface Props {
  imageFurniture: StaticImageData; 
  imageAuthor: StaticImageData; 
  imageFurnitureAlt: string;
  authorName: string;
  authorWork: string;
  description: string;
  textButton: string;
  urlButton: string;
  isEven?: boolean;
  className?: string;
}

export const PortfolioCard: React.FC<Props> = ({imageFurniture, imageAuthor, imageFurnitureAlt, authorName, authorWork, description, textButton, urlButton, isEven = false, className}) => {
  return (
    <div
      className={cn(
        "md:flex gap-5 justify-between md:items-center",
        { "flex-row-reverse": isEven },
        className
      )}
    >
      <div className="md:w-8/12 relative mb-5">
        <Image src={imageFurniture} alt={imageFurnitureAlt} />
        <div
          className={cn(
            "flex gap-5 p-5 bg-white shadow-2xl w-[276px] absolute top-5 ",
            {
              "right-0 lg:-right-[15vw] xl:-right-[190px]": !isEven,
              "left-0 lg:-left-[15vw] xl:-left-[190px]": isEven,
            }
          )}
        >
          <div className="flex items-center w-[56px] h-[56px] rounded-[50%] overflow-hidden">
            <Image src={imageAuthor} alt={authorName} />
          </div>
          <div className="text-lg flex flex-col">
            <span className="font-semibold">{authorName}</span>
            <span className="text-[#9c9c9c]">{authorWork}</span>
          </div>
        </div>
      </div>
      <div className="md:w-4/12 lg:w-3/12 flex flex-col self-center">
        <div className="lg:pt-[12vw] xl:pt-[150px] flex flex-col gap-5 md:gap-8">
          <DescriptionTextGray
            description={description}
            className="md:w-[240px]"
          />

          <ContactButton
            text={textButton}
            urlButton={urlButton}
            className="bg-[#2c3878] text-white"
          />
        </div>
      </div>
    </div>
  );
}