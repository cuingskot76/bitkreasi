import Icon from "@/component/icon/Icon";
import React from "react";

const tickerItems = [
  "Ui Design",
  "Front-End",
  "Prototipe Interaktif",
  "Ux Design",
  "Aplikasi Mobile",
  "Ios Development",
  "Wireframing",
  "Desain Responsife",
  "Back-End",
  "Integrasi API",
];

const Hero = () => {
  return (
    <section className="h-[20000px]">
      <div className="max-w-[1384px] mt-48 mx-auto text-center ">
        <span className="font-semibold text-[64px] leading-[78.72px] uppercase whitespace-break-spaces">
          Kami membuat aplikasi dan website dengan pengalaman produk yang hebat
        </span>
      </div>
      <div className="max-w-4xl text-lg mx-auto mt-4 text-center font-normal text-greyscale_label">
        <span>
          Kami adalah tim yang berdedikasi untuk mengubah ide-ide brilian Anda
          menjadi solusi digital yang luar biasa. <br /> Dari desain UI/UX yang
          memukau hingga pengembangan website dan aplikasi yang unik.
        </span>
      </div>
      <div className="flex justify-center mt-14 ">
        <button className="uppercase py-4 px-8 rounded-full bg-primary text-white font-semibold text-xl leading-[24.6px] ">
          Mulai project baru
        </button>
      </div>

      {/* social-media */}
      <div className="bg-greyscale fixed right-3 top-[352px] p-2 rounded-full flex flex-col gap-4">
        <div className="bg-greyscale_dark p-2 rounded-full overflow-hidden">
          <Icon name="instagram" />
        </div>
        <div className="bg-greyscale_dark p-2 rounded-full overflow-hidden">
          <Icon name="dribble" />
        </div>
        <div className="bg-greyscale_dark p-2 rounded-full overflow-hidden">
          <Icon name="linkedin" />
        </div>
      </div>

      {/* bottom-scroll */}
      <div className="max-w-[146px] flex gap-3 absolute left-10 top-[516px]">
        <div className="animate-bounce">
          <Icon name="arrow-down" />
        </div>
        <span className="uppercase font-medium text-sm leading-[17.22px] text-base_black">
          Scroll untuk lebih lanjut
        </span>
      </div>

      {/* ticker-running */}
      <div className="bg-sky-500 w-full flex flex-col">
        <div className="bg-secondary flex absolute top-[626px] -rotate-2 animate-ticker">
          {[...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems].map(
            (item, i) => (
              <div
                key={i}
                className="flex text-white font-semibold text-2xl leading-[29.52px] w-full whitespace-nowrap py-6"
              >
                <span>{item}</span>
                <div className="px-[10px]">
                  <Icon name="star" />
                </div>
              </div>
            )
          )}
        </div>
        <div className="bg-secondary flex absolute top-[626px] right-0 -rotate-2 animate-ticker">
          {[...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems].map(
            (item, i) => (
              <div
                key={i}
                className="flex text-white font-semibold text-2xl leading-[29.52px] w-full whitespace-nowrap py-6"
              >
                <span>{item}</span>
                <div className="px-[10px]">
                  <Icon name="star" />
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
