
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

  // useEffect(() => {
 
  //   setTimeout(() => {
  
  //     const videoDuration = videoRef.current?.duration;
  //     console.log('Video duration:', videoDuration);

    
  //     if (videoRef.current?.currentTime >= videoDuration) {
  //       setLoaded(true);
  //     } else {
     
  //       const remainingTime = (videoDuration - videoRef.current?.currentTime) * 1000;
  //       setTimeout(() => {
  //         setLoaded(true);
  //       }, remainingTime);
  //     }
  //   }, 1000);
  // }, []);

  useEffect(() => {
    // Start shrinking after a delay.
    setTimeout(() => {
      // Get the video duration and log it to the console
      const videoDuration = videoRef.current?.duration;
      console.log('Video duration:', videoDuration);

      // Check if the video has been fully played
      if (videoRef.current?.currentTime >= videoDuration) {
        setLoaded(true);
      } else {
        // If not fully played, set a timeout based on remaining time
        const remainingTime = (videoDuration - videoRef.current?.currentTime) * 1000;
        setTimeout(() => {
          setLoaded(true);
        }, remainingTime);
      }
    }, 1000);

    // Add event listener for time updates
    videoRef.current?.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      // Clean up the event listener on component unmount
      videoRef.current?.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  useEffect(() => {
    
    if (!sessionStorage.getItem("animationPlayed")) {
      setLoaded(false);
      sessionStorage.setItem("animationPlayed", "true");
    }
  }, []);

  const handleVideoEnd = () => {
    setLoaded(true); 
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
            <source src="/LogoAnimation.mp4" type="video/mp4" />
            <source src="/LogoAnimation.mp4" type="video/webm" />

          </video>
        </div>
      )}
    </main>
  );
}
