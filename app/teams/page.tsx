import { Container, DescriptionTextGray, PersonCard, SectionHeadTitleWithImage, SectionTitleWithDivider, SectionWhyChooseUs } from "@/components/shared";
import { Metadata } from "next";
import { IPersonCard } from "@/components/shared/cards/person-card";
import ArmsImage from "../../public/assets/images/teams-page/teams-page-arms.png";
import PersonImage1 from "../../public/assets/images/teams-page/teams-page-person-1.png";
import PersonImage2 from "../../public/assets/images/teams-page/teams-page-person-2.png";
import PersonImage3 from "../../public/assets/images/teams-page/teams-page-person-3.png";
import PersonImage4 from "../../public/assets/images/teams-page/teams-page-person-4.png";
import PersonImage5 from "../../public/assets/images/teams-page/teams-page-person-5.png";
import PersonImage6 from "../../public/assets/images/teams-page/teams-page-person-6.png";
import PersonImage7 from "../../public/assets/images/teams-page/teams-page-person-7.png";
import PersonImage8 from "../../public/assets/images/teams-page/teams-page-person-8.png";

export const metadata: Metadata = {
  title: "Dananz | Our Teams",
  description: "Generated by create next app",
};

type TPersonCardItem = IPersonCard & {
  id: number;
}

const personCardList: TPersonCardItem[] = [
  {
    id: 1,
    imageUrl: PersonImage1,
    imageAlt: "PersonImage1",
    name: "Shoo Phar Dhie",
    work: "CEO",
  },
  {
    id: 2,
    imageUrl: PersonImage2,
    imageAlt: "PersonImage2",
    name: "Shoo Phar Dhie",
    work: "CEO",
  },
  {
    id: 3,
    imageUrl: PersonImage3,
    imageAlt: "PersonImage3",
    name: "Shoo Phar Dhie",
    work: "CEO",
  },
  {
    id: 4,
    imageUrl: PersonImage4,
    imageAlt: "PersonImage4",
    name: "Shoo Phar Dhie",
    work: "CEO",
  },
  {
    id: 5,
    imageUrl: PersonImage5,
    imageAlt: "PersonImage5",
    name: "Shoo Phar Dhie",
    work: "CEO",
  },
  {
    id: 6,
    imageUrl: PersonImage6,
    imageAlt: "PersonImage6",
    name: "Shoo Phar Dhie",
    work: "CEO",
  },
  {
    id: 7,
    imageUrl: PersonImage7,
    imageAlt: "PersonImage7",
    name: "Shoo Phar Dhie",
    work: "CEO",
  },
  {
    id: 8,
    imageUrl: PersonImage8,
    imageAlt: "PersonImage8",
    name: "Shoo Phar Dhie",
    work: "CEO",
  }
];

export default function Teams() {
  return (
    <Container>
      <section>
        <SectionHeadTitleWithImage
          pageName="Our Teams"
          description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
          imageUrl={ArmsImage}
          imageAlt="Arms"
        />
      </section>
      <section>
        <div className="mb-20">
          <SectionTitleWithDivider
            sectionName="Designer"
            text="Creative Person"
          />
          <DescriptionTextGray
            description="Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations."
            className="max-w-[470px]"
          />
        </div>
        <div className="mb-20 flex gap-3 flex-wrap justify-between">
          {personCardList.map((item) => (
            <PersonCard
              key={item.id}
              imageUrl={item.imageUrl}
              imageAlt={item.imageAlt}
              name={item.name}
              work={item.work}
            />
          ))}
        </div>
      </section>
      <SectionWhyChooseUs />
    </Container>
  );
}