"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card"; // Assuming Card components are imported correctly
import Image from "next/image";
import { FaCirclePlay } from "react-icons/fa6";
import { IoBookOutline } from "react-icons/io5";

const cards = [
  {
    image: "/assets/bit2.jpg",
    desc: "How to plan your retirement with crypto?",
  },
  {
    image: "/assets/bit1.jpg",
    desc: "Why are there limited Bitcoin?",
  },
  {
    image: "/assets/bit3.jpg",
    desc: "How does Uniswap actually work?",
  },
  {
    image: "/assets/bit4.jpg",
    desc: "How to spot crypto projects to invest in?",
  },
];

const Creators = () => {
  return (
    <section className="flex flex-col gap-4 mx-10 justify-center xl:mx-0 xl:justify-normal xl:mt-14 mt-20">
      <div className="flex flex-col items-center ">
        <h1 className="xl:text-2xl text-white font-semibold items-center text-[19px]">
          Top Crypto Creators and Projects to Follow
        </h1>
        <p className="text-white/60 xl:text-sm  text-[11px] ">
          Answers to your crypto doubts, straight from the experts
        </p>
      </div>

      <div className=" flex flex-wrap">
        {cards.map((item, key) => (
          <Card
            key={key}
            className="relative flex flex-col gap-1 mx-10 mt-10 w-[400px] h-[400px] xl:m-2 xl:w-[300px] xl:h-[400px] rounded-lg overflow-hidden cursor-pointer hover:opacity-80"
            style={{ border: "solid black", borderRadius: "19px" }}
          >
            <CardContent className="relative w-full h-full">
              <div className="absolute inset-0 flex items-end">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  style={{ objectFit: "cover" }}
                  quality={80}
                  className="rounded-t-lg"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <FaCirclePlay className="text-gray-600 bg-gray text-5xl" />
              </div>
              <p className="absolute bottom-0 left-0 right-0 bg-transparent backdrop-blur bg-gray-600 bg-opacity-10  text-white text-xl font-bold p-2">
                {item.desc}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16 flex flex-col items-center">
        <h1 className="text-2xl text-white font-semibold">Crypto Dictionary</h1>
        <p className="text-white/60 text-sm">
          Your one-stop to catch up on all crypto terms
        </p>
      </div>

      <div className="relative mt-4">
        <Image
          src="https://static.highongrowth.xyz/enterprise/660ed0280f5e5a9e8238d0f5/2e422c461a9a447b8c67c5642f6bf0fd.svg"
          alt=""
          width={100}
          height={100}
          className="w-full h-full object-cover rounded-2xl"
        />
        <div className="absolute bottom-0 left-0 p-4 text-white">
          <h1 className="text-2xl font-bold text-white/50">
            Web3 + Degen Glossary
          </h1>
          <p className="text-md text-white/40">Your own crypto dictionary</p>
        </div>
        <div
          className="absolute bottom-5 right-5 p-4 bg-opacity-50  backdrop-blur-lg bg-black/30"
          style={{ borderRadius: "50px" }}
        >
          <IoBookOutline className="text-3xl " />
        </div>
      </div>
    </section>
  );
};

export default Creators;
