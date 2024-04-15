import React from "react";
import Footermain from "@/components/Footermain/Footermain";
import Latest from "@/components/home/Latest";
import Image from "next/image";
import bg from "@/public/Noise-Animation.png";
import Hero from "@/components/Labelartist/Hero";
import Commingsoon from "@/components/Labelartist/Commingsoon";
import LabelSlider from "@/components/Labelartist/LabelSlider";
import Slider2 from "@/components/Labelartist/Slider2";
import OurClient from "@/components/Labelartist/Mobilesection/OurClient";
import Jene from "@/components/Labelartist/Jene";
import Navbar from "@/components/navbar/Navbar";

const labelartist = () => {
  return (
    <>
      <div className="relative">
        <Image
          className="h-full w-full absolute z-10"
          src={bg}
          alt=""
          height={813}
          width={1832}
        />
        <Navbar />
        <Jene />

        {/* <Commingsoon /> */}

        <div className="mob:hidden">
          <LabelSlider />
        </div>

        <div className="hidden mob:block">
          <OurClient />
        </div>
        <Hero />


        <Slider2 heading="Featured Releases" />

        <div className="relative ">
          <div className="absolute bottom-0 z-0 w-full ">
            <div className="relative overflow-hidden h-full">
              <Image
                className="object-cover bg-cover bg-no-repeat w-full  h-[1780px] mob:h-[1830px] opacity-10"
                src="/imgs/home/buildings.png"
                alt="background"
                height={813}
                width={1832}
              />
              <Image
                className="h-full w-full absolute z-10"
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
