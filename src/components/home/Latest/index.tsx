import Image from "next/image";
import buttonimg from "@/public/imgs/home/button.png";

const Latest = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-16">
        <div className="flex relative z-50 justify-center mob:px-5 items-center w-full border-gradeint max-w-[1340px] min-h-[492px] bg-[#161616CC]/80">
          <div className="  justify-center  max-w-[1141px] w-full">
            <div className="flex mob:block w-full justify-between items-end max-w-[1141.5px] my-8">
              {/* left text */}
              <div className="">
                <h2 className="text-[20px] tracking-[3px] mb-4 font-jakrata uppercase font-normal leading-[25.2px] text-[#FFFFFF]">
                  NewsLetter
                </h2>
                <h1 className="text-[40px] font-outfit s font-medium leading-[50.4px] text-gradient">
                  Be the first to know.
                </h1>
              </div>
              {/* right text */}
              <div className="">
                <p className="font-jakrata font-normal tracking-[1px] text-[20px] leading-[33px] text-[#FFFFFF]">
                  Latest news about Phillie-Bop
                </p>
              </div>
            </div>
            {/* inpute */}
            <div className="flex mob:block justify-between items-end">
              <div className="pr-8 w-full mob:my-4">
                <label
                  className="text-[#FFFFFF]/70 text-[20px] font-normal font-jakrata leading-[30px]"
                  htmlFor="email"
                >
                  Email Address here...
                </label>{" "}
                <br />
                <input
                  className="border-b py-4 outline-none text-[#FFFFFF] border-[#FFFFFF33] bg-transparent w-full"
                  type="text"
                />
              </div>

              {/* <button className="w-[204px] h-[194px] text-gradient">Submit</button> */}
              <button>
                <Image src={buttonimg} alt="" height={196} width={204} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Latest;
