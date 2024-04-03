"use client"
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image';
import { Fragment, useState } from 'react'
import ReactPlayer from 'react-player';
import mainvid from "@/public/imgs/video/imaribanner.png";
import { useRouter } from "next/navigation";
import React from "react";

import { FaApple  , FaSpotify } from "react-icons/fa";

import imari from "@/public/imgs/labelrelease/imarii.png"


import img2 from "@/public/imgs/video/Rectangle 27.png";
import playbutton from "@/public/imgs/video/playbutton.png";
import Link from 'next/link';

export default function Imari() {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  
  const router = useRouter();

  // Function to handle click event
  const handleClick = (id: any) => {
    // Redirect to the dynamic route page with the selected ID
    router.push(`/products/${id}`);
    console.log(id, "id");
  };
  return (
    <>
      <div  className="relative z-30  inset-0 flex items-center justify-center w-full">
      <div className="   flex justify-center overflow-hidden w-full ">
              <div className="w-full h-[613px] mob:h-full  bg-[#161616] mt-10  max-w-[1340px] relative ">
                <Image
                  onClick={() => handleClick("imari")}
                  className="absolute z-10 h-full w-full mob:hidden"
                  src={mainvid}
                  alt=""
                  width={1240}
                  height={760}
                />
                <Image
                  onClick={() => handleClick("imari")}
                  className="  w-full mob:block hidden"
                  src={imari}
                  alt=""
                  width={1240}
                  height={760}
                />

                {/* content */}
                <div className="flex py-12 px-20 mob:pb-0 mob:px-5 h-full w-full relative z-20 items-end ">
                  <div className="flex mob:block justify-between items-center w-full">
                    <div className="">
                      <h2  onClick={() => handleClick("imari")} className="text-[17px] cursor-pointer mob:text-center tracking-[3px] font-bold font-jakrata text-gradient leading-[21.42px] ">
                        22 March 2024
                      </h2>
                      <h1
                        onClick={() => handleClick("imari")}
                        className="text-[40px] cursor-pointer mob:text-center mt-2 text-[#fff] tracking-[2px] font-outfit font-medium leading-[50.4px] "
                      >
                        Imari
                      </h1>
                      <div className="flex mob:justify-center items-end gap-4 relative  mt-2">
                        <Link
                          target="_blank"
                          href="https://music.apple.com/album/1734140259?i=1734140260"
                        >
                          <FaApple className="text-white text-[25px]" />
                        </Link>
                        <Link
                          target="_blank"
                          href="https://open.spotify.com/track/7ybLhO296Nk9H6Bmhfwr25"
                        >
                          <FaSpotify className="text-white text-[23px]" />
                        </Link>
                      </div>
                      <p className="text-[18px] mob:text-center text-[#FFFFFF] font-jakrata font-bold leading-[22.68px] my-6">
                        Bennie Pearce for Phillie-BOP Productions
                      </p>
                    </div>

                    {/* button */}
                    <div className="mob:flex cursor-pointer mob:justify-center relative z-50">
                      <Image
                      onClick={openModal}
                        className="h-[90px] w-[90px]"
                        src={playbutton}
                        alt=""
                        width={90}
                        height={90}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center  text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-[800px] transform overflow-hidden  bg-white  text-left align-middle shadow-xl transition-all">
                  {/* <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Payment successful
                  </Dialog.Title> */}
                  <div className="w-full h-full max-h-[450px]">
     
             <iframe
              className="w-full   mob:rounded-none  min-h-[400px] "
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/vncOyIVs4YE?si=VoeaCENsOwZ_NlLg"
          title="video"
          allowFullScreen={true}
        ></iframe>
    </div>

                  {/* <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div> */}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
