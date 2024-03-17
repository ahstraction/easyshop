import React from "react";
import Image from "next/image";

import cap from "@/public/imgs/cart/cap.png";
import Navbar from "../navbar/Navbar";

import medalimg from "@/public/imgs/icons/medaltick.svg";
import plus from "@/public/imgs/icons/ic_round-plus.svg";
import minus from "@/public/imgs/icons/tabler_minus.svg";

const Cart = () => {
  return (
    <>
      <Navbar />

      <div className="relative flex justify-center  items-center py-20">
        <div className="max-w-[1340px] w-full ">
          <div className="flex w-full justify-end mb-8">
            <h1 className="text-gradient w-[1260px]  text-[60px] font-outfit font-medium leading-[80px]">
              Your Cart
            </h1>
          </div>
          <div className="flex mob:block justify-end items-center gap-16">
            {/* left */}
            <div className="max-w-[662px] w-full">
              <div className="flex justify-between items-center w-full ">
                {/* item */}
                <div className="flex gap-8 items-center">
                  <Image src={cap} alt="" width={96} height={90} />
                  <div className="">
                    {/* name */}
                    <h1 className="text-[26px] text-[#FFFFFF] mb-2 font-medium font-outfit leading-[32.76px]">
                      Cap
                    </h1>
                    {/* price */}
                    <p className="text-[16px] text-gradient font-jakrata font-semibold leading-[20.16px]">
                      $1.50
                    </p>
                  </div>
                </div>
                {/* actions */}
                <div className="flex gap-8">
                  {/* buttons */}
                  <div className="flex justify-between items-center min-w-[144px] h-[53px] bg-[#333331]">
                    <button className=" px-4">
                      <Image src={minus} alt="" width={24} height={24} />{" "}
                    </button>
                    <p className="text-[#fff] text-[16px] font-normal font-jakrata">
                      1
                    </p>
                    <button className=" px-4">
                      <Image src={plus} alt="" width={24} height={24} />{" "}
                    </button>
                  </div>
                  {/* remove button */}
                  <button className="text-[14px] text-[#fff] font-normal font-jakrata">
                    Remove
                  </button>
                </div>
              </div>
              <div className="my-10 max-w-[1140px]  w-full">
                <hr className="h-px  bg-[#FFFFFF33]/20 border-0 dark:bg-[#FFFFFF33]"></hr>
              </div>

              {/* item 2 */}
              <div className="flex justify-between items-center w-full ">
                {/* item */}
                <div className="flex gap-8 items-center">
                  <Image src={cap} alt="" width={96} height={90} />
                  <div className="">
                    {/* name */}
                    <h1 className="text-[26px] text-[#FFFFFF] mb-2 font-medium font-outfit leading-[32.76px]">
                      Cap
                    </h1>
                    {/* price */}
                    <p className="text-[16px] text-gradient font-jakrata font-semibold leading-[20.16px]">
                      $1.50
                    </p>
                  </div>
                </div>
                {/* actions */}
                <div className="flex gap-8">
                  {/* buttons */}
                  <div className="flex justify-between items-center min-w-[144px] h-[53px] bg-[#333331]">
                    <button className=" px-4">
                      <Image src={minus} alt="" width={24} height={24} />{" "}
                    </button>
                    <p className="text-[#fff] text-[16px] font-normal font-jakrata">
                      1
                    </p>
                    <button className=" px-4">
                      <Image src={plus} alt="" width={24} height={24} />{" "}
                    </button>
                  </div>
                  {/* remove button */}
                  <button className="text-[14px] text-[#fff] font-normal font-jakrata">
                    Remove
                  </button>
                </div>
              </div>
              <div className="my-10 max-w-[1140px]  w-full">
                <hr className="h-px  bg-[#FFFFFF33]/20 border-0 dark:bg-[#FFFFFF33]"></hr>
              </div>

              {/* item 3 */}
              <div className="flex justify-between items-center w-full ">
                {/* item */}
                <div className="flex gap-8 items-center">
                  <Image src={cap} alt="" width={96} height={90} />
                  <div className="">
                    {/* name */}
                    <h1 className="text-[26px] text-[#FFFFFF] mb-2 font-medium font-outfit leading-[32.76px]">
                      Cap
                    </h1>
                    {/* price */}
                    <p className="text-[16px] text-gradient font-jakrata font-semibold leading-[20.16px]">
                      $1.50
                    </p>
                  </div>
                </div>
                {/* actions */}
                <div className="flex gap-8">
                  {/* buttons */}
                  <div className="flex justify-between items-center min-w-[144px] h-[53px] bg-[#333331]">
                    <button className=" px-4">
                      <Image src={minus} alt="" width={24} height={24} />{" "}
                    </button>
                    <p className="text-[#fff] text-[16px] font-normal font-jakrata">
                      1
                    </p>
                    <button className=" px-4">
                      <Image src={plus} alt="" width={24} height={24} />{" "}
                    </button>
                  </div>
                  {/* remove button */}
                  <button className="text-[14px] text-[#fff] font-normal font-jakrata">
                    Remove
                  </button>
                </div>
              </div>
            </div>

            {/* right */}
            <div className="bg-[#131211] min-w-[522px] p-10">
              <h1 className="uppercase text-[17px] text-[#fff] font-jakrata font-bold leading-[21.42px] tracking-[3px]">
                Summary
              </h1>

              {/* subtotal */}
              <div className="flex justify-between items-center mt-12">
                <h2 className=" text-[16px] text-[#fff] font-jakrata font-normal leading-[21.42px] ">
                  Subtotal
                </h2>
                <p className=" text-[16px] text-[#fff] font-jakrata font-normal leading-[21.42px] ">
                  $99
                </p>
              </div>
              <div className="pt-4 max-w-[1140px]  w-full">
                <hr className="h-px  bg-[#FFFFFF33]/20 border-0 dark:bg-[#FFFFFF33]"></hr>
              </div>

              {/* shipping */}
              <div className="flex justify-between items-center mt-7">
                <h2 className=" text-[16px] text-[#fff] font-jakrata font-normal leading-[21.42px] ">
                  Shipping
                </h2>
                <p className=" text-[16px] text-[#fff] font-jakrata font-normal leading-[21.42px] ">
                  Free
                </p>
              </div>
              <div className="pt-4 max-w-[1140px]  w-full">
                <hr className="h-px  bg-[#FFFFFF33]/20 border-0 dark:bg-[#FFFFFF33]"></hr>
              </div>

              {/* shipping */}
              <div className="flex justify-between items-center mt-7">
                <h2 className=" text-[16px] text-[#fff] font-jakrata font-normal leading-[21.42px] ">
                  Tax
                </h2>
                <p className=" text-[16px] text-[#fff] font-jakrata font-normal leading-[21.42px] ">
                  Not Included
                </p>
              </div>
              <div className="pt-4 max-w-[1140px]  w-full">
                <hr className="h-px  bg-[#FFFFFF33]/20 border-0 dark:bg-[#FFFFFF33]"></hr>
              </div>

              {/* total price */}
              <div className="flex justify-between items-center mt-10">
                {" "}
                <h1 className="uppercase text-[17px] text-[#fff] font-jakrata font-bold leading-[21.42px] tracking-[3px]">
                  Total Price
                </h1>
                <h2 className="uppercase text-[23px] text-gradient font-jakrata font-bold leading-[21.42px] tracking-[3px]">
                  $999
                </h2>
              </div>

              {/* button */}
              <button className="w-full uppercase my-10  h-[59px] rounded-[150px] bg-[#FFFFFF] text-[#121212] tracking-[2px] text-[15px] leading-[18.9px] font-semibold font-jakrata">
                Checkout
              </button>

              <div className="flex justify-center gap-3 items-center ">
                <Image src={medalimg} alt="" width={20.22} height={23.22} />{" "}
                <h1 className="uppercase text-[15px] text-[#fff] font-jakrata font-bold leading-[21.42px] tracking-[3px]">
                  SECURE CHECKOUT
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
