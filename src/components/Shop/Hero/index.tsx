"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaApple  , FaSpotify, FaYoutube } from "react-icons/fa";

import Navbar from "@/components/navbar/Navbar";
import { products } from "@/constants/products";
import useShoppingCart from "@/hooks/useShoppingCart";
import imari from "@/public/imgs/labelrelease/imarii.png";
import cdworthy from "@/public/imgs/merch/cdworthy1.png";
import cdsweet from "@/public/imgs/merch/cdsweet1.png";

const Hero = () => {
  const router = useRouter();

  const { cartQuantity, increaseCartQuantity } = useShoppingCart();

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
        Your one-stop shop for purchasing EasyShop For All
        </p>
      </div>
      <div className="pt-20  pb-[120px] mob:pb-20 mob:mb-20">
        <div className="flex justify-center w-full">
          <div className="flex mob:block justify-center gap-[45px] relative z-10 w-full max-w-[1200px]">
            {products.slice(0, 4).map((product) => (
              <div
                className="max-w-[270px] mob:max-w-full  mob:px-5 mob:pb-5"
                key={product.slug}
              >
                <Image
                  id="1"
                  onClick={() => handleClick(product.slug)}
                  className="mb-6 cursor-pointer max-h-[222px] mob:max-h-full"
                  src={product.img}
                  alt=""
                  width={352}
                  height={266}
                />
                <div className="  max-w-[354px]">
                  <div className="flex justify-between  ">
                    <h1
                      id="1"
                      onClick={() => handleClick(product.slug)}
                      className="text-[#FFFFFF] cursor-pointer text-[21px] leading-[30px] font-outfit font-medium mb-3"
                    >
                      {product.title}
                    </h1>
                    <p
                      id="1"
                      onClick={() => handleClick(product.slug)}
                      className="text-gradient cursor-pointer text-[20px] leading-[25.2px] tracking-[3px] font-jakrata font-medium"
                    >
                      ${product.price}0
                    </p>
                  </div>

                
                  {/* text */}
                  {/* <p className="text-[16px] text-[#fff] font-jakrat font-normal leading-[26px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p> */}
                  {/* button */}
                  {/* <Link href="/cart"> */}
                  <button
                    className=" py-[15px] w-full uppercase mt-5  rounded-[150px] bg-[#FFFFFF] text-[#121212] tracking-[2px] text-[15px] leading-[18.9px] font-semibold font-jakrata"
                    onClick={() => onAddToCart(product.id)}
                  >
                    Add to Cart
                  </button>
                  {/* </Link> */}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* row2 */}
        <div className="flex justify-center w-full mt-[45px] relative z-10">
          <div className="flex mob:block justify-center gap-[45px] w-full max-w-[1180px]">
            {products.slice(4, 6).map((product) => (
              <div
                className="max-w-[270px]  mob:max-w-full  mob:px-5 mob:pb-5"
                key={product.slug}
              >
                <Image
                  className="mb-6 cursor-pointer max-h-[222px] mob:max-h-full"
                  onClick={() => handleClick(product.slug)}
                  src={product.img}
                  alt=""
                  width={352}
                  height={266}
                />
                <div className="  max-w-[354px]">
                  <div className="flex justify-between ">
                    <h1
                      onClick={() => handleClick(product.slug)}
                      className="text-[#FFFFFF] cursor-pointer text-[21px] leading-[30px] font-outfit font-medium mb-3 overflow-hidden"
                      style={{
                        maxWidth: "15ch",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        display: "inline-block",
                      }}
                    >
                      {product.title}
                    </h1>
                    <p
                      onClick={() => handleClick(product.slug)}
                      className="text-gradient cursor-pointer text-[20px] leading-[25.2px] tracking-[3px] font-jakrata font-medium"
                    >
                      ${product.price}0
                    </p>
                  </div>

                  
               
                  {/* text */}
                  {/* <p className="text-[16px] text-[#fff] font-jakrat font-normal leading-[26px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p> */}
                  {/* button */}
                  {/* <Link href="/cart"> */}
                  <button
                    className=" py-[15px] w-full uppercase mt-5  rounded-[150px] bg-[#FFFFFF] text-[#121212] tracking-[2px] text-[15px] leading-[18.9px] font-semibold font-jakrata"
                    onClick={() => onAddToCart(product.id)}
                  >
                    Add to Cart
                  </button>
                  {/* </Link> */}
                </div>
              </div>
            ))}
            {products.slice(6, 8).map((product) => (
              <div
                className="max-w-[270px]  mob:max-w-full  mob:px-5 mob:pb-5"
                key={product.slug}
              >
                <Image
                  className="mb-6 cursor-pointer max-h-[222px] mob:max-h-full"
                  onClick={() => handleClick(product.slug)}
                  src={product.img}
                  alt=""
                  width={352}
                  height={266}
                />
                <div className="  max-w-[354px]">
                  <div className="flex justify-between ">
                    <h1
                      onClick={() => handleClick(product.slug)}
                      className="text-[#FFFFFF] cursor-pointer text-[21px] leading-[30px] font-outfit font-medium mb-3 overflow-hidden"
                      style={{
                        maxWidth: "15ch",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        display: "inline-block",
                      }}
                    >
                      {product.title}
                    </h1>
                    <p
                      onClick={() => handleClick(product.slug)}
                      className="text-gradient cursor-pointer text-[20px] leading-[25.2px] tracking-[3px] font-jakrata font-medium"
                    >
                      ${product.price}.00
                    </p>
                  </div>
                  {/* text */}
                  {/* <p className="text-[16px] text-[#fff] font-jakrat font-normal leading-[26px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p> */}
                  {/* button */}
                  {/* <Link href="/cart"> */}
                  <button
                    className=" py-[15px] w-full uppercase mt-5  rounded-[150px] bg-[#FFFFFF] text-[#121212] tracking-[2px] text-[15px] leading-[18.9px] font-semibold font-jakrata"
                    onClick={() => onAddToCart(product.id)}
                  >
                    Add to Cart
                  </button>
                  {/* </Link> */}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* row3 */}
       
      </div>
    </>
  );
};

export default Hero;
