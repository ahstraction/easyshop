import React from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
const Bottomcards = () => {
  return (
    <>
      <div className="flex justify-center gap-14 mt-10">
        <div className="flex tab:block justify-center gap-[59px]">
          {/* 1st */}
          <div className="flex justify-end">
            <div>
              {/* music */}
              <div className="max-w-[182px]">
                <Image
                  src="/imgs/home/release/esp.png"
                  className=" my-4"
                  alt=""
                  width={400}
                  height={400}
                />

                <h1 className="font-normal font-opensans text-[16px] leading-[16px] mb-2 text-gradient">
                  {" "}
                  2022
                </h1>
                <h1 className="font-normal font-opensans text-[24px] leading-[24px] text-[#fff]">
                  {" "}
                  E.S.P.
                </h1>
              </div>
            </div>
          </div>

          {/* 2nd */}
          <div className="flex justify-end">
            <div>
              {/* music */}
              <div className="max-w-[182px]">
                <Image
                  src="/imgs/home/release/2021.png"
                  className=" my-4"
                  alt=""
                  width={400}
                  height={400}
                />

                <h1 className="font-normal font-opensans text-[16px] leading-[16px] mb-2 text-gradient">
                  {" "}
                  2021
                </h1>
                <h1 className="font-normal font-opensans text-[24px] leading-[24px] text-[#fff]">
                  {" "}
                  More Than Enough
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="flex tab:block justify-center gap-14">
          {/* 3rd */}
          <div className="flex justify-end">
            <div>
              {/* music */}
              <div className="max-w-[182px]">
                <Image
                  src="/imgs/home/release/worthy.png"
                  className=" my-4"
                  alt=""
                  width={182}
                  height={48}
                />

                <h1 className="font-normal font-opensans text-[16px] leading-[16px] mb-2 text-gradient">
                  {" "}
                  2020
                </h1>
                <h1 className="font-normal font-opensans text-[24px] leading-[24px] text-[#fff]">
                  {" "}
                  Worthy
                </h1>
              </div>
            </div>
          </div>

          {/* 4th */}
          <div className="flex justify-end">
            <div>
              {/* music */}
              <div className="max-w-[182px]">
                <Image
                  src="/imgs/home/release/made.png"
                  className=" my-4"
                  alt=""
                  width={400}
                  height={400}
                />

                <h1 className="font-normal font-opensans text-[16px] leading-[16px] mb-2 text-gradient">
                  {" "}
                  2020
                </h1>
                <h1 className="font-normal font-opensans text-[24px] leading-[24px] text-[#fff]">
                  {" "}
                  Made
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bottomcards;
