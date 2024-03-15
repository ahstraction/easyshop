import React from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";

const Shop = () => {
  return (
    <>
      <div className="tab:px-2 pt-10 pb-10">
        <div className="flex justify-center">
          <h1 className="text-center  font-normal font-tinos text-[64px] leading-[75.59px] text-gradient">
            Shop
          </h1>
        </div>
        <h1 className="text-center font-normal uppercase font-opensans text-[24px] mb-8 leading-[32.68px] text-[#FFFFFF]">
          Provides for purchasing Phillie-BOP Music Merch (hats, masks, physical
          music, etc.)
        </h1>

        <div className="flex tab:block justify-center gap-10 ">
          {/* 1st */}
          <div className="flex justify-end tab:justify-center">
            <div>
              <div className="max-w-[400px] relative ">
                <Image
                  src="/imgs/home/release/esp.png"
                  className=" w-full relative my-4 z-0"
                  alt="esp2"
                  width={400}
                  height={400}
                />
                <div className="absolute  top-0 z-0 w-full h-full ">
                  <img
                    className="object-cover bg-cover bg-no-repeat w-full  h-full"
                    src="/imgs/home/shop/gradient.png"
                    alt="background1"
                  />
                </div>
                <div className="absolute z-20 bottom-8 left-10">
                  <h1 className=" relative z-10 font-normal font-tinos text-[40px] leading-[46px] text-[#fff]">
                    {" "}
                    E.S.P
                  </h1>
                  <h2 className=" relative z-10 font-bold font-opensans text-[24px] mt-[5px] mb-4 leading-[24px] text-gradient">
                    {" "}
                    $1.50
                  </h2>
                  <Button />
                </div>
              </div>
            </div>
          </div>

          {/* 2nd */}
          <div className="flex justify-center tab:justify-center">
            <div>
              {/* music */}
              <div className="max-w-[400px] relative ">
                <Image
                  src="/imgs/home/shop/made.png"
                  className=" w-full relative my-4 z-0"
                  alt="made2"
                  width={400}
                  height={400}
                />

                <div className="absolute  top-0 z-0 w-full h-full ">
                  <img
                    className="object-cover bg-cover bg-no-repeat w-full  h-full"
                    src="/imgs/home/shop/gradient.png"
                    alt="background2"
                  />
                </div>

                <div className="absolute z-20 bottom-8 left-10">
                  <h1 className=" relative z-10 font-normal font-tinos text-[40px] leading-[46px] text-[#fff]">
                    {" "}
                    Made
                  </h1>
                  <h1 className=" relative z-10 font-bold font-opensans text-gradient  text-[24px] mt-[5px] mb-4 leading-[24px] ">
                    {" "}
                    $1.50
                  </h1>
                  <Button />
                </div>
              </div>
            </div>
          </div>

          {/* 3rd*/}
          <div className="flex justify-start tab:justify-center">
            <div>
              {/* music */}
              <div className="max-w-[400px] relative ">
                <Image
                  src="/imgs/home/shop/worthy.png"
                  className=" w-full relative my-4 z-0"
                  alt="worthy"
                  width={400}
                  height={400}
                />
                <div className="absolute  top-0 z-0 w-full h-full ">
                  <img
                    className="object-cover bg-cover bg-no-repeat w-full  h-full"
                    src="/imgs/home/shop/gradient.png"
                    alt="background3"
                  />
                </div>
                <div className="absolute z-20 bottom-8 left-8">
                  <h1 className=" relative z-10 font-normal font-tinos text-[40px] leading-[46px] text-[#fff]">
                    {" "}
                    Worthy
                  </h1>
                  <h1 className=" relative z-10 font-bold font-opensans text-gradient text-[24px] mt-[5px] mb-4 leading-[24px] ">
                    {" "}
                    $1.50
                  </h1>
                  <Button />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
