import React from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Bottomcards from "./Bottomcards";

const Featuredrelease = () => {
  return (
    <div className="relative w-full  pt-6 ">
      {/* bg image */}
      {/* <div className="absolute  z-0 w-full h-full ">
        <img
          className="object-cover bg-cover bg-no-repeat w-full  h-full"
          src="/imgs/home/release/featuredbg.png"
          alt="background"
        />
      </div> */}
      {/* <div className="absolute  z-0 w-full h-full ">
        <img
          className="object-cover bg-cover bg-no-repeat w-full  h-full"
          src="/imgs/home/release/bgshade.png"
          alt="background"
        />
      </div> */}

      {/* content */}
      <div className="relative z-20 py-20 tab:px-2 ">
        <h1 className="text-[#fff] uppercase text-center text-[32px] font-opensans font-normal leading-[43.58px]">
          Phillie-BOPP
        </h1>
        <div className="flex justify-center">
          <h1 className="text-gradient text-center text-[64px] font-normal font-tinos mb-5 leading-[78.59px]">
            "Featured Releases"
          </h1>
        </div>

        {/* main two cards */}
        <div className="grid tab:grid-cols-1 grid-cols-2 justify-center gap-[120px]">
          {/* 1st */}
          <div className="flex justify-end tab:justify-center">
            <div>
              {/* music */}
              <div className="max-w-[400px]">
                <Image
                  src="/imgs/home/release/jene.png"
                  className=" my-4"
                  alt=""
                  width={400}
                  height={400}
                />

                <h1 className="font-normal font-tinos text-[40px] leading-[46px] text-[#fff] pb-4">
                  {" "}
                  Je Ne Sais Quoi{" "}
                </h1>
                <Button />
              </div>
            </div>
          </div>

          {/* 2nd */}
          <div className="flex justify-start tab:justify-center">
            <div>
              {/* music */}
              <div className="max-w-[400px]">
                <Image
                  src="/imgs/home/release/sweetmelody.png"
                  className=" my-4"
                  alt=""
                  width={400}
                  height={400}
                />

                <h1 className="font-normal font-tinos text-[40px] leading-[46px] text-[#fff] pb-4">
                  {" "}
                  Sweetest of Melody
                </h1>
                <Button />
              </div>
            </div>
          </div>
        </div>

        {/* bottom cards */}
        <Bottomcards />
      </div>
    </div>
  );
};

export default Featuredrelease;
