import React from "react";
import { DisplayAccordion, TFAQItem } from "./display-accordion";

interface Props {
  className?: string;
}

const faqItems: TFAQItem[] = [
  {
    id: "01",
    title: "Interior Design",
    description:
      "the use of simple and limited elements to get the best effect or impression.",
  },
  {
    id: "02",
    title: "Consultant",
    description:
      "the use of simple and limited elements to get the best effect or impression.",
  },
  {
    id: "03",
    title: "Construction Consultant",
    description:
      "the use of simple and limited elements to get the best effect or impression.",
  },
];

export const ServiceAccordion: React.FC<Props> = ({className}) => {
  return (
    <div className={className}>
      <DisplayAccordion faqItems={faqItems} />
    </div>
  );
}