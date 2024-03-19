import Footermain from "@/components/Footermain/Footermain";
import Hero from "@/components/Merch/Hero";
import Latest from "@/components/home/Latest";
import Image from "next/image";
import React from "react";
import bg from "@/public/Noise-Animation.png";
import Shop from "@/components/LabelRelease/Shop";
import AddtoCart from "@/components/Merch/AddtoCart";
import backimg from "@/public/imgs/procedure/procedure.png";


const Merch = () => {

  return (
    <>
      <div className="relative bg-[#121212] z-20 ">
        <div className="absolute top-0 z-10 w-full ">
          <div className="relative overflow-hidden gradientpro">
            <Image
              className="object-cover bg-cover bg-no-repeat w-full gradientpro h-[1250px]"
              src={backimg}
              alt="background"
              height={1049}
              width={1832}
            />
          </div>
          <div className="absolute z-10 h-full bottom-[-150px] inset-0 bg-gradient-to-b from-transparent to-[#121212] "></div>
        </div>
        <Hero />
        <AddtoCart />
      </div>

      <div className="relative ">
        <div className="absolute bottom-0 z-0 w-full ">
          <div className="relative overflow-hidden">
            <Image
              className="object-cover bg-cover bg-no-repeat w-full h-[1200px] opacity-10"
              src="/imgs/home/buildings.png"
              alt="background"
              height={813}
              width={1832}
            />
            <Image
              className="h-full w-full absolute z-50"
              src={bg}
              alt=""
              height={813}
              width={1832}
            />
            <div className="absolute z-20 h-full bottom-0 inset-0 bg-gradient-to-b from-transparent to-[#121212] opacity-90"></div>
          </div>
        </div>

        <Latest />
        <Footermain />
      </div>
    </>
  );
};

export default Merch;
