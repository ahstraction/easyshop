import React from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";

const Moments = () => {
  return (
    <>
      <div className="my-14 pb-6">
        {/* heading */}
        <div className="">
          <h1 className="text-[64px] text-gradient font-normal font-tinos leading-[73.59px] text-center ">
            Memorable Moments
          </h1>

          <h2 className="text-[#ffff] uppercase text-center font-normal mb-[72px] font-opensans text-[24px] leading-[32.68px]">
            What’s Up on Phillie-BOP
          </h2>
        </div>
        {/* 1st */}
        <div className="my-6 flex  justify-center items-center ">
          <div className="max-w-[1284px] w-full bg-[#202020] flex mob:block mob:justify-center ">
            {/* img */}
            <div className="justify-center mob:pl-2">
              <Image
                src="/imgs/home/moments/1st.png"
                className=""
                alt="esp2"
                width={279}
                height={234}
              />
            </div>

            {/* content */}
            <div className="flex justify-center items-center w-full max-w-[898px]">
              <div className="flex tab:block w-[95%] justify-between">
                <div className="">
                  <h1 className="text-white font-normal font-tinos text-[40px] leading-[46px] ">
                    Radio Interview
                  </h1>

                  <div className="mt-4 flex mob:block gap-3">
                    {/* time */}
                    <h1 className="flex">
                      <Image
                        src="/imgs/home/moments/time.png"
                        className=" "
                        alt="esp2"
                        width={24}
                        height={20}
                      />
                      <span className="text-gradient text-[16px] font-normal font-opensans ml-1 mr-2">
                        {" "}
                        05:00 pm - 06:00 pm
                      </span>
                    </h1>

                    {/* location */}
                    <h1 className="flex mob:my-2">
                      <Image
                        src="/imgs/home/moments/location.png"
                        className=" "
                        alt="esp2"
                        width={24}
                        height={20}
                      />
                      <span className="text-gradient uppercase text-[16px] font-normal font-opensans ml-1 mr-2">
                        {" "}
                        Online
                      </span>
                    </h1>
                    {/* date */}
                    <h1 className="flex ">
                      <Image
                        src="/imgs/home/moments/date.png"
                        className=" "
                        alt="esp2"
                        width={24}
                        height={20}
                      />
                      <span className="text-gradient uppercase text-[16px] font-normal font-opensans ml-1 mr-2">
                        {" "}
                        march 14 2022
                      </span>
                    </h1>
                  </div>
                </div>

                {/* button */}
                <div className="flex items-center tab:mt-4">
                  <Button text="Buy Tickets" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2nd */}
        <div className="my-6 flex  justify-center items-center ">
          <div className="max-w-[1284px] w-full bg-[#202020] flex mob:block mob:justify-center ">
            {/* img */}
            <div className="justify-center mob:pl-2">
              <Image
                src="/imgs/home/moments/2nd.png"
                className=""
                alt="esp2"
                width={279}
                height={234}
              />
            </div>

            {/* content */}
            <div className="flex justify-center items-center w-full max-w-[898px]">
              <div className="flex tab:block w-[95%] justify-between">
                <div className="">
                  <h1 className="text-white font-normal font-tinos text-[40px] leading-[46px] ">
                    U.K. Ent. Presents: Valentine’s Day Showcase via Facebook
                  </h1>

                  <div className="mt-4 flex mob:block gap-3">
                    {/* time */}
                    <h1 className="flex">
                      <Image
                        src="/imgs/home/moments/time.png"
                        className=" "
                        alt="esp2"
                        width={24}
                        height={20}
                      />
                      <span className="text-gradient uppercase text-[16px] font-normal font-opensans ml-1 mr-2">
                        {" "}
                        05:00 pm - 06:00 pm
                      </span>
                    </h1>

                    {/* location */}
                    <h1 className="flex mob:my-2">
                      <Image
                        src="/imgs/home/moments/location.png"
                        className=" "
                        alt="esp2"
                        width={24}
                        height={20}
                      />
                      <span className="text-gradient uppercase text-[16px] font-normal font-opensans ml-1 mr-2">
                        {" "}
                        Online
                      </span>
                    </h1>
                    {/* date */}
                    <h1 className="flex ">
                      <Image
                        src="/imgs/home/moments/date.png"
                        className=" "
                        alt="esp2"
                        width={24}
                        height={20}
                      />
                      <span className="text-gradient uppercase text-[16px] font-normal font-opensans ml-1 mr-2">
                        {" "}
                        march 14 2022
                      </span>
                    </h1>
                  </div>
                </div>

                {/* button */}
                <div className="flex items-center justify-end mob:justify-start w-[500px] tab:w-[200px] tab:mt-4">
                  <Button text="Buy Tickets" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3rd */}
        <div className="my-6 flex  justify-center items-center ">
          <div className="max-w-[1284px] w-full bg-[#202020] flex mob:block mob:justify-center ">
            {/* img */}
            <div className="justify-center mob:pl-2">
              <Image
                src="/imgs/home/moments/3rd.png"
                className=""
                alt="esp2"
                width={279}
                height={234}
              />
            </div>

            {/* content */}
            <div className="flex justify-center items-center w-full max-w-[898px]">
              <div className="flex tab:block  w-[95%] justify-between">
                <div className="">
                  <h1 className="text-white font-normal font-tinos text-[40px] leading-[46px] ">
                    Soul Sessions: Artist Interview with Tracy Cruz via KUMU
                    Live stream show (The Philippines)
                  </h1>

                  <div className="mt-4 flex mob:block gap-3">
                    {/* time */}
                    <h1 className="flex">
                      <Image
                        src="/imgs/home/moments/time.png"
                        className=" "
                        alt="esp2"
                        width={24}
                        height={20}
                      />
                      <span className="text-gradient uppercase text-[16px] font-normal font-opensans ml-1 mr-2">
                        {" "}
                        05:00 pm - 06:00 pm
                      </span>
                    </h1>

                    {/* location */}
                    <h1 className="flex mob:my-2">
                      <Image
                        src="/imgs/home/moments/location.png"
                        className=" "
                        alt="esp2"
                        width={24}
                        height={20}
                      />
                      <span className="text-gradient uppercase text-[16px] font-normal font-opensans ml-1 mr-2">
                        {" "}
                        Online
                      </span>
                    </h1>
                    {/* date */}
                    <h1 className="flex ">
                      <Image
                        src="/imgs/home/moments/date.png"
                        className=" "
                        alt="esp2"
                        width={24}
                        height={20}
                      />
                      <span className="text-gradient uppercase text-[16px] font-normal font-opensans ml-1 mr-2">
                        {" "}
                        march 14 2022
                      </span>
                    </h1>
                  </div>
                </div>

                {/* button */}
                <div className="flex items-center justify-end tab:justify-start w-[500px]  tab:w-[200px] tab:mt-4">
                  <Button text="Buy Tickets" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Moments;
