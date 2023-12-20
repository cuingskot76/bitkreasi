import Icon from "@/app/component/atom/icon/Icon";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="bg-base_black">
      <div className="max-w-7xl mx-auto md:px-4 px-8 py-6 rounded-xl md:rounded-[40px]  text-white">
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 lg:gap-32 lg:justify-center">
          <div>
            <div>
              <Icon name="bitkreasi" />
            </div>
            <div className="hidden md:block max-w-sm">
              <h5 className="font-semibold text-base md:text-lg mt-8">
                Software Company
              </h5>
              <p className=" mt-4 text-base font-normal">
                Hubungi kami sekarang untuk memulai perjalanan Anda menuju
                solusi digital yang luar biasa. Kami siap untuk mewujudkan
                ide-ide Anda menjadi kenyataan.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 lg:gap-32">
            <div className="flex flex-col gap-2 md:gap-5 lg:gap-7">
              <h2 className="font-semibold text-lg md:text-xl">Kontak Kami</h2>
              <div className="flex flex-col gap-2 lg:gap-7">
                <div className="text-sm gap-2 flex items-center">
                  <Icon name="location" />
                  Purwokerto
                </div>
                <div className="gap-2 flex items-center">
                  <Icon name="phone" />
                  0851-7510-5949
                </div>
                <div className="flex gap-2 items-center">
                  <Icon name="email" />
                  halo@bitkreasi.id
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 md:gap-5 lg:gap-7">
              <h2 className="font-semibold text-lg md:text-xl ">Perusahaan</h2>
              <div className=" flex flex-col gap-1 lg:gap-3">
                <Link href={"/"}>Tentang Kami</Link>
                <Link href={"/"}>Layanan Kami</Link>
                <Link href={"/"}>Keunggulan Kami</Link>
                <Link href={"/"}>Projek</Link>
                <p className="">Kontak Kami</p>
              </div>
            </div>
          </div>
        </div>
        <span className="text-sm md:text-base lg:text-lg flex justify-center mt-20 pt-2 md:pt-5 pb-6 border-t border-greyscale_label">
          Bitkreasi&copy; 2023 All right reserved
        </span>
      </div>
    </div>
  );
}
