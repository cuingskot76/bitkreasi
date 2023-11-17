import React from "react";

function Cta() {
  return (
    <div className="lg:pt-16">
      <div className="mx-5 lg:mx-10 mb-2 md:mb-8 bg-primary p-7 lg:p-14 rounded-3xl lg:rounded-[40px]">
        <h2 className="font-medium text-center lg:text-start text-xl md:text-2xl  lg:text-[40px] lg:leading-[49px] text-white border-b pb-6 lg:pb-10">
          PUNYA PROJEK MENARIK? <br />
          JANGAN RAGU UNTUK MENGHUBUNGI KAMI!
        </h2>
        <div className="flex flex-col lg:flex-row items-center gap-4 pt-6 lg:pt-10">
          <button className="w-36 md:w-fit text-xs lg:text-xl font-semibold py-[10px] px-[6px] md:py-4 md:px-8 text-primary gap-2 bg-white rounded-full">
            MULAI PROJEK BARU
          </button>
          <button className="w-36 lg:w-fit text-xs lg:text-xl font-semibold py-[10px] px-[6px] lg:py-4 lg:px-8 gap-2 rounded-full border border-white text-white hover:bg-blue-700 hover:border-blue-700 ">
            KIRIM EMAIL
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cta;
