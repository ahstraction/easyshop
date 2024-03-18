import img1 from "@/public/imgs/merch/Rectangle 26 (1).png";
import img2 from "@/public/imgs/merch/Rectangle 26 (2).png";
import img3 from "@/public/imgs/merch/Rectangle 26 (3).png";
import img4 from "@/public/imgs/merch/Rectangle 26 (4).png";
import img5 from "@/public/imgs/merch/Rectangle 26 (5).png";
import img6 from "@/public/imgs/merch/Rectangle 26 (6).png";
import more from "@/public/imgs/merch/more.png";
import jene from "@/public/imgs/merch/jene.png";
import imari from "@/public/imgs/labelartist/breatheagain.png"
import { Product } from "@/types";

export const products: Product[] = [
  {
    id: 1,
    title: "E.S.P",
    price: 1.50,
    subHeading: "",
    img: img1,
  },
  {
    id: 2,
    title: "Made",
    price: 1.50,
    subHeading: "",
    img: img2,
  },
  {
    id: 3,
    title: "Worthy",
    price: 1.50,
    subHeading: "",
    img: img3,
  },
  {
    id: 4,
    title: "More Than Enough",
    price: 1.50,
    subHeading: "",
    img:more ,
  },
  {
    id: 5,
    title: "Sweetest of Melody",
    price: 1.50,
    subHeading: "",
    img: img5,
  },
  {
    id: 6,
    title: "Je Ne Sais Quoi” by Rina Chanel – Dir. by 7LOX"  ,
    price: 1.50,
    subHeading: "",
    img: jene,
  },
  {
    id: 7,
    title: "Cap",
    price: 20.00,
    subHeading: "",
    img: img6,
  },
  {
    id: 8,
    title: "Mask",
    price: 8.00,
    subHeading: "",
    img: img4,
  },
  {
    id: 9,
    title: "Imari",
    price: 1.50,
    subHeading: "",
    img: imari,
  },
];
