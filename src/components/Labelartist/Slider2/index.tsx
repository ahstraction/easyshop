// @ts-nocheck
"use client";

import React from "react";
import { FaApple, FaSpotify, FaYoutube } from "react-icons/fa";

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
import Link from "next/link";

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
            onClick={() => handleClick("worthy")}
              className="mb-6 cursor-pointer"
              src={slideimg4}
              alt=""
              width={480}
              height={480}
            />
            <div className="flex cursor-pointer justify-between items-center">
              <div className="">
                <h1 onClick={() => handleClick("worthy")}  className="text-[#FFFFFF] text-[30px] font-outfit font-medium cursor-pointer">
                Worthy
                </h1>
                <div className="flex items-end gap-4 relative z-50 mb-2">
                  <Link target="_blank" href="https://music.apple.com/us/album/worthy-single/1597273054">
                  <FaApple className="text-white text-[22px]" />
                  </Link>
                  <Link target="_blank" href="https://open.spotify.com/track/65PvHRKkLMdCa6eSluqGcH?si=8fd258d4f5474852&nd=1">
                  <FaSpotify  className="text-white text-[20px]" />
                  </Link>
                  <Link
                    target="_blank"
                    href="https://www.youtube.com/channel/UCaGEFlqULu79M5M9PsVGOtw/featured"
                  >
                    <FaYoutube  className="text-white text-[25px]" />
                  </Link>
                  </div>
                <p onClick={() => handleClick("worthy")}  className="text-gradient text-[20px] leading-[25.2px] tracking-[3px] font-jakrata font-medium cursor-pointer">
                  2020
                </p>
                
              </div>
              {/* img arrow */}
              <Image onClick={() => handleClick("worthy")}  className="cursor-pointer" src={arrow} alt="" width={40} height={40} />
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
            onClick={() => handleClick("made")}
              className="mb-6 cursor-pointer"
              src={made}
              alt=""
              width={480}
              height={480}
            />
            <div className="flex cursor-pointer justify-between items-center">
            <div className="">
                <h1 onClick={() => handleClick("made")}  className="text-[#FFFFFF] text-[30px] font-outfit font-medium cursor-pointer">
                Made
                </h1>
                <div className="flex items-end gap-4 relative z-50 mb-2">
                  <Link target="_blank" href="https://music.apple.com/us/album/made-single/1597282832">
                  <FaApple className="text-white text-[22px]" />
                  </Link>
                  <Link target="_blank" href="https://open.spotify.com/track/5T2dP5OaGxvNqJN7jmHvkT?si=9d1e5b5bbe8c4794">
                  <FaSpotify  className="text-white text-[20px]" />
                  </Link>
                  <Link
                    target="_blank"
                    href="https://www.youtube.com/channel/UCaGEFlqULu79M5M9PsVGOtw/featured"
                  >
                    <FaYoutube  className="text-white text-[25px]" />
                  </Link>
                  </div>
                <p onClick={() => handleClick("made")}  className="text-gradient text-[20px] leading-[25.2px] tracking-[3px] font-jakrata font-medium cursor-pointer">
                  2020
                </p>
                
              </div>
              {/* img arrow */}
              <Image onClick={() => handleClick("made")} className="" src={arrow} alt="" width={40} height={40} />
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
            onClick={() => handleClick("more")}
              className="mb-6 cursor-pointer"
              src={more}
              alt=""
              width={480}
              height={480}
            />
            <div  className="flex cursor-pointer justify-between items-center">
            
              <div className="">
                <h1 onClick={() => handleClick("more")}  className="text-[#FFFFFF] text-[30px] font-outfit font-medium cursor-pointer">
                More than Enough
                </h1>
                <div className="flex items-end gap-4 relative z-50 mb-2">
                  <Link target="_blank" href="https://music.apple.com/us/album/more-than-enough-single/1597282939">
                  <FaApple className="text-white text-[22px]" />
                  </Link>
                  <Link target="_blank" href="https://open.spotify.com/track/0uun3QW4v5qLKtfVyfW0D9?si=402c78a4875e42ee">
                  <FaSpotify  className="text-white text-[20px]" />
                  </Link>
                  <Link
                    target="_blank"
                    href="https://www.youtube.com/channel/UCaGEFlqULu79M5M9PsVGOtw/featured"
                  >
                    <FaYoutube  className="text-white text-[25px]" />
                  </Link>
                  </div>
                <p onClick={() => handleClick("more")}  className="text-gradient text-[20px] leading-[25.2px] tracking-[3px] font-jakrata font-medium cursor-pointer">
                2021
                </p>
                
              </div>
              {/* img arrow */}
              <Image onClick={() => handleClick("more")} className="" src={arrow} alt="" width={40} height={40} />
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
            onClick={() => handleClick("E.S.P")}
              className="mb-6 cursor-pointer"
              src={f}
              alt=""
              width={480}
              height={480}
            />
            <div  className="flex cursor-pointer justify-between items-center">
             
              {/*  */}
              <div className="">
                <h1 onClick={() => handleClick("E.S.P")}  className="text-[#FFFFFF] text-[30px] font-outfit font-medium cursor-pointer">
                E.S.P.
                </h1>
                <div className="flex items-end gap-4 relative z-50 mb-2">
                  <Link target="_blank" href="https://music.apple.com/us/album/e-s-p/1633167575?i=1633167576">
                  <FaApple className="text-white text-[22px]" />
                  </Link>
                  <Link target="_blank" href="https://open.spotify.com/album/0NiCV4qGxVNBxbHa1tj3ir?si=PnwXWl40SMG36GERpG6dgg">
                  <FaSpotify  className="text-white text-[20px]" />
                  </Link>
                  <Link
                    target="_blank"
                    href="https://youtube.com/@rinachanel7598"
                  >
                    <FaYoutube  className="text-white text-[25px]" />
                  </Link>
                  </div>
                <p onClick={() => handleClick("E.S.P")}  className="text-gradient text-[20px] leading-[25.2px] tracking-[3px] font-jakrata font-medium cursor-pointer">
                2022
                </p>
                
              </div>
              {/* img arrow */}
              <Image onClick={() => handleClick("E.S.P")} className="" src={arrow} alt="" width={40} height={40} />
            </div>
          </div>
        </SwiperSlide>

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
            onClick={() => handleClick("sweetestmelody")}
              className="mb-6 cursor-pointer"
              src={slideimg2}
              alt=""
              width={480}
              height={480}
            />
            <div  className="flex cursor-pointer justify-between items-center">
          
               {/*  */}
               <div className="">
                <h1 onClick={() => handleClick("sweetestmelody")}  className="text-[#FFFFFF] text-[30px] font-outfit font-medium cursor-pointer">
                Sweetest of Melody

                </h1>
                <div className="flex items-end gap-4 relative z-50 mb-2">
                  <Link target="_blank" href="https://music.apple.com/us/album/sweetest-of-melody-feat-senghor-robinson-single/1588654754">
                  <FaApple className="text-white text-[22px]" />
                  </Link>
                  <Link target="_blank" href="https://open.spotify.com/track/5zCLFHBCmLqEnHzCMLgIJ6?si=9a995724eb9c4d83">
                  <FaSpotify  className="text-white text-[20px]" />
                  </Link>
                  <Link
                    target="_blank"
                    href="https://www.youtube.com/channel/UCaGEFlqULu79M5M9PsVGOtw/featured"
                  >
                    <FaYoutube  className="text-white text-[25px]" />
                  </Link>
                  </div>
                <p onClick={() => handleClick("sweetestmelody")}  className="text-gradient text-[20px] leading-[25.2px] tracking-[3px] font-jakrata font-medium cursor-pointer">
                2021
                </p>
                
              </div>
              {/* img arrow */}
              <Image onClick={() => handleClick("sweetestmelody")} className="" src={arrow} alt="" width={40} height={40} />
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
            onClick={() => handleClick("jeneSais")}
              className="mb-6 cursor-pointer"
              src={slideimg3}
              alt=""
              width={480}
              height={480}
            />
            <div  className="flex cursor-pointer justify-between items-center">
             

               {/*  */}
               <div className="">
                <h1 onClick={() => handleClick("jeneSais")}  className="text-[#FFFFFF] text-[30px] font-outfit font-medium cursor-pointer">
                Je Ne Sais Quoi
                </h1>
                <div className="flex items-end gap-4 relative z-50 mb-2">
                  <Link target="_blank" href="https://open.spotify.com/album/7IJ83F1d3EkOdMEQmEHVwH?si=6RqNehnCRCeVSf3kvr95_w">
                  <FaApple className="text-white text-[22px]" />
                  </Link>
                  <Link target="_blank" href="https://open.spotify.com/album/7IJ83F1d3EkOdMEQmEHVwH?si=6RqNehnCRCeVSf3kvr95_w&nd=1">
                  <FaSpotify  className="text-white text-[20px]" />
                  </Link>
                  <Link
                    target="_blank"
                    // href="https://www.youtube.com/watch?v=vD9ogAJqZ0U"
                    href="https://www.youtube.com/watch?v=OkFZKNynU1A"
                  >
                    <FaYoutube  className="text-white text-[25px]" />
                  </Link>
                  </div>
                <p onClick={() => handleClick("jeneSais")}  className="text-gradient text-[20px] leading-[25.2px] tracking-[3px] font-jakrata font-medium cursor-pointer">
                2023
                </p>
                
              </div>
              {/* img arrow */}
              <Image onClick={() => handleClick("jeneSais")} className="" src={arrow} alt="" width={40} height={40} />
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
            onClick={() => handleClick("imari")}
              className="mb-6 cursor-pointer "
              src={breath}
              alt=""
              width={480}
              height={480}
            />
            <div onClick={() => handleClick("imari")} className="flex cursor-pointer justify-between items-center">
              <div className="">
                <h1 className="text-[#FFFFFF] text-[30px] font-outfit font-medium">
                Imari
                </h1>
                <div className="flex items-end gap-4 relative z-50 mb-2">
                  <Link target="_blank" href="https://music.apple.com/album/1734140259?i=1734140260">
                  <FaApple className="text-white text-[22px]" />
                  </Link>
                  <Link target="_blank" href="https://open.spotify.com/track/7ybLhO296Nk9H6Bmhfwr25">
                  <FaSpotify  className="text-white text-[20px]" />
                  </Link>
                  <Link
                    target="_blank"
                    href="https://www.youtube.com/watch?v=vncOyIVs4YE"
                  >
                    <FaYoutube  className="text-white text-[25px]" />
                  </Link>
                  </div>
                <p className="text-gradient text-[20px] leading-[25.2px] tracking-[3px] font-jakrata font-medium">
                  2024
                </p>
                
              </div>
              {/* img arrow */}
           <div className="">
           <Image className="" src={arrow} alt="" width={40} height={40} />
            
           </div>
            </div>
          </div>
        </SwiperSlide>
      


      </Swiper>
    </div>
  );
};

export default Slider2;
