import img1 from "@/public/imgs/merch/Rectangle 26 (1).png";
import img2 from "@/public/imgs/merch/Rectangle 26 (2).png";
import img3 from "@/public/imgs/merch/Rectangle 26 (3).png";
import img4 from "@/public/imgs/merch/Rectangle 26 (4).png";
import img5 from "@/public/imgs/merch/Rectangle 26 (5).png";
import img6 from "@/public/capnew.png";
import more from "@/public/imgs/merch/more.png";
import jene from "@/public/imgs/merch/jene.png";
import imari from "@/public/imgs/labelartist/breatheagain.png";
import sweetcd from "@/public/imgs/merch/cdsweet1.png";
import worthycd from "@/public/imgs/merch/cdworthy1.png";
import { Product } from "@/types";

export const products: Product[] = [
  {
    id: 1,
    title: "E.S.P",
    slug: "E.S.P",
    price: 1.5,
    subHeading: "",
    img: img1,
    songlink: "/videos/ESP (3).mp3",
  },
  {
    id: 2,
    title: "Made",
    slug: "made",
    price: 1.5,
    subHeading: "",
    img: img2,
    songlink: "/videos/Made (1).mp3",
  },
  {
    id: 3,
    title: "Worthy",
    slug: "worthy",
    price: 1.5,
    subHeading: "",
    img: img3,
    songlink: "/videos/Worthy (2).mp3",
  },
  {
    id: 4,
    title: "More Than Enough",
    slug: "more",
    price: 1.5,
    subHeading: "",
    img: more,
    songlink: "/videos/Rina-Chanel-More-Than-Enough (1).mp3",
  },
  {
    id: 5,
    title: "Sweetest of Melody",
    slug: "sweetestmelody",
    price: 1.5,
    subHeading: "",
    img: img5,
    songlink: "/videos/Sweetest-of-Melody (1).mp3",
  },
  {
    id: 6,
    title: "Je Ne Sais Quoi",
    price: 1.5,
    subHeading: "",
    slug: "jeneSais",
    img: jene,
    songlink: "/videos/Je-Ne-Sais-Quoi (2).mp3",
  },
  {
    id: 7,
    title: "Cap",
    price: 20.0,
    slug: "cap",
    subHeading: "",
    img: img6,
    songlink: "",
  },
  {
    id: 8,
    title: "Mask",
    slug: "mask",
    price: 8.0,
    subHeading: "",
    img: img4,
    songlink: "",
  },
  {
    id: 9,
    title: "Imari",
    price: 1.5,
    slug: "imari",
    subHeading: "",
    img: imari,
    songlink: "/videos/Breathe Again - Imari.mp3",
  },
  {
    id: 10,
    title: "Worthy",
    price: 2.0,
    slug: "worthyCD",
    subHeading: "",
    img: worthycd,
    songlink: "",
  },
  {
    id: 11,
    title: "Sweetest of Melody",
    price: 2.0,
    slug: "sweetestofmelodyCD",
    subHeading: "",
    img: sweetcd,
    songlink: "",
  },
];

export const productsPriceMap: { [key: string]: string } = {
  sweetestofmelodyCD: "2.00",
  worthyCD: "2.00",
  imari: "1.50",
  mask: "8.00",
  cap: "20.00",
  jeneSais: "1.50",
  sweetestmelody: "1.50",
  more: "1.50",
  worthy: "1.50",
  made: "1.50",
  "E.S.P": "1.50",
};
