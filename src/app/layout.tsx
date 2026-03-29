import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { manropeFont } from "./fonts";

export const metadata: Metadata = {
  title: "Mereillion",
  description: "Mereillion Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${manropeFont.variable}`}>
      <body className={manropeFont.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
