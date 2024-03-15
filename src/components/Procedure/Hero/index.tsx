import React from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Navbar from "@/components/navbar/Navbar";
import bg from "@/public/imgs/procedure/procedure.png"
// import Production from "@/components/home/productions";

const Hero = () => {
  return (
    <div className=" relative z-20">
      <Navbar />
      <div className=" min-h-[400px]  flex items-end mob:items-center justify-center ">
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
          <h1 className="text-[#FFFFFF] uppercase text-center font-jakrata font-normal text-[20px] leading-[44px]">
            Welcome to
          </h1>
          <h1 className="text-gradient  text-[70px] mob:text-[40px] mob:leading-[48px] text-center font-medium font-outfit leading-[112px]">
            Phillie-BOP Productions
          </h1>
          <h1 className="text-[#9A9A9A] uppercase text-center font-jakrata font-normal text-[20px] leading-[44px]  ">
            The Future Home Of Classic Music
          </h1>

          <div className="mt-9 flex justify-center ">
            <button className=" py-[20px] px-[40px] rounded-[150px] bg-[#FFFFFF] text-[#121212] text-[15px] leading-[18.9px] font-semibold font-jakrataS">
              EXPLORE MUSIC
            </button>
          </div>
    
        </div>
      </div>
      {/* bottom  */}
   <div className="flex justify-center w-full">
   <div className="pt-[250px] pb-[100px] max-w-[1140px]  w-full">
         <hr className="h-px  bg-gray-200 border-0 dark:bg-gray-700"></hr>
         </div>
   </div>

   {/* <Production/> */}

    </div>
  );
};

export default Hero;
