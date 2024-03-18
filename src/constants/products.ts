import img1 from "@/public/imgs/merch/Rectangle 26 (1).png";
import img2 from "@/public/imgs/merch/Rectangle 26 (2).png";
import img3 from "@/public/imgs/merch/Rectangle 26 (3).png";
import img4 from "@/public/imgs/merch/Rectangle 26 (4).png";
import img5 from "@/public/imgs/merch/Rectangle 26 (5).png";
import img6 from "@/public/imgs/merch/Rectangle 26 (6).png";
import more from "@/public/imgs/merch/more.png";
import jene from "@/public/imgs/merch/jene.png";

import { Product } from "@/types";

export const products: Product[] = [
  {
    id: 1,
    title: "E.S.P",
    price: 1.5,
    subHeading: "",
    img: img1,
  },
  {
    id: 2,
    title: "Made",
    price: 5,
    subHeading: "",
    img: img2,
  },
  {
    id: 3,
    title: "Worthy",
    price: 10,
    subHeading: "",
    img: img3,
  },
  {
    id: 4,
    title: "More Than Enough",
    price: 7,
    subHeading: "",
    img: img4,
  },
  {
    id: 5,
    title: "Sweetest of Melody",
    price: 15,
    subHeading: "",
    img: img5,
  },
  {
    id: 6,
    title: "Je Ne Sais Quoi” by..",
    price: 15.5,
    subHeading: "",
    img: jene,
  },
  {
    id: 7,
    title: "Cap",
    price: 20,
    subHeading: "",
    img: img6,
  },
  {
    id: 8,
    title: "Mask",
    price: 1.5,
    subHeading: "",
    img: more,
  },
];
