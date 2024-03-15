import React from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";

const AboutProducer = () => {
  return (
    <>
      <div className=" 2xl:container-fluid  mx-auto overflow-x-hidden ">
        <div className="my-16 relative">
          {/* <Image
            src="/imgs/home/aboutproducerbg.png"
            className=" absolute z-10 top-10  left-[23%] tab:left-0 tab:top-[50%] "
            alt=""
            width={748}
            height={655}
          /> */}
          <div className=" grid tab:grid-cols-1 grid-cols-2 items-center relative z-20 gap-16">
            <div className="flex justify-end tab:justify-center items-center">
              <div className=" relative max-w-[90%] px-[2%]">
                <h1 className="text-[#FFFFFF] uppercase font-normal font-opensans text-[32px] leading-[43.58px]">
                  About the Producer
                </h1>
                <h2 className="text-gradient  font-tinos font-normal text-[64px] leading-[75.59px] mb-8">
                  Phillie-BOP
                </h2>
                <p className="text-[#FFFFFF] font-normal font-opensans  text-[16px] leading-[21.79px]">
                  Bennie O. Pearce (BOP) is a musician/producer/songwriter, and
                  founder of Phillie-BOP Productions. The Philadelphia,
                  Pennsylvania native was immersed aurally in diverse music
                  styles from jazz to R&B to classics from an early childhood.
                  His musical foundation was heavily influenced by the music of
                  producers/songwriters/musicians such as Kenny Gamble and Leon
                  Huff, Thom Bell and Linda Creed, Smokey Robinson, Eddie
                  Holland-Lamont Dozier-Brian Holland, Stevie Wonder, The
                  Carpenters, Quincy Jones, Leon Sylvers, Teddy Riley, Babyface,
                  Jimmy Jam and Terry Lewis, and Chuckii Booker, to name a few.
                  The bass guitar serves as his main tool of musical expression,
                  he is self-taught, and began playing professionally at the
                  tender age of 15.
                  <br /> <br />
                  His musical influences are expansive and span over a few
                  decades ranging from classic soul, big band music, jazz, R&B,
                  and jazz fusion. Bennie’s arrangements are pure and powerful,
                  leaving a melody imprinted indelibly in the minds of
                  listeners. Bennie Pearce has a unique sound destined to create
                  a new level of quality in a music with no genre confines.
                  Bennie is a member of the American Society of Composers and
                  Publishers (ASCAP). He is an independent publisher under
                  Phillie-BOP Music.
                </p>

                <div className="mt-9">
                  <Button text="Learn More" />
                </div>
              </div>
            </div>
            <div className="flex justify-end tab:justify-center items-center">
              <Image
                src="/imgs/home/producer.png"
                className=" my-4"
                alt=""
                width={702}
                height={755}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutProducer;
