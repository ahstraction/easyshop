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
import img3 from "@/public/imgs/merch/cdworthy1.png";
import img4 from "@/public/imgs/merch/Rectangle 26 (4).png";
import img5 from "@/public/imgs/merch/cdsweet1.png";
import img6 from "@/public/imgs/merch/Rectangle 26 (6).png";
import breath from "@/public/imgs/labelartist/breatheagain.png";
import arrow from "@/public/imgs/icons/majesticons_arrow-up.svg";


import useShoppingCart from "@/hooks/useShoppingCart";

interface SliderHeading {
  heading?: string;

}

const PhysicalProductSlider = ({heading}: SliderHeading) => {
    const router = useRouter();

    const { cartQuantity, increaseCartQuantity,  } = useShoppingCart();
  
    // Function to handle click event
    const handleClick = (id: any) => {
      // Redirect to the dynamic route page with the selected ID
      router.push(`/products/${id}`);
      console.log(id, "id");
    };
  
    const onAddToCart = (id: string | number) => {
      increaseCartQuantity(id);
      router.push(`cart`);
    };
  

  return (
   <div className="bg-[#21201E] relative z-10">
     <div className=" pb-[140px] mob:pb-[90px] mob:w-full mt-20 mob:max-w-full max-w-[1440px] m-auto px-[50px] mob:px-[0px] relative z-50 ">
     <h1 className="text-[#FFFFFF] tracking-[3px] uppercase text-center mb-10 text-[20px] font-jakrata font-normal leading-[25.2px] ">
          shop
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
        <SwiperSlide className="mob:px-[20px] mb-16 px-5 ">
         

<div className=" mob:mb-5">
              <Image
               onClick={() => handleClick(10)}
                className="mb-6 w-full cursor-pointer"
                src={img3}
                alt=""
                width={352}
                height={266}
              />
              <div className="  mob:w-full">
                <div   onClick={() => handleClick(10)} className="flex justify-between cursor-pointer">
                  <h1 className="text-[#FFFFFF] text-[24px] leading-[30px] font-outfit font-medium mb-3">
                    Worthy
                  </h1>
                  <p className="text-gradient text-[20px] leading-[25.2px] tracking-[3px] font-jakrata font-medium">
                    $2.00
                  </p>
                </div>
                {/* text */}
               
                {/* button */}
                <button   onClick={() => onAddToCart(10)} className=" py-[20px] mob:py-[15px] w-full uppercase mt-5  rounded-[150px] bg-[#FFFFFF] text-[#121212] tracking-[2px] text-[15px] leading-[18.9px] font-semibold font-jakrata">
                  Add to Cart
                </button>
              </div>
            </div>
        </SwiperSlide>

        <SwiperSlide className="mob:px-[20px] mb-16 px-5">
        <div className="mob:mb-5">
              <Image
              onClick={() => handleClick(8)}
                className="mb-6 w-full cursor-pointer"
                src={img4}
                alt=""
                width={352}
                height={266}
              />
              <div className="  mob:w-full">
                <div onClick={() => handleClick(8)} className="flex justify-between cursor-pointer">
                  <h1 className="text-[#FFFFFF] text-[24px] leading-[30px] font-outfit font-medium mb-3">
                    Mask
                  </h1>
                  <p className="text-gradient text-[20px] leading-[25.2px] tracking-[3px] font-jakrata font-medium">
                    $8.00
                  </p>
                </div>
                {/* text */}
               
                {/* button */}
                <button onClick={() => onAddToCart(8)} className=" py-[20px] mob:py-[15px] w-full uppercase mt-5  rounded-[150px] bg-[#FFFFFF] text-[#121212] tracking-[2px] text-[15px] leading-[18.9px] font-semibold font-jakrata">
                  Add to Cart
                </button>
              </div>
            </div>
        </SwiperSlide>

        <SwiperSlide className="mob:px-[20px] mb-16 px-5">
        <div className="mob:mb-5">
              <Image
                onClick={() => handleClick(11)}
                className="mb-6 w-full cursor-pointer"
                src={img5}
                alt=""
                width={352}
                height={266}
              />
              <div className="  mob:w-full">
                <div   onClick={() => handleClick(11)} className="flex justify-between cursor-pointer">
                  <h1 className="text-[#FFFFFF] text-[24px] leading-[30px] font-outfit font-medium mb-3">
                    Sweetest of Melody
                  </h1>
                  <p className="text-gradient text-[20px] leading-[25.2px] tracking-[3px] font-jakrata font-medium">
                    $2.00
                  </p>
                </div>
                {/* text */}
               
                {/* button */}
                <button onClick={() => onAddToCart(11)} className=" py-[20px] mob:py-[15px] w-full uppercase mt-5  rounded-[150px] bg-[#FFFFFF] text-[#121212] tracking-[2px] text-[15px] leading-[18.9px] font-semibold font-jakrata">
                  Add to Cart
                </button>
              </div>
            </div>
        </SwiperSlide>

        <SwiperSlide className="mob:px-[20px] mb-16 px-5">
        <div className="mob:mb-5">
              <Image
              onClick={() => handleClick(7)}
                className="mb-6 w-full cursor-pointer"
                src={img6}
                alt=""
                width={352}
                height={266}
              />
              <div className="   mob:w-full">
                <div onClick={() => handleClick(7)} className="flex justify-between cursor-pointer">
                  <h1 className="text-[#FFFFFF] text-[24px] leading-[30px] font-outfit font-medium mb-3">
                    Cap
                  </h1>
                  <p className="text-gradient text-[20px] leading-[25.2px] tracking-[3px] font-jakrata font-medium">
                    $20.0
                  </p>
                </div>
                {/* text */}
               
                {/* button */}
                <button onClick={() => onAddToCart(7)} className=" py-[20px] mob:py-[15px] w-full uppercase mt-5  rounded-[150px] bg-[#FFFFFF] text-[#121212] tracking-[2px] text-[15px] leading-[18.9px] font-semibold font-jakrata">
                  Add to Cart
                </button>
              </div>
            </div>
        </SwiperSlide>

       

       
      </Swiper>
    </div>
   </div>
  );
};

export default PhysicalProductSlider;
