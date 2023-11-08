import React from "react";
import Link from "next/link";
import Icon from "@/component/icon/Icon";

const Navbar = () => {
  return (
    <nav
      className="max-w-[1512px] font-medium mx-auto px-10 py-5 flex justify-between items-center fixed top-0 w-full bg-white z-50  backdrop-blur-md 
    bg-opacity-60
    "
    >
      <Link href={"/"}>
        <Icon name="bitkreasi" />
      </Link>

      <div className="bg-greyscale text-lg rounded-full">
        <button className="bg-base_black text-white py-4 px-8 rounded-full">
          Beranda
        </button>
        <button className="px-8 py-4">Layanan</button>
        <button className="px-8 py-4">Projek Kami</button>
      </div>

      <div>
        <Link
          href={"/contact"}
          className="text-base_black text-lg py-4 px-8 rounded-full border-base_black border"
        >
          Hubungi Kami
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
