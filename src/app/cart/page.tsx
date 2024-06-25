import Footermain from "@/components/Footermain/Footermain";
import Latest from "@/components/home/Latest";
import Image from "next/image";
import React from "react";
import bg from "@/public/Noise-Animation.png";
import Cart from "@/components/Cart";

const cart = () => {
  return (
    <>
      
          <Cart />
          <Latest />
          <Footermain />
     
    </>
  );
};

export default cart;
