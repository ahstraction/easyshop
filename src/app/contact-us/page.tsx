import Form from "@/components/Contactus/Form";
import Footermain from "@/components/Footermain/Footermain";
import Latest from "@/components/home/Latest";
import Image from "next/image";
import React from "react";
import bg from "@/public/Noise-Animation.png";

const contactus = () => {
  return (
    <>
      <div className="relative ">
        <Image className="h-full w-full absolute z-20" src={bg} alt="" />
        <div className="absolute bottom-0 z-0 w-full ">
          <div className="relative overflow-hidden">
            <Image
              className="object-cover bg-cover bg-no-repeat h-[1100px] w-full   opacity-20"
              src="/imgs/home/release/featuredbg.png"
              alt="background"
              height={1813}
              width={1832}
            />
            <div className="absolute z-10 h-full bottom-0 inset-0 bg-gradient-to-b from-[#121212]  to-transparent opacity-90"></div>
          </div>
        </div>
        <div className="relative z-30">
          <Form />
          <Latest />
          <Footermain />
        </div>
      </div>
    </>
  );
};

export default contactus;
