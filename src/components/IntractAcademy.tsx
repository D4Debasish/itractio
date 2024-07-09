"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const IntractAcademy = () => {
  return (
    <motion.div
      animate={{ opacity: [1, 1, 0, 0] }}
      transition={{
        duration: 21,
        times: [0, 20 / 21, 20 / 21, 1],
        repeat: Infinity,
      }}
      style={{
        display: "inline-block",
      }}
      className="flex flex-col"
    >
      <h3 className=" text-md xl:text-xl text-start text-white/60">Intract</h3>
      <h1 className=" text-4xl xl:text-5xl font-bold italic text-start">
        Academy
      </h1>
      <div className=" mt-2 flex items-center gap-3">
        <hr className="w-full bg-white " />
        <h1 className="text-2xl text-white/60">⁕</h1>
      </div>
    </motion.div>
  );
};

export default IntractAcademy;
