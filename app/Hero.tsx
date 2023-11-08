import Icon from "@/component/icon/Icon";
import React from "react";

const Hero = () => {
  return (
    <section className="mt-48 pb-20 ">
      <div className="max-w-[1384px] mx-auto text-center ">
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
      <div className="bg-greyscale fixed right-3 top-[352px] p-2 rounded-full flex flex-col gap-4 z-10">
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
      <div className="max-w-[146px] flex gap-3 ml-10 mt-2">
        <div className="animate-bounce">
          <Icon name="arrow-down" />
        </div>
        <span className="uppercase font-medium text-sm leading-[17.22px] text-base_black">
          Scroll untuk lebih lanjut
        </span>
      </div>

      {/* ticker-running */}
      <div className="flex overflow-hidden -rotate-2 pt-5">
        <div className="bg-secondary flex animate-ticker">
          <div className="flex text-white font-semibold text-2xl leading-[29.52px] w-full whitespace-nowrap py-6 uppercase ">
            <span>Ui Design</span>
            <div className="px-[10px]">
              <Icon name="star" />
            </div>
            <span>Front-End</span>
            <div className="px-[10px]">
              <Icon name="star" />
            </div>
            <span>Prototipe Interaktif</span>
            <div className="px-[10px]">
              <Icon name="star" />
            </div>
            <span>Ux Design</span>
            <div className="px-[10px]">
              <Icon name="star" />
            </div>
            <span>Aplikasi Mobile</span>
            <div className="px-[10px]">
              <Icon name="star" />
            </div>
            <span>Ios Development</span>
            <div className="px-[10px]">
              <Icon name="star" />
            </div>
            <span>Wireframing</span>
            <div className="px-[10px]">
              <Icon name="star" />
            </div>
            <span>Desain Responsif</span>
            <div className="px-[10px]">
              <Icon name="star" />
            </div>
            <span>Back-End</span>
            <div className="px-[10px]">
              <Icon name="star" />
            </div>
            <span>Integrasi API</span>
            <div className="px-[10px]">
              <Icon name="star" />
            </div>
          </div>
        </div>
        <div className="bg-secondary flex animate-ticker">
          <div className="flex text-white font-semibold text-2xl leading-[29.52px] w-full whitespace-nowrap py-6 uppercase">
            <span>Ui Design</span>
            <div className="px-[10px]">
              <Icon name="star" />
            </div>
            <span>Front-End</span>
            <div className="px-[10px]">
              <Icon name="star" />
            </div>
            <span>Prototipe Interaktif</span>
            <div className="px-[10px]">
              <Icon name="star" />
            </div>
            <span>Ux Design</span>
            <div className="px-[10px]">
              <Icon name="star" />
            </div>
            <span>Aplikasi Mobile</span>
            <div className="px-[10px]">
              <Icon name="star" />
            </div>
            <span>Ios Development</span>
            <div className="px-[10px]">
              <Icon name="star" />
            </div>
            <span>Wireframing</span>
            <div className="px-[10px]">
              <Icon name="star" />
            </div>
            <span>Desain Responsif</span>
            <div className="px-[10px]">
              <Icon name="star" />
            </div>
            <span>Back-End</span>
            <div className="px-[10px]">
              <Icon name="star" />
            </div>
            <span>Integrasi API</span>
            <div className="px-[10px]">
              <Icon name="star" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
