"use client";
import { useShallow } from "zustand/react/shallow";
import { usePortfolioListStore } from "@/store/portfolio-list";
import React from "react";
import { SectionHeadTitleWithImage } from "../head-title";
import { StaticImageData } from "next/image";
import { TitleWithDescriptionItem } from "../cards";
import { DescriptionTextGray } from "../description-text-gray";
import { GalleryTemplate } from "./portfolio-tempaltes";

interface Props {
  url: string;
  className?: string;
}

export const PortfolioDetailsTemplate: React.FC<Props> = ({url, className}) => {
  const [portfolioList, previewImageList] = usePortfolioListStore(useShallow((state) => [
    state.portfolioList,
    state.previewImageList,
  ]));
  const template = portfolioList.find(item => item.urlButton.split("/").pop() === url);

  const previewImage = previewImageList.find(item => item.url === url);
  return (
    <>
      <section>
        <SectionHeadTitleWithImage
          pageName={template?.title as string}
          description={template?.description as string}
          imageUrl={previewImage?.imageUrl as StaticImageData}
          imageAlt={template?.imageFurnitureAlt as string}
        />
      </section>
      <section>
        <div className="flex flex-col gap-10 md:flex-row md:gap-5 mb-20">
          <div className="flex flex-col justify-between gap-6 md:max-w-[580px]">
            <TitleWithDescriptionItem
              title="Project Overview"
              description="Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere. Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere. Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere."
            />
            <div className="sm:flex sm:gap-20">
              <DescriptionTextGray description="July 22 - 2022" />
              <DescriptionTextGray description="Interior Design - Furnitur" />
            </div>
          </div>
          <div className="flex flex-col justify-between gap-6 md:max-w-[580px]">
          <TitleWithDescriptionItem
              title="Design Process"
              description="Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere. Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere."
            />
            <div>
              <DescriptionTextGray description="Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere. Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere." />
            </div>
          </div>
        </div>
      </section>
      <GalleryTemplate className="mb-20"/>
    </>
  );
}