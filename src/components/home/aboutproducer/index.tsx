import React from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";

const AboutProducer = () => {
  return (
    <>
      <div className="pb-20">
        <div className=" 2xl:container-fluid flex items-center justify-center  mx-auto overflow-x-hidden relative">
          <Image
            src="/imgs/home/about_the_producer_bg (1).png"
            className=" absolute object-cover bg-cover bg-center h-full w-full"
            alt=""
            width={1440}
            height={913}
          />
          <Image
            src="/imgs/home/wavegrad.png"
            className=" absolute top-0 w-full"
            alt=""
            width={1440}
            height={200}
          />

          <div className=""></div>
          <div className="my-16 relative max-w-[1340px] w-full">
            <div className=" flex mob:block items-center justify-between relative z-20 mob:px-5 ">
              <div className="flex  justify-end tab:justify-center items-center">
                <div className=" relative w-full max-w-[674px] px-[2%]">
                  <h1 className="text-[#FFFFFF] mob:text-center uppercase font-bold font-jakrata text-[20px] leading-[25.2px] tracking-[3px]">
                    About the Producer
                  </h1>
                  <h2 className="text-gradient mob:text-center text-left font-outfit font-bold text-[70px] mob:text-[30px] leading-[88.2px] mb-8">
                    Phillie-BOP
                  </h2>
                  <p className="text-[#FFFFFF] mob:text-center font-bold font-jakrata mob:text-[14px] text-[16px] leading-[30px]">
                    Bennie O. Pearce (BOP) is a musician/producer/songwriter,
                    and founder of Phillie-BOP Productions. The Philadelphia,
                    Pennsylvania native was immersed aurally in diverse music
                    styles from jazz to R&B to classics from an early childhood.
                    His musical foundation was heavily influenced by the music
                    of producers/songwriters/ musicians such as Kenny Gamble and
                    Leon Huff, Thom Bell and Linda Creed, Smokey Robinson, Eddie
                    Holland-Lamont Dozier-Brian Holland, Stevie Wonder, The
                    Carpenters, Quincy Jones, Leon Sylvers, Teddy Riley,
                    Babyface, Jimmy Jam and Terry Lewis, and Chuckii Booker, to
                    name a few. The bass guitar serves as his main tool of
                    musical expression, he is self-taught, and began playing
                    professionally at the tender age of 15. <br /> <br />
                    His musical influences are expansive and span over a few
                    decades ranging from classic soul, big band music, jazz,
                    R&B, and jazz fusion. Bennie’s arrangements are pure and
                    powerful, leaving a melody imprinted indelibly in the minds
                    of listeners. Bennie Pearce has a unique sound destined to
                    create a new level of quality in a music with no genre
                    confines. Bennie is a member of the American Society of
                    Composers and Publishers (ASCAP). He is an independent
                    publisher under Phillie-BOP Music.
                  </p>

                  {/* <div className="mt-9">
                  <Button text="Learn More" />
                </div> */}
                </div>
              </div>
              <div className="flex justify-center tab:justify-center items-center">
                <Image
                  src="/imgs/home/logoimg.png"
                  className=" my-4"
                  alt=""
                  width={483}
                  height={412}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutProducer;
