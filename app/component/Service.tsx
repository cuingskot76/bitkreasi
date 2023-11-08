import Image from "next/image";
import React from "react";
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
    <div className="mx-10 my-16 bg-base_black gap-20 rounded-[40px] p-14">
      <div className=" justify-between flex gap-16 pb-20">
        <h3 className="text-white font-semibold text-5xl leading-[59.04px]">
          TENTANG KAMI
        </h3>
        <div className="bg-white w-fit h-fit rounded-full">
          <Icon name="bitkreasi-icon" />
        </div>
        <p className="text-lg font-normal text-white">
          Bitkreasi adalah tim kreatif yang berfokus pada desain dan
          pengembangan produk digital. Kami berkomitmen untuk membantu bisnis
          dan individu menghadirkan ide-ide mereka ke dunia digital. Dengan
          pengalaman dan keahlian yang mendalam, kami mampu menghadirkan produk
          digital berkualitas tinggi yang memenuhi kebutuhan Anda.
        </p>
      </div>

      <div className=" border-t border-b-white pt-20 ">
        <h1 className="text-center text-5xl text-white font-semibold pb-10">
          LAYANAN KAMI
        </h1>

        <div className=" mt-10 flex gap-6 ">
          <div className="flex gap-6">
            {services.map((service) => {
              return (
                <div
                  key={service.id}
                  className="flex flex-col bg-white flex-1  rounded-3xl p-6"
                >
                  <h2 className="font-medium text-[28px] text-base_black pb-5 border-b border-greyscale_border">
                    {service.name}
                  </h2>
                  <div className="py-5 flex-1">
                    {service.data.map((data) => {
                      return (
                        <div
                          key={data}
                          className="flex items-center gap-[10px]"
                        >
                          <div>
                            <Icon name="dot" />
                          </div>
                          <p className="m-[10px] flex-wrap ">{data}</p>
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
