"use client"


import React, { useState } from "react";
import Image from "next/image";

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const Productions = () => {

  
  const [showFullBio, setShowFullBio] = useState(false);

  const toggleBio = () => {
    setShowFullBio(!showFullBio);
  };

  return (
    <div className="  2xl:container-fluid flex items-center justify-center bg-transparent pb-14  mx-auto overflow-x-hidden relative gradientpro ">
      <div className="my-16 relative max-w-[1140px] w-full">
        <div className=" flex mob:block items-start justify-between w-full  relative z-20 mob:px-5  ">
          {/* left */}
          <div className="flex  justify-end tab:justify-center items-center">
            <div className=" relative max-w-[774px] px-[2%]">
              <h2 className="text-gradient  mob:text-center text-left font-outfit font-medium text-[70px] mob:text-[30px] leading-[88.2px] mob:leading-[38px] mb-8">
                Welcome to <br className="mob:hidden" /> Phillie-BOP <br /> Productions
              </h2>
              <div className="mt-12 mob:flex mob:justify-center mob:pb-6">
                <Link href="/shop">
                  <button className=" py-[20px] px-[40px] mob:py-[15px] mob:px-[30px]   uppercase rounded-[150px] bg-[#FFFFFF] text-[#121212] tracking-[2px] text-[15px] leading-[18.9px] font-semibold font-jakrata">
                    Get STarted Today
                  </button>
                </Link>
              </div>
              {/* <div className="mt-9">
                <Button text="Learn More" />
              </div> */}
            </div>
          </div>
          {/* right */}
          <div className=" justify-center tab:justify-center items-center">
            <p className="text-[#FFFFFF] mob:text-center font-normal font-jakrata mob:text-[14px] mob:leading-[30px] text-[16px] leading-[33px]  max-w-[615px]">
            <span className="mob:hidden">
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
            </span>


              <span className="hidden mob:block">
  
  {showFullBio ? (
                      <>
                        <span className="">
                        We are committed to providing a creative home for indie artists,
              focusing on songwriting, recording, producing, and distributing
              quality music. Phillie-BOP Productions, LLC was founded in 2010,
              the original idea of the label was to build a new sleek and
              sophisticated type of music, providing that urban adult
              contemporary, smooth R&B/Soul vibe based on elements of classic
              music of the past, able to fit the elegant adult socials and quiet
              evenings to unwind.
                        </span>
                        <br /> <br />
                        <span className="">
                        We firmly believe that tracks released on the Phillie-BOP
              Productions label will be greatly appreciated by lovers of classic
              music, providing lush melodies, elegant lyrics, and velvet vocals.
              Listeners will be treated to top-notch quality tracks that could
              be playable in multiple genres. So, they will always be ready to
              drop in almost any kind of set. Phillie-BOP Productions is
              committed to developing new music and artists with a reputation
              for consistent excellence.
             
  
                        </span>
                        <br /> <br />
                        <span className="">
                        Phillie-BOP Productions operates from Annandale, Virginia, located
              in the Washington, D.C. area
                        </span>
                      </>
                    ) : (
                      <span className="">
                      We are committed to providing a creative home for indie artists,
              focusing on songwriting, recording, producing, and distributing
              quality music. Phillie-BOP Productions, LLC was founded in 2010,
              the original idea of the label was to build a new sleek and
              sophisticated type of music, providing that urban adult
              contemporary, smooth R&B/Soul vibe based on elements of classic
              music of the past, able to fit the elegant adult socials and quiet
              evenings to unwind.
                      </span>
                    )}
  </span>


            </p>

            <div className="hidden mob:block">
<div className="flex justify-center mt-4 ">
<button onClick={toggleBio} className="font-bold flex gap-1 font-jakrata text-gradient leading-[21.42px] tracking-[2px] uppercase">
      {showFullBio ? 'See less' : 'See more'}
    </button>
</div>
</div>
            

          </div>
        </div>
      </div>
    </div>
  );
};

export default Productions;
