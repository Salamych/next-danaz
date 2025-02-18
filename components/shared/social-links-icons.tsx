import { TMenuItem } from "@/@types/links-type";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  className?: string;
}

const iconsName: TMenuItem[] = [
  {id: 1, name: "facebook", url: "#"}, 
  {id: 2, name: "instagram", url: "#"}, 
  {id: 3, name: "tik-tok", url: "#"}, 
  {id: 4, name: "youtube", url: "#"}
];

export const SocialLinksIcons: React.FC<Props> = ({className}) => {
  return (
    <div className={cn("flex gap-6", className)}>
      {
        iconsName.map(item => (
          <Link href={item.url} key={item.id} className="p-1 rounded-[50%] hover:bg-gray-400">
            <Image 
              src={`/assets/images/social-logo/${item.name}-logo.png`}
              alt={item.name}
              width={24}
              height={24}
            />
          </Link>
        ))
      }
    </div>
  );
}