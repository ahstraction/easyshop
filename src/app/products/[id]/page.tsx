
// @ts-nocheck
"use client"
import { NextPage } from "next/types";
import Footermain from "@/components/Footermain/Footermain";
import Latest from "@/components/home/Latest";
import Image from "next/image";
import React from "react";
import bg from "@/public/Noise-Animation.png";
import Product from "@/components/Product";

import esp from "@/public/imgs/merch/Rectangle 26 (1).png";
import made from "@/public/imgs/merch/Rectangle 26 (2).png";
import worthy from "@/public/imgs/merch/Rectangle 26 (3).png";
import more from "@/public/imgs/merch/more.png";
import sweet from "@/public/imgs/merch/Rectangle 26 (5).png";
import jene from "@/public/imgs/merch/jene.png";
import cap from "@/public/imgs/merch/Rectangle 26 (6).png";
import mask from "@/public/imgs/merch/Rectangle 26 (4).png";



interface ProductData {
    productname: string;
    price: string;
    // location: string;
    imagePath: string;
  }
  
  interface ProductDescriptionProps {
    params: {
      id: string;
    };
  }


    const products: NextPage<ProductDescriptionProps> = ({
        params: { id = "1" }, 
      }: ProductDescriptionProps) => {
        console.log(id, "params");

  // Define a mapping of IDs to headings and descriptions
  const productData: ProductData = {
    1: {
      productname: "E.S.P.",
      price: "$1.50",
      imagePath: esp,
    },
    2: {
      productname: "Made",
      price: "$1.50",
      imagePath: made,
    },
    3: {
      productname: "worthy",
      price: "$1.50",
      imagePath: worthy,
    },
    4: {
      productname: "More Than Enough",
      price: "$1.50",
      imagePath: more,
    },
    5: {
      productname: "Sweetest of Melody",
      price: "$1.50",
      imagePath: sweet,
    },
    6: {
      productname: "Je Ne Sais Quoi” by..",
      price: "$1.50",
      imagePath: jene,
    },
    7: {
      productname: "Cap",
      price: "$1.50",
      imagePath: cap,
    },
    8: {
      productname: "Mask",
      price: "$1.50",
      imagePath: mask,
    },



  };

  // Retrieve heading and description based on the received ID
  const { productname, price, imagePath,date,description  } =
  productData[id] || {};



  return (
    <>
      <div className="relative ">
        <Image className="h-full w-full absolute z-20" src={bg} alt="" />
        <div className="absolute h-full bottom-0 z-0 w-full ">
          <div className="relative overflow-hidden h-full">
            <Image
              className="object-cover bg-cover bg-no-repeat h-full w-full   opacity-10"
              src="/imgs/home/buildings.png"
              alt="background"
              height={2013}
              width={1832}
            />
            <div className="absolute z-10 h-full bottom-0 inset-0 bg-gradient-to-b from-[#121212]  to-transparent opacity-90"></div>
          </div>
        </div>
        <div className="relative z-30">
          <Product productname={productname} price={price} imagePath={imagePath} date={date} description={description} />
          <Latest />
          <Footermain />
        </div>
      </div>
    </>
  );
};

export default products;
