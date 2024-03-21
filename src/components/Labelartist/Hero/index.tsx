"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaApple  , FaSpotify } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import banner from "@/public/imgs/labelartist/artist-banner.png";
import bannermob from "@/public/imgs/labelartist/imarimobile.png";
import bgright from "@/public/imgs/labelartist/artistright1.png";
import arrow from "@/public/imgs/labelartist/arrow-up.png";
import Navbar from "@/components/navbar/Navbar";

const Hero = () => {

  const router = useRouter();

  const [showFullBio, setShowFullBio] = useState(false);

  const toggleBio = () => {
    setShowFullBio(!showFullBio);
  };

  const handleClick = (id: any) => {
    // Redirect to the dynamic route page with the selected ID
    router.push(`/products/${id}`);
    console.log(id, "id");
  };


  return (
    <>
      <Navbar />

      <div className="   flex justify-center overflow-hidden pb-32 ">
        <div className="w-full h-[664px] mob:h-full bg-[#161616] mt-10  max-w-[1340px] relative  ">
          <Image
            className="absolute w-full h-full z-10 mob:hidden"
            src={banner}
            alt=""
            width={1440}
            height={686}
          />
          {/* <Image
            className="absolute z-30 h-full w-full opacity-70"
            src={bgright}
            alt=""
            width={1240}
            height={760}
          /> */}

          {/* content */}
          <div className="py-12 pl-20 mob:pl-5 mob:pr-5 relative z-10">

          <Image
            className="w-full h-full z-10 mob:block hidden mb-5"
            src={bannermob}
            alt=""
            width={1440}
            height={686}
          />
            <h1 className="text-[20px] uppercase mob:text-center text-[#fff] tracking-[3px] font-jakrata font-normal leading-[25.2px] ">
              Label Artist
            </h1>
            <div className="flex items-end h-[560px] mob:h-full">
              <div className="">
                <h2 onClick={() => handleClick("imari")} className="text-[50px] cursor-pointer mob:text-center font-medium font-outfit imarigradient leading-[60px] ">
                  Imari
                </h2>

                <p className="text-[14px] mob:text-center max-w-[643px] text-[#FFFFFF] font-jakrata font-normal leading-[32px] mt-6 mb-2">
                  {showFullBio ? (
                    <>
                      <span className="max-w-[643px]">
                        Born and raised in Hampton, Virginia, Jashonda “Imari”
                        Dutch, has always had a love for music. Singing from as
                        early as two years old, her love and passion for singing
                        has never wavered. She could always be found in a choir
                        at church or school.
                      </span>
                      <br />
                      <span className="max-w-[643px]">
                        Imari developed an appreciation for many genres such as
                        gospel, classical, jazz, and R&B. Through her vocal
                        gift, she received a full scholarship at the illustrious
                        Elizabeth City State University and was a member of the
                        University Choir where she was classically trained as a
                        Music Performance major. During her college years, she
                        had the opportunity to open for Debra Killings and
                        Le'Andria Johnson alongside her fellow choir mates.
                        Additionally, she had the opportunity to perform the
                        infamous 'I Know I've Been Changed' in front of a former
                        Moses Hogan singer where he named her "Lungs of Steel."
                      </span>
                      <br />
                      <span className="max-w-[643px]">
                        This vocal powerhouse has traveled to many places with
                        her voice and enjoys telling stories and bringing out
                        emotions through her singing as a form of
                        interpretation.
                      </span>
                    </>
                  ) : (
                    <span className="max-w-[643px]">
                      Born and raised in Hampton, Virginia, Jashonda “Imari”
                      Dutch, has always had a love for music. Singing from as
                      early as two years old, her love and passion for singing
                      has never wavered. She could always be found in a choir at
                      church or school. <br /> <br />
                    </span>
                  )}
                </p>
                <Link
                  onClick={toggleBio}
                  className={`font-bold flex gap-1 mob:flex mob:justify-center font-jakrata text-gradient leading-[21.42px] tracking-[2px] uppercase ${showFullBio ? 'hidden' : ''}`}  href="#"
                >
                 IMARI's bio
                  <Image src={arrow} alt="" width={16.97} height={16.97} />
                </Link>
                <div className="flex items-end gap-4 relative z-50 mt-4">
                  <Link target="_blank" href="https://music.apple.com/album/1734140259?i=1734140260">
                  <FaApple className="text-white text-[25px]" />
                  </Link>
                  <Link target="_blank" href="https://open.spotify.com/track/7ybLhO296Nk9H6Bmhfwr25">
                  <FaSpotify  className="text-white text-[23px]" />
                  </Link>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
