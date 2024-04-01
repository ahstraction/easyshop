import React from "react";
import Image from "next/image";

import img1 from "@/public/imgs/procedure/updates/image 4.png";
import img2 from "@/public/imgs/procedure/updates/image 4 (1).png";
import newevent from "@/public/imgs/procedure/updates/last-logo.png";

import arrow from "@/public/imgs/icons/bi_arrow-up.svg";
const UpdatesComing = () => {
  return (
    <>
      <div className="py-20 flex justify-center z-30 relative bg-[#1B1918] mob:px-5 overflow-hidden">
        <div className="w-full max-w-[1140px] ">
          <div className="flex mob:block w-full justify-between items-center max-w-[1140px] my-8">
            {/* left text */}
            <div className="">
              <h1 className="text-[50px] font-outfit  mob:text-center mob:text-[40px] mob:leading-[50px] font-medium leading-[63px] text-gradient mb-5 ">
                Updates Coming Soon!
              </h1>
              <h2 className="text-[20px] tracking-[3px] mob:text-center font-jakrata uppercase font-normal mob:text-[16px] leading-[25.2px] text-[#FFFFFF]/60">
                What’s Up on Phillie-BOP
              </h2>
            </div>
            {/* right text */}
            <div className="">
              <div className="mt-9 flex justify-center">
                <button className=" py-[20px] px-[40px] mob:py-[15px] mob:px-[30px] tracking-[1px] rounded-[150px] bg-[#FFFFFF] text-[#121212] text-[15px] leading-[18.9px] uppercase font-semibold font-jakrata">
                  View All Events
                </button>
              </div>
            </div>
          </div>

          {/* tickets */}
          <div className=" w-full  max-w-[1140px] my-20 relative">
            {/* comming soon text */}
            <h2 className="text-[20px] uppercase text-center w-full text-gradient leading-[25.2px] font-normal font-jakrata absolute bottom-3 z-30">
              Coming Soon
            </h2>

 {/* zero */}
 <div className="flex mob:block justify-between items-center relative z-30">
              <div className="flex mob:block items-center gap-[30px] w-[710px]  mob:w-full">
                {/* img */}
                <div className="mob:flex mob:justify-center">
                <Image  className="mob:w-[70%]" src={newevent} alt="" height={94} width={94} />
                </div>
                {/* text */}
             <div className="">
             <p className="text-[22px] mob:text-center mob:mt-6 text-[#FFFFFF] leading-[27.72px] font-medium font-outfit">
                Indie Artist   Summit 
                </p>
                <p className="text-[22px] mob:text-center mob:mt-6 text-[#FFFFFF] leading-[19.72px] font-medium font-outfit">
                
                <span className="text-[#FFFFFF]/60 text-[16px]">Location:</span> <span className="font-normal text-[#FFFFFF]/60 text-[16px] ">Waldorf, MD</span> <br />
                <span className="text-[#FFFFFF]/60 text-[16px]">Sponsored by:</span>  <span className="font-normal text-[#FFFFFF]/60 text-[16px]">WSLQ I-Radio and WGFM 99.5 </span>
                </p>
             </div>
              </div>
              {/* center time */}
              <div className="flex  mob:justify-center items-center gap-[15px]">
                {/* date */}
                <h1 className="text-[60px] mob:text-center text-[#FFFFFF] leading-[75.6px] font-bold font-outfit">
                  27
                </h1>

                {/* text */}
                <div className="">
                  {/* month */}
                  <p className="text-[16px] mob:text-center text-[#FFFFFF] leading-[20.16px] font-normal font-jakrata">
                  April, 2024
                  </p>
                  {/* time */}
                  <p className="text-[16px] mob:text-center text-[#FFFFFF] leading-[20.16px] font-normal font-jakrata">
                  2:00 -9:00 PM
                  </p>
                </div>
              </div>
              {/* buy ticket */}
              <div className="flex mob:justify-center  mob:mt-4 items-center gap-[10px] ">
                <button className="text-[15px] text-[#FFFFFF] leading-[18.9px] font-semibold font-jakrata tracking-[1px]">
                  Buy Tickets
                </button>
                <Image src={arrow} alt="" width={15} height={23} />
              </div>
            </div>

            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>


            {/* first */}
            <div className="flex mob:block justify-between items-center">
              <div className="flex mob:block items-center gap-[30px] w-[670px]  mob:w-full">
                {/* img */}
                <div className="mob:flex mob:justify-center">
                <Image  className="mob:w-[70%]" src={img1} alt="" height={94} width={94} />
                </div>
                {/* text */}
                <p className="text-[22px] mob:text-center mob:mt-6 text-[#FFFFFF] leading-[27.72px] font-medium font-outfit">
                  Radio <br className="mob:hidden" /> Interview
                </p>
              </div>
              {/* center time */}
              <div className="flex  mob:justify-center items-center gap-[15px]">
                {/* date */}
                <h1 className="text-[60px] mob:text-center text-[#FFFFFF] leading-[75.6px] font-bold font-outfit">
                  14
                </h1>

                {/* text */}
                <div className="">
                  {/* month */}
                  <p className="text-[16px] mob:text-center text-[#FFFFFF] leading-[20.16px] font-normal font-jakrata">
                    March
                  </p>
                  {/* time */}
                  <p className="text-[16px] mob:text-center text-[#FFFFFF] leading-[20.16px] font-normal font-jakrata">
                    05:00 PM
                  </p>
                </div>
              </div>
              {/* buy ticket */}
              <div className="flex mob:justify-center  mob:mt-4 items-center gap-[10px]">
                <button className="text-[15px] text-[#FFFFFF] leading-[18.9px] font-semibold font-jakrata tracking-[1px]">
                Event Ended
                </button>
                <Image src={arrow} alt="" width={15} height={23} />
              </div>
            </div>

            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

            {/* second */}
            <div className="flex mob:block justify-between items-center">
              <div className="flex mob:block items-center gap-[30px] w-[670px] mob:w-full">
                {/* img */}
                
                <div className="mob:flex mob:justify-center">
                <Image className="mob:w-[70%]" src={img2} alt="" height={94} width={94} />
                </div>

                {/* text */}
                <p className="text-[22px] mob:text-center mob:mt-6  text-[#FFFFFF] leading-[27.72px] font-medium font-outfit">
                  U.K. Ent. Presents: Valentine’s Day <br /> Showcase via
                  Facebook
                </p>
              </div>
              {/* center time */}
              <div className="flex mob:justify-center items-center gap-[15px]">
                {/* date */}
                <h1 className="text-[60px] text-[#FFFFFF] leading-[75.6px] font-bold font-outfit">
                  14
                </h1>

                {/* text */}
                <div className="">
                  {/* month */}
                  <p className="text-[16px] text-[#FFFFFF] leading-[20.16px] font-normal font-jakrata">
                    March
                  </p>
                  {/* time */}
                  <p className="text-[16px] text-[#FFFFFF] leading-[20.16px] font-normal font-jakrata">
                    05:00 PM
                  </p>
                </div>
              </div>
              {/* buy ticket */}
              <div className="flex mob:justify-center  mob:mt-4 items-center gap-[10px]">
                <button className="text-[15px] text-[#FFFFFF] leading-[18.9px] font-semibold font-jakrata tracking-[1px]">
                Event Ended
                </button>
                <Image src={arrow} alt="" width={15} height={23} />
              </div>
            </div>

           
            {/* third */}
            {/* <div className="flex mob:block justify-between items-center">
              <div className="flex mob:block items-center gap-[30px] w-[670px] mob:w-full">
                <div className="mob:flex mob:justify-center">
                <Image className="mob:w-[70%]" src={img3} alt="" height={94} width={94} />
                </div>

                <p className="text-[22px] mob:text-center mob:mt-6  text-[#FFFFFF] leading-[27.72px] font-medium font-outfit">
                  Soul Sessions: Artist Interview with <br /> Tracy Cruz via
                  KUMU Live stream show (The Philippines)
                </p>
              </div>
              <div className="flex mob:justify-center items-center gap-[15px]">
                <h1 className="text-[60px] text-[#FFFFFF] leading-[75.6px] font-bold font-outfit">
                  14
                </h1>

                <div className="">
                  <p className="text-[16px] text-[#FFFFFF] leading-[20.16px] font-normal font-jakrata">
                    March
                  </p>
                  <p className="text-[16px] text-[#FFFFFF] leading-[20.16px] font-normal font-jakrata">
                    05:00 PM
                  </p>
                </div>
              </div>
              <div className="flex mob:justify-center mob:mt-4 items-center gap-[10px]">
                <button className="text-[15px] text-[#FFFFFF] leading-[18.9px] font-semibold font-jakrata tracking-[1px]">
                  Buy Tickets
                </button>
                <Image src={arrow} alt="" width={15} height={23} />
              </div>
            </div> */}

            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 mob:mt-20"></hr>
          </div>
        </div>
        <div className="absolute z-20  top-[230px] mob:top-[700px] inset-0 bg-gradient-to-b from-[#1B1918]/40 to-[#1B1918] h-[60%] mob:h-[60%]"></div>
      </div>
    </>
  );
};

export default UpdatesComing;
