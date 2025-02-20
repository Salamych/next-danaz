"use client";

import { usePortfolioListStore } from "@/store/portfolio-list";
import React from "react";
import { PortfolioCard } from "../cards";


export const PortfolioListItems: React.FC = () => {
  const portfolioList = usePortfolioListStore(state => state.portfolioList);

  return (
    <>
      {portfolioList.map((item) => (
        <PortfolioCard
          key={item.id}
          isEven={item.id % 2 === 0}
          {...item}
          className="mb-5"
        />
      ))}
    </>
  );
}