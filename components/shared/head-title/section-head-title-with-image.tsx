import React from "react";
import { HeadTitleWithDescription } from "./head-title-with-description";
import Image, { StaticImageData } from "next/image";

interface Props {
  pageName: string;
  description: string;
  imageUrl: StaticImageData;
  imageAlt: string;
  className?: string;
}

export const SectionHeadTitleWithImage: React.FC<Props> = ({pageName, imageAlt, description, imageUrl, className}) => {
  return (
    <div className={className}>
      <div>
        <HeadTitleWithDescription
          pageName={pageName}
          description={description}
          className="mb-10"
        />
      </div>
      <div className="mb-20 max-h-[486px]">
        <Image src={imageUrl} alt={imageAlt} />
      </div>
    </div>
  );
}