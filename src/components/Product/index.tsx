import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaApple, FaSpotify, FaYoutube } from "react-icons/fa";

import product from "@/public/cap1.png";
import plus from "@/public/imgs/icons/ic_round-plus.svg";
import minus from "@/public/imgs/icons/tabler_minus.svg";
import Link from "next/link";
import useShoppingCart from "@/hooks/useShoppingCart";
import {productsPriceMap} from "@/constants/products"

interface ProductData {
  productname?: string;
  price?: string;
  // location: string;
  imagePath?: string;
  date?: string;
  description?: string;
  productId: string | number;
  slug:string
  applelink:string;
  spotifylink:string;
  youtubelink:string;
  caption:string;

}

const Product = ({
  productname,
  price,
  imagePath,
  description,
  date,
  productId,
  slug,
  youtubelink,
  applelink,
  spotifylink,
  caption
}: ProductData) => {
  const [showValidationMessage, setShowValidationMessage] = useState(false);

  const router = useRouter();

  const {
    cartProducts,
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
    cartProductsTotalPrice,
  } = useShoppingCart();
  // console.log(productId,"productId")

  const onAddToCart = async (id: string | number) => {
    const quantity = getItemQuantity(id);

    if (quantity === 0) {
      setShowValidationMessage(true);
    } else {
      // await increaseCartQuantity(id);
      router.push(`/cart`);
    }
  };
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "2") {
        onAddToCart(Number(productId));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onAddToCart, productId]);

  return (
    <>
      <Navbar />
      <div className="flex justify-center">
        <div className="flex mob:block items-start w-full justify-center max-w-[1240px] gap-20 my-32 pb-8 mob:px-5">
          {/* left */}

          {imagePath && (
            <Image
              className="mob:w-full"
              src={imagePath}
              alt=""
              width={527}
              height={464}
            />
          )}
          {/* right */}
          <div className="">
            <h1 className="text-[#fff] text-[50px] mob:text-[30px] mob:mt-2 font-medium font-outfit">
              {productname}
            </h1>
       
            {/* price */}
            <h2 className="text-[30px] mob:text-[22px] mt-3 text-[#c8c82d] leading-[28.98px] font-bold font-jakrata">
              {/* ${price}0 */}${productsPriceMap[slug]}
            </h2>
            <h1 className="text-[30px] mob:text-[22px] mt-5 text-[#c8c82d] leading-[28.98px] font-bold font-jakrata">
       {caption}
       </h1>
            <h2 className="text-[23px] text-[#c8c82d] leading-[28.98px] font-bold font-jakrata">
              {date}
            </h2>
            <p className="text-[14px] text-[#fff] leading-[32px] font-normal font-jakrata max-w-[518px] mt-8 mb-6">
              {description}
            </p>
            {/* buttons */}
            <div className="flex mob:block items-center gap-10">
              <div className="flex justify-between items-center min-w-[144px] rounded-[150px] w-[184px] mob:w-full  h-[59px] bg-[#333331]">
                <button
                  onClick={() => decreaseCartQuantity(Number(productId))}
                  className=" px-4"
                >
                  <Image src={minus} alt="" width={24} height={24} />{" "}
                </button>
                <p className="text-[#fff] text-[16px] font-normal font-jakrata">
                  {getItemQuantity(Number(productId))}
                </p>
                <button
                  onClick={() => increaseCartQuantity(Number(productId))}
                  className=" px-4"
                >
                  <Image src={plus} alt="" width={24} height={24} />{" "}
                </button>
              </div>
              {/* <Link className="w-full" href="/cart"> */}
              <button
                onClick={() => onAddToCart(Number(productId))}
                className=" w-[270px]  mob:w-full uppercase my-10  h-[59px] rounded-[150px] bg-[#FFFFFF] text-[#121212] tracking-[2px] text-[15px] leading-[18.9px] font-semibold font-jakrata"
              >
                Add to Cart
              </button>
              {/* </Link> */}
            </div>

            {showValidationMessage && (
              <p className="text-gradient text-[16px] font-jakrata font-medium">
                Please add quantity before adding to cart.
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
