import React from "react";
import { DisplayAccordion, TFAQItem } from "./display-accordion";

interface Props {
  className?: string;
}

const faqItems: TFAQItem[] = [
  {
    id: "01",
    title: "Vintage",
    description:
      "the use of simple and limited elements to get the best effect or impression.",
  },
  {
    id: "02",
    title: "Minimalist",
    description:
      "the use of simple and limited elements to get the best effect or impression.",
  },
  {
    id: "03",
    title: "Modern",
    description:
      "the use of simple and limited elements to get the best effect or impression.",
  },
  {
    id: "04",
    title: "Transitional",
    description:
      "the use of simple and limited elements to get the best effect or impression.",
  }
];

export const ProductAccordion: React.FC<Props> = ({className}) => {
  return (
    <div className={className}>
      <DisplayAccordion faqItems={faqItems} />
    </div>
  );
}