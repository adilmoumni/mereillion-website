import localFont from "next/font/local";
import { Manrope } from "next/font/google";

export const manropeFont = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const cabinetGrotesk = localFont({
  src: [
    {
      path: "../assets/fonts/CabinetGrotesk-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/CabinetGrotesk-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/CabinetGrotesk-Medium.otf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-cabinet",
});

export const jost = localFont({
  src: "../assets/fonts/Jost-VariableFont_wght.ttf",
  variable: "--font-jost",
});
