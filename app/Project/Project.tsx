"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import example from "@/public/project.jpg";

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
    <div className="mx-10 my-16">
      <h1 className="font-semibold text-5xl">PROJEK FAVORIT KAMI</h1>
      <div className="grid grid-cols-2 mt-10 gap-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={imageVariants}
          className="image-item"
        >
          <Image alt="project" src={example} className="rounded-3xl" />
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={imageVariants}
          className="image-item"
        >
          <Image alt="project" src={example} className="rounded-3xl" />
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={imageVariants}
          className="image-item"
        >
          <Image alt="project" src={example} className="rounded-3xl" />
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={imageVariants}
          className="image-item"
        >
          <Image alt="project" src={example} className="rounded-3xl" />
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
