import React from "react";
import Link from "next/link";
import Image from "next/image";
import maskimg from "@/public/imgs/labelartist/mask.png";
import bgright from "@/public/imgs/labelrelease/imarii.png";
import bgrightshade from "@/public/imgs/labelrelease/shade.png";
import bannermob from "@/public/imgs/labelartist/imarimobile.png";
import { FaApple  , FaSpotify } from "react-icons/fa";

import arrow from "@/public/imgs/labelartist/arrow-up.png";
import Navbar from "@/components/navbar/Navbar";

const Hero = () => {
  return (
    <>
      <Navbar />

      <div className="   flex justify-center overflow-hidden pb-16 mob:pb-0 ">
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
            <h2 className="text-[50px] mob:text-[30px] font-medium font-outfit imarigradient leading-[60px] mt-[100px] mob:mt-[15px] mt-6">
            Imari's Breathe Again
            </h2>
            <div className="flex items-end gap-4 relative  mt-2 mb-4">
                  <Link target="_blank" href="https://music.apple.com/album/1734140259?i=1734140260">
                  <FaApple className="text-white text-[25px]" />
                  </Link>
                  <Link target="_blank" href="https://open.spotify.com/track/7ybLhO296Nk9H6Bmhfwr25">
                  <FaSpotify  className="text-white text-[23px]" />
                  </Link>
                  </div>
            <p className="text-[14px] max-w-[643px] text-[#FFFFFF] font-jakrata font-bold leading-[32px] my-[2px]">
              Written by:
              <span className="font-normal ml-1">
              Jashonda Imari Dutch and Bennie Pearce
              </span>
            </p>
            <p className="text-[14px] max-w-[643px] text-[#FFFFFF] font-jakrata font-bold leading-[32px] my-[2px]">
              All music written, arranged, performed and recorded by:
              <span className="font-normal ml-1">
              Bennie Pearce for PhillieBOP Music (ASCAP)
              </span>
            </p>
            <p className="text-[14px] max-w-[643px] text-[#FFFFFF] font-jakrata font-bold leading-[32px] my-[2px]">
              Produced by:
              <span className="font-normal ml-1">
              Bennie Pearce for Phillie-BOP Productions
              </span>
            </p>
            <p className="text-[14px] max-w-[643px] text-[#FFFFFF] font-jakrata font-bold leading-[32px] my-[2px]">
              Lyrics:
              <span className="font-normal ml-1">Jashonda Imari Dutch</span>
            </p>
            <p className="text-[14px] max-w-[643px] text-[#FFFFFF] font-jakrata font-bold leading-[32px] my-[2px]">
            Lead and Background Vocals and arrangements: 
              <span className="font-normal ml-1">Jashonda Imari Dutch</span>
            </p>
            <p className="text-[14px] max-w-[643px] text-[#FFFFFF] font-jakrata font-bold leading-[32px] my-[2px]">
            Bass Guitar: 
              <span className="font-normal ml-1">
              Bennie Pearce
              </span>
            </p>
            <p className="text-[14px] max-w-[643px] text-[#FFFFFF] font-jakrata font-bold leading-[32px] my-[2px]">
            Keyboards: 
              <span className="font-normal ml-1">Bennie Pearce</span>
            </p>
            <p className="text-[14px] max-w-[643px] text-[#FFFFFF] font-jakrata font-bold leading-[32px] my-[2px]">
            Mixed by: 
              <span className="font-normal ml-1">Craig White for Sound Doctor Productions</span>
            </p>
            <p className="text-[14px] max-w-[643px] text-[#FFFFFF] font-jakrata font-bold leading-[32px] my-[2px]">
            Mastering by:  
              <span className="font-normal ml-1">Peter Humphreys for Masterwork Recording, Inc.</span>
            </p>
            <Link
            href="/label-artist"
                  className={`font-bold flex gap-1 mob:flex mob:justify-center font-jakrata text-gradient leading-[21.42px] tracking-[2px] uppercase mt-2`}  
                >
                 IMARI's bio
                  <Image src={arrow} alt="" width={16.97} height={16.97} />
                </Link>
            {/* <p className="text-[14px] max-w-[643px] text-[#FFFFFF] font-jakrata font-bold leading-[32px] my-[2px]">
              <span className="font-normal ">
                Mastered at Masterwork Recording Inc., Philadelphia, PA.
              </span>
            </p> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
