"use client";

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { ContactButton } from "../contact-button";
import { Menu } from "lucide-react";
import { TMenuItem } from "@/@types/links-type";
import { usePathname } from "next/navigation";


interface Props {
  className?: string;
}


const menuList: TMenuItem[] = [
  {id: 1, name: "Home", url: "/"},
  {id: 2, name: "About Us", url: "/about"},
  {id: 3, name: "Services", url: "/services"},
  {id: 4, name: "Our Teams", url: "/teams"},
  {id: 5, name: "Contact us", url: "/contact"},
]
export const NavMenu: React.FC<Props> = ({className}) => {
  const path = usePathname();
  return (
    <>
      <div
        className={cn(
          "hidden md:flex md:justify-between lg:gap-[74px] md:gap-5 text-base text-[#333333]",
          className
        )}
      >
        {menuList.filter(item => item.url !== "/contact").map((item) => (
          <Link
            href={item.url}
            key={item.id}
            className={cn(
              "py-2 relative after:absolute after:w-0 after:h-[2px] after:bg-[#333333] after:bottom-0 after:left-1/2 after:block after:duration-500 after:-translate-x-1/2 after:-translate-y-1/2 hover:after:w-full",
              path === item.url && "font-semibold"
            )}
            
          >
            {item.name}
          </Link>
        ))}
        <ContactButton className="bg-[#2c3878] text-white" />
      </div>

      <div className="md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Menu />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {menuList.map((item) => (
              <DropdownMenuItem key={item.id}>
                <Link
                  href={item.url}
                  className={cn(
                    "py-2 relative after:absolute after:w-0 after:h-[2px] after:bg-[#333333] after:bottom-0 after:left-1/2 after:block after:duration-500 after:-translate-x-1/2 after:-translate-y-1/2 hover:after:w-full",
                    path === item.url && "font-semibold"
                  )}
                >
                  {item.name}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
}