"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import example from "@/public/project.webp";

export default function Project() {
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div
      id="project"
      className="max-w-7xl mx-auto px-5 lg:px-10 my-16 flex flex-col gap-3 md:gap-8 lg:gap-10"
    >
      <h1 className="font-semibold text-center  text-xl md:text-2xl lg:text-5xl">
        PROJEK FAVORIT KAMI
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-7">
        <motion.div initial="hidden" animate="visible" variants={imageVariants}>
          <Image
            alt="project"
            src={example}
            className="rounded-xl lg:rounded-3xl"
          />
        </motion.div>
        <motion.div initial="hidden" animate="visible" variants={imageVariants}>
          <Image
            alt="project"
            src={example}
            className="rounded-xl lg:rounded-3xl"
          />
        </motion.div>
        <motion.div initial="hidden" animate="visible" variants={imageVariants}>
          <Image
            alt="project"
            src={example}
            className="rounded-xl lg:rounded-3xl"
          />
        </motion.div>
        <motion.div initial="hidden" animate="visible" variants={imageVariants}>
          <Image
            alt="project"
            src={example}
            className="rounded-xl lg:rounded-3xl"
          />
        </motion.div>
      </div>
      <style jsx global>{`
        .image-item {
          overflow: hidden;
        }
        .image-item > div {
          transform: scale(1);
          transition: transform 0.6s ease;
        }
        .image-item:hover > div {
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
}
