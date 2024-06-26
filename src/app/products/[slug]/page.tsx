
// @ts-nocheck
"use client"
import { NextPage } from "next/types";
import Footermain from "@/components/Footermain/Footermain";
import Latest from "@/components/home/Latest";
import Image from "next/image";
import React from "react";
import bg from "@/public/Noise-Animation.png";
import ProductDetail from "@/components/Product";

import esp from "@/public/imgs/merch/Rectangle 26 (1).png";
import made from "@/public/imgs/merch/Rectangle 26 (2).png";
import worthy from "@/public/imgs/merch/Rectangle 26 (3).png";
import more from "@/public/imgs/merch/more.png";
import sweet from "@/public/imgs/merch/Rectangle 26 (5).png";
import jene from "@/public/imgs/merch/jene.png";
import cap from "@/public/imgs/merch/Rectangle 26 (6).png";
import mask from "@/public/imgs/merch/Rectangle 26 (4).png";

import { products as productsData } from "@/constants/products";
import { Product } from "@/types";

interface ProductData {
    productname: string;
    price: string;
    // location: string;
    imagePath: string;
    slug:string
    applelink:string;
    spotifylink:string;
    youtubelink:string;
  }
  
  interface ProductDescriptionProps {
    params: {
      slug: string;
    };
  }


    const products: NextPage<ProductDescriptionProps> = ({
        params
      }: ProductDescriptionProps) => {

        const {slug, } = params


  const currentProduct = productsData.find((product) => product.slug === slug );

  // console.log(slug,"slugid")
  // console.log(currentProduct?.id,"idid")
  // console.log(currentProduct,"currentProduct")


  return (
    <>
      
          <ProductDetail  youtubelink={currentProduct?.youtubelink}  spotifylink={currentProduct?.spotifylink}  applelink={currentProduct?.applelink}  productname={currentProduct?.title} caption={currentProduct?.caption} price={currentProduct?.price} imagePath={currentProduct?.img} slug={slug} productId={currentProduct?.id}   />
          <Latest />
          <Footermain />
    </>
  );
};

export default products;
