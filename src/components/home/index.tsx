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
        {/* <Image className="h-full w-full absolute z-20" src={bg} alt="" /> */}

        <div className="relative ">
          <Hero />

          <div className="relative ">
            <div className="absolute bottom-0 z-0 w-full ">
              <div className="relative overflow-hidden">
                <Image
                  className="object-cover bg-cover bg-no-repeat w-full  opacity-20"
                  src="/imgs/home/buildings.png"
                  alt="background"
                  height={1513}
                  width={1832}
                />
                <div className="absolute z-20 h-full bottom-0 inset-0 bg-gradient-to-b from-transparent to-[#121212] opacity-90"></div>
              </div>
            </div>
            <AboutProducer />
            <Latest />
            <Footermain />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
