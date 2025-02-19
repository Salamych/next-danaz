import React from "react";
import { ConvenienceCard } from "../cards";
import { cn } from "@/lib/utils";
import { SectionTitleWithDivider } from "./section-title-with-divider";
import { DescriptionTextGray } from "../description-text-gray";

interface Props {
  className?: string;
}

type TConvenieceCard = {
  id: number;
  title: string;
  description: string;
}

const convenienceList: TConvenieceCard[] = [
  {
    id: 1,
    title: "High Quality",
    description:
      "Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.",
  },
  {
    id: 2,
    title: "Professional Designer",
    description:
      "Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.",
  },
  {
    id: 3,
    title: "The Best Services",
    description:
      "Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.",
  },
];

export const SectionWhyChooseUs: React.FC<Props> = ({className}) => {
  return (
    <section className={cn("mb-20", className)}>
      <SectionTitleWithDivider sectionName="Service" text="Why Choose Us" />
      <DescriptionTextGray
        description="Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations."
        className="max-w-[470px] mb-10"
      />
      <div className=" flex flex-col items-center md:flex-row gap-5">
        {convenienceList.map((item) => (
          <ConvenienceCard
            key={item.id}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}