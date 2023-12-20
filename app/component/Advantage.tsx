import React from "react";
import Icon from "./atom/icon/Icon";

const OurAdvantage = [
  {
    id: 1,
    title: "Tim Profesional",
    subTitle:
      "Kami memiliki tim yang terdiri dari desainer berbakat dan pengembang ahli yang berkomitmen untuk memberikan hasil terbaik.",
  },
  {
    id: 2,
    title: "Kustomisasi",
    subTitle:
      "Setiap proyek kami dibangun sesuai dengan kebutuhan klien dan fokus pada solusi khusus.",
  },
  {
    id: 3,
    title: "Inovasi Terbaru",
    subTitle:
      "Kami selalu mengikuti perkembangan terkini dalam dunia desain dan pengembangan untuk memberikan solusi terbaik.",
  },
  {
    id: 4,
    title: "Dukungan Pasca Penjualan",
    subTitle:
      "Kami tidak hanya menyelesaikan proyek, tetapi juga memberikan dukungan pascapenjualan yang berkelanjutan.",
  },
];

const Advantage = () => {
  return (
    <div className="max-w-7xl mx-auto px-5 lg:py-16 flex gap-3 md:gap-8 lg:gap-12 justify-between flex-col xl:flex-row">
      <div className="flex flex-col gap-5 max-w-md lg:max-w-3xl xl:max-w-md">
        <h3 className="uppercase text-xl md:text-2xl lg:text-5xl font-semibold">
          Keunggulan Kami
        </h3>
        <p className="hidden lg:block text-xl">
          Kami memahami bahwa setiap proyek unik dan memiliki kebutuhan khusus.
          Ini adalah beberapa keunggulan kami yang membedakan kami dari yang
          lain
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ">
        {OurAdvantage.map((advantage, i) => (
          <div
            key={advantage.id}
            className={`flex flex-col bg-base_black rounded-2xl lg:rounded-[30px] text-white relative overflow-hidden py-3 pr-6 pl-12 md:py-6 md:px-8 lg:p-8 h-[136px] md:h-full lg:h-[250px]`}
          >
            <div
              className={`${i === 0 && "lg:pl-16"} ${
                i === 1 && "lg:pl-16"
              } flex flex-col gap-2 lg:gap-4`}
            >
              <h5 className="text-base md:text-xl lg:text-[28px] lg:leading-[34px] font-medium uppercase">
                {advantage.title}
              </h5>
              <span className="text-sm md:text-base lg:text-xl font-normal">
                {advantage.subTitle}
              </span>
            </div>
            <div
              className={`absolute ${i === 0 && "-top-5 lg:top-10 left-0"} ${
                i === 1 && "bottom-0 left-0 h-10 lg:h-full lg:left-8"
              } ${i === 2 && "top-0 right-0"}  ${
                i === 3 && "right-0 lg:right-8 -bottom-5 lg:bottom-0"
              }`}
            >
              {i === 0 && <Icon name="substract-0" className="w-10 lg:w-20" />}
              {i === 1 && (
                <Icon
                  name="substract-1"
                  className="lg:bottom-0 left-0 absolute"
                />
              )}
              {i === 2 && (
                <Icon
                  name="substract-2"
                  className="w-12 lg:w-24 lg:-right-4 lg:absolute"
                />
              )}
              {i === 3 && <Icon name="substract-3" className="w-24 lg:w-52" />}
            </div>
            <div
              className={`absolute ${i === 0 && "-top-4 left-2 lg:top-5 "} ${
                i === 1 && "left-4 -bottom-3 lg:bottom-4"
              }  ${i === 2 && "right-3 top-4"}  ${
                i === 3 && "right-6 bottom-0 lg:bottom-1"
              }`}
            >
              {i === 0 && (
                <Icon name="align-right-0" className="w-10 lg:w-20" />
              )}
              {i === 1 && (
                <Icon name="align-right-1" className="w-10 lg:w-20" />
              )}
              {i === 2 && (
                <Icon name="align-right-2" className="w-10 lg:w-20" />
              )}
              {i === 3 && (
                <Icon name="align-right-3" className="w-10 lg:w-20" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Advantage;
