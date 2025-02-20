import React from "react";
import { SectionDivider } from "./section-divider";
import { InfoText36 } from "../info-text-36";
import { DescriptionTextGray } from "../description-text-gray";
import { ProductAccordion } from "../accordion";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export const SectionProductThemesWithAccordion: React.FC<Props> = ({className}) => {
  return (
    <section>
      <div className={cn("mb-20", className)}>
        <SectionDivider name="Product" className="mb-5"/>
        <div className="md:flex md:justify-between md:items-center md:gap-2 mb-10">
          <InfoText36
            text="Choose your product themes."
            className="text-[#333333] lg:w-4/12"
          />
          <DescriptionTextGray description="Find the theme you want. If our choice of theme is not what you want, you can customize it as you want." className="lg:w-4/12"/>
        </div>
        <ProductAccordion />
      </div>
    </section>
  );
}