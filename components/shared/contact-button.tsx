import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface Props {
  className?: string;
  text?: string;
  urlButton?: string;
}

export const ContactButton: React.FC<Props> = ({className, text = "Contact Us", urlButton = "/contact"}) => {
  return (
    <Link href={urlButton}>
      <button
        className={cn("text-sm px-8 py-3 hover:bg-[#222222] duration-500", className)}
        type="button"
      >
        {text}
      </button>
    </Link>
  );
}