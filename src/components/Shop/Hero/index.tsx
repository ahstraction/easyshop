import Image from "next/image";
import React from "react";
import img1 from "@/public/imgs/merch/Rectangle 26 (1).png";
import img2 from "@/public/imgs/merch/Rectangle 26 (2).png";
import img3 from "@/public/imgs/merch/Rectangle 26 (3).png";
import img4 from "@/public/imgs/merch/Rectangle 26 (4).png";
import img5 from "@/public/imgs/merch/Rectangle 26 (5).png";
import img6 from "@/public/imgs/merch/Rectangle 26 (6).png";
import more from "@/public/imgs/merch/more.png";
import jene from "@/public/imgs/merch/jene.png";

import Navbar from "@/components/navbar/Navbar";

const Hero = () => {
  return (
    <>
      <div className="relative z-40">
        <Navbar />
        <h1 className="text-center text-gradient text-[70px] font-medium leading-[80px] font-outfit mt-[100px] ">
          Our Shop
        </h1>
        <p className="text-[#fff] text-[14px] font-normal font-jakrata text-center mt-5 ">
          Provides for purchasing Phillie-BOP Music Merch (hats, masks, physical
          music, etc.)
        </p>
      </div>
      <div className="pt-20  bg-[#121212] pb-[120px]">
        <div className="flex justify-center w-full">
          <div className="flex mob:block justify-center gap-[45px] relative z-50 w-full max-w-[1200px]">
            {/* 1st */}
            <div className="max-w-[270px]">
              <Image
                className="mb-6 "
                src={img1}
                alt=""
                width={352}
                height={266}
              />
              <div className="  max-w-[354px]">
                <div className="flex justify-between ">
                  <h1 className="text-[#FFFFFF] text-[21px] leading-[30px] font-outfit font-medium mb-3">
                    E.S.P
                  </h1>
                  <p className="text-gradient text-[20px] leading-[25.2px] tracking-[3px] font-jakrata font-medium">
                    $1.50
                  </p>
                </div>
                {/* text */}
                <p className="text-[16px] text-[#fff] font-jakrat font-normal leading-[26px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                {/* button */}
                <button className=" py-[20px] w-full uppercase mt-5  rounded-[150px] bg-[#FFFFFF] text-[#121212] tracking-[2px] text-[15px] leading-[18.9px] font-semibold font-jakrata">
                  Add to Cart
                </button>
              </div>
            </div>
            {/* 2nd */}
            <div className="max-w-[270px]">
              <Image
                className="mb-6 "
                src={img2}
                alt=""
                width={270}
                height={258}
              />
              <div className="  max-w-[354px]">
                <div className="flex justify-between ">
                  <h1 className="text-[#FFFFFF] text-[21px] leading-[30px] font-outfit font-medium mb-3">
                    Made
                  </h1>
                  <p className="text-gradient text-[20px] leading-[25.2px] tracking-[3px] font-jakrata font-medium">
                    $1.50
                  </p>
                </div>
                {/* text */}
                <p className="text-[16px] text-[#fff] font-jakrat font-normal leading-[26px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                {/* button */}
                <button className=" py-[20px] w-full uppercase mt-5  rounded-[150px] bg-[#FFFFFF] text-[#121212] tracking-[2px] text-[15px] leading-[18.9px] font-semibold font-jakrata">
                  Add to Cart
                </button>
              </div>
            </div>
            {/* 3rd*/}
            <div className="max-w-[270px]">
              <Image
                className="mb-6 "
                src={img3}
                alt=""
                width={352}
                height={266}
              />
              <div className="  max-w-[354px]">
                <div className="flex justify-between ">
                  <h1 className="text-[#FFFFFF] text-[21px] leading-[30px] font-outfit font-medium mb-3">
                    Worthy
                  </h1>
                  <p className="text-gradient text-[20px] leading-[25.2px] tracking-[3px] font-jakrata font-medium">
                    $1.50
                  </p>
                </div>
                {/* text */}
                <p className="text-[16px] text-[#fff] font-jakrat font-normal leading-[26px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                {/* button */}
                <button className=" py-[20px] w-full uppercase mt-5  rounded-[150px] bg-[#FFFFFF] text-[#121212] tracking-[2px] text-[15px] leading-[18.9px] font-semibold font-jakrata">
                  Add to Cart
                </button>
              </div>
            </div>

            {/* 4th*/}
            <div className="max-w-[270px] ">
              <Image
                className="mb-6 h-[222px] "
                src={more}
                alt=""
                width={270}
                height={258}
              />
              <div className="  max-w-[354px]">
                <div className="flex justify-between ">
                  <h1 className="text-[#FFFFFF] text-[21px] leading-[30px] font-outfit font-medium mb-3">
                    More Than Enough
                  </h1>
                  <p className="text-gradient text-[20px] leading-[25.2px] tracking-[3px] font-jakrata font-medium">
                    $1.50
                  </p>
                </div>

                {/* text */}
                <p className="text-[16px] text-[#fff] font-jakrat font-normal leading-[26px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                {/* button */}
                <button className=" py-[20px] w-full uppercase mt-5  rounded-[150px] bg-[#FFFFFF] text-[#121212] tracking-[2px] text-[15px] leading-[18.9px] font-semibold font-jakrata">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* row2 */}
        <div className="flex justify-center w-full mt-[45px] relative z-50">
          <div className="flex mob:block justify-center gap-[45px] w-full max-w-[1180px]">
            {/* five */}
            <div className="max-w-[270px]">
              <Image
                className="mb-6 "
                src={img5}
                alt=""
                width={352}
                height={266}
              />
              <div className="  max-w-[354px]">
                <div className="flex justify-between ">
                  <h1 className="text-[#FFFFFF] text-[21px] leading-[30px] font-outfit font-medium mb-3">
                    Sweetest of Melody
                  </h1>
                  <p className="text-gradient text-[20px] leading-[25.2px] tracking-[3px] font-jakrata font-medium">
                    $1.50
                  </p>
                </div>
                {/* text */}
                <p className="text-[16px] text-[#fff] font-jakrat font-normal leading-[26px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                {/* button */}
                <button className=" py-[20px] w-full uppercase mt-5  rounded-[150px] bg-[#FFFFFF] text-[#121212] tracking-[2px] text-[15px] leading-[18.9px] font-semibold font-jakrata">
                  Add to Cart
                </button>
              </div>
            </div>

            {/* six*/}
            <div className="max-w-[270px]">
              <Image
                className="mb-6 h-[222px] "
                src={jene}
                alt=""
                width={352}
                height={266}
              />
              <div className="  max-w-[354px]">
                <div className="flex justify-between ">
                  <h1 className="text-[#FFFFFF] text-[21px] leading-[30px] font-outfit font-medium mb-3">
                    Je Ne Sais Quoi” by..
                  </h1>
                  <p className="text-gradient text-[20px] leading-[25.2px] tracking-[3px] font-jakrata font-medium">
                    $1.50
                  </p>
                </div>
                {/* text */}
                <p className="text-[16px] text-[#fff] font-jakrat font-normal leading-[26px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                {/* button */}
                <button className=" py-[20px] w-full uppercase mt-5  rounded-[150px] bg-[#FFFFFF] text-[#121212] tracking-[2px] text-[15px] leading-[18.9px] font-semibold font-jakrata">
                  Add to Cart
                </button>
              </div>
            </div>
            {/* seven*/}
            <div className="max-w-[270px]">
              <Image
                className="mb-6 "
                src={img6}
                alt=""
                width={352}
                height={266}
              />
              <div className="  max-w-[354px]">
                <div className="flex justify-between ">
                  <h1 className="text-[#FFFFFF] text-[21px] leading-[30px] font-outfit font-medium mb-3">
                    Cap
                  </h1>
                  <p className="text-gradient text-[20px] leading-[25.2px] tracking-[3px] font-jakrata font-medium">
                    $1.50
                  </p>
                </div>
                {/* text */}
                <p className="text-[16px] text-[#fff] font-jakrat font-normal leading-[26px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                {/* button */}
                <button className=" py-[20px] w-full uppercase mt-5  rounded-[150px] bg-[#FFFFFF] text-[#121212] tracking-[2px] text-[15px] leading-[18.9px] font-semibold font-jakrata">
                  Add to Cart
                </button>
              </div>
            </div>

            {/* eight */}
            <div className="max-w-[270px]">
              <Image
                className="mb-6 "
                src={img4}
                alt=""
                width={352}
                height={266}
              />
              <div className="  max-w-[354px]">
                <div className="flex justify-between ">
                  <h1 className="text-[#FFFFFF] text-[21px] leading-[30px] font-outfit font-medium mb-3">
                    Mask
                  </h1>
                  <p className="text-gradient text-[20px] leading-[25.2px] tracking-[3px] font-jakrata font-medium">
                    $1.50
                  </p>
                </div>
                {/* text */}
                <p className="text-[16px] text-[#fff] font-jakrat font-normal leading-[26px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                {/* button */}
                <button className=" py-[20px] w-full uppercase mt-5  rounded-[150px] bg-[#FFFFFF] text-[#121212] tracking-[2px] text-[15px] leading-[18.9px] font-semibold font-jakrata">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
