import React from "react";
import Image from "next/image";

const Updates = () => {
  return (
    <div className="  pt-16 pb-[9rem]">
      <div className="flex justify-center">
        <h1 className="text-center font-normal font-tinos text-[64px] leading-[73.59px] text-gradient">
          Latest Updates
        </h1>
      </div>
      <p className="text-center font-normal  uppercase font-opensans mb-14 text-[24px] leading-[32.68px] text-[#fff]">
        Press Releases, Interviews, and Social Media
      </p>

      {/* cards */}

      <div className="flex mob:block justify-center gap-6 mt-5">
        <div className="flex tab:block  justify-center gap-5">
          {/* 1st */}
          <div className="flex justify-end mob:justify-center mob:pb-8">
            <div>
              {/* music */}
              <div className="max-w-[302px]">
                <Image
                  src="/imgs/home/updates/1st.png"
                  className=" my-4"
                  alt=""
                  width={302}
                  height={302}
                />

                <h1 className="font-normal font-tinos text-[24px] leading-[27px] mb-2 text-gradient">
                  {" "}
                  Title Here
                </h1>
                <p className="font-normal font-opensans text-[16px] leading-[21.6px] text-[#fff]">
                  {" "}
                  On May 28th, 2022, Musician, Producer and Songwriter, Bennie
                  Pearce was on “The Celebrity Spot” hosted by T-Huny.
                </p>
              </div>
            </div>
          </div>

          {/* 2nd */}
          <div className="flex justify-end mob:justify-center">
            <div>
              {/* music */}
              <div className="max-w-[302px]">
                <Image
                  src="/imgs/home/updates/2nd.png"
                  className=" my-4"
                  alt=""
                  width={302}
                  height={302}
                />

                <h1 className="font-normal font-tinos text-[24px] leading-[27px] mb-2 text-gradient">
                  {" "}
                  Title Here
                </h1>
                <p className="font-normal font-opensans text-[16px] leading-[21.6px] text-[#fff]">
                  {" "}
                  Bennie Pearce is a musician, producer, songwriter, composer,
                  recording engineer, and head of Phillie-BOP Productions.
                  Bennie grew up in Philadelphia where he had an affinity for
                  music from a very young age.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex tab:block justify-center gap-5">
          {/* 3rd */}
          <div className="flex justify-end mob:justify-center">
            <div>
              {/* music */}
              <div className="max-w-[302px]">
                <Image
                  src="/imgs/home/updates/3rd.png"
                  className=" my-4"
                  alt=""
                  width={302}
                  height={302}
                />

                <h1 className="font-normal font-tinos text-[24px] leading-[27px] mb-2 text-gradient">
                  {" "}
                  Title Here
                </h1>
                <p className="font-normal font-opensans text-[16px] leading-[21.6px] text-[#fff]">
                  {" "}
                  There are still things to be hopeful about in this world.
                  Things big and small. Global disarray and rancor may clog our
                  media channels, but there are individuals still striving each
                  day to help their fellow human beings.
                </p>
              </div>
            </div>
          </div>

          {/* 4th */}
          <div className="flex justify-end mob:justify-center">
            <div>
              {/* music */}
              <div className="max-w-[302px]">
                <Image
                  src="/imgs/home/updates/4th.png"
                  className=" my-4"
                  alt=""
                  width={302}
                  height={302}
                />

                <h1 className="font-normal font-tinos text-[24px] leading-[27px] mb-2 text-gradient">
                  {" "}
                  Title Here
                </h1>
                <p className="font-normal font-opensans text-[16px] leading-[21.6px] text-[#fff]">
                  {" "}
                  March 17, 2022 RINA CHANEL. What’s love got to do with it?
                  Everything. What’s love sound like? Like the sweetest of
                  melodies. Just ask Virginia Beach’s Rina Chanel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Updates;
