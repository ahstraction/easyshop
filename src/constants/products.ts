import img1 from "@/public/imgs/merch/Rectangle 26 (1).png";
import img2 from "@/public/imgs/merch/Rectangle 26 (2).png";
import img3 from "@/public/imgs/merch/Rectangle 26 (3).png";
import img4 from "@/public/imgs/merch/Rectangle 26 (4).png";
import img5 from "@/public/imgs/merch/Rectangle 26 (5).png";
import img6 from "@/public/imgs/merch/capnew.png";
import more from "@/public/imgs/merch/more.png";
import jene from "@/public/imgs/merch/jene.png";
import imari from "@/public/imgs/merch/breatheagain.png";
import sweetcd from "@/public/imgs/merch/cdsweet1.png";
import worthycd from "@/public/imgs/merch/cdworthy1.png";
import { Product } from "@/types";

export const products: Product[] = [
  {
    id: 1,
    title: "Blue and Beige T-Shirt",
    slug: "E.S.P",
    price: 15,
    subHeading: "",
    caption:"detail para ",    
    img: img1,
    songlink: "/videos/ESP (3).mp3",
    pathnode:"Rectangle 26 (1).png",
    applelink:"https://music.apple.com/us/album/e-s-p/1633167575?i=1633167576",
    spotifylink:"https://open.spotify.com/album/0NiCV4qGxVNBxbHa1tj3ir?si=PnwXWl40SMG36GERpG6dgg",
    youtubelink:"https://youtube.com/@rinachanel7598",

  },
  {
    id: 2,
    title: "Blue Checkered Casual Shirt",
    slug: "made",
    price: 1.5,
    caption:"detail para shirt shirt",
    subHeading: "",
    img: img2,
    songlink: "/videos/Made (1).mp3",
    pathnode:"Rectangle 26 (2).png",
    applelink:"https://music.apple.com/us/album/made-single/1597282832",
    spotifylink:"https://open.spotify.com/track/5T2dP5OaGxvNqJN7jmHvkT?si=9d1e5b5bbe8c4794",
    youtubelink:"https://www.youtube.com/channel/UCaGEFlqULu79M5M9PsVGOtw/featured",

  },
  {
    id: 3,
    title: "Plain Black T-Shirt",
    slug: "worthy",
    price: 1.5,
    subHeading: "",
    caption:"detail para ",
    img: img3,
    songlink: "/videos/Worthy (2).mp3",
    pathnode:"Rectangle 26 (3).png",
    applelink:"https://music.apple.com/us/album/worthy-single/1597273054",
    spotifylink:"https://open.spotify.com/track/65PvHRKkLMdCa6eSluqGcH?si=8fd258d4f5474852&nd=1",
    youtubelink:"https://www.youtube.com/channel/UCaGEFlqULu79M5M9PsVGOtw/featured",

  },
  {
    id: 4,
    title: "Plan White T-Shirt",
    slug: "more",
    price: 1.5,
    subHeading: "",
    img: more,
    caption:"detail para ",
    songlink: "/videos/Rina-Chanel-More-Than-Enough (1).mp3",
    pathnode:"more.png",
    applelink:"https://music.apple.com/us/album/more-than-enough-single/1597282939",
    spotifylink:"https://open.spotify.com/track/0uun3QW4v5qLKtfVyfW0D9?si=402c78a4875e42ee",
    youtubelink:"https://www.youtube.com/channel/UCaGEFlqULu79M5M9PsVGOtw/featured",

  },
  {
    id: 5,
    title: "White and Black Checkered Casual Shirt",
    slug: "sweetestmelody",
    price: 1.5,
    subHeading: "",
    caption:"detail para ",
    img: img5,
    songlink: "/videos/Sweetest-of-Melody (1).mp3",
    pathnode:"Rectangle 26 (5).png",
    applelink:"https://music.apple.com/us/album/sweetest-of-melody-feat-senghor-robinson-single/1588654754",
    spotifylink:"https://open.spotify.com/track/5zCLFHBCmLqEnHzCMLgIJ6?si=9a995724eb9c4d83",
    youtubelink:"https://www.youtube.com/channel/UCaGEFlqULu79M5M9PsVGOtw/featured",
  },
  {
    id: 6,
    title: "Black Jeans",
    price: 1.5,
    subHeading: "",
    slug: "jeneSais",
    img: jene,
    caption:"detail para ",
    songlink: "/videos/Je-Ne-Sais-Quoi (2).mp3",
    pathnode:"jene.png",
    applelink:"https://open.spotify.com/album/7IJ83F1d3EkOdMEQmEHVwH?si=6RqNehnCRCeVSf3kvr95_w",
    spotifylink:"https://open.spotify.com/album/7IJ83F1d3EkOdMEQmEHVwH?si=6RqNehnCRCeVSf3kvr95_w&nd=1",
    // youtubelink:"https://www.youtube.com/watch?v=vD9ogAJqZ0U",
    youtubelink:"https://www.youtube.com/watch?v=OkFZKNynU1A",

  },
  {
    id: 7,
    title: "Camel Chino Pants",
    price: 20.0,
    slug: "cap",
    subHeading: "",
    caption:"detail para ",
    img: img6,
    songlink: "",
    pathnode:"capnew.png",
    applelink:"",
    spotifylink:"",
    youtubelink:"",
  },
  {
    id: 8,
    title: "Charcoal Grey Jeans",
    slug: "mask",
    price: 8.0,
    subHeading: "",
    caption:"detail para ",
    img: img4,
    songlink: "",
    pathnode:"Rectangle 26 (4).png",
    applelink:"",
    youtubelink:"",

    spotifylink:""
  },
  {
    id: 9,
    title: "Cargo Trouser",
    price: 1.5,
    slug: "imari",
    subHeading: "",
    caption:"detail para ",
    img: imari,
    songlink: "/videos/Breathe Again - Imari.mp3",
    pathnode:"breatheagain.png",
    applelink:"https://music.apple.com/album/1734140259?i=1734140260",
    youtubelink:"https://www.youtube.com/watch?v=vncOyIVs4YE&t=2s",
    spotifylink:"https://open.spotify.com/track/7ybLhO296Nk9H6Bmhfwr25"
  },
  {
    id: 10,
    title: "3 Pieces of Boxers for Men",
    price: 2.0,
    slug: "worthyCD",
    subHeading: "",
    caption:"detail para ",
    img: worthycd,
    songlink: "",
    pathnode:"cdworthy1.png",
    applelink:"",
    youtubelink:"",

    spotifylink:""
  },
  {
    id: 11,
    title: "Pink Polo T-Shirt",
    price: 2.0,
    slug: "sweetestofmelodyCD",
    subHeading: "",
    caption:"detail para ",
    img: sweetcd,
    songlink: "",
    pathnode:"cdsweet1.png",
    applelink:"",
    youtubelink:"",

    spotifylink:""
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
