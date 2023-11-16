import Icon from "@/app/component/atom/icon/Icon";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="mx-2 px-8 py-6 rounded-[40px] bg-base_black text-white">
      <div className="flex flex-col gap-6">
        <div className="">
          <Icon name="bitkreasi" />
          <div className="hidden">
            <h5 className="font-semibold text-base  mt-8">Software Company</h5>
            <p className=" mt-4 text-base font-normal line-clamp-3">
              Hubungi kami sekarang untuk memulai perjalanan Anda menuju solusi
              digital yang luar biasa. Kami siap untuk mewujudkan ide-ide Anda
              menjadi kenyataan.
            </p>
          </div>
        </div>
        <div>
          <h2 className="hidden font-semibold text-xl  mb-7">Kontak Kami</h2>
          <div className="flex flex-col gap-2 lg:gap-7">
            <div className="text-sm gap-2 flex items-center">
              <Icon name="location" />
              Purwokerto
            </div>
            <div className="gap-2 flex items-center">
              <Icon name="phone" />
              (+62) 812 - 98** - 25**
            </div>
            <div className="flex gap-2 items-center">
              <Icon name="email" />
              bitkreasi@bitkreasi.id
            </div>
          </div>
        </div>
        <div>
          <h2 className="font-semibold text-base lg:text-xl ">Perusahaan</h2>
          <div className=" flex flex-col gap-1 lg:gap-3 mt-3">
            <Link href={"/"}>Tentang Kami</Link>
            <Link href={"/"}>Layanan Kami</Link>
            <Link href={"/"}>Keunggulan Kami</Link>
            <Link href={"/"}>Projek</Link>
            <p className="">Kontak Kami</p>
          </div>
        </div>
      </div>
      <span className="text-sm flex justify-center mt-20 pt-2 pb-6 border-t border-greyscale_label">
        Bitkreasi&copy; 2023 All right reserved
      </span>
    </div>
  );
}
