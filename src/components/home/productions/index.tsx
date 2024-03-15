import React from "react";
import Image from "next/image";

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Productions = () => {
  return (
    <div className=" py-32 bg-primary-dark flex justify-center items-center relative ">
      <video
        className="w-full z-[0]  mob:p-0  absolute mob:rounded-none  h-full bg-[#464440] opacity-70"
        style={{ objectFit: "cover" }}
        src="/productionvideo.mp4"
        autoPlay
        muted
        loop
        playsInline
        suppressHydrationWarning={true}
      />
      {/* <div className="absolute  z-0 w-full h-full ">
        <img
          className="object-cover bg-cover bg-no-repeat w-full  h-full"
          src="/imgs/home/release/bgshade.png"
          alt="background"
        />
      </div> */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>

      <div className="max-w-[600px] w-full relative z-20">
        <div className="flex justify-center">
          <Image
            src="/imgs/home/logo1.png"
            className=" my-4"
            alt=""
            width={322}
            height={322}
          />
        </div>

        <h1 className="text-[17px] text-[#D3D3D3] font-normal font-sans text-center leading-7 mt-[6px] mb-5">
          Be the first to know what’s up with Phillie-BOP
        </h1>

        <div className="w-full">
          <input
            className="w-full outline-none focus:outline-none text-[#69727d] border-1 border-[#69727d] px-3 py-3 "
            type="email"
            placeholder="Email"
          />
          <button className="py-3 mt-3 w-full bg-[#CAA43A] text-[15px] font-medium font-monts text-white rounded-[3px]">
            Subscribe
          </button>

          {/* icons */}
          <div className="flex gap-3 justify-center items-center py-10">
            <span className="rounded-full border-2 border-white p-[7px] hover:opacity-75 cursor-pointer transition-transform transform hover:scale-95">
              <FaFacebook className="text-white text-2xl hover:opacity-75 " />
            </span>

            <span className="rounded-full border-2 border-white p-[7px] hover:opacity-75 cursor-pointer transition-transform transform hover:scale-95">
              <FaInstagram className="text-white text-2xl hover:opacity-75 " />
            </span>

            <span className="rounded-full border-2 border-white p-[7px] hover:opacity-75 cursor-pointer transition-transform transform hover:scale-95">
              <FaTwitter className="text-white text-2xl hover:opacity-75 " />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productions;
