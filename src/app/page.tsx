// @ts-nocheck
"use client";
import { useEffect, useState, useRef } from "react";
import HomePage from "@/components/home";
import { cn } from "@/libs/utils/twMerge";

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [showHomePage, setShowHomePage] = useState(false);
  const videoRef = useRef(null);

  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    if (!isPageLoaded) setIsPageLoaded(true);
  }, []);

  // useEffect(() => {
  //   const delay = 50; // Delay in milliseconds
  //   const timer = setTimeout(() => setShowHomePage(true), delay);

  //   return () => clearTimeout(timer); // Clean up the timer on component unmount
  // }, []);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     const videoDuration = videoRef.current?.duration;
  //     console.log("Video duration:", videoDuration);

  //     if (videoRef.current?.currentTime >= videoDuration) {
  //       setLoaded(true);
  //     } else {
  //       const remainingTime =
  //         (videoDuration - videoRef.current?.currentTime) * 1000;
  //       setTimeout(() => {
  //         setLoaded(true);
  //       }, remainingTime);
  //     }
  //   }, 1000);

  //   return () => clearTimeout(timer);
  // }, []);

  // useEffect(() => {
  //   if (!sessionStorage.getItem("animationPlayed")) {
  //     setLoaded(false);
  //     sessionStorage.setItem("animationPlayed", "true");
  //   }
  // }, []);

  const handleVideoEnd = () => {
    setLoaded(true);
    setShowHomePage(true);

    localStorage.setItem("isVideoPlayed",true)
  };

  useEffect(() => {
    const isVidePlayed = localStorage.getItem("isVideoPlayed")

    if(isVidePlayed){
      setLoaded(true)
      setShowHomePage(true)
    }
  

  }, [])
  

  if(!isPageLoaded) return <div className="bg-black h-screen w-screen" />;


  return (
    <main className=" ">
      {loaded ? (
        <div
          className={cn(
            `bg-black`,
            !showHomePage && "h-screen flex justify-center items-center"
          )}
        >
          {showHomePage && <HomePage />}
        </div>
      ) : (
        <div className="h-screen bg-[#000] flex justify-center items-center">
          <video
            className="h-full w-full"
            autoPlay
            muted
            onEnded={handleVideoEnd}
            ref={videoRef}
          >
            <source src="/LogoAnimation.mp4" type="video/mp4" />
            <source src="/LogoAnimation.mp4" type="video/webm" />
          </video>
        </div>
      )}
    </main>
  );
}
