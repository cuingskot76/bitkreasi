import Image from "next/image";
import React from "react";
import Logo from "@/public/image.png";
import uiux from "@/public/uiux.png";

export const Service = () => {
  return (
    <div className="mx-10 my-16 bg-[#272E38] gap-20 rounded-[40px]">
      <div className="py-14 px-14 justify-between flex gap-14">
        <h1 className="text-white font-semibold text-5xl">TENTANG KAMI</h1>
        <div className="w-full">
          <Image src={Logo} alt="Logo" width={120} height={120} />
        </div>
        <p className="text-lg text-white">
          Bitkreasi adalah tim kreatif yang berfokus pada desain dan
          pengembangan produk digital. Kami berkomitmen untuk membantu bisnis
          dan individu menghadirkan ide-ide mereka ke dunia digital. Dengan
          pengalaman dan keahlian yang mendalam, kami mampu menghadirkan produk
          digital berkualitas tinggi yang memenuhi kebutuhan Anda.
        </p>
      </div>

      <div className=" border-t border-b-white pt-20 mx-14">
        <h1 className="text-center text-5xl text-white font-semibold pb-10">
          LAYANAN KAMI
        </h1>

        {/* Border bottom  */}

        <div className=" mt-10 flex gap-6 pb-14">
          <div className="bg-white flex-1 p-6 gap-5 rounded-3xl w-[424px] h-[447px]">
            {/* UIUX DESIGN */}
            <h2 className="font-medium text-[28px] text-[#272E38]">
              UI/UX DESIGN
            </h2>

            <div className="font-normal text-base">
              <div className="flex items-center ">
                <svg
                  width="10"
                  height="24"
                  viewBox="0 0 10 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="5" cy="12" r="5" fill="#FE9B53" />
                </svg>
                <p className="m-[10px] flex-wrap ">
                  Desain antarmuka pengguna yang menarik dan fungsional.
                </p>
              </div>
              <div className="flex items-center">
                <svg
                  width="10"
                  height="24"
                  viewBox="0 0 10 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="5" cy="12" r="5" fill="#FE9B53" />
                </svg>
                <p className="m-[10px] flex-wrap ">
                  Penelitian pengguna untuk memastikan pengalaman pengguna
                  terbaik.
                </p>
              </div>
              <div className="flex items-center">
                <svg
                  width="10"
                  height="24"
                  viewBox="0 0 10 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="5" cy="12" r="5" fill="#FE9B53" />
                </svg>
                <p className="m-[10px] flex-wrap ">
                  Prototipe interaktif untuk validasi konsep.
                </p>
              </div>
              <div className="h-[161px] overflow-hidden rounded-2xl mt-5">
                <Image
                  alt="uiux"
                  src={uiux}
                  width={1000}
                  height={1000}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* WEBSITE DEVELOPMENT */}

          <div className="bg-white flex-1 p-6 gap-5 rounded-3xl">
            <h2 className="font-medium text-[28px] text-[#272E38] border-b-gray-700">
              WEBSITE DEVELOPMENT
            </h2>
            <div className="font-normal text-base">
              <div className="flex items-center ">
                <svg
                  width="10"
                  height="24"
                  viewBox="0 0 10 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="5" cy="12" r="5" fill="#FE9B53" />
                </svg>
                <p className="m-[10px] flex-wrap ">
                  Pembuatan website responsif dan SEO-friendly.
                </p>
              </div>
              <div className="flex items-center">
                <svg
                  width="10"
                  height="24"
                  viewBox="0 0 10 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="5" cy="12" r="5" fill="#FE9B53" />
                </svg>
                <p className="m-[10px] flex-wrap ">
                  Pengembangan website e-commerce dan aplikasi web kustom.
                </p>
              </div>
              <div className="flex items-center">
                <svg
                  width="10"
                  height="24"
                  viewBox="0 0 10 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="5" cy="12" r="5" fill="#FE9B53" />
                </svg>
                <p className="m-[10px] flex-wrap ">
                  Integrasi sistem manajemen konten (CMS).
                </p>
              </div>
              <div className="h-[161px] overflow-hidden rounded-2xl mt-5">
                <Image
                  alt="uiux"
                  src={uiux}
                  width={1000}
                  height={1000}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* APP DEVELOPMENT */}
          <div className="bg-white flex-1 p-6 gap-5 rounded-3xl">
            <h2 className="font-medium text-[28px] text-[#272E38]">
              APP DEVELOPMENT
            </h2>
            <div className="font-normal text-base">
              <div className="flex items-center ">
                <svg
                  width="10"
                  height="24"
                  viewBox="0 0 10 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="5" cy="12" r="5" fill="#FE9B53" />
                </svg>
                <p className="m-[10px] flex-wrap ">
                  Pembuatan aplikasi mobile berkinerja tinggi (Android & iOS).
                </p>
              </div>
              <div className="flex items-center">
                <svg
                  width="10"
                  height="24"
                  viewBox="0 0 10 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="5" cy="12" r="5" fill="#FE9B53" />
                </svg>
                <p className="m-[10px] flex-wrap ">
                  Pengembangan aplikasi seluler cross-platform.
                </p>
              </div>
              <div className="flex items-center">
                <svg
                  width="10"
                  height="24"
                  viewBox="0 0 10 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="5" cy="12" r="5" fill="#FE9B53" />
                </svg>
                <p className="m-[10px] flex-wrap ">
                  Integrasi API dan layanan pihak ketiga.
                </p>
              </div>
              <div className="h-[161px] overflow-hidden rounded-2xl mt-5">
                <Image
                  alt="uiux"
                  src={uiux}
                  width={1000}
                  height={1000}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
