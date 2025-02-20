import {create} from 'zustand';
import { StaticImageData } from 'next/image';
import { PortfolioCard } from '@/components/shared';

//portfolio image
import AuthorImage1 from "../public/assets/images/portfolio-page/authors/home-page-author-arga-danaan.png";
import MinimalistRoomImage from "../public/assets/images/portfolio-page/portfolio-page-minimalist-room.jpeg";
import VintageRoomImage from "../public/assets/images/portfolio-page/portfolio-page-vintage-room.jpeg";
import ModernRoomImage from "../public/assets/images/portfolio-page/portfolio-page-modern-room.jpeg";
import TransitionalRoomImage from "../public/assets/images/portfolio-page/portfolio-page-transitional-room.jpeg";

//potfolio-details preview imges

import MinimalistRoomDetailsImage from "../public/assets/images/portfolio-details-page/header-preview/portfolio-page-minimalist-room.jpeg";
import VintageRoomDetailsImage from "../public/assets/images/portfolio-details-page/header-preview/portfolio-page-vintage-room.jpeg";
import ModernRoomDetailsImage from "../public/assets/images/portfolio-details-page/header-preview/portfolio-page-modern-room.jpeg";
import TransitionalRoomDetailsImage from "../public/assets/images/portfolio-details-page/header-preview/portfolio-page-transitional-room.jpeg";


type TPortfolioCard = PortfolioCard & {
  id: number;
}
type TDetailsImage = {
  imageUrl: StaticImageData;
  url: string;
}

type TDetailsImageItem = TDetailsImage & {
  id: number;
}

const previewImageList: TDetailsImageItem[] = [
  {id: 1, imageUrl: MinimalistRoomDetailsImage, url: "minimalist-room"},
  {id: 2, imageUrl: VintageRoomDetailsImage, url: "vintage-room"},
  {id: 3, imageUrl: ModernRoomDetailsImage, url: "modern-room"},
  {id: 4, imageUrl: TransitionalRoomDetailsImage, url: "transitional-room"},
];

const portfolioCardList: TPortfolioCard[] = [
  {
    id: 1,
    imageFurniture: MinimalistRoomImage,
    imageFurnitureAlt: "Minimalist Room",
    imageAuthor: AuthorImage1,
    authorName: "Arga Danaan",
    authorWork: "CEO of Dananz",
    title: "Minimalist Room",
    description:
      "Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere.",
    textButton: "See More",
    urlButton: "/portfolio/details/minimalist-room",
  },
  {
    id: 2,
    imageFurniture: VintageRoomImage,
    imageFurnitureAlt: "Vintage Room",
    imageAuthor: AuthorImage1,
    authorName: "Arga Danaan",
    authorWork: "CEO of Dananz",
    title: "Vintage Room",
    description:
      "Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere.",
    textButton: "See More",
    urlButton: "/portfolio/details/vintage-room",
  },
  {
    id: 3,
    imageFurniture: ModernRoomImage,
    imageFurnitureAlt: "Modern Room",
    imageAuthor: AuthorImage1,
    authorName: "Arga Danaan",
    authorWork: "CEO of Dananz",
    title: "Modern Room",
    description:
      "Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere.",
    textButton: "See More",
    urlButton: "/portfolio/details/modern-room",
  },
  {
    id: 4,
    imageFurniture: TransitionalRoomImage,
    imageFurnitureAlt: "Transitional Room",
    imageAuthor: AuthorImage1,
    authorName: "Arga Danaan",
    authorWork: "CEO of Dananz",
    title: "Transitional Room",
    description:
      "Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere.",
    textButton: "See More",
    urlButton: "/portfolio/details/transitional-room",
  },
  
]; 

interface State {
  portfolioList: TPortfolioCard[];
  previewImageList: TDetailsImageItem[];
}

export const usePortfolioListStore = create<State>()((set) => ({
  portfolioList: portfolioCardList,
  previewImageList: previewImageList,  
}))