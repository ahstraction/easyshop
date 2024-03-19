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
import { useRouter } from "next/navigation";
import Image from "next/image";
import slideimg2 from "@/public/imgs/labelartist/sweetmelody (1).png";
import slideimg3 from "@/public/imgs/labelartist/jene (1).png";
import slideimg4 from "@/public/imgs/labelartist/worthy (1).png";
import more from "@/public/imgs/labelartist/more (1).png";
import made from "@/public/imgs/labelartist/made (1).png";
import f from "@/public/imgs/labelartist/esp (1).png";
import breath from "@/public/imgs/labelartist/breatheagain.png";
import arrow from "@/public/imgs/icons/majesticons_arrow-up.svg";

interface SliderHeading {
  heading?: string;

}

const Slider2 = ({heading}: SliderHeading) => {

  const router = useRouter();


  // Function to handle click event
  const handleClick = (id: any) => {
    // Redirect to the dynamic route page with the selected ID
    router.push(`/products/${id}`);
    console.log(id, "id");
  };



  return (
    <div className=" pb-[140px] mob:pb-[90px] mob:w-full mt-20 mob:max-w-full max-w-[1440px] m-auto px-[50px] mob:px-[0px] relative z-50 ">
      <h1 className="text-[#FFFFFF] tracking-[3px] uppercase text-center mb-20 mob:mb-10 text-[20px] font-jakrata font-normal leading-[25.2px] ">
        {heading}
      </h1>

      <Swiper
        className="portfolioSlider"
       
        style={{
          "--swiper-pagination-color": "#fff",
          "--swiper-pagination-bullet-inactive-color": "#999999",
        }}
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
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        // navigation
        // direction="vertical"
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
        pagination={{ clickable: true }}
        breakpoints={{
          768: {
            slidesPerView: 1,
          },

          1300: {
            slidesPerView: 3,
          },
        }}
        // mousewheel={{ invert: true }}
      >
        <SwiperSlide className="mob:px-[20px] mb-16 ">
          {/* <Image
            className="mb-20"
            src={slideimg}
            alt=""
            width={1320}
            height={580}
          /> */}

          <div  className="">
            <Image
            onClick={() => handleClick(5)}
              className="mb-6 cursor-pointer"
              src={slideimg2}
              alt=""
              width={480}
              height={480}
            />
            <div onClick={() => handleClick(5)} className="flex cursor-pointer justify-between items-center">
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

        <SwiperSlide className="mob:px-[20px] mb-16">
          {/* <Image
            className="mb-20"
            src={slideimg}
            alt=""
            width={1320}
            height={580}
          /> */}

          <div className="">
            <Image
            onClick={() => handleClick(6)}
              className="mb-6 cursor-pointer"
              src={slideimg3}
              alt=""
              width={480}
              height={480}
            />
            <div onClick={() => handleClick(6)} className="flex cursor-pointer justify-between items-center">
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

        <SwiperSlide className="mob:px-[20px] mb-16">
          {/* <Image
            className="mb-20"
            src={slideimg}
            alt=""
            width={1320}
            height={580}
          /> */}

          <div className="">
            <Image
            onClick={() => handleClick(3)}
              className="mb-6 cursor-pointer"
              src={slideimg4}
              alt=""
              width={480}
              height={480}
            />
            <div onClick={() => handleClick(3)} className="flex cursor-pointer justify-between items-center">
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

        <SwiperSlide className="mob:px-[20px] mb-16">
          {/* <Image
            className="mb-20"
            src={slideimg}
            alt=""
            width={1320}
            height={580}
          /> */}

          <div className="">
            <Image
            onClick={() => handleClick(4)}
              className="mb-6 cursor-pointer"
              src={more}
              alt=""
              width={480}
              height={480}
            />
            <div onClick={() => handleClick(4)} className="flex cursor-pointer justify-between items-center">
              <div className="">
                <h1 className="text-[#FFFFFF] text-[30px] font-outfit font-medium">
                  More than Enough
                </h1>
                <p className="text-gradient text-[20px] leading-[25.2px] tracking-[3px] font-jakrata font-medium">
                  2021
                </p>
              </div>
              {/* img arrow */}
              <Image className="" src={arrow} alt="" width={40} height={40} />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="mob:px-[20px] mb-16">
          {/* <Image
            className="mb-20"
            src={slideimg}
            alt=""
            width={1320}
            height={580}
          /> */}

          <div className="">
            <Image
            onClick={() => handleClick(2)}
              className="mb-6 cursor-pointer"
              src={made}
              alt=""
              width={480}
              height={480}
            />
            <div onClick={() => handleClick(2)}  className="flex cursor-pointer justify-between items-center">
              <div className="">
                <h1 className="text-[#FFFFFF] text-[30px] font-outfit font-medium">
                  Made
                </h1>
                <p className="text-gradient text-[20px] leading-[25.2px] tracking-[3px] font-jakrata font-medium">
                  2020
                </p>
              </div>
              {/* img arrow */}
              <Image className="" src={arrow} alt="" width={40} height={40} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="mob:px-[20px] mb-16">
          {/* <Image
            className="mb-20"
            src={slideimg}
            alt=""
            width={1320}
            height={580}
          /> */}

          <div className="">
            <Image
            onClick={() => handleClick(9)}
              className="mb-6 cursor-pointer "
              src={breath}
              alt=""
              width={480}
              height={480}
            />
            <div onClick={() => handleClick(9)} className="flex cursor-pointer justify-between items-center">
              <div className="">
                <h1 className="text-[#FFFFFF] text-[30px] font-outfit font-medium">
                Imari
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
        <SwiperSlide className="mob:px-[20px] mb-16">
          {/* <Image
            className="mb-20"
            src={slideimg}
            alt=""
            width={1320}
            height={580}
          /> */}

          <div className="">
            <Image
            onClick={() => handleClick(1)}
              className="mb-6 cursor-pointer"
              src={f}
              alt=""
              width={480}
              height={480}
            />
            <div onClick={() => handleClick(1)} className="flex cursor-pointer justify-between items-center">
              <div className="">
                <h1 className="text-[#FFFFFF] text-[30px] font-outfit font-medium">
                  E.S.P.
                </h1>
                <p className="text-gradient text-[20px] leading-[25.2px] tracking-[3px] font-jakrata font-medium">
                  2022
                </p>
              </div>
              {/* img arrow */}
              <Image className="" src={arrow} alt="" width={40} height={40} />
            </div>
          </div>
        </SwiperSlide>

        {/* <SwiperSlide className="mob:px-[20px] mb-16">
          <Image
            className="mb-20"
            src={slideimg}
            alt=""
            width={1320}
            height={580}
          />
        </SwiperSlide>

        <SwiperSlide className="mob:px-[20px] mb-16">
          <Image
            className="mb-20"
            src={slideimg}
            alt=""
            width={1320}
            height={580}
          />
        </SwiperSlide>
        <SwiperSlide className="mob:px-[20px] mb-16">
          <Image
            className="mb-20"
            src={slideimg}
            alt=""
            width={1320}
            height={580}
          />
        </SwiperSlide>
        <SwiperSlide className="mob:px-[20px] mb-16">
          <Image
            className="mb-20"
            src={slideimg}
            alt=""
            width={1320}
            height={580}
          />
        </SwiperSlide>
        <SwiperSlide className="mob:px-[20px] mb-16">
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
