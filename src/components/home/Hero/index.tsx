import React from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Navbar from "@/components/navbar/Navbar";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="bg-[#121212]  relative z-30">
      <Navbar />
      <div className=" min-h-[80vh] mob:min-h-[500px]  flex items-end mob:items-center justify-center mob:px-5 ">
        {/* bg image */}
        <div className="absolute w-full flex justify-center top-0  z-0 h-full ">
          <img
            className=" bg-cover object-cover bg-center w-full"
            src="/imgs/home/new-one-image.png"
            alt="background"
          />
        </div>

        {/* content */}
        <div className=" relative pb-[0px] z-10  ">
          <h1 className="text-[#FFFFFF] hidden uppercase tracking-[4px] text-center font-jakrata font-normal text-[20px] leading-[44px]">
            Welcome to
          </h1>
          <h1 className="text-gradient  mob:py-4 text-[70px] mob:text-[40px] mob:leading-[44px] text-center font-semibold font-outfit leading-[112px]">
            Phillie-BOP Productions
          </h1>
          <h1 className="text-[#FFFFFF]/80 uppercase tracking-[3px] text-center font-jakrata font-normal text-[20px] leading-[44px] mob:leading-[30px] ">
            The Future Home Of Classic Music
          </h1>

          <div className="mt-9 flex justify-center">
            <Link href="/shop">
              <button className=" py-[20px] px-[40px] mob:px-[30px] mob:py-[15px] rounded-[150px] bg-[#FFFFFF] text-[#121212] tracking-[2px] text-[15px] leading-[18.9px] font-semibold font-jakrata">
                EXPLORE MUSIC
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* bottom  */}
      <div className="w-full relative  pt-28 mob:pt-0  z-30">
        <Image
          className="w-full"
          src="/imgs/home/sahi-waves.png"
          alt="background"
          height={432}
          width={1439}
        />
        {/* <div className="absolute  h-[100px] top-[420px] inset-0 bg-gradient-to-b from-[#121212]    to-transparent    z-50"></div> */}
      </div>
    </div>
  );
};

export default Hero;
