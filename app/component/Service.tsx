import Image from "next/image";
import React, { useContext } from "react";
import Logo from "@/public/image.png";
import uiux from "@/public/uiux.png";
import Icon from "@/app/component/atom/icon/Icon";

const services = [
  {
    id: 1,
    name: "UI/UX Design",
    data: [
      "Desain antarmuka pengguna yang menarik dan fungsional.",
      "Penelitian pengguna untuk memastikan pengalaman pengguna terbaik.",
      "Prototipe interaktif untuk validasi konsep.",
    ],
    image: uiux,
  },
  {
    id: 2,
    name: "Website Development",
    data: [
      "Pembuatan website responsif dan SEO-friendly.",
      "Pengembangan website e-commerce dan aplikasi web kustom.",
      "Integrasi sistem manajemen konten (CMS).",
    ],
    image: uiux,
  },
  {
    id: 3,
    name: "App Development",
    data: [
      "Pembuatan aplikasi mobile berkinerja tinggi (Android & iOS).",
      "Pengembangan aplikasi seluler cross-platform.",
      "Integrasi API dan layanan pihak ketiga.",
    ],
    image: uiux,
  },
];

const Service = () => {
  return (
    <div className="mx-5 lg:mx-10 my-14 lg:my-16 bg-base_black gap-20 rounded-[40px] px-5 py-6 lg:p-14">
      <div className="flex flex-col justify-between gap-3 lg:gap-16">
        <h3 className="text-white text-center font-semibold text-xl lg:text-5xl lg:leading-[59.04px]">
          TENTANG KAMI
        </h3>
        <div className="hidden lg:block bg-white w-fit h-fit rounded-full">
          <Icon name="bitkreasi-icon" />
        </div>
        <p className="text-base lg:text-lg font-normal text-white">
          Bitkreasi adalah tim kreatif yang berfokus pada desain dan
          pengembangan produk digital. Kami berkomitmen untuk membantu bisnis
          dan individu menghadirkan ide-ide mereka ke dunia digital. Dengan
          pengalaman dan keahlian yang mendalam, kami mampu menghadirkan produk
          digital berkualitas tinggi yang memenuhi kebutuhan Anda.
        </p>
      </div>

      <div id="service" className=" border-t border-b-white mt-9 pt-3">
        <h1 className="text-center text-xl lg:text-5xl text-white font-semibold">
          LAYANAN KAMI
        </h1>

        <div className="mt-3 lg:mt-10 flex gap-6 ">
          <div className="grid grid-cols-1 mx-auto md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6 ">
            {services.map((service) => {
              return (
                <div
                  key={service.id}
                  className="flex flex-col bg-white flex-1  rounded-3xl py-6 px-3"
                >
                  <h2 className="font-medium text-[28px] text-base_black pb-3 lg:pb-5 border-b border-greyscale_border uppercase">
                    {service.name}
                  </h2>
                  <div className="py-3 lg:py-5 flex-1">
                    {service.data.map((data) => {
                      return (
                        <div
                          key={data}
                          className="flex mb-3 items-center gap-[10px]"
                        >
                          <div>
                            <Icon name="dot" />
                          </div>
                          <p className="text-sm  lg:text-base flex-wrap ">
                            {data}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                  <div className=" min-h-40 rounded-2xl overflow-hidden">
                    <Image
                      alt={service.name}
                      src={service.image}
                      width={1000}
                      height={1000}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
