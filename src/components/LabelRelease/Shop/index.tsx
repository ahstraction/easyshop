import Image from "next/image";
import React from "react";
import slideimg2 from "@/public/imgs/labelrelease/worth.png";
import arrow from "@/public/imgs/icons/majesticons_arrow-up.svg";

const Shop = () => {
  return (
    <>
      <div className="py-20 relative z-50 bg-[#121212]">
        <h1 className="text-[#FFFFFF] tracking-[3px] uppercase text-center mb-10 text-[20px] font-jakrata font-normal leading-[25.2px] ">
          shop
        </h1>
        /70
        <div className="flex justify-center">
          <div className="flex mob:block justify-center gap-[45px]">
            {/* 1st */}
            <div className="">
              <Image
                className="mb-6 "
                src={slideimg2}
                alt=""
                width={352}
                height={266}
              />
              <div className="flex justify-between items-start max-w-[262.24px]">
                <div className="">
                  <h1 className="text-[#FFFFFF] text-[24px] leading-[30px] font-outfit font-medium mb-3">
                    E.S.P
                  </h1>
                  <p className="text-gradient text-[20px] leading-[25.2px] tracking-[3px] font-jakrata font-medium">
                    $1.50
                  </p>
                </div>
                {/* img arrow */}
                <Image className="" src={arrow} alt="" width={40} height={40} />
              </div>
            </div>
            {/* 2nd */}
            <div className="">
              <Image
                className="mb-6 "
                src={slideimg2}
                alt=""
                width={352}
                height={266}
              />
              <div className="flex justify-between items-start max-w-[262.24px]">
                <div className="">
                  <h1 className="text-[#FFFFFF] text-[24px] leading-[30px] font-outfit font-medium mb-3">
                    Made
                  </h1>
                  <p className="text-gradient text-[20px] leading-[25.2px] tracking-[3px] font-jakrata font-medium">
                    $1.50
                  </p>
                </div>
                {/* img arrow */}
                <Image className="" src={arrow} alt="" width={40} height={40} />
              </div>
            </div>
            {/* 3rd*/}
            <div className="">
              <Image
                className="mb-6 "
                src={slideimg2}
                alt=""
                width={352}
                height={266}
              />
              <div className="flex justify-between items-start max-w-[262.24px]">
                <div className="">
                  <h1 className="text-[#FFFFFF] text-[24px] leading-[30px] font-outfit font-medium mb-3">
                    Worthy
                  </h1>
                  <p className="text-gradient text-[20px] leading-[25.2px] tracking-[3px] font-jakrata font-medium">
                    $1.50
                  </p>
                </div>
                {/* img arrow */}
                <Image className="" src={arrow} alt="" width={40} height={40} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
