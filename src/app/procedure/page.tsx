import Footermain from "@/components/Footermain/Footermain";
import HomePage from "@/components/home";
import Latest from "@/components/home/Latest";
import Productions from "@/components/home/productions";
import AboutProducer from "@/components/Procedure/AboutProducer";
import  Hero from "@/components/Procedure/Hero"
import UpdatesComing from "@/components/Procedure/UpdatesComing";
import Image from "next/image";
import backimg from '@/public/imgs/procedure/procedure.png'

export default function procedure() {
  return (
    <main className="  ">

<div className="relative ">
        <div className="absolute top-0 z-20 w-full ">
          <div className="relative overflow-hidden gradientpro">
            <Image
              className="object-cover bg-cover bg-no-repeat w-full gradientpro h-[1100px]"
              src={backimg}
              alt="background"
              height={1049}
              width={1832}
            />
          </div>
          <div className="absolute z-20 h-full bottom-[-150px] inset-0 bg-gradient-to-b from-transparent to-[#121212] "></div>
        </div>
        
        <Hero/>

        <Productions/>

      </div>
  
   <AboutProducer/>
   <UpdatesComing/>
   <Latest/>
<Footermain/>
    </main>
  );
}