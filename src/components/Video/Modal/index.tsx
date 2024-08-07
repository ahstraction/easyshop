"use client"
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image';
import { Fragment, useState } from 'react'
import ReactPlayer from 'react-player';

import img2 from "@/public/imgs/video/Rectangle 27.png";
import playbutton from "@/public/imgs/video/playbutton.png";

export default function Modal() {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div onClick={openModal} className="relative z-50 cursor-pointer inset-0 flex items-center justify-center">
                  <Image
                  onClick={openModal} 
                      className="mb-6 "
                      src={img2}
                      alt=""
                      width={352}
                      height={266}
                    />

                    <Image
                      className="absolute z-20"
                      src={playbutton}
                      alt=""
                      width={90}
                      height={90}
                    />
                  </div>
                  <div onClick={openModal}  className="  max-w-[354px] cursor-pointer">
                    <p className="text-gradient text-center text-[15px] leading-[25.2px] uppercase tracking-[3px] font-jakrata font-normal">
                    21 August 2020
                    </p>
                    <h1 className="text-[#FFFFFF] text-center text-[30px] leading-[30px] font-outfit font-medium mt-3 mb-3">
                    Bennie Pearce and Rina Chanel interview with Doris Hall-James
                    </h1>

                    {/* text */}
                    <p className="text-[14px] text-center text-[#fff] font-jakrata font-bold leading-[26px] my-2">
                      (PhillieBOP Productions)
                    </p>

        <button   className=" py-[20px] w-full uppercase mt-3  rounded-[150px] bg-[#FFFFFF] text-[#121212] tracking-[2px] text-[15px] leading-[18.9px] font-semibold font-jakrata">
                      Watch Now
    </button>
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
                  <div className="w-full max-h-[450px]">
      <ReactPlayer
        url="/watchnow.mp4"
        width="100%"
        height="100%"
        controls
        playing
      />
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
