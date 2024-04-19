"use client"
import { useEffect, useState } from 'react';
import HomePage from '@/components/home';

export default function Home() {

  const [loaded, setLoaded] = useState(true);
  const [showHomePage, setShowHomePage] = useState(false);

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
      }, 8600);
    }, 1000);
  }, []);

  useEffect(() => {
    // Check if the animation has already been played for this session
    if (!sessionStorage.getItem("animationPlayed")) {
      setLoaded(false);
      sessionStorage.setItem("animationPlayed", "true");
    }
  }, []);


  return (
    <main className=" ">
     

{loaded ? (
          <div className={`bg-black ${!showHomePage ? 'h-screen flex justify-center items-center' : ''}`}>
          {showHomePage && <HomePage />}
        </div>
      ) : (
        <div className="h-screen  bg-[#000] flex justify-center items-center">
        <video className='' autoPlay muted loop>
         <source src="/Logo Animation  (1).mp4" type="video/mp4" />
       </video>
      </div>
      )}
    </main>
  );
}
