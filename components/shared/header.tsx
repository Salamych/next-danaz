import React from "react";
import { Container } from "./container";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { TopBarNavMenu } from "./top-bar-menu/top-bar-nav-menu";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({className}) => {
  return (
    <header className={cn("sticky top-0 z-10",className)}>
      <Container>
        <div className="pt-10 pb-5 flex justify-between items-center flex-wrap -mx-4 bg-white">
          <Link href="/" className="mx-4">
            <Image 
              src="/assets/images/logo/danaz-logo.png"
              alt="Danaz logo"
              width={126}
              height={54}
            />
          </Link>
          <TopBarNavMenu className="mx-4"/>
        </div>
      </Container>
    </header>
  );
}