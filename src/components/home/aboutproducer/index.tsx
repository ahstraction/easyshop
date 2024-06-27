"use client";
import React, { useState } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";

const AboutProducer = () => {
  const [showFullBio, setShowFullBio] = useState(false);

  const toggleBio = () => {
    setShowFullBio(!showFullBio);
  };

  return (
    <>
      <div className="pb-20">
        <div className=" 2xl:container-fluid flex items-center justify-center  mx-auto overflow-x-hidden relative">
          {/* <Image
            src="/imgs/home/about_the_producer_bg (1).png"
            className=" absolute object-cover bg-cover bg-center h-full w-full"
            alt=""
            width={1440}
            height={913}
          /> */}
          {/* <Image
            src="/imgs/home/wavegrad.png"
            className=" absolute top-0 w-full"
            alt=""
            width={1440}
            height={200}
          /> */}

          <div className=""></div>
          <div className="my-16 relative max-w-[1340px] w-full">
            <div className=" flex mob:block items-center justify-between relative z-20 mob:px-5 ">
              {/* for mob */}
              <div className="mob:block hidden">
                <div className="flex justify-center tab:justify-center mob:pb-6  items-center">
                  <Image
                    src="/imgs/home/img.png"
                    className=" my-4 w-[50%]"
                    alt=""
                    width={483}
                    height={412}
                  />
                </div>
              </div>

              {/* desktop */}
              <div className="flex  justify-end tab:justify-center items-center">
                <div className=" relative w-full max-w-[674px] px-[2%]">
                  <h2 className="text-[#c8c82d] mob:text-center text-left font-outfit font-bold text-[50px] mob:text-[30px] leading-[64.2px] mob:leading-[40px] mb-8 mob:mb-4">
                    EasyShop Vision
                  </h2>
                  <p className="text-[#FFFFFF] mob:text-center font-bold font-jakrata mob:text-[14px]  text-[16px] leading-[30px]">
                    <span className="mob:hidden">
                    At EasyShop For All, we believe that shopping should be a delightful experience for everyone. That's why we've designed our website to be fully accessible and user-friendly for visually impaired users. Whether you're looking for the latest gadgets, stylish apparel, or daily essentials, we've got you covered.
                    </span>

                    <span className="hidden mob:block">
                      {showFullBio ? (
                        <>
                          <span className="">
                          At EasyShop For All, we believe that shopping should be a delightful experience for everyone. That's why we've designed our website to be fully accessible and user-friendly for visually impaired users. Whether you're looking for the latest gadgets, stylish apparel, or daily essentials, we've got you covered.
                          </span>
                        </>
                      ) : (
                        <span className="">
                          At EasyShop For All, we believe that shopping should be a delightful experience for everyone. That's why we've designed our website to be fully accessible and user-friendly for visually impaired users. Whether you're looking for the latest gadgets, stylish apparel, or daily essentials, we've got you covered.
                        </span>
                      )}
                    </span>
                  </p>
                  <div className="hidden mob:block">
                    <div className="flex justify-center mt-4 ">
                      <button
                        onClick={toggleBio}
                        className="font-bold flex gap-1 font-jakrata text-gradient leading-[21.42px] tracking-[2px] uppercase"
                      >
                        {showFullBio ? "See less" : "See more"}
                      </button>
                    </div>
                  </div>
                  {/* <div className="mt-9">
                  <Button text="Learn More" />
                </div> */}
                </div>
              </div>
              <div className="flex justify-center tab:justify-center mob:pt-6 mob:hidden items-center">
                <Image
                  src="/imgs/home/img.png"
                  className=" my-4"
                  alt=""
                  width={483}
                  height={412}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutProducer;
