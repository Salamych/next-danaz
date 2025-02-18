import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export type TFAQItem = {
  id: string;
  title: string;
  description: string;
}

interface Props {
  faqItems: TFAQItem[];
}

export const DisplayAccordion: React.FC<Props> = ({faqItems}) => {
  return (
    <Accordion type="multiple" className="w-full">
      {faqItems.map((item) => (
        <AccordionItem value={`item-${item.id}`} key={item.id}>
          <AccordionTrigger>
            <span className="flex sm:gap-10 gap-5 text-xl sm:text-2xl font-semibold text-[#333333]">
              <span>{item.id}</span> <span>{item.title}</span>
            </span>
          </AccordionTrigger>
          <AccordionContent><span className="">{item.description}</span></AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
