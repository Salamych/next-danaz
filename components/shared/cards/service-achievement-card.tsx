import React from "react";
import { TitleWithDescriptionItem } from "./title-with-description-item";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

export type TServiceAchieveCard = {
  imageUrl: StaticImageData;
  imageAlt: string;
  title: string;
  description: string;
}

interface Props extends TServiceAchieveCard{
  className?: string;
}

export const ServiceAchievementCard: React.FC<Props> = ({imageUrl, imageAlt, title, description, className}) => {
  return (
    <div
      className={cn(
        "flex flex-col md:flex-row md:justify-between md:items-center gap-5",
        className
      )}
    >
      <div className="max-w-[746px]">
        <Image src={imageUrl} alt={imageAlt} />
      </div>
      <TitleWithDescriptionItem
        title={title}
        description={description}
        className="md:max-w-[330px]"
      />
    </div>
  );
}