import React from "react";
import Footermain from "@/components/Footermain/Footermain";
import Latest from "@/components/home/Latest";
import Image from "next/image";
import bg from "@/public/Noise-Animation.png";
import Hero from "@/components/Labelartist/Hero";
import Commingsoon from "@/components/Labelartist/Commingsoon";
import LabelSlider from "@/components/Labelartist/LabelSlider";
import Slider2 from "@/components/Labelartist/Slider2";

const labelartist = () => {
  return (
    <>
      <div className="relative">
        <Image
          className="h-full w-full absolute z-50"
          src={bg}
          alt=""
          height={813}
          width={1832}
        />
        <Hero />
        <Commingsoon />
        <LabelSlider />
        <Slider2 />
        <div className="relative ">
          <div className="absolute bottom-0 z-0 w-full ">
            <div className="relative overflow-hidden h-full">
              <Image
                className="object-cover bg-cover bg-no-repeat w-full h-full opacity-10"
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
      </div>
    </>
  );
};

export default labelartist;
