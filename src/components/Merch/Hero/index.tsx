import Navbar from "@/components/navbar/Navbar";
import React from "react";

const Hero = () => {
  return (
    <>
      <div className="relative z-30">
        <Navbar />
        <h1 className="text-center text-gradient text-[70px] mob:text-[50px] font-medium leading-[80px] font-outfit mt-[100px] ">
          Merch
        </h1>
      </div>
    </>
  );
};

export default Hero;
