import React from "react";
import Hero from "./Hero";
import AboutProducer from "./aboutproducer";
import Featuredrelease from "./featuredrelease";
import Shop from "./shop";
import Moments from "./Moments";
import Updates from "./updates";
import Productions from "./productions";
import Footer from "../footer/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="relative">
        <div className="absolute top-0 z-0 w-full h-[70%]">
          <div className="relative">
            <img
              className="object-cover bg-cover bg-no-repeat w-full h-full opacity-50"
              src="/imgs/home/release/featuredbg.png"
              alt="background"
            />
            <div className="absolute z-20 inset-0 bg-gradient-to-b from-transparent to-[#121212] opacity-90"></div>
          </div>
        </div>
        <AboutProducer />
        <Featuredrelease />
      </div>
      <Shop />
      <Moments />
      <Updates />
      <Productions />
      <Footer />
    </>
  );
};

export default Home;
