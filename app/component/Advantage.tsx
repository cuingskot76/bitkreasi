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
    <div className="mx-10 my-32 flex gap-12 justify-between">
      <div className="flex flex-col gap-5 max-w-md">
        <h3 className="uppercase text-5xl font-semibold leading-[59.04px]">
          Keunggulan Kami
        </h3>
        <p className="text-xl">
          Kami memahami bahwa setiap proyek unik dan memiliki kebutuhan khusus.
          Ini adalah beberapa keunggulan kami yang membedakan kami dari yang
          lain
        </p>
      </div>
      <div className="grid grid-cols-2 gap-3 max-w-[912px]">
        {OurAdvantage.map((advantage, i) => (
          <div
            key={advantage.id}
            className={`flex flex-col bg-base_black mt-5 rounded-[30px] text-white relative overflow-hidden p-8 `}
          >
            <div
              className={`${i === 0 && "pl-28"} ${i === 1 && "pl-16"} ${
                i === 2 && "max-w-[303px]"
              } flex flex-col gap-4`}
            >
              <h5 className="text-[28px] leading-[34px] font-medium uppercase">
                {advantage.title}
              </h5>
              <span className="text-xl">{advantage.subTitle}</span>
            </div>
            <div
              className={`absolute ${i === 0 && "top-10 left-0"} ${
                i === 1 && "bottom-0  left-8"
              } ${i === 2 && "right-0"}  ${i === 3 && "right-8 bottom-0"}`}
            >
              {i === 0 && <Icon name="substract-0" />}
              {i === 1 && <Icon name="substract-1" />}
              {i === 2 && <Icon name="substract-2" />}
              {i === 3 && <Icon name="substract-3" />}
            </div>
            <div
              className={`absolute ${i === 0 && "top-5 left-8"} ${
                i === 1 && "left-4 bottom-4"
              }  ${i === 2 && "right-3 top-4"}  ${
                i === 3 && "right-6 bottom-1"
              }`}
            >
              {i === 0 && <Icon name="align-right-0" />}
              {i === 1 && <Icon name="align-right-1" />}
              {i === 2 && <Icon name="align-right-2" />}
              {i === 3 && <Icon name="align-right-3" />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Advantage;
