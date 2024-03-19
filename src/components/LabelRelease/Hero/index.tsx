import React from "react";
import Link from "next/link";
import Image from "next/image";
import maskimg from "@/public/imgs/labelartist/mask.png";
import bgright from "@/public/imgs/labelrelease/bgrightrelease.png";
import bgrightshade from "@/public/imgs/labelrelease/shade.png";
import bannermob from "@/public/imgs/labelartist/imarimobile.png";

import arrow from "@/public/imgs/labelartist/arrow-up.png";
import Navbar from "@/components/navbar/Navbar";

const Hero = () => {
  return (
    <>
      <Navbar />

      <div className="   flex justify-center overflow-hidden pb-32 mob:pb-0 ">
        <div className="w-full h-[664px] mob:h-full bg-[#252322] mt-10  max-w-[1340px] relative ">
          {/* <Image
            className="absolute w-full h-full z-10 opacity-15"
            src={maskimg}
            alt=""
            width={1440}
            height={686}
          /> */}
          <Image
            className="absolute z-10 mob:hidden right-0 opacity-70"
            src={bgright}
            alt=""
            width={790}
            height={664}
          />
          <Image
            className="absolute z-20  right-0 "
            src={bgrightshade}
            alt=""
            width={790}
            height={664}
          />

          {/* content */}
          <div className="py-12 pl-20 mob:pl-5 mob:pr-5 relative z-30">

          <Image
            className="w-full h-full z-10 mob:block hidden mb-5"
            src={bannermob}
            alt=""
            width={1440}
            height={686}
          />
            <h1 className="text-[20px] uppercase  text-[#fff]/70 tracking-[3px] font-jakrata font-normal leading-[25.2px] ">
              Label Release
            </h1>
            <h2 className="text-[50px] mob:text-[30px] font-medium font-outfit text-gradient leading-[60px] mt-[150px] mob:mt-[15px] mb-6">
              Je Ne Sais Quoi (2023)
            </h2>
            <p className="text-[14px] max-w-[643px] text-[#FFFFFF] font-jakrata font-bold leading-[32px] my-[2px]">
              Written by:
              <span className="font-normal ml-1">
                Syrina White and Bennie Pearce
              </span>
            </p>
            <p className="text-[14px] max-w-[643px] text-[#FFFFFF] font-jakrata font-bold leading-[32px] my-[2px]">
              All music written, arranged, performed and recorded by:
              <span className="font-normal ml-1">
                Bennie Pearce for PhillieBOP Productions
              </span>
            </p>
            <p className="text-[14px] max-w-[643px] text-[#FFFFFF] font-jakrata font-bold leading-[32px] my-[2px]">
              Produced by:
              <span className="font-normal ml-1">
                Bennie Pearce for PhillieBOP Productions
              </span>
            </p>
            <p className="text-[14px] max-w-[643px] text-[#FFFFFF] font-jakrata font-bold leading-[32px] my-[2px]">
              Lyrics:
              <span className="font-normal ml-1">Syrina White</span>
            </p>
            <p className="text-[14px] max-w-[643px] text-[#FFFFFF] font-jakrata font-bold leading-[32px] my-[2px]">
              Lead and Background Vocals:
              <span className="font-normal ml-1">Rina Chanel</span>
            </p>
            <p className="text-[14px] max-w-[643px] text-[#FFFFFF] font-jakrata font-bold leading-[32px] my-[2px]">
              Mixed by:
              <span className="font-normal ml-1">
                Craig White for SoundDoctor Productions
              </span>
            </p>
            <p className="text-[14px] max-w-[643px] text-[#FFFFFF] font-jakrata font-bold leading-[32px] my-[2px]">
              Mastered by:
              <span className="font-normal ml-1">Peter Humphreys</span>
            </p>
            <p className="text-[14px] max-w-[643px] text-[#FFFFFF] font-jakrata font-bold leading-[32px] my-[2px]">
              <span className="font-normal ">
                Mastered at Masterwork Recording Inc., Philadelphia, PA.
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
