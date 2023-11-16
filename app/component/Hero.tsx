import Icon from "@/app/component/atom/icon/Icon";

const tickerData = [
  "Ui Design",
  "Front-End",
  "Prototipe Interaktif",
  "Ux Design",
  "Aplikasi Mobile",
  "Ios Development",
  "Wireframing",
  "Desain Responsif",
  "Back-End",
  "Integrasi API",
];

const Hero = () => {
  return (
    <section className="mt-24 md:mt-36 lg:mt-48 pb-20 ">
      <div className=" px-5 ">
        <div className="max-w-[1384px] mx-auto text-center ">
          <span className="font-semibold text-3xl md:text-5xl lg:text-[64px] lg:leading-[78.72px] uppercase whitespace-break-spaces">
            Kami membuat aplikasi dan website dengan pengalaman produk yang
            hebat
          </span>
        </div>
        {/* CHANGE: in the design when mobile, font-size is text-sm */}
        {/* CHANGE: in the design when default(windows), font-size is text-lg */}
        <div className="max-w-4xl text-lg lg:text-xl mx-auto mt-3 lg:mt-4 text-center font-normal text-greyscale_label">
          <span>
            {/* Kami adalah tim yang berdedikasi untuk mengubah ide-ide brilian Anda
          menjadi solusi digital yang luar biasa. <br /> Dari desain UI/UX yang
          memukau hingga pengembangan website dan aplikasi yang unik. */}
            Kami adalah tim yang berdedikasi untuk mengubah ide-ide brilian Anda
            menjadi solusi digital yang luar biasa. Dari desain UI/UX yang
            memukau hingga pengembangan website dan aplikasi yang unik.
          </span>
        </div>
        <div className="flex justify-center mt-10 ">
          <button className="uppercase py-3 px-[18px] lg:py-4 lg:px-8 rounded-full bg-primary text-white font-medium lg:font-semibold text-xl ">
            Mulai project baru
          </button>
        </div>
      </div>

      {/* social-media */}
      <div className="hidden lg:flex bg-greyscale fixed right-3 top-[352px] p-2 rounded-full flex-col gap-4 z-10">
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
      <div className="hidden lg:flex max-w-[146px] gap-3 ml-10 mt-2">
        <div className="animate-bounce">
          <Icon name="arrow-down" />
        </div>
        <span className="uppercase font-medium text-sm leading-[17.22px] text-base_black">
          Scroll untuk lebih lanjut
        </span>
      </div>

      {/* ticker-running */}
      <div className="flex overflow-hidden -rotate-2 mt-10 lg:mt-5 bg-secondary">
        <div className="flex animate-ticker">
          {tickerData.map((item, index) => {
            return (
              <div
                key={index}
                className="flex text-white items-center font-semibold text-sm lg:text-2xl w-full whitespace-nowrap py-2 lg:py-6 uppercase "
              >
                <span>{item}</span>
                <div className="px-2 lg:px-[10px]">
                  <Icon
                    name="star"
                    className="w-[14px] h-[14px] lg:w-7 lg:h-7"
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex animate-ticker">
          {tickerData.map((item, index) => {
            return (
              <div
                key={index}
                className="flex text-white items-center font-semibold text-sm lg:text-2xl w-full whitespace-nowrap py-2 lg:py-6 uppercase "
              >
                <span>{item}</span>
                <div className="px-2 lg:px-[10px]">
                  <Icon
                    name="star"
                    className="w-[14px] h-[14px] lg:w-7 lg:h-7"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
