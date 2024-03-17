/* eslint-disable */
// @ts-ignore

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
import Image from "next/image";

const LabelSlider = () => {
  return (
    <div className=" pb-[5px] mob:w-full mt-28 mob:max-w-full w-full max-w-[1320px] m-auto px-[50px] mob:px-[0px] relative z-50 ">
      <Swiper
        // style={{
        //   "--swiper-pagination-color": "#C98200",
        // }}
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
          <Image
            className="mb-20"
            src={slideimg}
            alt=""
            width={1320}
            height={580}
          />
        </SwiperSlide>

        <SwiperSlide className="mob:px-[20px]">
          <Image
            className="mb-20"
            src={slideimg}
            alt=""
            width={1320}
            height={580}
          />
        </SwiperSlide>

        <SwiperSlide className="mob:px-[20px]">
          <Image
            className="mb-20"
            src={slideimg}
            alt=""
            width={1320}
            height={580}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default LabelSlider;
