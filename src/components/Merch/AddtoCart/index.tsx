"use client"
import Image from "next/image";
import React from "react";
import img1 from "@/public/imgs/merch/Rectangle 26 (1).png";
import img2 from "@/public/imgs/merch/Rectangle 26 (2).png";
import img3 from "@/public/imgs/merch/cdworthy1.png";
import img4 from "@/public/imgs/merch/Rectangle 26 (4).png";
import img5 from "@/public/imgs/merch/cdsweet1.png";
import img6 from "@/public/imgs/merch/Rectangle 26 (6).png";
import arrow from "@/public/imgs/icons/majesticons_arrow-up.svg";

import { useRouter } from "next/navigation";

import { products } from "@/constants/products";
import useShoppingCart from "@/hooks/useShoppingCart";

const AddtoCart = () => {

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
      <div className="pt-20 mob:pt-12  bg-[#121212] pb-[120px] mob:pb-10 mob:mb-10 mob:px-5">
        <div className="flex justify-center w-full">
          <div className="flex mob:block justify-center gap-[45px] relative z-20 w-full max-w-[1280px]">
     
           
            {/* 3rd*/}
            <div className=" mob:mb-5">
              <Image
               onClick={() => handleClick("worthyCD")}
                className="mb-6 w-[484px] mob:w-full cursor-pointer"
                src={img3}
                alt=""
                width={352}
                height={266}
              />
              <div className="  w-[484px] mob:w-full">
                <div   onClick={() => handleClick("worthyCD")} className="flex justify-between cursor-pointer">
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

                 {/* four */}
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
          
          </div>
        </div>
        {/* row2 */}
        <div className="flex justify-center w-full mt-[45px] relative z-30">
          <div className="flex mob:block justify-center gap-[45px] w-full max-w-[1180px]">
         {/* five */}
         <div className="mob:mb-5">
              <Image
                onClick={() => handleClick("sweetestofmelodyCD")}
                className="mb-6 w-[484px] mob:w-full cursor-pointer"
                src={img5}
                alt=""
                width={352}
                height={266}
              />
              <div className="  w-[484px] mob:w-full">
                <div   onClick={() => handleClick("sweetestofmelodyCD")} className="flex justify-between cursor-pointer">
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
            {/* six*/}
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
      </div>
    </>
  );
};

export default AddtoCart;
