"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import Navbar from "@/components/navbar/Navbar";
import { products } from "@/constants/products";
import useShoppingCart from "@/hooks/useShoppingCart";
import imari from "@/public/imgs/labelrelease/imarii.png"
import cdworthy from "@/public/imgs/merch/cdworthy1.png";
import cdsweet from "@/public/imgs/merch/cdsweet1.png";
import img4 from "@/public/imgs/merch/Rectangle 26 (4).png";
import img6 from "@/public/imgs/merch/Rectangle 26 (6).png";


const Hero = () => {
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
    <>
      <div className="relative z-20">
        <Navbar />
        <h1 className="text-center text-gradient text-[70px] mob:leading-[50px] mob:text-[40px] font-medium leading-[80px] font-outfit mt-[100px] ">
          Our Shop
        </h1>
        <p className="text-[#fff] text-[20px] font-normal font-jakrata text-center mt-5 ">
        Your one-stop shop for purchasing Phillie-BOP merch
        </p>
      </div>
      <div className="pt-20  bg-[#121212] pb-[120px] mob:pb-20 mob:mb-20">
      

        {/* row2 */}
        <div className="flex justify-center w-full mt-[45px] relative z-10">
          <div className="flex mob:block justify-center gap-[45px]  w-full max-w-[1280px]">
          <div className="mob:mb-5">
              <Image
              onClick={() => handleClick("mask")}
                className="mb-6 w-[484px] mob:w-full cursor-pointer"
                src={img4}
                alt=""
                width={352}
                height={266}
              />
              <div className="  w-[484px] mob:w-full">
                <div onClick={() => handleClick("mask")} className="flex justify-between cursor-pointer">
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

            {/* cap */}
            <div className="mob:mb-5">
              <Image
              onClick={() => handleClick("cap")}
                className="mb-6 w-[484px] mob:w-full cursor-pointer"
                src={img6}
                alt=""
                width={352}
                height={266}
              />
              <div className="  w-[484px] mob:w-full">
                <div onClick={() => handleClick("cap")} className="flex justify-between cursor-pointer">
                  <h1 className="text-[#FFFFFF] text-[24px] leading-[30px] font-outfit font-medium mb-3">
                    Cap
                  </h1>
                  <p className="text-gradient text-[20px] leading-[25.2px] tracking-[3px] font-jakrata font-medium">
                    $20.00
                  </p>
                </div>
                {/* text */}
               
                {/* button */}
                <button onClick={() => onAddToCart(7)} className=" py-[20px] mob:py-[15px] w-full uppercase mt-5  rounded-[150px] bg-[#FFFFFF] text-[#121212] tracking-[2px] text-[15px] leading-[18.9px] font-semibold font-jakrata">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* row3 */}
        <div className="flex justify-center w-full mt-[45px] relative z-10">
          <div className="flex mob:block justify-center gap-[45px] w-full max-w-[1180px]">

{/* 10 */}

<div className="  mob:max-w-full  mob:px-5 mob:pb-5" >
                <Image
                  className="mb-6 cursor-pointer w-[484px] mob:w-full mob:max-h-full"
                  onClick={() => handleClick("worthyCD")}
                  src={cdworthy}
                  alt=""
                  width={352}
                  height={266}
                />
                <div className=" w-[484px] mob:w-full">
                  <div className="flex justify-between ">
                    <h1
                      onClick={() => handleClick("worthyCD")}
                      className="text-[#FFFFFF] cursor-pointer text-[21px] leading-[30px] font-outfit font-medium mb-3"
                    >
                 Worthy
                    </h1>
                    <p
                      onClick={() => handleClick("worthyCD")}
                      className="text-gradient cursor-pointer text-[20px] leading-[25.2px] tracking-[3px] font-jakrata font-medium"
                    >
                      $2.00
                    </p>
                  </div>
                  {/* text */}
                  {/* <p className="text-[16px] text-[#fff] font-jakrat font-normal leading-[26px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p> */}
                  {/* button */}
                  {/* <Link href="/cart"> */}
                  <button
                    className=" py-[20px] w-full uppercase mt-5  rounded-[150px] bg-[#FFFFFF] text-[#121212] tracking-[2px] text-[15px] leading-[18.9px] font-semibold font-jakrata"
                    onClick={() => onAddToCart(10)}
                  >
                    Add to Cart
                  </button>
                  {/* </Link> */}
                </div>
              </div>
{/* 11 */}

<div className="  mob:max-w-full  mob:px-5 mob:pb-5" >
                <Image
                  className="mb-6 cursor-pointer w-[484px] mob:w-full mob:max-h-full"
                  onClick={() => handleClick("sweetestofmelodyCD")}
                  src={cdsweet}
                  alt=""
                  width={352}
                  height={266}
                />
                <div className="  w-[484px] mob:w-full">
                  <div className="flex justify-between ">
                    <h1
                      onClick={() => handleClick("sweetestofmelodyCD")}
                      className="text-[#FFFFFF] cursor-pointer text-[21px] leading-[30px] font-outfit font-medium mb-3"
                    >
                 Sweetest of Melody
                    </h1>
                    <p
                      onClick={() => handleClick("sweetestofmelodyCD")}
                      className="text-gradient cursor-pointer text-[20px] leading-[25.2px] tracking-[3px] font-jakrata font-medium"
                    >
                      $2.00
                    </p>
                  </div>
                  {/* text */}
                  {/* <p className="text-[16px] text-[#fff] font-jakrat font-normal leading-[26px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p> */}
                  {/* button */}
                  {/* <Link href="/cart"> */}
                  <button
                    className=" py-[20px] w-full uppercase mt-5  rounded-[150px] bg-[#FFFFFF] text-[#121212] tracking-[2px] text-[15px] leading-[18.9px] font-semibold font-jakrata"
                    onClick={() => onAddToCart(11)}
                  >
                    Add to Cart
                  </button>
                  {/* </Link> */}
                </div>
              </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
