// @ts-nocheck
"use client";
import { useEffect, useState, useRef } from "react";
import HomePage from "@/components/home";
import { cn } from "@/libs/utils/twMerge";
import { gsap } from "gsap";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [showHomePage, setShowHomePage] = useState(false);
  const videoRef = useRef(null);

  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    if (!isPageLoaded) setIsPageLoaded(true);
  }, []);


  // const handleVideoEnd = () => {
  //   setLoaded(true);
  //   setShowHomePage(true);
  //   sessionStorage.setItem("isVideoPlayed", "true");
  // };

  const handleVideoEnd = () => {
    const tl = gsap.timeline();
    tl.to(videoRef.current, { opacity: 0, duration: 1, onComplete: () => {
      setLoaded(true);
      setShowHomePage(true);
      sessionStorage.setItem("isVideoPlayed", "true");
    } });
  };
  

  useEffect(() => {
    const isVideoPlayed = sessionStorage.getItem("isVideoPlayed");

    if(isVideoPlayed){
      setLoaded(true)
      setShowHomePage(true)
    }


  }, [])
  

  if(!isPageLoaded) return <div className="bg-black h-screen w-screen" />;


  return ( <main className=" ">
    <div
      className={cn(
        `bg-black`,
        !showHomePage && ""
      )}
    >
    {/* <Navbar/> */}

      <HomePage />
    </div>
    
</main>
  );
}
