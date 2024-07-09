"use client";
import React, { useState } from "react";
import IntractAcademy from "./IntractAcademy";
import { Button } from "./ui/button";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperInstance } from "swiper";
import "swiper/css";
import Swipershow from "./Swipershow";

const projects = [
  {
    title: "Introduction to Zest Protocol",
    description:
      "Zest Protocol is a decentralized lending platform on Bitcoin, offering transparent, on-chain credit solutions. It connects borrowers and lenders directly, enabling access to Bitcoin-native capital markets with secure, efficient, and permissionless financial services.  ",
    image: "/assets/zest.png",
  },
  {
    title: "Exploring Sui Network",
    description:
      "Explore the Sui Network, a decentralized blockchain platform designed for high-speed, secure transactions. It offers scalable infrastructure for dApps, smart contracts, and DeFi, enabling developers and users to create and engage in innovative digital solutions efficiently.  ",
    image: "/assets/sui.png",
  },
  {
    title: "Introduction to Squid Router",
    description:
      "SquidRouter is a Web3 dApp enabling seamless cross-chain swaps and liquidity management. It connects multiple blockchains, allowing users to trade assets efficiently and securely across diverse networks, enhancing interoperability and optimizing decentralized finance (DeFi) experiences.  ",
    image: "/assets/parcl.png",
  },
  {
    title: "Introduction To Farcaster",
    description:
      "Farcaster is a decentralized social network built on open protocols. It empowers users to own their identity, content, and social connections, giving them control over their online presence in a secure and transparent way. ",
    image: "/assets/far.jpg",
  },
  {
    title: "Introduction to Okto Wallet",
    description:
      "Okto is a decentralized finance (DeFi) wallet by CoinDCX that provides a user-friendly platform to explore the Web3 ecosystem. With Okto, you can securely manage your crypto assets, swap tokens, access various DeFi protocols, and earn passive income. It's a one-stop shop for all your DeFi needs ",
    image: "/assets/okto.jpg",
  },
  {
    title: "PARCL Real Estate",
    description:
      " Where real estate meets crypto magic! Engage with PARCL protocols and unlock the door to a world of perpetuals trading and liquidity + qualify for future drops via your on-chain reputation 🏠🌟  ",
    image: "/assets/parcl.png",
  },
  {
    title: "StarryNift Ecosystem",
    description:
      "StarryNift, the largest 3D social network, invites you to explore immersive worlds. A gamified metaverse co-creation platform where you play, create, and socialize. Unleash creativity, connect, and democratize value appreciation through crypto as DAO. 🌐🔍🚀 ",
    image: "/assets/starry.jpg",
  },
];

const Alphahero = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper: SwiperInstance) => {
    const currentIndex: number = swiper.activeIndex;
    const currentProject = projects[currentIndex];
    setProject(currentProject);
  };

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex flex-col items-center justify-center xl:mb-20 mb-10"
      style={{
        backgroundImage:
          'url("https://www.intract.io/assets/intract-academy-background-5547a705.png")',
      }}
    >
      <div className="absolute top-2 flex flex-col items-center justify-center text-white text-center xl:mb-20 mt-10 mb-10">
        <IntractAcademy />
        <Image
          src="/assets/cool.svg"
          alt="SVG Description"
          width={100}
          height={100}
          className="absolute top-[60px] left-[200px] "
        />
      </div>
      <div className="w-full xl:w-[80%] mt-24 absolute top-[200px]">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          className="xl:h-[520px] mb-12"
          onSlideChange={handleSlideChange}
          style={{ borderRadius: "10px" }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index} className="w-full">
              <div className=" h-[300px] xl:h-[400px] relative group flex bg-gray-50/10">
                {/* Image Container */}
                <div className="relative w-1/2 h-full">
                  <Image
                    src={project.image}
                    alt=""
                    className="object-cover"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>

                {/* Content Container */}
                <div className="flex flex-col  items-start w-1/2 p-4 ">
                  <h2 className="text-md xl:text-3xl font-bold">
                    {project.title}
                  </h2>
                  <p className="text-[10px] mt-2 xl:text-md text-white/60">
                    {project.description}
                  </p>
                  <div className="bg-white/20 h-px w-full mt-6"></div>
                  <Button className="bg-purple-600 mt-10 text-white h-[50px] w-[200px] rounded-xl cursor-pointer ">
                    Begin your Journey
                  </Button>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <Swipershow />
        </Swiper>
      </div>
    </div>
  );
};

export default Alphahero;
