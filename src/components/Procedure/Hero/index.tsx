import React from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Navbar from "@/components/navbar/Navbar";
import bg from "@/public/imgs/procedure/procedure.png";
// import Production from "@/components/home/productions";

const Hero = () => {
  return (
    <div className="  z-20">
      <Navbar />
      <div className=" min-h-[500px]  flex items-end mob:items-center justify-center mob:px-5 ">
        {/* bg image */}
        {/* <div className="absolute w-full flex justify-center top-0  z-0 h-full ">
          <Image
            className=" bg-cover object-cover bg-center w-full"
            src={bg}
            alt="background"
            height={1049}
            width={1441}
          />
        </div> */}

        {/* content */}
        <div className=" relative pb-[0px] z-10 ">
          <h1 className="text-[#FFFFFF] uppercase tracking-[4px] text-center font-jakrata font-normal text-[20px] leading-[44px]">
            Welcome to
          </h1>
          <h1 className="text-gradient  text-[70px] mob:text-[40px] mob:leading-[44px]  text-center font-medium font-outfit mt-2 mb-10 mob:mb-8 leading-[80px]">
            Phillie-BOP Productions <br /> Label Vision
          </h1>
          <h1 className="text-[#FFFFFF]/80 uppercase tracking-[3px] text-center font-jakrata font-normal text-[20px] leading-[44px] mob:leading-[30px]">
            The Future Home Of Classic Music
          </h1>
        </div>
      </div>
      {/* bottom  */}
      <div className="flex justify-center w-full mob:px-5">
        <div className="pt-[250px] pb-[100px] mob:py-0 max-w-[1140px]  w-full">
          <hr className="h-px  bg-[#FFFFFF33]/20 border-0 dark:bg-[#FFFFFF33]"></hr>
        </div>
      </div>

      {/* <Production/> */}
    </div>
  );
};

export default Hero;
