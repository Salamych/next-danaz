import React from "react";
import { Container } from "./container";
import { cn } from "@/lib/utils";
import { ContactButton } from "./contact-button";
import Link from "next/link";
import Image from "next/image";
import { InfoText36 } from "./info-text-36";
import { Dot } from "lucide-react";
import { SendForNewsForm } from "./send-form";
import { SocialLinksIcons } from "./social-links-icons";

interface Props {
  className?: string;
}

export const Footer: React.FC<Props> = ({className}) => {
  return (
    <footer>
      <div className={cn("bg-[#2c3878] py-10", className)}>
        <Container>
          <div className="md:flex md:justify-between items-center -mx-4">
            <InfoText36
              text="let's discuss making your interior like a dream place!"
              className="text-white md:w-[650px] mx-4"
            />

            <div className="w-full md:w-[450px] mx-4">
              <p className="text-lg text-[#d9d9d9] pb-5">
                Contact us below to work together to build your amazing interior
              </p>
              <ContactButton className="bg-white text-[#333333] hover:text-white" />
            </div>
          </div>
        </Container>
      </div>
      <div className="py-5 md:py-20">
        <Container>
          <div className="md:flex md:justify-between md:items-center -mx-4">
            <div className="mx-4 mb-10 md:w-5/12">
              <div>
                <Link href="/">
                  <Image
                    src="/assets/images/logo/danaz-logo.png"
                    alt="Danaz logo"
                    width={126}
                    height={54}
                  />
                </Link>
              </div>

              <InfoText36
                text="One of the best furniture agency."
                className="text-[#333333]"
              />
            </div>

            <div className="mx-4 md:w-5/12 flex flex-col">
              <div className="flex items-center gap-1 text-lg">
                <span className="text-[60px]">&bull;</span> Enter your email to
                get the laterst news
              </div>

              <div>
                <SendForNewsForm />
              </div>

              <div className="pt-10 self-end">
                <p>Follow us On</p>
                <SocialLinksIcons className="pt-3" />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}