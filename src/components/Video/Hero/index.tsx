import React from "react";
import Image from "next/image";
import Link from "next/link";

import img1 from "@/public/imgs/video/Rectangle 26 (7).png";
import img2 from "@/public/imgs/video/Rectangle 27.png";
import img3 from "@/public/imgs/video/Rectangle 28.png";
import playbutton from "@/public/imgs/video/playbutton.png";
import maskimg from "@/public/imgs/labelartist/mask.png";
import mainvid from "@/public/imgs/video/mainvid.png";
import arrow from "@/public/imgs/labelartist/arrow-up.png";

import Navbar from "@/components/navbar/Navbar";

const Hero = () => {
  return (
    <>
      <div className="relative   pb-20  z-40">
        <Navbar />
        <h1 className="text-center mb-8 text-gradient text-[70px] font-medium leading-[80px] font-outfit mt-[100px] ">
          Video
        </h1>
        <div className="flex justify-center">
          <div className="max-w-[1140px]">
            {/* main video */}
            <div className="   flex justify-center overflow-hidden  ">
              <div className="w-full h-[613px] bg-[#161616] mt-10  max-w-[1340px] relative ">
                <Image
                  className="absolute z-10 h-full w-full"
                  src={mainvid}
                  alt=""
                  width={1240}
                  height={760}
                />

                {/* content */}
                <div className="flex py-12 px-20 h-full w-full relative z-20 items-end ">
                  <div className="flex justify-between items-center w-full">
                    <div className="">
                      <h2 className="text-[17px] tracking-[3px] font-bold font-jakrata text-gradient leading-[21.42px] ">
                        18 March 2023
                      </h2>
                      <h1 className="text-[40px] mt-2 text-[#fff] tracking-[2px] font-outfit font-medium leading-[50.4px] ">
                        Je Ne Sais Quoi
                      </h1>

                      <p className="text-[18px]  text-[#FFFFFF] font-jakrata font-bold leading-[22.68px] my-6">
                        PhillieBOP Productions
                      </p>
                    </div>

                    {/* button */}
                    <Image
                      className="h-[90px] w-[90px]"
                      src={playbutton}
                      alt=""
                      width={90}
                      height={90}
                    />
                  </div>
                </div>
              </div>
            </div>

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
                <div className="">
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
                      Rina Chanel Made
                    </h1>

                    {/* text */}
                    <p className="text-[14px] text-center text-[#fff] font-jakrata font-bold leading-[26px] my-2">
                      (Official Video)
                    </p>
                    {/* button */}
                    <button className=" py-[20px] w-full uppercase mt-3  rounded-[150px] bg-[#FFFFFF] text-[#121212] tracking-[2px] text-[15px] leading-[18.9px] font-semibold font-jakrata">
                      Explore Music
                    </button>
                  </div>
                </div>

                {/* 2nd */}
                <div className="">
                  <div className="relative flex justify-center items-center">
                    <Image
                      className="mb-6 "
                      src={img2}
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
                      Rina Chanel Made
                    </h1>

                    {/* text */}
                    <p className="text-[14px] text-center text-[#fff] font-jakrata font-bold leading-[26px] my-2">
                      (Official Video)
                    </p>
                    {/* button */}
                    <button className=" py-[20px] w-full uppercase mt-3  rounded-[150px] bg-[#FFFFFF] text-[#121212] tracking-[2px] text-[15px] leading-[18.9px] font-semibold font-jakrata">
                      Explore Music
                    </button>
                  </div>
                </div>

                {/* 3rd*/}
                <div className="">
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
                      16 November 2020
                    </p>
                    <h1 className="text-[#FFFFFF] text-center text-[30px] leading-[30px] font-outfit font-medium mt-3 mb-3">
                      Rina Chanel Made
                    </h1>

                    {/* text */}
                    <p className="text-[14px] text-center text-[#fff] font-jakrata font-bold leading-[26px] my-2">
                      (Official Video)
                    </p>
                    {/* button */}
                    <button className=" py-[20px] w-full uppercase mt-3  rounded-[150px] bg-[#FFFFFF] text-[#121212] tracking-[2px] text-[15px] leading-[18.9px] font-semibold font-jakrata">
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
