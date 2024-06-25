import React from "react";
import Hero from "./Hero";
import AboutProducer from "./aboutproducer";
import Featuredrelease from "./featuredrelease";
import Shop from "./shop";
import Moments from "./Moments";
import Updates from "./updates";
import Productions from "./productions";
import Footer from "../footer/Footer";
import Latest from "./Latest";
import Footermain from "../Footermain/Footermain";
import Image from "next/image";
import bg from "@/public/Noise-Animation.png";


const Home = () => {
  return (
    <>
      <div className="relative">

          <Hero />

            <Latest />
            <Footermain />
      </div>
    </>
  );
};

export default Home;
