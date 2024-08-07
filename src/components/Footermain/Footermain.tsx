import Image from "next/image";
import React from "react";
import logo from "@/public/imgs/home/logo.png";
import fb from "@/public/imgs/icons/fbfooter.svg";
import insta from "@/public/imgs/icons/instafooter.svg";
import twiter from "@/public/imgs/icons/twiterfooter.svg";
import Link from "next/link";
// import youtube from "@/public/imgs/icons/Group 5.png"

const Footermain = () => {
  return (
    <>
      <div className="flex justify-center py-16 relative z-50">
        <div className="img flex mob:block w-full justify-between items-end max-w-[1140px] mob:px-5">
          <div className="mob:flex mob:justify-center">
            <Image className="" src={logo} alt="" width={161} height={136} />
          </div>
          <div className="mob:pt-5">
            <div className="flex mob:justify-center gap-[11.94px] mob:my-2 justify-end mb-6">
             

           
            </div>

            <p className="text-[16px] font-jakrata font-normal mob:pt-5 text-[#ACACAC] mob:text-center">
            ©2024 by Easy Shop.

            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footermain;
