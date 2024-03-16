"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative z-50  px-[5%] w-full ">
      <div className="relative max-w-screen-xl w-full flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image
            src="/imgs/home/logo.png"
            alt="Flowbite Logo"
            width={136}
            height={115}
          />
        </a>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
          className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
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
                className="block py-2 px-2 text-[15px] font-jakrata tracking-[2px] font-normal text-[#FFFFFF]"
              >
                WHO WE ARE
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-2 text-[15px] font-jakrata tracking-[2px] font-normal text-[#FFFFFF]"
              >
                WHAT WE DO
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-2 text-[15px] font-jakrata tracking-[2px] font-normal text-[#FFFFFF]"
              >
                SHOP
              </a>
            </li>
           
          </ul>
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
