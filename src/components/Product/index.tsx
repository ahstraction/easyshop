import React from "react";
import Navbar from "../navbar/Navbar";
import Image from "next/image";

import product from "@/public/cap1.png";
import plus from "@/public/imgs/icons/ic_round-plus.svg";
import minus from "@/public/imgs/icons/tabler_minus.svg";
import Link from "next/link";

const Product = () => {
  return (
    <>
      <Navbar />
      <div className="flex mob:block items-end justify-center gap-20 my-32 pb-8">
        {/* left */}
        <Image src={product} alt="" width={527} height={464} />
        {/* right */}
        <div className="">
          <h1 className="text-[#fff] text-[50px] font-medium font-outfit">
            Cap
          </h1>

          {/* price */}
          <h2 className="text-[23px] text-gradient leading-[28.98px] font-bold font-jakrata">
            $8.00
          </h2>
          <p className="text-[14px] text-[#fff] leading-[32px] font-normal font-jakrata max-w-[518px] mt-8 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos .
          </p>
          {/* buttons */}
          <div className="flex items-center gap-10">
            <div className="flex justify-between items-center min-w-[144px] rounded-[150px] w-[184px] h-[59px] bg-[#333331]">
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
            <Link className="w-full" href="/cart">
              <button className=" w-[270px] uppercase my-10  h-[59px] rounded-[150px] bg-[#FFFFFF] text-[#121212] tracking-[2px] text-[15px] leading-[18.9px] font-semibold font-jakrata">
                Add to Cart
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
