import React from "react";
import Footermain from "@/components/Footermain/Footermain";
import Hero from "@/components/LabelRelease/Hero";
import ReleaseSlider from "@/components/LabelRelease/ReleaseSlider";
import Latest from "@/components/home/Latest";
import Image from "next/image";
import bg from "@/public/Noise-Animation.png";
import Shop from "@/components/LabelRelease/Shop";
import Slider2 from "@/components/Labelartist/Slider2";

const labelrelease = () => {
  return (
    <>
      <Hero />
      <Slider2 heading="OUR FEATURED RELEASES" />
      <Shop />
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

export default labelrelease;
