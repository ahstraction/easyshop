
// @ts-nocheck
"use client"
import { useEffect, useState, useRef } from 'react';
import HomePage from '@/components/home';

export default function Home() {
  const [loaded, setLoaded] = useState(true);
  const [showHomePage, setShowHomePage] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHomePage(true);
    }, 50); // Delay in milliseconds (2 seconds in this case)

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, []);

  useEffect(() => {
    // Start shrinking after a delay.
    setTimeout(() => {
    }, 180);
    setTimeout(() => {
      // Stop the interval after cycling through all texts.
      setTimeout(() => {
        setLoaded(true);
      }, videoRef.current?.duration * 1000); // Set timeout based on video duration
    }, 1000);
  }, []);

  useEffect(() => {
    // Check if the animation has already been played for this session
    if (!sessionStorage.getItem("animationPlayed")) {
      setLoaded(false);
      sessionStorage.setItem("animationPlayed", "true");
    }
  }, []);

  const handleVideoEnd = () => {
    setLoaded(true); // Set loaded to true when the video ends
  };

  return (
    <main className=" ">
      {loaded ? (
        <div className={`bg-black ${!showHomePage ? 'h-screen flex justify-center items-center' : ''}`}>
          {showHomePage && <HomePage />}
        </div>
      ) : (
        <div className="h-screen bg-[#000] flex justify-center items-center">
          <video className='h-full w-full' autoPlay muted onEnded={handleVideoEnd} ref={videoRef}>
            <source src="/Logo Animation  (1).mp4" type="video/mp4" />
          </video>
        </div>
      )}
    </main>
  );
}
