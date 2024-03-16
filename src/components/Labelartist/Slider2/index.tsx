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

import Image from "next/image";
import slideimg2 from "@/public/imgs/labelartist/slide2.png";
import slideimg3 from "@/public/imgs/labelartist/Rectangle 2144.png";
import slideimg4 from "@/public/imgs/labelartist/Rectangle 2146.png";
import arrow from "@/public/imgs/icons/majesticons_arrow-up.svg";

const Slider2 = () => {
  return (
    <div className=" pb-[140px] mob:w-full mt-20 mob:max-w-full max-w-[1440px] m-auto px-[50px] mob:px-[0px] relative z-50 ">
      <h1 className="text-[#FFFFFF] tracking-[3px] uppercase text-center mb-20 text-[20px] font-jakrata font-normal leading-[25.2px] ">
        Featured Releases
      </h1>

      <Swiper
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
        slidesPerView={3}
        // navigation
        // direction="vertical"
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
        // pagination={{ clickable: true }}

        // mousewheel={{ invert: true }}
      >
        <SwiperSlide className="mob:px-[20px]">
          {/* <Image
            className="mb-20"
            src={slideimg}
            alt=""
            width={1320}
            height={580}
          /> */}

          <div className="">
            <Image
              className="mb-6 h-[480px] w-[480px]"
              src={slideimg2}
              alt=""
              width={480}
              height={480}
            />
            <div className="flex justify-between items-center">
              <div className="">
                <h1 className="text-[#FFFFFF] text-[30px] font-outfit font-medium">
                  Sweetest of Melody
                </h1>
                <p className="text-gradient text-[20px] leading-[25.2px] tracking-[3px] font-jakrata font-medium">
                  2023
                </p>
              </div>
              {/* img arrow */}
              <Image className="" src={arrow} alt="" width={40} height={40} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="mob:px-[20px]">
          {/* <Image
            className="mb-20"
            src={slideimg}
            alt=""
            width={1320}
            height={580}
          /> */}

          <div className="">
            <Image
              className="mb-6 h-[480px] w-[480px]"
              src={slideimg3}
              alt=""
              width={480}
              height={480}
            />
            <div className="flex justify-between items-center">
              <div className="">
                <h1 className="text-[#FFFFFF] text-[30px] font-outfit font-medium">
                  Je Ne Sais Quoi
                </h1>
                <p className="text-gradient text-[20px] leading-[25.2px] tracking-[3px] font-jakrata font-medium">
                  2024
                </p>
              </div>
              {/* img arrow */}
              <Image className="" src={arrow} alt="" width={40} height={40} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="mob:px-[20px]">
          {/* <Image
            className="mb-20"
            src={slideimg}
            alt=""
            width={1320}
            height={580}
          /> */}

          <div className="">
            <Image
              className="mb-6 h-[480px] w-[480px]"
              src={slideimg4}
              alt=""
              width={480}
              height={480}
            />
            <div className="flex justify-between items-center">
              <div className="">
                <h1 className="text-[#FFFFFF] text-[30px] font-outfit font-medium">
                  Worthy
                </h1>
                <p className="text-gradient text-[20px] leading-[25.2px] tracking-[3px] font-jakrata font-medium">
                  2000
                </p>
              </div>
              {/* img arrow */}
              <Image className="" src={arrow} alt="" width={40} height={40} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="mob:px-[20px]">
          {/* <Image
            className="mb-20"
            src={slideimg}
            alt=""
            width={1320}
            height={580}
          /> */}

          <div className="">
            <Image
              className="mb-6 h-[480px] w-[480px]"
              src={slideimg2}
              alt=""
              width={480}
              height={480}
            />
            <div className="flex justify-between items-center">
              <div className="">
                <h1 className="text-[#FFFFFF] text-[30px] font-outfit font-medium">
                  Sweetest of Melody
                </h1>
                <p className="text-gradient text-[20px] leading-[25.2px] tracking-[3px] font-jakrata font-medium">
                  2023
                </p>
              </div>
              {/* img arrow */}
              <Image className="" src={arrow} alt="" width={40} height={40} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="mob:px-[20px]">
          {/* <Image
            className="mb-20"
            src={slideimg}
            alt=""
            width={1320}
            height={580}
          /> */}

          <div className="">
            <Image
              className="mb-6 h-[480px] w-[480px]"
              src={slideimg3}
              alt=""
              width={480}
              height={480}
            />
            <div className="flex justify-between items-center">
              <div className="">
                <h1 className="text-[#FFFFFF] text-[30px] font-outfit font-medium">
                  Je Ne Sais Quoi
                </h1>
                <p className="text-gradient text-[20px] leading-[25.2px] tracking-[3px] font-jakrata font-medium">
                  2024
                </p>
              </div>
              {/* img arrow */}
              <Image className="" src={arrow} alt="" width={40} height={40} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="mob:px-[20px]">
          {/* <Image
            className="mb-20"
            src={slideimg}
            alt=""
            width={1320}
            height={580}
          /> */}

          <div className="">
            <Image
              className="mb-6 h-[480px] w-[480px]"
              src={slideimg4}
              alt=""
              width={480}
              height={480}
            />
            <div className="flex justify-between items-center">
              <div className="">
                <h1 className="text-[#FFFFFF] text-[30px] font-outfit font-medium">
                  Worthy
                </h1>
                <p className="text-gradient text-[20px] leading-[25.2px] tracking-[3px] font-jakrata font-medium">
                  2000
                </p>
              </div>
              {/* img arrow */}
              <Image className="" src={arrow} alt="" width={40} height={40} />
            </div>
          </div>
        </SwiperSlide>

        {/* <SwiperSlide className="mob:px-[20px]">
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
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Slider2;
