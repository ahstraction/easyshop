import Image from "next/image";
import React from "react";
import img1 from "@/public/imgs/merch/Rectangle 26 (1).png";
import img2 from "@/public/imgs/merch/Rectangle 26 (2).png";
import img3 from "@/public/imgs/merch/cdworthy1.png";
import img4 from "@/public/imgs/merch/Rectangle 26 (4).png";
import img5 from "@/public/imgs/merch/cdsweet1.png";
import img6 from "@/public/imgs/merch/Rectangle 26 (6).png";
import arrow from "@/public/imgs/icons/majesticons_arrow-up.svg";

const AddtoCart = () => {
  return (
    <>
      <div className="pt-20 mob:pt-12  bg-[#121212] pb-[120px] mob:pb-10 mob:mb-10 mob:px-5">
        <div className="flex justify-center w-full">
          <div className="flex mob:block justify-center gap-[45px] relative z-20 w-full max-w-[1280px]">
     
           
            {/* 3rd*/}
            <div className=" mob:mb-5">
              <Image
                className="mb-6 w-[484px] mob:w-full"
                src={img3}
                alt=""
                width={352}
                height={266}
              />
              <div className="  w-[484px] mob:w-full">
                <div className="flex justify-between ">
                  <h1 className="text-[#FFFFFF] text-[24px] leading-[30px] font-outfit font-medium mb-3">
                    Worthy
                  </h1>
                  <p className="text-gradient text-[20px] leading-[25.2px] tracking-[3px] font-jakrata font-medium">
                    $1.50
                  </p>
                </div>
                {/* text */}
               
                {/* button */}
                <button className=" py-[20px] mob:py-[15px] w-full uppercase mt-5  rounded-[150px] bg-[#FFFFFF] text-[#121212] tracking-[2px] text-[15px] leading-[18.9px] font-semibold font-jakrata">
                  Add to Cart
                </button>
              </div>
            </div>

                 {/* four */}
                 <div className="mob:mb-5">
              <Image
                className="mb-6 w-[484px] mob:w-full"
                src={img4}
                alt=""
                width={352}
                height={266}
              />
              <div className="  w-[484px] mob:w-full">
                <div className="flex justify-between ">
                  <h1 className="text-[#FFFFFF] text-[24px] leading-[30px] font-outfit font-medium mb-3">
                    Mask
                  </h1>
                  <p className="text-gradient text-[20px] leading-[25.2px] tracking-[3px] font-jakrata font-medium">
                    $1.50
                  </p>
                </div>
                {/* text */}
               
                {/* button */}
                <button className=" py-[20px] mob:py-[15px] w-full uppercase mt-5  rounded-[150px] bg-[#FFFFFF] text-[#121212] tracking-[2px] text-[15px] leading-[18.9px] font-semibold font-jakrata">
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
                className="mb-6 w-[484px] mob:w-full"
                src={img5}
                alt=""
                width={352}
                height={266}
              />
              <div className="  w-[484px] mob:w-full">
                <div className="flex justify-between ">
                  <h1 className="text-[#FFFFFF] text-[24px] leading-[30px] font-outfit font-medium mb-3">
                    Sweetest of Melody
                  </h1>
                  <p className="text-gradient text-[20px] leading-[25.2px] tracking-[3px] font-jakrata font-medium">
                    $1.50
                  </p>
                </div>
                {/* text */}
               
                {/* button */}
                <button className=" py-[20px] mob:py-[15px] w-full uppercase mt-5  rounded-[150px] bg-[#FFFFFF] text-[#121212] tracking-[2px] text-[15px] leading-[18.9px] font-semibold font-jakrata">
                  Add to Cart
                </button>
              </div>
            </div>
            {/* six*/}
            <div className="mob:mb-5">
              <Image
                className="mb-6 w-[484px] mob:w-full"
                src={img6}
                alt=""
                width={352}
                height={266}
              />
              <div className="  w-[484px] mob:w-full">
                <div className="flex justify-between ">
                  <h1 className="text-[#FFFFFF] text-[24px] leading-[30px] font-outfit font-medium mb-3">
                    Cap
                  </h1>
                  <p className="text-gradient text-[20px] leading-[25.2px] tracking-[3px] font-jakrata font-medium">
                    $1.50
                  </p>
                </div>
                {/* text */}
               
                {/* button */}
                <button className=" py-[20px] mob:py-[15px] w-full uppercase mt-5  rounded-[150px] bg-[#FFFFFF] text-[#121212] tracking-[2px] text-[15px] leading-[18.9px] font-semibold font-jakrata">
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
