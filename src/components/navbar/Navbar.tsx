"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Drawer from "../ui/Drawer";
import Text from "../ui/Text";
import { gsap } from "gsap";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);

  useEffect(() => {
    if (isOpen) {
      // Select all list items
      const listItems = document.querySelectorAll(".list-items");

      // Set initial opacity to 0 and translateX to 20px
      gsap.set(listItems, { opacity: 0, x: 20 });

      // Iterate through list items and animate them
      gsap.to(listItems, {
        delay: 0.5,
        opacity: 1,
        x: 0,
        duration: 0.7, // Animation duration
        stagger: 0.2, // Stagger the animation by 0.2 seconds
        ease: "power2.out", // Easing function
      });
    }
  }, [isOpen]);
  return (
    <nav className="relative z-50  px-[5%] w-full ">
      <div className="relative max-w-screen-xl w-full flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src="/imgs/home/phillibop-logo-new (1) (1).png"
            alt="Flowbite Logo"
            width={136}
            height={115}
          />
        </Link>
        <button
          // onClick={toggleMenu}
          type="button"
          className="inline-flex items-center mob:hidden p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto xl:hidden`}
          id="navbar-default"
        >
          {/* Your menu options */}
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 tab:bg-black">
            <li>
              <a
                href="/"
                className="block py-2 px-2 text-[15px] font-jakrata tracking-[2px] font-normal text-[#FFFFFF]"
                aria-current="page"
              >
                HOME
              </a>
            </li>
            <li>
              <Link
                href="/procedure"
                className="block uppercase py-2 px-2 text-[15px] font-jakrata tracking-[2px] font-normal text-[#FFFFFF]"
              >
                Producer
              </Link>
            </li>
            <li>
              <a
                href="/label-artist"
                className="block uppercase py-2 px-2 text-[15px] font-jakrata tracking-[2px] font-normal text-[#FFFFFF]"
              >
                label artist
              </a>
            </li>
            <li>
              <a
                href="/label-release"
                className="block uppercase py-2 px-2 text-[15px] font-jakrata tracking-[2px] font-normal text-[#FFFFFF]"
              >
                label release
              </a>
            </li>
            <li>
              <a
                href="/merch"
                className="block uppercase py-2 px-2 text-[15px] font-jakrata tracking-[2px] font-normal text-[#FFFFFF]"
              >
                Merch
              </a>
            </li>
            <li>
              <a
                href="/shop"
                className="block uppercase py-2 px-2 text-[15px] font-jakrata tracking-[2px] font-normal text-[#FFFFFF]"
              >
                shop
              </a>
            </li>
            {/* <li>
              <a
                href="/cart"
                className="block uppercase py-2 px-2 text-[15px] font-jakrata tracking-[2px] font-normal text-[#FFFFFF]"
              >
                cart
              </a>
            </li> */}

            <li>
              <a
                href="/video"
                className="block uppercase py-2 px-2 text-[15px] font-jakrata tracking-[2px] font-normal text-[#FFFFFF]"
              >
                video
              </a>
            </li>
          </ul>
        </div>

 {/* tab */}
 <div className="hidden xl:block  ">
                <div
                  className="relative cursor-pointer flex "
                  onClick={onOpen}
                >
                  <button
                    // onClick={toggleMenu}
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm border border-[#fff]/90 bg-[#fff] text-[#00297A] rounded-lg  "
                    aria-controls="navbar-default"
                    aria-expanded={isOpen ? "true" : "false"}
                  >
                    <span className="sr-only">Open main menu</span>
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 17 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 1h15M1 7h15M1 13h15"
                      />
                    </svg>
                  </button>
                </div>
                <div className="relative z -[999] bg-[#21201E]/90">
                  <Drawer isOpen={isOpen} onClose={onClose}>
                    <div className="flex items-center h-full w-full  bg-[#21201E]/90">
                      <ul className="font-medium  w-full  mob:left-0 mob:w-full z-50 flex flex-col py-4 md:p-0 mt-4 gap-[0px]  rtl:space-x-reverse md:mt-0 ">
                        <Link
                          href="/"
                          className="block  text-[16px] font-jakrata  font-normal leading-7 text-[#FFFFFF] uppercase"
                        >
                          <li className="flex justify-center py-[15px] list-items">
                          HOME
                          </li>
                        </Link>
                        <hr className="h-px opacity-[0.4] bg-[#C0C0C0] border-0 dark:bg-[#C0C0C0]"></hr>

                        <Link
                          href="/procedure"
                          className="block uppercase text-[16px] font-jakrata  font-normalleading-7 text-[#FFFFFF]"
                        >
                          <li className="flex justify-center py-[15px] list-items">
                          Producer
                          </li>
                        </Link>
                        <hr className="h-px opacity-[0.4] bg-[#C0C0C0] border-0 dark:bg-[#C0C0C0]"></hr>

                        <Link
                          href="/label-artist"
                          className="block  text-[16px] font-jakrata  font-normal leading-7 text-[#FFFFFF] uppercase"
                        >
                          <li className="flex justify-center py-[15px] list-items">
                          label artist
                          </li>
                        </Link>
                        <hr className="h-px opacity-[0.4] bg-[#C0C0C0] border-0 dark:bg-[#C0C0C0]"></hr>

                        <Link
                          href="/label-release"
                          className="block text-[16px] font-jakrata  font-normalleading-7 text-[#FFFFFF]"
                        >
                          <li className="flex justify-center py-[15px] list-items uppercase">
                          label release
                          </li>
                        </Link>
                        <hr className="h-px opacity-[0.4] bg-[#C0C0C0] border-0 dark:bg-[#C0C0C0]"></hr>

                        <Link
                          href="/merch"
                          className="block  text-[16px] font-jakrata  font-normal leading-7 uppercase text-[#FFFFFF]"
                        >
                          <li className="flex justify-center py-[15px] list-items">
                          merch
                          </li>
                        </Link>
                        <hr className="h-px opacity-[0.4] bg-[#C0C0C0] border-0 dark:bg-[#C0C0C0]"></hr>

                        <Link
                          href="/shop"
                          className="block  text-[16px] font-jakrata  font-normal leading-7 text-[#FFFFFF]"
                        >
                          <li className="flex justify-center py-[15px] list-items uppercase">
                          shop
                          </li>
                        </Link>
                        <hr className="h-px opacity-[0.4] bg-[#C0C0C0] border-0 dark:bg-[#C0C0C0]"></hr>
                        <Link
                          href="/video"
                          className="block  text-[16px] font-jakrata  font-normal leading-7 text-[#FFFFFF]"
                        >
                          <li className="flex justify-center py-[15px] list-items uppercase">
                          video
                          </li>
                        </Link>
                        <hr className="h-px opacity-[0.4] bg-[#C0C0C0] border-0 dark:bg-[#C0C0C0]"></hr>

                        <Link
                          href="/contact-us"
                          className="block  text-[16px] font-jakrata  font-normal leading-7 text-[#FFFFFF]"
                        >
                          <li className="  flex justify-center py-[15px] list-items">
                          CONTACT
                          </li>
                        </Link>
                        <hr className="h-px opacity-[0.4] bg-[#C0C0C0] border-0 dark:bg-[#C0C0C0]"></hr>
                      </ul>
                    </div>
                  </Drawer>
                </div>
              </div>

        <div className="lg:hidden">
          <a
            href="/contact-us"
            className="block  border border-[#FFFFFF33] tracking-[2px]  py-[14px] px-[26px] rounded-[150px] text-[15px] font-jakrata font-normal text-[#FFFFFF]"
          >
            CONTACT
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
