import React from "react";
import { SectionDivider } from "./section-divider";
import { InfoText36 } from "../info-text-36";

interface Props {
  sectionName: string;
  text: string;
  className?: string;
}

export const SectionTitleWithDivider: React.FC<Props> = ({sectionName, text, className}) => {
  return (
    <div className={className}>
      <SectionDivider name={sectionName} className="mb-5" />
      <InfoText36
        text={text}
        className="text-[#333333]"
      />
    </div>
  );
}