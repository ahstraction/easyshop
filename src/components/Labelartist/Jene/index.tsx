"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaApple, FaSpotify } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import banner from "@/public/imgs/labelartist//Sliderrrina.png";
import bannermob1 from "@/public/imgs/labelartist/rina.png";
import bannermob from "@/public/imgs/labelartist/imarimobile.png";
import bgright from "@/public/imgs/labelartist/artistright1.png";
import arrow from "@/public/imgs/labelartist/arrow-up.png";
import Navbar from "@/components/navbar/Navbar";

const Jene = () => {
  const router = useRouter();

  const [showFullBio, setShowFullBio] = useState(false);

  const toggleBio = () => {
    setShowFullBio(!showFullBio);
  };

  return (
    <>
      <div className="   flex justify-center overflow-hidden pt-20 mob:pt-0 ">
        <div className="w-full h-[664px] mob:h-full bg-[#161616] mt-10  mob:mt-0 max-w-[1340px] relative flex justify-end ">
          <Image
            className="  h-full w-full absolute  z-10 mob:hidden"
            src={banner}
            alt=""
            width={702}
            height={744}
          />
          {/* <Image
            className="absolute z-30 h-full w-full opacity-70"
            src={bgright}
            alt=""
            width={1240}
            height={760}
          /> */}

          {/* content */}
          <div className="py-12 pl-20 mob:pl-5 w-full mob:pr-5 relative z-10 ">
            <Image
              className="   z-10 mob:block hidden mb-5"
              src={bannermob1}
              alt=""
              width={702}
              height={744}
            />
            {/* <h1 className="text-[20px] uppercase mob:text-center text-[#fff] tracking-[3px] font-jakrata font-normal leading-[25.2px] ">
              Label Artists
            </h1> */}
            <div className="flex items-end mob:items-start justify-end h-[560px] pr-5 mob:pr-0 mob:h-full">
              <div className="max-w-[510px]">
                <h2 className="text-[50px] cursor-pointer mob:text-center font-medium font-outfit imarigradient leading-[60px] ">
                  Rina Chanel
                </h2>

                <p className="text-[14px] mob:text-center max-w-[643px] text-[#FFFFFF] font-jakrata font-normal leading-[32px] mt-6 mb-2">
                  {showFullBio ? (
                    <>
                      <span className="max-w-[643px]">
                        Brooklyn, N.Y. born and Virginia Beach native, Rina
                        Chanel, has captivated audiences through R&B, soul,
                        jazz, swing, pop, and ensemble and opera performance
                        experiences.
                      </span>
                      <br />
                      <span className="max-w-[643px]">
                        Rina fuses her smooth R&B vocals with various R&B era
                        instrumental backings that highlight her unique sound
                        and blends the best elements of Jazz and R&B.  Her
                        skillful songwriting and vocal delivery provide a
                        refreshing classic take on the return of the future of
                        R&B music.
                      </span>
                      <br />
                      <span className="max-w-[643px]">
                        Through a strong foundation of music education, Rina
                        developed classical proficiency and dexterity; learning
                        to sing in multiple languages from attending The
                        Governor’s School for the Arts (Norfolk, VA) and
                        attending Radford University on a voice scholarship.
                      </span>
                    </>
                  ) : (
                    <span className="max-w-[643px]">
                      Brooklyn, N.Y. born and Virginia Beach native, Rina
                      Chanel, has captivated audiences through R&B, soul, jazz,
                      swing, pop, and ensemble and opera performance
                      experiences. <br />
                      Rina fuses her smooth R&B vocals with various R&B era
                      instrumental backings that highlight her unique sound and
                      blends the best elements of Jazz and R&B. 
                      <br /> <br />
                    </span>
                  )}
                </p>
                <button
                  onClick={toggleBio}
                  className={`font-bold flex gap-1 mob:flex mob:justify-center font-jakrata text-gradient leading-[21.42px] tracking-[2px] uppercase ${
                    showFullBio ? "hidden" : ""
                  }`}
                >
                  Rina’s Bio
                  <Image src={arrow} alt="" width={16.97} height={16.97} />
                </button>
                {/* <div className="flex items-end mob:justify-center gap-4 relative z-50 mt-4">
                  <Link
                    target="_blank"
                    href="https://music.apple.com/album/1734140259?i=1734140260"
                  >
                    <FaApple className="text-white text-[25px]" />
                  </Link>
                  <Link
                    target="_blank"
                    href="https://open.spotify.com/track/7ybLhO296Nk9H6Bmhfwr25"
                  >
                    <FaSpotify className="text-white text-[23px]" />
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Jene;
