"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Icon from "@/app/component/atom/icon/Icon";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPos, setCurrentPos] = useState(0);
  const [currentPostMobile, setCurrentPostMobile] = useState(0);

  const handleScroll = () => {
    setCurrentPos(window.scrollY);
    setCurrentPostMobile(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  let path = "";
  if (typeof window !== "undefined") {
    path = window.location.hash;
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50  ${
        isOpen ? "bg-white" : "backdrop-blur-md bg-opacity-5 "
      }`}
    >
      <nav className="max-w-7xl w-full mx-auto p-5 flex justify-between items-center">
        <div className="block md:hidden">
          <Link href={"/"} className={``}>
            <Icon name="bitkreasi-icon-2" />
          </Link>
        </div>
        <div className="hidden md:block">
          <Link href={"/"} className={``}>
            <Icon name="bitkreasi" />
          </Link>
        </div>

        <div className="hidden md:flex bg-greyscale text-lg rounded-full">
          <Link href={"/"}>
            <div
              className={` px-6 py-3 lg:px-8 lg:py-4 rounded-full  ${
                currentPos < 736 &&
                (path === "" || path === "#service" || path === "#project")
                  ? "active-link"
                  : ""
              }`}
            >
              Beranda
            </div>
          </Link>
          <Link href={"#service"}>
            <div
              className={` px-6 py-3 lg:px-8 lg:py-4 rounded-full ${
                currentPos >= 736 &&
                currentPos <= 2512 &&
                (path === "#service" || path === "" || path === "#project")
                  ? "active-link"
                  : ""
              }`}
            >
              Layanan
            </div>
          </Link>
          <Link href={"#project"}>
            <div
              className={` px-6 py-3 lg:px-8 lg:py-4 rounded-full ${
                currentPos >= 2512 &&
                (path === "#project" || path === "" || path === "#service")
                  ? "active-link"
                  : ""
              }`}
            >
              Projek Kami
            </div>
          </Link>
        </div>

        <a
          href={"mailto:halo@bitkreasi.id"}
          className="hidden md:block text-base_black text-lg px-6 py-3 lg:px-8 lg:py-4 rounded-full border-base_black border bg-white"
        >
          Hubungi Kami
        </a>

        <div className="flex md:hidden gap-2 items-center">
          <a
            href={"mailto:halo@bitkreasi.id"}
            className={`${
              isOpen ? "block" : "hidden"
            } text-base_black text-xs py-2 px-3 rounded-full border-base_black border bg-white`}
          >
            Hubungi Kami
          </a>

          {/* hamburger */}
          <div
            onClick={() => setIsOpen((prev) => !prev)}
            className={`${
              isOpen && "open"
            } flex flex-col items-center w-fit gap-[7px] cursor-pointer md:hidden z-50`}
          >
            <span className="transition-all duration-500 ease-in-out h-[2px] w-5 bg-base_black rounded-full"></span>
            <span className="transition-all duration-500 ease-in-out h-[2px] w-4 bg-base_black rounded-full"></span>
            <span className="transition-all duration-500 ease-in-out h-[2px] w-5 bg-base_black rounded-full"></span>
          </div>
        </div>
      </nav>

      {/* navbar-menu__mobile */}
      <div className={`fixed w-full md:hidden top-0 z-40`}>
        <div
          className={`flex flex-col absolute top-0 left-0 right-0 p-5 gap-6 bg-white border-t border-greyscale_label ${
            isOpen ? "translate-y-[74px]" : "-translate-y-[100%]"
          } transition-all duration-500 ease-in-out`}
        >
          <Link
            href={"/"}
            className={`${
              currentPostMobile < 644 && "text-sky-400"
            } text-base font-medium hover:text-sky-400 transition-all duration-200`}
            onClick={() => setIsOpen(false)}
          >
            Beranda
          </Link>
          <Link
            href={"#service"}
            className={`${
              currentPostMobile >= 644 &&
              currentPostMobile < 3025 &&
              "text-sky-400"
            } text-base font-medium hover:text-sky-400 transition-all duration-200`}
            onClick={() => setIsOpen(false)}
          >
            Layanan
          </Link>
          <Link
            href={"#project"}
            className={`${
              currentPostMobile >= 3025 && "text-sky-400"
            } text-base font-medium hover:text-sky-400 transition-all duration-200`}
            onClick={() => setIsOpen(false)}
          >
            Projek Kami
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
