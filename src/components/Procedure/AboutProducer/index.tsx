import React from 'react'
import Image from 'next/image'

import bg from "@/public/imgs/procedure/bgpro.png"
import bgright from "@/public/imgs/procedure/Mask group (1).png"
import buttonimg from "@/public/imgs/procedure/button.png"

const AboutProducer = () => {
  return (
    <>
        <div className=" 2xl:container-fluid flex items-center justify-center  mx-auto overflow-hidden relative pt-10 pb-14">
      <Image
            src={bg}
            className=" absolute object-cover bg-cover bg-center h-full w-full"
            alt=""
            width={1440}
            height={913}
          />
    <div className="absolute z-20 h-full bottom-0 inset-0 bg-gradient-to-b from-transparent to-[#21201E] opacity-90"></div>
        <div className="my-16 relative max-w-[1170px] w-full">
        <Image
            src={bgright}
            className=" absolute  right-0"
            alt=""
            width={702}
            height={946}
          />
          <div className=" flex mob:block items-end justify-between relative z-20 mob:px-5 ">
            <div className="flex  justify-end tab:justify-center items-center">
              <div className=" relative w-full max-w-[674px] px-[2%]">
                <h1 className="text-[#FFFFFF] mob:text-center uppercase font-bold font-jakrata text-[20px] leading-[25.2px] tracking-[3px]">
                  About the Producer
                </h1>
                <h2 className="text-gradient mob:text-center text-left font-outfit font-bold text-[70px] mob:text-[30px] leading-[88.2px] mb-8">
                  Phillie-BOP
                </h2>
                <p className="text-[#FFFFFF] mob:text-center font-bold font-jakrata mob:text-[14px] text-[16px] leading-[30px]">
                Bennie O. Pearce (BOP) is a musician/producer/songwriter, and founder of Phillie-BOP Productions. The Philadelphia, Pennsylvania native was immersed aurally in diverse music styles from jazz to R&B to classics from an early childhood. His musical foundation was heavily influenced by the music of producers/songwriters/ musicians such as Kenny Gamble and Leon Huff, Thom Bell and Linda Creed, Smokey Robinson, Eddie Holland-Lamont Dozier-Brian Holland, Stevie Wonder, The Carpenters, Quincy Jones, Leon Sylvers, Teddy Riley, Babyface, Jimmy Jam and Terry Lewis, and Chuckii Booker, to name a few. The bass guitar serves as his main tool of musical expression, he is self-taught, and began playing professionally at the tender age of 15.      <br /> <br />
                  His musical influences are expansive and span over a few decades ranging from classic soul, big band music, jazz, R&B, and jazz fusion. Bennie’s arrangements are pure and powerful, leaving a melody imprinted indelibly in the minds of listeners. Bennie Pearce has a unique sound destined to create a new level of quality in a music with no genre confines. Bennie is a member of the American Society of Composers and Publishers (ASCAP). He is an independent publisher under Phillie-BOP Music.
                </p>

                {/* <div className="mt-9">
                  <Button text="Learn More" />
                </div> */}
              </div>
            </div>
            <div className="flex justify-start mr-14 tab:justify-center items-center ">
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
  )
}

export default AboutProducer
