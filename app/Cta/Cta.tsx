"use client";

import React, { useState } from "react";

function Cta() {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="mx-10 mt-32 mb-10 bg-primary p-14 rounded-[40px]">
        <h2 className="font-medium text-[40px] leading-[49px] text-white border-b pb-10">
          PUNYA PROJEK MENARIK? <br />
          JANGAN RAGU UNTUK MENGHUBUNGI KITA!
        </h2>
        <div className="flex gap-4 pt-10">
          <button className="text-xl font-semibold py-4 px-8 text-primary gap-2 bg-white rounded-full">
            MULAI PROJEK BARU
          </button>
          <button
            className="text-xl font-semibold py-4 px-8 gap-2 rounded-full border border-white text-white hover:bg-blue-700 hover:border-blue-700 "
            onClick={openModal}
          >
            KIRIM EMAIL
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="p-8 rounded-lg max-w-md">
            <div>
              <input
                type="text"
                placeholder="Nama"
                className="w-full py-2 px-4 gap-2 mb-4 rounded-[4px]"
              />
              <input
                type="tel"
                placeholder="No Telepon"
                className="w-full py-2 px-4 gap-2 mb-4 rounded-[4px]"
              />
              <input
                type="tel"
                placeholder="Email"
                className="w-full py-2 gap-2 px-4 mb-4 rounded-[4px]"
              />
              <textarea
                placeholder="Pesan"
                className="w-full py-2 gap-2 px-4 mb-4 rounded-[4px]"
              />
              <button
                onClick={closeModal}
                className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 gap-2 rounded-xl"
              >
                Kirim
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cta;
