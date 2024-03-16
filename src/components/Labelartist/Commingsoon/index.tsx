import Image from "next/image";
import React from "react";
import bg from "@/public/imgs/labelartist/scndbg.png";
import bgovrlay from "@/public/Noise-Animation.png";
import logo from "@/public/imgs/home/phillibop-logo-new (1) (1).png";

const Commingsoon = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="max-w-[1140px] w-full min-h-[417px] flex justify-center items-center">
          <Image
            className="absolute opacity-50"
            src={bg}
            alt=""
            width={1140}
            height={417}
          />
          <Image
            className="absolute z-20"
            src={bgovrlay}
            alt=""
            width={1140}
            height={417}
          />
          <div className=" relative z-30">
            <Image className="" src={logo} alt="" width={200} height={171} />
            <h2 className="text-[20px] mt-20 uppercase text-center w-full text-gradient leading-[25.2px] font-medium font-jakrata ">
              Coming Soon
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Commingsoon;
