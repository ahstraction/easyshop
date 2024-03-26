

"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaApple  , FaSpotify } from "react-icons/fa";

import img1 from "@/public/imgs/video/Rectangle 26 (7).png";
import img2 from "@/public/imgs/video/Rectangle 27.png";
import img3 from "@/public/imgs/video/Rectangle 28.png";
import jene from "@/public/imgs/video/jenasis.png";
import playbutton from "@/public/imgs/video/playbutton.png";
import maskimg from "@/public/imgs/labelartist/mask.png";
import mainvid from "@/public/imgs/video/imaribanner.png";
import arrow from "@/public/imgs/labelartist/arrow-up.png";
import imari from "@/public/imgs/labelrelease/imarii.png"

import Navbar from "@/components/navbar/Navbar";
import Modal from "../Modal";
import ImariModal from "../Modal/Imari";

const Hero = () => {


  const router = useRouter();

  // Function to handle click event
  const handleClick = (id: any) => {
    // Redirect to the dynamic route page with the selected ID
    router.push(`/products/${id}`);
    console.log(id, "id");
  };

  return (
    <>
      <div className="relative   pb-20 mob:pb-10 mob:mb-10 z-40">
        <Navbar />
        <h1 className="text-center mb-8 text-gradient text-[70px] font-medium leading-[80px] font-outfit mt-[100px] ">
          Video
        </h1>
        <div className="flex justify-center mob:px-5">
          <div className="max-w-[1140px]">
            {/* main video */}
           <ImariModal/>

            {/* hr  */}
            <div className="flex justify-center w-full">
              <div className=" py-[100px] max-w-[1140px]  w-full">
                <hr className="h-px  bg-[#FFFFFF33]/20 border-0 dark:bg-[#FFFFFF33]"></hr>
              </div>
            </div>

            {/* cards */}
            <div className="flex justify-center w-full">
              <div className="flex mob:block justify-center gap-[45px] relative z-50 w-full max-w-[1180px]">
                {/* 1st */}
                <div
                  onClick={() => handleClick("made")}
                  className="cursor-pointer mob:mb-5"
                >
                  <div className="relative flex justify-center items-center">
                    <Image
                      className="mb-6 "
                      src={img1}
                      alt=""
                      width={352}
                      height={266}
                    />
                    <Image
                      className="absolute z-20"
                      src={playbutton}
                      alt=""
                      width={90}
                      height={90}
                    />
                  </div>
                  <div className="  max-w-[354px]">
                    <p className="text-gradient text-center text-[15px] leading-[25.2px] uppercase tracking-[3px] font-jakrata font-normal">
                      16 November 2020
                    </p>
                    <h1 className="text-[#FFFFFF] text-center text-[30px] leading-[30px] font-outfit font-medium mt-3 mb-3">
                      Rina Chanel <br /> Made
                    </h1>

                    {/* text */}
                    <p className="text-[14px] text-center text-[#fff] font-jakrata font-bold leading-[26px] my-2">
                      (Official Video)
                    </p>
                    {/* button */}
                    <button className=" py-[20px] w-full mob:mt-[12px] mt-[73px]  uppercase   rounded-[150px] bg-[#FFFFFF] text-[#121212] tracking-[2px] text-[15px] leading-[18.9px] font-semibold font-jakrata">
                      Explore Music
                    </button>
                  </div>
                </div>

                {/* 2nd */}
                <div className="mob:mb-5">
                  <div className="relative flex justify-center items-center ">
                    {/* button */}
                    {/* <button className=" py-[20px] w-full uppercase mt-3  rounded-[150px] bg-[#FFFFFF] text-[#121212] tracking-[2px] text-[15px] leading-[18.9px] font-semibold font-jakrata">
                      Watch Now
                    </button> */}

                    <div className="relative z-50">
                      <Modal />
                    </div>
                  </div>
                </div>

                {/* 3rd*/}
                <div
                  onClick={() => handleClick("more")}
                  className="cursor-pointer mob:mb-5"
                >
                  <div className="relative flex justify-center items-center">
                    <Image
                      className="mb-6 "
                      src={img3}
                      alt=""
                      width={352}
                      height={266}
                    />
                    <Image
                      className="absolute z-20"
                      src={playbutton}
                      alt=""
                      width={90}
                      height={90}
                    />
                  </div>
                  <div className="  max-w-[354px]">
                    <p className="text-gradient text-center text-[15px] leading-[25.2px] uppercase tracking-[3px] font-jakrata font-normal">
                      11 June 2021
                    </p>
                    <h1 className="text-[#FFFFFF] text-center text-[30px] leading-[30px] font-outfit font-medium mt-3 mb-3">
                      More Than Enough
                    </h1>

                    {/* text */}
                    <p className="text-[14px] text-center text-[#fff] font-jakrata font-bold leading-[26px] my-2">
                      (Rina Chanel (Lyric Video))
                    </p>
                    {/* button */}
                    <button className=" py-[20px] mt-[73px] mob:mt-3 w-full uppercase  rounded-[150px] bg-[#FFFFFF] text-[#121212] tracking-[2px] text-[15px] leading-[18.9px] font-semibold font-jakrata">
                      Explore Music
                    </button>
                  </div>
                </div>

                {/* 4th*/}
                <div
                  onClick={() => handleClick("jeneSais")}
                  className="cursor-pointer mob:mb-5"
                >
                  <div className="relative flex justify-center items-center">
                    <Image
                      className="mb-6 "
                      src={jene}
                      alt=""
                      width={352}
                      height={266}
                    />
                    <Image
                      className="absolute z-20"
                      src={playbutton}
                      alt=""
                      width={90}
                      height={90}
                    />
                  </div>
                  <div className="  max-w-[354px]">
                    <p className="text-gradient text-center text-[15px] leading-[25.2px] uppercase tracking-[3px] font-jakrata font-normal">
                      18 March 2023
                    </p>
                    <h1 className="text-[#FFFFFF] text-center text-[30px] leading-[30px] font-outfit font-medium mt-3 mb-3">
                      Je Ne Sais <br /> Quoi
                    </h1>

                    {/* text */}
                    <p className="text-[14px] text-center text-[#fff] font-jakrata font-bold leading-[26px] my-2">
                      (Rina Chanel (Lyric Video))
                    </p>
                    {/* button */}
                    <button className=" py-[20px] mt-[67px] mob:mt-3 w-full uppercase   rounded-[150px] bg-[#FFFFFF] text-[#121212] tracking-[2px] text-[15px] leading-[18.9px] font-semibold font-jakrata">
                      Explore Music
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
