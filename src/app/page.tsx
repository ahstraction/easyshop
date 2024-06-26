// @ts-nocheck
"use client";
import { useEffect, useState, useRef } from "react";
import HomePage from "@/components/home";
import { cn } from "@/libs/utils/twMerge";
import { gsap } from "gsap";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <main className=" ">
      <HomePage />
    </main>
  );
}
