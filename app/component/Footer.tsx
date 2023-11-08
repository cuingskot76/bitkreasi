import Icon from "@/app/component/atom/icon/Icon";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="m-4 rounded-[40px] bg-base_black text-white">
      <div className="px-52 py-10 border-b border-greyscale_label">
        <div className="flex gap-32 justify-between">
          <div className="max-w-sm">
            <Icon name="bitkreasi" />
            <h5 className="font-semibold text-base  mt-8">Software Company</h5>
            <p className=" mt-4 text-base font-normal line-clamp-3">
              Hubungi kami sekarang untuk memulai perjalanan Anda menuju solusi
              digital yang luar biasa. Kami siap untuk mewujudkan ide-ide Anda
              menjadi kenyataan.
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-xl ">Perusahaan</h2>
            <div className=" flex flex-col gap-3 mt-3">
              <Link href={"/"}>Tentang Kami</Link>
              <Link href={"/"}>Layanan Kami</Link>
              <Link href={"/"}>Keunggulan Kami</Link>
              <Link href={"/"}>Projek</Link>
              <p className="">Kontak Kami</p>
            </div>
          </div>
          <div>
            <h2 className="font-semibold text-xl  mb-7">Kontak Kami</h2>
            <div className="flex flex-col gap-7">
              <div className="gap-2 flex text-center">
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
        </div>
      </div>
      <span className="text-sm flex justify-center py-10">
        Bitkreasi&copy; 2023 All right reserved
      </span>
    </div>
  );
}
