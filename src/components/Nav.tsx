"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    names: "Compass",
    link: "/Compass",
  },
  {
    names: "Explore",
    link: "/Explore",
  },
  {
    names: "Academy",
    link: "/",
  },
  {
    names: "NFTs",
    link: "/Nfts",
  },
  {
    names: "For Projects",
    link: "/Projectss",
  },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <div className="flex">
      <ul className="flex gap-4 px-3 text-md">
        {links.map((item, key) => {
          return (
            <Link
              href={item.link}
              key={key}
              className={`${
                item.link === pathname && "text-white border-b-4 border-white"
              }`}
            >
              <h1 className="text-md text-white/60 hover:text-gray-100 transition-all active:text-white">
                {item.names}
              </h1>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Nav;
