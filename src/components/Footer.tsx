"use client";
import Link from "next/link";
import React from "react";
import { FaTwitter, FaDiscord, FaTelegram, FaSpotify } from "react-icons/fa";

const Footer = () => {
  const intract = {
    name: "intract.",
    linkTo: "/",
    desc: "We are your personal guide for exploring web3 projects & earning 100x rewards",
  };

  const int = {
    name: "INTRACT",
    subs: [
      {
        names: "Explore quests",
        link: "/",
      },
      {
        names: "Communities",
        link: "/",
      },
      {
        names: "Alpha hub",
        link: "/",
      },
    ],
  };

  const earn = {
    name: "EARN",
    subs: [
      {
        names: "Refer & Learn",
        link: "/",
      },
      {
        names: "Leaderboard",
        link: "/",
      },
      {
        names: "Achievement",
        link: "/",
      },
    ],
  };

  const about = {
    name: "ABOUT",
    subs: [
      {
        names: "Product Roadmap",
        link: "/",
      },
      {
        names: "Affiliate Program",
        link: "/",
      },
      {
        names: "Sign up Program",
        link: "/",
      },
      {
        names: "Growth Community",
        link: "/",
      },
      {
        names: "Blogs",
        link: "/",
      },
    ],
  };

  const support = {
    name: "SUPPORT",
    subs: [
      {
        names: "Help Center",
        link: "/",
      },
      {
        names: "Create your quests",
        link: "/",
      },
      {
        names: "Terms of service",
        link: "/",
      },
      {
        names: "Privacy Policy",
        link: "/",
      },
      {
        names: "Community Guidelines",
        link: "/",
      },
    ],
  };

  return (
    <footer className="flex flex-col items-center">
      {/* Links */}
      <div className="flex justify-center  flex-wrap xl:flex-row xl:justify-normal xl:gap-20  gap-16 max-w-6xl w-full mt-10 mb-6">
        {/* intract. */}
        <div className="flex flex-col gap-3 max-w-[300px] mx-1 xl:mx-0">
          <Link href={intract.linkTo} className="text-2xl font-bold ">
            {intract.name}
          </Link>
          <h1 className="text-white/50 xl:text-sm text-wrap text-[15px] ">
            {intract.desc}
          </h1>
        </div>

        {/* Intract */}
        <div className="flex flex-col gap-3">
          <h1 className="text-sm font-semibold">{int.name}</h1>
          <ul className="text-white/50 flex flex-col gap-2 ">
            {int.subs.map((item, key) => (
              <li key={key} className="text-[13px] hover:text-white">
                <Link href={item.link}>{item.names}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Earn */}
        <div className="flex flex-col gap-3">
          <h1 className="text-sm font-semibold">{earn.name}</h1>
          <ul className="text-white/50 flex flex-col gap-2">
            {earn.subs.map((item, key) => (
              <li key={key} className="text-[13px] hover:text-white">
                <Link href={item.link}>{item.names}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* About */}
        <div className="flex flex-col gap-3">
          <h1 className="text-sm font-semibold">{about.name}</h1>
          <ul className="text-white/50 flex flex-col gap-2">
            {about.subs.map((item, key) => (
              <li key={key} className="text-[13px] hover:text-white">
                <Link href={item.link}>{item.names}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div className="flex flex-col gap-3">
          <h1 className="text-sm font-semibold">{support.name}</h1>
          <ul className="text-white/50 flex flex-col gap-2">
            {support.subs.map((item, key) => (
              <li key={key} className="text-[13px] hover:text-white">
                <Link href={item.link}>{item.names}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-white/20 h-px w-full mb-6"></div>
      <div className="text-sm max-w-1xl xl:max-w-6xl w-full mb-6 mt-3">
        <p className="text-start text-white/50">
          <span className="text-white">Disclaimer:</span> Crypto Products,
          Virtual Digital Assets, and NFTs are unregulated and can be highly
          risky. There may be no regulatory recourse for any loss from such
          transactions. We advise the viewer to proceed with caution. Nothing in
          this website or any communication published by us amounts to, is
          intended to be, or should be construed as investment or purchase
          advice of any kind or financial advice or promotion under any
          applicable laws. Any decision made based on the content provided on
          this website or any communication published by us shall not be
          attributable to us.
        </p>
      </div>
      <div className="bg-white/20 h-px w-full mb-6"></div>

      {/* Social */}
      <div className="flex flex-col xl:justify-between xl:flex-row items-center w-full px-1 xl:mt-10 mt-3 xl:mb-0 mb-10 gap-1 xl:gap-10">
        <h1 className="text-white text-sm xl:text-md">
          CREATED BY <span className=" underline cursor-pointer">INTRACT</span>{" "}
        </h1>
        <div className="flex flex-row gap-4 xl:gap-8 r">
          <div className="text-xl xl:text-2xl bg-gray-800 text-blue-600   ">
            <FaTwitter className="cursor-pointer" />
          </div>
          <div className="text-xl xl:text-2xl  bg-gray-800 text-cyan-700  ">
            <FaDiscord className="cursor-pointer" />
          </div>
          <div className="text-xl xl:text-2xl bg-gray-800 text-blue-500 ">
            <FaTelegram className="cursor-pointer" />
          </div>
          <div className="text-xl xl:text-2xl bg-gray-800 text-green-600  ">
            <FaSpotify className="cursor-pointer" />
          </div>
        </div>
      </div>
      <br />
    </footer>
  );
};

export default Footer;
