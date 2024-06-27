"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";


import Button from "@/components/ui/Button";
import Navbar from "@/components/navbar/Navbar";
import Link from "next/link";

const Hero = () => {
  
  const router = useRouter();

  useEffect(() => {
    const speakText = (text: string) => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel(); // Clear any existing speech
        const utterance = new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(utterance);
      } else {
        console.error('Sorry, your browser does not support text-to-speech.');
      }
    };

    // Text to be spoken
    const textContent = `
      Welcome to EasyShop For All. The Future Home Of Shopping. Explore EasyShop. Press one to visit shop
    `;

    // Trigger the speech synthesis
    speakText(textContent);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "1") {
        router.push("/shop");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.speechSynthesis.cancel(); // Clear any existing speech on unmount
    };
  }, [router]);
  return (
    <div className="relative z-30">
      <Navbar />
      <div className="min-h-[80vh] mob:min-h-[500px] flex items-center mob:items-center justify-center mob:px-5">
      {/* bg image */}

      {/* content */}
      <div className="relative pb-[0px] z-10 mob:mt-[100px]">
        <h1 className="text-[#FFFFFF] hidden uppercase tracking-[4px] text-center font-jakrata font-normal text-[20px] leading-[44px]">
          Welcome to
        </h1>
        <h1 className="text-[#c8c82d] mob:py-4 text-[70px] mob:text-[40px] mob:leading-[44px] text-center font-semibold font-outfit leading-[112px]">
          EasyShop For All
        </h1>
        <h1 className="text-[#FFFFFF]/80 uppercase tracking-[3px] text-center font-jakrata font-normal text-[20px] leading-[44px] mob:leading-[30px]">
          The Future Home Of Shopping
        </h1>

        <div className="mt-9 flex justify-center">
          <Link href="/shop">
            <button className="py-[20px] px-[40px] mob:px-[30px] mob:py-[15px] rounded-[150px] bg-[#FFFFFF] text-[#121212] tracking-[2px] text-[15px] leading-[18.9px] font-semibold font-jakrata">
              EXPLORE EASYSHOP
            </button>
          </Link>
        </div>
      </div>
    </div>
     
    </div>
  );
};

export default Hero;
