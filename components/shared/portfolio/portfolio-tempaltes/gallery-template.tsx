import Image from "next/image";
import React from "react";

import Minimalist1 from "../../../../public/assets/images/portfolio-details-page/templates/minimalist/template-minimalist-1.png";
import Minimalist2 from "../../../../public/assets/images/portfolio-details-page/templates/minimalist/template-minimalist-2.png";
import Minimalist3 from "../../../../public/assets/images/portfolio-details-page/templates/minimalist/template-minimalist-3.png";
import Minimalist4 from "../../../../public/assets/images/portfolio-details-page/templates/minimalist/template-minimalist-4.png";
import Minimalist5 from "../../../../public/assets/images/portfolio-details-page/templates/minimalist/template-minimalist-5.png";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export const GalleryTemplate: React.FC<Props> = ({className}) => {
  return (
    <div className={cn("flex flex-col gap-8", className)}>
      <div className="flex flex-col sm:flex-row gap-8">
        <div >
          <Image src={Minimalist1} alt="Minimalist1" />
        </div>
        <div>
          <Image src={Minimalist2} alt="Minimalist2" />
        </div>
      </div>
      <div className=" max-w-[584px] sm:max-w-full">
        <Image src={Minimalist3} alt="Minimalist3" />
      </div>
      <div className="flex flex-col sm:flex-row gap-8">
        <div>
          <Image src={Minimalist4} alt="Minimalist4" />
        </div>
        <div>
          <Image src={Minimalist5} alt="Minimalist5" />
        </div>
      </div>
    </div>
  );
}