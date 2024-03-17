import Footermain from "@/components/Footermain/Footermain";
import HomePage from "@/components/home";
import Latest from "@/components/home/Latest";
import Productions from "@/components/home/productions";
import AboutProducer from "@/components/Procedure/AboutProducer";
import Hero from "@/components/Procedure/Hero";
import UpdatesComing from "@/components/Procedure/UpdatesComing";
import Image from "next/image";
import backimg from "@/public/imgs/procedure/procedure.png";
import bg from "@/public/Noise-Animation.png";

export default function procedure() {
  return (
    <main className="  relative">
      <div className="relative ">
        <div className="absolute top-0 z-30 w-full ">
          <div className="relative overflow-hidden gradientpro">
            <Image
              className="object-cover absolute z-30 bg-cover bg-no-repeat w-full gradientpro h-[1250px]"
              src={backimg}
              alt="background"
              height={1049}
              width={1832}
            />
          </div>
          <div className="absolute z-30 h-full bottom-[-150px] inset-0 bg-gradient-to-b from-transparent to-[#121212] "></div>
        </div>

        <Hero />

        <Productions />
      </div>

      <AboutProducer />
      <UpdatesComing />

      <div className="relative ">
        <div className="absolute bottom-0 z-0 w-full ">
          <div className="relative overflow-hidden">
            <Image
              className="object-cover bg-cover bg-no-repeat w-full h-full opacity-20"
              src="/imgs/home/buildings.png"
              alt="background"
              height={813}
              width={1832}
            />
            <Image
              className="h-full w-full absolute z-50"
              src={bg}
              alt=""
              height={813}
              width={1832}
            />
            <div className="absolute z-20 h-full bottom-0 inset-0 bg-gradient-to-b from-transparent to-[#121212] opacity-90"></div>
          </div>
        </div>
        <Latest />
        <Footermain />
      </div>
    </main>
  );
}
