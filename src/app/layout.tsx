import type { Metadata } from "next";
import {
  Inter,
  Pacifico,
  Open_Sans,
  Outfit,
  Plus_Jakarta_Sans,
  Montserrat,
} from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
// import Navbar from "@/components/navbar/Navbar";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// const tinos = Tinos({
//   subsets: ["latin"],
//   variable: "--font-tinos",
//   weight: "400",
// });

import Providers from "@/providers";

const monts = Montserrat({
  subsets: ["latin"],
  variable: "--font-monts",
});
const jakrata = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakrata",
});
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});
const pacifico = Pacifico({
  subsets: ["latin"],
  variable: "--font-pacifico",
  weight: "400",
});

const opensans = Open_Sans({ subsets: ["latin"], variable: "--font-opensans" });

const tinos = localFont({
  src: [
    {
      path: "../../public/fonts/timesnewroman.ttf",
      // path: "../../public/fonts/organetto/organetto-semiexpregular-webfont.woff",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-tinos",
});

export const metadata: Metadata = {
  title: "Phillie-BOP Productions, LLC",
  description: "Phillie-BOP Productions, LLC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${inter.variable} ${outfit.variable} ${jakrata.variable} ${tinos.variable} ${pacifico.variable} ${opensans.variable} ${monts.variable}`}
      >
        <Providers>
          <div className=" bg-[#000000]">
            {children}
            <ToastContainer position="top-center" />
          </div>
        </Providers>
      </body>
    </html>
  );
}
