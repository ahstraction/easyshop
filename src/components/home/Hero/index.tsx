import React from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";

const Hero = () => {
  return (
    <div className="bg-[#000] pt-9">
      <div className="relative h-screen  flex items-end justify-center ">
        {/* bg image */}
        <div className="absolute w-full flex justify-center top-0  z-0 h-full ">
          <img
            className="object-cover  h-full"
            src="/imgs/home/Mask group.png"
            alt="background"
          />
        </div>
        {/* content */}
        <div className=" relative pb-[5%] z-10 pl-[6%] ">
          <h1 className="text-[#FFFFFF] uppercase text-center font-opensans font-normal text-[32px] leading-[44px]">
            Welcome to
          </h1>
          <h1 className="text-gradient  text-[64px] text-center font-normal font-tinos leading-[112px]">
            Phillie-BOP Productions
          </h1>
          <h1 className="text-[#9A9A9A] uppercase text-center font-opensans font-normal text-[32px] leading-[44px]">
            The Future Home Of Classic Music
          </h1>

          <div className="mt-9 flex justify-center">
            <button className=" bg-gradient-to-tl from-[#654E14] to-[#A57F1F] rounded-[4px] text-[18px] text-[#FFFFFF] font-opensans  font-semibold py-[12px] px-[30px]">
              EXPLORE MUSIC
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
