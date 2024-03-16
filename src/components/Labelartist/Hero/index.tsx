import React from "react";
import Link from "next/link";
import Image from "next/image";
import maskimg from "@/public/imgs/labelartist/mask.png";
import bgright from "@/public/imgs/labelartist/artistright1.png";
import arrow from "@/public/imgs/labelartist/arrow-up.png";
import Navbar from "@/components/navbar/Navbar";

const Hero = () => {
  return (
    <>
      <Navbar />

      <div className="h-screen   flex justify-center overflow-hidden ">
        <div className="w-full h-[664px] bg-[#161616] mt-10 max-w-[1340px] relative ">
          <Image
            className="absolute w-full h-full z-10 opacity-15"
            src={maskimg}
            alt=""
            width={1440}
            height={686}
          />
          <Image
            className="absolute z-30 h-full w-full opacity-70"
            src={bgright}
            alt=""
            width={1240}
            height={760}
          />

          {/* content */}
          <div className="py-12 pl-20">
            <h1 className="text-[20px] uppercase text-[#fff]/70 tracking-[3px] font-jakrata font-normal leading-[25.2px] ">
              Label Artist
            </h1>
            <h2 className="text-[50px] font-medium font-outfit text-gradient leading-[60px] mt-[300px]">
              Imari
            </h2>
            <p className="text-[14px] max-w-[643px] text-[#FFFFFF] font-jakrata font-normal leading-[32px] my-6">
              <span className="max-w-[643px]">
                Born and raised in Hampton, Virginia, Jashonda “Imari” Dutch,
                has always had a love for music. Singing from as early as two
                years old, her love and passion for singing has never wavered.
                She could always be found in a choir at church or school.
              </span>
            </p>
            <Link
              className="font-bold flex gap-1 font-jakrata text-gradient leading-[21.42px] tracking-[2px] uppercase"
              href="#"
            >
              Read IMARI's bio
              <Image src={arrow} alt="" width={16.97} height={16.97} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
