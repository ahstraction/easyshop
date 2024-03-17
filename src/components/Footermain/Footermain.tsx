import Image from "next/image";
import React from "react";
import logo from "@/public/imgs/home/logoimg.png";
import fb from "@/public/imgs/icons/fbfooter.svg";
import insta from "@/public/imgs/icons/instafooter.svg";
import twiter from "@/public/imgs/icons/twiterfooter.svg";
import Link from "next/link";
// import youtube from "@/public/imgs/icons/Group 5.png"

const Footermain = () => {
  return (
    <>
      <div className="flex justify-center py-16 relative z-20">
        <div className="img flex mob:block w-full justify-between items-end max-w-[1140px] mob:px-5">
          <div className="mob:flex mob:justify-center">
            <Image className="" src={logo} alt="" width={161} height={136} />
          </div>
          <div className="">
            <div className="flex mob:justify-center gap-[11.94px] mob:my-2 justify-end mb-6">
              <Link href="https://www.facebook.com/philliebopproductions">
                <Image
                  className="cursor-pointer"
                  src={fb}
                  alt=""
                  width={37}
                  height={37}
                />
              </Link>

              <Link href="https://www.instagram.com/philliebopproductions/">
                <Image
                  className="cursor-pointer"
                  src={insta}
                  alt=""
                  width={37}
                  height={37}
                />
              </Link>

              <Link href="https://twitter.com/PhillieBOP">
                <Image
                  className="cursor-pointer"
                  src={twiter}
                  alt=""
                  width={37}
                  height={37}
                />
              </Link>

              {/* <Image
                className="cursor-pointer"
                src={youtube}
                alt=""
                width={37}
                height={37}
              /> */}
            </div>

            <p className="text-[16px] font-jakrata font-normal text-[#ACACAC] mob:text-center">
              ©2024 by PhillieBOP Entertainment/Productions LLC.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footermain;
