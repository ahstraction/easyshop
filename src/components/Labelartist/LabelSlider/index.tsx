// @ts-nocheck
"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  Mousewheel,
} from "swiper/modules";

import slideimg from "@/public/imgs/labelartist/slideimg.png";
import shape1 from "@/public/imgs/labelartist/shape-element.png";
import shape2 from "@/public/imgs/labelartist/shape-element (1).png";
import Image from "next/image";

const LabelSlider = () => {
  return (
    <div className=" mob:w-full  mob:max-w-full w-full max-w-[1320px] m-auto px-[50px] mob:px-[0px] relative z-50 ">
      <Swiper
        style={{
          "--swiper-pagination-color": "#fff",
          "--swiper-pagination-bullet-inactive-color": "#999999",
        }}
        className="portfolioSlider"
        loop={true}
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          Autoplay,
          Mousewheel,
        ]}
        spaceBetween={20}
        slidesPerView={1}
        // navigation
        // direction="vertical"
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
        pagination={{ clickable: true }}

        // mousewheel={{ invert: true }}
      >
        <SwiperSlide className="mob:px-[20px]">
          <div className="w-[1320px] h-[580px] bg-[#1B1918] relative flex justify-center items-center">
            <Image
              className="absolute right-[90px] top-0"
              src={shape1}
              alt=""
              width={115}
              height={115}
            />
            <Image
              className="absolute left-[0px] bottom-0"
              src={shape2}
              alt=""
              width={115}
              height={115}
            />

            <div className="">
              <h1 className="text-[30px] font-normal font-outfit text-[#fff] leading-[50px] text-center ">
                If you feel like you have the gift, and you want to find out;
                make <br /> yourself available and the world will let you know.
              </h1>

              <p className="flex text-[18px] font-normal leading-[22.68px] tracking-[1px] text-center text-[#fff] justify-center mt-4">
                {" "}
                <span>Bill Withers</span>{" "}
                <span className="ml-1 text-[#fff]/70">(ASCAP Expo 2015)</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default LabelSlider;
