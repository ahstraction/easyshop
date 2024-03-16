import React from "react";
import Image from "next/image";

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Productions = () => {
  return (
    <div className=" 2xl:container-fluid flex items-center justify-center bg-transparent pb-14  mx-auto overflow-x-hidden relative gradientpro">
      <div className="my-16 relative max-w-[1140px] w-full">
        <div className=" flex mob:block items-start justify-between w-full  relative z-20 mob:px-5  ">
          {/* left */}
          <div className="flex  justify-end tab:justify-center items-center">
            <div className=" relative max-w-[774px] px-[2%]">
              <h2 className="text-gradient  mob:text-center text-left font-outfit font-medium text-[70px] mob:text-[30px] leading-[88.2px] mb-8">
                Welcome to <br /> Phillie-BOP <br /> Productions
              </h2>
              <div className="mt-12 mob:flex mob:justify-center">
                <button className=" py-[20px] px-[40px] uppercase rounded-[150px] bg-[#FFFFFF] text-[#121212] tracking-[2px] text-[15px] leading-[18.9px] font-semibold font-jakrata">
                  Get STarted Today
                </button>
              </div>
              {/* <div className="mt-9">
                <Button text="Learn More" />
              </div> */}
            </div>
          </div>
          {/* right */}
          <div className="flex justify-center tab:justify-center items-center">
            <p className="text-[#FFFFFF] mob:text-center font-normal font-jakrata mob:text-[14px] text-[16px] leading-[33px] max-w-[615px]">
              We are committed to providing a creative home for indie artists,
              focusing on songwriting, recording, producing, and distributing
              quality music. Phillie-BOP Productions, LLC was founded in 2010,
              the original idea of the label was to build a new sleek and
              sophisticated type of music, providing that urban adult
              contemporary, smooth R&B/Soul vibe based on elements of classic
              music of the past, able to fit the elegant adult socials and quiet
              evenings to unwind.
              <br /> <br />
              We firmly believe that tracks released on the Phillie-BOP
              Productions label will be greatly appreciated by lovers of classic
              music, providing lush melodies, elegant lyrics, and velvet vocals.
              Listeners will be treated to top-notch quality tracks that could
              be playable in multiple genres. So, they will always be ready to
              drop in almost any kind of set. Phillie-BOP Productions is
              committed to developing new music and artists with a reputation
              for consistent excellence.
              <br /> <br />
              Phillie-BOP Productions operates from Annandale, Virginia, located
              in the Washington, D.C. area
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productions;
