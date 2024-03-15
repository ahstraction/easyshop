import type { Metadata } from "next";
import {
  Inter,
  Pacifico,
  Open_Sans,
  Tinos,
  Plus_Jakarta_Sans,
  Montserrat,
} from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
// const tinos = Tinos({
//   subsets: ["latin"],
//   variable: "--font-tinos",
//   weight: "400",
// });
const monts = Montserrat({
  subsets: ["latin"],
  variable: "--font-monts",
});
const jakrata = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakrata",
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
  title: "Pillie_Bop Productions",
  description: "Pillie_Bop Productions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${inter.variable} ${jakrata.variable} ${tinos.variable} ${pacifico.variable} ${opensans.variable} ${monts.variable}`}
      >
        <div className=" bg-[#121212]">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
