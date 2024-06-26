import Footermain from "@/components/Footermain/Footermain";
import Hero from "@/components/Shop/Hero";
import Latest from "@/components/home/Latest";
import Image from "next/image";
import React from "react";
import bg from "@/public/Noise-Animation.png";
import Shop from "@/components/LabelRelease/Shop";
import AddtoCart from "@/components/Merch/AddtoCart";
import backimg from "@/public/imgs/procedure/procedure.png";

const shop = () => {
  return (
    <>
        <Hero />
        <Latest />
        <Footermain />
    </>
  );
};

export default shop;
