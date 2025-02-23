import { Container, DescriptionTextGray, HeadTitleWithDescription, InfoText36, SectionDivider, SendForContactUsForm, TitleWithDescriptionItem } from "@/components/shared";
import { ITitleWithDescriptionItem } from "@/components/shared/cards/title-with-description-item";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dananz | Contact Us",
  description: "Generated by create next app",
};

type TLocationItem = ITitleWithDescriptionItem & {
  id: number;
}
const locationItemList: TLocationItem[] = [
  {
    id: 1,
    title: "Jakarta",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    id: 2,
    title: "Surakarta",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    id: 3,
    title: "Yogyakarta",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    id: 4,
    title: "Bandung",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
];
export default function Home() {
  return (
    <Container>
      <section>
        <HeadTitleWithDescription
          pageName="Contact Us"
          description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
          className="mb-10"
        />
        <SendForContactUsForm />
      </section>
      <section>
        <SectionDivider name="Location" className="mb-5" />
        <div className="flex flex-col lg:flex-row justify-between gap-3 mb-20">
          <div className=" lg:w-3/12">
            <div className="mb-10">
              <InfoText36 text="Visit Our Stores" className="text-[#333333]" />
              <DescriptionTextGray description="Find us at these locations." />
            </div>
            <div className="mb-8">
              <p className="text-2xl text-[#333333] font-semibold mb-3">
                Email
              </p>
              <Link
                href="mailto:dananz@gmail.com"
                className="text-lg text-[#9c9c9c]"
              >
                dananz@gmail.com
              </Link>
            </div>
            <div className="mb-8">
              <p className="text-2xl text-[#333333] font-semibold mb-3">
                Phone
              </p>
              <Link href="tel:+628150021000" className="text-lg text-[#9c9c9c]">
                +62 815 002 1000
              </Link>
            </div>
          </div>
          <div className="lg:w-8/12 flex flex-wrap gap-5 justify-between">
            {locationItemList.map((item) => (
              <TitleWithDescriptionItem
                key={item.id}
                title={item.title}
                description={item.description}
                className="sm:max-w-[calc(1/2*100%-40px)]"
              />
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
}