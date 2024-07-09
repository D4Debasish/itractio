"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const FloatingSection = () => {
  const path = usePathname();

  return (
    <nav
      className="fixed bottom-28 xl:bottom-6 left-1/2 transform -translate-x-1/2 flex justify-center py-2 max-w-[400px] w-[300px] rounded-lg h-[60px] z-40"
      style={{ borderRadius: "20px" }}
    >
      <Link
        href="/"
        className={`py-2 px-8 w-[150px] rounded-lg h-[40px] items-center font-semibold ${
          path === "/"
            ? "bg-gray-200 bg-opacity-30 backdrop-blur-lg text-white hover:bg-gray-200 hover:bg-opacity-40"
            : "bg-transparent backdrop-blur-lg text-white/40 hover:bg-opacity-40  hover:bg-white/30"
        }`}
        style={{ borderRadius: "20px" }}
      >
        Essentials
      </Link>
      <Link
        href="/Alpha"
        className={`py-2 px-8 w-[150px] rounded-lg h-[40px] items-center font-semibold ${
          path === "/Alpha"
            ? "bg-gray-200 bg-opacity-30 backdrop-blur-lg text-white hover:bg-gray-200 hover:bg-opacity-40"
            : "bg-transparent backdrop-blur-lg text-white/40 hover:bg-opacity-40 hover:bg-white/30"
        }`}
        style={{ borderRadius: "20px" }}
      >
        Alpha hub
      </Link>
    </nav>
  );
};

export default FloatingSection;
