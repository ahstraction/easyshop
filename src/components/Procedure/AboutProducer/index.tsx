"use client";

import React, { useState } from "react";
import Image from "next/image";

import bg from "@/public/imgs/procedure/bgpro.png";
import bgright from "@/public/imgs/procedure/Mask group (1).png";
import mob from "@/public/imgs/procedure/mobile-view.png";
import buttonimg from "@/public/imgs/procedure/box-in-ong.png";

const AboutProducer = () => {
  const [showFullBio, setShowFullBio] = useState(false);

  const toggleBio = () => {
    setShowFullBio(!showFullBio);
  };

  return (
    <>
      <div className=" 2xl:container-fluid flex min-h-[986px] mob:min-h-[740px]  items-center justify-center  mx-auto overflow-hidden relative ">
        <Image
          src={bg}
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
          width={1440}
          height={913}
        />
        {/* <div className="absolute z-20 h-full bottom-0 inset-0 bg-gradient-to-b from-transparent to-[#21201E] opacity-90"></div> */}
        <div className="h-full flex items-center justify-center min-h-[986px] mob:min-h-[740px] relative max-w-[1290px] w-full">
          <Image
            src={bgright}
            className=" absolute mob:hidden right-[-130px]"
            alt=""
            width={802}
            height={1046}
          />
          <div className=" flex mob:block items-end gap-[210px] relative z-20 mob:px-5 ">
            <div className="flex  justify-end tab:justify-center items-center">
              <div className=" relative w-full max-w-[674px] px-[2%] py-16">
                <div className="flex justify-center ">
                  <Image
                    src={mob}
                    className=" hidden mob:block w-[100%] mb-6 mt-2 "
                    alt=""
                    width={802}
                    height={1046}
                  />
                </div>

                <h1 className="text-[#FFFFFF] mob:text-center uppercase font-normal font-jakrata text-[20px] mob:text-[16px] leading-[25.2px] tracking-[3px]">
                  About the Producer
                </h1>
                <h2 className="text-gradient mob:text-center text-left font-outfit font-medium text-[70px] mob:text-[40px] leading-[88.2px] mob:leading-[50px] mt-1 mb-8 mob:mb-3">
                  Phillie-BOP
                </h2>

                <p className="text-[#FFFFFF] mob:text-center font-normal font-jakrata mob:text-[14px] mob:leading-[30px] text-[16px] leading-[33px]  max-w-[615px]">
                  <span className="mob:hidden">
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
                    publisher under Phillie-BOP Music. <br /> <br />
                    In 2020, Phillie-BOP Productions launched its first
                    international release, “Worthy” a debut hit single with
                    independent singer/songwriter Rina Chanel. Follow-on hits
                    included “More Than Enough,” “Made,” “Sweetest of Melody,”
                    “E.S.P.” and “Je Ne Sais Quoi,” all #1 on various digital
                    radio platform charts, as well as Top 10 and Top 20
                    categories.
                  </span>

                  <span className="hidden mob:block">
                    {showFullBio ? (
                      <>
                        <span className="">
                          Bennie O. Pearce (BOP) is a
                          musician/producer/songwriter, and founder of
                          Phillie-BOP Productions. The Philadelphia,
                          Pennsylvania native was immersed aurally in diverse
                          music styles from jazz to R&B to classics from an
                          early childhood. His musical foundation was heavily
                          influenced by the music of producers/songwriters/
                          musicians such as Kenny Gamble and Leon Huff, Thom
                          Bell and Linda Creed, Smokey Robinson, Eddie
                          Holland-Lamont Dozier-Brian Holland, Stevie Wonder,
                          The Carpenters, Quincy Jones, Leon Sylvers, Teddy
                          Riley, Babyface, Jimmy Jam and Terry Lewis, and
                          Chuckii Booker, to name a few. The bass guitar serves
                          as his main tool of musical expression, he is
                          self-taught, and began playing professionally at the
                          tender age of 15.
                        </span>
                        <br /> <br />
                        <span className="">
                          His musical influences are expansive and span over a
                          few decades ranging from classic soul, big band music,
                          jazz, R&B, and jazz fusion. Bennie’s arrangements are
                          pure and powerful, leaving a melody imprinted
                          indelibly in the minds of listeners. Bennie Pearce has
                          a unique sound destined to create a new level of
                          quality in a music with no genre confines. Bennie is a
                          member of the American Society of Composers and
                          Publishers (ASCAP). He is an independent publisher
                          under Phillie-BOP Music.
                          <br /> <br />
                          In 2020, Phillie-BOP Productions launched its first
                          international release, “Worthy” a debut hit single
                          with independent singer/songwriter Rina Chanel.
                          Follow-on hits included “More Than Enough,” “Made,”
                          “Sweetest of Melody,” “E.S.P.” and “Je Ne Sais Quoi,”
                          all #1 on various digital radio platform charts, as
                          well as Top 10 and Top 20 categories.
                        </span>
                      </>
                    ) : (
                      <span className="">
                        Bennie O. Pearce (BOP) is a
                        musician/producer/songwriter, and founder of Phillie-BOP
                        Productions. The Philadelphia, Pennsylvania native was
                        immersed aurally in diverse music styles from jazz to
                        R&B to classics from an early childhood. His musical
                        foundation was heavily influenced by the music of
                        producers/songwriters/ musicians such as Kenny Gamble
                        and Leon Huff, Thom Bell and Linda Creed, Smokey
                        Robinson, Eddie Holland-Lamont Dozier-Brian Holland,
                        Stevie Wonder, The Carpenters, Quincy Jones, Leon
                        Sylvers, Teddy Riley, Babyface, Jimmy Jam and Terry
                        Lewis, and Chuckii Booker, to name a few. The bass
                        guitar serves as his main tool of musical expression, he
                        is self-taught, and began playing professionally at the
                        tender age of 15.
                      </span>
                    )}
                  </span>
                </p>

                <div className="hidden mob:block pb-10">
                  <div className="flex justify-center mt-4 ">
                    <button
                      onClick={toggleBio}
                      className="font-bold flex gap-1 font-jakrata text-gradient leading-[21.42px] tracking-[2px] uppercase"
                    >
                      {showFullBio ? "See less" : "See more"}
                    </button>
                  </div>
                </div>

                {/* <div className="mt-9">
                  <Button text="Learn More" />
                </div> */}
              </div>
            </div>
            <div className="flex justify-start  tab:justify-center items-center mob:hidden ">
              <Image
                src={buttonimg}
                className=" "
                alt=""
                width={294}
                height={194}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutProducer;
