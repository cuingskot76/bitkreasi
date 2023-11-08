import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { Navbar } from "@/app/component";

const clashGrotesk = localFont({
  src: [
    {
      path: "../public/font/ClashGrotesk-Regular.otf",
      style: "normal",
      weight: "400",
    },
    {
      path: "../public/font/ClashGrotesk-Medium.otf",
      style: "normal",
      weight: "500",
    },
    {
      path: "../public/font/ClashGrotesk-Semibold.otf",
      style: "normal",
      weight: "600",
    },
  ],
});

export const metadata: Metadata = {
  title: "bitkreasi - We build great products",
  description:
    "Kami membuat aplikasi dan website dengan pengalaman produk yang hebat",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clashGrotesk.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
